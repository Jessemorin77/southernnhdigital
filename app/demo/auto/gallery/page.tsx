import CtaBanner from "../components/sections/CtaBanner";

const photos = [
  // Shop
  { src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80", alt: "Service bay overview", category: "Shop" },
  { src: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80", alt: "Shop exterior", category: "Shop" },
  { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80", alt: "Diagnostic station", category: "Shop" },
  { src: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&q=80", alt: "Tool wall", category: "Shop" },
  // Team
  { src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", alt: "Technician at work", category: "Team" },
  { src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80", alt: "Team collaboration", category: "Team" },
  { src: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80", alt: "Under the hood", category: "Team" },
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", alt: "Engine work", category: "Team" },
  // Work
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", alt: "Brake service", category: "Work" },
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", alt: "Finished vehicle", category: "Work" },
  { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", alt: "Quality check", category: "Work" },
  { src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80", alt: "Tire service", category: "Work" },
  // Waiting Area
  { src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", alt: "Comfortable waiting area", category: "Waiting Area" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "Clean lobby", category: "Waiting Area" },
  { src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80", alt: "Customer lounge", category: "Waiting Area" },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", alt: "Reception desk", category: "Waiting Area" },
];

const categories = [...new Set(photos.map((p) => p.category))];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Gallery
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Take a look around our shop. Clean bays, modern equipment, and a comfortable waiting area.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos
                  .filter((p) => p.category === category)
                  .map((photo) => (
                    <div
                      key={photo.alt}
                      className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-200"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
