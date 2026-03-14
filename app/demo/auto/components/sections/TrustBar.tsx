import { shopInfo } from "../../data/shop-info";

const stats = [
  {
    value: `${shopInfo.stats.rating}★`,
    label: "Google Rating",
    sublabel: `${shopInfo.stats.reviewCount}+ Reviews`,
  },
  {
    value: `${shopInfo.stats.yearsInBusiness}+`,
    label: "Years in Business",
    sublabel: "Family Owned",
  },
  {
    value: "ASE",
    label: "Certified",
    sublabel: "Master Technicians",
  },
  {
    value: "24/24",
    label: "Month / Mile",
    sublabel: "Warranty on Repairs",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-sm font-medium text-emerald-100 mt-1">{stat.label}</div>
              <div className="text-xs text-emerald-200">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
