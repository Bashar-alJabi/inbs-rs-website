'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';
import { homeHeroSlides } from '@/content/hero';

export function HomeHero({ locale }: { locale: Locale }) {
  const slides = homeHeroSlides[locale];
  const t = homeContent[locale];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (paused || reduced) return;
    const interval = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 7500);
    return () => window.clearInterval(interval);
  }, [paused, reduced, slides.length]);

  const move = (by: number) => setActive((index) => (index + by + slides.length) % slides.length);
  const slide = slides[active];

  return (
    <section className="re-hero" aria-labelledby="re-hero-title" aria-roledescription={locale === 'ar' ? 'عرض شرائح' : 'slideshow'}>
      <div className="re-hero-media" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.div key={active} className="re-hero-photo"
            initial={{ opacity: 0, scale: 1.045 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 1.25, ease: [0.22, 1, 0.36, 1] }}>
            <Image src={slide.image} alt="" fill priority={active === 0} sizes="100vw" quality={82} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="re-hero-shade" aria-hidden="true" />
      <div className="re-hero-architecture" aria-hidden="true"><span/><span/><span/></div>

      <div className="re-hero-inner">
        <div className="re-hero-topline">
          <span className="re-kicker-line" aria-hidden="true"/>
          <span>INBS <span className="re-hero-separator">/</span> REAL ESTATE</span>
          <span className="re-hero-region">DUBAI · UNITED ARAB EMIRATES</span>
        </div>
        <div className="re-hero-stage">
          <AnimatePresence mode="wait">
            <motion.div key={active} className="re-hero-content" initial={reduced ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }}
              transition={{ duration: reduced ? 0 : .64, ease: [0.22, 1, 0.36, 1] }}>
              <p className="re-hero-eyebrow">{slide.eyebrow}</p>
              <h1 id="re-hero-title">
                <span>{slide.title[0]}</span>
                <span>{slide.title[1]}</span>
                <em>{slide.title[2]}</em>
              </h1>
              <p className="re-hero-description">{slide.description}</p>
              <a className="re-hero-cta" href="#contact">
                <span>{t.heroCta}</span><ArrowUpRight size={19} aria-hidden="true"/>
              </a>
            </motion.div>
          </AnimatePresence>
          <div className="re-hero-side-note" aria-hidden="true">
            <span className="re-hero-side-line"/><span>INTERNATIONAL NETWORK</span><span>REAL ESTATE DIVISION</span>
          </div>
        </div>
        <div className="re-hero-bottom">
          <div className="re-hero-controls" aria-label={locale === 'ar' ? 'التحكم بالشرائح' : 'Slide controls'}>
            <span className="re-hero-count" dir="ltr">{String(active + 1).padStart(2, '0')} <i>/</i> {String(slides.length).padStart(2, '0')}</span>
            <div className="re-hero-progress" role="group" aria-label={locale === "ar" ? "اختيار الشريحة" : "Choose slide"}>
              {slides.map((item, index) => <button key={item.image} type="button" className={active === index ? 'is-current' : ''} onClick={() => setActive(index)} aria-label={locale === 'ar' ? `الشريحة ${index+1}` : `Slide ${index+1}`}/>)}
            </div>
            <button type="button" className="re-hero-control" onClick={() => move(-1)} aria-label={locale === 'ar' ? 'السابق' : 'Previous'}>
              {locale === 'ar' ? <ArrowRight size={17}/> : <ArrowLeft size={17}/>}
            </button>
            <button type="button" className="re-hero-control" onClick={() => move(1)} aria-label={locale === 'ar' ? 'التالي' : 'Next'}>
              {locale === 'ar' ? <ArrowLeft size={17}/> : <ArrowRight size={17}/>}
            </button>
            <button type="button" className="re-hero-control" onClick={() => setPaused((value) => !value)} aria-label={paused ? (locale === 'ar' ? 'تشغيل الشرائح' : 'Resume slides') : (locale === 'ar' ? 'إيقاف الشرائح' : 'Pause slides')}>
              {paused ? <Play size={16}/> : <Pause size={16}/>}
            </button>
          </div>
          <a href="#approach" className="re-hero-discover">{t.scroll}<ArrowDown size={18} aria-hidden="true"/></a>
          <span className="re-hero-caption">{slide.note}</span>
        </div>
      </div>
    </section>
  );
}
