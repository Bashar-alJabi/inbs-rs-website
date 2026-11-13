import type { MetadataRoute } from 'next';
import { localeAlternates, siteIndexable, siteUrl } from '@/lib/seo';
import { locales } from '@/lib/site';

/** Add routes only after their actual pages are published and approved. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteIndexable) return [];
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    alternates: { languages: localeAlternates()! },
    changeFrequency: 'monthly',
    priority: 1,
  }));
}
