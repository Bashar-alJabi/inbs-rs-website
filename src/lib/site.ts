export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.some((locale) => locale === value);
export const alternateLocale = (locale: Locale): Locale => (locale === 'en' ? 'ar' : 'en');

export const pages = [
  { slug: 'about', en: 'About', ar: 'من نحن' },
  { slug: 'what-we-do', en: 'What We Do', ar: 'ماذا نقدم' },
  { slug: 'team', en: 'Our Team', ar: 'فريقنا' },
  { slug: 'insights', en: 'Insights', ar: 'مقالات' },
  { slug: 'careers', en: 'Careers', ar: 'الوظائف' },
  { slug: 'contact', en: 'Contact', ar: 'تواصل معنا' },
  { slug: 'legal', en: 'Legal Information', ar: 'المعلومات القانونية' },
] as const;
