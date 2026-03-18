import FadeIn from "../ui/FadeIn";

const vibeFeatures = [
  {
    title: "Complimentary Drinks",
    description: "Coffee, water, or a cold one from the fridge. On the house, every visit.",
    icon: "🥃",
  },
  {
    title: "Premium Products",
    description: "Baxter of California, Reuzel, Layrite. Your hair gets the good stuff.",
    icon: "✨",
  },
  {
    title: "The Right Soundtrack",
    description: "Curated playlists that set the mood. No top 40 radio — just good taste.",
    icon: "🎵",
  },
  {
    title: "No Rush, No Pressure",
    description: "Your appointment is your time. We don't hurry through cuts to fit in more.",
    icon: "⏳",
  },
];

export default function ShopVibe() {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <FadeIn>
              <span className="text-[#C8A960] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
                The Experience
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-barber-display), serif" }}
              >
                More Than Just
                <br />a Haircut
              </h2>
              <p className="mt-6 text-[#9A9589] leading-relaxed max-w-lg">
                Walk through the door and you feel it immediately. The warm lighting, the
                smell of fresh coffee mixed with sandalwood, the low hum of good
                conversation. Elm Street isn&apos;t just where you get your hair cut — it&apos;s
                where you decompress, recharge, and walk out feeling like yourself again.
              </p>
            </FadeIn>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {vibeFeatures.map((feature, i) => (
                <FadeIn key={feature.title} delay={i * 100}>
                  <div>
                    <span className="text-xl mb-3 block">{feature.icon}</span>
                    <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1.5 text-sm text-[#6A6560] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80"
                  alt="Barbershop interior with warm lighting"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-[#111] border border-[#1E1E1E] p-6 max-w-[240px]">
                <div className="text-[#C8A960] text-sm font-semibold mb-1">Since 2014</div>
                <p className="text-xs text-[#6A6560] leading-relaxed">
                  12 years of serving Manchester, one perfect cut at a time.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
