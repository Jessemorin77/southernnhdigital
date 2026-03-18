import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Difference"
          title="Why Elm Street"
          subtitle="There are plenty of places to get a haircut. Here's why people drive past all of them to sit in our chair."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopInfo.whyChooseUs.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 100}>
              <div className="group p-8 border border-[#1A1A1A] hover:border-[#C8A960]/20 transition-all duration-300">
                <span className="text-3xl mb-5 block">{reason.icon}</span>
                <h3 className="text-base font-semibold text-white group-hover:text-[#C8A960] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm text-[#6A6560] leading-relaxed">
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
