import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';

export function HomeJourney({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  return (
    <section className="re-journey" id="journey" aria-labelledby="re-journey-title">
      <div className="re-shell re-journey-inner">
        <Reveal className="re-journey-heading">
          <div className="re-section-marker"><span className="re-marker-line"/><span>03 / THE JOURNEY</span></div>
          <p className="re-kicker">{t.processEyebrow}</p>
          <h2 id="re-journey-title">{t.processTitleA}<br/><em>{t.processTitleB}</em></h2>
          <p className="re-journey-lead">{t.processLead}</p>
          <a href="#contact" className="re-journey-link">{t.heroCta}<ArrowUpRight size={19} aria-hidden="true"/></a>
        </Reveal>
        <div className="re-journey-map" aria-hidden="true"><span className="re-journey-ring ring-a"/><span className="re-journey-ring ring-b"/><span className="re-journey-ring ring-c"/><span className="re-journey-point"/><span className="re-journey-map-text">INBS</span></div>
        <div className="re-journey-list">
          {t.steps.map((step,index) => (
            <Reveal className="re-journey-item" key={step.number} delay={index*0.08}>
              <span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><ArrowUpRight size={20} aria-hidden="true"/>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
