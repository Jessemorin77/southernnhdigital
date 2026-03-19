import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Granite"
          title="Why Homeowners Trust Us"
          subtitle="You're letting someone into your home. Here's why thousands of families across Southern NH choose us."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopInfo.whyChooseUs.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 100}>
              <div className="relative bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-0 left-8 w-12 h-1 bg-[#E8742A] rounded-b-full" />
                <span className="text-3xl mb-4 block mt-2">{reason.icon}</span>
                <h3
                  className="text-base font-bold text-[#1B3A5C] mb-2"
                  style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
                >
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
