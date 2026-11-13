import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';

export function AboutPreview({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  return (
    <section className="re-intro" id="approach" aria-labelledby="re-intro-title">
      <div className="re-shell re-intro-inner">
        <Reveal className="re-intro-heading">
          <div className="re-section-marker"><span className="re-marker-line"/><span>01 / THE PERSPECTIVE</span></div>
          <p className="re-kicker">{t.introEyebrow}</p>
          <h2 id="re-intro-title">{t.introTitleA}<br/><span>{t.introTitleB}</span><br/><em>{t.introTitleC}</em></h2>
        </Reveal>
        <div className="re-intro-art">
          <Reveal className="re-intro-image">
            <Image src="/images/home/dubai-waterfront.webp" alt={locale === 'ar' ? 'الأفق العمراني لدبي والواجهة المائية' : 'Dubai skyline reflected in the waterfront'} fill sizes="(max-width: 900px) 90vw, 48vw" />
            <span className="re-intro-image-label">DUBAI / PERSPECTIVE 01</span>
          </Reveal>
          <div className="re-intro-orbit" aria-hidden="true"><span/><span/><span/></div>
        </div>
        <Reveal className="re-intro-body">
          <span className="re-intro-asterisk" aria-hidden="true">✳</span>
          <p>{t.introBody}</p>
          <span className="re-intro-signature">INBS <span>—</span> {t.introAside}</span>
          <a className="re-inline-link" href="#expertise">{t.nav.expertise}<ArrowUpRight size={19} aria-hidden="true"/></a>
        </Reveal>
      </div>
    </section>
  );
}
