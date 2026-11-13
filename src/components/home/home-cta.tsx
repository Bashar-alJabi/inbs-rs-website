import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/shared/reveal';
import { companyContact } from '@/content/contact';
import type { Locale } from '@/lib/site';
import { homeContent } from '@/content/home';

export function HomeCta({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  const contact = companyContact;
  return (
<section className="re-contact" id="contact" aria-labelledby="re-contact-title">
          <div className="re-shell re-contact-inner">
            <Reveal>
              <div className="re-section-heading-top"><span className="re-section-number">04 <span>/ 04</span></span><p className="re-overline">{t.ctaEyebrow}</p></div>
              <h2 id="re-contact-title">{t.ctaTitleA}<br /><em>{t.ctaTitleB}</em></h2>
            </Reveal>
            <Reveal className="re-contact-aside">
              <p>{t.ctaBody}</p>
              <a href={contact.emails[0].href} className="re-contact-primary">{t.email}<ArrowUpRight size={21} aria-hidden="true" /></a>
              <a href={contact.phones[0].href} className="re-contact-phone">{t.call}<span dir="ltr">{contact.phones[0].label}</span></a>
            </Reveal>
            <span className="re-contact-circle" aria-hidden="true" />
          </div>
        </section>
  );
}
