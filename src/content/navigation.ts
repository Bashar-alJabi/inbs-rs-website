import { pages } from '@/lib/site';

/** Same original INBS navigation pattern: Home + two primary links. */
export const primaryPages = pages.filter(page => page.slug === 'about' || page.slug === 'what-we-do');
export const drawerPages = pages;

/** Footer links use the real estate page catalog, not the parent company's routes. */
export const footerQuickPages = pages;
