import { pages } from '@/lib/site';

/** Same original INBS navigation pattern: Home + two primary links. */
export const primaryPages = pages.filter(page => page.slug === 'about' || page.slug === 'what-we-do');
export const drawerPages = pages.filter(page => page.slug !== 'legal');

/** Footer links use the real estate page catalog, not the parent company's routes. */
export const footerQuickPages = pages.filter(page => page.slug !== 'legal');
export const footerLegalPages = pages.filter(page => page.slug === 'legal');
