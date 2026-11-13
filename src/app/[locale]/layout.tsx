import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { isLocale, locales } from '@/lib/site';

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

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="locale-app">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
