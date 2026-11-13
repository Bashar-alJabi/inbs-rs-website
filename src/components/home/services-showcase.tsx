import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';

export function ServicesShowcase({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  return (
<section className="re-expertise" id="expertise" aria-labelledby="re-expertise-title">
          <div className="re-shell">
            <Reveal className="re-section-heading">
              <div className="re-section-heading-top"><span className="re-section-number">02 <span>/ 04</span></span><p className="re-overline">{t.expertiseEyebrow}</p></div>
              <div className="re-section-heading-main"><h2 id="re-expertise-title">{t.expertiseTitle}</h2><p>{t.expertiseLead}</p></div>
            </Reveal>
            <div className="re-offerings">
              {t.offerings.map((item) => (
                <Reveal className="re-offering" key={item.number}>
                  <span className="re-offering-num">{item.number}</span>
                  <div className="re-offering-copy"><h3>{item.name}</h3><p>{item.description}</p></div>
                  <span className="re-offering-arrow" aria-hidden="true"><ArrowUpRight size={24} strokeWidth={1.5} /></span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
  );
}
