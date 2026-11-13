import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { isLocale, alternateLocale } from '@/lib/site';
import { routes } from '@/lib/routes';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  // Layout and page can render independently: pin the locale in each.
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'site' });

  return (
    <main className="setup-shell">
      <div className="setup-panel">
        <p className="setup-eyebrow">INBS · REAL ESTATE</p>
        <h1>{t('name')}</h1>
        <p>{t('description')}</p>
        <h2>{t('setup')}</h2>
        <p>{t('next')}</p>
        <nav className="setup-links" aria-label={locale === 'ar' ? 'روابط' : 'Links'}>
          <Link href={routes.home(alternateLocale(locale))} hrefLang={alternateLocale(locale)}>{t('switchLanguage')}</Link>
          <a href="https://inbs-website.vercel.app/" target="_blank" rel="noopener noreferrer">{t('parent')}</a>
        </nav>
      </div>
    </main>
  );
}
