import { useState, useRef, useEffect } from "react";
import { useIntersectionObserver } from "../hooks";

const Explore = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);
  const modalRef = useRef(null);

  const categories = [
    { id: "all", label: "All", icon: "✦" },
    { id: "heritage", label: "Heritage", icon: "🏛️" },
    { id: "wildlife", label: "Wildlife", icon: "🐅" },
    { id: "adventure", label: "Adventure", icon: "🏔️" },
    { id: "culture", label: "Culture", icon: "🎭" },
  ];

  const exploreData = [
    {
      id: 1,
      category: "heritage",
      title: "Khajuraho Temples",
      subtitle: "UNESCO World Heritage Site",
      description:
        "Marvel at the magnificent 1000-year-old Chandela temples featuring intricate sculptures and stunning Nagara-style architecture. The Western Group houses the iconic Kandariya Mahadeva Temple with over 870 sculptures.",
      image:
        "https://imgs.search.brave.com/45NG6TsrteCztqNq-Za0H_j55VnYmuyHkoiHc7kdMX4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmxhbWluZ290cmF2/ZWxzLmNvLmluL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDQvS2hhanVy/YWhvLVRlbXBsZXMt/MTAyNHg1MTIuanBn",
      duration: "2-3 hours",
      bestTime: "Sunrise & Sunset",
      highlights: ["Western Group", "Eastern Group", "Sound & Light Show"],
      tags: ["UNESCO", "Architecture", "Photography"],
    },
    {
      id: 2,
      category: "heritage",
      title: "Heritage Walk",
      subtitle: "Ancient Temple Trail",
      description:
        "Take a guided stroll through the temple clusters and local lanes, discovering hidden shrines, ancient inscriptions, and local craft stalls offering traditional Chandela-era art reproductions.",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1740&auto=format&fit=crop",
      duration: "1-2 hours",
      bestTime: "Morning",
      highlights: ["Local Guides", "Craft Stalls", "Hidden Gems"],
      tags: ["Walking", "Guided", "Local Culture"],
    },
    {
      id: 3,
      category: "culture",
      title: "Evening Shows",
      subtitle: "Temple-lit Performances",
      description:
        "Experience mesmerizing cultural evenings with classical dance performances and the spectacular Sound & Light Show at the Western Group of Temples, bringing ancient stories to life under starlit skies.",
      image:
        "https://static.toiimg.com/photo/msid-62691072,width-96,height-65.cms",
      duration: "1-2 hours",
      bestTime: "Evening (6-9 PM)",
      highlights: ["Classical Dance", "Sound & Light", "Night Photography"],
      tags: ["Night", "Live Music", "Cultural"],
    },
    {
      id: 4,
      category: "wildlife",
      title: "Panna National Park",
      subtitle: "Tiger Territory",
      description:
        "Just 25 km from Khajuraho, Panna is home to Bengal tigers, leopards, sloth bears, and over 200 bird species. The park's dramatic Ken River gorge creates a stunning backdrop for wildlife safaris.",
      image:
        "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1664&auto=format&fit=crop",
      duration: "Half Day",
      bestTime: "Oct-June (6 AM / 3 PM)",
      highlights: ["Tiger Safari", "Bird Watching", "Ken River"],
      tags: ["Safari", "Tigers", "Nature"],
    },
    {
      id: 5,
      category: "adventure",
      title: "Raneh Falls",
      subtitle: "Canyon of Colors",
      description:
        "Witness the spectacular volcanic rock formations and cascading waterfalls at Raneh Falls. The crystalline granite canyon displays vibrant shades of pink, red, and grey, creating a photographer's paradise.",
      image:
        "https://imgs.search.brave.com/3oIYFNm2IWSTTq-E8TVMW-pevm0sfpWqb5NCHdlwdvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXB0b3VyaXNtLmNv/bS93ZWIvaW1hZ2Uv/Y2F0YWxvZy9tb25z/b29uL1JhbmVoJTIw/ZmFsbHMsJTIwbmVh/ciUyMEtoYWp1cmFo/by5qcGc",
      duration: "2-3 hours",
      bestTime: "Monsoon & Post-Monsoon",
      highlights: ["Canyon Views", "Rock Formations", "Sunset Point"],
      tags: ["Waterfall", "Geology", "Photography"],
    },
    {
      id: 6,
      category: "adventure",
      title: "Ken River",
      subtitle: "Riverside Adventure",
      description:
        "Explore the serene Ken River with boat rides, fishing spots, and riverside picnics. The river is also home to the Ken Gharial Sanctuary, protecting the rare gharial crocodile species.",
      image:
        "https://imgs.search.brave.com/nCyMylVS6l__QUFmKGjFlDFbPqMEg1DGP41X8qP1MJ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYW5k/cnAuaW4vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDYvZGVl/cC13YXRlci1wb29s/LWF0LWdlaHJpZ2hh/dC1pbi1yaXZlci1r/ZW4uanBnP3c9NjYz/Jmg9NDk3",
      duration: "3-4 hours",
      bestTime: "Winter",
      highlights: ["Boating", "Gharial Sanctuary", "Picnic Spots"],
      tags: ["River", "Boating", "Wildlife"],
    },
    {
      id: 7,
      category: "wildlife",
      title: "Bird Watching",
      subtitle: "Avian Paradise",
      description:
        "Khajuraho and surrounding areas host over 300 bird species including Indian Vultures, Paradise Flycatchers, and rare migratory birds. The temple gardens and Panna forests offer excellent birding opportunities.",
      image:
        "https://images.unsplash.com/photo-1480044965905-02098d419e96?q=80&w=1740&auto=format&fit=crop",
      duration: "2-4 hours",
      bestTime: "Early Morning",
      highlights: ["Temple Gardens", "Panna Forest", "Migratory Birds"],
      tags: ["Birds", "Nature", "Photography"],
    },
    {
      id: 8,
      category: "culture",
      title: "Local Crafts",
      subtitle: "Artisan Heritage",
      description:
        "Discover traditional stone carving, metalwork, and textile crafts passed down through generations. Visit local workshops to see artisans creating beautiful replicas of temple sculptures and traditional handicrafts.",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1738&auto=format&fit=crop",
      duration: "1-2 hours",
      bestTime: "Anytime",
      highlights: ["Stone Carving", "Metal Work", "Textiles"],
      tags: ["Shopping", "Crafts", "Local"],
    },
    {
      id: 9,
      category: "adventure",
      title: "Pandav Falls",
      subtitle: "Mythical Cascade",
      description:
        "Hidden within Panna National Park, these 30-meter falls are named after the Pandava brothers from Mahabharata. The pristine pool at the base is perfect for a refreshing dip during the summer months.",
      image:
        "https://imgs.search.brave.com/M9dhQRgNQpWcMbPN4I-Aq1ksdOaHEA_76PGhpHopg-Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9wYW5kYXYtZmFs/bHMta2hhanVyYWhv/LW1hZGh5YS1wcmFk/ZXNoLTMtYXR0ci1o/ZXJvP3FsdD04MiZ0/cz0xNzI3MzU1NDM4/MjIy",
      duration: "Half Day",
      bestTime: "Monsoon",
      highlights: ["Waterfall", "Swimming", "Trekking"],
      tags: ["Waterfall", "Mythology", "Adventure"],
    },
  ];

  const filteredData =
    activeCategory === "all"
      ? exploreData
      : exploreData.filter((item) => item.category === activeCategory);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedCard(null);
      }
    };

    if (selectedCard) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [selectedCard]);

  const getCategoryColor = (category) => {
    const colors = {
      heritage: "bg-gradient-to-r from-amber-500 to-orange-500",
      wildlife: "bg-gradient-to-r from-emerald-500 to-teal-500",
      adventure: "bg-gradient-to-r from-rose-500 to-pink-500",
      culture: "bg-gradient-to-r from-violet-500 to-purple-500",
    };
    return colors[category] || "bg-gradient-to-r from-saffron to-sandstone";
  };

  const getCategoryBadgeColor = (category) => {
    const colors = {
      heritage: "text-amber-500 bg-amber-500/10",
      wildlife: "text-emerald-500 bg-emerald-500/10",
      adventure: "text-rose-500 bg-rose-500/10",
      culture: "text-violet-500 bg-violet-500/10",
    };
    return colors[category] || "text-saffron bg-saffron/10";
  };

  return (
    <section
      id="explore"
      ref={elementRef}
      className={`relative py-20  overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-indigo/5 to-dark-bg"
          : "bg-gradient-to-b from-offwhite via-sandstone/10 to-offwhite"
      }`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-indigo" : "bg-saffron"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDark ? "bg-saffron" : "bg-indigo"
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
            Explore Khajuraho
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Temples • Heritage • Wildlife •{" "}
            <span className="gradient-text">Adventure</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            A visual guide with the top spots — quick highlights and short notes
            for each place. Tap any image to enlarge.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? isDark
                    ? "bg-saffron text-dark-bg shadow-lg shadow-saffron/25"
                    : "bg-indigo text-offwhite shadow-lg shadow-indigo/25"
                  : isDark
                  ? "bg-white/5 text-offwhite/70 hover:bg-white/10 border border-white/10"
                  : "bg-white text-charcoal/70 hover:bg-charcoal/5 border border-charcoal/10"
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Cards Grid - Horizontal scroll on mobile, grid on larger screens */}
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8 sm:overflow-visible sm:pb-0">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer transition-all duration-700 flex-shrink-0 w-[85vw] sm:w-auto snap-center ${
                hasIntersected
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
              }}
              onClick={() => setSelectedCard(item)}
            >
              <div
                className={`relative h-full rounded-2xl overflow-hidden ${
                  isDark
                    ? "bg-white/5 border border-white/10"
                    : "bg-white shadow-xl"
                } transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
              >
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                      item.category
                    )} text-white shadow-lg`}
                  >
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isDark
                        ? "from-dark-bg/90 via-dark-bg/30"
                        : "from-charcoal/80 via-charcoal/20"
                    } to-transparent`}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className={`font-heading text-xl font-bold mb-1 ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryBadgeColor(
                        item.category
                      )}`}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed line-clamp-2 mb-4 ${
                      isDark ? "text-offwhite/70" : "text-charcoal/70"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          isDark
                            ? "bg-white/5 text-offwhite/60"
                            : "bg-charcoal/5 text-charcoal/60"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            ref={modalRef}
            className={`relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl ${
              isDark ? "bg-dark-bg" : "bg-white"
            } shadow-2xl`}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCard(null)}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-black/10 hover:bg-black/20 text-charcoal"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative h-72 md:h-96">
              <img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  isDark ? "from-dark-bg" : "from-white"
                } via-transparent to-transparent`}
              />
              <div className="absolute bottom-6 left-6">
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${getCategoryColor(
                    selectedCard.category
                  )} text-white shadow-lg mb-3`}
                >
                  {selectedCard.category.charAt(0).toUpperCase() +
                    selectedCard.category.slice(1)}
                </span>
                <h3
                  className={`font-heading text-3xl md:text-4xl font-bold ${
                    isDark ? "text-offwhite" : "text-charcoal"
                  }`}
                >
                  {selectedCard.title}
                </h3>
                <div className="mt-1">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryBadgeColor(
                      selectedCard.category
                    )}`}
                  >
                    {selectedCard.subtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <p
                className={`text-lg leading-relaxed mb-8 ${
                  isDark ? "text-offwhite/80" : "text-charcoal/80"
                }`}
              >
                {selectedCard.description}
              </p>

              {/* Info Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div
                  className={`p-4 rounded-xl ${
                    isDark ? "bg-white/5" : "bg-charcoal/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isDark ? "bg-saffron/20" : "bg-indigo/10"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 ${
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className={`text-xs ${
                          isDark ? "text-offwhite/50" : "text-charcoal/50"
                        }`}
                      >
                        Duration
                      </p>
                      <p
                        className={`font-semibold ${
                          isDark ? "text-offwhite" : "text-charcoal"
                        }`}
                      >
                        {selectedCard.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-4 rounded-xl ${
                    isDark ? "bg-white/5" : "bg-charcoal/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isDark ? "bg-saffron/20" : "bg-indigo/10"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 ${
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
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className={`text-xs ${
                          isDark ? "text-offwhite/50" : "text-charcoal/50"
                        }`}
                      >
                        Best Time
                      </p>
                      <p
                        className={`font-semibold ${
                          isDark ? "text-offwhite" : "text-charcoal"
                        }`}
                      >
                        {selectedCard.bestTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4
                  className={`font-heading text-lg font-bold mb-4 ${
                    isDark ? "text-offwhite" : "text-charcoal"
                  }`}
                >
                  Highlights
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedCard.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                        isDark
                          ? "bg-saffron/10 text-saffron"
                          : "bg-indigo/10 text-indigo"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedCard.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-full text-sm ${
                      isDark
                        ? "bg-white/5 text-offwhite/60"
                        : "bg-charcoal/5 text-charcoal/60"
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Explore;
