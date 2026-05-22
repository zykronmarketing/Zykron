import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";

/* ── Hooks ───────────────────────────────────────────────────── */
function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

  .svc-icon { transition:background .35s,box-shadow .35s,transform .35s; }
  .svc-card:hover .svc-icon, .svc-card.expanded .svc-icon {
    background:rgba(0,71,255,.2) !important;
    box-shadow:0 0 24px rgba(0,71,255,.5);
    transform:scale(1.05) rotate(-3deg);
  }
  .svc-more {
    max-height:0; opacity:0; overflow:hidden; transition:max-height .45s cubic-bezier(.23,1,.32,1), opacity .3s;
  }
  .svc-more.open { max-height:240px; opacity:1; }
  .svc-arrow { transition:transform .25s; }
  .svc-arrow.open { transform:rotate(180deg); }

  .process-card {
    position:relative; border:1px solid rgba(255,255,255,.07); background:rgba(255,255,255,.025); border-radius:16px; padding:2rem;
    transition:border-color .3s, transform .3s, background .3s;
  }
  .process-card:hover, .process-card.active { border-color:rgba(0,71,255,.45); transform:translateY(-6px); background:rgba(0,71,255,.045); }
  .process-line { position:absolute; left:12%; right:12%; top:50%; height:1px; background:linear-gradient(90deg,transparent,rgba(0,71,255,.5),transparent); transform:translateY(-50%); }
  .process-pulse { width:10px; height:10px; border-radius:50%; background:#0047FF; box-shadow:0 0 0 0 rgba(0,71,255,.7); }

  .port-card {
    position:relative; overflow:hidden; cursor:pointer;
    border:1px solid rgba(255,255,255,.06);
    transition:border-color .4s,box-shadow .4s;
    border-radius:14px;
  }
  .port-card:hover { border-color:rgba(0,71,255,.45); box-shadow:0 0 44px rgba(0,71,255,.13); }
  .port-bg { transition:transform .6s cubic-bezier(.23,1,.32,1); }
  .port-card:hover .port-bg { transform:scale(1.05); }
  .port-overlay {
    position:absolute; inset:0;
    background:linear-gradient(175deg,rgba(0,20,150,.92) 0%,rgba(0,0,8,.9) 100%);
    opacity:0; transition:opacity .4s cubic-bezier(.23,1,.32,1);
    display:flex; flex-direction:column; justify-content:flex-end; padding:1.75rem;
  }
  .port-card:hover .port-overlay { opacity:1; }
  .port-reveal { transform:translateY(16px); opacity:0; transition:transform .35s ease .06s,opacity .35s ease .06s; }
  .port-card:hover .port-reveal { transform:translateY(0); opacity:1; }
  .port-desc { opacity:0; transform:translateY(6px); transition:opacity .35s,transform .35s; }
  .port-card:hover .port-desc { opacity:1; transform:translateY(0); }
  .portfolio-cursor {
    position:fixed; width:48px; height:48px; border-radius:50%; pointer-events:none; z-index:220; transform:translate(-50%,-50%);
    background:rgba(0,71,255,.36); border:1px solid rgba(120,160,255,.65); mix-blend-mode:screen; opacity:0; transition:opacity .18s;
  }
  .portfolio-cursor.show { opacity:1; }

  .testimonial-card {
    border:1px solid rgba(255,255,255,.07); border-radius:18px; background:linear-gradient(145deg,rgba(255,255,255,.045),rgba(0,0,0,.65));
    box-shadow:0 28px 90px rgba(0,71,255,.08); overflow:hidden;
  }
  .testimonial-dot { width:8px; height:8px; border-radius:50%; border:1px solid rgba(255,255,255,.25); background:transparent; cursor:pointer; transition:background .25s, transform .25s, border-color .25s; }
  .testimonial-dot.active { background:#0047FF; border-color:#0047FF; transform:scale(1.2); }

  .form-field { display:flex; flex-direction:column; gap:.45rem; }
  .form-input {
    width:100%; border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.04); color:#fff;
    border-radius:10px; padding:.9rem 1rem; font-family:'DM Sans',sans-serif; font-size:14px; transition:border-color .25s, box-shadow .25s, background .25s;
  }
  .form-input::placeholder { color:rgba(255,255,255,.38); }
  .form-input:focus { border-color:#0047FF; box-shadow:0 0 0 3px rgba(0,71,255,.18),0 0 24px rgba(0,71,255,.18); background:rgba(255,255,255,.055); }
  .form-error { min-height:16px; color:#8FB0FF; font-size:12px; }
  .success-check { width:62px; height:62px; border-radius:50%; display:grid; place-items:center; background:rgba(0,71,255,.14); border:1px solid rgba(0,71,255,.45); color:#fff; margin:0 auto 1.2rem; }

  .marquee-track { display:flex; white-space:nowrap; }
  .marquee-track:hover { animation-play-state:paused; }
  .scanline { position:absolute; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,rgba(0,71,255,.35),transparent); pointer-events:none; }
  .cursor { display:inline-block; }

  .stat-val {
    background:linear-gradient(120deg,#fff 20%,#0047FF 60%,#fff 80%);
    background-size:200% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
  }
  .blue-rule { width:48px; height:2px; background:linear-gradient(90deg,#0047FF,rgba(0,71,255,.15)); border-radius:2px; }
  .noise { position:absolute; inset:0; pointer-events:none; opacity:.028; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E"); }
  .ft-lnk { transition:color .25s; color:rgba(255,255,255,.52); }
  .ft-lnk:hover { color:#0047FF !important; }
  .social-link { width:36px; height:36px; display:grid; place-items:center; border:1px solid rgba(255,255,255,.1); border-radius:9px; color:rgba(255,255,255,.58); transition:color .25s,border-color .25s,box-shadow .25s; }
  .social-link:hover { color:#0047FF; border-color:rgba(0,71,255,.45); box-shadow:0 0 20px rgba(0,71,255,.18); }

  .lang-toggle { display:flex; align-items:center; gap:2px; border:1px solid rgba(255,255,255,.12); border-radius:8px; overflow:hidden; background:rgba(255,255,255,.04); }
  .lang-btn { padding:.3rem .6rem; font-size:11px; font-weight:700; letter-spacing:.07em; cursor:pointer; border:none; background:transparent; transition:background .2s,color .2s; font-family:'Syne',sans-serif; }
  .lang-btn.active { background:#0047FF; color:#fff; }
  .lang-btn:not(.active) { color:rgba(255,255,255,.55); }
  .lang-btn:not(.active):hover { color:rgba(255,255,255,.85); }

  .wa-btn { position:relative; overflow:hidden; transition:transform .3s,box-shadow .3s; }
  .wa-btn::before { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent); transform:skewX(-20deg); transition:left .5s; }
  .wa-btn:hover::before { left:150%; }
  .wa-btn:hover { transform:scale(1.04) translateY(-2px); box-shadow:0 0 40px rgba(0,71,255,.65),0 0 80px rgba(0,71,255,.3); }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  return reduced;
}

function useAnimatedStats(stats: readonly (readonly [string, string])[], active: boolean, reducedMotion: boolean) {
  const [done, setDone] = useState(false);
  const [values, setValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    setDone(false);
    setValues(stats.map(() => 0));
  }, [stats]);

  useEffect(() => {
    if (!active) return;

    const parsed = stats.map(([value]) => {
      const numeric = Number(String(value).match(/\d+(?:\.\d+)?/)?.[0] ?? 0);
      const suffix = String(value).replace(String(numeric), "");
      return { numeric, suffix };
    });

    if (reducedMotion) {
      setValues(parsed.map((item) => item.numeric));
      setDone(true);
      return;
    }

    let raf = 0;
    let start = 0;
    const duration = 1800;
    const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

    const tick = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const eased = easeOutCubic(progress);
      setValues(parsed.map((item) => Math.round(item.numeric * eased)));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValues(parsed.map((item) => item.numeric));
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reducedMotion, stats]);

  return stats.map(([finalValue, label], index) => {
    const numeric = Number(String(finalValue).match(/\d+(?:\.\d+)?/)?.[0] ?? 0);
    const suffix = String(finalValue).replace(String(numeric), "");
    return [done ? `${numeric}${suffix}` : `${values[index]}`, label] as const;
  });
}

/* ── Translations ───────────────────────────────────────────── */
const T = {
  en: {
    nav: ["Home", "Services", "Portfolio"],
    cta: "Let's Talk",
    heroLine1: "We Build The",
    heroLine2: "Future",
    heroLine3: "of Digital",
    typed: ["Websites", "Experiences", "Platforms", "Solutions"],
    heroSub: "We design, build, and launch premium digital experiences for brands that refuse to be ordinary. Precision meets velocity.",
    heroCta1: "Start Your Project",
    heroCta2: "View Our Work",
    stats: [["50+", "Projects Delivered"], ["98%", "Client Satisfaction"], ["3×", "Average ROI"], ["24h", "Response Time"]],
    scroll: "Scroll",
    svcLabel: "What We Do",
    svcTitle1: "Services Built",
    svcTitle2: "For Results",
    svcSub: "Every service we offer is engineered with a singular objective: measurable growth for your brand.",
    svcLearn: "Learn More",
    svcClose: "Show Less",
    portLabel: "Our Work",
    portTitle1: "Selected",
    portTitle2: "Portfolio",
    portAll: "View All Projects",
    portCase: "Case Study →",
    processLabel: "Process",
    processTitle1: "How We",
    processTitle2: "Work",
    processSub: "A clear workflow keeps creative decisions, technical execution and growth goals aligned from the first conversation to launch.",
    testimonialsLabel: "Testimonials",
    testimonialsTitle1: "What Clients",
    testimonialsTitle2: "Say",
    testimonialsSub: "A premium digital experience only matters when it creates clarity, speed and measurable business value.",
    ctaLabel: "Get In Touch",
    ctaTitle1: "Ready To Build",
    ctaTitle2: "Something Great?",
    ctaSub: "Let's talk about your next project. We respond within 24 hours and get straight to work — no fluff, just results.",
    ctaBtn: "Let's Talk on WhatsApp",
    ctaNote: "No commitment required · Free initial consultation · Response in <24h",
    ctaInfo: [["✉", "hello@zykron.io"], ["📍", "Global · Remote"], ["⚡", "Available Now"]],
    formTitle: "Brief your project",
    formName: "Name",
    formEmail: "E-mail",
    formMessage: "Message",
    formSubmit: "Send Message",
    formSuccessTitle: "Message sent",
    formSuccessText: "Thanks. We received your brief and will respond within 24 hours.",
    formErrors: {
      name: "Please enter your name.",
      email: "Please enter a valid e-mail.",
      message: "Please tell us a little about your project.",
    },
    footerTagline: "Premium digital experiences engineered for brands that move fast and think bigger.",
    footerServices: "Services",
    footerCompany: "Company",
    footerContact: "Contact",
    footerCompanyLinks: ["About", "Cases", "Blog", "Careers"],
    footerCopy: "© 2025 Zykron. All rights reserved.",
    services: [
      {
        num: "01",
        title: "Web Development & AI Sites",
        desc: "We engineer blazing-fast, AI-powered websites built to convert. From architecture to deployment — pure performance, zero compromise.",
        tags: ["Next.js", "React", "AI Integration", "CMS"],
        deliverables: ["Wireframes and interactive prototypes", "AI integrations and CMS architecture", "Production deployment with performance checks", "Conversion tracking and launch support"],
      },
      {
        num: "02",
        title: "Audiovisual & High-Conversion Reels",
        desc: "Cinematic content engineered to stop the scroll. We produce short-form assets built for maximum retention and brand impact.",
        tags: ["Video Production", "Motion Design", "Reels", "Storytelling"],
        deliverables: ["Creative direction and shot planning", "Motion design and editing for retention", "Platform-ready formats for Reels, Shorts and TikTok", "Publishing guidance and performance review"],
      },
      {
        num: "03",
        title: "Social Media Growth & Marketing",
        desc: "Data-driven strategies that build audiences and convert followers into paying customers at scale — organically and through paid channels.",
        tags: ["Growth Strategy", "Paid Ads", "Analytics", "Community"],
        deliverables: ["Audience and funnel strategy", "Paid traffic campaign setup", "Creative testing and analytics dashboards", "Monthly optimization roadmap"],
      },
    ],
    process: [
      { num: "01", icon: "◇", title: "Discovery", desc: "We understand your business, audience and objectives." },
      { num: "02", icon: "◌", title: "Strategy", desc: "We plan every detail before execution begins." },
      { num: "03", icon: "▣", title: "Execution", desc: "We build with speed, precision and premium craft." },
      { num: "04", icon: "△", title: "Launch", desc: "We ship, measure and optimize for growth." },
    ],
    testimonials: [
      { initials: "MR", name: "Marina Rocha", role: "Founder, Volt Studio", text: "Zykron turned a scattered idea into a premium launch experience. The process was fast, strategic and visually exceptional." },
      { initials: "LC", name: "Lucas Chen", role: "COO, Nexus Labs", text: "The team combines design taste with technical discipline. Our new platform feels sharper, loads faster and converts better." },
      { initials: "AN", name: "Aline Nunes", role: "Marketing Lead, Aurora", text: "They understood the brand immediately and delivered assets that improved engagement across every channel." },
    ],
    portfolio: [
      { num: "01", title: "NEXUS AI Platform", tag: "AI / Web App", desc: "Next-gen AI-powered SaaS dashboard with real-time analytics engine.", size: "large" },
      { num: "02", title: "VOLT E-Commerce", tag: "E-Commerce", desc: "Ultra-fast storefront with 3× conversion rate lift." },
      { num: "03", title: "PRISM Brand Identity", tag: "Branding", desc: "Full visual identity system for a fintech startup." },
      { num: "04", title: "CIPHER Web App", tag: "SaaS", desc: "B2B collaboration platform serving 10k+ users." },
      { num: "05", title: "AURORA Campaign", tag: "Marketing", desc: "Multi-platform campaign that reached 2M impressions." },
      { num: "06", title: "FLUX Analytics", tag: "Analytics", desc: "Real-time data visualization for a logistics firm.", size: "banner" },
    ],
  },
  pt: {
    nav: ["Início", "Serviços", "Portfólio"],
    cta: "Fale Conosco",
    heroLine1: "Construímos",
    heroLine2: "O Futuro",
    heroLine3: "Digital com",
    typed: ["Sites", "Apps", "Plataformas", "Estratégia"],
    heroSub: "Criamos experiências digitais premium para marcas que não aceitam o ordinário. Design, tecnologia e resultado em um só lugar.",
    heroCta1: "Começar Projeto",
    heroCta2: "Ver Nossos Cases",
    stats: [["50+", "Projetos Entregues"], ["98%", "Satisfação dos Clientes"], ["3×", "ROI Médio"], ["24h", "Tempo de Resposta"]],
    scroll: "Rolar",
    svcLabel: "Como Atuamos",
    svcTitle1: "Nossos",
    svcTitle2: "Serviços",
    svcSub: "Cada entrega é orientada por um objetivo claro: crescimento real e mensurável para o seu negócio.",
    svcLearn: "Saiba Mais",
    svcClose: "Mostrar Menos",
    portLabel: "Cases",
    portTitle1: "Projetos",
    portTitle2: "Realizados",
    portAll: "Ver Todos os Cases",
    portCase: "Ver Case →",
    processLabel: "Processo",
    processTitle1: "Como",
    processTitle2: "Trabalhamos",
    processSub: "Um fluxo claro mantém decisões criativas, execução técnica e metas de crescimento alinhadas da primeira conversa ao lançamento.",
    testimonialsLabel: "Depoimentos",
    testimonialsTitle1: "O Que Dizem",
    testimonialsTitle2: "Os Clientes",
    testimonialsSub: "Uma experiência digital premium só importa quando gera clareza, velocidade e valor mensurável para o negócio.",
    ctaLabel: "Fale com a Gente",
    ctaTitle1: "Vamos Criar",
    ctaTitle2: "Algo Grande?",
    ctaSub: "Conta pra gente sobre o seu projeto. Retornamos em até 24h e já chegamos com ideias — sem enrolação, só resultado.",
    ctaBtn: "Falar pelo WhatsApp",
    ctaNote: "Sem compromisso · Consultoria inicial gratuita · Retorno em menos de 24h",
    ctaInfo: [["✉", "hello@zykron.io"], ["📍", "Global · Remoto"], ["⚡", "Disponível Agora"]],
    formTitle: "Conte sobre o projeto",
    formName: "Nome",
    formEmail: "E-mail",
    formMessage: "Mensagem",
    formSubmit: "Enviar Mensagem",
    formSuccessTitle: "Mensagem enviada",
    formSuccessText: "Obrigado. Recebemos seu briefing e responderemos em até 24 horas.",
    formErrors: {
      name: "Informe seu nome.",
      email: "Informe um e-mail válido.",
      message: "Conte um pouco sobre o seu projeto.",
    },
    footerTagline: "Experiências digitais premium para marcas que avançam rápido e pensam maior.",
    footerServices: "Serviços",
    footerCompany: "Company",
    footerContact: "Contato",
    footerCompanyLinks: ["Sobre", "Cases", "Blog", "Carreiras"],
    footerCopy: "© 2025 Zykron. Todos os direitos reservados.",
    services: [
      {
        num: "01",
        title: "Desenvolvimento Web & Sites com IA",
        desc: "Desenvolvemos sites ultrarrápidos e com IA, feitos para converter. Da arquitetura ao deploy — performance pura, sem concessões.",
        tags: ["Next.js", "React", "Integração IA", "CMS"],
        deliverables: ["Wireframes e protótipos interativos", "Integrações com IA e arquitetura CMS", "Deploy em produção com checagem de performance", "Métricas de conversão e suporte de lançamento"],
      },
      {
        num: "02",
        title: "Audiovisual & Reels de Alta Conversão",
        desc: "Conteúdo cinematográfico projetado para parar o scroll. Produzimos ativos de curta duração com máxima retenção e impacto de marca.",
        tags: ["Produção de Vídeo", "Motion Design", "Reels", "Storytelling"],
        deliverables: ["Direção criativa e planejamento de captação", "Motion design e edição focada em retenção", "Formatos prontos para Reels, Shorts e TikTok", "Orientação de publicação e análise de desempenho"],
      },
      {
        num: "03",
        title: "Crescimento em Redes Sociais & Marketing",
        desc: "Estratégias baseadas em dados que constroem audiências e convertem seguidores em clientes pagantes em escala — orgânico e pago.",
        tags: ["Estratégia de Crescimento", "Tráfego Pago", "Analytics", "Comunidade"],
        deliverables: ["Estratégia de audiência e funil", "Configuração de campanhas de tráfego pago", "Testes criativos e dashboards de analytics", "Roadmap mensal de otimização"],
      },
    ],
    process: [
      { num: "01", icon: "◇", title: "Discovery", desc: "Entendemos seu negócio, público e objetivos." },
      { num: "02", icon: "◌", title: "Strategy", desc: "Planejamos cada detalhe antes de executar." },
      { num: "03", icon: "▣", title: "Execution", desc: "Desenvolvemos com velocidade, precisão e acabamento premium." },
      { num: "04", icon: "△", title: "Launch", desc: "Entregamos, medimos e otimizamos para crescimento." },
    ],
    testimonials: [
      { initials: "MR", name: "Marina Rocha", role: "Fundadora, Volt Studio", text: "A Zykron transformou uma ideia solta em uma experiência de lançamento premium. O processo foi rápido, estratégico e visualmente impecável." },
      { initials: "LC", name: "Lucas Chen", role: "COO, Nexus Labs", text: "A equipe combina bom gosto de design com disciplina técnica. Nossa nova plataforma ficou mais clara, mais rápida e converte melhor." },
      { initials: "AN", name: "Aline Nunes", role: "Marketing Lead, Aurora", text: "Eles entenderam a marca imediatamente e entregaram ativos que melhoraram o engajamento em todos os canais." },
    ],
    portfolio: [
      { num: "01", title: "Plataforma NEXUS AI", tag: "IA / Web App", desc: "Dashboard SaaS com IA de última geração e motor de analytics em tempo real.", size: "large" },
      { num: "02", title: "VOLT E-Commerce", tag: "E-Commerce", desc: "Loja ultrarrápida com aumento de 3× na taxa de conversão." },
      { num: "03", title: "Identidade PRISM", tag: "Branding", desc: "Sistema completo de identidade visual para uma startup de fintech." },
      { num: "04", title: "CIPHER Web App", tag: "SaaS", desc: "Plataforma de colaboração B2B com mais de 10 mil usuários." },
      { num: "05", title: "Campanha AURORA", tag: "Marketing", desc: "Campanha multiplataforma que atingiu 2 milhões de impressões." },
      { num: "06", title: "FLUX Analytics", tag: "Analytics", desc: "Visualização de dados em tempo real para empresa de logística.", size: "banner" },
    ],
  },
} as const;

type Lang = keyof typeof T;
type Service = (typeof T)[Lang]["services"][number];
type PortfolioItem = (typeof T)[Lang]["portfolio"][number];

/* ── Accent colours per portfolio card ─────────────────────── */
const PORT_STYLES = [
  { bg: "#000818", accent: "rgba(0,71,255,.28)", accentB: "rgba(0,40,180,.15)", color: "#0047FF" },
  { bg: "#080010", accent: "rgba(110,0,230,.22)", accentB: "rgba(60,0,130,.1)", color: "#7C3BFF" },
  { bg: "#001010", accent: "rgba(0,160,210,.18)", accentB: "rgba(0,80,100,.1)", color: "#00B7FF" },
  { bg: "#06000e", accent: "rgba(0,71,255,.2)", accentB: "rgba(0,30,120,.1)", color: "#2F65FF" },
  { bg: "#001208", accent: "rgba(0,200,100,.14)", accentB: "rgba(0,100,50,.08)", color: "#22D986" },
  { bg: "#0a0800", accent: "rgba(220,130,0,.15)", accentB: "rgba(120,70,0,.08)", color: "#F2A900" },
] as const;

/* ── Inline SVG icons ───────────────────────────────────────── */
const IconMonitor = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" /><line x1="8" y1="21" x2="16" y2="21" />
  </svg>
);
const IconVideo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
);
const IconTrend = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const SVC_ICONS = [<IconMonitor key="monitor" />, <IconVideo key="video" />, <IconTrend key="trend" />];

const SocialIcon = ({ type }: { type: "instagram" | "linkedin" | "x" | "youtube" }) => {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (type === "instagram") return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>;
  if (type === "linkedin") return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
  if (type === "youtube") return <svg {...common}><path d="M22 12s0-4-1-5c-.8-.9-1.7-1-2.1-1.1C15.9 5.6 12 5.6 12 5.6s-3.9 0-6.9.3C4.7 6 3.8 6.1 3 7c-1 1-1 5-1 5s0 4 1 5c.8.9 1.8 1 2.2 1.1 3 .3 6.8.3 6.8.3s3.9 0 6.9-.3c.4-.1 1.3-.2 2.1-1.1 1-1 1-5 1-5z" /><polygon points="10 9 16 12 10 15 10 9" fill="currentColor" stroke="none" /></svg>;
  return <svg {...common}><path d="M4 4l16 16" /><path d="M20 4L4 20" /></svg>;
};

/* ── Z Logo ─────────────────────────────────────────────────── */
const ZLogo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <rect width="100" height="100" rx="18" fill="#0047FF" />
    <polygon points="18,22 82,22 82,34 38,66 82,66 82,78 18,78 18,66 62,34 18,34" fill="white" />
    <polygon points="50,38 60,38 44,62 34,62" fill="#0047FF" opacity=".85" />
  </svg>
);

/* ── Global CSS ─────────────────────────────────────────────── */
const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root { --blue:#0047FF; --blue-glow:rgba(0,71,255,.6); }
  html { scroll-behavior: smooth; }
  body { background:#000; }
  section[id] { scroll-margin-top: 64px; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #000; }
  ::-webkit-scrollbar-thumb { background: #0047FF; border-radius: 2px; }

  a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
    outline: 2px solid #0047FF;
    outline-offset: 3px;
  }

  .font-bebas { font-family:'Bebas Neue',sans-serif; }
  .font-syne  { font-family:'Syne',sans-serif; }
  .font-dm    { font-family:'DM Sans',sans-serif; }

  .content-wrap { transition: opacity 150ms ease; }
  .content-wrap.fading { opacity:.25; }

  .hero-grid {
    background-image:
      linear-gradient(rgba(0,71,255,.055) 1px,transparent 1px),
      linear-gradient(90deg,rgba(0,71,255,.055) 1px,transparent 1px);
    background-size: 60px 60px;
  }

  .gradient-text {
    background: linear-gradient(130deg,#fff 30%,#0047FF 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .blue-glow-text { text-shadow: 0 0 40px rgba(0,71,255,.7), 0 0 80px rgba(0,71,255,.35); }

  .nav-lnk { position:relative; }
  .nav-lnk::after {
    content:''; position:absolute; bottom:-3px; left:0;
    width:0; height:1px; background:#0047FF; transition:width .3s;
  }
  .nav-lnk:hover::after, .nav-lnk.active::after { width:100%; }
  .nav-lnk:hover, .nav-lnk.active { color:#fff !important; }

  .btn-primary {
    position:relative; overflow:hidden; background:#0047FF;
    transition:transform .25s,box-shadow .25s;
  }
  .btn-primary::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(135deg,rgba(255,255,255,.15) 0%,transparent 55%);
    opacity:0; transition:opacity .3s;
  }
  .btn-primary:hover::after { opacity:1; }
  .btn-primary:hover { transform:translateY(-2px); box-shadow:0 0 28px var(--blue-glow),0 0 60px rgba(0,71,255,.3); }
  .btn-primary:active { transform:translateY(0); }

  .btn-ghost { transition:color .25s,border-color .25s,box-shadow .25s; }
  .btn-ghost:hover { color:#0047FF !important; border-color:#0047FF !important; box-shadow:0 0 14px rgba(0,71,255,.3); }

  .hamburger {
    display:none; width:42px; height:42px; border:1px solid rgba(255,255,255,.14); border-radius:10px;
    background:rgba(255,255,255,.04); color:#fff; align-items:center; justify-content:center; cursor:pointer;
  }
  .hamburger-lines { width:18px; height:13px; position:relative; display:block; }
  .hamburger-lines span { position:absolute; left:0; width:100%; height:2px; border-radius:999px; background:#fff; transition:transform .25s, top .25s, opacity .25s; }
  .hamburger-lines span:nth-child(1){ top:0; }
  .hamburger-lines span:nth-child(2){ top:6px; }
  .hamburger-lines span:nth-child(3){ top:12px; }
  .hamburger.open .hamburger-lines span:nth-child(1){ top:6px; transform:rotate(45deg); }
  .hamburger.open .hamburger-lines span:nth-child(2){ opacity:0; }
  .hamburger.open .hamburger-lines span:nth-child(3){ top:6px; transform:rotate(-45deg); }
  .mobile-menu {
    position:fixed; inset:64px 0 0; z-index:190; background:rgba(0,0,0,.96); backdrop-filter:blur(22px) saturate(180%);
    transform:translateY(-12px); opacity:0; pointer-events:none; transition:opacity .25s, transform .25s;
    display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2rem;
  }
  .mobile-menu.open { opacity:1; pointer-events:auto; transform:translateY(0); }
  .mobile-menu a { color:#fff; text-decoration:none; font-size:clamp(2.4rem,12vw,5rem); line-height:1; letter-spacing:.02em; }

  .svc-card {
    border:1px solid rgba(255,255,255,.07);
    background:linear-gradient(145deg,rgba(8,8,20,1) 0%,#000 100%);
    transition:transform .4s cubic-bezier(.23,1,.32,1), border-color .4s, box-shadow .4s;
    position:relative; overflow:hidden;
  }
  .svc-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:2px;
    background:linear-gradient(90deg,transparent,#0047FF,transparent);
    transform:scaleX(0); transition:transform .5s;
  }
  .svc-card::after {
    content:''; position:absolute; inset:0;
    background:radial-gradient(ellipse 80% 50% at 50% 100%,rgba(0,71,255,.07) 0%,transparent 70%);
    opacity:0; transition:opacity .4s; pointer-events:none;
  }
  .svc-card:hover::before, .svc-card.expanded::before { transform:scaleX(1); }
  .svc-card:hover::after, .svc-card.expanded::after  { opacity:1; }
  .svc-card:hover, .svc-card.expanded {
    transform:translateY(-8px) scale(1.012);
    border-color:rgba(0,71,255,.45);
    box-shadow:0 24px 64px rgba(0,71,255,.13),0 0 40px rgba(0,71,255,.08),inset 0 0 40px rgba(0,71,255,.04);
  }
  @media (prefers-reduced-motion: no-preference) {
    @keyframes fadeUp   { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
    @keyframes pulseDot { 0%,100%{box-shadow:0 0 0 0 rgba(0,71,255,.7)} 50%{box-shadow:0 0 0 6px rgba(0,71,255,0)} }
    @keyframes gridDrift{ from{background-position:0 0} to{background-position:0 60px} }
    @keyframes marque   { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    @keyframes floatY   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    @keyframes scanDown { 0%{top:-4px;opacity:.8} 100%{top:100%;opacity:0} }
    @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes successPop { from{opacity:0; transform:scale(.88) translateY(12px)} to{opacity:1; transform:scale(1) translateY(0)} }
    .hero-grid { animation:gridDrift 14s linear infinite; }
    .hero-fade-1 { animation:fadeUp .85s .18s ease forwards; opacity:0; }
    .hero-fade-2 { animation:fadeUp .85s .38s ease forwards; opacity:0; }
    .hero-fade-3 { animation:fadeUp .85s .54s ease forwards; opacity:0; }
    .hero-fade-4 { animation:fadeUp .85s .74s ease forwards; opacity:0; }
    .hero-scroll-cue { animation:fadeIn 1s 1.2s ease forwards; opacity:0; transition:opacity .35s, transform .35s; }
    .hero-scroll-cue.hidden { opacity:0 !important; transform:translateX(-50%) translateY(10px) !important; pointer-events:none; }
    .float-line { animation:floatY 2.2s ease-in-out infinite; }
    .marquee-track { animation:marque 22s linear infinite; }
    .scanline { animation:scanDown 6s ease-in-out infinite; }
    .cursor { animation:blink 1s step-end infinite; }
    .process-card.active .process-pulse { animation:pulseDot 1.6s infinite; }
    .success-state { animation:successPop .45s ease both; }
    .testimonial-slide { transition:opacity .35s, transform .35s; }
    .reveal { opacity:0; transform:translateY(44px); transition:opacity .75s cubic-bezier(.23,1,.32,1),transform .75s cubic-bezier(.23,1,.32,1); }
    .reveal.show { opacity:1; transform:translateY(0); }
    .reveal.d1{transition-delay:.1s} .reveal.d2{transition-delay:.2s} .reveal.d3{transition-delay:.3s}
    .reveal.d4{transition-delay:.4s} .reveal.d5{transition-delay:.5s}
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior:auto; }
    *, *::before, *::after { animation:none !important; transition:none !important; }
    .reveal, .hero-fade-1, .hero-fade-2, .hero-fade-3, .hero-fade-4, .hero-scroll-cue { opacity:1 !important; transform:none !important; }
  }

  @media(max-width:768px){
    nav { padding:0 1rem !important; }
    .nav-links, .nav-cta { display:none !important; }
    .hamburger { display:flex; }
    .port-grid { grid-template-columns:1fr !important; }
    .port-card { grid-area:auto !important; height:220px !important; }
    .port-overlay, .portfolio-cursor { display:none !important; }
    .port-desc { opacity:.5 !important; transform:translateY(0) !important; }
    .svc-grid, .process-grid, .contact-grid, .footer-grid { grid-template-columns:1fr !important; }
    .hero-grid { background-size:36px 36px; }
    .port-banner-inner { flex-direction:column !important; align-items:flex-start !important; gap:.8rem !important; }
    .process-line { display:none; }
    .section-heading-row { align-items:flex-start !important; }
    .section-heading-row p { text-align:left !important; }
  }
  @media(max-width:480px){
    .hero-btns { flex-direction:column !important; }
    .footer-bottom { flex-direction:column !important; align-items:flex-start !important; }
    .lang-toggle.footer-lang { margin-left:0 !important; }
  }
`;

const NAV_TARGETS = ["#home", "#services", "#portfolio"] as const;
const SECTION_IDS = ["home", "services", "process", "portfolio", "testimonials", "contact"];

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
export default function ZykronLanding() {
  const [lang, setLang] = useState<Lang>("pt");
  const [scrolled, setScrolled] = useState(false);
  const [hideScrollCue, setHideScrollCue] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [contentFading, setContentFading] = useState(false);
  const [hCard, setHCard] = useState<number | null>(null);
  const [hPort, setHPort] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [activeProcess, setActiveProcess] = useState(1);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0, show: false });
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formSent, setFormSent] = useState(false);

  const reducedMotion = usePrefersReducedMotion();
  const t = T[lang];

  const [statsRef, statsIn] = useInView<HTMLDivElement>(0.35);
  const [svcRef, svcIn] = useInView<HTMLDivElement>();
  const [processRef, processIn] = useInView<HTMLDivElement>();
  const [portRef, portIn] = useInView<HTMLDivElement>();
  const [testRef, testIn] = useInView<HTMLDivElement>();
  const [ctaRef, ctaIn] = useInView<HTMLDivElement>();
  const animatedStats = useAnimatedStats(t.stats, statsIn, reducedMotion);

  const longestWord = t.typed.reduce((a, b) => (a.length >= b.length ? a : b), "");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const id = "zykron-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 8) setHideScrollCue(true);
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [activeSection]);

  useEffect(() => {
    setWordIdx(0);
    setCharIdx(reducedMotion ? t.typed[0].length : 0);
    setDeleting(false);
  }, [lang, reducedMotion, t.typed]);

  useEffect(() => {
    if (reducedMotion) return;
    const words = t.typed;
    const current = words[wordIdx];
    const speed = deleting ? 55 : 105;
    const id = setTimeout(() => {
      if (!deleting) {
        const next = charIdx + 1;
        setCharIdx(next);
        if (next === current.length) setTimeout(() => setDeleting(true), 1500);
      } else {
        const next = charIdx - 1;
        setCharIdx(next);
        if (next === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(id);
  }, [charIdx, deleting, wordIdx, lang, reducedMotion, t.typed]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setTestimonialIdx((idx) => (idx + 1) % t.testimonials.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [reducedMotion, t.testimonials.length]);

  const typedWord = reducedMotion ? t.typed[0] : t.typed[wordIdx].slice(0, charIdx);

  const MARQUEE = lang === "en"
    ? ["WEB DEVELOPMENT", "·", "AI INTEGRATION", "·", "BRAND IDENTITY", "·", "MOTION DESIGN", "·", "SOCIAL GROWTH", "·", "CONVERSION OPTIMIZATION", "·", "UI/UX DESIGN", "·", "SAAS PLATFORMS", "·", "VIDEO PRODUCTION", "·", "WEB DEVELOPMENT", "·", "AI INTEGRATION", "·", "BRAND IDENTITY", "·", "MOTION DESIGN", "·", "SOCIAL GROWTH", "·", "CONVERSION OPTIMIZATION", "·", "UI/UX DESIGN", "·", "SAAS PLATFORMS", "·", "VIDEO PRODUCTION", "·"]
    : ["DESENVOLVIMENTO WEB", "·", "INTEGRAÇÃO IA", "·", "IDENTIDADE DE MARCA", "·", "MOTION DESIGN", "·", "CRESCIMENTO EM REDES", "·", "OTIMIZAÇÃO DE CONVERSÃO", "·", "UI/UX DESIGN", "·", "PLATAFORMAS SAAS", "·", "PRODUÇÃO DE VÍDEO", "·", "DESENVOLVIMENTO WEB", "·", "INTEGRAÇÃO IA", "·", "IDENTIDADE DE MARCA", "·", "MOTION DESIGN", "·", "CRESCIMENTO EM REDES", "·", "OTIMIZAÇÃO DE CONVERSÃO", "·", "UI/UX DESIGN", "·", "PLATAFORMAS SAAS", "·", "PRODUÇÃO DE VÍDEO", "·"];

  const changeLang = (next: Lang) => {
    if (next === lang) return;
    setContentFading(true);
    window.setTimeout(() => {
      setLang(next);
      setContentFading(false);
    }, 150);
  };

  const closeMobileNav = () => setMobileOpen(false);

  const validateForm = () => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = t.formErrors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errors.email = t.formErrors.email;
    if (!formData.message.trim()) errors.message = t.formErrors.message;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;
    setFormSent(true);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setFormErrors((current) => ({ ...current, [field]: undefined }));
  };

  const nextTestimonial = () => setTestimonialIdx((idx) => (idx + 1) % t.testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((idx) => (idx - 1 + t.testimonials.length) % t.testimonials.length);

  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "'DM Sans',sans-serif", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 2.5rem", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "background .4s,border-color .4s,backdrop-filter .4s",
        backdropFilter: scrolled || mobileOpen ? "blur(24px) saturate(180%)" : "none",
        background: scrolled || mobileOpen ? "rgba(0,0,0,.78)" : "transparent",
        borderBottom: scrolled || mobileOpen ? "1px solid rgba(255,255,255,.07)" : "1px solid transparent",
      }}>
        <a href="#home" onClick={closeMobileNav} aria-label="Zykron home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <ZLogo size={34} />
          <span className="font-syne" style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-.02em", color: "#fff" }}>Zykron</span>
        </a>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {t.nav.map((lbl, i) => {
            const target = NAV_TARGETS[i];
            const active = activeSection === target.replace("#", "");
            return (
              <a key={lbl} href={target} onClick={closeMobileNav}
                className={`nav-lnk font-syne${active ? " active" : ""}`}
                style={{ color: active ? "#fff" : "rgba(255,255,255,.68)", textDecoration: "none", fontSize: 13, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", transition: "color .25s" }}>
                {lbl}
              </a>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LanguageToggle lang={lang} onChange={changeLang} />
          <a href="#contact" onClick={closeMobileNav} className="btn-primary nav-cta font-syne"
            style={{ color: "#fff", textDecoration: "none", padding: ".55rem 1.4rem", borderRadius: 7, fontSize: 13, fontWeight: 700, letterSpacing: ".05em", display: "flex", alignItems: "center", gap: 6 }}>
            {t.cta}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <button type="button" aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={mobileOpen} className={`hamburger${mobileOpen ? " open" : ""}`} onClick={() => setMobileOpen((v) => !v)}>
            <span className="hamburger-lines" aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} aria-hidden={!mobileOpen}>
        {t.nav.map((lbl, i) => (
          <a key={lbl} href={NAV_TARGETS[i]} onClick={closeMobileNav} className="font-bebas">{lbl}</a>
        ))}
        <a href="#contact" onClick={closeMobileNav} className="font-bebas">{t.cta}</a>
      </div>

      <div className={`content-wrap${contentFading ? " fading" : ""}`}>
        <section id="home" style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: 64 }}>
          <div className="hero-grid" style={{ position: "absolute", inset: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 55% at 50% 42%,rgba(0,71,255,.14) 0%,transparent 70%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 40% at 50% 100%,#000 0%,transparent 70%)" }} />
          <div className="noise" />
          <div className="scanline" />

          {[[6, 15, 80], [94, 25, 70]].map(([l, t2, b], i) => (
            <div key={i} style={{
              position: "absolute", left: `${l}%`, top: `${t2}%`, bottom: `${100 - t2 - b}%`,
              width: 1, background: `linear-gradient(to bottom,transparent,rgba(0,71,255,${i === 0 ? .45 : .25}),transparent)`, pointerEvents: "none",
            }} />
          ))}
          <div style={{ position: "absolute", top: 80, left: 32 }}><div style={{ width: 24, height: 24, borderTop: "1.5px solid rgba(0,71,255,.5)", borderLeft: "1.5px solid rgba(0,71,255,.5)" }} /></div>
          <div style={{ position: "absolute", bottom: 60, right: 32 }}><div style={{ width: 24, height: 24, borderBottom: "1.5px solid rgba(0,71,255,.3)", borderRight: "1.5px solid rgba(0,71,255,.3)" }} /></div>

          <div style={{ textAlign: "center", maxWidth: 960, padding: "0 1.5rem", position: "relative", zIndex: 2 }}>
            <h1 className="font-bebas hero-fade-1" style={{ fontSize: "clamp(3.8rem,10.5vw,9.5rem)", lineHeight: .92, letterSpacing: "-.01em", marginBottom: "1.6rem" }}>
              <span style={{ display: "block", color: "#fff" }}>{t.heroLine1}</span>
              <span style={{ display: "block", color: "#0047FF" }} className="blue-glow-text">{t.heroLine2}</span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                {t.heroLine3}&nbsp;
                <span style={{ display: "inline-block", minWidth: `${longestWord.length * 0.58}em`, textAlign: "left", verticalAlign: "top" }}>
                  <span style={{ color: "rgba(255,255,255,.92)" }}>{typedWord}</span>
                  {!reducedMotion && <span className="cursor" style={{ color: "#0047FF" }}>_</span>}
                </span>
              </span>
            </h1>

            <p className="font-dm hero-fade-2" style={{ fontSize: "clamp(.95rem,2vw,1.1rem)", color: "rgba(255,255,255,.62)", maxWidth: 520, margin: "0 auto 2.8rem", lineHeight: 1.75 }}>
              {t.heroSub}
            </p>

            <div className="hero-btns hero-fade-3" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary font-syne" style={{ color: "#fff", textDecoration: "none", padding: ".9rem 2.4rem", borderRadius: 8, fontSize: 14, fontWeight: 700, letterSpacing: ".06em", display: "flex", alignItems: "center", gap: 8 }}>
                {t.heroCta1}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#portfolio" className="btn-ghost font-syne" style={{ color: "rgba(255,255,255,.76)", textDecoration: "none", padding: ".9rem 2.4rem", borderRadius: 8, fontSize: 14, fontWeight: 600, letterSpacing: ".06em", border: "1px solid rgba(255,255,255,.18)", background: "transparent" }}>{t.heroCta2}</a>
            </div>

            <div ref={statsRef} className="hero-fade-4" style={{ display: "flex", justifyContent: "center", gap: "3.5rem", marginTop: "4.5rem", flexWrap: "wrap" }}>
              {animatedStats.map(([val, lbl]) => (
                <div key={lbl} style={{ textAlign: "center" }}>
                  <div className="stat-val font-bebas" style={{ fontSize: "2.4rem", letterSpacing: ".05em" }}>{val}</div>
                  <div className="font-dm" style={{ fontSize: 11, color: "rgba(255,255,255,.48)", letterSpacing: ".12em", textTransform: "uppercase", marginTop: 2 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`hero-scroll-cue${hideScrollCue ? " hidden" : ""}`} style={{ position: "absolute", bottom: "2.2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span className="font-syne" style={{ fontSize: 9, letterSpacing: ".22em", color: "rgba(255,255,255,.48)", textTransform: "uppercase" }}>{t.scroll}</span>
            <div className="float-line" style={{ width: 1, height: 38, background: "linear-gradient(to bottom,rgba(0,71,255,.8),transparent)" }} />
          </div>
        </section>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)", padding: "1.1rem 0", overflow: "hidden", background: "rgba(0,71,255,.03)" }}>
          <div className="marquee-track" style={{ gap: "2rem" }}>
            {MARQUEE.map((item, i) => (
              <span key={`${item}-${i}`} className="font-syne" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: item === "·" ? "#0047FF" : "rgba(255,255,255,.52)", marginRight: "2rem", flexShrink: 0 }}>{item}</span>
            ))}
          </div>
        </div>

        <section id="services" style={{ padding: "7rem 2rem 8rem" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }}>
            <div ref={svcRef} className={`reveal${svcIn ? " show" : ""}`} style={{ marginBottom: "3.5rem" }}>
              <SectionKicker label={t.svcLabel} />
              <div className="section-heading-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <h2 className="font-bebas" style={{ fontSize: "clamp(2.6rem,6vw,5.2rem)", letterSpacing: "-.01em", lineHeight: 1 }}>{t.svcTitle1}<br /><span style={{ color: "#0047FF" }}>{t.svcTitle2}</span></h2>
                <p className="font-dm" style={{ color: "rgba(255,255,255,.55)", fontSize: 14, maxWidth: 340, lineHeight: 1.7, textAlign: "right" }}>{t.svcSub}</p>
              </div>
            </div>

            <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))", gap: "1.25rem" }}>
              {t.services.map((svc, i) => (
                <ServiceCard key={svc.title} svc={svc} icon={SVC_ICONS[i]} index={i} expanded={expandedService === i} hovered={hCard === i} inView={svcIn} labelMore={t.svcLearn} labelClose={t.svcClose} onHover={setHCard} onToggle={() => setExpandedService(expandedService === i ? null : i)} />
              ))}
            </div>
          </div>
        </section>

        <section id="process" style={{ padding: "7rem 2rem 8rem", position: "relative", background: "rgba(255,255,255,.012)" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
            <div ref={processRef} className={`reveal${processIn ? " show" : ""}`} style={{ marginBottom: "3.5rem" }}>
              <SectionKicker label={t.processLabel} />
              <div className="section-heading-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <h2 className="font-bebas" style={{ fontSize: "clamp(2.6rem,6vw,5.2rem)", letterSpacing: "-.01em", lineHeight: 1 }}>{t.processTitle1}<br /><span style={{ color: "#0047FF" }}>{t.processTitle2}</span></h2>
                <p className="font-dm" style={{ color: "rgba(255,255,255,.55)", fontSize: 14, maxWidth: 420, lineHeight: 1.7, textAlign: "right" }}>{t.processSub}</p>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div className="process-line" aria-hidden="true" />
              <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem", position: "relative" }}>
                {t.process.map((step, i) => (
                  <div key={step.num} className={`process-card reveal${processIn ? " show" : ""} d${i + 1}${activeProcess === i ? " active" : ""}`} onMouseEnter={() => setActiveProcess(i)}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.7rem" }}>
                      <span className="font-bebas" style={{ fontSize: "3.3rem", color: "#0047FF", lineHeight: .9 }}>{step.num}</span>
                      <span style={{ width: 42, height: 42, display: "grid", placeItems: "center", borderRadius: 12, background: "rgba(0,71,255,.1)", border: "1px solid rgba(0,71,255,.22)", color: "#0047FF", fontSize: 22 }}>{step.icon}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: ".6rem" }}>
                      {activeProcess === i && <span className="process-pulse" aria-hidden="true" />}
                      <h3 className="font-syne" style={{ fontSize: "1rem", fontWeight: 800, letterSpacing: "-.01em" }}>{step.title}</h3>
                    </div>
                    <p className="font-dm" style={{ color: "rgba(255,255,255,.55)", fontSize: 13, lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" style={{ padding: "7rem 2rem 8rem", background: "rgba(255,255,255,.018)" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto" }} onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY, show: true })} onMouseLeave={() => setCursor((c) => ({ ...c, show: false }))}>
            <div className={`portfolio-cursor${cursor.show ? " show" : ""}`} style={{ left: cursor.x, top: cursor.y }} aria-hidden="true" />
            <div ref={portRef} className={`reveal${portIn ? " show" : ""}`} style={{ marginBottom: "3.5rem" }}>
              <SectionKicker label={t.portLabel} />
              <div className="section-heading-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <h2 className="font-bebas" style={{ fontSize: "clamp(2.6rem,6vw,5.2rem)", letterSpacing: "-.01em", lineHeight: 1 }}>{t.portTitle1}<br /><span style={{ color: "#0047FF" }}>{t.portTitle2}</span></h2>
                <a href="#contact" className="font-syne" style={{ color: "rgba(255,255,255,.55)", textDecoration: "none", fontSize: 13, fontWeight: 700, letterSpacing: ".06em", borderBottom: "1px solid rgba(255,255,255,.18)", paddingBottom: 2, transition: "color .25s,border-color .25s" }}>{t.portAll} →</a>
              </div>
            </div>

            <div className="port-grid" style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "1.1rem" }}>
              <PortCard item={t.portfolio[0]} ps={PORT_STYLES[0]} hover={hPort === 0} onEnter={() => setHPort(0)} onLeave={() => setHPort(null)} cls={`reveal${portIn ? " show" : ""} d1`} gridArea="1/1/3/9" height={460} headingSize="2rem" t={t} />
              <PortCard item={t.portfolio[1]} ps={PORT_STYLES[1]} hover={hPort === 1} onEnter={() => setHPort(1)} onLeave={() => setHPort(null)} cls={`reveal${portIn ? " show" : ""} d2`} gridArea="1/9/2/13" height={218} t={t} />
              <PortCard item={t.portfolio[2]} ps={PORT_STYLES[2]} hover={hPort === 2} onEnter={() => setHPort(2)} onLeave={() => setHPort(null)} cls={`reveal${portIn ? " show" : ""} d3`} gridArea="2/9/3/13" height={218} t={t} />
              <PortCard item={t.portfolio[3]} ps={PORT_STYLES[3]} hover={hPort === 3} onEnter={() => setHPort(3)} onLeave={() => setHPort(null)} cls={`reveal${portIn ? " show" : ""} d2`} gridArea="3/1/4/7" height={220} t={t} />
              <PortCard item={t.portfolio[4]} ps={PORT_STYLES[4]} hover={hPort === 4} onEnter={() => setHPort(4)} onLeave={() => setHPort(null)} cls={`reveal${portIn ? " show" : ""} d3`} gridArea="3/7/4/13" height={220} t={t} />
              <PortCard item={t.portfolio[5]} ps={PORT_STYLES[5]} hover={hPort === 5} onEnter={() => setHPort(5)} onLeave={() => setHPort(null)} cls={`reveal${portIn ? " show" : ""} d1`} gridArea="4/1/5/13" height={160} isBanner t={t} />
            </div>
          </div>
        </section>

        <section id="testimonials" style={{ padding: "7rem 2rem 8rem" }}>
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <div ref={testRef} className={`reveal${testIn ? " show" : ""}`} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: "1.4rem" }}>
                <div className="blue-rule" /><span className="font-syne" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".22em", color: "#0047FF", textTransform: "uppercase" }}>{t.testimonialsLabel}</span><div className="blue-rule" />
              </div>
              <h2 className="font-bebas" style={{ fontSize: "clamp(2.6rem,6vw,5.2rem)", letterSpacing: "-.01em", lineHeight: 1, marginBottom: "1rem" }}>{t.testimonialsTitle1}<br /><span style={{ color: "#0047FF" }}>{t.testimonialsTitle2}</span></h2>
              <p className="font-dm" style={{ color: "rgba(255,255,255,.55)", fontSize: 14, maxWidth: 520, lineHeight: 1.7, margin: "0 auto" }}>{t.testimonialsSub}</p>
            </div>
            <TestimonialSlider testimonials={t.testimonials} active={testimonialIdx} inView={testIn} onPrev={prevTestimonial} onNext={nextTestimonial} onSelect={setTestimonialIdx} />
          </div>
        </section>

        <section id="contact" style={{ padding: "8rem 2rem 7rem", position: "relative", overflow: "hidden" }}>
          <div className="hero-grid" style={{ position: "absolute", inset: 0, opacity: .5 }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(0,71,255,.13) 0%,transparent 70%)" }} />
          <div className="noise" />

          <div ref={ctaRef} className={`reveal${ctaIn ? " show" : ""}`} style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 3.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "2.4rem" }}>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to right,transparent,rgba(0,71,255,.4))" }} />
                <span className="font-syne" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".2em", color: "#0047FF", textTransform: "uppercase" }}>{t.ctaLabel}</span>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to left,transparent,rgba(0,71,255,.4))" }} />
              </div>
              <h2 className="font-bebas blue-glow-text" style={{ fontSize: "clamp(3rem,9vw,7.5rem)", letterSpacing: "-.01em", lineHeight: .95, marginBottom: "1.6rem" }}>{t.ctaTitle1}<br /><span style={{ color: "#0047FF" }}>{t.ctaTitle2}</span></h2>
              <p className="font-dm" style={{ color: "rgba(255,255,255,.58)", fontSize: 16, lineHeight: 1.8, maxWidth: 520, margin: "0 auto" }}>{t.ctaSub}</p>
            </div>

            <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.08fr", gap: "1.2rem", alignItems: "stretch" }}>
              <div style={{ border: "1px solid rgba(255,255,255,.07)", background: "rgba(255,255,255,.025)", borderRadius: 18, padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="wa-btn font-syne" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#0047FF", color: "#fff", padding: "1.1rem 2rem", borderRadius: 10, textDecoration: "none", fontSize: 15, fontWeight: 700, letterSpacing: ".06em", border: "1px solid rgba(100,150,255,.25)" }}>
                  <WhatsAppIcon />{t.ctaBtn}
                </a>
                <p className="font-dm" style={{ marginTop: "1.4rem", color: "rgba(255,255,255,.52)", fontSize: 12 }}>{t.ctaNote}</p>
                <div style={{ marginTop: "2.4rem", display: "grid", gap: "1rem" }}>
                  {t.ctaInfo.map(([icon, lbl]) => (
                    <div key={lbl} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 15 }}>{icon}</span><span className="font-dm" style={{ fontSize: 14, color: "rgba(255,255,255,.62)" }}>{lbl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ border: "1px solid rgba(255,255,255,.07)", background: "linear-gradient(145deg,rgba(255,255,255,.045),rgba(0,0,0,.66))", borderRadius: 18, padding: "2rem" }}>
                {formSent ? (
                  <div className="success-state" role="status" aria-live="polite" style={{ minHeight: 328, display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                    <div className="success-check"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg></div>
                    <h3 className="font-syne" style={{ fontSize: "1.35rem", marginBottom: ".7rem" }}>{t.formSuccessTitle}</h3>
                    <p className="font-dm" style={{ color: "rgba(255,255,255,.6)", lineHeight: 1.7, maxWidth: 360, margin: "0 auto" }}>{t.formSuccessText}</p>
                  </div>
                ) : (
                  <form onSubmit={submitForm} noValidate>
                    <h3 className="font-syne" style={{ fontSize: "1.25rem", marginBottom: "1.4rem" }}>{t.formTitle}</h3>
                    <div style={{ display: "grid", gap: ".9rem" }}>
                      <label className="form-field"><span className="font-dm" style={{ color: "rgba(255,255,255,.62)", fontSize: 13 }}>{t.formName}</span><input className="form-input" value={formData.name} onChange={(e) => updateField("name", e.target.value)} aria-invalid={!!formErrors.name} aria-describedby="name-error" /><span id="name-error" className="form-error">{formErrors.name}</span></label>
                      <label className="form-field"><span className="font-dm" style={{ color: "rgba(255,255,255,.62)", fontSize: 13 }}>{t.formEmail}</span><input className="form-input" type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} aria-invalid={!!formErrors.email} aria-describedby="email-error" /><span id="email-error" className="form-error">{formErrors.email}</span></label>
                      <label className="form-field"><span className="font-dm" style={{ color: "rgba(255,255,255,.62)", fontSize: 13 }}>{t.formMessage}</span><textarea className="form-input" rows={4} value={formData.message} onChange={(e) => updateField("message", e.target.value)} aria-invalid={!!formErrors.message} aria-describedby="message-error" /><span id="message-error" className="form-error">{formErrors.message}</span></label>
                      <button type="submit" className="btn-primary font-syne" style={{ border: "none", color: "#fff", padding: "1rem 1.4rem", borderRadius: 10, fontSize: 14, fontWeight: 800, letterSpacing: ".06em", cursor: "pointer" }}>{t.formSubmit}</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer t={t} lang={lang} onChangeLang={changeLang} />
      </div>
    </div>
  );
}

function LanguageToggle({ lang, onChange, footer = false }: { lang: Lang; onChange: (lang: Lang) => void; footer?: boolean }) {
  return (
    <div className={`lang-toggle${footer ? " footer-lang" : ""}`}>
      {(["en", "pt"] as const).map((l) => (
        <button key={l} type="button" aria-label={`Mudar idioma para ${l === "en" ? "inglês" : "português"}`} className={`lang-btn${lang === l ? " active" : ""}`} onClick={() => onChange(l)}>{l === "en" ? "EN" : "PT"}</button>
      ))}
    </div>
  );
}

function SectionKicker({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.4rem" }}>
      <div className="blue-rule" /><span className="font-syne" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".22em", color: "#0047FF", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

function ServiceCard({ svc, icon, index, expanded, hovered, inView, labelMore, labelClose, onHover, onToggle }: { svc: Service; icon: JSX.Element; index: number; expanded: boolean; hovered: boolean; inView: boolean; labelMore: string; labelClose: string; onHover: (index: number | null) => void; onToggle: () => void }) {
  return (
    <div className={`svc-card reveal${inView ? " show" : ""} d${index + 1}${expanded ? " expanded" : ""}`} onMouseEnter={() => onHover(index)} onMouseLeave={() => onHover(null)} style={{ borderRadius: 16, padding: "2.5rem", cursor: "default" }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.8rem" }}>
          <div className="svc-icon" style={{ width: 52, height: 52, borderRadius: 13, background: "rgba(0,71,255,.1)", border: "1px solid rgba(0,71,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0047FF" }}>{icon}</div>
          <span className="font-syne" style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: "rgba(0,71,255,.85)" }}>{svc.num}</span>
        </div>
        <h3 className="font-syne" style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: ".7rem", letterSpacing: "-.01em", lineHeight: 1.3, color: hovered || expanded ? "#fff" : "rgba(255,255,255,.9)", transition: "color .3s" }}>{svc.title}</h3>
        <p className="font-dm" style={{ color: "rgba(255,255,255,.58)", fontSize: 14, lineHeight: 1.8, marginBottom: "1.6rem" }}>{svc.desc}</p>
        <div style={{ display: "flex", gap: ".45rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          {svc.tags.map((tag) => (<span key={tag} className="font-dm" style={{ fontSize: 11, padding: ".28rem .7rem", border: "1px solid rgba(0,71,255,.22)", borderRadius: 100, color: "rgba(89,135,255,.95)", letterSpacing: ".04em", fontWeight: 500, background: "rgba(0,71,255,.04)" }}>{tag}</span>))}
        </div>
        <div className={`svc-more${expanded ? " open" : ""}`}>
          <div style={{ padding: "0 0 1.4rem", display: "grid", gap: ".55rem" }}>
            {svc.deliverables.map((item) => (<div key={item} className="font-dm" style={{ color: "rgba(255,255,255,.62)", fontSize: 13, lineHeight: 1.55 }}>✓ {item}</div>))}
          </div>
        </div>
        <button type="button" onClick={onToggle} aria-expanded={expanded} className="font-syne" style={{ border: "none", background: "transparent", padding: 0, display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, letterSpacing: ".05em", color: hovered || expanded ? "#0047FF" : "rgba(255,255,255,.55)", transition: "color .3s", cursor: "pointer" }}>
          {expanded ? labelClose : labelMore}
          <svg className={`svc-arrow${expanded ? " open" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
        </button>
      </div>
    </div>
  );
}

function PortfolioArt({ color }: { color: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 420 260" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .15, color, pointerEvents: "none" }}>
      <defs>
        <pattern id={`grid-${color.replace(/[^a-z0-9]/gi, "")}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="420" height="260" fill={`url(#grid-${color.replace(/[^a-z0-9]/gi, "")})`} />
      <circle cx="328" cy="64" r="54" fill="none" stroke="currentColor" strokeWidth="10" />
      <circle cx="78" cy="205" r="36" fill="currentColor" />
      <path d="M22 72 C112 8 166 130 250 66 S368 70 408 18" fill="none" stroke="currentColor" strokeWidth="5" />
      <path d="M240 238 L386 92 L404 234 Z" fill="none" stroke="currentColor" strokeWidth="4" />
      <line x1="30" y1="28" x2="160" y2="210" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PortCard({ item, ps, hover, onEnter, onLeave, cls, gridArea, height, headingSize = "1.25rem", isBanner = false, t }: { item: PortfolioItem; ps: (typeof PORT_STYLES)[number]; hover: boolean; onEnter: () => void; onLeave: () => void; cls: string; gridArea: string; height: number; headingSize?: string; isBanner?: boolean; t: (typeof T)[Lang] }) {
  return (
    <div className={`port-card ${cls}`} onMouseEnter={onEnter} onMouseLeave={onLeave} style={{ gridArea, height }}>
      <div className="port-bg" style={{ width: "100%", height: "100%", background: `radial-gradient(ellipse 110% 110% at 20% 20%,${ps.accent} 0%,${ps.accentB} 40%,${ps.bg} 100%)`, position: "relative", display: "flex", flexDirection: "column", justifyContent: isBanner ? "center" : "space-between", padding: isBanner ? "0 2.5rem" : "1.75rem" }}>
        <PortfolioArt color={ps.color} />
        {isBanner ? (
          <div className="port-banner-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1, gap: "2rem" }}>
            <div>
              <span className="font-syne" style={{ fontSize: 10, padding: ".25rem .7rem", border: "1px solid rgba(0,71,255,.3)", borderRadius: 100, color: "#6D93FF", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", background: "rgba(0,71,255,.08)", marginBottom: ".6rem", display: "inline-block" }}>{item.tag}</span>
              <h3 className="font-syne" style={{ fontWeight: 800, fontSize: "1.5rem", color: hover ? "#fff" : "rgba(255,255,255,.88)", transition: "color .35s" }}>{item.title}</h3>
            </div>
            <p className="font-dm port-desc" style={{ fontSize: 14, color: "rgba(255,255,255,.62)", lineHeight: 1.65, maxWidth: 420 }}>{item.desc}</p>
            <span className="font-syne" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, letterSpacing: ".07em", whiteSpace: "nowrap", border: "1px solid rgba(255,255,255,.2)", padding: ".45rem 1.1rem", borderRadius: 6, color: "rgba(255,255,255,.78)", flexShrink: 0, transition: "border-color .3s,color .3s", ...(hover ? { borderColor: "rgba(0,71,255,.6)", color: "#6D93FF" } : {}) }}>{t.portCase}</span>
          </div>
        ) : (
          <>
            <div style={{ position: "relative", zIndex: 1 }}>
              <span className="font-syne" style={{ fontSize: 10, padding: ".25rem .7rem", border: "1px solid rgba(0,71,255,.3)", borderRadius: 100, color: "#6D93FF", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", background: "rgba(0,71,255,.08)" }}>{item.tag}</span>
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="font-syne" style={{ fontSize: 10, color: "rgba(255,255,255,.48)", letterSpacing: ".1em", marginBottom: ".3rem" }}>{item.num}</div>
              <h3 className="font-syne" style={{ fontWeight: 800, fontSize: headingSize, lineHeight: 1.2, marginBottom: ".5rem", color: hover ? "#fff" : "rgba(255,255,255,.88)", transition: "color .35s" }}>{item.title}</h3>
              <p className="font-dm port-desc" style={{ fontSize: 13, color: "rgba(255,255,255,.62)", lineHeight: 1.6, maxWidth: 340 }}>{item.desc}</p>
            </div>
          </>
        )}
      </div>
      {!isBanner && (
        <div className="port-overlay">
          <div className="port-reveal">
            <div className="font-syne" style={{ fontSize: 10, color: "rgba(255,255,255,.62)", letterSpacing: ".16em", textTransform: "uppercase", marginBottom: ".5rem" }}>{item.tag}</div>
            <div className="font-syne" style={{ fontWeight: 800, fontSize: "1.5rem", marginBottom: ".6rem" }}>{item.title}</div>
            <p className="font-dm" style={{ fontSize: 13, color: "rgba(255,255,255,.7)", lineHeight: 1.65, marginBottom: "1.1rem" }}>{item.desc}</p>
            <span className="font-syne" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, letterSpacing: ".07em", border: "1px solid rgba(255,255,255,.25)", padding: ".42rem 1rem", borderRadius: 6, color: "#fff", cursor: "pointer" }}>{t.portCase}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function TestimonialSlider({ testimonials, active, inView, onPrev, onNext, onSelect }: { testimonials: (typeof T)[Lang]["testimonials"]; active: number; inView: boolean; onPrev: () => void; onNext: () => void; onSelect: (index: number) => void }) {
  const item = testimonials[active];
  return (
    <div className={`testimonial-card reveal${inView ? " show" : ""} d1`}>
      <div className="testimonial-slide" key={item.name} style={{ padding: "2.3rem", opacity: 1, transform: "translateX(0)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <button type="button" aria-label="Depoimento anterior" onClick={onPrev} className="btn-ghost" style={testimonialButtonStyle}>‹</button>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", textAlign: "left" }}>
            <div style={{ width: 62, height: 62, borderRadius: "50%", display: "grid", placeItems: "center", background: "linear-gradient(145deg,#0047FF,#00164F)", boxShadow: "0 0 36px rgba(0,71,255,.32)" }}><span className="font-syne" style={{ fontWeight: 800 }}>{item.initials}</span></div>
            <div><div className="font-syne" style={{ fontWeight: 800, marginBottom: ".25rem" }}>{item.name}</div><div className="font-dm" style={{ color: "rgba(255,255,255,.55)", fontSize: 13 }}>{item.role}</div></div>
          </div>
          <button type="button" aria-label="Próximo depoimento" onClick={onNext} className="btn-ghost" style={testimonialButtonStyle}>›</button>
        </div>
        <div aria-label="5 stars" style={{ color: "#6D93FF", letterSpacing: ".16em", marginBottom: "1.2rem", textAlign: "center" }}>★★★★★</div>
        <p className="font-dm" style={{ color: "rgba(255,255,255,.72)", fontSize: "clamp(1rem,2vw,1.25rem)", lineHeight: 1.75, textAlign: "center", maxWidth: 720, margin: "0 auto" }}>“{item.text}”</p>
        <div style={{ display: "flex", justifyContent: "center", gap: ".7rem", marginTop: "2rem" }}>
          {testimonials.map((testimonial, index) => (<button key={testimonial.name} type="button" aria-label={`Ver depoimento ${index + 1}`} className={`testimonial-dot${active === index ? " active" : ""}`} onClick={() => onSelect(index)} />))}
        </div>
      </div>
    </div>
  );
}

const testimonialButtonStyle: CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,.18)",
  background: "rgba(255,255,255,.03)",
  color: "#fff",
  fontSize: 28,
  lineHeight: 1,
  cursor: "pointer",
};

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Footer({ t, lang, onChangeLang }: { t: (typeof T)[Lang]; lang: Lang; onChangeLang: (lang: Lang) => void }) {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,.06)", padding: "4rem 2rem 1.6rem", background: "#000" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr 1fr 1fr", gap: "2.2rem", paddingBottom: "3rem" }}>
          <div>
            <a href="#home" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", marginBottom: "1rem" }}><ZLogo size={32} /><span className="font-syne" style={{ fontWeight: 800, fontSize: 17, color: "#fff" }}>Zykron</span></a>
            <p className="font-dm" style={{ color: "rgba(255,255,255,.58)", fontSize: 14, lineHeight: 1.7, maxWidth: 320, marginBottom: "1.2rem" }}>{t.footerTagline}</p>
            <div style={{ display: "flex", gap: ".7rem" }}>
              {(["instagram", "linkedin", "x", "youtube"] as const).map((social) => (<a key={social} href="#" aria-label={social} className="social-link"><SocialIcon type={social} /></a>))}
            </div>
          </div>
          <FooterColumn title={t.footerServices} links={t.services.map((service) => service.title)} />
          <FooterColumn title={t.footerCompany} links={t.footerCompanyLinks} />
          <div>
            <h3 className="font-syne" style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".14em", marginBottom: "1rem", color: "#fff" }}>{t.footerContact}</h3>
            <div style={{ display: "grid", gap: ".75rem" }}>
              {t.ctaInfo.map(([icon, label]) => (<a key={label} href={String(label).includes("hello") ? "mailto:hello@zykron.io" : "#contact"} className="ft-lnk font-dm" style={{ textDecoration: "none", fontSize: 14, display: "flex", gap: 8, alignItems: "center" }}><span>{icon}</span><span>{label}</span></a>))}
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="ft-lnk font-dm" style={{ textDecoration: "none", fontSize: 14 }}>WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: "1.4rem", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", gap: "1rem" }}>
          <p className="font-dm" style={{ fontSize: 12, color: "rgba(255,255,255,.48)", textAlign: "center" }}>{t.footerCopy}</p>
          <div style={{ marginLeft: "auto" }}><LanguageToggle lang={lang} onChange={onChangeLang} footer /></div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div>
      <h3 className="font-syne" style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: ".14em", marginBottom: "1rem", color: "#fff" }}>{title}</h3>
      <div style={{ display: "grid", gap: ".75rem" }}>
        {links.map((link) => (<a key={link} href="#contact" className="ft-lnk font-dm" style={{ textDecoration: "none", fontSize: 14 }}>{link}</a>))}
      </div>
    </div>
  );
}
