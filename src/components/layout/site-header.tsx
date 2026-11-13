'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { homeContent } from '@/content/home';
import { alternateLocale, type Locale } from '@/lib/site';
import { routes } from '@/lib/routes';

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = homeContent[locale];
  const other = alternateLocale(locale);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const measure = () => setScrolled(window.scrollY > 55);
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    return () => window.removeEventListener('scroll', measure);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    menuRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); return; }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') || []);
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={'re-header'+(scrolled ? ' is-solid' : '')}>
      <div className="re-header-inner">
        <Link className="re-logo" href={routes.home(locale)} aria-label={locale === 'ar' ? 'الشبكة العالمية للعقارات — الرئيسية' : 'INBS Real Estate — Home'}>
          <Image src="/brand/inbs-logo.png" width={130} height={65} alt="INBS" priority />
          <span className="re-logo-divider" aria-hidden="true" />
          <span className="re-logo-descriptor">REAL<br/>ESTATE</span>
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
          <button ref={triggerRef} className="re-mobile-trigger" type="button" onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen} aria-controls="re-mobile-drawer" aria-label={menuOpen ? (locale === 'ar' ? 'إغلاق القائمة' : 'Close menu') : t.menu}>
            {menuOpen ? <X size={23} aria-hidden="true"/> : <Menu size={23} aria-hidden="true"/>}
          </button>
        </div>
      </div>
      {menuOpen && (
        <>
          <button className="re-drawer-backdrop" type="button" onClick={closeMenu} tabIndex={-1} aria-label={locale === 'ar' ? 'إغلاق القائمة' : 'Close navigation'}/>
          <nav ref={menuRef} id="re-mobile-drawer" className="re-drawer" aria-label={t.menu} aria-modal="true" role="dialog">
            <div className="re-drawer-top"><span>INBS / REAL ESTATE</span><button type="button" onClick={closeMenu} aria-label={locale === 'ar' ? 'إغلاق القائمة' : 'Close menu'}><X size={23}/></button></div>
            <a onClick={closeMenu} href="#approach"><span>01</span>{t.nav.philosophy}<ArrowUpRight size={17}/></a>
            <a onClick={closeMenu} href="#expertise"><span>02</span>{t.nav.expertise}<ArrowUpRight size={17}/></a>
            <a onClick={closeMenu} href="#journey"><span>03</span>{t.nav.process}<ArrowUpRight size={17}/></a>
            <a onClick={closeMenu} href="#contact"><span>04</span>{t.nav.contact}<ArrowUpRight size={17}/></a>
            <p className="re-drawer-signature">DUBAI · UNITED ARAB EMIRATES</p>
          </nav>
        </>
      )}
    </header>
  );
}
