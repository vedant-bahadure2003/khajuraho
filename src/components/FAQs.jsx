import { useState } from "react";
import { useIntersectionObserver } from "../hooks";

const FAQs = ({ isDark, festivalData }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const faqs = festivalData?.faqs || [];

  return (
    <section
      id="faqs"
      ref={elementRef}
      className={`relative py-20 md:py-32 overflow-hidden theme-transition ${
        isDark ? "bg-dark-bg" : "bg-white"
      }`}
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              isDark
                ? "bg-neon-indigo/20 text-neon-indigo"
                : "bg-indigo/10 text-indigo"
            }`}
          >
            Questions?
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Everything you need to know about the Khajuraho Dance Festival
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                hasIntersected
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:border-saffron/30"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 md:p-6 flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span
                  className={`font-semibold pr-4 ${
                    isDark ? "text-offwhite" : "text-charcoal"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? isDark
                        ? "bg-saffron text-white rotate-180"
                        : "bg-indigo text-white rotate-180"
                      : isDark
                      ? "bg-white/10 text-offwhite"
                      : "bg-gray-200 text-charcoal"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`accordion-content ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <div>
                  <div
                    className={`px-5 md:px-6 pb-5 md:pb-6 ${
                      isDark ? "text-offwhite/70" : "text-charcoal/70"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className={`mb-4 ${
              isDark ? "text-offwhite/60" : "text-charcoal/60"
            }`}
          >
            Still have questions?
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-saffron/20 text-saffron hover:bg-saffron/30"
                : "bg-indigo/10 text-indigo hover:bg-indigo/20"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
