import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";

export default function ServiceArea() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Proudly Serving Southern New Hampshire"
          subtitle="Conveniently located in Manchester, we serve drivers from across the region."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {shopInfo.serviceArea.map((town) => (
            <span
              key={town}
              className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700"
            >
              {town}, NH
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
