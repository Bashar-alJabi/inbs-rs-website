import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { homeContent } from '@/content/home';
import { alternateLocale, type Locale } from '@/lib/site';
import { routes } from '@/lib/routes';

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  const other = alternateLocale(locale);
  return (
<header className="re-header">
        <div className="re-header-inner">
          <Link className="re-logo" href={routes.home(locale)} aria-label="INBS Real Estate — Home">
            <Image src="/brand/inbs-logo.png" width={130} height={65} alt="INBS" priority />
            <span className="re-logo-divider" />
            <span className="re-logo-descriptor">REAL<br />ESTATE</span>
          </Link>
          <nav className="re-primary-nav" aria-label={locale === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}>
            <a href="#approach">{t.nav.philosophy}</a>
            <a href="#expertise">{t.nav.expertise}</a>
            <a href="#journey">{t.nav.process}</a>
          </nav>
          <div className="re-header-actions">
            <Link className="re-lang" href={routes.home(other)} hrefLang={other}>{other === 'ar' ? 'عربي' : 'EN'}</Link>
            <ThemeToggle label={locale === 'ar' ? 'تبديل الوضع الفاتح والداكن' : 'Toggle light and dark mode'} />
            <a className="re-header-contact" href="#contact">{t.nav.contact}<ArrowUpRight size={17} aria-hidden="true" /></a>
            <details className="re-mobile-nav">
              <summary aria-label={t.menu}><Menu size={23} aria-hidden="true" /></summary>
              <nav aria-label={t.menu}>
                <a href="#approach">{t.nav.philosophy}</a>
                <a href="#expertise">{t.nav.expertise}</a>
                <a href="#journey">{t.nav.process}</a>
                <a href="#contact">{t.nav.contact}</a>
              </nav>
            </details>
          </div>
        </div>
      </header>
  );
}
