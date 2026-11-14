import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import { homeContent } from '@/content/home';
import { routes } from '@/lib/routes';
import type { Locale } from '@/lib/site';

/** Page-owned bilingual content; shared CTA design is in styles/editorial-cta.css. */
export function HomeCta({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  return (
    <section className="inbs-editorial-cta inbs-editorial-cta--home" id="contact" aria-labelledby="re-contact-title">
      <div className="site-shell inbs-editorial-cta-inner">
        <Reveal className="inbs-editorial-cta-heading">
          <p className="inbs-editorial-cta-kicker"><span aria-hidden="true" />{t.ctaEyebrow}</p>
          <h2 id="re-contact-title"><span>{t.ctaTitleA}</span><span>{t.ctaTitleB}</span></h2>
        </Reveal>
        <Reveal className="inbs-editorial-cta-body" delay={0.12}>
          <p>{t.ctaBody}</p>
          <Link className="inbs-editorial-cta-action inbs-editorial-cta-primary" href={routes.page(locale, 'what-we-do')}>
            {t.explore}<ArrowUpRight size={20} aria-hidden="true" />
          </Link>
          <Link className="inbs-editorial-cta-action inbs-editorial-cta-secondary" href={routes.page(locale, 'contact')}>
            {t.contact}<ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
