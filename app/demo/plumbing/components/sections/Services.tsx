import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="What We Do"
          subtitle="From leaky faucets to full HVAC installs — we handle it all with licensed pros, upfront pricing, and a satisfaction guarantee."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopInfo.services.map((service, i) => (
            <FadeIn key={service.name} delay={i * 100}>
              <div className="group h-full bg-[#F8FAFB] border border-gray-100 rounded-xl p-8 hover:shadow-lg hover:border-[#E8742A]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[#1B3A5C]/5 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-[#E8742A]/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3
                  className="text-lg font-bold text-[#1B3A5C] mb-3 group-hover:text-[#E8742A] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
                >
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#E8742A] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E8742A] group-hover:gap-2.5 transition-all duration-300"
                >
                  Request a Quote
                  <span>&rarr;</span>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
