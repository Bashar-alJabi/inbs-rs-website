import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';

export function HomeHero({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  return (
<section className="re-hero" aria-labelledby="re-hero-title">
          <div className="re-hero-photo" aria-hidden="true">
            <Image src="/images/home/architecture.webp" alt="" fill priority sizes="100vw" />
          </div>
          <div className="re-hero-shade" aria-hidden="true" />
          <div className="re-hero-outline" aria-hidden="true"><span /><span /><span /></div>
          <div className="re-hero-inner">
            <div className="re-hero-topline"><span className="re-accent-line" />{t.kicker}</div>
            <div className="re-hero-main">
              <p className="re-overline re-hero-eyebrow">{t.eyebrow}</p>
              <h1 id="re-hero-title"><span>{t.titleFirst}</span><span>{t.titleSecond}</span><em>{t.titleAccent}</em></h1>
              <div className="re-hero-description">
                <p>{t.description}</p>
                <a href="#contact" className="re-hero-link">{t.heroCta}<span><ArrowUpRight size={22} aria-hidden="true" /></span></a>
              </div>
            </div>
            <div className="re-hero-bottom">
              <a href="#approach" className="re-scroll-prompt"><span className="re-scroll-circle"><ArrowDown size={19} aria-hidden="true" /></span>{t.scroll}</a>
              <span>{t.location}</span>
              <span>{t.chapter}</span>
            </div>
          </div>
          <div className="re-hero-vertical" aria-hidden="true">{t.visualNote}</div>
        </section>
  );
}
