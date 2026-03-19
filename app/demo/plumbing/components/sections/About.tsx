import { shopInfo } from "../../data/shop-info";
import FadeIn from "../ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shopInfo.owner.image}
                  alt={shopInfo.owner.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute bottom-6 right-6 bg-[#1B3A5C] text-white rounded-xl p-5 shadow-xl">
                <span className="block text-3xl font-extrabold">{shopInfo.stats.yearsInBusiness}</span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-300">Years in<br />Business</span>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="left">
            <span className="text-[#E8742A] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              About Us
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#1B3A5C] leading-tight mb-6"
              style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
            >
              Meet Rick Dumont
            </h2>
            <div className="space-y-5 text-gray-500 leading-relaxed">
              <p>
                Rick started Granite Plumbing & Home Services eighteen years ago out
                of the back of his truck with one goal: be the kind of contractor he&apos;d
                want to hire for his own home. Honest pricing, show up on time, do the
                job right, clean up when you&apos;re done.
              </p>
              <p>
                Growing up in Manchester, he&apos;d watched his parents get burned by
                contractors who gave low estimates then hit them with surprise charges,
                who started jobs and disappeared for weeks, who cut corners that led to
                bigger problems down the road. He knew there had to be a better way.
              </p>
              <p>
                Today, Granite is a team of twelve licensed technicians serving homes
                across Southern New Hampshire. But the standards haven&apos;t changed.
                Every tech is background-checked. Every estimate is written and honored.
                Every job is backed by a satisfaction guarantee. Rick still personally
                oversees every major project — because when his name is on the truck,
                the work has to be right.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-[#F8FAFB] rounded-xl">
                <div className="text-2xl font-extrabold text-[#1B3A5C]">{shopInfo.stats.reviewCount}+</div>
                <div className="text-xs text-gray-400 font-semibold mt-1">5-Star Reviews</div>
              </div>
              <div className="text-center p-4 bg-[#F8FAFB] rounded-xl">
                <div className="text-2xl font-extrabold text-[#1B3A5C]">12</div>
                <div className="text-xs text-gray-400 font-semibold mt-1">Licensed Techs</div>
              </div>
              <div className="text-center p-4 bg-[#F8FAFB] rounded-xl">
                <div className="text-2xl font-extrabold text-[#1B3A5C]">24/7</div>
                <div className="text-xs text-gray-400 font-semibold mt-1">Emergency Line</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
