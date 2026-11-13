import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home/home-page';
import { isLocale } from '@/lib/site';
import '@/components/home/home.css';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  return <HomePage locale={locale} />;
}
