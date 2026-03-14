import { reviews, reviewPlatforms } from "../data/reviews";
import { shopInfo } from "../data/shop-info";
import StarRating from "../components/ui/StarRating";
import CtaBanner from "../components/sections/CtaBanner";

export default function ReviewsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Customer Reviews
          </h1>
          <div className="mt-6 flex items-center justify-center gap-3">
            <StarRating rating={shopInfo.stats.rating} size="lg" />
            <span className="text-2xl font-bold">{shopInfo.stats.rating}</span>
          </div>
          <p className="mt-2 text-gray-400">
            Based on {shopInfo.stats.reviewCount}+ reviews
          </p>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-emerald-700">
                        {review.name[0]}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {review.name}
                      </div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                    {review.platform}
                  </span>
                </div>
                <StarRating rating={review.rating} size="sm" />
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-3 text-xs text-emerald-700 font-medium">
                  {review.service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
            Find Us On
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {reviewPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white border border-gray-200 rounded-xl px-8 py-6 min-w-[180px]"
              >
                <div className="text-lg font-semibold text-gray-900">
                  {platform.name}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {platform.reviewCount} reviews
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
