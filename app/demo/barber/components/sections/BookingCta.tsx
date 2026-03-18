import { shopInfo } from "../../data/shop-info";
import FadeIn from "../ui/FadeIn";

export default function BookingCta() {
  return (
    <section id="contact" className="py-24 bg-[#0E0E0E] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: CTA + Info */}
          <FadeIn>
            <span className="text-[#C8A960] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              Book Your Appointment
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-barber-display), serif" }}
            >
              Ready for a
              <br />
              Fresh Cut?
            </h2>
            <p className="mt-6 text-[#9A9589] leading-relaxed max-w-md">
              Walk-ins are always welcome, but booking ahead guarantees your spot.
              Call us or stop by — we&apos;ll take care of the rest.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={shopInfo.phoneHref}
                className="inline-flex items-center justify-center bg-[#C8A960] text-[#0A0A0A] px-9 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#d4b76e] transition-all duration-300 hover:-translate-y-0.5"
              >
                Call to Book
              </a>
              <a
                href={`mailto:${shopInfo.email}`}
                className="inline-flex items-center justify-center bg-transparent text-[#C8A960] border border-[#C8A960]/30 px-9 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#C8A960]/5 transition-all duration-300"
              >
                Email Us
              </a>
            </div>

            {/* Contact info */}
            <div className="mt-12 space-y-4 text-sm text-[#9A9589]">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#C8A960] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a
                  href={shopInfo.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A960] transition-colors"
                >
                  {shopInfo.address.full}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#C8A960] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={shopInfo.phoneHref} className="hover:text-[#C8A960] transition-colors">
                  {shopInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#C8A960] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${shopInfo.email}`} className="hover:text-[#C8A960] transition-colors">
                  {shopInfo.email}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right: Hours */}
          <FadeIn delay={200}>
            <div className="bg-[#111] border border-[#1A1A1A] p-8 lg:p-10">
              <h3
                className="text-2xl font-bold text-white mb-8"
                style={{ fontFamily: "var(--font-barber-display), serif" }}
              >
                Shop Hours
              </h3>
              <div className="space-y-4">
                {shopInfo.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between py-3 border-b border-[#1A1A1A] last:border-0"
                  >
                    <span className="text-sm text-[#9A9589]">{h.day}</span>
                    <span
                      className={`text-sm font-medium ${
                        h.hours === "Closed" ? "text-red-400/70" : "text-white"
                      }`}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-[#1A1A1A]">
                <p className="text-sm text-[#6A6560] leading-relaxed">
                  Walk-ins are welcome during all business hours. For guaranteed
                  availability, we recommend calling ahead — especially Saturdays.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
