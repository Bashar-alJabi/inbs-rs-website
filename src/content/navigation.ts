import { pages } from '@/lib/site';

/** Same original INBS navigation pattern: Home + two primary links. */
export const primaryPages = pages.filter(page => page.slug === 'about' || page.slug === 'what-we-do');
export const drawerPages = pages;
