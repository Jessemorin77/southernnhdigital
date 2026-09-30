"use client";

import { useState, useEffect, useRef, ReactNode, FormEvent } from "react";
import Image from "next/image";
import { Oswald, Inter } from "next/font/google";

// ─── Fonts ───────────────────────────────────────────────────────────────────
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// ─── Palette / tokens ────────────────────────────────────────────────────────
// Swap these image URLs for real Shotwell job photos any time.
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85",
  heroAlt: "Freshly installed cedar privacy fence bordering a green backyard",
  vinyl: "https://images.unsplash.com/photo-1564149503948-e8b98b0e9a96?w=800&q=80",
  vinylAlt: "White PVC vinyl fence surrounding a residential property",
  wood: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
  woodAlt: "Natural wood shadowbox privacy fence in a backyard",
  chainlink: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80",
  chainlinkAlt: "Chain link fence along a commercial property perimeter",
  handrail: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&q=80",
  handrailAlt: "Custom wrought iron handrail on outdoor stairs",
  deck: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
  deckAlt: "Newly built wooden deck with pergola attached to a home",
  pergola: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
  pergolaAlt: "Open pergola structure over a patio with string lights",
  story: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  storyAlt: "Welder at work with sparks flying on a metal gate fabrication",
};

const PHONE = "(984) 364-9749";
const PHONE_HREF = "tel:+19843649749";
const EMAIL = "shotwellfabrication@gmail.com";
const FACEBOOK = "https://www.facebook.com/shotwellmobilewelding/";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Story", href: "#story" },
  { label: "Process", href: "#process" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_TOWNS = [
  "Thomasville",
  "High Point",
  "Lexington",
  "Archdale",
  "Trinity",
  "Surrounding Triad Areas",
];

const MAIN_SERVICES = [
  {
    title: "PVC / Vinyl Fencing",
    desc: "Low-maintenance, long-lasting vinyl in privacy, picket, and ranch styles. Stays straight, never rots.",
    img: IMAGES.vinyl,
    alt: IMAGES.vinylAlt,
  },
  {
    title: "Wood Fencing",
    desc: "Privacy, shadowbox, and split-rail options built from quality lumber and installed to last.",
    img: IMAGES.wood,
    alt: IMAGES.woodAlt,
  },
  {
    title: "Chain Link Fencing",
    desc: "Durable, cost-effective chain link for residential yards, commercial lots, and everything in between.",
    img: IMAGES.chainlink,
    alt: IMAGES.chainlinkAlt,
  },
  {
    title: "Custom Wrought Iron Handrails",
    desc: "Designed, fabricated, and welded in-house. No subcontractors — just clean, strong metalwork.",
    img: IMAGES.handrail,
    alt: IMAGES.handrailAlt,
  },
  {
    title: "Decks",
    desc: "Pressure-treated and composite decks built to your space, your style, and your budget.",
    img: IMAGES.deck,
    alt: IMAGES.deckAlt,
  },
  {
    title: "Pergolas & Patios",
    desc: "Turn your yard into a destination. Custom pergolas, patios, and outdoor living spaces.",
    img: IMAGES.pergola,
    alt: IMAGES.pergolaAlt,
  },
];

const ALSO_SERVICES = [
  "Retaining Walls",
  "French Drains",
  "Gazebos",
  "Fire Pits",
  "Custom-Built Buildings",
  "Mobile Welding & Fabrication",
];

const PROJECT_TYPES = [
  "PVC / Vinyl Fence",
  "Wood Fence",
  "Chain Link Fence",
  "Wrought Iron Handrail",
  "Deck",
  "Pergola / Patio",
  "Retaining Wall / Drainage",
  "Welding / Fabrication",
  "Other",
];

// ─── Animation hook ───────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

function Reveal({
  children,
  delay = 0,
  className = "",
  from = "bottom",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right" | "none";
}) {
  const [ref, visible] = useInView();
  const translateMap = { bottom: "translateY(28px)", left: "translateX(-28px)", right: "translateX(28px)", none: "none" };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translateMap[from],
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Sticky Header ────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#1A1714]/95 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col leading-none text-left"
        >
          <span
            className="text-[#E8956D] text-xl font-bold tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            SHOTWELL
          </span>
          <span className="text-[#C4B49A] text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
            Fencing &amp; Fabrication
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-[#C4B49A] hover:text-[#E8956D] text-sm font-medium transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href={PHONE_HREF}
            className="ml-4 bg-[#E8956D] text-[#1A1714] text-sm font-bold px-5 py-2.5 rounded hover:bg-[#d4804f] transition-colors"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
          >
            {PHONE}
          </a>
        </nav>

        {/* Mobile burger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={PHONE_HREF}
            className="bg-[#E8956D] text-[#1A1714] text-xs font-bold px-3 py-2 rounded"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Call Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#C4B49A] p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1714]/98 border-t border-[#3A2E22] px-4 pb-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="block w-full text-left py-3 text-[#C4B49A] hover:text-[#E8956D] font-medium border-b border-[#2E2418] last:border-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero}
          alt={IMAGES.heroAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714]/90 via-[#1A1714]/70 to-[#1A1714]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714] via-transparent to-[#1A1714]/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 border border-[#E8956D]/40 text-[#E8956D] text-xs font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded mb-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8956D] inline-block" />
            Thomasville, NC · Family Owned
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.0] mb-6 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built To Last.
            <br />
            <span className="text-[#E8956D]">Done Right.</span>
          </h1>

          {/* Subhead */}
          <p
            className="text-[#C4B49A] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Shotwell Fencing installs fences, decks, pergolas, and custom metalwork across the Triad.
            Free quotes, no pressure, local crew.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={scrollToContact}
              className="bg-[#E8956D] text-[#1A1714] font-bold px-8 py-4 rounded text-base hover:bg-[#d4804f] transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
            >
              GET A FREE QUOTE
            </button>
            <a
              href={PHONE_HREF}
              className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded text-base hover:border-[#E8956D] hover:text-[#E8956D] transition-all"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
            >
              CALL NOW
            </a>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-3">
            {[
              "Family Owned & Operated",
              "Free No-Pressure Quotes",
              "96% Recommend on Facebook",
            ].map((chip) => (
              <span
                key={chip}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur text-[#E8DDD0] text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <svg className="w-3.5 h-3.5 text-[#E8956D] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[#C4B49A] text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#E8956D] to-transparent animate-pulse" />
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="bg-[#211C17] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <p className="text-[#E8956D] text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            What We Build
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Services
          </h2>
          <div className="w-16 h-1 bg-[#E8956D] mx-auto mt-4" />
        </Reveal>

        {/* Main service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {MAIN_SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 80} className="group relative overflow-hidden rounded-lg bg-[#2A221A] border border-[#3A2E22] hover:border-[#E8956D]/40 transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={svc.img}
                  alt={svc.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A221A] via-[#2A221A]/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3
                  className="text-white text-lg font-bold mb-2 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {svc.title}
                </h3>
                <p className="text-[#9A8878] text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {svc.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Also services */}
        <Reveal className="bg-[#2A221A] border border-[#3A2E22] rounded-lg p-6 sm:p-8">
          <p
            className="text-[#E8956D] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We Also Do
          </p>
          <div className="flex flex-wrap gap-3">
            {ALSO_SERVICES.map((s) => (
              <span
                key={s}
                className="bg-[#1A1714] border border-[#3A2E22] text-[#C4B49A] text-sm px-4 py-2 rounded-full"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Story / Edge section ─────────────────────────────────────────────────────
function Story() {
  return (
    <section id="story" className="bg-[#1A1714] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <Reveal from="left" className="relative">
            <div className="relative h-[420px] sm:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={IMAGES.story}
                alt={IMAGES.storyAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/60 to-transparent" />
            </div>
            {/* Callout chip */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#1A1714]/90 backdrop-blur border border-[#E8956D]/30 rounded-lg p-4">
              <p
                className="text-[#E8956D] text-xs font-semibold tracking-widest uppercase mb-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The Difference
              </p>
              <p
                className="text-white font-bold text-lg uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Welders &amp; Builders — In One Crew
              </p>
            </div>
          </Reveal>

          {/* Copy side */}
          <Reveal from="right">
            <p className="text-[#E8956D] text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Why Shotwell
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white uppercase leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We Don&apos;t Just Hang Fence.
              <br />
              <span className="text-[#E8956D]">We Build It.</span>
            </h2>

            <div className="space-y-5 text-[#9A8878] text-[15px] leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              <p>
                Most fencing companies hang panels and leave. When you need a custom gate, a wrought iron handrail, or
                any metalwork, they call a sub — or they skip it entirely.
              </p>
              <p>
                Shotwell is different. We&apos;re welders and builders. That means your gate hinges are set by someone who
                fabricated the gate. Your handrail is welded on-site by the same crew that poured your footer. Nothing
                gets farmed out. Everything is done right.
              </p>
              <p>
                We&apos;re a family crew based right here in Thomasville. We show up, we do the work, and we stand behind it.
                That&apos;s not a tagline — it&apos;s how we&apos;ve earned every one of our reviews.
              </p>
            </div>

            {/* Proof points */}
            <div className="space-y-3">
              {[
                "Custom metal fabrication done in-house — no subcontractors",
                "Gates hang straight because the welder hung them",
                "Free, no-pressure quotes — we earn your business the right way",
                "Local family crew that shows up and follows through",
              ].map((pt) => (
                <div key={pt} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E8956D]/15 border border-[#E8956D]/40 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#E8956D]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-[#C4B49A] text-sm" style={{ fontFamily: "var(--font-body)" }}>{pt}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    {
      num: "01",
      title: "Reach Out",
      desc: "Call us or fill out the form below. No commitment, no pressure — just a conversation about your project.",
    },
    {
      num: "02",
      title: "We Measure On-Site",
      desc: "We come to you, walk the property, and give you a clear, written price. You know exactly what you're getting before any work starts.",
    },
    {
      num: "03",
      title: "We Build It Right",
      desc: "Our crew handles the whole job from start to finish. Fence, gates, metalwork — all in one shot, done clean.",
    },
  ];

  return (
    <section id="process" className="bg-[#211C17] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <p className="text-[#E8956D] text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Simple Process
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How It Works
          </h2>
          <div className="w-16 h-1 bg-[#E8956D] mx-auto mt-4" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 120} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(100%_-_16px)] w-8 h-px bg-[#E8956D]/30 z-10" />
              )}
              <div className="bg-[#2A221A] border border-[#3A2E22] rounded-lg p-7 h-full hover:border-[#E8956D]/30 transition-colors">
                <div
                  className="text-5xl font-bold text-[#E8956D]/20 leading-none mb-4 select-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-white text-xl font-bold uppercase mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#9A8878] text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Area ─────────────────────────────────────────────────────────────
function ServiceArea() {
  return (
    <section id="service-area" className="bg-[#1A1714] py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <p className="text-[#E8956D] text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
            Where We Work
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white uppercase mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Service Area
          </h2>
          <div className="w-16 h-1 bg-[#E8956D] mx-auto mb-8" />
          <p className="text-[#9A8878] text-base mb-10 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            We serve homeowners and businesses across the Triad. Not sure if we cover your area? Call us — we&apos;ll let you know.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_TOWNS.map((town) => (
              <span
                key={town}
                className="border border-[#E8956D]/40 text-[#E8DDD0] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#E8956D]/10 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {town}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Facebook social proof ────────────────────────────────────────────────────
function SocialProof() {
  return (
    <section className="bg-[#E8956D] py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p
              className="text-[#1A1714] text-4xl font-bold uppercase mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              96% Recommend Shotwell
            </p>
            <p className="text-[#3A2E22] text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
              Based on 24 Facebook reviews from real customers in the Triad
            </p>
          </div>
          <a
            href={FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#1A1714] text-white font-bold px-7 py-3.5 rounded hover:bg-[#2A221A] transition-colors flex items-center gap-2"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            SEE OUR REVIEWS
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Quote Form ───────────────────────────────────────────────────────────────
function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    projectType: "",
    size: "",
    details: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#211C17] py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <Reveal from="left">
            <p className="text-[#E8956D] text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Free Quote
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white uppercase leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s Talk
              <br />
              <span className="text-[#E8956D]">About Your Project.</span>
            </h2>
            <p className="text-[#9A8878] text-[15px] leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Fill out the form and we&apos;ll get back to you fast. Or just give us a call — we answer.
            </p>

            <div className="space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 group"
              >
                <span className="w-10 h-10 rounded-full bg-[#E8956D]/15 border border-[#E8956D]/40 flex items-center justify-center shrink-0 group-hover:bg-[#E8956D]/25 transition-colors">
                  <svg className="w-4 h-4 text-[#E8956D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="text-[#C4B49A] font-medium group-hover:text-[#E8956D] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  {PHONE}
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 group"
              >
                <span className="w-10 h-10 rounded-full bg-[#E8956D]/15 border border-[#E8956D]/40 flex items-center justify-center shrink-0 group-hover:bg-[#E8956D]/25 transition-colors">
                  <svg className="w-4 h-4 text-[#E8956D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="text-[#C4B49A] font-medium group-hover:text-[#E8956D] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  {EMAIL}
                </span>
              </a>

              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-10 h-10 rounded-full bg-[#E8956D]/15 border border-[#E8956D]/40 flex items-center justify-center shrink-0 group-hover:bg-[#E8956D]/25 transition-colors">
                  <svg className="w-4 h-4 text-[#E8956D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </span>
                <span className="text-[#C4B49A] font-medium group-hover:text-[#E8956D] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  Facebook — See Our Work
                </span>
              </a>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal from="right">
            {submitted ? (
              <div className="bg-[#2A221A] border border-[#E8956D]/40 rounded-lg p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#E8956D]/15 border border-[#E8956D]/40 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#E8956D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-white text-2xl font-bold uppercase mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Got It!
                </h3>
                <p className="text-[#9A8878] text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  This is a website preview — your request didn&apos;t go anywhere yet.
                </p>
                <p className="text-[#C4B49A] text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  On the live site, this form goes straight to Shotwell&apos;s phone and email so they can follow up fast.
                  Want to reach them now? Call{" "}
                  <a href={PHONE_HREF} className="text-[#E8956D] font-medium hover:underline">
                    {PHONE}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#2A221A] border border-[#3A2E22] rounded-lg p-7 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#9A8878] text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ fontFamily: "var(--font-body)" }}>
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-[#1A1714] border border-[#3A2E22] text-[#E8DDD0] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#E8956D] placeholder:text-[#4A3E32] transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                  <div>
                    <label className="block text-[#9A8878] text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ fontFamily: "var(--font-body)" }}>
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(336) 555-0000"
                      className="w-full bg-[#1A1714] border border-[#3A2E22] text-[#E8DDD0] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#E8956D] placeholder:text-[#4A3E32] transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#9A8878] text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ fontFamily: "var(--font-body)" }}>
                    Project Type *
                  </label>
                  <select
                    required
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="w-full bg-[#1A1714] border border-[#3A2E22] text-[#E8DDD0] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#E8956D] transition-colors appearance-none"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <option value="" disabled className="text-[#4A3E32]">Select a project type…</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#9A8878] text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ fontFamily: "var(--font-body)" }}>
                    Approximate Size / Linear Feet
                  </label>
                  <input
                    type="text"
                    value={form.size}
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                    placeholder="e.g. 150 linear feet, 12×20 deck"
                    className="w-full bg-[#1A1714] border border-[#3A2E22] text-[#E8DDD0] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#E8956D] placeholder:text-[#4A3E32] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div>
                  <label className="block text-[#9A8878] text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ fontFamily: "var(--font-body)" }}>
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    placeholder="Tell us anything helpful — property type, timeline, gate locations, etc."
                    className="w-full bg-[#1A1714] border border-[#3A2E22] text-[#E8DDD0] text-sm px-4 py-3 rounded focus:outline-none focus:border-[#E8956D] placeholder:text-[#4A3E32] transition-colors resize-none"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E8956D] text-[#1A1714] font-bold py-4 rounded text-base hover:bg-[#d4804f] active:scale-[0.99] transition-all"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
                >
                  REQUEST FREE QUOTE
                </button>

                <p className="text-center text-[#4A3E32] text-xs" style={{ fontFamily: "var(--font-body)" }}>
                  No pressure. We&apos;ll get back to you fast.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#120F0C] border-t border-[#2E2418] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p
              className="text-[#E8956D] text-xl font-bold uppercase tracking-wide mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Shotwell Fencing
            </p>
            <p className="text-[#5A4E42] text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
              &amp; Fabrication
            </p>
            <p className="text-[#5A4E42] text-sm" style={{ fontFamily: "var(--font-body)" }}>
              Family-owned. Thomasville, NC.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#9A8878] text-xs font-semibold uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Contact
            </p>
            <div className="space-y-2">
              <a href={PHONE_HREF} className="block text-[#C4B49A] text-sm hover:text-[#E8956D] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="block text-[#C4B49A] text-sm hover:text-[#E8956D] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                {EMAIL}
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="block text-[#C4B49A] text-sm hover:text-[#E8956D] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                Facebook
              </a>
            </div>
          </div>

          {/* Service area */}
          <div>
            <p className="text-[#9A8878] text-xs font-semibold uppercase tracking-wider mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Service Area
            </p>
            <div className="space-y-1">
              {SERVICE_TOWNS.map((t) => (
                <p key={t} className="text-[#5A4E42] text-sm" style={{ fontFamily: "var(--font-body)" }}>{t}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#2E2418] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3A3028]" style={{ fontFamily: "var(--font-body)" }}>
          <span>© {new Date().getFullYear()} Shotwell Fencing &amp; Fabrication. All rights reserved.</span>
          <a
            href="https://southernnhdigital.com"
            className="text-[#3A3028] hover:text-[#E8956D] transition-colors"
          >
            Website by Southern NH Digital
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Mobile sticky CTA ────────────────────────────────────────────────────────
function MobileBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 flex transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={PHONE_HREF}
        className="flex-1 bg-[#1A1714] border-t border-r border-[#3A2E22] text-[#E8956D] font-bold text-sm py-4 flex items-center justify-center gap-2"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        CALL NOW
      </a>
      <button
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        className="flex-1 bg-[#E8956D] text-[#1A1714] font-bold text-sm py-4 flex items-center justify-center gap-2"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        FREE QUOTE
      </button>
    </div>
  );
}

// ─── Preview Banner ───────────────────────────────────────────────────────────
function PreviewBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#2A221A] border-b border-[#E8956D]/30 py-1.5 px-4 flex items-center justify-center gap-2">
      <span className="text-[#9A8878] text-[11px] tracking-wide text-center" style={{ fontFamily: "var(--font-body)" }}>
        Website preview for{" "}
        <strong className="text-[#E8DDD0]">Shotwell Fencing</strong> — designed by{" "}
        <a
          href="https://southernnhdigital.com"
          className="text-[#E8956D] hover:underline"
        >
          Southern NH Digital
        </a>
      </span>
    </div>
  );
}

// ─── Root Page ────────────────────────────────────────────────────────────────
export default function ShotwellPage() {
  return (
    <div
      className={`${oswald.variable} ${inter.variable} bg-[#1A1714] min-h-screen`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <PreviewBanner />
      {/* Push content below the preview banner (~32px) and sticky header */}
      <div className="pt-8">
        <Header />
        <main>
          <Hero />
          <Services />
          <Story />
          <Process />
          <ServiceArea />
          <SocialProof />
          <QuoteForm />
        </main>
        <Footer />
        <MobileBar />
      </div>
    </div>
  );
}
