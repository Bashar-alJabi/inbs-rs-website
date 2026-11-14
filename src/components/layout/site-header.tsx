'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, Moon, Sun, X, House, Building2, BriefcaseBusiness, Users, Newspaper, UserRoundSearch, Phone, type LucideIcon } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { Locale } from '@/lib/site';
import { routes, type PageSlug } from '@/lib/routes';
import { primaryPages, drawerPages } from '@/content/navigation';
import { LanguageSwitcher } from './language-switcher';
import { layoutContent } from '@/content/layout';
import { companyContact } from '@/content/contact';

/** Icons are keyed by stable route slug, not array position. */
const drawerIcons: Record<PageSlug, LucideIcon> = {
  about: Building2,
  'what-we-do': BriefcaseBusiness,
  team: Users,
  insights: Newspaper,
  careers: UserRoundSearch,
  contact: Phone,
};
export function SiteHeader({locale}:{locale:Locale}){
 const pathname=usePathname();
 const menuButtonRef=useRef<HTMLButtonElement>(null);
 const drawerRef=useRef<HTMLElement>(null);
 const [scrolled,setScrolled]=useState(false);
 const [drawerState,setDrawerState]=useState({open:false,pathname});
 const open=drawerState.open&&drawerState.pathname===pathname;
 const setOpen=useCallback((open:boolean)=>setDrawerState({open,pathname}),[pathname]);
 // Close on route changes, including browser history, without reopening on Back.
 if(drawerState.pathname!==pathname)setDrawerState({open:false,pathname});
 const reducedMotion=useReducedMotion();
 const t=layoutContent[locale];
 const home=t.home;
 useEffect(()=>{
   const onScroll=()=>setScrolled(window.scrollY>55);
   onScroll();window.addEventListener('scroll',onScroll,{passive:true});
   return ()=>window.removeEventListener('scroll',onScroll);
 },[]);
 useEffect(()=>{const stored=localStorage.getItem('inbs-theme');const next=stored==='dark'||stored==='light'?stored:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=next},[]);
 useEffect(()=>{
  if(!open)return;
  const drawer=drawerRef.current;
  const previous=document.activeElement instanceof HTMLElement?document.activeElement:null;
  const menuButton=menuButtonRef.current;
  const root=document.documentElement,body=document.body;
  const {scrollX,scrollY}=window;
  const rootStyles={overflow:root.style.overflow,scrollbarGutter:root.style.scrollbarGutter};
  const bodyStyles={position:body.style.position,top:body.style.top,left:body.style.left,width:body.style.width};
  // Fixed body also locks native touch scrolling; Lenis observes this attribute.
  root.setAttribute('data-inbs-drawer-open','');
  Object.assign(root.style,{overflow:'hidden',scrollbarGutter:window.innerWidth>root.clientWidth?'stable':rootStyles.scrollbarGutter});
  Object.assign(body.style,{position:'fixed',top:`-${scrollY}px`,left:`-${scrollX}px`,width:'100%'});
  const focusable=()=>Array.from(drawer?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')??[]);
  focusable()[0]?.focus({preventScroll:true});
  const key=(event:KeyboardEvent)=>{
   if(event.key==='Escape'){setOpen(false);return;}
   if(event.key!=='Tab')return;
   const items=focusable();if(!items.length)return;
   const first=items[0],last=items[items.length-1];
   if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
   else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  };
  document.addEventListener('keydown',key);
  return()=>{
   document.removeEventListener('keydown',key);
   Object.assign(body.style,bodyStyles);
   Object.assign(root.style,rootStyles);
   window.scrollTo({left:scrollX,top:scrollY,behavior:'instant'});
   root.removeAttribute('data-inbs-drawer-open');
   (previous?.isConnected&&previous!==body?previous:menuButton)?.focus({preventScroll:true});
  };
 },[open,setOpen]);
 const toggleTheme=()=>{const current=document.documentElement.dataset.theme==='dark'?'dark':'light';const next=current==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('inbs-theme',next)};
 const onHome=pathname===routes.home(locale);const transparent=onHome&&!scrolled&&!open;
 return <header className={`inbs-header ${transparent?'is-transparent':'is-solid'}`}><div className="site-shell inbs-header-inner">
  <Link href={routes.home(locale)} className="inbs-brand" aria-label={locale === 'ar' ? 'INBS العقارات — الرئيسية' : 'INBS Real Estate home'}><Image src="/brand/inbs-logo.png" alt="INBS" width={152} height={76} priority/><span className="inbs-brand-divider" aria-hidden="true"/><span className="inbs-brand-descriptor" aria-label="Real Estate">REAL<br/>ESTATE</span></Link>
  <nav className="inbs-primary-nav" aria-label={t.mainNavAria}>
   <Link className={onHome?'active':''} href={routes.home(locale)}>{home}</Link>
   {primaryPages.map(page=><Link className={pathname===routes.page(locale,page.slug)?'active':''} key={page.slug} href={routes.page(locale,page.slug)}>{page[locale]}</Link>)}
  </nav>
  <div className="inbs-header-actions">
   <Link className="inbs-contact-button" href={routes.page(locale,'contact')}>{t.contact}<ArrowUpRight size={17}/></Link>
   <button type="button" className="inbs-icon-button" onClick={toggleTheme} aria-label={t.themeToggleAria} title={t.themeToggleTitle}><motion.span className="inbs-theme-show-dark" whileHover={{rotate:15,scale:1.1}}><Sun size={21}/></motion.span><motion.span className="inbs-theme-show-light" whileHover={{rotate:-15,scale:1.1}}><Moon size={21}/></motion.span></button>
   <LanguageSwitcher locale={locale}/>
   <button type="button" ref={menuButtonRef} className="inbs-icon-button inbs-menu-trigger" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="inbs-drawer" aria-label={open ? t.closeMenu : t.openMenu}>{open?<X size={23}/>:<Menu size={23}/>}</button>
  </div>
 </div>
 <AnimatePresence>{open&&<><motion.button className="inbs-drawer-backdrop" type="button" aria-label={t.closeMenu} onClick={()=>setOpen(false)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={reducedMotion?{duration:0}:undefined}/><motion.aside ref={drawerRef} id="inbs-drawer" className="inbs-drawer" data-lenis-prevent role="dialog" aria-modal="true" aria-label={t.drawerAria} initial={reducedMotion?false:{x:locale==='ar'?'-100%':'100%'}} animate={{x:0}} exit={{x:reducedMotion?0:locale==='ar'?'-100%':'100%'}} transition={{duration:reducedMotion?0:.38,ease:[.22,1,.36,1]}}>
 <div className="inbs-drawer-top"><Link href={routes.home(locale)} onClick={()=>setOpen(false)} className="inbs-drawer-brand" aria-label="INBS Real Estate home"><Image src="/brand/inbs-logo.png" alt="INBS" width={142} height={72}/><span className="inbs-brand-divider" aria-hidden="true"/><span className="inbs-brand-descriptor">REAL<br/>ESTATE</span></Link><button className="inbs-drawer-close" onClick={()=>setOpen(false)} type="button" aria-label={t.close}><X size={22}/></button></div>
 <div className="inbs-drawer-architecture" aria-hidden="true">
  <svg viewBox="0 0 320 34" preserveAspectRatio="none" focusable="false">
   <path className="inbs-drawer-architecture-grid" d="M 0 29 H 320 M 29 29 V 14 M 70 29 V 14 M 112 29 V 8 M 153 29 V 8 M 196 29 V 16 M 237 29 V 16 M 278 29 V 21"/>
   <path className="inbs-drawer-architecture-path" d="M 0 29 H 29 V 14 H 70 V 29 H 112 V 8 H 153 V 29 H 196 V 16 H 237 V 29 H 278 V 21 H 305 V 29 H 320"/>
   <circle className="inbs-drawer-architecture-end" cx="320" cy="29" r="2"/>
   <circle className="inbs-drawer-architecture-traveller" r="3.2">
    <animateMotion dur="10s" repeatCount="indefinite" path="M 0 29 H 29 V 14 H 70 V 29 H 112 V 8 H 153 V 29 H 196 V 16 H 237 V 29 H 278 V 21 H 305 V 29 H 320"/>
   </circle>
  </svg>
 </div>
 <nav aria-label={t.allPagesAria}><Link className={onHome?'active':''} onClick={()=>setOpen(false)} href={routes.home(locale)}><House size={19}/>{home}</Link>{drawerPages.map((p)=>{const Icon=drawerIcons[p.slug];return <Link className={pathname===routes.page(locale,p.slug)?'active':''} onClick={()=>setOpen(false)} key={p.slug} href={routes.page(locale,p.slug)}><Icon size={19}/>{p[locale]}</Link>})}</nav>
 <div className="inbs-drawer-bottom"><a href={companyContact.emails[0].href}>{companyContact.emails[0].label}</a><span>{locale==='ar'?'دبي · الإمارات':'Dubai · UAE'}</span></div>
 </motion.aside></>}</AnimatePresence></header>
}
