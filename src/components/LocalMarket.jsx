import { useState } from "react";
import { useIntersectionObserver } from "../hooks";

const LocalMarket = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });
  const [activeItem, setActiveItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Crafts" },
    { id: "sculptures", label: "Sculptures" },
    { id: "jewelry", label: "Jewelry" },
    { id: "textiles", label: "Textiles" },
    { id: "pottery", label: "Pottery" },
  ];

  const handicrafts = [
    {
      id: 1,
      name: "Hand-Carved Stone Sculptures",
      category: "sculptures",
      description:
        "Sandstone & marble idols, intricate temple architecture replicas. Highly valued for detailed craftsmanship and historical connection.",
      image:
        "https://imgs.search.brave.com/KkOdqOHfVcfjCjskD9cjxu3GT1kDtUmzMOgbmpwkhT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcw/OTY2NjIyL3Bob3Rv/L3N0b25lLWNhcnZp/bmdzLW9mLXZpc2hu/dS1raGFqdXJhaG8t/bWFkaHlhLXByYWRl/c2gtaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWt3/SDg2S01hamFyQnhq/MUg2ck1jSXJrTmVu/eTFid3dHa2tTMEIw/eGt0YkE9",
      features: [
        "What it is : Intricate temple architecture replicas.",
        "Best sellers : Nandi, Khajuraho-style figures.",
      ],
      priceRange: "₹500 - ₹50,000",
      origin: "Local Artisans",
      featured: true,
    },
    {
      id: 2,
      name: "Metalwork & Tribal Jewellery",
      category: "jewelry",
      description:
        "Heavy metal necklaces, simple anklets, and unique brass earrings. Known for their bold aesthetic and deep cultural history.",
      image:
        "https://imgs.search.brave.com/jF9JfemaY6QukoApePsJRvXhmWNoHX6_F1uhmjafZF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3VsdHVyYWxpbmRp/YS5uZXQvaWxpaW1h/Z2VzL0luZGlhbi1U/cmliYWwtYW5kLUV0/aG5pYy1KZXdlbHJ5/LWlsaS0yMy1pbWct/MS5qcGc",
      features: [
        "What it is : Unique aesthetic, cultural history.",
        "Best sellers : Oxidized neckpieces, Ganesha pendants.",
      ],
      priceRange: "₹200 - ₹15,000",
      origin: "Rajnagar Craftsmen",
      featured: true,
    },
    {
      id: 3,
      name: "Traditional Gond Paintings",
      category: "textiles",
      description:
        "Traditional tribal paintings featuring nature, mythology, and village life. Each piece tells a unique story through vibrant colors.",
      image:
        "https://imgs.search.brave.com/fQp16TA0-oE1pC3unBZaV_WIDjnc0RE1Szf0yotcRqo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5h/aXNzYW5jZS5hdXJv/c29jaWV0eS5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDYvZ29uZC1wYWlu/dGluZy1kdXJnYWJh/aS12eWFtLTEtZTE3/NDkxOTYzNTcyOTYu/anBn",
      features: [
        "What it is : Tribal art with mythological themes.",
        "Best sellers : Nature motifs, deity paintings.",
      ],
      priceRange: "₹1,000 - ₹25,000",
      origin: "Gond Artists",
      featured: true,
    },
    {
      id: 4,
      name: "Terracotta & Pottery",
      category: "pottery",
      description:
        "Earthenware and functional pottery, from decorative items to traditional utensils, crafted using age-old techniques.",
      image:
        "https://imgs.search.brave.com/8fmc9V6tfssiiAtT_XdqcEtBG_wMt9qFSzLClVtkVnU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzI2/OTAvMDEwNi9maWxl/cy9JbmRpYW4tcG90/dGVyeS1jcmFmdHMx/MS0xNjAweDkwMF80/ODB4NDgwLmpwZz92/PTE3MTA0MTIxOTk",
      features: [
        "What it is : Traditional earthenware items.",
        "Best sellers : Diyas, decorative pots, figurines.",
      ],
      priceRange: "₹100 - ₹5,000",
      origin: "Kumhar Community",
      featured: true,
    },
    {
      id: 5,
      name: "Chanderi & Maheshwari Silk",
      category: "textiles",
      description:
        "Exquisite handwoven silk sarees and fabrics from nearby Chanderi & Maheshwar, known for their sheer texture and gold work.",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=400&fit=crop",
      features: [
        "What it is : Handwoven silk with gold zari.",
        "Best sellers : Chanderi sarees, stoles, dupattas.",
      ],
      priceRange: "₹2,000 - ₹50,000",
      origin: "Chanderi Weavers",
      featured: false,
    },
    {
      id: 6,
      name: "Brass & Bronze Artifacts",
      category: "sculptures",
      description:
        "Temple bells, deity statues, and decorative items crafted using traditional lost-wax casting technique.",
      image:
        "https://imgs.search.brave.com/rA6BKGx7_GK9UYq5SovK087by83X_Ts0Ch468t0XwBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aWlt/Zy50aXN0YXRpYy5j/b20vZnAvMS8wMDcv/MjY2L2JyYXNzLWFy/dGlmYWN0cy1mb3It/aG9tZS1kZWNvcmF0/aW9uLTEyNC5qcGc",
      features: [
        "What it is : Lost-wax cast metal art.",
        "Best sellers : Dancing Shiva, temple bells.",
      ],
      priceRange: "₹500 - ₹30,000",
      origin: "Metal Artisans",
      featured: false,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? handicrafts
      : handicrafts.filter((item) => item.category === selectedCategory);

  const shopLocations = [
    {
      name: "Gole Market",
      description: "Biggest trade center with textiles, artifacts & replicas",
      icon: "🏪",
    },
    {
      name: "Rajnagar Shopping Area",
      description: "Famous for brass & silver crafts, 5km from city",
      icon: "🎨",
    },
    {
      name: "Mrignayani Emporium",
      description: "Government-run store for authentic MP handicrafts",
      icon: "🏛️",
    },
  ];

  return (
    <section
      id="local-market"
      ref={elementRef}
      className={`relative py-20 md:py-32 overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-bg"
          : "bg-gradient-to-b from-offwhite via-sandstone/20 to-offwhite"
      }`}
    >
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 ${isDark ? "opacity-5" : "opacity-10"}`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L80 40L40 80L0 40z' fill='none' stroke='%23C89B67' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='15' fill='none' stroke='%23C89B67' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating decorative elements */}
        <div
          className={`absolute top-20 right-10 w-32 h-32 rounded-full blur-3xl ${
            isDark ? "bg-gold/10" : "bg-gold/20"
          }`}
        />
        <div
          className={`absolute bottom-20 left-10 w-40 h-40 rounded-full blur-3xl ${
            isDark ? "bg-saffron/10" : "bg-saffron/15"
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className={`h-px w-12 ${
                isDark
                  ? "bg-gradient-to-r from-transparent to-gold"
                  : "bg-gradient-to-r from-transparent to-indigo"
              }`}
            />
            <span
              className={`text-sm font-medium tracking-widest uppercase ${
                isDark ? "text-saffron" : "text-indigo"
              }`}
            >
              Khajuraho Local Market
            </span>
            <div
              className={`h-px w-12 ${
                isDark
                  ? "bg-gradient-to-l from-transparent to-gold"
                  : "bg-gradient-to-l from-transparent to-indigo"
              }`}
            />
          </div>

          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Handcrafts & <span className="gradient-text">Curios</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Discover beautifully carved souvenirs, stone & metal sculptures,
            traditional textiles, pottery and tribal jewellery — handpicked from
            Khajuraho's market lanes.
          </p>
        </div>

        {/* Category Pills */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? isDark
                    ? "bg-gold/20 border-gold text-gold"
                    : "bg-indigo text-white border-indigo"
                  : isDark
                  ? "border-white/10 text-offwhite/60 hover:border-gold/50 hover:text-gold"
                  : "border-charcoal/20 text-charcoal/60 hover:border-indigo/50 hover:text-indigo"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout - Horizontal scroll on mobile, grid on larger screens */}
        <div
          className={`flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-16 md:overflow-visible md:pb-0 transition-all duration-700 delay-300 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex-shrink-0 w-[85vw] md:w-auto snap-center ${
                item.featured && index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              } ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:border-gold/40"
                  : "bg-white border border-charcoal/10 hover:border-indigo/40"
              }`}
              style={{
                minHeight: item.featured && index === 0 ? "400px" : "280px",
              }}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    activeItem === item.id ? "scale-110" : "scale-100"
                  }`}
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isDark
                      ? "bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"
                      : "bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent"
                  } ${activeItem === item.id ? "opacity-95" : "opacity-80"}`}
                />
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end">
                {/* Category Badge */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                    isDark
                      ? "bg-gold/20 text-gold border border-gold/30"
                      : "bg-white/90 text-indigo"
                  }`}
                >
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </span>

                {/* Price Badge */}
                {/* <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    isDark
                      ? "bg-saffron/20 text-saffron border border-saffron/30"
                      : "bg-saffron/90 text-white"
                  }`}
                >
                  {item.priceRange}
                </span> */}

                {/* Title & Description */}
                <div className="mt-auto">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.name}
                  </h3>

                  <p
                    className={`text-sm text-white/70 mb-4 line-clamp-2 transition-all duration-300 ${
                      activeItem === item.id
                        ? "opacity-100 max-h-20"
                        : "opacity-70 max-h-12"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Features - Show on hover */}
                  <div
                    className={`space-y-2 transition-all duration-500 ${
                      activeItem === item.id
                        ? "opacity-100 max-h-40 translate-y-0"
                        : "opacity-0 max-h-0 translate-y-4"
                    }`}
                  >
                    {item.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm text-white/80"
                      >
                        <span className="text-gold mt-0.5">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Origin Tag */}
                  <div
                    className={`mt-4 pt-4 border-t border-white/20 flex items-center justify-between transition-all duration-300 ${
                      activeItem === item.id ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    <span className="text-xs text-white/60">
                      Crafted by: {item.origin}
                    </span>
                    <span className="text-gold text-sm font-medium">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Where to Shop Section */}
        <div
          className={`transition-all duration-700 delay-500 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className={`text-center text-xl font-bold mb-8 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Where to Shop 🛍️
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shopLocations.map((shop, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-white/5 border border-white/10 hover:border-gold/30"
                    : "bg-white border border-charcoal/10 hover:border-indigo/30 shadow-sm hover:shadow-md"
                }`}
              >
                <span className="text-3xl mb-3 block">{shop.icon}</span>
                <h4
                  className={`font-bold mb-2 ${
                    isDark ? "text-gold" : "text-indigo"
                  }`}
                >
                  {shop.name}
                </h4>
                <p
                  className={`text-sm ${
                    isDark ? "text-offwhite/60" : "text-charcoal/60"
                  }`}
                >
                  {shop.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips Banner */}
        <div
          className={`mt-12 p-6 rounded-2xl transition-all duration-700 delay-700 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${
            isDark
              ? "bg-gradient-to-r from-gold/10 via-saffron/10 to-gold/10 border border-gold/20"
              : "bg-gradient-to-r from-indigo/10 via-saffron/10 to-indigo/10 border border-indigo/20"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isDark ? "bg-gold/20" : "bg-indigo/20"
                }`}
              >
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h4
                  className={`font-bold ${
                    isDark ? "text-gold" : "text-indigo"
                  }`}
                >
                  Shopping Tips
                </h4>
                <p
                  className={`text-sm ${
                    isDark ? "text-offwhite/70" : "text-charcoal/70"
                  }`}
                >
                  Bargain respectfully, carry cash, and ask for authenticity
                  certificates for sculptures.
                </p>
              </div>
            </div>
            <div
              className={`flex items-center gap-2 text-sm ${
                isDark ? "text-saffron" : "text-indigo"
              }`}
            >
              <span>🕐</span>
              <span>Best time: 10 AM - 7 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalMarket;
