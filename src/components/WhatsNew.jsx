import { useIntersectionObserver } from "../hooks";

const WhatsNew = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const heroFeature = {
    image:
      "https://www.swantour.com/blogs/wp-content/uploads/2018/03/Khajuraho-Temples.jpg",
    badge: "HISTORIC FIRST — UNESCO",
    title:
      "First Time in History — Dance Competition at a UNESCO World Heritage Site",
    description:
      "Selected finalists will get the rare opportunity to perform at a UNESCO heritage monument. This is a highly curated, conservation-sensitive program — apply now for a chance to be shortlisted.",
    highlights: [
      "Video shortlisting → auditions → final heritage slots (limited)",
      "Practice & rehearsal support provided for finalists",
    ],
    cta: "Apply Now",
  };

  const featureCards = [
    {
      id: 1,
      image:
        "https://img.theweek.in/content/dam/week/news/entertainment/images/2023/2/19/khajuraho-dance-fest.jpg",
      badge: "UNESCO • Heritage",
      title: "Open Call for Performers (NEW — 2025)",
      description:
        "Not only invited artists — any eligible dancer or group can apply.",
    },
    {
      id: 2,
      image:
        "https://cdn.bollywoodbubble.com/wp-content/uploads/2022/06/Nora-Fatehis-IIFA-2022-performance.jpg",
      badge: "Celebrity • Community",
      title: "Celebrity + Community Performance Format",
      description:
        "The festival now blends curated celebrity showcases with community and emerging-artist performances.",
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/74/Shinjini_kathak_dance_indian_classical_khajuraho_festival.jpg",
      badge: "Age Categories",
      title: "New Age-Based Dance Categories",
      description:
        "To ensure inclusivity, 2025 introduces dedicated age groups for all participants.",
    },
    {
      id: 4,
      image:
        "https://imagedelivery.net/y9EHf1toWJTBqJVsQzJU4g/www.indianholiday.com/2025/06/Khajuraho-Dance-Festival-pics-2.jpg/w=600,h=450",
      badge: "Styles • Tracks",
      title: "Expanded Dance Style Tracks Representing Indian Culture",
      description:
        "Classical, Folk & Tribal Dance, Fusion & Innovation, Spiritual & Heritage.",
    },
    {
      id: 5,
      image: "https://www.agniban.com/wp-content/uploads/2021/12/khaju.jpg",
      badge: "Styles • Tracks",
      title: "New Cultural Awards & Recognition Programs",
      description:
        "'Ideal for promoting Indian culture. heritagé, and storytelling",
    },
    {
      id: 6,
      image: "https://i.ytimg.com/vi/KJA2Q_WSWBI/sddefault.jpg",
      badge: "Styles • Tracks",
      title: "Full Digital Broadcast & Media Expansion",
      description:
        "Artist interviews, backstage reels, sponsor-branded segments",
    },
  ];

  return (
    <section
      id="whats-new"
      ref={elementRef}
      className={`relative py-20 overflow-hidden theme-transition ${
        isDark ? "bg-dark-bg" : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            What's <span className="gradient-text">New</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-saffron to-indigo mx-auto mb-6 rounded-full" />

          <p
            className={`max-w-2xl mx-auto text-lg font-medium ${
              isDark ? "text-offwhite/80" : "text-charcoal/80"
            }`}
          >
            Where heritage meets the future of dance — curated prestige, open
            opportunities, and a celebration of India's cultural dance legacy.
          </p>
        </div>

        {/* Hero Feature Card */}
        <div
          className={`mb-10 transition-all duration-700 delay-100 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`relative rounded-3xl overflow-hidden ${
              isDark ? "bg-white/5" : "bg-white shadow-xl"
            }`}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/3 h-48 md:h-auto relative  ">
                <img
                  src={heroFeature.image}
                  alt="UNESCO Heritage Site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-6 flex flex-col justify-center relative">
                {/* Badge */}
                <span
                  className={`inline-block self-start px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 ${
                    isDark
                      ? "bg-saffron/20 text-saffron border border-saffron/30"
                      : "bg-amber-100 text-amber-700 border border-amber-200"
                  }`}
                >
                  {heroFeature.badge}
                </span>

                <h3
                  className={`font-heading text-xl md:text-2xl font-bold mb-3 ${
                    isDark ? "text-offwhite" : "text-charcoal"
                  }`}
                >
                  {heroFeature.title}
                </h3>

                <p
                  className={`text-sm md:text-base mb-4 leading-relaxed ${
                    isDark ? "text-offwhite/70" : "text-charcoal/70"
                  }`}
                >
                  {heroFeature.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {heroFeature.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-2 text-sm ${
                        isDark ? "text-offwhite/60" : "text-charcoal/60"
                      }`}
                    >
                      <span className="text-saffron">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#registration"
                  className="inline-flex self-start items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-saffron to-orange-500 text-white font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-saffron/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {heroFeature.cta}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {featureCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative h-56 md:h-64 rounded-2xl overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              {/* Number Badge */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{card.id}</span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                  {card.badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2 group-hover:text-saffron transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                  {card.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-saffron/50 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-400 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
              isDark ? "bg-white/5 border border-white/10" : "bg-gray-100"
            }`}
          >
            <span
              className={`text-sm ${
                isDark ? "text-offwhite/70" : "text-charcoal/70"
              }`}
            >
              February 20-26, 2025 • Free Entry • Khajuraho, MP
            </span>
            <a
              href="#visit"
              className="flex items-center gap-1 text-sm font-semibold text-saffron hover:text-orange-500 transition-colors"
            >
              Plan Visit
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-neon-indigo/20" : "bg-saffron/10"
        }`}
      />
    </section>
  );
};

export default WhatsNew;
