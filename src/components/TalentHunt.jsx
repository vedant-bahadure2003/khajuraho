import { useIntersectionObserver } from "../hooks";

const TalentHunt = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: "₹",
      title: "Prize Pool",
      value: "5L",
      description: "Support & promotion for winners",
    },
    {
      icon: "🎭",
      title: "Performance Slots",
      value: "100+",
      description: "Support & promotion for winners",
    },
  ];

  const features = [
    {
      icon: "⭐",
      title: "Share the Stage with Celebrities",
      description:
        "Selected finalists may perform alongside invited headline artists on curated festival slots.",
    },
    {
      icon: "🎉",
      title: "Wildcard Entry Available",
      description:
        "Judges may award wildcard passes to exceptional performances — extra chance to reach final stages.",
    },
  ];

  const selectionSteps = [
    {
      step: 1,
      title: "Online Registration & Video Submission",
      description:
        "Upload mp4 (max 5 min) — tell your story, showcase technique & emotion.",
      color: "bg-orange-500",
    },
    {
      step: 2,
      title: "Screening by Expert Jury",
      description:
        "Our jury evaluates technique, expression and overall presentation to shortlist candidates for live rounds.",
      color: "bg-purple-500",
    },
    {
      step: 3,
      title: "Shortlisted Candidates",
      subtitle: "Live Auditions & Wildcard Decisions",
      description:
        "Top shortlisted perform live; judges may award wildcard entries to exceptional acts.",
      color: "bg-green-500",
    },
    {
      step: 4,
      title: "Final Live Performance",
      description:
        "Finalists perform on festival stages; select slots are at UNESCO heritage venue (permits applied).",
      color: "bg-red-500",
    },
  ];

  return (
    <section
      id="talent-hunt"
      ref={elementRef}
      className={`relative py-20  overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-indigo/10 to-dark-bg"
          : "bg-gradient-to-b from-offwhite via-indigo/5 to-offwhite"
      }`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl ${
            isDark ? "bg-saffron/10" : "bg-saffron/5"
          }`}
        />
        <div
          className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl ${
            isDark ? "bg-neon-indigo/10" : "bg-indigo/5"
          }`}
        />
      </div>

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
              isDark ? "bg-saffron/20 text-saffron" : "bg-indigo/10 text-indigo"
            }`}
          >
            Open for Registration
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Register For <span className="gradient-text">Talent Hunt</span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? "bg-saffron" : "bg-indigo"
            }`}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Info */}
          <div
            className={`transition-all duration-700 delay-100 ${
              hasIntersected
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Main Tagline */}
            <h3
              className={`font-heading text-2xl md:text-3xl lg:text-4xl font-bold italic mb-6 leading-tight ${
                isDark ? "text-offwhite" : "text-charcoal"
              }`}
            >
              This is your chance to shine on India's biggest dance platform
            </h3>

            <p
              className={`text-lg mb-8 leading-relaxed ${
                isDark ? "text-offwhite/70" : "text-charcoal/70"
              }`}
            >
              Upload your performance video and stand a chance to be selected
              for the live stage round at the festival. We celebrate tradition,
              innovation and young talent — join us
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:border-saffron/30"
                      : "bg-white border-gray-200 hover:border-indigo/30 shadow-sm"
                  }`}
                >
                  <p
                    className={`text-xs uppercase tracking-wider mb-2 ${
                      isDark ? "text-offwhite/60" : "text-charcoal/60"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`font-heading text-3xl md:text-4xl font-bold ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    <span className="text-saffron">{item.icon}</span>
                    {item.value}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      isDark ? "text-offwhite/50" : "text-charcoal/50"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:border-saffron/30"
                      : "bg-white border-gray-200 hover:border-indigo/30 shadow-sm"
                  }`}
                >
                  <h4
                    className={`font-semibold mb-2 flex items-center gap-2 ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    <span>{feature.icon}</span>
                    {feature.title}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-offwhite/60" : "text-charcoal/60"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#register"
              className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? "bg-gradient-to-r from-saffron to-sandstone text-white hover:shadow-lg hover:shadow-saffron/30"
                  : "bg-gradient-to-r from-indigo to-neon-indigo text-white hover:shadow-lg hover:shadow-indigo/30"
              }`}
            >
              Register For Talent Hunt
              <svg
                className="w-5 h-5 ml-2"
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

          {/* Right Column - Selection Process */}
          <div
            className={`transition-all duration-700 delay-200 ${
              hasIntersected
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className={`p-6 md:p-8 rounded-2xl border ${
                isDark
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200 shadow-xl"
              }`}
            >
              {/* Selection Process Header */}
              <h4
                className={`text-center font-heading text-xl md:text-2xl font-bold uppercase tracking-wider mb-8 ${
                  isDark ? "text-offwhite" : "text-charcoal"
                }`}
              >
                Selection Process
              </h4>

              {/* Steps */}
              <div className="space-y-6">
                {selectionSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Step Number */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${step.color}`}
                    >
                      {step.step}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <h5
                        className={`font-semibold mb-1 ${
                          isDark ? "text-offwhite" : "text-charcoal"
                        }`}
                      >
                        {step.title}
                      </h5>
                      {step.subtitle && (
                        <p
                          className={`text-sm font-medium mb-1 ${
                            isDark ? "text-saffron" : "text-indigo"
                          }`}
                        >
                          {step.subtitle}
                        </p>
                      )}
                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-offwhite/60" : "text-charcoal/60"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div
                className={`mt-8 p-4 rounded-xl ${
                  isDark ? "bg-white/5" : "bg-gray-50"
                }`}
              >
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-offwhite/70" : "text-charcoal/70"
                  }`}
                >
                  <span className="font-semibold">Note:</span> Heritage-stage
                  slots are very limited and subject to conservation rules. See
                  rules for permitted props, timing and rehearsals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentHunt;
