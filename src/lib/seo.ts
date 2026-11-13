/** Explicit publication switch: previews and unfinished builds are never indexed. */
export const siteIndexable = process.env.SITE_INDEXABLE === 'true' && Boolean(process.env.SITE_URL);
export const siteUrl = (process.env.SITE_URL || '').replace(/\/$/, '');

export function localeAlternates(path = '') {
  if (!siteUrl) return undefined;
  return {
    en: `${siteUrl}/en${path}`,
    ar: `${siteUrl}/ar${path}`,
    'x-default': `${siteUrl}/en${path}`,
  };
}
