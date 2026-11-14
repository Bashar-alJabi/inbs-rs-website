import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, AtSign, Mail, MapPin, Phone, Smartphone } from 'lucide-react';
import { LinkedinIcon, InstagramIcon, FacebookIcon } from './social-icons';
import { type Locale } from '@/lib/site';
import { footerQuickPages } from '@/content/navigation';
import { routes } from '@/lib/routes';
import { Reveal } from '@/components/shared/reveal';
import { companyContact, socialLinks } from '@/content/contact';
import { layoutContent } from '@/content/layout';
import { homeContent } from '@/content/home';

const emailIcons = { official: Mail, additional: AtSign } as const;
const phoneIcons = { mobile: Smartphone, landline: Phone } as const;
const socialIcons = {
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const;

/** Same INBS footer structure. Only company description, locale links and real-estate services differ. */
export function SiteFooter({ locale }: { locale: Locale }) {
  const t = layoutContent[locale];
  const services = homeContent[locale].offerings;

  return (
    <footer className="inbs-footer">
      <div className="inbs-footer-glow" aria-hidden="true" />
      <span className="inbs-footer-watermark" aria-hidden="true">INBS</span>
      <div className="site-shell inbs-footer-container">
        <Reveal>
          <div className="inbs-footer-top">
            <div>
              <p>{t.footerBrand}</p>
              <h2>{t.footerHeading}</h2>
            </div>
            <Link href={`${routes.home(locale)}#contact`}>{t.contact}<ArrowUpRight size={20} aria-hidden="true" /></Link>
          </div>
        </Reveal>
        <div className="inbs-footer-grid">
          <Reveal delay={0.05}>
            <div className="inbs-footer-about">
              <Image src="/brand/inbs-logo.png" width={195} height={96} alt="INBS" />
              <p>{t.footerAbout}</p>
              <div className="inbs-socials" aria-label={t.socialMedia}>
                {socialLinks.map(({ id, label, href }) => {
                  const Icon = socialIcons[id];
                  return <a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>;
                })}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div>
              <h3>{t.quickLinks}</h3>
              <Link href={routes.home(locale)}>{t.home}</Link>
              {footerQuickPages.map(page => (
                <Link key={page.slug} href={routes.page(locale, page.slug)}>{page[locale]}</Link>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div>
              <h3>{t.services}</h3>
              {services.map(service => (
                <Link key={service.number} href={`${routes.home(locale)}#expertise`}>{service.name}</Link>
              ))}
              <Link className="inbs-footer-more-services" href={`${routes.home(locale)}#expertise`}>
                {t.moreServices}<ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="inbs-footer-contact">
              <h3>{t.contactDetails}</h3>
              {companyContact.emails.map(email => {
                const Icon = emailIcons[email.kind];
                return <a key={email.href} href={email.href}><Icon size={18} aria-hidden="true" /><span>{email.label}</span></a>;
              })}
              {companyContact.phones.map(phone => {
                const Icon = phoneIcons[phone.kind];
                return <a key={phone.href} href={phone.href}><Icon size={18} aria-hidden="true" /><span className="inbs-phone-number" dir="ltr">{phone.label}</span></a>;
              })}
              <a href={companyContact.mapUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={18} aria-hidden="true" />
                <span>{companyContact.address[locale]} <ArrowUpRight size={14} className="map-external" aria-hidden="true" /></span>
              </a>
            </div>
          </Reveal>
        </div>
        <div className="inbs-footer-bottom">
          <span className="inbs-copyright">© INBS Real Estate <span>{t.rights}</span></span>
          <div><Link href={`/${locale}/legal`}>{t.legal}</Link></div>
        </div>
      </div>
    </footer>
  );
}
