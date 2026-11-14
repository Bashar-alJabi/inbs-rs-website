import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Homepage } from '@/components/home/homepage';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { isLocale } from '@/lib/site';
import '@/styles/home.css';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  return (
    <div className="re-home">
      <SiteHeader locale={locale} />
      <Homepage locale={locale} />
      <SiteFooter locale={locale} />
    </div>
  );
}
