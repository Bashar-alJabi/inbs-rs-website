'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Building2, Handshake, ScrollText } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';

const photos = [
  '/images/home/dubai-aerial.webp',
  '/images/home/dubai-skyline.webp',
  '/images/home/dubai-waterfront.webp',
] as const;
const icons = [Building2, Handshake, ScrollText] as const;

export function ServicesShowcase({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const item = t.offerings[active];
  const next = (delta: number) => setActive((index) => (index + delta + t.offerings.length) % t.offerings.length);

  return (
    <section className="re-expertise" id="expertise" aria-labelledby="re-expertise-title">
      <div className="re-shell">
        <Reveal className="re-services-heading">
          <div className="re-section-marker"><span className="re-marker-line"/><span>02 / WHAT WE DO</span></div>
          <div className="re-services-heading-row"><div><p className="re-kicker">{t.expertiseEyebrow}</p><h2 id="re-expertise-title">{t.expertiseTitle}</h2></div><p>{t.expertiseLead}</p></div>
        </Reveal>
        <div className="re-services-stage">
          <div className="re-services-list" aria-label={locale === 'ar' ? 'مجالات الخدمات العقارية' : 'Real estate services'}>
            {t.offerings.map((service, index) => {
              const Icon = icons[index];
              return (
                <button type="button" key={service.number} className={'re-service-choice'+(active===index?' is-active':'')}
                  onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}
                  onClick={() => setActive(index)} aria-pressed={active===index}>
                  <span className="re-service-index">{service.number}</span>
                  <span className="re-service-copy"><strong>{service.name}</strong><span>{service.description}</span></span>
                  <span className="re-service-symbol"><Icon size={24} strokeWidth={1.4} aria-hidden="true"/></span>
                </button>
              );
            })}
          </div>
          <div className="re-services-visual">
            <div className="re-services-image" aria-label={item.name} role="img">
              <AnimatePresence mode="wait">
                <motion.div key={active} className="re-services-picture"
                  initial={reduced ? false : {opacity:0,scale:1.05}}
                  animate={{opacity:1,scale:1}} exit={{opacity:0}}
                  transition={{duration:reduced?0:.55,ease:[.22,1,.36,1]}}>
                  <Image src={photos[active]} alt="" fill sizes="(max-width: 900px) 92vw, 45vw" />
                </motion.div>
              </AnimatePresence>
              <span className="re-services-photo-mark">INBS <i>REAL ESTATE</i></span>
              <span className="re-services-photo-index" dir="ltr">{String(active+1).padStart(2,'0')} / 03</span>
            </div>
            <div className="re-services-visual-bottom">
              <div><span>{locale==='ar'?'مجال الخدمة':'SELECTED EXPERTISE'}</span><h3>{item.name}</h3></div>
              <div className="re-services-arrows">
                <button onClick={()=>next(-1)} aria-label={locale==='ar'?'الخدمة السابقة':'Previous service'} type="button">{locale==='ar'?<ArrowRight/>:<ArrowLeft/>}</button>
                <button onClick={()=>next(1)} aria-label={locale==='ar'?'الخدمة التالية':'Next service'} type="button">{locale==='ar'?<ArrowLeft/>:<ArrowRight/>}</button>
              </div>
            </div>
          </div>
        </div>
        <Reveal className="re-services-bottom"><span>{locale==='ar'?'عقارك. قرارك. رؤيتنا.':'YOUR SPACE. YOUR DECISION. OUR PERSPECTIVE.'}</span><a className="re-inline-link" href="#contact">{t.nav.contact}<ArrowUpRight size={18} aria-hidden="true"/></a></Reveal>
      </div>
    </section>
  );
}
