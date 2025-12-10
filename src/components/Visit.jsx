import { useIntersectionObserver } from "../hooks";
import KhajurahoMap from "./KhajurahoMap";

const Visit = ({ isDark, festivalData }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });
  const travelInfo = festivalData?.travelInfo;

  return (
    <section
      id="visit"
      ref={elementRef}
      className={`relative py-20  overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-indigo/10 to-dark-bg"
          : "bg-gradient-to-b from-white via-sandstone/10 to-white"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
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
            Plan Your Visit
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Getting to <span className="gradient-text">Khajuraho</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Your complete guide to reaching the festival and making the most of
            your visit.
          </p>
        </div>

        {/* Interactive 3D Map Section */}
        <div
          className={`mb-12 rounded-2xl overflow-hidden transition-all duration-700 delay-150 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${isDark ? "border border-white/10" : "shadow-2xl"}`}
        >
          <div className="h-[500px] md:h-[600px] relative">
            <KhajurahoMap isDark={isDark} />
          </div>
          <div
            className={`p-4 ${
              isDark
                ? "bg-white/5"
                : "bg-gradient-to-r from-indigo/5 to-saffron/5"
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p
                  className={`font-semibold text-lg ${
                    isDark ? "text-offwhite" : "text-charcoal"
                  }`}
                >
                  🗺️ Explore Khajuraho in 3D
                </p>
                <p
                  className={`text-sm ${
                    isDark ? "text-offwhite/60" : "text-charcoal/60"
                  }`}
                >
                  Click markers to discover temples, parks, hotels & attractions
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark
                      ? "bg-saffron/20 text-saffron"
                      : "bg-saffron/10 text-saffron"
                  }`}
                >
                  🛕 Temples
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-emerald-500/10 text-emerald-600"
                  }`}
                >
                  🐅 Wildlife
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-blue-500/10 text-blue-600"
                  }`}
                >
                  🏨 Hotels
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Date & Weather Card */}
          <div
            className={`rounded-2xl p-6 transition-all duration-700 delay-100 ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } ${
              isDark
                ? "bg-white/5 border border-white/10"
                : "bg-white shadow-xl"
            }`}
          >
            <div
              className={`inline-flex p-3 rounded-xl mb-4 ${
                isDark ? "bg-saffron/20" : "bg-saffron/10"
              }`}
            >
              <svg
                className="w-8 h-8 text-saffron"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3
              className={`font-heading text-xl font-bold mb-4 ${
                isDark ? "text-offwhite" : "text-charcoal"
              }`}
            >
              Festival Dates
            </h3>

            <div
              className={`p-4 rounded-xl mb-4 ${
                isDark ? "bg-saffron/10" : "bg-saffron/5"
              }`}
            >
              <p
                className={`text-3xl font-heading font-bold ${
                  isDark ? "text-saffron" : "text-saffron"
                }`}
              >
                Feb 20 - 26, 2025
              </p>
              <p
                className={`text-sm mt-1 ${
                  isDark ? "text-offwhite/60" : "text-charcoal/60"
                }`}
              >
                7 Days • Evening Performances
              </p>
            </div>

            <div
              className={`space-y-3 ${
                isDark ? "text-offwhite/80" : "text-charcoal/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-saffron"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium">Weather</p>
                  <p className="text-xs opacity-70">
                    {travelInfo?.weather?.temperature}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-saffron"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium">Show Time</p>
                  <p className="text-xs opacity-70">6:00 PM - 10:00 PM</p>
                </div>
              </div>
              <p
                className={`text-sm pt-2 ${
                  isDark ? "text-offwhite/60" : "text-charcoal/60"
                }`}
              >
                {travelInfo?.weather?.recommendation}
              </p>
            </div>
          </div>

          {/* Travel Options Card */}
          <div
            className={`rounded-2xl p-6 transition-all duration-700 delay-300 ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } ${
              isDark
                ? "bg-white/5 border border-white/10"
                : "bg-white shadow-xl"
            }`}
          >
            <div
              className={`inline-flex p-3 rounded-xl mb-4 ${
                isDark ? "bg-neon-indigo/20" : "bg-indigo/10"
              }`}
            >
              <svg
                className={`w-8 h-8 ${
                  isDark ? "text-neon-indigo" : "text-indigo"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
            </div>
            <h3
              className={`font-heading text-xl font-bold mb-4 ${
                isDark ? "text-offwhite" : "text-charcoal"
              }`}
            >
              How to Reach
            </h3>

            <div className="space-y-4">
              {/* By Air */}
              <div
                className={`p-4 rounded-xl ${
                  isDark ? "bg-white/5" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg
                    className="w-5 h-5 text-saffron"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    By Air
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    isDark ? "text-offwhite/70" : "text-charcoal/70"
                  }`}
                >
                  {travelInfo?.nearestAirport?.name} (
                  {travelInfo?.nearestAirport?.distance})
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-offwhite/50" : "text-charcoal/50"
                  }`}
                >
                  Flights from{" "}
                  {travelInfo?.nearestAirport?.connections?.join(", ")}
                </p>
              </div>

              {/* By Train */}
              <div
                className={`p-4 rounded-xl ${
                  isDark ? "bg-white/5" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg
                    className="w-5 h-5 text-saffron"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17l-5-5 5-5m6 10l5-5-5-5"
                    />
                  </svg>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    By Train
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    isDark ? "text-offwhite/70" : "text-charcoal/70"
                  }`}
                >
                  {travelInfo?.nearestRailway?.name} (
                  {travelInfo?.nearestRailway?.distance})
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-offwhite/50" : "text-charcoal/50"
                  }`}
                >
                  Trains from{" "}
                  {travelInfo?.nearestRailway?.connections
                    ?.slice(0, 3)
                    .join(", ")}
                </p>
              </div>

              {/* By Road */}
              <div
                className={`p-4 rounded-xl ${
                  isDark ? "bg-white/5" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg
                    className="w-5 h-5 text-saffron"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    By Road
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    isDark ? "text-offwhite/70" : "text-charcoal/70"
                  }`}
                >
                  From Delhi: {travelInfo?.roadAccess?.fromDelhi}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isDark ? "text-offwhite/50" : "text-charcoal/50"
                  }`}
                >
                  Well-connected via national highways
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Checklist */}
        <div
          className={`mt-12 rounded-2xl p-6 md:p-8 transition-all duration-700 delay-400 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${
            isDark
              ? "bg-gradient-to-r from-indigo/20 to-saffron/20 border border-white/10"
              : "bg-gradient-to-r from-indigo/5 to-saffron/5"
          }`}
        >
          <h3
            className={`font-heading text-xl md:text-2xl font-bold mb-6 text-center ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            🎒 What to Pack
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {travelInfo?.checklist?.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-xl ${
                  isDark ? "bg-white/5" : "bg-white/80"
                }`}
              >
                <span className="text-saffron">✓</span>
                <span
                  className={`text-sm ${
                    isDark ? "text-offwhite/80" : "text-charcoal/80"
                  }`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute top-1/4 -right-20 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-sandstone/10" : "bg-saffron/10"
        }`}
      />
      <div
        className={`absolute bottom-1/4 -left-20 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-neon-indigo/10" : "bg-indigo/10"
        }`}
      />
    </section>
  );
};

export default Visit;
