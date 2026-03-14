import Link from "next/link";
import { reviews } from "../../data/reviews";
import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import StarRating from "../ui/StarRating";

export default function ReviewsSnippet() {
  const featured = reviews.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Customers Say"
          subtitle={`${shopInfo.stats.rating} stars from ${shopInfo.stats.reviewCount}+ reviews. Don't just take our word for it.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <StarRating rating={review.rating} size="sm" />
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {review.name}
                  </div>
                  <div className="text-xs text-gray-500">{review.service}</div>
                </div>
                <div className="text-xs text-gray-400">{review.platform}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/demo/auto/reviews"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
          >
            Read All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
