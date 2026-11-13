import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, Linkedin, MapPin, Menu, MoveUpRight } from 'lucide-react';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { Reveal } from '@/components/shared/reveal';
import { companyContact, socialLinks } from '@/content/contact';
import { alternateLocale, type Locale } from '@/lib/site';
import { routes } from '@/lib/routes';

const copy = {
  en: {
    nav: { philosophy: 'Our approach', expertise: 'What we do', process: 'The journey', contact: 'Get in touch' },
    menu: 'Explore',
    kicker: 'INBS / REAL ESTATE / DUBAI',
    eyebrow: 'A MORE PERSONAL PERSPECTIVE ON REAL ESTATE',
    titleFirst: 'Spaces shape',
    titleSecond: 'the way we',
    titleAccent: 'live.',
    description: 'Every property decision begins with a vision. We bring clarity, care and local perspective to the moments that matter.',
    heroCta: 'Begin a conversation',
    scroll: 'SCROLL TO DISCOVER',
    location: 'BASED IN DUBAI · UAE',
    visualNote: 'A NEW PERSPECTIVE',
    chapter: '01 / 04',
    introEyebrow: 'MORE THAN A PROPERTY',
    introTitleA: 'Not just a place.',
    introTitleB: 'A sense of',
    introTitleC: 'belonging.',
    introBody: 'A home is more than an address, and a property decision is more than a transaction. We help you navigate the possibilities with honest guidance, considered advice and an understanding of what matters to you.',
    introAside: 'YOUR VISION. OUR PERSPECTIVE.',
    expertiseEyebrow: 'WHAT WE BRING TO THE TABLE',
    expertiseTitle: 'Perspective at every step.',
    expertiseLead: 'Thoughtful real estate support, tailored to your next move.',
    offerings: [
      { number: '01', name: 'Property brokerage', description: 'Guidance through buying and selling conversations, with your priorities at the centre.' },
      { number: '02', name: 'Real estate consultation', description: 'Clear, informed perspectives to help you weigh opportunities and make confident decisions.' },
      { number: '03', name: 'Transaction assistance', description: 'Practical support in navigating the documentation and coordination involved in a property transaction.' },
    ],
    processEyebrow: 'A CLEARER WAY FORWARD',
    processTitleA: 'Your next move,',
    processTitleB: 'made meaningful.',
    processLead: 'No unnecessary complexity. Just a focused conversation and the right support for your next step.',
    steps: [
      { number: '01', title: 'We listen first', text: 'Tell us what you are looking for, what matters most and where you want to go.' },
      { number: '02', title: 'We explore together', text: 'We discuss the available options and the considerations behind each decision.' },
      { number: '03', title: 'We support the next step', text: 'When you are ready, we help coordinate the relevant property journey.' },
    ],
    quote: 'A better property journey starts with a better conversation.',
    ctaEyebrow: 'THE NEXT CHAPTER STARTS HERE',
    ctaTitleA: 'Let’s find what',
    ctaTitleB: 'moves you.',
    ctaBody: 'Whether you are exploring a move or weighing a property decision, we are here to talk it through.',
    email: 'Write to us',
    call: 'Give us a call',
    footerLine: 'REAL ESTATE, WITH A HUMAN PERSPECTIVE.',
    backTop: 'Back to top',
    rights: 'All rights reserved.',
    parent: 'INBS Business Services',
  },
  ar: {
    nav: { philosophy: 'نهجنا', expertise: 'ماذا نقدم', process: 'رحلتك معنا', contact: 'تواصل معنا' },
    menu: 'استكشف',
    kicker: 'INBS / العقارات / دبي',
    eyebrow: 'رؤية مختلفة لتجربة عقارية أكثر خصوصية',
    titleFirst: 'مساحات تصنع',
    titleSecond: 'أسلوب',
    titleAccent: 'حياتنا.',
    description: 'كل قرار عقاري يبدأ برؤية. نرافقك بفهم ووضوح وخبرة محلية في الخطوات التي تصنع الفرق.',
    heroCta: 'لنبدأ الحديث',
    scroll: 'اكتشف المزيد',
    location: 'من دبي · الإمارات العربية المتحدة',
    visualNote: 'رؤية من منظور آخر',
    chapter: '01 / 04',
    introEyebrow: 'أكثر من مجرد عقار',
    introTitleA: 'ليس مجرد مكان.',
    introTitleB: 'بل شعور',
    introTitleC: 'بالانتماء.',
    introBody: 'المنزل أكثر من عنوان، والقرار العقاري أكبر من مجرد معاملة. نساعدك على استكشاف الخيارات بنصيحة مدروسة وتوجيه واضح وفهم حقيقي لأولوياتك.',
    introAside: 'رؤيتك. منظورنا.',
    expertiseEyebrow: 'خبرات نضعها بين يديك',
    expertiseTitle: 'رؤية واضحة في كل خطوة.',
    expertiseLead: 'دعم عقاري مدروس يواكب خطوتك القادمة.',
    offerings: [
      { number: '01', name: 'الوساطة العقارية', description: 'نساعدك في خطوات الشراء والبيع مع وضع أولوياتك في صميم كل قرار.' },
      { number: '02', name: 'الاستشارات العقارية', description: 'رؤية واضحة ومدروسة لمساعدتك في تقييم الفرص واتخاذ القرار بثقة.' },
      { number: '03', name: 'المساعدة في المعاملات', description: 'مساندة عملية في فهم المستندات والتنسيق المتعلق بإجراءات المعاملات العقارية.' },
    ],
    processEyebrow: 'خطوات أبسط نحو ما تريد',
    processTitleA: 'خطوتك القادمة،',
    processTitleB: 'بمعنى أكبر.',
    processLead: 'بعيدًا عن التعقيد. حوار واضح ودعم مناسب لكل مرحلة من رحلتك.',
    steps: [
      { number: '01', title: 'نبدأ بالاستماع', text: 'حدثنا عمّا تبحث عنه، وما يهمك، وإلى أين تتطلع.' },
      { number: '02', title: 'نستكشف الخيارات معًا', text: 'نناقش الاحتمالات والاعتبارات المهمة وراء كل قرار.' },
      { number: '03', title: 'ندعم خطوتك التالية', text: 'عندما تكون مستعدًا، نساعدك في تنسيق الخطوات ذات الصلة برحلتك العقارية.' },
    ],
    quote: 'رحلتك العقارية الأفضل تبدأ بحوار يفهمك.',
    ctaEyebrow: 'فصلك القادم يبدأ من هنا',
    ctaTitleA: 'لنكتشف معًا',
    ctaTitleB: 'ما يلهمك.',
    ctaBody: 'سواء كنت تخطط للانتقال أو تفكر بقرار عقاري، نحن هنا لنناقش خياراتك.',
    email: 'راسلنا',
    call: 'اتصل بنا',
    footerLine: 'العقارات، برؤية أقرب للإنسان.',
    backTop: 'العودة للأعلى',
    rights: 'جميع الحقوق محفوظة.',
    parent: 'INBS لخدمات رجال الأعمال',
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const other = alternateLocale(locale);
  const contact = companyContact;
  const linkedIn = socialLinks.find((link) => link.id === 'linkedin');
  const instagram = socialLinks.find((link) => link.id === 'instagram');

  return (
    <div className="re-home" id="top">
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

      <main>
        <section className="re-hero" aria-labelledby="re-hero-title">
          <div className="re-hero-photo" aria-hidden="true">
            <Image src="/images/home/architecture.webp" alt="" fill priority sizes="100vw" />
          </div>
          <div className="re-hero-shade" aria-hidden="true" />
          <div className="re-hero-outline" aria-hidden="true"><span /><span /><span /></div>
          <div className="re-hero-inner">
            <div className="re-hero-topline"><span className="re-accent-line" />{t.kicker}</div>
            <div className="re-hero-main">
              <p className="re-overline re-hero-eyebrow">{t.eyebrow}</p>
              <h1 id="re-hero-title"><span>{t.titleFirst}</span><span>{t.titleSecond}</span><em>{t.titleAccent}</em></h1>
              <div className="re-hero-description">
                <p>{t.description}</p>
                <a href="#contact" className="re-hero-link">{t.heroCta}<span><ArrowUpRight size={22} aria-hidden="true" /></span></a>
              </div>
            </div>
            <div className="re-hero-bottom">
              <a href="#approach" className="re-scroll-prompt"><span className="re-scroll-circle"><ArrowDown size={19} aria-hidden="true" /></span>{t.scroll}</a>
              <span>{t.location}</span>
              <span>{t.chapter}</span>
            </div>
          </div>
          <div className="re-hero-vertical" aria-hidden="true">{t.visualNote}</div>
        </section>

        <section className="re-intro" id="approach" aria-labelledby="re-intro-title">
          <div className="re-shell re-intro-grid">
            <Reveal className="re-intro-index"><span className="re-section-number">01 <span>/ 04</span></span><span className="re-horizontal-rule" /></Reveal>
            <Reveal className="re-intro-main">
              <p className="re-overline re-dark-overline">{t.introEyebrow}</p>
              <h2 id="re-intro-title">{t.introTitleA}<br /><span>{t.introTitleB}</span><br /><em>{t.introTitleC}</em></h2>
              <div className="re-intro-copy"><span className="re-intro-mark" aria-hidden="true">✳</span><p>{t.introBody}</p></div>
            </Reveal>
            <div className="re-intro-aside" aria-hidden="true"><span>INBS</span><p>{t.introAside}</p></div>
          </div>
        </section>

        <section className="re-expertise" id="expertise" aria-labelledby="re-expertise-title">
          <div className="re-shell">
            <Reveal className="re-section-heading">
              <div className="re-section-heading-top"><span className="re-section-number">02 <span>/ 04</span></span><p className="re-overline">{t.expertiseEyebrow}</p></div>
              <div className="re-section-heading-main"><h2 id="re-expertise-title">{t.expertiseTitle}</h2><p>{t.expertiseLead}</p></div>
            </Reveal>
            <div className="re-offerings">
              {t.offerings.map((item) => (
                <Reveal className="re-offering" key={item.number}>
                  <span className="re-offering-num">{item.number}</span>
                  <div className="re-offering-copy"><h3>{item.name}</h3><p>{item.description}</p></div>
                  <span className="re-offering-arrow" aria-hidden="true"><ArrowUpRight size={24} strokeWidth={1.5} /></span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="re-journey" id="journey" aria-labelledby="re-journey-title">
          <div className="re-shell re-journey-layout">
            <Reveal className="re-journey-intro">
              <div className="re-section-heading-top"><span className="re-section-number">03 <span>/ 04</span></span><p className="re-overline re-dark-overline">{t.processEyebrow}</p></div>
              <h2 id="re-journey-title">{t.processTitleA}<br /><em>{t.processTitleB}</em></h2>
              <p>{t.processLead}</p>
              <span className="re-journey-art" aria-hidden="true">INBS<span>°</span></span>
            </Reveal>
            <div className="re-journey-steps">
              {t.steps.map((step) => (
                <Reveal className="re-journey-step" key={step.number}>
                  <span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><ArrowRight size={22} aria-hidden="true" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="re-statement" aria-label={t.quote}>
          <div className="re-statement-line" aria-hidden="true" />
          <Reveal className="re-shell"><p>“{t.quote}”</p><span>INBS REAL ESTATE <span aria-hidden="true">↗</span></span></Reveal>
        </section>

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
      </main>

      <footer className="re-footer">
        <div className="re-shell">
          <div className="re-footer-main">
            <div className="re-footer-brand"><Image src="/brand/inbs-logo.png" width={150} height={75} alt="INBS" /><p>{t.footerLine}</p></div>
            <div className="re-footer-links"><a href="#approach">{t.nav.philosophy}</a><a href="#expertise">{t.nav.expertise}</a><a href="#journey">{t.nav.process}</a><a href="#contact">{t.nav.contact}</a></div>
            <div className="re-footer-address"><MapPin size={18} aria-hidden="true" /><a href={contact.mapUrl} target="_blank" rel="noopener noreferrer">{contact.address[locale]}</a></div>
          </div>
          <div className="re-footer-bottom">
            <span>© {new Date().getFullYear()} INBS REAL ESTATE. {t.rights}</span>
            <div className="re-footer-social">
              {linkedIn && <a href={linkedIn.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>}
              {instagram && <a href={instagram.href} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={19} /></a>}
              <a href="https://inbs-website.vercel.app/" target="_blank" rel="noopener noreferrer">{t.parent}<MoveUpRight size={14} aria-hidden="true" /></a>
            </div>
            <a href="#top" className="re-to-top">{t.backTop}<ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
