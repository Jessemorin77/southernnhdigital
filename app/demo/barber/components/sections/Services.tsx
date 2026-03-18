import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What We Do"
          title="Services & Pricing"
          subtitle="Every service includes a consultation, premium products, and the attention to detail you won't find at a chain."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {shopInfo.services.map((service, i) => (
            <FadeIn key={service.name} delay={i * 75}>
              <div className="group bg-[#111] border border-[#1A1A1A] p-7 transition-all duration-400 hover:border-[#C8A960]/30 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-xs text-[#6A6560] font-medium">{service.duration}</span>
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-[#C8A960] transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="mt-2.5 text-sm text-[#6A6560] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-5 pt-5 border-t border-[#1A1A1A]">
                  <span className="text-xl font-bold text-[#C8A960]">{service.price}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
