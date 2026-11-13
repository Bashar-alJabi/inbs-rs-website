import type { Locale } from '@/lib/site';
import { HomeHero } from './hero-experience';
import { AboutPreview } from './about-preview';
import { ServicesShowcase } from './services-showcase';
import { HomeJourney } from './home-journey';
import { HomeStatement } from './home-statement';
import { HomeCta } from './home-cta';

/** Composition only. Home sections are isolated, editable components. */
export function Homepage({ locale }: { locale: Locale }) {
  return (
    <main className="re-main">
      <HomeHero locale={locale} />
      <AboutPreview locale={locale} />
      <ServicesShowcase locale={locale} />
      <HomeJourney locale={locale} />
      <HomeStatement locale={locale} />
      <HomeCta locale={locale} />
    </main>
  );
}
