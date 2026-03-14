"use client";

import { useState } from "react";
import { shopInfo } from "../data/shop-info";
import { services } from "../data/services";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Schedule a service, ask a question, or just say hello. We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Two Column: Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Column */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Phone
                  </h3>
                  <a
                    href={shopInfo.phoneHref}
                    className="text-lg font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    {shopInfo.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Email
                  </h3>
                  <a
                    href={`mailto:${shopInfo.email}`}
                    className="text-lg text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    {shopInfo.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Address
                  </h3>
                  <a
                    href={shopInfo.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-emerald-700 transition-colors"
                  >
                    {shopInfo.address.full}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Hours
                  </h3>
                  <div className="space-y-1">
                    {shopInfo.hours.map((h) => (
                      <div key={h.day} className="flex justify-between max-w-xs text-sm">
                        <span className="text-gray-700">{h.day}</span>
                        <span className={h.hours === "Closed" ? "text-red-500" : "text-gray-900 font-medium"}>
                          {h.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Service Area
                  </h3>
                  <p className="text-sm text-gray-600">
                    {shopInfo.serviceArea.join(" · ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
                Request Service
              </h2>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Request Received!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We&apos;ll get back to you within one business day. For urgent issues, call us at{" "}
                    <a href={shopInfo.phoneHref} className="text-emerald-700 font-semibold">
                      {shopInfo.phone}
                    </a>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">
                        Vehicle (Year, Make, Model)
                      </label>
                      <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        placeholder="e.g. 2019 Honda Accord"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.shortTitle}
                          </option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Describe the Issue
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us what's going on with your vehicle..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-700 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
                  >
                    Submit Service Request
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We&apos;ll get back to you within one business day. For urgent issues, call{" "}
                    <a href={shopInfo.phoneHref} className="text-emerald-700">
                      {shopInfo.phone}
                    </a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.5!2d-71.45!3d42.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDU5JzI0LjAiTiA3McKwMjcnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Granite State Auto Repair location"
        />
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
            We Serve These Communities
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {shopInfo.serviceArea.map((town) => (
              <span
                key={town}
                className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-gray-700"
              >
                {town}, NH
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
