import { Reveal } from '@/components/shared/reveal';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';

export function HomeStatement({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  return (
<section className="re-statement" aria-label={t.quote}>
          <div className="re-statement-line" aria-hidden="true" />
          <Reveal className="re-shell"><p>“{t.quote}”</p><span>INBS REAL ESTATE <span aria-hidden="true">↗</span></span></Reveal>
        </section>
  );
}
