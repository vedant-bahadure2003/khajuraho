import { useIntersectionObserver } from "../hooks";

const BecomeASponsor = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  // const stats = [
  //   {
  //     title: "Projected Onsite Reach",
  //     value: "20K",
  //     description: "Festival attendees, workshops & tourist footfall",
  //   },
  //   {
  //     title: "Digital & Broadcast Reach",
  //     value: "2000K",
  //     description:
  //       "Livestream viewers, social impressions & short-form content",
  //   },
  //   {
  //     title: "Audience Profile",
  //     value: "Culture • Travel • Youth",
  //     description: "Cultural enthusiasts, arts patrons, tourists & creators",
  //   },
  // ];

  const benefits = [
    {
      title: "Unmatched Cultural Prestige",
      description:
        "Associate with a UNESCO World Heritage monument — credibility and trust that advertising cannot buy.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Live Moments that Create Content",
      description:
        "Your brand featured in viral cultural moments — dance performances, behind-the-scenes, and artist collaborations shared across platforms.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Social Impact & Legacy",
      description:
        "Support artists. heritage preservation and youth talent — and amplify your CSR story authentically.",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      title: "Create lasting cultural association — notjust impressionss",
      description:
        "Sponsoring Khajuraho places your brand in the story: preservation, performance, and a historic cultural moment that will be remembered.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="become-sponsor"
      ref={elementRef}
      className={`relative py-20  overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-indigo/5 to-dark-bg"
          : "bg-gradient-to-b from-offwhite via-white to-offwhite"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${
              isDark ? "#C89B67" : "#2B2A7B"
            } 1px, transparent 0)`,
            backgroundSize: "40px 40px",
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
            Partnership Opportunities
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Partner With a{" "}
            <span className="gradient-text">UNESCO Heritage</span> Moment
          </h2>
          <p
            className={`max-w-3xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Join a landmark cultural celebration and align your brand with
            prestige, national pride, and global visibility.
          </p>
        </div>

        {/* Hero Card */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`relative rounded-3xl overflow-hidden ${
              isDark
                ? "bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
                : "bg-white shadow-2xl"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
              {/* Left Content */}
              <div className="flex flex-col justify-center">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-saffron/20 text-saffron hover:bg-saffron/30"
                      : "bg-indigo/10 text-indigo hover:bg-indigo/20"
                  }`}
                >
                  <span>Become a Sponsor - Enquire Now</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <h3
                  className={`font-heading text-2xl md:text-3xl font-bold mb-4 ${
                    isDark ? "text-offwhite" : "text-charcoal"
                  }`}
                >
                  Be part of a once-in-a-generation cultural moment
                </h3>

                <p
                  className={`text-base md:text-lg mb-6 ${
                    isDark ? "text-offwhite/70" : "text-charcoal/70"
                  }`}
                >
                  Associate your brand with the Khajuraho Dance Festival —
                  historic, prestigious, and emotionally resonant. 2026 marks
                  the first competition on a UNESCO World Heritage site; your
                  support becomes part of that legacy.
                </p>

                <a
                  href="mailto:sponsors@khajurahofestival.com"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 w-fit ${
                    isDark
                      ? "bg-gradient-to-r from-saffron to-sandstone text-dark-bg hover:shadow-lg hover:shadow-saffron/25"
                      : "bg-gradient-to-r from-indigo to-neon-indigo text-white hover:shadow-lg hover:shadow-indigo/25"
                  }`}
                >
                  Become a Sponsor - Enquire Now
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Right Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U="
                  alt="Khajuraho Temple"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "bg-gradient-to-br",
                      "from-saffron/20",
                      "to-indigo/20"
                    );
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        {/* <div
          className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.02] ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:border-saffron/30"
                  : "bg-white shadow-lg hover:shadow-xl"
              }`}
            >
              <h4
                className={`text-sm font-medium mb-3 ${
                  isDark ? "text-offwhite/60" : "text-charcoal/60"
                }`}
              >
                {stat.title}
              </h4>
              <p
                className={`font-heading text-2xl md:text-3xl font-bold mb-2 ${
                  isDark ? "text-saffron" : "text-indigo"
                }`}
              >
                {stat.value}
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-offwhite/50" : "text-charcoal/50"
                }`}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div> */}

        {/* Benefits Section */}
        <div
          className={`mb-16 transition-all duration-700 delay-300 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className={`font-heading text-2xl md:text-3xl font-bold text-center mb-10 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Why Partner With Us?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                  isDark
                    ? "bg-white/5 border border-white/10 hover:border-saffron/30"
                    : "bg-white shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      isDark
                        ? "bg-saffron/20 text-saffron"
                        : "bg-indigo/10 text-indigo"
                    }`}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h4
                      className={`font-heading text-lg font-bold mb-2 ${
                        isDark ? "text-offwhite" : "text-charcoal"
                      }`}
                    >
                      {benefit.title}
                    </h4>
                    <div
                      className={`w-16 h-0.5 mb-3 ${
                        isDark ? "bg-saffron" : "bg-indigo"
                      }`}
                    />
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-offwhite/70" : "text-charcoal/70"
                      }`}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Tiers */}

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`inline-block rounded-2xl p-8 md:p-12 ${
              isDark
                ? "bg-gradient-to-r from-saffron/10 to-indigo/10 border border-white/10"
                : "bg-gradient-to-r from-indigo/5 to-saffron/5 shadow-lg"
            }`}
          >
            <h3
              className={`font-heading text-2xl md:text-3xl font-bold mb-4 ${
                isDark ? "text-offwhite" : "text-charcoal"
              }`}
            >
              Ready to Make History Together?
            </h3>
            <p
              className={`max-w-xl mx-auto mb-6 ${
                isDark ? "text-offwhite/70" : "text-charcoal/70"
              }`}
            >
              Let's discuss how your brand can be part of this extraordinary
              cultural celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sponsors@khajurahofestival.com"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-r from-saffron to-sandstone text-dark-bg hover:shadow-lg hover:shadow-saffron/25"
                    : "bg-gradient-to-r from-indigo to-neon-indigo text-white hover:shadow-lg hover:shadow-indigo/25"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Us
              </a>
              <a
                href="tel:+919876543210"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-white/10 text-offwhite hover:bg-white/20 border border-white/20"
                    : "bg-white text-charcoal hover:bg-gray-50 shadow-lg"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeASponsor;
