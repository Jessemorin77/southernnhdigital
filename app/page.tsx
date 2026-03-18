"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { useForm, ValidationError } from "@formspree/react";

// ============================================================
// SCROLL ANIMATION HOOK
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
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
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
    desc: "Mobile-first websites built to turn visitors into phone calls. Your services, your reviews, your contact info \u2014 presented so customers choose you over the competition.",
  },
  {
    num: "02",
    title: "Google Optimization",
    desc: "Get found when locals search for your services. We optimize your Google Business Profile, manage your reviews, and make sure you show up when it matters \u2014 in the \u2018near me\u2019 searches.",
  },
  {
    num: "03",
    title: "Ongoing Management",
    desc: "Monthly updates, review responses, performance tracking, and support. Your online presence stays current and competitive without you lifting a finger.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Free Audit",
    desc: "We analyze your current online presence and show you exactly where you\u2019re losing customers. What shows up when someone searches for your business? What are your competitors doing that you\u2019re not? You\u2019ll see it all \u2014 no cost, no commitment.",
  },
  {
    step: "2",
    title: "Custom Build",
    desc: "We build your website, optimize your Google listing, and get everything connected. Your phone number is clickable, your services are clear, and your reviews are front and center. Typically live within two weeks.",
  },
  {
    step: "3",
    title: "Monthly Growth",
    desc: "We manage your online presence month to month. Responding to reviews, updating your site, tracking how many people are finding you. You focus on running your business \u2014 we keep the customers coming in.",
  },
];

const STATS = [
  {
    value: "72%",
    label: "of customers search online before choosing a local service",
  },
  {
    value: "88%",
    label: "of local mobile searches lead to a call within 24 hours",
  },
  { value: "46%", label: "of all Google searches have local intent" },
];

const PHONE = "(603) 260-8830";
const EMAIL = "jesse@southernnhdigital.com";

