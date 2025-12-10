import { useState, useEffect, useMemo, useCallback } from "react";
import { useIntersectionObserver } from "../../hooks";

const Gallery = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extended gallery with more Khajuraho images
  const galleryImages = useMemo(
    () => [
      // Temples & Architecture
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=800&fit=crop",
        alt: "Khajuraho Kandariya Mahadeva Temple",
        category: "temples",
        size: "large",
        description: "The magnificent Kandariya Mahadeva Temple at sunset",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=800&h=1200&fit=crop",
        alt: "Temple Sculptures",
        category: "temples",
        size: "tall",
        description: "Intricate sculptures adorning the temple walls",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop",
        alt: "Western Group of Temples",
        category: "temples",
        size: "medium",
        description: "The UNESCO World Heritage Western Group",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
        alt: "Temple Architecture Detail",
        category: "temples",
        size: "medium",
        description: "Exquisite architectural details of Khajuraho",
      },
      // Dance Performances
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&h=1200&fit=crop",
        alt: "Classical Bharatanatyam Performance",
        category: "dance",
        size: "tall",
        description: "Mesmerizing Bharatanatyam at the festival",
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800&h=800&fit=crop",
        alt: "Kathak Dance",
        category: "dance",
        size: "medium",
        description: "Graceful Kathak performance under the stars",
      },
      {
        id: 7,
        src: "https://i0.wp.com/indiacurrents.com/wp-content/uploads/2023/10/Rudrakshya-Foundation.jpg?fit=1200%2C673&ssl=1",
        alt: "Odissi Dance Performance",
        category: "dance",
        size: "large",
        description: "Traditional Odissi dance against temple backdrop",
      },
      {
        id: 8,
        src: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=600&fit=crop",
        alt: "Kuchipudi Dancer",
        category: "dance",
        size: "medium",
        description: "Elegant Kuchipudi performance at night",
      },
      {
        id: 9,
        src: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=800&fit=crop",
        alt: "Mohiniyattam Dancer",
        category: "dance",
        size: "tall",
        description: "The graceful movements of Mohiniyattam",
      },
      // Festival Events
      {
        id: 10,
        src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=800&fit=crop",
        alt: "Festival Night Crowd",
        category: "events",
        size: "large",
        description: "Thousands gather for the opening ceremony",
      },
      {
        id: 11,
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
        alt: "Festival Lights",
        category: "events",
        size: "medium",
        description: "The festival grounds illuminated at night",
      },
      {
        id: 12,
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
        alt: "Cultural Celebration",
        category: "events",
        size: "medium",
        description: "Celebrating India's rich cultural heritage",
      },
      {
        id: 13,
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=1000&fit=crop",
        alt: "Stage Performance",
        category: "events",
        size: "tall",
        description: "Grand stage setup against the temples",
      },
      // Cultural Heritage
      {
        id: 14,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
        alt: "Sunrise at Khajuraho",
        category: "culture",
        size: "large",
        description: "Golden sunrise over the ancient temples",
      },
      {
        id: 15,
        src: "https://images.unsplash.com/photo-1583309219338-a582f1f9ca6b?w=800&h=600&fit=crop",
        alt: "Traditional Costumes",
        category: "culture",
        size: "medium",
        description: "Vibrant traditional dance costumes",
      },
      {
        id: 16,
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop",
        alt: "Temple at Dusk",
        category: "culture",
        size: "tall",
        description: "Temples bathed in evening light",
      },
      {
        id: 17,
        src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
        alt: "Artisan Crafts",
        category: "culture",
        size: "medium",
        description: "Local artisans showcasing their craft",
      },
      {
        id: 18,
        src: "https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=800&h=800&fit=crop",
        alt: "Festival Decorations",
        category: "culture",
        size: "medium",
        description: "Traditional decorations adorning the venue",
      },
    ],
    []
  );

  const filters = [
    { id: "all", label: "All", icon: "✨" },
    { id: "temples", label: "Temples", icon: "🛕" },
    { id: "dance", label: "Dance", icon: "💃" },
    { id: "events", label: "Events", icon: "🎭" },
    { id: "culture", label: "Culture", icon: "🎨" },
  ];

  const filteredImages = useMemo(() => {
    if (activeFilter === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeFilter);
  }, [activeFilter, galleryImages]);

  // Lightbox handlers
  const openLightbox = useCallback((image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  }, []);

  const navigateImage = useCallback(
    (direction) => {
      const newIndex =
        (currentImageIndex + direction + filteredImages.length) %
        filteredImages.length;
      setCurrentImageIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    },
    [currentImageIndex, filteredImages]
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage(-1);
      if (e.key === "ArrowRight") navigateImage(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, closeLightbox, navigateImage]);

  // Get grid class based on image size
  const getGridClass = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "tall":
        return "row-span-2";
      case "wide":
        return "md:col-span-2";
      default:
        return "";
    }
  };

  return (
    <section
      id="gallery"
      ref={elementRef}
      className={`relative min-h-screen py-16  overflow-hidden theme-transition ${
        isDark ? "bg-dark-bg" : "bg-offwhite"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating orbs */}
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20  ${
            isDark ? "bg-saffron" : "bg-indigo"
          }`}
        />
        <div
          className={`absolute bottom-40 right-10 w-96 h-96 rounded-full blur-3xl opacity-15   ${
            isDark ? "bg-indigo" : "bg-saffron"
          }`}
          style={{ animationDelay: "1s" }}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10 ${
            isDark
              ? "bg-gradient-radial from-saffron/30 to-transparent"
              : "bg-gradient-radial from-indigo/20 to-transparent"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className={`h-px w-16 md:w-24 ${
                isDark
                  ? "bg-gradient-to-r from-transparent to-saffron"
                  : "bg-gradient-to-r from-transparent to-indigo"
              }`}
            />
            <span
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${
                isDark
                  ? "bg-saffron/10 text-saffron border border-saffron/20"
                  : "bg-indigo/10 text-indigo border border-indigo/20"
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
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Visual Journey
            </span>
            <div
              className={`h-px w-16 md:w-24 ${
                isDark
                  ? "bg-gradient-to-l from-transparent to-saffron"
                  : "bg-gradient-to-l from-transparent to-indigo"
              }`}
            />
          </div>

          <h1
            className={`font-heading text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Khajuraho Dance
            <br />
            <span className="gradient-text relative">
              Festival Gallery
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-saffron/30"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q50,0 100,5 T200,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </h1>

          <p
            className={`max-w-3xl mx-auto text-lg md:text-xl leading-relaxed ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Immerse yourself in the visual splendor of India's most prestigious
            classical dance festival. Witness the magic where ancient temples
            meet timeless art forms.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { value: "51+", label: "Years of Legacy" },
              { value: "1000+", label: "Performances" },
              { value: "100K+", label: "Annual Visitors" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center px-6 py-3 rounded-2xl backdrop-blur-sm ${
                  isDark ? "bg-white/5" : "bg-black/5"
                }`}
              >
                <div className={`text-3xl md:text-4xl font-bold gradient-text`}>
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${
                    isDark ? "text-offwhite/60" : "text-charcoal/60"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden ${
                activeFilter === filter.id
                  ? isDark
                    ? "bg-saffron text-dark-bg shadow-lg shadow-saffron/25"
                    : "bg-indigo text-white shadow-lg shadow-indigo/25"
                  : isDark
                  ? "bg-white/5 text-offwhite/70 hover:bg-white/10 hover:text-offwhite border border-white/10"
                  : "bg-black/5 text-charcoal/70 hover:bg-black/10 hover:text-charcoal border border-black/10"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-base">{filter.icon}</span>
                {filter.label}
              </span>
              {activeFilter === filter.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              )}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer ${getGridClass(
                image.size
              )} ${
                hasIntersected
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } transition-all duration-700`}
              style={{ transitionDelay: `${Math.min(index * 50, 500)}ms` }}
              onClick={() => openLightbox(image, index)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isDark
                    ? "bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent opacity-60 group-hover:opacity-80"
                    : "bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100"
                }`}
              />

              {/* Category Badge */}
              <div
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md transition-all duration-300 ${
                  isDark
                    ? "bg-saffron/20 text-saffron border border-saffron/30"
                    : "bg-white/20 text-white border border-white/30"
                } opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0`}
              >
                {image.category.charAt(0).toUpperCase() +
                  image.category.slice(1)}
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3
                  className={`text-white font-heading text-lg md:text-xl font-semibold mb-1 ${
                    isDark ? "drop-shadow-lg" : ""
                  }`}
                >
                  {image.alt}
                </h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                  {image.description}
                </p>
              </div>

              {/* View Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                <div
                  className={`p-4 rounded-full backdrop-blur-md ${
                    isDark
                      ? "bg-saffron/20 border border-saffron/40"
                      : "bg-white/20 border border-white/40"
                  }`}
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-white"
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

              {/* Corner Glow Effect */}
              {isDark && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-saffron/30 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-indigo/30 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More / View All */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Instagram CTA */}
            <a
              href="https://instagram.com/mptourism"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-lg hover:shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <svg
                className="relative w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="relative">Follow @MPTourism</span>
            </a>

            {/* YouTube CTA */}
            <a
              href="https://youtube.com/@mptourismboard"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-white/10 text-offwhite hover:bg-white/20 border border-white/20"
                  : "bg-black/5 text-charcoal hover:bg-black/10 border border-black/10"
              }`}
            >
              <svg
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Watch Highlights</span>
            </a>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="flex items-center justify-center mt-20">
          <div
            className={`flex items-center gap-4 ${
              isDark ? "text-offwhite/30" : "text-charcoal/30"
            }`}
          >
            <div className="w-20 h-px bg-current" />
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <div className="w-20 h-px bg-current" />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110 z-50"
            onClick={closeLightbox}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(-1);
            }}
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
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
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(1);
            }}
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
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

          {/* Image Container */}
          <div
            className="relative max-w-6xl max-h-[85vh] mx-4 md:mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <h3 className="text-white font-heading text-2xl font-bold mb-2">
                {selectedImage.alt}
              </h3>
              <p className="text-white/80">{selectedImage.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <span className="px-3 py-1 rounded-full bg-saffron/20 text-saffron text-sm">
                  {selectedImage.category.charAt(0).toUpperCase() +
                    selectedImage.category.slice(1)}
                </span>
                <span className="text-white/50 text-sm">
                  {currentImageIndex + 1} / {filteredImages.length}
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto scrollbar-hide px-4">
            {filteredImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                  setSelectedImage(img);
                }}
                className={`flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                  idx === currentImageIndex
                    ? "ring-2 ring-saffron scale-110"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
