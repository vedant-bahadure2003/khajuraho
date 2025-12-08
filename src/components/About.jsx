import { useIntersectionObserver } from "../hooks";

const About = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const historyItems = [
    {
      title: "Origins & Architecture (9th–12th century)",
      content:
        "Khajuraho was created under the Chandela dynasty. The temples—built between the 9th and 12th centuries—are celebrated for intricate Nagara-style architecture and richly carved stone sculptures.",
      accent: "saffron",
    },
    {
      title: "Golden Age — Chandela Patrons (c. 950–1050 CE)",
      content:
        "The Chandela kings commissioned close to 85 temples (25 survive). Sculptors carved deities, dancers, musicians and daily life — presenting a holistic view of spirituality and human experience.",
      accent: "sandstone",
    },
    {
      title: "Symbolism & Sculptural Art",
      content:
        "Temples express the unity of life and devotion. Śṛṅgāra (sensual) motifs are iconic — representing life-energy and spiritual awakening rather than mere erotica.",
      accent: "indigo",
    },
    {
      title: "Decline, Rediscovery & UNESCO Listing",
      content:
        "After the 13th century Khajuraho fell into obscurity. Rediscovered by British surveyors in the 19th century, it was later conserved and designated a UNESCO World Heritage Site in 1986.",
      accent: "saffron",
    },
    {
      title: "Dance & Living Traditions",
      content:
        "Khajuraho's sculpted dancers inspired living traditions. Performers for centuries have looked to the temple poses for artistic reference — making Khajuraho a natural stage for classical dance.",
      accent: "sandstone",
    },
  ];

  const festivalInfo = {
    mainTitle: "Khajuraho Dance Festival — From Revival to Reverence",
    mainContent:
      "Launched in the 1970s as a cultural revival initiative, the festival brings classical dance to the illuminated temple backdrop — turning carved stone into an active stage for living art.",
    whyMatters: {
      title: "Why the Festival Matters",
      content:
        "It reconnects sculpture and performance — reviving techniques, encouraging new artists, and making Khajuraho a global hub for classical dance.",
    },
    evolution: {
      title: "Evolution Over Time",
      items: [
        "1970s — Government-supported revival celebrating temple arts.",
        "1990s–2000s — Inclusion of workshops, exhibitions and rising artists.",
        "2010s — Growth in digital outreach, international guests and broader programming.",
      ],
    },
  };

  const newEra2026 = [
    {
      icon: "🏛️",
      title: "UNESCO-stage Competition",
      description:
        "Selected finalists perform at a World Heritage site under conservation oversight.",
    },
    {
      icon: "🎬",
      title: "Open Call & Wildcard Entry",
      description:
        "Any eligible artist may apply via video — judges can award wildcard passes to outstanding acts.",
    },
    {
      icon: "⭐",
      title: "Share the Stage with Legends",
      description:
        "Finalists may be invited to perform alongside headline artists during the main festival.",
    },
  ];

  return (
    <section
      id="about"
      ref={elementRef}
      className={`relative py-20 md:py-32 overflow-hidden theme-transition ${
        isDark ? "bg-dark-bg" : "bg-offwhite"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${
              isDark ? "#C89B67" : "#2B2A7B"
            } 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

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
              isDark ? "bg-saffron/20 text-saffron" : "bg-indigo/10 text-indigo"
            }`}
          >
            Heritage & History
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Khajuraho:{" "}
            <span className="gradient-text">A Thousand Years of Culture</span>
          </h2>
          <p
            className={`max-w-4xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            From masterful stone sculptures to living performance traditions — a
            short history of Khajuraho and the evolution of the Khajuraho Dance
            Festival, now entering a bold new era.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - History Timeline */}
          <div
            className={`space-y-4 transition-all duration-700 delay-100 ${
              hasIntersected
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {historyItems.map((item, index) => (
              <HistoryCard
                key={index}
                item={item}
                isDark={isDark}
                index={index}
              />
            ))}
          </div>

          {/* Right Column - Festival Info */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              hasIntersected
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main Festival Card */}
            <div
              className={`rounded-2xl p-6 ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white shadow-lg"
              }`}
            >
              <h3
                className={`font-heading text-xl md:text-2xl font-bold mb-4 ${
                  isDark ? "text-saffron" : "text-indigo"
                }`}
              >
                {festivalInfo.mainTitle}
              </h3>
              <p
                className={`text-sm md:text-base leading-relaxed ${
                  isDark ? "text-offwhite/80" : "text-charcoal/80"
                }`}
              >
                {festivalInfo.mainContent}
              </p>
            </div>

            {/* Why It Matters */}
            <div
              className={`rounded-2xl p-6 ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white shadow-lg"
              }`}
            >
              <h4
                className={`font-heading text-lg font-bold mb-3 ${
                  isDark ? "text-offwhite" : "text-charcoal"
                }`}
              >
                {festivalInfo.whyMatters.title}
              </h4>
              <p
                className={`text-sm leading-relaxed ${
                  isDark ? "text-offwhite/70" : "text-charcoal/70"
                }`}
              >
                {festivalInfo.whyMatters.content}
              </p>
            </div>

            {/* Evolution Timeline */}
            <div
              className={`rounded-2xl p-6 ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white shadow-lg"
              }`}
            >
              <h4
                className={`font-heading text-lg font-bold mb-4 ${
                  isDark ? "text-offwhite" : "text-charcoal"
                }`}
              >
                {festivalInfo.evolution.title}
              </h4>
              <div className="space-y-3">
                {festivalInfo.evolution.items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 text-sm ${
                      isDark ? "text-offwhite/70" : "text-charcoal/70"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        isDark ? "bg-saffron" : "bg-indigo"
                      }`}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2026 New Era Card */}
            <div
              className={`rounded-2xl p-6 relative overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-saffron/20 to-indigo/20 border border-saffron/30"
                  : "bg-gradient-to-br from-indigo/10 to-saffron/10 border border-indigo/20"
              }`}
            >
              {/* Decorative glow */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl ${
                  isDark ? "bg-saffron/20" : "bg-indigo/20"
                }`}
              />

              <div className="relative">
                <h4
                  className={`font-heading text-2xl font-bold mb-6 ${
                    isDark ? "text-saffron" : "text-indigo"
                  }`}
                >
                  2026 — The New Era
                </h4>

                <div className="space-y-5">
                  {newEra2026.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                          isDark
                            ? "bg-saffron/30 text-saffron"
                            : "bg-indigo/20 text-indigo"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h5
                          className={`font-semibold text-sm mb-1 ${
                            isDark ? "text-offwhite" : "text-charcoal"
                          }`}
                        >
                          {item.title}
                        </h5>
                        <p
                          className={`text-xs leading-relaxed ${
                            isDark ? "text-offwhite/60" : "text-charcoal/60"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "1000+", label: "Years of History" },
            { value: "25", label: "Surviving Temples" },
            { value: "1986", label: "UNESCO Listed" },
            { value: "50+", label: "Festival Editions" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-5 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:border-saffron/30"
                  : "bg-white shadow-lg hover:shadow-xl"
              }`}
            >
              <div className="font-heading text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div
                className={`text-xs md:text-sm mt-1 ${
                  isDark ? "text-offwhite/60" : "text-charcoal/60"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute top-40 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none ${
          isDark ? "bg-indigo/10" : "bg-saffron/10"
        }`}
      />
      <div
        className={`absolute bottom-40 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none ${
          isDark ? "bg-saffron/10" : "bg-indigo/10"
        }`}
      />
    </section>
  );
};

const HistoryCard = ({ item, isDark, index }) => {
  const accentColors = {
    saffron: isDark ? "border-l-saffron" : "border-l-saffron",
    sandstone: isDark ? "border-l-sandstone" : "border-l-sandstone",
    indigo: isDark ? "border-l-indigo" : "border-l-indigo",
  };

  return (
    <div
      className={`rounded-xl p-5 border-l-4 transition-all duration-300 hover:scale-[1.02] ${
        accentColors[item.accent]
      } ${
        isDark
          ? "bg-white/5 hover:bg-white/10"
          : "bg-white shadow-md hover:shadow-lg"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <h4
        className={`font-heading text-base md:text-lg font-bold mb-2 ${
          isDark ? "text-offwhite" : "text-charcoal"
        }`}
      >
        {item.title}
      </h4>
      <p
        className={`text-sm leading-relaxed ${
          isDark ? "text-offwhite/70" : "text-charcoal/70"
        }`}
      >
        {item.content}
      </p>
    </div>
  );
};

export default About;
