"use client";

import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Work"
          title="From the Chair"
          subtitle="Clean fades, sharp lines, and attention to detail. See what walks out of Elm Street."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {shopInfo.gallery.map((photo, i) => (
            <FadeIn key={photo.alt} delay={i * 75}>
              <div
                className={`group relative overflow-hidden bg-[#111] ${
                  i === 0 || i === 5
                    ? "md:col-span-2 md:row-span-2 aspect-square"
                    : "aspect-square"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-white font-medium">{photo.alt}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
