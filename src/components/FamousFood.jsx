import { useState, useRef } from "react";
import { useIntersectionObserver } from "../hooks";

const FamousFood = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredFood, setHoveredFood] = useState(null);
  const scrollRef = useRef(null);
  const streetScrollRef = useRef(null);

  const categories = [
    { id: "all", label: "All Delights", icon: "" },
    { id: "north", label: "North India", icon: "" },
    { id: "south", label: "South India", icon: "" },
    { id: "street", label: "Street Food", icon: "" },
    { id: "sweets", label: "Sweets", icon: "" },
  ];

  const streetFoods = [
    {
      id: 1,
      name: "Pani Puri",
      region: "Mumbai",
      description:
        "Crispy hollow puris filled with spiced water, tamarind chutney, and potato - an explosion of flavors!",
      image:
        "https://www.awesomecuisine.com/wp-content/uploads/2007/11/Pani-Puri.jpg",
    },
    {
      id: 2,
      name: "Momos",
      region: "Delhi/North East",
      description:
        "Steamed dumplings filled with minced meat or vegetables, served with spicy chutneys - a favorite across Northern India and the Northeast.",
      image:
        "https://www.natashamohan.com/wp-content/uploads/2025/01/Weight-Loss-Momos-Recipe-scaled.webp",
    },

    {
      id: 3,
      name: "Vada Pav",
      region: "Mumbai",
      description:
        "Mumbai's iconic spiced potato fritter in a soft bun - the Indian burger that rules the streets.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13plhMyXs0rAVGvaQIlsMtPhhHL5p6pQqnw&s",
    },
    {
      id: 4,
      name: "Pav Bhaji",
      region: "Mumbai",
      description:
        "Mashed vegetable curry served with buttery toasted buns - Mumbai's beloved street food invention.",
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Bhel Puri",
      region: "Mumbai",
      description:
        "Puffed rice mixed with tangy chutneys, onions, and sev - a refreshing savory snack.",
      image:
        "https://foodtrails25.com/wp-content/uploads/2021/05/Bhel-Poori.jpg",
    },
    {
      id: 6,
      name: "Aloo Tikki",
      region: "Delhi",
      description:
        "Crispy spiced potato patties topped with chutneys and yogurt - North India's street favorite.",
      image:
        "https://www.indianveggiedelight.com/wp-content/uploads/2023/07/aloo-tikki-featured.jpg",
    },
    {
      id: 7,
      name: "Kachori",
      region: "Rajasthan",
      description:
        "Deep-fried flaky pastry stuffed with spiced lentils or onions - Rajasthan's morning delight.",
      image:
        "https://c.ndtvimg.com/2018-09/8k5jalao_kchori_625x300_12_September_18.jpg",
    },
    {
      id: 8,
      name: "Samosa",
      region: "Pan India",
      description:
        "Crispy triangular pastry filled with spiced potatoes and peas - India's most loved snack.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Dahi Vada",
      region: "Pan India",
      description:
        "Soft lentil dumplings soaked in creamy yogurt with sweet and tangy chutneys.",
      image: "https://static.toiimg.com/photo/55432577.cms",
    },
  ];

  const famousFoods = [
    {
      id: 1,
      name: "Butter Chicken",
      region: "Delhi",
      category: "north",
      description:
        "Creamy tomato-based curry with tender tandoor-cooked chicken, invented in Delhi's Moti Mahal restaurant in the 1950s.",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
      spiceLevel: 2,
      isVeg: false,
    },
    {
      id: 2,
      name: "Hyderabadi Biryani",
      region: "Hyderabad",
      category: "south",
      description:
        "Aromatic dum-cooked basmati rice with saffron, exotic spices, and tender meat - a Mughal legacy.",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
      spiceLevel: 3,
      isVeg: false,
    },
    {
      id: 3,
      name: "Masala Dosa",
      region: "Karnataka",
      category: "south",
      description:
        "Crispy fermented rice crepe filled with spiced potato, served with coconut chutney and sambar.",
      rating: 4.4,
      image:
        "https://imgs.search.brave.com/SwixqVPefYDKv3jn70-Xxr7b_z0YiikeSN7E1FdVHi8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzYzLzcyLzIw/LzM2MF9GXzE1NjM3/MjIwNDVfRUxXWFo2/MVVGVTVYWlhZY2xv/b1p3ckFxd0N3Wkpn/NUYuanBn",
      spiceLevel: 2,
      isVeg: true,
    },
    {
      id: 4,
      name: "Chole Bhature",
      region: "Punjab",
      category: "north",
      description:
        "Spicy chickpea curry with fluffy deep-fried bread - the ultimate Punjabi breakfast experience.",
      rating: 4.4,
      image:
        "https://imgs.search.brave.com/ftUuoqOrBdHEZppTgjo276Tppr8k6dXLIAsvRnddMPM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTUv/OTMzLzAzNC9zbWFs/bC9jaG9sZS1iaGF0/dXJlLWlzLWEtbm9y/dGgtaW5kaWFuLWZv/b2QtZGlzaC1hLWNv/bWJpbmF0aW9uLW9m/LWNoYW5hLW1hc2Fs/YS1hbmQtYmhhdHVy/YS1vci1wdXJpLWZy/ZWUtcGhvdG8uanBn",
      spiceLevel: 3,
      isVeg: true,
    },

    {
      id: 5,
      name: "Tandoori Chicken",
      region: "Punjab",
      category: "north",
      description:
        "Yogurt-marinated chicken roasted in a clay tandoor oven, with signature smoky flavor and char.",
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
      spiceLevel: 2,
      isVeg: false,
    },
    {
      id: 6,
      name: "Gulab Jamun",
      region: "Pan India",
      category: "sweets",
      description:
        "Golden fried milk dumplings soaked in rose-cardamom sugar syrup - pure indulgence.",
      rating: 4.6,
      image:
        "https://imgs.search.brave.com/_gmDSBOtTvYLvwDCc4JcdQLTq5_jpcNGSFNC9fXe-ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2LzU4LzAwLzE0/LzM2MF9GXzE2NTgw/MDE0NzhfSmJnWHlz/VDZPS0lueEdBRFBO/d2kxdXRKSkNzUHJC/Q2ouanBn",
      spiceLevel: 0,
      isVeg: true,
    },

    {
      id: 7,
      name: "Rasmalai",
      region: "Bengal",
      category: "sweets",
      description:
        "Soft cottage cheese patties in saffron-cardamom milk - Bengal's gift to dessert lovers.",
      rating: 4.5,
      image:
        "https://static.toiimg.com/thumb/68358712.cms?imgsize=403497&width=800&height=800",
      spiceLevel: 0,
      isVeg: true,
    },
    {
      id: 8,
      name: "Dal Makhani",
      region: "Punjab",
      category: "north",
      description:
        "Slow-cooked black lentils in creamy tomato gravy, simmered overnight for rich flavor.",
      rating: 4.4,
      image:
        "https://thesassyfoodie.com/wp-content/uploads/2022/02/punjabi-dal-makhani-featured-1.jpg",
      spiceLevel: 1,
      isVeg: true,
    },
    {
      id: 9,
      name: "Idli Sambar",
      region: "Tamil Nadu",
      category: "south",
      description:
        "Steamed rice cakes served with lentil soup and coconut chutney - South India's healthy breakfast.",
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",
      spiceLevel: 1,
      isVeg: true,
    },
  ];

  const filteredFoods =
    activeCategory === "all"
      ? famousFoods
      : famousFoods.filter((food) => food.category === activeCategory);

  const SpiceIndicator = ({ level }) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className={`text-xs ${i < level ? "opacity-100" : "opacity-30"}`}
          >
            🌶️
          </span>
        ))}
      </div>
    );
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollStreet = (direction) => {
    if (streetScrollRef.current) {
      const scrollAmount = 320;
      streetScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="food"
      ref={elementRef}
      className={`relative py-20  overflow-hidden theme-transition ${
        isDark ? "bg-dark-bg" : "bg-offwhite"
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
            isDark ? "bg-saffron/5" : "bg-saffron/10"
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
            isDark ? "bg-indigo/5" : "bg-indigo/10"
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
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              isDark ? "bg-saffron/20 text-saffron" : "bg-indigo/10 text-indigo"
            }`}
          >
            <span className="text-lg">🍽️</span>
            Culinary Heritage
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Flavors of <span className="gradient-text">India</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Embark on a gastronomic journey through India's diverse culinary
            landscape, where every dish tells a story of tradition and taste.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? isDark
                    ? "bg-saffron text-dark-bg shadow-lg shadow-saffron/25"
                    : "bg-indigo text-white shadow-lg shadow-indigo/25"
                  : isDark
                  ? "bg-white/5 text-offwhite/70 hover:bg-white/10 hover:text-offwhite"
                  : "bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10 hover:text-charcoal"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Food Cards Container with Navigation */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 -ml-4 ${
              isDark
                ? "bg-dark-bg/90 text-saffron border border-saffron/30 hover:bg-saffron hover:text-dark-bg"
                : "bg-offwhite/90 text-indigo border border-indigo/30 hover:bg-indigo hover:text-white"
            } shadow-lg backdrop-blur-sm`}
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
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 -mr-4 ${
              isDark
                ? "bg-dark-bg/90 text-saffron border border-saffron/30 hover:bg-saffron hover:text-dark-bg"
                : "bg-offwhite/90 text-indigo border border-indigo/30 hover:bg-indigo hover:text-white"
            } shadow-lg backdrop-blur-sm`}
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

          {/* Scrollable Food Cards */}
          <div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto pb-4 px-2 scrollbar-hide scroll-smooth transition-all duration-700 delay-300  ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filteredFoods.map((food, index) => (
              <div
                key={food.id}
                className={`flex-shrink-0 w-72 md:w-80  group cursor-pointer transition-all duration-500`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredFood(food.id)}
                onMouseLeave={() => setHoveredFood(null)}
              >
                <div
                  className={`relative h-full min-h-[28rem] rounded-2xl overflow-hidden transition-all duration-500 ${
                    isDark
                      ? "bg-white/5 border border-white/10 hover:border-saffron/50"
                      : "bg-white border border-charcoal/10 hover:border-indigo/50"
                  } ${
                    hoveredFood === food.id
                      ? "transform -translate-y-2 shadow-2xl"
                      : "shadow-lg"
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={food.image}
                      alt={food.name}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredFood === food.id ? "scale-110" : "scale-100"
                      }`}
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isDark
                          ? "from-dark-bg/90 via-dark-bg/40 to-transparent"
                          : "from-charcoal/80 via-charcoal/30 to-transparent"
                      }`}
                    />

                    {/* Veg/Non-Veg Badge */}
                    <div
                      className={`absolute top-3 left-3 w-6 h-6 rounded flex items-center justify-center ${
                        food.isVeg ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          food.isVeg ? "bg-green-200" : "bg-red-200"
                        }`}
                      />
                    </div>

                    {/* Rating Badge */}
                    <div
                      className={`absolute top-3 right-3 px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium ${
                        isDark
                          ? "bg-saffron/90 text-dark-bg"
                          : "bg-gold text-charcoal"
                      }`}
                    >
                      <span>⭐</span>
                      {food.rating}
                    </div>

                    {/* Region Tag - Bottom of image */}
                    <div className="absolute bottom-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                          isDark
                            ? "bg-white/20 text-white"
                            : "bg-white/80 text-charcoal"
                        }`}
                      >
                        📍 {food.region}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`text-lg font-bold ${
                          isDark ? "text-offwhite" : "text-charcoal"
                        }`}
                      >
                        {food.name}
                      </h3>
                      <SpiceIndicator level={food.spiceLevel} />
                    </div>

                    <p
                      className={`text-sm leading-relaxed line-clamp-3 ${
                        isDark ? "text-offwhite/60" : "text-charcoal/60"
                      }`}
                    >
                      {food.description}
                    </p>

                    {/* Hover Action */}
                    {/* <div
                      className={`mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      <span
                        className={`text-xs ${
                          isDark ? "text-saffron" : "text-indigo"
                        }`}
                      >
                        Tap to explore recipe →
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Street Food Section */}
        <div
          className={`mt-16 transition-all duration-700 delay-400 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Street Food Header */}
          <div className="text-center mb-8">
            <span
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
                isDark
                  ? "bg-orange-500/20 text-orange-400"
                  : "bg-orange-100 text-orange-600"
              }`}
            >
              Street Food Special
            </span>
            <h3
              className={`font-heading text-2xl md:text-3xl font-bold ${
                isDark ? "text-offwhite" : "text-charcoal"
              }`}
            >
              Indian <span className="gradient-text">Street Food</span>
            </h3>
          </div>

          {/* Street Food Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scrollStreet("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 -ml-4 ${
                isDark
                  ? "bg-dark-bg/90 text-orange-400 border border-orange-400/30 hover:bg-orange-400 hover:text-dark-bg"
                  : "bg-offwhite/90 text-orange-600 border border-orange-600/30 hover:bg-orange-600 hover:text-white"
              } shadow-lg backdrop-blur-sm`}
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
              onClick={() => scrollStreet("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 -mr-4 ${
                isDark
                  ? "bg-dark-bg/90 text-orange-400 border border-orange-400/30 hover:bg-orange-400 hover:text-dark-bg"
                  : "bg-offwhite/90 text-orange-600 border border-orange-600/30 hover:bg-orange-600 hover:text-white"
              } shadow-lg backdrop-blur-sm`}
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

            {/* Scrollable Street Food Cards */}
            <div
              ref={streetScrollRef}
              className="flex gap-6 overflow-x-auto pb-4 px-2 scrollbar-hide scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {streetFoods.map((food, index) => (
                <div
                  key={food.id}
                  className="flex-shrink-0 w-72 md:w-80 group cursor-pointer transition-all duration-500"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className={`relative h-64 rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl shadow-lg`}
                  >
                    {/* Image */}
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent`}
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      {/* Region Tag */}
                      <span
                        className={`self-start px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                          isDark
                            ? "bg-orange-400/20 text-orange-300"
                            : "bg-white/20 text-white"
                        } backdrop-blur-sm`}
                      >
                        📍 {food.region}
                      </span>

                      {/* Name */}
                      <h4 className="text-xl font-bold text-white mb-2">
                        {food.name}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-white/80 line-clamp-2 leading-relaxed">
                        {food.description}
                      </p>
                    </div>

                    {/* Hover Border Effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isDark ? "border-orange-400/50" : "border-orange-500/50"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
              isDark ? "bg-white/5 border border-white/10" : "bg-charcoal/5"
            }`}
          >
            <span className="text-2xl">🍴</span>
            <p
              className={`text-sm ${
                isDark ? "text-offwhite/70" : "text-charcoal/70"
              }`}
            >
              Experience authentic flavors at the{" "}
              <span
                className={`font-semibold ${
                  isDark ? "text-saffron" : "text-indigo"
                }`}
              >
                Khajuraho Dance Festival
              </span>{" "}
              food stalls
            </p>
            <span className="text-2xl">🍴</span>
          </div>
        </div>
      </div>

      {/* Custom scrollbar hide style */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FamousFood;
