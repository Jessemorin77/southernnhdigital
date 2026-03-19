import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function Specials() {
  return (
    <section id="specials" className="py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Savings"
          title="Current Special Offers"
          subtitle="Quality service at fair prices — plus a few ways to save."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shopInfo.specials.map((special, i) => (
            <FadeIn key={special.title} delay={i * 100}>
              <div className="relative h-full bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="absolute -top-3 left-6 bg-[#E8742A] text-white text-xs font-bold px-4 py-1 rounded-full">
                  {special.badge}
                </span>
                <h3
                  className="text-xl font-bold text-[#1B3A5C] mt-3 mb-3"
                  style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
                >
                  {special.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {special.description}
                </p>
                <p className="text-xs text-gray-400 italic">
                  {special.terms}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E8742A] mt-5 hover:gap-2.5 transition-all duration-300"
                >
                  Claim This Offer <span>&rarr;</span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
