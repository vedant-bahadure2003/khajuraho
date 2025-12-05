import { useIntersectionObserver } from "../hooks";

const About = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 21h18M9 21V9l3-3 3 3v12M9 21h6M5 21V7l7-4 7 4v14"
          />
        </svg>
      ),
      title: "UNESCO Heritage Backdrop",
      description:
        "Performances against the magnificent 1000-year-old Chandela temples, a UNESCO World Heritage Site.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "8 Classical Dance Forms",
      description:
        "Witness Bharatanatyam, Kathak, Odissi, Kuchipudi, Manipuri, Kathakali, Mohiniyattam, and Sattriya.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Family-Friendly Event",
      description:
        "A celebration for all ages with workshops, cultural stalls, and evening performances.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      title: "World-Renowned Artists",
      description:
        "Performances by Padma Shri and Sangeet Natak Akademi award-winning maestros.",
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
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23C89B67' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
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
            Since 1975
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            A Legacy of <span className="gradient-text">Living Art</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Celebrating 50 glorious years of India's premier classical dance
            festival, where ancient temples become the stage for timeless
            traditions.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Story */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              hasIntersected
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3
              className={`font-heading text-2xl md:text-3xl font-bold ${
                isDark ? "text-offwhite" : "text-charcoal"
              }`}
            >
              The Sacred Stage
            </h3>
            <div
              className={`space-y-4 text-base md:text-lg text-justify leading-relaxed ${
                isDark ? "text-offwhite/80" : "text-charcoal/80"
              }`}
            >
              <p>
                Inaugurated in 1975, the Khajuraho Dance Festival transforms the
                historic temple complex into an open-air theatre of unparalleled
                grandeur. Against the backdrop of intricately carved sandstone
                temples, India's finest classical dancers bring ancient stories
                to life.
              </p>
              <p>
                The festival coincides with the magical week of Maha Shivaratri,
                when the temples are illuminated and the air is filled with
                devotion. This unique confluence of art, spirituality, and
                heritage creates an experience unlike any other.
              </p>
              <p>
                Each year, thousands of art lovers, tourists, and cultural
                enthusiasts gather to witness this spectacular celebration of
                India's intangible cultural heritage.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "50+", label: "Years of Legacy" },
                { value: "100+", label: "Artists Annually" },
                { value: "50K+", label: "Visitors Each Year" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-xl ${
                    isDark ? "bg-white/5" : "bg-indigo/5"
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

          {/* Right - Image Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
              hasIntersected
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <div
                className={`aspect-[4/5] rounded-2xl overflow-hidden ${
                  isDark ? "glow-gold" : "shadow-xl"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1545987796-200677ee1011?w=400&h=500&fit=crop"
                  alt="Classical dance performance"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div
                className={`aspect-square rounded-2xl overflow-hidden ${
                  isDark ? "border border-gold-glow/30" : "shadow-lg"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=400&fit=crop"
                  alt="Temple architecture"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div
                className={`aspect-square rounded-2xl overflow-hidden ${
                  isDark ? "border border-gold-glow/30" : "shadow-lg"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=400&h=400&fit=crop"
                  alt="Traditional dance pose"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div
                className={`aspect-[4/5] rounded-2xl overflow-hidden ${
                  isDark ? "glow-gold" : "shadow-xl"
                }`}
              >
                <img
                  src="https://imgs.search.brave.com/X5SvdZWPl_oKH27x9No5qcHW5TTP7_FmCBWFlKSJeBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhlcXVpbnQu/Y29tL3RoZXF1aW50/LzIwMTgtMDQvOTg1/ODZiZTgtNjRhMy00/ZDY3LTkzYjgtZWY1/MWZlOTQ1YjY4L0to/YWp1cmFob19kYW5j/ZV8xLmpwZz9hdXRv/PWZvcm1hdCxjb21w/cmVzcyZmbXQ9d2Vi/cCZ3aWR0aD03MjAm/dz0xMjAw"
                  alt="Festival celebration"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${
                hasIntersected
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-saffron/30"
                  : "bg-white hover:bg-indigo/5 shadow-lg hover:shadow-xl"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div
                className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 ${
                  isDark
                    ? "bg-saffron/20 text-saffron"
                    : "bg-indigo/10 text-indigo group-hover:bg-saffron/20 group-hover:text-saffron"
                }`}
              >
                {item.icon}
              </div>
              <h4
                className={`font-heading text-lg font-bold mb-2 ${
                  isDark ? "text-offwhite" : "text-charcoal"
                }`}
              >
                {item.title}
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-offwhite/60" : "text-charcoal/60"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute top-20 right-0 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-indigo/20" : "bg-saffron/10"
        }`}
      />
      <div
        className={`absolute bottom-20 left-0 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-saffron/10" : "bg-indigo/10"
        }`}
      />
    </section>
  );
};

export default About;