// ============================================================
// AUDIT FORM
// ============================================================
function AuditForm() {
  const [state, handleSubmit] = useForm("xzdjvaeq");

  if (state.succeeded) {
    return (
      <div className="bg-[#0A0A0A] border border-[#1a1a1a] rounded-sm p-12 max-w-[480px] mx-auto">
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
    "w-full px-4 py-3 bg-[#111] border border-[#222] rounded-sm text-[#E8E4DF] text-sm outline-none transition-colors duration-300 focus:border-[#D4A017] placeholder:text-[#444]";

  return (
    <div className="bg-[#0A0A0A] border border-[#1a1a1a] rounded-sm p-12 max-w-[480px] mx-auto">
      <div className="text-xl font-semibold text-[#F5F3EF] mb-6">
        Request Your Free Audit
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-[#666] uppercase tracking-wider mb-1.5"
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="e.g. Don Labbe"
            className={inputStyle}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label
            htmlFor="business"
            className="block text-xs font-medium text-[#666] uppercase tracking-wider mb-1.5"
          >
            Business Name
          </label>
          <input
            id="business"
            type="text"
            name="business"
            required
            placeholder="e.g. Inner City Auto Repair"
            className={inputStyle}
          />
          <ValidationError
            prefix="Business"
            field="business"
            errors={state.errors}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-medium text-[#666] uppercase tracking-wider mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            placeholder="(603) 555-1234"
            className={inputStyle}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block text-xs font-medium text-[#666] uppercase tracking-wider mb-1.5"
          >
            Current Website{" "}
            <span className="text-[#444] normal-case tracking-normal">
              (optional)
            </span>
          </label>
          <input
            id="website"
            type="text"
            name="website"
            placeholder="e.g. www.mybusiness.com or 'None'"
            className={inputStyle}
          />
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
        <a
          href={`tel:${PHONE}`}
          className="text-[#D4A017] font-display text-lg font-bold no-underline"
        >
          {PHONE}
        </a>
      </div>
    </div>
  );
}

// ============================================================
// PAGE COMPONENT
// ============================================================
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrollY > 60;

  const scrollTo = (id: string) => {
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
            className="text-base font-bold text-[#E8E4DF] tracking-wide cursor-pointer"
          >
            SOUTHERN<span className="text-[#D4A017]"> NH</span> DIGITAL
          </button>
          <div className="hidden md:flex items-center gap-7">
            <button className="nav-link" onClick={() => scrollTo("services")}>
              Services
            </button>
            <button className="nav-link" onClick={() => scrollTo("process")}>
              Process
            </button>
            <button className="nav-link" onClick={() => scrollTo("work")}>
              Our Work
            </button>
            <button className="nav-link" onClick={() => scrollTo("about")}>
              About
            </button>
            <button
              className="nav-link text-[#D4A017] border border-[#D4A01744] px-4 py-1.5 rounded-sm"
              onClick={() => scrollTo("contact")}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.03)_0%,transparent_70%)] blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(27,67,50,0.03)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

        <div className="pt-36 pb-20 relative z-10 max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-medium tracking-[3px] text-[#D4A017] uppercase mb-6">
              Southern New Hampshire
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-[clamp(40px,6vw,72px)] font-bold leading-[1.1] text-[#F5F3EF] max-w-[700px] mb-6">
              Your customers are searching.
              <br />
              <span className="text-[#D4A017] italic font-normal">
                Can they find you?
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-[#888] leading-relaxed max-w-[520px] mb-10">
              We help local service businesses in Southern New Hampshire get
              found online, get more calls, and stop losing customers to
              competitors with better websites.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-4 flex-wrap">
              <button
                className="btn-primary"
                onClick={() => scrollTo("contact")}
              >
                Get a Free Audit
              </button>
              <button
                className="btn-outline"
                onClick={() => scrollTo("services")}
              >
                See What We Do
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS BAR */}
      {/* ============================================================ */}
      <section className="bg-[#111] border-y border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {STATS.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div>
                  <div className="font-display text-[44px] font-bold text-[#D4A017] mb-2">
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
      <section id="services" className="max-w-[1100px] mx-auto px-6 py-24">
        <FadeIn>
          <p className="text-xs font-medium tracking-[3px] text-[#D4A017] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold text-[#F5F3EF] mb-3">
            Everything your business needs to get found online.
          </h2>
          <div className="w-[60px] h-[2px] bg-[#D4A017] mb-12" />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="service-card">
                <div
                  className="text-[32px] font-bold font-display mb-4"
                  style={{
                    color: "#1a1a1a",
                    WebkitTextStroke: "1px #333",
                  }}
                >
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold text-[#F5F3EF] mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-[#777] leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROCESS */}
      {/* ============================================================ */}
      <section id="process" className="bg-[#0D0D0D]">
        <div className="max-w-[1100px] mx-auto px-6 py-24">
          <FadeIn>
            <p className="text-xs font-medium tracking-[3px] text-[#D4A017] uppercase mb-3">
              How It Works
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold text-[#F5F3EF] mb-3">
              Simple process. Real results.
            </h2>
            <div className="w-[60px] h-[2px] bg-[#D4A017] mb-12" />
          </FadeIn>
          <div className="flex flex-col">
            {PROCESS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div
                  className={`flex gap-8 items-start py-8 ${
                    i < PROCESS.length - 1 ? "border-b border-[#1a1a1a]" : ""
                  }`}
                >
                  <div className="font-display text-5xl font-bold text-[#D4A017] opacity-60 min-w-[60px] leading-none">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F5F3EF] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-[15px] text-[#777] leading-relaxed max-w-[500px]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEE OUR WORK */}
      {/* ============================================================ */}
      <section id="work" className="max-w-[1100px] mx-auto px-6 py-24">
        <FadeIn>
          <p className="text-xs font-medium tracking-[3px] text-[#D4A017] uppercase mb-3">
            See Our Work
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold text-[#F5F3EF] mb-3">
            This is what we build.
          </h2>
          <div className="w-[60px] h-[2px] bg-[#D4A017] mb-4" />
          <p className="text-[15px] text-[#777] leading-relaxed max-w-[520px] mb-12">
            Explore fully functional demo sites we built for fictional local
            businesses. This is exactly what your customers would see &mdash;
            professional, mobile-friendly, and designed to drive calls.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <a
            href="/demo/auto"
            className="group block service-card relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="bg-[#1a1a1a] rounded-sm aspect-[16/10] flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
                    alt="Auto repair shop demo site preview"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="inline-block text-[10px] font-semibold tracking-[2px] text-[#D4A017] uppercase bg-[#D4A01711] px-3 py-1 rounded-sm mb-4">
                  Demo Site
                </span>
                <h3 className="text-2xl font-semibold text-[#F5F3EF] mb-3 group-hover:text-[#D4A017] transition-colors">
                  Granite State Auto Repair
                </h3>
                <p className="text-sm text-[#777] leading-relaxed mb-4">
                  A complete multi-page website for a Manchester, NH auto repair
                  shop. Includes services pages, online scheduling, reviews,
                  specials, gallery, and more &mdash; everything a local shop
                  needs to win customers online.
                </p>
                <ul className="text-xs text-[#666] space-y-1.5 mb-6">
                  <li>&#10003; 8 service pages with pricing &amp; FAQs</li>
                  <li>&#10003; Online service request form</li>
                  <li>&#10003; Customer reviews &amp; ratings</li>
                  <li>&#10003; Current specials &amp; promotions</li>
                  <li>&#10003; Mobile-first responsive design</li>
                </ul>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A017] group-hover:gap-3 transition-all">
                  Explore the Demo
                  <span className="text-lg">&rarr;</span>
                </span>
              </div>
            </div>
          </a>
        </FadeIn>

        <FadeIn delay={0.25}>
          <a
            href="/demo/barber"
            className="group block service-card relative overflow-hidden mt-8"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="bg-[#1a1a1a] rounded-sm aspect-[16/10] flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
                    alt="Barbershop demo site preview"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="inline-block text-[10px] font-semibold tracking-[2px] text-[#D4A017] uppercase bg-[#D4A01711] px-3 py-1 rounded-sm mb-4">
                  Demo Site
                </span>
                <h3 className="text-2xl font-semibold text-[#F5F3EF] mb-3 group-hover:text-[#D4A017] transition-colors">
                  Elm Street Barber Co.
                </h3>
                <p className="text-sm text-[#777] leading-relaxed mb-4">
                  A premium single-page website for a Manchester, NH barbershop.
                  Dark theme with gold accents, scroll animations, services
                  with pricing, team profiles, gallery, reviews &mdash; the
                  full package.
                </p>
                <ul className="text-xs text-[#666] space-y-1.5 mb-6">
                  <li>&#10003; 8 services with pricing &amp; duration</li>
                  <li>&#10003; Team profiles &amp; owner story</li>
                  <li>&#10003; Photo gallery with hover effects</li>
                  <li>&#10003; Customer reviews &amp; ratings</li>
                  <li>&#10003; Dark premium design with animations</li>
                </ul>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A017] group-hover:gap-3 transition-all">
                  Explore the Demo
                  <span className="text-lg">&rarr;</span>
                </span>
              </div>
            </div>
          </a>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/* ABOUT */}
      {/* ============================================================ */}
      <section id="about" className="max-w-[1100px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-xs font-medium tracking-[3px] text-[#D4A017] uppercase mb-3">
                About
              </p>
              <h2 className="font-display text-[clamp(28px,4vw,38px)] font-bold text-[#F5F3EF] mb-3">
                Built by someone who gets it.
              </h2>
              <div className="w-[60px] h-[2px] bg-[#D4A017]" />
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div>
              <p className="text-[15px] text-[#999] leading-relaxed mb-4">
                My name is Jesse. I&apos;m a GM-certified automotive technician
                with a degree in Computer Science, based right here in Southern
                New Hampshire.
              </p>
              <p className="text-[15px] text-[#999] leading-relaxed mb-4">
                I started Southern NH Digital because I kept seeing the same
                problem &mdash; great local businesses with five-star reputations
                that nobody can find online. Meanwhile, competitors with worse
                service rank higher because they have a website and you
                don&apos;t.
              </p>
              <p className="text-[15px] text-[#999] leading-relaxed mb-4">
                I&apos;m not an agency. I don&apos;t have a sales team or a call
                center. I work directly with business owners to build what they
                actually need &mdash; a clean website, a strong Google presence,
                and more calls coming in.
              </p>
              <p className="text-[15px] text-[#777] leading-relaxed italic">
                I understand your business because I&apos;ve worked in it.
                That&apos;s the difference.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT */}
      {/* ============================================================ */}
      <section id="contact" className="bg-[#111] border-t border-[#1a1a1a]">
        <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
          <FadeIn>
            <p className="text-xs font-medium tracking-[3px] text-[#D4A017] uppercase mb-4">
              Get Started
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold text-[#F5F3EF] mb-4">
              Free online audit. No strings attached.
            </h2>
            <p className="text-base text-[#777] leading-relaxed max-w-[520px] mx-auto mb-10">
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
      <footer className="border-t border-[#1a1a1a] px-6 py-8">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="text-xs text-[#444]">
            &copy; 2026 Southern NH Digital. Manchester, NH.
          </div>
          <div className="text-xs text-[#444]">
            <a
              href={`tel:${PHONE}`}
              className="text-[#555] no-underline hover:text-[#D4A017] transition-colors"
            >
              {PHONE}
            </a>
            <span className="mx-3 text-[#333]">|</span>
            <a
              href={`mailto:${EMAIL}`}
              className="text-[#555] no-underline hover:text-[#D4A017] transition-colors"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
