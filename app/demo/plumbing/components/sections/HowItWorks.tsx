import FadeIn from "../ui/FadeIn";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    num: "01",
    title: "Call or Book Online",
    description:
      "Give us a call or fill out the form on this page. Tell us what's going on and we'll get you on the schedule — often same-day.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Diagnose the Problem",
    description:
      "A licensed technician arrives on time, assesses the issue, and gives you a clear, written estimate before any work starts. No surprises.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "We Fix It Right the First Time",
    description:
      "We complete the repair with quality parts, clean up after ourselves, and back everything with our 2-year labor warranty. Done right, guaranteed.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#1B3A5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="Simple as 1-2-3"
          subtitle="No runaround. No wasted time. Here's exactly what happens when you call Granite."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 150}>
              <div className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px border-t border-dashed border-white/15" />
                )}

                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 text-[#E8742A] mb-6">
                  {step.icon}
                </div>

                <div className="text-[#E8742A] text-xs font-bold uppercase tracking-wider mb-2">
                  Step {step.num}
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
                >
                  {step.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
