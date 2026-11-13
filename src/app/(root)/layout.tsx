import type { Metadata } from 'next';
import { siteIndexable } from '@/lib/seo';
import '../globals.css';

export const metadata: Metadata = {
  title: 'INBS Real Estate',
  description: 'Real estate brokerage, consultation and transaction assistance in Dubai.',
  robots: { index: siteIndexable, follow: siteIndexable },
};

export default function RedirectRootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" dir="ltr"><body>{children}</body></html>;
}
