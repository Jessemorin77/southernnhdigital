import { shopInfo } from "../data/shop-info";
import CtaBanner from "../components/sections/CtaBanner";

const facilityPhotos = [
  {
    src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80",
    alt: "Service bays",
  },
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    alt: "Customer waiting area",
  },
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    alt: "Diagnostic equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80",
    alt: "Shop exterior",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80')",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Family-owned, community-driven, and committed to honest auto repair since 2009.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Granite State Auto Repair started in 2009 when Mike Sullivan decided there had to be a better way. After years of working at dealerships and watching customers get overcharged for simple repairs, he opened his own shop with one goal: treat every customer the way he&apos;d want to be treated.
              </p>
              <p>
                What started as a two-bay shop on Valley Street has grown into one of Manchester&apos;s most trusted repair facilities. But the philosophy hasn&apos;t changed — honest diagnostics, fair pricing, and quality work that we stand behind with a 24-month warranty.
              </p>
              <p>
                We&apos;re not the cheapest shop in town, and we&apos;re not trying to be. We&apos;re the shop that does it right the first time, explains everything in plain English, and never sells you something you don&apos;t need. That&apos;s why our customers keep coming back — and sending their friends and family our way.
              </p>
              <p>
                Fifteen years later, we&apos;re still here, still family-owned, and still doing things the right way. Whether it&apos;s a quick oil change or a major engine repair, you&apos;ll get the same honest service that built our reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shopInfo.team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-emerald-700 font-bold">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-emerald-700 font-medium">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
                  {member.certifications.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-12">
            Certifications & Affiliations
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {shopInfo.certifications.map((cert) => (
              <div
                key={cert}
                className="w-40 h-40 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center p-6"
              >
                <span className="text-center text-sm font-semibold text-gray-700">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Shop */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
            Our Shop
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilityPhotos.map((photo) => (
              <div
                key={photo.alt}
                className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
