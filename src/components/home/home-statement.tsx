import Image from 'next/image';
import { Reveal } from '@/components/shared/reveal';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';

export function HomeStatement({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  return (
    <section className="re-statement" id="statement" aria-label={t.quote}>
      <div className="re-statement-image" aria-hidden="true"><Image src="/images/home/statement-dubai-skyline.webp" fill alt="" sizes="100vw"/></div>
      <div className="re-statement-shade" aria-hidden="true"/>
      <Reveal className="re-shell re-statement-content">
        <span className="re-statement-eyebrow">INBS / DUBAI</span>
        <p>“{t.quote}”</p>
        <span className="re-statement-signature">— INBS REAL ESTATE</span>
      </Reveal>
    </section>
  );
}
