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
  assert.match(html, /id="re-hero-title"/);
  assert.doesNotMatch(html, /id="re-intro-title"/);
  assert.doesNotMatch(html, /id="re-expertise-title"/);
  assert.doesNotMatch(html, /id="re-journey-title"/);
  assert.match(html, /id="statement"/);
  assert.match(html, /id="re-contact-title"/);
  assert.match(html, /inbs-editorial-cta--home/);
  assert.match(html, /inbs-editorial-cta-primary/);
  assert.match(html, /inbs-editorial-cta-secondary/);
  assert.match(html, /class="inbs-footer"/);
  assert.match(html, /class="inbs-footer-grid"/);
  assert.match(html, /class="inbs-footer-watermark"/);
  assert.match(html, /class="inbs-footer-skyline"/);
  assert.doesNotMatch(html, /class="inbs-footer-glow"/);
  assert.match(html, new RegExp(`href="/${locale}/legal"`));
  assert.match(html, locale === 'ar' ? /المعلومات القانونية/ : /Legal Information/);
  assert.match(html, locale === 'ar' ? /ماذا نقدم/ : /What We Do/);
  assert.match(html, locale === 'ar' ? /استكشف مجالات خبرتنا/ : /Explore our expertise/);
  assert.doesNotMatch(html, /Explore our services/);
  assert.match(html, /info@inbsrealestate\.com/);
  assert.match(html, locale === 'ar' ? /حيث تجد الفرص عنوانها/ : /Where possibilities find an address/);

  assert.match(html, /hero-01-residence\.webp/);
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

// Every approved team image must remain byte-valid, not merely return HTTP 200.
for (const name of ['hero-01', 'hero-02', 'hero-03', 'story-04', 'story-05',
                    'story-06', 'story-07', 'story-08', 'story-09', 'story-10']) {
  const response = await expectStatus(`/images/team/${name}.webp`, 200);
  assert.match(response.headers.get('content-type') || '', /image\/webp/i);
  const bytes = Buffer.from(await response.arrayBuffer());
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
}
for (const image of ['hero-01-residence', 'hero-02-dubai-skyline', 'hero-03-interior', 'home-villa-exterior']) {
  const response = await expectStatus(`/images/home/${image}.webp`, 200);
  assert.match(response.headers.get('content-type') || '', /image\/webp/i);
  const bytes = Buffer.from(await response.arrayBuffer());
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
}
const brand = await expectStatus('/brand/inbs-logo.png', 200);
assert.match(brand.headers.get('content-type') || '', /image\/png/i);
console.log('All foundation smoke checks passed');
