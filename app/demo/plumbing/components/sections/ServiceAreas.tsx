import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Coverage Area"
          title="Proudly Serving Southern NH"
          subtitle="Based in Manchester, we dispatch licensed technicians across the region — fast."
        />

        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {shopInfo.serviceAreas.map((town) => (
              <span
                key={town}
                className="bg-[#F8FAFB] border border-gray-200 rounded-full px-6 py-3 text-sm font-semibold text-[#1B3A5C] hover:border-[#E8742A]/30 hover:bg-[#E8742A]/5 transition-colors duration-200"
              >
                {town}, NH
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              Don&apos;t see your town? Call us — we likely cover your area too.{" "}
              <a href={shopInfo.phoneHref} className="text-[#E8742A] font-semibold hover:underline">
                {shopInfo.phone}
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
