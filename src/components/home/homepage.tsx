import type { Locale } from '@/lib/site';
import { HomeHero } from './hero-experience';
import { HomeStatement } from './home-statement';
import { HomeCta } from './home-cta';

/** Keep Home lean while the remaining sections are redesigned individually. */
export function Homepage({ locale }: { locale: Locale }) {
  return (
    <main className="re-main">
      <HomeHero locale={locale} />
      <HomeStatement locale={locale} />
      <HomeCta locale={locale} />
    </main>
  );
}
