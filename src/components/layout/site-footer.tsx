import Image from 'next/image';
import { ArrowUpRight, MapPin, MoveUpRight } from 'lucide-react';
import { companyContact, socialLinks } from '@/content/contact';
import { homeContent } from '@/content/home';
import type { Locale } from '@/lib/site';
import { LinkedinIcon, InstagramIcon, FacebookIcon } from './social-icons';

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  const contact = companyContact;
  const linkedIn = socialLinks.find((link) => link.id === 'linkedin');
  const instagram = socialLinks.find((link) => link.id === 'instagram');
  const facebook = socialLinks.find((link) => link.id === 'facebook');
  return (
<footer className="re-footer">
        <div className="re-shell">
          <div className="re-footer-main">
            <div className="re-footer-brand"><Image src="/brand/inbs-logo.png" width={150} height={75} alt="INBS" /><p>{t.footerLine}</p></div>
            <div className="re-footer-links"><a href="#approach">{t.nav.philosophy}</a><a href="#expertise">{t.nav.expertise}</a><a href="#journey">{t.nav.process}</a><a href="#contact">{t.nav.contact}</a></div>
            <div className="re-footer-address"><MapPin size={18} aria-hidden="true" /><a href={contact.mapUrl} target="_blank" rel="noopener noreferrer">{contact.address[locale]}</a></div>
          </div>
          <div className="re-footer-bottom">
            <span>© INBS REAL ESTATE. {t.rights}</span>
            <div className="re-footer-social">
              {linkedIn && <a href={linkedIn.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>}
              {instagram && <a href={instagram.href} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>}
              {facebook && <a href={facebook.href} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>}
              <a href="https://inbs-website.vercel.app/" target="_blank" rel="noopener noreferrer">{t.parent}<MoveUpRight size={14} aria-hidden="true" /></a>
            </div>
            <a href="#top" className="re-to-top">{t.backTop}<ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
  );
}
