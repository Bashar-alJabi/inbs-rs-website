/** Shared navigation translations; page copy remains in src/content/home.ts. */
export const layoutContent = {
  en: {
    home: 'Home', contact: 'Contact us',
    mainNavAria: 'Main navigation', themeToggleAria: 'Toggle light and dark mode',
    themeToggleTitle: 'Toggle theme', openMenu: 'Open menu', closeMenu: 'Close menu',
    close: 'Close', drawerAria: 'Site navigation', allPagesAria: 'All pages',
  },
  ar: {
    home: 'الرئيسية', contact: 'تواصل معنا',
    mainNavAria: 'التنقل الرئيسي', themeToggleAria: 'تبديل المظهر الفاتح والداكن',
    themeToggleTitle: 'تبديل المظهر', openMenu: 'فتح القائمة', closeMenu: 'إغلاق القائمة',
    close: 'إغلاق', drawerAria: 'قائمة الصفحات', allPagesAria: 'كل الصفحات',
  },
} as const;
