import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { isLocale, locales } from '@/lib/site';
import { localeAlternates, siteIndexable, siteUrl } from '@/lib/seo';
import { SmoothScroll } from '@/components/shared/smooth-scroll';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title = locale === 'ar' ? 'INBS للعقارات' : 'INBS Real Estate';
  const description = locale === 'ar'
    ? 'خدمات الوساطة والاستشارات العقارية والمساعدة في متابعة معاملات البيع والشراء في دبي.'
    : 'Real estate brokerage, property consultation and transaction assistance in Dubai.';
  return {
    title: { default: title, template: `%s | ${title}` },
    description,
    ...(siteUrl ? {
      metadataBase: new URL(siteUrl),
      alternates: {
        canonical: `${siteUrl}/${locale}`,
        languages: localeAlternates(),
      },
      openGraph: { title, description, url: `${siteUrl}/${locale}`, type: 'website' as const, locale: locale === 'ar' ? 'ar_AE' : 'en_US' },
    } : {}),
    robots: { index: siteIndexable, follow: siteIndexable },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="locale-app">
            <SmoothScroll />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
