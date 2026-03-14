import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "../../data/services";
import { shopInfo } from "../../data/shop-info";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return {
      title: `${service.title} | ${shopInfo.name}`,
      description: service.description,
    };
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      {/* Service Hero */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/demo/auto/services"
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-emerald-400 transition-colors mb-6"
          >
            ← All Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl">
                {service.description}
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="text-2xl font-bold text-emerald-400">
                {service.price}
              </div>
              <Link
                href="/demo/auto/contact"
                className="inline-flex items-center justify-center bg-emerald-700 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
              >
                Schedule This Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.included.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need This Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
            Signs You Need {service.shortTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.signs.map((sign) => (
              <div key={sign} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                <span className="text-amber-500 mt-0.5">⚠</span>
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={step.step} className="relative p-6 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.step}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
            Pricing
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-2xl">
            <div className="text-3xl font-bold text-emerald-700 mb-4">
              {service.pricing.range}
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Final price depends on:
            </p>
            <ul className="space-y-2 mb-6">
              {service.pricing.factors.map((factor) => (
                <li key={factor} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-gray-400">•</span>
                  {factor}
                </li>
              ))}
            </ul>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-sm text-emerald-800">
              {service.pricing.note}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Ready to Schedule Your {service.shortTitle}?
          </h2>
          <p className="mt-4 text-lg text-emerald-100">
            Give us a call or fill out our online form. We&apos;ll get you taken care of.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/demo/auto/contact"
              className="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Service
            </Link>
            <a
              href={shopInfo.phoneHref}
              className="inline-flex items-center justify-center bg-transparent text-white border border-white/40 px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Call {shopInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
