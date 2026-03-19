"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { useForm, ValidationError } from "@formspree/react";

// ============================================================
// ANIMATION UTILITIES
// ============================================================
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

function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const [ref, visible] = useInView(0.1);
  const transforms = {
    up: visible ? "translateY(0)" : "translateY(32px)",
    left: visible ? "translateX(0)" : "translateX(40px)",
    right: visible ? "translateX(0)" : "translateX(-40px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: transforms[direction],
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ============================================================
// SITE DATA
// ============================================================
const SERVICES = [
  {
    num: "01",
    title: "Professional Websites",
    desc: "Mobile-first websites built to turn visitors into phone calls. Your services, your reviews, your contact info — presented so customers choose you over the competition.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Google Optimization",
    desc: "Get found when locals search for your services. We optimize your Google Business Profile, manage your reviews, and make sure you show up in the 'near me' searches.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Ongoing Management",
    desc: "Monthly updates, review responses, performance tracking, and support. Your online presence stays current and competitive without you lifting a finger.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Free Audit",
    desc: "We analyze your current online presence and show you exactly where you're losing customers. No cost, no commitment.",
  },
  {
    step: "2",
    title: "Custom Build",
    desc: "We build your website, optimize your Google listing, and get everything connected. Typically live within two weeks.",
  },
  {
    step: "3",
    title: "Monthly Growth",
    desc: "We manage your online presence month to month. You focus on running your business — we keep the customers coming in.",
  },
];

const STATS = [
  { value: "72%", label: "of customers search online before choosing a local service" },
  { value: "88%", label: "of local mobile searches lead to a call within 24 hours" },
  { value: "46%", label: "of all Google searches have local intent" },
];

const INDUSTRIES = [
  { name: "Auto Repair", icon: "🔧" },
  { name: "Barbershops", icon: "💈" },
  { name: "Plumbing & HVAC", icon: "🔥" },
  { name: "Landscaping", icon: "🌿" },
  { name: "Restaurants", icon: "🍽️" },
  { name: "Dental Offices", icon: "🦷" },
  { name: "Electricians", icon: "⚡" },
  { name: "Fitness Studios", icon: "💪" },
];

const PRICING = [
  {
    name: "Starter",
    price: "$1,500",
    period: "one-time",
    monthly: "$99/mo",
    desc: "Perfect for businesses that need a clean, professional web presence fast.",
    features: [
      "Custom single-page website",
      "Mobile responsive design",
      "Contact form integration",
      "Google Business Profile setup",
      "Basic SEO optimization",
      "Hosting included",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Professional",
    price: "$3,000",
    period: "one-time",
    monthly: "$149/mo",
    desc: "Everything you need to dominate local search and convert visitors into customers.",
    features: [
      "Multi-page custom website",
      "Advanced SEO & Google optimization",
      "Review management system",
      "Online scheduling / request forms",
      "Photo gallery & team pages",
      "Monthly content updates",
      "Performance reporting",
      "Priority support",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Premium",
    price: "$5,000+",
    period: "one-time",
    monthly: "$199/mo",
    desc: "For businesses ready to invest in a complete online presence that dominates the competition.",
    features: [
      "Everything in Professional",
      "Custom design with animations",
      "Individual service pages",
      "Blog / content strategy",
      "Competitor analysis & reporting",
      "Google Ads management",
      "Dedicated account manager",
      "Quarterly strategy calls",
    ],
    cta: "Let's Talk",
    featured: false,
  },
];

const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "Most websites are completed within 1-2 weeks from the time we receive your content and branding direction. More complex builds with custom functionality may take 2-3 weeks. We'll give you a clear timeline before we start.",
  },
  {
    q: "Do I own my website?",
    a: "Yes, 100%. You own all the code, content, and design. If you ever decide to leave, we'll hand everything over — no hostage situations, no hidden clauses.",
  },
  {
    q: "What if I already have a website?",
    a: "That's fine. We'll audit your existing site and tell you honestly whether it makes more sense to optimize what you have or start fresh. Either way, the audit is free.",
  },
  {
    q: "What does the monthly fee cover?",
    a: "Hosting, SSL certificate, performance monitoring, content updates (text, photos, specials), review response management, SEO maintenance, and monthly performance reports. Think of it as having a web team on retainer.",
  },
  {
    q: "Can I cancel the monthly plan anytime?",
    a: "Yes. No long-term contracts. We work month to month because we believe if we're doing our job, you'll want to stay. If you cancel, your website stays live — you just won't get the ongoing management services.",
  },
  {
    q: "I'm not tech-savvy. Is that a problem?",
    a: "Not at all. Most of our clients aren't. We handle everything technical and explain things in plain English. You tell us what you need, we make it happen.",
  },
];

const DEMOS = [
  {
    href: "/demo/auto",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    title: "Granite State Auto Repair",
    type: "Auto Repair",
    tags: ["Multi-Page", "Light Theme", "8 Service Pages"],
  },
  {
    href: "/demo/barber",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
    title: "Elm Street Barber Co.",
    type: "Barbershop",
    tags: ["Single-Page", "Dark Theme", "Animations"],
  },
  {
    href: "/demo/plumbing",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    title: "Granite Plumbing & Home Services",
    type: "Home Services",
    tags: ["Single-Page", "Light Theme", "Service Form"],
  },
];

const PHONE = "(603) 260-8830";
const EMAIL = "jesse@southernnhdigital.com";

// ============================================================
// COMPONENTS
// ============================================================
function AnimatedOrb({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ filter: "blur(100px)" }}
    />
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[3px] text-[#D4A017] uppercase mb-4">
      {children}
    </p>
  );
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[clamp(28px,4vw,44px)] font-bold text-[#F5F3EF] mb-4 ${className}`}>
      {children}
    </h2>
  );
}

