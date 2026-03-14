import Link from "next/link";
import { services } from "../../data/services";
import SectionHeader from "../ui/SectionHeader";

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="From oil changes to engine diagnostics, we handle it all with expert care and honest pricing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/demo/auto/services/${service.slug}`}
              className="group border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                {service.shortTitle}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {service.description}
              </p>
              <div className="mt-4 text-sm font-semibold text-emerald-700">
                {service.price}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
