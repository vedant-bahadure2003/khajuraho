import { useIntersectionObserver } from "../hooks";

const Sponsors = ({ isDark, festivalData }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });
  const sponsors = festivalData?.sponsors || [];

  const titleSponsors = sponsors.filter((s) => s.tier === "title");
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "silver");

  const SponsorLogo = ({ sponsor, size = "md" }) => (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-center p-4 md:p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
        isDark
          ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-saffron/30"
          : "bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl"
      } ${
        size === "lg"
          ? "min-h-[120px]"
          : size === "md"
          ? "min-h-[100px]"
          : "min-h-[80px]"
      }`}
    >
      {/* Placeholder Logo */}
      <div
        className={`flex flex-col items-center gap-2 ${
          isDark ? "text-offwhite/60" : "text-charcoal/60"
        } group-hover:text-saffron transition-colors`}
      >
        <svg
          className={`${
            size === "lg"
              ? "w-12 h-12"
              : size === "md"
              ? "w-10 h-10"
              : "w-8 h-8"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
        <span
          className={`font-medium text-center ${
            size === "lg" ? "text-base" : "text-sm"
          }`}
        >
          {sponsor.name}
        </span>
      </div>
    </a>
  );

  return (
    <section
      ref={elementRef}
      className={`relative py-20 md:py-32 overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-indigo/5 to-dark-bg"
          : "bg-gradient-to-b from-offwhite via-white to-offwhite"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                ? "bg-sandstone/20 text-sandstone"
                : "bg-indigo/10 text-indigo"
            }`}
          >
            Our Partners
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Sponsors & <span className="gradient-text">Partners</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Made possible by our incredible partners committed to preserving
            Indian culture
          </p>
        </div>

        {/* Title Sponsors */}
        {titleSponsors.length > 0 && (
          <div
            className={`mb-12 transition-all duration-700 delay-100 ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3
              className={`text-center text-sm uppercase tracking-wider mb-6 ${
                isDark ? "text-offwhite/50" : "text-charcoal/50"
              }`}
            >
              Title Sponsors
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {titleSponsors.map((sponsor, index) => (
                <SponsorLogo key={index} sponsor={sponsor} size="lg" />
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <div
            className={`mb-12 transition-all duration-700 delay-200 ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3
              className={`text-center text-sm uppercase tracking-wider mb-6 ${
                isDark ? "text-offwhite/50" : "text-charcoal/50"
              }`}
            >
              Gold Partners
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {goldSponsors.map((sponsor, index) => (
                <SponsorLogo key={index} sponsor={sponsor} size="md" />
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div
            className={`transition-all duration-700 delay-300 ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3
              className={`text-center text-sm uppercase tracking-wider mb-6 ${
                isDark ? "text-offwhite/50" : "text-charcoal/50"
              }`}
            >
              Supporting Partners
            </h3>
            <div className="grid sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {silverSponsors.map((sponsor, index) => (
                <SponsorLogo key={index} sponsor={sponsor} size="sm" />
              ))}
            </div>
          </div>
        )}

        {/* Become a Sponsor CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-400 ${
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
            Interested in partnering with us?
          </p>
          <a
            href="mailto:sponsors@khajurahodancefestival.com"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-gradient-to-r from-saffron to-sandstone text-white hover:shadow-lg hover:shadow-saffron/30"
                : "bg-gradient-to-r from-indigo to-neon-indigo text-white hover:shadow-lg hover:shadow-indigo/30"
            }`}
          >
            Become a Sponsor
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
