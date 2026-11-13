import { Reveal } from '@/components/shared/reveal';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';

export function AboutPreview({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  return (
<section className="re-intro" id="approach" aria-labelledby="re-intro-title">
          <div className="re-shell re-intro-grid">
            <Reveal className="re-intro-index"><span className="re-section-number">01 <span>/ 04</span></span><span className="re-horizontal-rule" /></Reveal>
            <Reveal className="re-intro-main">
              <p className="re-overline re-dark-overline">{t.introEyebrow}</p>
              <h2 id="re-intro-title">{t.introTitleA}<br /><span>{t.introTitleB}</span><br /><em>{t.introTitleC}</em></h2>
              <div className="re-intro-copy"><span className="re-intro-mark" aria-hidden="true">✳</span><p>{t.introBody}</p></div>
            </Reveal>
            <div className="re-intro-aside" aria-hidden="true"><span>INBS</span><p>{t.introAside}</p></div>
          </div>
        </section>
  );
}
