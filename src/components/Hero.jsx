import { useState, useEffect, useMemo } from "react";
import { useScrollParallax } from "../hooks";

const Hero = ({ isDark, festivalData, reducedMotion }) => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const { offset, elementRef } = useScrollParallax(0.3, 8);

  const taglines = useMemo(
    () =>
      festivalData?.taglines || [
        "A RICH TRADITION OF INDIA WITH YOUTH OF INDIA 2026",
        "Where Temples Meet Rhythm",
        "Classical Dance Under Temple Lights",
        "A Week of India's Living Traditions",
      ],
    [festivalData?.taglines]
  );

  // Typewriter effect
  useEffect(() => {
    if (reducedMotion) {
      setDisplayText(taglines[currentTagline]);
      return;
    }

    const currentText = taglines[currentTagline];
    let charIndex = 0;
    setDisplayText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        setTimeout(() => {
          setCurrentTagline((prev) => (prev + 1) % taglines.length);
        }, 3000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentTagline, taglines, reducedMotion]);

  // Generate floating petals
  const petals = useMemo(() => {
    if (reducedMotion) return [];
    const seededRandom = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${seededRandom(i * 1.5) * 100}%`,
      delay: `${seededRandom(i * 2.3) * 10}s`,
      duration: `${15 + seededRandom(i * 3.7) * 10}s`,
      size: 8 + seededRandom(i * 4.1) * 12,
      opacity: 0.3 + seededRandom(i * 5.2) * 0.3,
    }));
  }, [reducedMotion]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={elementRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden   "
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          transform: reducedMotion ? "none" : `translateY(${offset}px)`,
        }}
      >
        <img
          src="https://theunstumbled.com/wp-content/uploads/2025/02/khajuraho-dance-festival.jpg"
          alt="Khajuraho Dance Festival backdrop with illuminated temples"
          className="w-full h-full object-cover scale-105 "
          loading="eager"
        />

        {/* Gradient Overlays */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isDark
              ? "bg-gradient-to-br from-dark-bg/90 via-indigo/70 to-dark-bg/80"
              : "bg-gradient-to-br from-sandstone/60 via-indigo/50 to-charcoal/70"
          }`}
        />

        {/* Temple Glow Effect */}
        <div className="absolute inset-0 temple-glow" />
      </div>

      {/* Floating Marigold Petals */}
      {!reducedMotion && (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {petals.map((petal) => (
            <div
              key={petal.id}
              className="absolute animate-petal"
              style={{
                left: petal.left,
                top: "-20px",
                animationDelay: petal.delay,
                animationDuration: petal.duration,
              }}
            >
              <svg
                width={petal.size}
                height={petal.size}
                viewBox="0 0 20 20"
                style={{ opacity: petal.opacity }}
              >
                <ellipse
                  cx="10"
                  cy="10"
                  rx="8"
                  ry="5"
                  fill="#E78A00"
                  transform="rotate(45 10 10)"
                />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-64  items-center min-h-screen lg:min-h-0 pt-20 lg:pt-0">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            {/* Pre-title Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass animate-float">
              <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
              <span
                className={`text-sm font-medium ${
                  isDark ? "text-offwhite" : "text-offwhite"
                }`}
              >
                Feb 20-26, 2025
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight flex flex-col gap-2 ">
              <span className="text-offwhite glow-text">Khajuraho </span>
              <span className="text-offwhite glow-text">Natraj</span>{" "}
              <span className="gradient-text">Mahotsav 2026</span>
            </h1>

            {/* Rotating Tagline */}
            <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start">
              <p
                className={`text-lg md:text-xl lg:text-2xl font-light ${
                  isDark ? "text-offwhite/90" : "text-offwhite/90"
                }`}
              >
                {displayText}
                <span
                  className={`inline-block w-0.5 h-6 ml-1 bg-saffron ${
                    isTyping ? "animate-pulse" : "opacity-0"
                  }`}
                />
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-offwhite/80">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm md:text-base">
                Western Group of Temples, Khajuraho, MP
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#register"
                onClick={(e) => scrollToSection(e, "#register")}
                className="btn-ripple group relative px-6 py-3 bg-gradient-to-r from-saffron to-sandstone text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-saffron/40"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Reserve Your Seat
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sandstone to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#schedule"
                onClick={(e) => scrollToSection(e, "#schedule")}
                className={`group px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "border-offwhite/30 text-offwhite hover:border-saffron hover:text-saffron hover:bg-saffron/10"
                    : "border-offwhite/50 text-offwhite hover:border-offwhite hover:bg-offwhite/10"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  View Schedule
                  <svg
                    className="w-5 h-5 group-hover:translate-y-1 transition-transform"
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
              </a>
            </div>
          </div>

          {/* Right Content - Info Card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className={`glass rounded-3xl p-6  max-w-md w-full transform transition-all duration-500 hover:scale-[1.02] ${
                isDark ? "glow-gold" : "shadow-2xl"
              }`}
            >
              <h3
                className={`font-heading text-xl md:text-2xl font-bold mb-6 ${
                  isDark ? "text-offwhite" : "text-offwhite"
                }`}
              >
                Quick Facts
              </h3>

              <div className="space-y-4">
                {/* Organizer */}
                <div className="flex items-start gap-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-indigo/30">
                    <svg
                      className="w-6 h-6 text-neon-indigo"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-offwhite/60 text-sm">Organized by</p>
                    <p className="text-offwhite font-semibold">
                      MP Tourism & Culture
                    </p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-sandstone/30">
                    <svg
                      className="w-6 h-6 text-sandstone"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 21h18M9 21V9l3-3 3 3v12M9 21h6M5 21V7l7-4 7 4v14"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-offwhite/60 text-sm">Venue</p>
                    <p className="text-offwhite font-semibold">
                      UNESCO Heritage Site
                    </p>
                    <p className="text-offwhite/70 text-sm">
                      Western Group of Temples
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-start gap-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="p-2 rounded-lg bg-saffron/20">
                    <svg
                      className="w-6 h-6 text-saffron"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-offwhite/60 text-sm">Duration</p>
                    <p className="text-offwhite font-semibold">
                      7 Days of Celebration
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-center text-offwhite/60 text-sm">
                  Since 1975 • 50th Anniversary Edition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, "#about")}
          className="flex flex-col items-center gap-2 text-offwhite/60 hover:text-saffron transition-colors"
          aria-label="Scroll to learn more"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-20 left-4 md:left-8 w-20 h-20 border-l-2 border-t-2 border-saffron/30 rounded-tl-3xl" />
      <div className="absolute bottom-8 right-4 md:right-8 w-20 h-20 border-r-2 border-b-2 border-saffron/30 rounded-br-3xl" />
    </section>
  );
};

export default Hero;
