import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { isLocale, locales } from '@/lib/site';
import '../globals.css';

export const metadata: Metadata = {
  title: { default: 'INBS Real Estate', template: '%s | INBS Real Estate' },
  description: 'Real estate brokerage, consultation and transaction assistance in Dubai.',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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

  // Keep locale-specific routes statically prerenderable.
  setRequestLocale(locale);
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="locale-app">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