function GoldLine() {
  return <div className="w-[60px] h-[2px] bg-[#D4A017] mb-12" />;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#1a1a1a] rounded-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#111] transition-colors cursor-pointer"
      >
        <span className="text-[15px] font-semibold text-[#E8E4DF] pr-6">{q}</span>
        <svg
          className={`w-5 h-5 text-[#D4A017] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-sm text-[#888] leading-relaxed border-t border-[#1a1a1a] pt-4">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

function AuditForm() {
  const [state, handleSubmit] = useForm("xzdjvaeq");

  if (state.succeeded) {
    return (
      <div className="bg-[#0A0A0A] border border-[#1a1a1a] rounded-sm p-12 max-w-[520px] mx-auto">
        <div className="text-[#D4A017] font-display text-2xl font-bold mb-3">
          Got it!
        </div>
        <p className="text-[#999] text-[15px] leading-relaxed">
          We&apos;ll have your free audit ready within 24 hours. Keep an eye on
          your phone &mdash; we&apos;ll text you when it&apos;s done.
        </p>
      </div>
    );
  }

  const inputStyle =
    "w-full px-4 py-3.5 bg-[#111] border border-[#222] rounded-sm text-[#E8E4DF] text-sm outline-none transition-all duration-300 focus:border-[#D4A017] focus:shadow-[0_0_0_3px_rgba(212,160,23,0.1)] placeholder:text-[#444]";

  return (
    <div className="bg-[#0A0A0A] border border-[#1a1a1a] rounded-sm p-10 md:p-12 max-w-[520px] mx-auto">
      <div className="text-xl font-semibold text-[#F5F3EF] mb-2">
        Request Your Free Audit
      </div>
      <p className="text-sm text-[#666] mb-7">
        Takes 30 seconds. We&apos;ll send your report within 24 hours.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[#666] uppercase tracking-wider mb-1.5">
            Your Name
          </label>
          <input id="name" type="text" name="name" required placeholder="e.g. Don Labbe" className={inputStyle} />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="business" className="block text-xs font-medium text-[#666] uppercase tracking-wider mb-1.5">
            Business Name
          </label>
          <input id="business" type="text" name="business" required placeholder="e.g. Inner City Auto Repair" className={inputStyle} />
          <ValidationError prefix="Business" field="business" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-[#666] uppercase tracking-wider mb-1.5">
            Phone Number
          </label>
          <input id="phone" type="tel" name="phone" required placeholder="(603) 555-1234" className={inputStyle} />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="website" className="block text-xs font-medium text-[#666] uppercase tracking-wider mb-1.5">
            Current Website <span className="text-[#444] normal-case tracking-normal">(optional)</span>
          </label>
          <input id="website" type="text" name="website" placeholder="e.g. www.mybusiness.com or 'None'" className={inputStyle} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="btn-primary w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Sending..." : "Get My Free Audit"}
        </button>
      </form>
      <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
        <p className="text-xs text-[#555] mb-2">Prefer to call or text?</p>
        <a href={`tel:${PHONE}`} className="text-[#D4A017] font-display text-lg font-bold no-underline">
          {PHONE}
        </a>
      </div>
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrollY > 60;

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NOISE OVERLAY */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ============================================================ */}
      {/* NAVIGATION */}
      {/* ============================================================ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-400 ${
          navBg
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1a1a1a]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1100px] mx-auto flex justify-between items-center h-16">
          <button
            onClick={() => scrollTo("hero")}
            className="text-base font-bold text-[#E8E4DF] tracking-wide cursor-pointer bg-transparent border-none"
          >
            SOUTHERN<span className="text-[#D4A017]"> NH</span> DIGITAL
          </button>
          <div className="hidden md:flex items-center gap-7">
            <button className="nav-link" onClick={() => scrollTo("services")}>Services</button>
            <button className="nav-link" onClick={() => scrollTo("work")}>Our Work</button>
            <button className="nav-link" onClick={() => scrollTo("pricing")}>Pricing</button>
            <button className="nav-link" onClick={() => scrollTo("about")}>About</button>
            <button className="nav-link" onClick={() => scrollTo("faq")}>FAQ</button>
            <button
              className="nav-link text-[#D4A017] border border-[#D4A01744] px-4 py-1.5 rounded-sm hover:bg-[#D4A01711]"
              onClick={() => scrollTo("contact")}
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#888] cursor-pointer bg-transparent border-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#1a1a1a] bg-[#0A0A0A]/98 backdrop-blur-md">
            <div className="px-4 py-5 space-y-1">
              {["services", "work", "pricing", "about", "faq"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block w-full text-left text-base font-medium text-[#999] hover:text-[#D4A017] transition-colors py-3 border-b border-[#1a1a1a] bg-transparent border-x-0 border-t-0 cursor-pointer"
                >
                  {id === "work" ? "Our Work" : id === "faq" ? "FAQ" : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="block w-full btn-primary text-center mt-4"
              >
                Get a Free Audit
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Animated orbs */}
        <AnimatedOrb className="w-[700px] h-[700px] -top-[20%] -right-[15%] bg-[#D4A017] opacity-[0.03]" />
        <AnimatedOrb className="w-[500px] h-[500px] -bottom-[10%] -left-[10%] bg-[#1B6750] opacity-[0.03]" />
        <AnimatedOrb className="w-[300px] h-[300px] top-[40%] right-[20%] bg-[#D4A017] opacity-[0.02]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#D4A017 1px, transparent 1px), linear-gradient(90deg, #D4A017 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="pt-28 pb-20 relative z-10 max-w-[1100px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-[#D4A01711] border border-[#D4A01722] rounded-full px-4 py-2 mb-7">
                  <span className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse" />
                  <span className="text-xs font-medium tracking-wide text-[#D4A017]">
                    Now taking new clients in Southern NH
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-display text-[clamp(38px,5.5vw,68px)] font-bold leading-[1.08] text-[#F5F3EF] mb-6">
                  Your customers
                  <br />are searching.
                  <br />
                  <span className="text-[#D4A017] italic font-normal">
                    Can they find you?
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-[#888] leading-relaxed max-w-[480px] mb-10">
                  We build websites and optimize Google presence for local service
                  businesses across Southern New Hampshire. More visibility. More calls. More revenue.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex gap-4 flex-wrap">
                  <button className="btn-primary" onClick={() => scrollTo("contact")}>
                    Get a Free Audit
                  </button>
                  <button className="btn-outline" onClick={() => scrollTo("work")}>
                    See Our Work
                  </button>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {["#D4A017", "#2563EB", "#059669", "#DC2626"].map((color, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-[#0A0A0A] flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ backgroundColor: color }}
                      >
                        {["JM", "GS", "ES", "GP"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#E8E4DF]">3 Demo Sites Live</div>
                    <div className="text-xs text-[#666]">Explore our portfolio below</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Browser mockup */}
            <FadeIn delay={0.3} direction="left" className="hidden lg:block">
              <div className="relative">
                {/* Main browser window */}
                <div className="bg-[#111] border border-[#1E1E1E] rounded-lg overflow-hidden shadow-2xl shadow-black/40">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#161616] border-b border-[#1E1E1E]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#333]" />
                      <div className="w-3 h-3 rounded-full bg-[#333]" />
                      <div className="w-3 h-3 rounded-full bg-[#333]" />
                    </div>
                    <div className="flex-1 mx-3 bg-[#0A0A0A] rounded-md px-3 py-1.5 text-[11px] text-[#666]">
                      southernnhdigital.com/demo/barber
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=80"
                      alt="Barbershop demo site preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating small window */}
                <div className="absolute -bottom-6 -left-8 w-[200px] bg-[#111] border border-[#1E1E1E] rounded-lg overflow-hidden shadow-xl shadow-black/30">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#161616] border-b border-[#1E1E1E]">
                    <div className="w-2 h-2 rounded-full bg-[#333]" />
                    <div className="w-2 h-2 rounded-full bg-[#333]" />
                    <div className="w-2 h-2 rounded-full bg-[#333]" />
                  </div>
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80"
                      alt="Plumbing demo site preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating stat badge */}
                <div className="absolute -top-4 -right-4 bg-[#111] border border-[#D4A01733] rounded-lg px-4 py-3 shadow-lg">
                  <div className="text-[#D4A017] text-lg font-bold font-display">+340%</div>
                  <div className="text-[10px] text-[#666] uppercase tracking-wider">Avg. visibility increase</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS BAR */}
      {/* ============================================================ */}
      <section className="bg-[#111] border-y border-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4A01708] via-transparent to-[#D4A01708]" />
        <div className="max-w-[1100px] mx-auto px-6 py-14 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {STATS.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative">
                  {i > 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#1a1a1a]" />}
                  <div className="font-display text-[48px] font-bold text-[#D4A017] mb-2 leading-none">
                    {s.value}
                  </div>
                  <div className="text-xs text-[#666] leading-relaxed max-w-[220px] mx-auto">
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES */}
      {/* ============================================================ */}
      <section id="services" className="max-w-[1100px] mx-auto px-6 py-28">
        <FadeIn>
          <SectionLabel>What We Do</SectionLabel>
          <SectionTitle>
            Everything your business needs to get found online.
          </SectionTitle>
          <GoldLine />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="group service-card relative">
                {/* Gold glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4A01708] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm pointer-events-none" />
                <div className="relative">
                  <div className="w-12 h-12 bg-[#D4A01711] rounded-sm flex items-center justify-center text-[#D4A017] mb-5 group-hover:bg-[#D4A01722] transition-colors duration-300">
                    {s.icon}
                  </div>
                  <div
                    className="text-[32px] font-bold font-display mb-3"
                    style={{ color: "#1a1a1a", WebkitTextStroke: "1px #333" }}
                  >
                    {s.num}
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5F3EF] mb-3 group-hover:text-[#D4A017] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#777] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHO WE HELP */}
      {/* ============================================================ */}
      <section className="bg-[#0D0D0D] border-y border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto px-6 py-20">
          <FadeIn>
            <div className="text-center mb-12">
              <SectionLabel>Industries We Serve</SectionLabel>
              <p className="text-[15px] text-[#777] max-w-[500px] mx-auto">
                We specialize in local service businesses. If customers find you by searching online, we can help.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 0.06}>
                <div className="group flex items-center gap-3 bg-[#111] border border-[#1a1a1a] rounded-sm px-5 py-4 hover:border-[#D4A01744] transition-all duration-300 cursor-default">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">{ind.icon}</span>
                  <span className="text-sm font-medium text-[#999] group-hover:text-[#E8E4DF] transition-colors duration-300">{ind.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROCESS */}
      {/* ============================================================ */}
      <section id="process" className="max-w-[1100px] mx-auto px-6 py-28">
        <FadeIn>
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle>Simple process. Real results.</SectionTitle>
          <GoldLine />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PROCESS.map((p, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative">
                {/* Connector line */}
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px border-t border-dashed border-[#222]" />
                )}
                <div className="w-14 h-14 bg-[#111] border border-[#D4A01744] rounded-full flex items-center justify-center mb-6">
                  <span className="font-display text-xl font-bold text-[#D4A017]">{p.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#F5F3EF] mb-3">{p.title}</h3>
                <p className="text-[15px] text-[#777] leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEE OUR WORK */}
      {/* ============================================================ */}
      <section id="work" className="bg-[#0D0D0D] border-y border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto px-6 py-28">
          <FadeIn>
            <SectionLabel>See Our Work</SectionLabel>
            <SectionTitle>This is what we build.</SectionTitle>
            <p className="text-[15px] text-[#777] leading-relaxed max-w-[520px] mb-4">
              Explore fully functional demo sites we built for fictional local businesses.
              Every site is mobile-friendly, fast, and designed to drive phone calls.
            </p>
            <GoldLine />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMOS.map((demo, i) => (
              <FadeIn key={demo.href} delay={i * 0.12}>
                <a
                  href={demo.href}
                  className="group block bg-[#111] border border-[#1a1a1a] rounded-sm overflow-hidden hover:border-[#D4A01744] transition-all duration-400 hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={demo.img}
                      alt={demo.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-[2px] text-[#D4A017] uppercase bg-[#0A0A0A]/80 backdrop-blur-sm px-3 py-1 rounded-sm">
                      {demo.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#F5F3EF] mb-3 group-hover:text-[#D4A017] transition-colors">
                      {demo.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {demo.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-medium text-[#666] bg-[#1a1a1a] px-2.5 py-1 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A017] group-hover:gap-3 transition-all">
                      Explore Demo <span className="text-lg">&rarr;</span>
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRICING */}
      {/* ============================================================ */}
      <section id="pricing" className="max-w-[1100px] mx-auto px-6 py-28">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Transparent Pricing</SectionLabel>
            <SectionTitle className="!mb-4">
              Honest pricing. No surprises.
            </SectionTitle>
            <p className="text-[15px] text-[#777] max-w-[520px] mx-auto">
              One-time build fee + optional monthly management. You own your website. Cancel anytime.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.12}>
              <div
                className={`relative flex flex-col h-full rounded-sm border p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-[#111] border-[#D4A017] shadow-[0_0_40px_-10px_rgba(212,160,23,0.15)]"
                    : "bg-[#0A0A0A] border-[#1a1a1a] hover:border-[#D4A01744]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[2px] text-[#0A0A0A] uppercase bg-[#D4A017] px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#999] uppercase tracking-wider mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-[40px] font-bold text-[#F5F3EF] leading-none">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[#555]">{plan.period}</span>
                  </div>
                  <div className="text-sm text-[#D4A017] font-medium mt-2">
                    + {plan.monthly} management
                  </div>
                  <p className="text-sm text-[#777] mt-4 leading-relaxed">
                    {plan.desc}
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#999]">
                      <span className="text-[#D4A017] mt-0.5 shrink-0">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo("contact")}
                  className={`w-full py-3.5 text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 cursor-pointer ${
                    plan.featured
                      ? "bg-[#D4A017] text-[#0A0A0A] hover:bg-[#e8b52a]"
                      : "bg-transparent text-[#D4A017] border border-[#D4A01744] hover:bg-[#D4A01711]"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <p className="text-center text-xs text-[#555] mt-8">
            All prices are starting points. Every project is scoped individually based on your needs.
            The audit is always free &mdash; we&apos;ll give you an exact quote after.
          </p>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/* ABOUT */}
      {/* ============================================================ */}
      <section id="about" className="bg-[#0D0D0D] border-y border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto px-6 py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <SectionLabel>About</SectionLabel>
                <h2 className="font-display text-[clamp(28px,4vw,38px)] font-bold text-[#F5F3EF] mb-3">
                  Built by someone who gets it.
                </h2>
                <div className="w-[60px] h-[2px] bg-[#D4A017] mb-8" />
                <p className="text-[15px] text-[#999] leading-relaxed mb-4">
                  My name is Jesse. I&apos;m a GM-certified automotive technician with a
                  Computer Science degree from SNHU, based right here in Southern New Hampshire.
                </p>
                <p className="text-[15px] text-[#999] leading-relaxed mb-4">
                  I started Southern NH Digital because I kept seeing the same problem &mdash;
                  great local businesses with five-star reputations that nobody can find online.
                  Meanwhile, competitors with worse service rank higher because they have a
                  website and you don&apos;t.
                </p>
                <p className="text-[15px] text-[#999] leading-relaxed mb-4">
                  I&apos;m not an agency with a sales team or a call center. I work directly
                  with business owners to build what they actually need &mdash; a clean website,
                  a strong Google presence, and more calls coming in.
                </p>
                <p className="text-[15px] text-[#777] leading-relaxed italic">
                  I understand your business because I&apos;ve worked in it. That&apos;s the difference.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative">
                <div className="bg-[#111] border border-[#1a1a1a] rounded-sm p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#D4A01722] rounded-full flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-[#D4A017]">JM</span>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-[#F5F3EF]">Jesse Morin</div>
                      <div className="text-sm text-[#D4A017]">Founder &amp; Developer</div>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm text-[#888]">
                    <div className="flex items-center gap-3">
                      <span className="text-[#D4A017]">&#10003;</span>
                      Computer Science, SNHU
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#D4A017]">&#10003;</span>
                      GM Certified Automotive Technician
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#D4A017]">&#10003;</span>
                      Born &amp; raised in Southern NH
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#D4A017]">&#10003;</span>
                      Next.js, React, TypeScript, Tailwind
                    </div>
                  </div>
                </div>
                {/* Decorative offset border */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#D4A01722] rounded-sm -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ */}
      {/* ============================================================ */}
      <section id="faq" className="max-w-[800px] mx-auto px-6 py-28">
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle>Common Questions</SectionTitle>
          </div>
        </FadeIn>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <FAQItem q={faq.q} a={faq.a} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT */}
      {/* ============================================================ */}
      <section id="contact" className="bg-[#111] border-t border-[#1a1a1a] relative overflow-hidden">
        <AnimatedOrb className="w-[500px] h-[500px] -top-[30%] -right-[10%] bg-[#D4A017] opacity-[0.03]" />
        <div className="max-w-[1100px] mx-auto px-6 py-28 text-center relative">
          <FadeIn>
            <SectionLabel>Get Started</SectionLabel>
            <SectionTitle>
              Free online audit. No strings attached.
            </SectionTitle>
            <p className="text-base text-[#777] leading-relaxed max-w-[520px] mx-auto mb-12">
              We&apos;ll analyze your online presence and show you exactly where
              you&apos;re losing customers. Takes five minutes. Costs nothing.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <AuditForm />
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer className="bg-[#060606] border-t border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-base font-bold text-[#E8E4DF] tracking-wide mb-3">
                SOUTHERN<span className="text-[#D4A017]"> NH</span> DIGITAL
              </div>
              <p className="text-sm text-[#555] leading-relaxed max-w-[360px] mb-6">
                Web design and Google optimization for local service businesses in
                Southern New Hampshire. More visibility. More calls. More revenue.
              </p>
              <div className="space-y-2 text-sm">
                <a href={`tel:${PHONE}`} className="block text-[#888] hover:text-[#D4A017] transition-colors">
                  {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="block text-[#888] hover:text-[#D4A017] transition-colors">
                  {EMAIL}
                </a>
                <p className="text-[#555]">Manchester, NH</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Services", id: "services" },
                  { label: "Our Work", id: "work" },
                  { label: "Pricing", id: "pricing" },
                  { label: "About", id: "about" },
                  { label: "FAQ", id: "faq" },
                  { label: "Get Started", id: "contact" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-[#666] hover:text-[#D4A017] transition-colors cursor-pointer bg-transparent border-none text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Demo Sites */}
            <div>
              <h4 className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-4">
                Demo Sites
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/demo/auto" className="text-[#666] hover:text-[#D4A017] transition-colors">
                    Auto Repair Demo
                  </a>
                </li>
                <li>
                  <a href="/demo/barber" className="text-[#666] hover:text-[#D4A017] transition-colors">
                    Barbershop Demo
                  </a>
                </li>
                <li>
                  <a href="/demo/plumbing" className="text-[#666] hover:text-[#D4A017] transition-colors">
                    Plumbing Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#111]">
          <div className="max-w-[1100px] mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-4">
            <div className="text-xs text-[#444]">
              &copy; 2026 Southern NH Digital. Manchester, NH.
            </div>
            <div className="text-xs text-[#444]">
              <a href={`tel:${PHONE}`} className="text-[#555] no-underline hover:text-[#D4A017] transition-colors">
                {PHONE}
              </a>
              <span className="mx-3 text-[#333]">|</span>
              <a href={`mailto:${EMAIL}`} className="text-[#555] no-underline hover:text-[#D4A017] transition-colors">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
