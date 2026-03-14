import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80",
    alt: "Auto repair shop bay",
  },
  {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80",
    alt: "Mechanic working on engine",
  },
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
    alt: "Clean waiting area",
  },
  {
    src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80",
    alt: "Brake repair work",
  },
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
    alt: "Diagnostic equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&q=80",
    alt: "Shop exterior",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Shop"
          subtitle="Take a look around Granite State Auto Repair."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
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

        <div className="mt-10 text-center">
          <Link
            href="/demo/auto/gallery"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
          >
            See More Photos →
          </Link>
        </div>
      </div>
    </section>
  );
}
