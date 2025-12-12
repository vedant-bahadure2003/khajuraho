import { useIntersectionObserver } from "../hooks";
import { useState, useEffect, useCallback } from "react";

const MPKnownFaces = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const personalities = [
    {
      name: "Dr. Mohan Yadav",
      designation: "19th Chief Minister of Madhya Pradesh",
      image:
        "https://yt3.googleusercontent.com/aKiHqPR3jyumLJHEUnWVLSDpxfv8C28n59azfCXTWGvbUZWsQ05akLxz_nKvTWDE5NyfRguWGA=s900-c-k-c0x00ffffff-no-rj",
      bio: "Dr. Mohan Yadav (born 25 March 1965, Ujjain) is an Indian politician serving as the 19th Chief Minister of Madhya Pradesh since December 2023. He holds degrees including B.Sc., LLB, M.A., MBA, and Ph.D. from Vikram University and previously served as MP's Minister of Education.",
      message:
        "Madhya Pradesh is the heart of India, not just geographically, but culturally and spiritually. Our festivals like the Khajuraho Dance Festival showcase the timeless beauty of Indian classical arts and bring the world to witness the grandeur of our heritage. I invite everyone to experience the magic of Madhya Pradesh.",
    },

    {
      name: "Kailash Satyarthi",
      designation: "Nobel Peace Prize Laureate (2014)",
      image:
        "https://satyarthi.org.in/wp-content/uploads/2021/07/Kailash-Satyarthi-926x1024.jpeg",
      bio: "Kailash Satyarthi (born 11 January 1954, Vidisha) is a children's rights activist who won the Nobel Peace Prize in 2014 for his struggle against child labor and child trafficking. He founded Bachpan Bachao Andolan and has rescued over 80,000 children from exploitation worldwide.",
      message:
        "Every child deserves a childhood. Our state has a rich cultural heritage, and it is our duty to ensure that every child gets the opportunity to learn, grow, and contribute to preserving this legacy.",
    },

    {
      name: "Jyotiraditya Scindia",
      designation: "Union Minister of Communications & Development of NER",
      image:
        "https://c.ndtvimg.com/2023-10/gesr2s5g_jyotiraditya-scindia_625x300_07_October_23.jpg",
      bio: "Jyotiraditya Scindia (born 1 January 1971) is a politician from the royal Scindia family of Gwalior. A Harvard and Stanford graduate, he serves as Union Minister of Communications and Development of North Eastern Region. He is the grandson of Jiwajirao Scindia, the last ruler of Gwalior princely state.",
      message:
        "Madhya Pradesh's heritage is unparalleled. From the temples of Khajuraho to the forts of Gwalior, our state is a treasure trove of history and culture. The Khajuraho Dance Festival is a celebration of this legacy — where art meets spirituality.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % personalities.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, personalities.length]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + personalities.length) % personalities.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, personalities.length]);

  const goToSlide = useCallback(
    (index) => {
      if (isAnimating || index === currentIndex) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, currentIndex]
  );

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext, isPaused]);

  const personality = personalities[currentIndex];

  return (
    <section
      id="mp-known-faces"
      ref={elementRef}
      className={`relative py-20 overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-saffron/5 to-dark-bg"
          : "bg-gradient-to-b from-offwhite via-indigo/10 to-offwhite"
      }`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-3xl ${
            isDark ? "bg-saffron/8" : "bg-saffron/10"
          }`}
        />
        <div
          className={`absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full blur-3xl ${
            isDark ? "bg-indigo/10" : "bg-indigo/5"
          }`}
        />
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, ${
                isDark ? "#C89B67" : "#2B2A7B"
              } 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
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
            Voices of Madhya Pradesh
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            MP's <span className="gradient-text">Known Faces</span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              isDark ? "bg-saffron" : "bg-indigo"
            }`}
          />
        </div>

        {/* Main Content */}
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
                ? "bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10"
                : "bg-white shadow-2xl shadow-indigo/10"
            }`}
          >
            {/* Glassmorphism overlay for dark mode */}
            {isDark && (
              <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-saffron/5 via-transparent to-indigo/5" />
            )}

            <div className="relative grid lg:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="lg:col-span-2 relative">
                <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden">
                  <img
                    key={personality.image}
                    src={personality.image}
                    alt={personality.name}
                    className={`w-full h-full object-cover object-top transition-all duration-500 ${
                      isAnimating
                        ? "opacity-0 scale-105"
                        : "opacity-100 scale-100"
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 ${
                      isDark
                        ? "bg-gradient-to-r from-transparent via-transparent to-dark-bg/90 lg:bg-gradient-to-r"
                        : "bg-gradient-to-r from-transparent via-transparent to-white/70 lg:bg-gradient-to-r"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 lg:hidden ${
                      isDark
                        ? "bg-gradient-to-b from-transparent via-transparent to-dark-bg"
                        : "bg-gradient-to-b from-transparent via-transparent to-white"
                    }`}
                  />
                  {/* Name Badge - Mobile */}
                  <div className="absolute bottom-4 left-4 lg:hidden">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md ${
                        isDark
                          ? "bg-saffron/90 text-white"
                          : "bg-indigo/90 text-white"
                      }`}
                    >
                      {personality.designation.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center relative">
                {/* Decorative Quote Icon */}
                <div
                  className={`absolute top-6 right-8 text-8xl font-serif leading-none opacity-10 ${
                    isDark ? "text-saffron" : "text-indigo"
                  }`}
                >
                  "
                </div>

                {/* Name and Designation */}
                <div
                  className={`mb-6 transition-all duration-500 ${
                    isAnimating
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <h3
                    className={`font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    {personality.name}
                  </h3>
                  <p
                    className={`text-base md:text-lg font-medium ${
                      isDark ? "text-saffron" : "text-indigo"
                    }`}
                  >
                    {personality.designation}
                  </p>
                </div>

                {/* Bio */}
                <p
                  className={`text-sm md:text-base leading-relaxed mb-8 transition-all duration-500 delay-75 ${
                    isAnimating
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  } ${isDark ? "text-offwhite/70" : "text-charcoal/70"}`}
                >
                  {personality.bio}
                </p>

                {/* Message Card - Speech Bubble Style */}
                <div
                  className={`relative transition-all duration-500 delay-150 ${
                    isAnimating
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {/* Speech Bubble Pointer */}
                  <div
                    className={`absolute -top-3 left-8 w-6 h-6 rotate-45 ${
                      isDark
                        ? "bg-gradient-to-br from-saffron/20 to-indigo/20 border-l border-t border-saffron/30"
                        : "bg-gradient-to-br from-indigo/10 to-saffron/10 border-l border-t border-indigo/20"
                    }`}
                  />

                  <div
                    className={`relative p-6 md:p-8 rounded-2xl ${
                      isDark
                        ? "bg-gradient-to-br from-saffron/15 via-saffron/10 to-indigo/10 border border-saffron/20 backdrop-blur-sm"
                        : "bg-gradient-to-br from-indigo/5 via-saffron/5 to-indigo/5 border border-indigo/10"
                    }`}
                  >
                    {/* Quote Mark */}
                    <div
                      className={`absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                        isDark ? "bg-saffron/20" : "bg-indigo/10"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 ${
                          isDark ? "text-saffron" : "text-indigo"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    <p
                      className={`text-base md:text-lg leading-relaxed italic pl-10 ${
                        isDark ? "text-offwhite/90" : "text-charcoal/90"
                      }`}
                    >
                      {personality.message}
                    </p>

                    {/* Signature Style */}
                    <div className="mt-6 flex items-center justify-end gap-3">
                      <div
                        className={`h-px flex-1 max-w-[100px] ${
                          isDark ? "bg-saffron/30" : "bg-indigo/20"
                        }`}
                      />
                      <span
                        className={`text-sm font-semibold ${
                          isDark ? "text-saffron/80" : "text-indigo/80"
                        }`}
                      >
                        — {personality.name.split(" ").slice(-1)[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Previous Button */}
              <button
                onClick={goToPrev}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? "bg-white/10 hover:bg-saffron/30 text-offwhite"
                    : "bg-indigo/10 hover:bg-indigo/20 text-indigo"
                }`}
                aria-label="Previous personality"
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

              {/* Dot Indicators */}
              <div className="flex gap-2">
                {personalities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? isDark
                          ? "w-8 h-3 bg-saffron"
                          : "w-8 h-3 bg-indigo"
                        : isDark
                        ? "w-3 h-3 bg-white/30 hover:bg-white/50"
                        : "w-3 h-3 bg-indigo/30 hover:bg-indigo/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? "bg-white/10 hover:bg-saffron/30 text-offwhite"
                    : "bg-indigo/10 hover:bg-indigo/20 text-indigo"
                }`}
                aria-label="Next personality"
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

            {/* Progress Bar */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 ${
                isDark ? "bg-white/10" : "bg-indigo/10"
              }`}
            >
              <div
                className={`h-full transition-all duration-300 ${
                  isDark ? "bg-saffron" : "bg-indigo"
                }`}
                style={{
                  width: `${
                    ((currentIndex + 1) / personalities.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MPKnownFaces;
