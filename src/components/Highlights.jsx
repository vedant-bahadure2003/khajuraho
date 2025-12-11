import { useState, useEffect } from "react";
import { useIntersectionObserver } from "../hooks";

const Highlights = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const highlights = [
    {
      id: 1,
      category: "Classical",
      categoryIcon: "🎭",
      categoryColor: "from-saffron to-orange-500",
      accentColor: "saffron",
      title: "Classical Solo — Grace & Tradition",
      subtitle: "Spotlight Performances",
      description:
        "Intimate, emotive solo recitals showcasing the precise vocabulary of Indian classical styles — expressive abhinaya, intricate footwork and timeless storytelling.",
      image:
        "https://imgs.search.brave.com/X5SvdZWPl_oKH27x9No5qcHW5TTP7_FmCBWFlKSJeBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhlcXVpbnQu/Y29tL3RoZXF1aW50/LzIwMTgtMDQvOTg1/ODZiZTgtNjRhMy00/ZDY3LTkzYjgtZWY1/MWZlOTQ1YjY4L0to/YWp1cmFob19kYW5j/ZV8xLmpwZz9hdXRv/PWZvcm1hdCxjb21w/cmVzcyZmbXQ9d2Vi/cCZ3aWR0aD03MjAm/dz0xMjAw",
      features: [
        { icon: "⭐", text: "Young Talent Hunt" },
        { icon: "🔥", text: "Dance Fusion Acts" },
        { icon: "🏛️", text: "Traditional Performances" },
        { icon: "✨", text: "Celebrity Performances" },
      ],
      stats: { value: "100+", label: "Performers" },
      buttons: [
        { text: "Explore", variant: "primary", link: "#explore" },
        { text: "Register Now", variant: "accent", link: "#talent-hunt" },
      ],
    },
    {
      id: 2,
      category: "Heritage",
      categoryIcon: "🏛️",
      categoryColor: "from-amber-500 to-yellow-600",
      accentColor: "sandstone",
      title: "Explore Khajuraho — Heritage & Architecture",
      subtitle: "UNESCO World Heritage",
      description:
        "Discover the UNESCO World Heritage temples of Khajuraho, known for their sculptural detail and historical significance spanning over 1000 years.",
      image:
        "https://imgs.search.brave.com/45NG6TsrteCztqNq-Za0H_j55VnYmuyHkoiHc7kdMX4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmxhbWluZ290cmF2/ZWxzLmNvLmluL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDQvS2hhanVy/YWhvLVRlbXBsZXMt/MTAyNHg1MTIuanBn",
      features: [
        { icon: "🚶", text: "Heritage Walks" },
        { icon: "💡", text: "Light & Sound Show" },
        { icon: "🛕", text: "Temple Tours" },
        { icon: "🎨", text: "Local Art & Craft" },
      ],
      stats: { value: "25", label: "Historic Temples" },
      buttons: [
        { text: "Explore Heritage", variant: "primary", link: "#about" },
      ],
    },
    {
      id: 3,
      category: "Celebrities",
      categoryIcon: "🌟",
      categoryColor: "from-purple-500 to-pink-500",
      accentColor: "indigo",
      title: "Celebrity Performances — Star-Studded Nights",
      subtitle: "Exclusive Showcases",
      description:
        "Enjoy star performances across music, dance and theater — curated nights that draw large audiences and media attention from across the nation.",
      image:
        "https://imgs.search.brave.com/9uzwZnuMmx2j_-t8cTBbebPkZyFru9w-MReHT4-7HLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91dHNh/di5nb3YuaW4vcHVi/bGljL3VwbG9hZHMv/ZXZlbnRfY292ZXJf/aW1hZ2UvZXZlbnRf/NTMvMTY0OTIzMTE1/MzE3NTMyNDM3OTku/amZpZg",
      features: [
        { icon: "🎬", text: "Bollywood & Classical Stars" },
        { icon: "🎤", text: "Special Guest Appearances" },
        { icon: "🎊", text: "Grand Opening & Closing" },
        { icon: "📺", text: "Media Coverage" },
      ],
      stats: { value: "50+", label: "Celebrity Artists" },
      buttons: [{ text: "View Artists", variant: "primary", link: "#artists" }],
    },
    {
      id: 4,
      category: "Water Adventures",
      categoryIcon: "🌊",
      categoryColor: "from-cyan-500 to-blue-500",
      accentColor: "indigo",
      title: "Water Bodies & Water Adventures",
      subtitle: "Aquatic Experiences",
      description:
        "From serene boat rides to adrenaline-pumping water sports — find the perfect water experience close to Khajuraho's natural beauty.",
      image:
        "https://imgs.search.brave.com/3oIYFNm2IWSTTq-E8TVMW-pevm0sfpWqb5NCHdlwdvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXB0b3VyaXNtLmNv/bS93ZWIvaW1hZ2Uv/Y2F0YWxvZy9tb25z/b29uL1JhbmVoJTIw/ZmFsbHMsJTIwbmVh/ciUyMEtoYWp1cmFo/by5qcGc",
      features: [
        { icon: "🚤", text: "Boat Rides & Cruises" },
        { icon: "💧", text: "Waterfall Treks" },
        { icon: "🛶", text: "Kayaking & River Sports" },
        { icon: "📸", text: "Photography Spots" },
      ],
      stats: { value: "10+", label: "Water Activities" },
      buttons: [
        { text: "Explore Adventures", variant: "primary", link: "#explore" },
      ],
    },
    {
      id: 5,
      category: "Wildlife",
      categoryIcon: "🐅",
      categoryColor: "from-green-500 to-emerald-600",
      accentColor: "saffron",
      title: "Panna National Park — Tigers & Safaris",
      subtitle: "Wildlife Encounters",
      description:
        "Embark on safaris to spot tigers, leopards and diverse wildlife — guided trails offering unforgettable encounters just 25km away.",
      image:
        "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1664&auto=format&fit=crop",
      features: [
        { icon: "🐯", text: "Tiger Safaris" },
        { icon: "🌿", text: "Nature Trails" },
        { icon: "🦅", text: "Bird Watching" },
        { icon: "🎓", text: "Conservation Talks" },
      ],
      stats: { value: "200+", label: "Wildlife Species" },
      buttons: [{ text: "Book Safari", variant: "primary", link: "#explore" }],
    },
    {
      id: 6,
      category: "Adventure Park",
      categoryIcon: "🎢",
      categoryColor: "from-red-500 to-orange-500",
      accentColor: "saffron",
      title: "Adventure Park — Thrill & Fun",
      subtitle: "Action-Packed Activities",
      description:
        "Zipline, rope courses, ATV rides and rock-climbing — action-packed activities perfect for families and thrill-seekers of all ages.",
      image:
        "https://i0.wp.com/keepyoureyespeeled.net/wp-content/uploads/2025/11/India-Day-Twelve-4-of-27.jpg?fit=1000%2C667&ssl=1",
      features: [
        { icon: "🪂", text: "Zipline & Rope Course" },
        { icon: "🧗", text: "Climbing & Obstacles" },
        { icon: "🏍️", text: "ATV & Biking" },
        { icon: "👨‍👩‍👧‍👦", text: "Family Packages" },
      ],
      stats: { value: "15+", label: "Adventure Activities" },
      buttons: [
        { text: "Explore Park", variant: "primary", link: "#adventure-park" },
      ],
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, highlights.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % highlights.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + highlights.length) % highlights.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const currentHighlight = highlights[activeSlide];

  return (
    <section
      id="highlights"
      ref={elementRef}
      className={`relative py-20  overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-indigo/5 to-dark-bg"
          : "bg-gradient-to-b from-gray-100 via-white to-gray-100"
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
            isDark ? "bg-saffron/10" : "bg-indigo/5"
          }`}
        />
        <div
          className={`absolute bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
            isDark ? "bg-indigo/10" : "bg-saffron/5"
          }`}
        />
        {/* Animated gradient orb */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 transition-all duration-1000`}
          style={{
            background: `radial-gradient(circle, ${
              isDark ? "rgba(200,155,103,0.3)" : "rgba(43,42,123,0.2)"
            } 0%, transparent 70%)`,
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
            Curated Experiences
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Festival <span className="gradient-text">Highlights</span>
          </h2>
          <p
            className={`max-w-3xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Discover the best of Khajuraho — music, dance, wildlife & adventure.
            Explore curated experiences across heritage, performances, and
            thrilling activities.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {highlights.map((highlight, index) => (
            <button
              key={highlight.id}
              onClick={() => goToSlide(index)}
              className={`group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                index === activeSlide
                  ? isDark
                    ? "bg-saffron text-dark-bg scale-105"
                    : "bg-indigo text-white scale-105"
                  : isDark
                  ? "bg-white/5 text-offwhite/70 hover:bg-white/10 hover:text-offwhite border border-white/10"
                  : "bg-white text-charcoal/70 hover:bg-indigo/5 hover:text-charcoal shadow-md"
              }`}
            >
              <span className="text-base">{highlight.categoryIcon}</span>
              <span className="hidden sm:inline">{highlight.category}</span>
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div
          className={`transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`relative rounded-3xl overflow-hidden ${
              isDark
                ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
                : "bg-white shadow-2xl"
            }`}
          >
            <div className="grid lg:grid-cols-2 min-h-[550px]">
              {/* Image Section */}
              <div className="relative h-[300px] md:h-[400px] lg:h-auto lg:min-h-[550px] overflow-hidden">
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentHighlight.categoryColor} opacity-20`}
                />

                {/* Main Image */}
                <img
                  key={currentHighlight.id}
                  src={currentHighlight.image}
                  alt={currentHighlight.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 animate-fadeIn"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.opacity = "0.5";
                  }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/30" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${currentHighlight.categoryColor} shadow-lg`}
                  >
                    <span>{currentHighlight.categoryIcon}</span>
                    {currentHighlight.category}
                  </span>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`text-center px-4 py-2 rounded-2xl backdrop-blur-md ${
                      isDark ? "bg-white/10" : "bg-black/30"
                    }`}
                  >
                    <div className="font-heading text-2xl font-bold text-white">
                      {currentHighlight.stats.value}
                    </div>
                    <div className="text-xs text-white/80">
                      {currentHighlight.stats.label}
                    </div>
                  </div>
                </div>

                {/* Title on Image (Mobile) */}
                <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {currentHighlight.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {currentHighlight.subtitle}
                  </p>
                </div>

                {/* Navigation Arrows on Image */}
                <div className="absolute bottom-6 right-6 flex gap-2 lg:hidden">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center lg:min-h-[550px]">
                {/* Subtitle Tag */}
                <span
                  className={`inline-block self-start px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 ${
                    isDark
                      ? "bg-saffron/20 text-saffron border border-saffron/30"
                      : "bg-indigo/10 text-indigo border border-indigo/20"
                  }`}
                >
                  {currentHighlight.subtitle}
                </span>

                {/* Title */}
                <h3
                  className={`hidden lg:block font-heading text-2xl md:text-3xl font-bold mb-4 min-h-[40px] ${
                    isDark ? "text-offwhite" : "text-charcoal"
                  }`}
                >
                  {currentHighlight.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-base leading-relaxed mb-6 min-h-[72px] ${
                    isDark ? "text-offwhite/70" : "text-charcoal/70"
                  }`}
                >
                  {currentHighlight.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8 min-h-[140px]">
                  {currentHighlight.features.map((feature, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                        hoveredFeature === index
                          ? isDark
                            ? "bg-saffron/20 scale-105"
                            : "bg-indigo/10 scale-105"
                          : isDark
                          ? "bg-white/5 hover:bg-white/10"
                          : "bg-gray-50 hover:bg-indigo/5"
                      }`}
                    >
                      <span
                        className={`text-xl transition-transform duration-300 ${
                          hoveredFeature === index ? "scale-125" : ""
                        }`}
                      >
                        {feature.icon}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          isDark ? "text-offwhite/80" : "text-charcoal/80"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {currentHighlight.buttons.map((button, index) => (
                    <a
                      key={index}
                      href={button.link}
                      className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 ${
                        button.variant === "primary"
                          ? isDark
                            ? "bg-saffron text-dark-bg hover:bg-saffron/90"
                            : "bg-indigo text-white hover:bg-indigo/90"
                          : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600"
                      }`}
                    >
                      {button.text}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  ))}
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className={`p-3 rounded-full transition-all duration-300 ${
                        isDark
                          ? "bg-white/5 text-offwhite hover:bg-saffron/20 hover:text-saffron"
                          : "bg-gray-100 text-charcoal hover:bg-indigo/10 hover:text-indigo"
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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className={`p-3 rounded-full transition-all duration-300 ${
                        isDark
                          ? "bg-white/5 text-offwhite hover:bg-saffron/20 hover:text-saffron"
                          : "bg-gray-100 text-charcoal hover:bg-indigo/10 hover:text-indigo"
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Progress Dots */}
                  <div className="flex gap-2">
                    {highlights.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeSlide
                            ? isDark
                              ? "w-8 bg-saffron"
                              : "w-8 bg-indigo"
                            : isDark
                            ? "w-2 bg-white/30 hover:bg-white/50"
                            : "w-2 bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Slide Counter */}
                  <div
                    className={`text-sm font-medium ${
                      isDark ? "text-offwhite/50" : "text-charcoal/50"
                    }`}
                  >
                    <span className={isDark ? "text-saffron" : "text-indigo"}>
                      {String(activeSlide + 1).padStart(2, "0")}
                    </span>
                    <span className="mx-1">/</span>
                    <span>{String(highlights.length).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Progress Dots */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? isDark
                    ? "w-6 bg-saffron"
                    : "w-6 bg-indigo"
                  : isDark
                  ? "w-2 bg-white/30"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Highlights;
