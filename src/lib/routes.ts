import type { Locale } from '@/lib/site';
import { pages } from '@/lib/site';

export type PageSlug = (typeof pages)[number]['slug'];

export const routes = {
  home: (locale: Locale) => `/${locale}`,
  page: (locale: Locale, slug: PageSlug) => `/${locale}/${slug}`,
} as const;
