import { useIntersectionObserver } from "../hooks";
import { useRef, useState, useEffect } from "react";

const Judges = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const judges = [
    {
      name: "Dr. Sonal Mansingh",
      title: "Padma Vibhushan Awardee",
      danceForm: "Bharatanatyam & Odissi",
      image:
        "https://www.borderlens.com/wp-content/uploads/2025/06/Sonal-Mansingh-1024x698.webp",
      bio: "A legendary Indian classical dancer and Guru, Dr. Sonal Mansingh is a recipient of Padma Vibhushan (2003) and Padma Bhushan (1992). She founded the Centre for Indian Classical Dances in New Delhi and has performed worldwide for over 6 decades.",
      achievements: [
        "Padma Vibhushan 2003",
        "Padma Bhushan 1992",
        "Sangeet Natak Akademi Award",
        "Member of Parliament",
      ],
      experience: "60+ years",
    },
    {
      name: "Pt. Rajendra Gangani",
      title: "Jaipur Gharana Maestro",
      danceForm: "Kathak",
      image:
        "https://rajendragangani.in/wp-content/uploads/2024/08/292281404_460829006047355_5948714699407751712_n.jpg",
      bio: "A prominent Kathak dancer from the Jaipur Gharana, known for powerful footwork and rhythmic excellence. Founder of Nadam Institute of Kathak and Performing Arts.",
      achievements: [
        "Sangeet Natak Akademi Award",
        "National Film Award",
        "MP Govt. Kalidas Samman",
      ],
      experience: "40+ years",
    },
    {
      name: "Dr. Padma Subrahmanyam",
      title: "Padma Vibhushan Awardee",
      danceForm: "Bharatanatyam",
      image:
        "https://i0.wp.com/pragnabharati.in/wp-content/uploads/2023/03/padmasubramanian.jpg?fit=760%2C760&ssl=1",
      bio: "A renowned Bharatanatyam dancer, research scholar, and choreographer. Dr. Padma Subrahmanyam reconstructed the 108 karanas from the Natyashastra and founded Bharata Nrithyam dance form.",
      achievements: [
        "Padma Vibhushan 2024",
        "Padma Bhushan 2003",
        "Fukuoka Asian Culture Prize",
        "Sangeet Natak Akademi Award",
      ],
      experience: "65+ years",
    },
    {
      name: "Shovana Narayan",
      title: "Padma Shri Awardee",
      danceForm: "Kathak",
      image:
        "https://www.indianspeakerbureau.com/img/shovana-narayanjpg_1573634727.jpg",
      bio: "A distinguished Kathak exponent trained under legendary Birju Maharaj. She discovered ancient Kathak villages near Gaya and produced the acclaimed documentary 'Dance of the Temples' on Khajuraho.",
      achievements: [
        "Padma Shri 1992",
        "Sangeet Natak Akademi Award",
        "OISCA Award Japan",
        "Commonwealth Games Ceremonies Director",
      ],
      experience: "50+ years",
    },
    {
      name: "Dr. Raja Reddy",
      title: "Padma Bhushan Awardee",
      danceForm: "Kuchipudi",
      image:
        "https://rich.telangana.gov.in/assets/inner-img/Dr-Raj-Reddy-02.png",
      bio: "One half of the legendary Raja and Radha Reddy duo, pioneers who brought Kuchipudi to the global stage. Known for innovative choreography while preserving traditional roots.",
      achievements: [
        "Padma Bhushan",
        "Sangeet Natak Akademi Fellowship",
        "Central Sangeet Natak Akademi Award",
      ],
      experience: "55+ years",
    },
    {
      name: "Guru Madhavi Mudgal",
      title: "Sangeet Natak Akademi Awardee",
      danceForm: "Odissi",
      image:
        "https://assets.mysticamusic.com/images/artist-photos/madhavi-mudgal.jpg",
      bio: "A leading Odissi exponent trained under Guru Kelucharan Mohapatra. She is the director of Gandharva Mahavidyalaya, Delhi and has performed at major international festivals.",
      achievements: [
        "Sangeet Natak Akademi Award",
        "Padma Shri",
        "Delhi Ratna",
      ],
      experience: "45+ years",
    },
  ];

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollButtons);
      return () => carousel.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="judges"
      ref={elementRef}
      className={`relative py-20  overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-indigo/5 to-dark-bg"
          : "bg-gradient-to-b from-offwhite via-white to-offwhite"
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            isDark ? "bg-saffron/5" : "bg-indigo/5"
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
            isDark ? "bg-indigo/5" : "bg-saffron/5"
          }`}
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
            Distinguished Panel
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Meet Our <span className="gradient-text">Esteemed Judges</span>
          </h2>
          <p
            className={`max-w-3xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Legends of Indian classical dance who have dedicated their lives to
            preserving and promoting our rich cultural heritage
          </p>
        </div>

        {/* Carousel Navigation */}
        <div
          className={`flex justify-end gap-3 mb-6 transition-all duration-700 delay-100 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full transition-all duration-300 ${
              canScrollLeft
                ? isDark
                  ? "bg-saffron/20 text-saffron hover:bg-saffron/30"
                  : "bg-indigo/10 text-indigo hover:bg-indigo/20"
                : isDark
                ? "bg-white/5 text-white/30 cursor-not-allowed"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
            aria-label="Scroll left"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-3 rounded-full transition-all duration-300 ${
              canScrollRight
                ? isDark
                  ? "bg-saffron/20 text-saffron hover:bg-saffron/30"
                  : "bg-indigo/10 text-indigo hover:bg-indigo/20"
                : isDark
                ? "bg-white/5 text-white/30 cursor-not-allowed"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
            aria-label="Scroll right"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={carouselRef}
          className={`flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory hide-scrollbar transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {judges.map((judge, index) => (
            <JudgeCard
              key={index}
              judge={judge}
              isDark={isDark}
              index={index}
            />
          ))}
        </div>

        {/* Scroll Indicator for Mobile */}
        <div
          className={`flex justify-center mt-6 md:hidden ${
            hasIntersected ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`flex items-center gap-2 text-sm ${
              isDark ? "text-offwhite/50" : "text-charcoal/50"
            }`}
          >
            <svg
              className="w-5 h-5 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span>Swipe to explore</span>
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

const JudgeCard = ({ judge, isDark }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-[320px] md:w-[380px] snap-center"
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative h-[520px] transition-transform duration-700 cursor-pointer`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of Card */}
        <div
          className={`absolute inset-0 rounded-3xl overflow-hidden ${
            isDark
              ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/10"
              : "bg-white shadow-xl"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Image Section */}
          <div className="relative h-[55%] overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={judge.image}
                alt={judge.name}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-br from-saffron/30 to-indigo/30"
                    : "bg-gradient-to-br from-indigo/20 to-saffron/20"
                }`}
              />

              {/* Placeholder shown when image fails to load (emoji) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className={`text-8xl opacity-20 ${
                    isDark ? "text-saffron" : "text-indigo"
                  }`}
                ></div>
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Dance Form Badge */}
            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
                  isDark
                    ? "bg-saffron/80 text-white"
                    : "bg-white/90 text-indigo"
                }`}
              >
                {judge.danceForm}
              </span>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
                  isDark ? "bg-indigo/80 text-white" : "bg-indigo text-white"
                }`}
              >
                {judge.experience}
              </span>
            </div>

            {/* Flip Hint */}
            <div className="absolute bottom-4 right-4">
              <div
                className={`p-2 rounded-full backdrop-blur-md ${
                  isDark ? "bg-white/20" : "bg-black/20"
                }`}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 h-[45%] flex flex-col justify-between">
            <div>
              <h3
                className={`font-heading text-xl font-bold mb-1 ${
                  isDark ? "text-offwhite" : "text-charcoal"
                }`}
              >
                {judge.name}
              </h3>
              <p
                className={`text-sm font-medium mb-3 ${
                  isDark ? "text-saffron" : "text-indigo"
                }`}
              >
                {judge.title}
              </p>
              <p
                className={`text-sm line-clamp-3 ${
                  isDark ? "text-offwhite/70" : "text-charcoal/70"
                }`}
              >
                {judge.bio}
              </p>
            </div>

            {/* Tap to flip indicator */}
            <div
              className={`flex items-center gap-2 text-xs ${
                isDark ? "text-offwhite/50" : "text-charcoal/50"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span>Tap to see achievements</span>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className={`absolute inset-0 rounded-3xl overflow-hidden p-6 ${
            isDark
              ? "bg-gradient-to-br from-saffron/20 to-indigo/20 border border-white/10"
              : "bg-gradient-to-br from-indigo/10 to-saffron/10 shadow-xl"
          }`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <h3
                className={`font-heading text-xl font-bold mb-1 ${
                  isDark ? "text-offwhite" : "text-charcoal"
                }`}
              >
                {judge.name}
              </h3>
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-saffron" : "text-indigo"
                }`}
              >
                {judge.danceForm}
              </p>
            </div>

            {/* Achievements */}
            <div className="flex-1">
              <h4
                className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                  isDark ? "text-offwhite/60" : "text-charcoal/60"
                }`}
              >
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {judge.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 ${
                      isDark ? "text-offwhite/80" : "text-charcoal/80"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                        isDark ? "bg-saffron/30" : "bg-indigo/20"
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 ${
                          isDark ? "text-saffron" : "text-indigo"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div
              className={`flex items-center gap-2 text-xs mt-4 pt-4 border-t ${
                isDark
                  ? "border-white/10 text-offwhite/50"
                  : "border-charcoal/10 text-charcoal/50"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Tap to flip back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;
