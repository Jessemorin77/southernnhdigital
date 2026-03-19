import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What Homeowners Are Saying"
          subtitle={`${shopInfo.stats.rating} stars from ${shopInfo.stats.reviewCount}+ verified reviews. Our reputation is everything to us.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopInfo.reviews.map((review, i) => (
            <FadeIn
              key={review.name}
              delay={i * 100}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <div className="h-full bg-white rounded-xl border border-gray-100 p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Stars */}
                <div className="flex gap-0.5 text-[#E8742A] text-sm mb-4">
                  {Array.from({ length: review.rating }, (_, j) => (
                    <span key={j}>&#9733;</span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div>
                    <div className="text-sm font-bold text-[#1B3A5C]">{review.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{review.service}</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {review.platform}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
