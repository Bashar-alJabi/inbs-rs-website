import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';

export function HomeJourney({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  return (
<section className="re-journey" id="journey" aria-labelledby="re-journey-title">
          <div className="re-shell re-journey-layout">
            <Reveal className="re-journey-intro">
              <div className="re-section-heading-top"><span className="re-section-number">03 <span>/ 04</span></span><p className="re-overline re-dark-overline">{t.processEyebrow}</p></div>
              <h2 id="re-journey-title">{t.processTitleA}<br /><em>{t.processTitleB}</em></h2>
              <p>{t.processLead}</p>
              <span className="re-journey-art" aria-hidden="true">INBS<span>°</span></span>
            </Reveal>
            <div className="re-journey-steps">
              {t.steps.map((step) => (
                <Reveal className="re-journey-step" key={step.number}>
                  <span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><ArrowRight size={22} aria-hidden="true" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
  );
}
