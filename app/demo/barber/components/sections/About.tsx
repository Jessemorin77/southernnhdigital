import { shopInfo } from "../../data/shop-info";
import FadeIn from "../ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shopInfo.owner.image}
                  alt={shopInfo.owner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C8A960]/20 -z-10" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="left">
            <span className="text-[#C8A960] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              The Man Behind the Chair
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-barber-display), serif" }}
            >
              Meet Marcus Rivera
            </h2>
            <div className="mt-6 space-y-5 text-[#9A9589] leading-relaxed">
              <p>
                Marcus opened Elm Street Barber Co. twelve years ago with a straight razor,
                a single chair, and a belief that every man deserves to walk out feeling like
                the best version of himself.
              </p>
              <p>
                Growing up in Manchester, he watched the old-school barbershops disappear one
                by one — replaced by chains that treated haircuts like an assembly line. He
                wanted something different. A place where the craft mattered. Where barbers
                actually listened. Where you could sit down, have a drink, talk about the
                game, and leave looking sharp.
              </p>
              <p>
                Today, Elm Street is three chairs deep with a team that shares that same
                obsession with detail. Marcus still cuts six days a week because he genuinely
                loves what he does — and because he believes the owner should never be too far
                from the chair.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-[#C8A960]">{shopInfo.stats.yearsInBusiness}+</div>
                <div className="text-xs text-[#6A6560] uppercase tracking-wider mt-1">Years in Business</div>
              </div>
              <div className="w-px h-12 bg-[#1E1E1E]" />
              <div>
                <div className="text-3xl font-bold text-[#C8A960]">{shopInfo.stats.reviewCount}+</div>
                <div className="text-xs text-[#6A6560] uppercase tracking-wider mt-1">5-Star Reviews</div>
              </div>
              <div className="w-px h-12 bg-[#1E1E1E]" />
              <div>
                <div className="text-3xl font-bold text-[#C8A960]">3</div>
                <div className="text-xs text-[#6A6560] uppercase tracking-wider mt-1">Expert Barbers</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
