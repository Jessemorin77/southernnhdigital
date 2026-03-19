"use client";

import { shopInfo } from "../../data/shop-info";
import FadeIn from "../ui/FadeIn";

export default function Contact() {
  const inputClass =
    "w-full px-4 py-3 bg-[#F8FAFB] border border-gray-200 rounded-lg text-gray-800 text-sm outline-none transition-colors duration-300 focus:border-[#E8742A] focus:ring-2 focus:ring-[#E8742A]/10 placeholder:text-gray-400";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Form */}
          <FadeIn>
            <span className="text-[#E8742A] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              Schedule Service
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#1B3A5C] leading-tight mb-3"
              style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
            >
              Request an Appointment
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Fill out the form and we&apos;ll get back to you within the hour during
              business hours. For emergencies, call us directly.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input id="contact-name" type="text" placeholder="John Smith" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input id="contact-phone" type="tel" placeholder="(603) 555-1234" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="contact-address" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Service Address
                </label>
                <input id="contact-address" type="text" placeholder="123 Main St, Manchester, NH" className={inputClass} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Service Needed
                  </label>
                  <select id="contact-service" className={`${inputClass} appearance-none`} defaultValue="">
                    <option value="" disabled>Select a service...</option>
                    {shopInfo.services.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-date" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <input id="contact-date" type="date" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Describe the Issue
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us what's going on — the more detail, the better we can help."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E8742A] text-white py-4 rounded-lg text-sm font-bold hover:bg-[#d4681f] transition-colors shadow-lg shadow-[#E8742A]/20"
              >
                Request Appointment
              </button>

              <p className="text-xs text-gray-400 text-center">
                We&apos;ll confirm your appointment by phone within 1 business hour.
              </p>
            </form>
          </FadeIn>

          {/* Right: Contact info */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden bg-[#F8FAFB] border border-gray-200 h-[240px] flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a
                    href={shopInfo.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#E8742A] hover:underline"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-[#F8FAFB] border border-gray-200 rounded-xl p-8">
                <h3
                  className="text-lg font-bold text-[#1B3A5C] mb-6"
                  style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
                >
                  Get In Touch
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1B3A5C]/5 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#1B3A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Address</div>
                      <a
                        href={shopInfo.address.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-[#E8742A] transition-colors"
                      >
                        {shopInfo.address.full}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1B3A5C]/5 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#1B3A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</div>
                      <a href={shopInfo.phoneHref} className="text-sm text-gray-600 hover:text-[#E8742A] transition-colors">
                        {shopInfo.phone}
                      </a>
                      <div className="text-xs text-[#E8742A] font-semibold mt-1">24/7 Emergency Line Available</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1B3A5C]/5 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#1B3A5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</div>
                      <a href={`mailto:${shopInfo.email}`} className="text-sm text-gray-600 hover:text-[#E8742A] transition-colors">
                        {shopInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-[#F8FAFB] border border-gray-200 rounded-xl p-8">
                <h3
                  className="text-lg font-bold text-[#1B3A5C] mb-4"
                  style={{ fontFamily: "var(--font-plumbing-display), sans-serif" }}
                >
                  Business Hours
                </h3>
                <div className="space-y-2.5 text-sm">
                  {shopInfo.hours.map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span className="text-gray-500">{h.day}</span>
                      <span className={`font-medium ${h.hours === "Emergency Only" ? "text-[#E8742A]" : "text-gray-700"}`}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
