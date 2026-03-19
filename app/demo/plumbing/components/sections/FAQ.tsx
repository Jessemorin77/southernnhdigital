"use client";

import { useState } from "react";
import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 75}>
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-[#F8FAFB] transition-colors"
        >
          <span className="text-sm font-bold text-[#1B3A5C] pr-4">{question}</span>
          <svg
            className={`w-5 h-5 text-[#E8742A] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-7 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Common Questions"
          subtitle="Straightforward answers. If you don't see your question here, just give us a call."
        />

        <div className="space-y-4">
          {shopInfo.faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400 mb-3">Still have questions?</p>
            <a
              href={shopInfo.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E8742A] hover:underline"
            >
              Call us at {shopInfo.phone}
              <span>&rarr;</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
