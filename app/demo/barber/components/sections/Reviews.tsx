import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Word on the Street"
          title="What Our Clients Say"
          subtitle={`${shopInfo.stats.rating} stars from ${shopInfo.stats.reviewCount}+ reviews. We let the results speak for themselves.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopInfo.reviews.map((review, i) => (
            <FadeIn
              key={review.name}
              delay={i * 100}
              className={i === 3 ? "lg:col-span-2" : ""}
            >
              <div className="h-full bg-[#111] border border-[#1A1A1A] p-7 hover:border-[#C8A960]/20 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 text-[#C8A960] text-sm mb-5">
                  {Array.from({ length: review.rating }, (_, j) => (
                    <span key={j}>&#9733;</span>
                  ))}
                </div>

                <p className="text-[#9A9589] text-sm leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="mt-6 pt-5 border-t border-[#1A1A1A] flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white">{review.name}</div>
                    <div className="text-xs text-[#6A6560] mt-0.5">{review.service}</div>
                  </div>
                  <span className="text-xs text-[#4A4540]">{review.platform}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
