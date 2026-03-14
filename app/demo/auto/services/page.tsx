import Link from "next/link";
import { services } from "../data/services";
import SectionHeader from "../components/ui/SectionHeader";
import CtaBanner from "../components/sections/CtaBanner";

const carBrands = [
  "Honda", "Toyota", "Ford", "Chevrolet", "Subaru", "Hyundai",
  "Kia", "Nissan", "Jeep", "Ram", "GMC", "Dodge",
  "Volkswagen", "BMW", "Audi", "Mercedes-Benz", "Mazda", "Chrysler",
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            From routine maintenance to complex repairs, our ASE-certified team handles it all with expert care and transparent pricing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {service.description}
                </p>
                <div className="mt-4 text-sm font-semibold text-emerald-700">
                  {service.price}
                </div>
                <div className="mt-3 text-sm text-emerald-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Brands We Service"
            subtitle="We work on all domestic and foreign makes and models."
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {carBrands.map((brand) => (
              <div
                key={brand}
                className="bg-white border border-gray-200 rounded-lg py-4 px-3 text-center text-sm font-medium text-gray-700"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
