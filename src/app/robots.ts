import type { MetadataRoute } from 'next';
import { siteIndexable, siteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  if (!siteIndexable) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
