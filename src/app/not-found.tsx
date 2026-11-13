'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/** Covers unlisted routes while supporting the separate locale root layouts. */
export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname?.startsWith('/ar/') || pathname === '/ar' ? 'ar' : 'en';
  const ar = locale === 'ar';

  return (
    <html lang={locale} dir={ar ? 'rtl' : 'ltr'}>
      <body>
        <main className="setup-shell" lang={locale} dir={ar ? 'rtl' : 'ltr'}>
          <div className="setup-panel">
            <p className="setup-eyebrow">404</p>
            <h1>{ar ? 'الصفحة غير موجودة' : 'Page not found'}</h1>
            <p>{ar ? 'الرابط غير صحيح أو الصفحة غير متاحة.' : 'This link is invalid or the page is unavailable.'}</p>
            <Link href={`/${locale}`}>{ar ? 'العودة للرئيسية' : 'Back to home'}</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
