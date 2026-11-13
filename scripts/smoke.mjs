/** Minimal HTTP smoke checks for the actual currently published foundation. */
import assert from 'node:assert/strict';

const origin = (process.env.SMOKE_BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
async function get(path, redirect = 'follow') {
  return fetch(origin + path, { redirect, signal: AbortSignal.timeout(15000) });
}
async function expectStatus(path, expected) {
  const response = await get(path);
  assert.equal(response.status, expected, `${path}: HTTP ${response.status}, expected ${expected}`);
  console.log('PASS', path);
  return response;
}
for (const [locale, dir] of [['en', 'ltr'], ['ar', 'rtl']]) {
  const response = await expectStatus(`/${locale}`, 200);
  const html = await response.text();
  assert.match(html, new RegExp(`<html[^>]*lang="${locale}"[^>]*dir="${dir}"`));
  assert.match(html, /INBS/);
  assert.match(html, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/);
  assert.match(html, /\/brand\/inbs-logo\.png/);
  assert.match(response.headers.get('x-content-type-options') || '', /nosniff/);
}
const root = await get('/', 'manual');
assert.ok([307, 308].includes(root.status), `root redirect: HTTP ${root.status}`);
assert.equal(new URL(root.headers.get('location'), origin).pathname, '/en');
console.log('PASS root redirect');
const robots = await expectStatus('/robots.txt', 200);
assert.match(await robots.text(), /Disallow: \/(?:\r?\n|$)/i);
const sitemap = await expectStatus('/sitemap.xml', 200);
assert.doesNotMatch(await sitemap.text(), /<url>/);
const icon = await expectStatus('/icon', 200);
assert.match(icon.headers.get('content-type') || '', /image\/png/i);
for (const path of ['/en/unknown-page', '/ar/unknown-page']) await expectStatus(path, 404);
console.log('All foundation smoke checks passed');
