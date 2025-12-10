import { useState, useEffect, useMemo } from "react";
import { useIntersectionObserver } from "../../hooks";

// Temple Silhouette SVG
const TempleSilhouette = ({ className, style }) => (
  <svg
    viewBox="0 0 200 300"
    className={className}
    style={style}
    fill="currentColor"
  >
    {/* Main temple spire */}
    <path d="M100 0 L120 60 L115 60 L125 120 L118 120 L130 200 L70 200 L82 120 L75 120 L85 60 L80 60 Z" />
    {/* Temple base */}
    <rect x="60" y="200" width="80" height="30" rx="2" />
    <rect x="50" y="230" width="100" height="20" rx="2" />
    <rect x="40" y="250" width="120" height="25" rx="3" />
    {/* Decorative elements */}
    <circle cx="100" cy="40" r="5" />
    <circle cx="100" cy="80" r="4" />
    <circle cx="100" cy="120" r="3" />
  </svg>
);

// Lotus Pattern SVG
const LotusPattern = ({ className, style }) => (
  <svg
    viewBox="0 0 100 60"
    className={className}
    style={style}
    fill="currentColor"
  >
    {/* Center petal */}
    <ellipse cx="50" cy="40" rx="8" ry="25" />
    {/* Left petals */}
    <ellipse cx="35" cy="42" rx="7" ry="22" transform="rotate(-20 35 42)" />
    <ellipse cx="22" cy="45" rx="6" ry="18" transform="rotate(-40 22 45)" />
    {/* Right petals */}
    <ellipse cx="65" cy="42" rx="7" ry="22" transform="rotate(20 65 42)" />
    <ellipse cx="78" cy="45" rx="6" ry="18" transform="rotate(40 78 45)" />
    {/* Inner details */}
    <circle cx="50" cy="52" r="4" opacity="0.5" />
  </svg>
);

const GalleryHeader = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate floating temple patterns with seeded random for consistency
  const floatingElements = useMemo(() => {
    // Seeded random function for consistent values
    const seededRandom = (seed) => {
      const x = Math.sin(seed * 9999) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: 40 + seededRandom(i * 1.5) * 60,
      left: `${10 + seededRandom(i * 2.3) * 80}%`,
      top: `${10 + seededRandom(i * 3.7) * 70}%`,
      delay: seededRandom(i * 4.1) * 5,
      duration: 6 + seededRandom(i * 5.2) * 4,
      rotation: seededRandom(i * 6.8) * 360,
    }));
  }, []);

  return (
    <header
      ref={elementRef}
      className={`relative min-h-[60vh] overflow-hidden theme-transition  ${
        isDark
          ? "bg-gradient-to-b from-charcoal/80 via-indigo/60 to-dark-bg"
          : "bg-gradient-to-br from-offwhite to-white"
      }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Moving background image */}
        <div
          className="absolute inset-[-20px] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920&h=1080&fit=crop')`,
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px) scale(1.1)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        {/* Fixed Gradient overlay - stays in place */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-b from-dark-bg/95 via-dark-bg/85 to-dark-bg"
              : "bg-gradient-to-b from-charcoal/70 via-indigo/60 to-dark-bg"
          }`}
        />
      </div>

      {/* Animated Mandala Background */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${
            mousePosition.y * 0.2
          }px)`,
        }}
      ></div>

      {/* Floating Temple Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((el) => (
          <div
            key={el.id}
            className={`absolute transition-transform duration-1000 ${
              isDark ? "text-saffron/20" : "text-indigo/15"
            }`}
            style={{
              left: el.left,
              top: el.top,
              width: el.size,
              height: el.size,
              animation: `float ${el.duration}s ease-in-out infinite`,
              animationDelay: `${el.delay}s`,
              transform: `rotate(${el.rotation}deg)`,
            }}
          >
            {el.id % 2 === 0 ? (
              <LotusPattern className="w-full h-full" />
            ) : (
              <TempleSilhouette className="w-full h-full" />
            )}
          </div>
        ))}
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M0 0 L100 0 L100 10 Q50 10 10 50 L10 100 L0 100 Z"
            fill={
              isDark ? "rgba(200, 155, 103, 0.3)" : "rgba(43, 42, 123, 0.2)"
            }
          />
          <path
            d="M0 0 L60 0 L60 5 Q30 5 5 30 L5 60 L0 60 Z"
            fill={
              isDark ? "rgba(231, 138, 0, 0.4)" : "rgba(200, 155, 103, 0.3)"
            }
          />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M0 0 L100 0 L100 10 Q50 10 10 50 L10 100 L0 100 Z"
            fill={
              isDark ? "rgba(200, 155, 103, 0.3)" : "rgba(43, 42, 123, 0.2)"
            }
          />
          <path
            d="M0 0 L60 0 L60 5 Q30 5 5 30 L5 60 L0 60 Z"
            fill={
              isDark ? "rgba(231, 138, 0, 0.4)" : "rgba(200, 155, 103, 0.3)"
            }
          />
        </svg>
      </div>

      {/* Glowing Orbs */}
      <div
        className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-30 ${
          isDark ? "bg-saffron" : "bg-indigo"
        }`}
        style={{
          transform: `translate(${mousePosition.x * -0.5}px, ${
            mousePosition.y * -0.5
          }px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-25 ${
          isDark ? "bg-indigo" : "bg-saffron"
        }`}
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${
            mousePosition.y * 0.3
          }px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center pt-20">
        {/* Decorative Line */}
        <div
          className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          <div
            className={`h-px w-12 md:w-20 ${
              isDark
                ? "bg-gradient-to-r from-transparent to-saffron"
                : "bg-gradient-to-r from-transparent to-saffron"
            }`}
          />
          <LotusPattern
            className={`w-10 h-6 ${isDark ? "text-saffron" : "text-saffron"}`}
          />
          <div
            className={`h-px w-12 md:w-20 ${
              isDark
                ? "bg-gradient-to-l from-transparent to-saffron"
                : "bg-gradient-to-l from-transparent to-saffron"
            }`}
          />
        </div>

        {/* Main Title */}
        <h1
          className={`font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-700 delay-100 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className={`block ${
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-sandstone via-saffron to-sandstone"
                : "text-transparent bg-clip-text bg-gradient-to-r from-sandstone via-saffron to-saffron pb-2"
            }`}
          >
            Gallery
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl max-w-2xl mb-6 transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          } ${isDark ? "text-gray-300" : "text-white/90"}`}
        >
          Capturing the essence of{" "}
          <span className={isDark ? "text-saffron" : "text-sandstone"}>
            timeless artistry
          </span>{" "}
          and{" "}
          <span className={isDark ? "text-saffron" : "text-sandstone"}>
            cultural heritage
          </span>
        </p>

        {/* Animated Badge */}
        <div
          className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-700 delay-300 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          } ${
            isDark
              ? "bg-saffron/10 border border-saffron/30"
              : "bg-white/20 border border-white/40"
          }`}
        >
          <span className="relative flex h-3 w-3">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isDark ? "bg-saffron" : "bg-sandstone"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-3 w-3 ${
                isDark ? "bg-saffron" : "bg-sandstone"
              }`}
            />
          </span>
          <span
            className={`text-sm font-medium tracking-wide uppercase ${
              isDark ? "text-saffron" : "text-white"
            }`}
          >
            Khajuraho Dance Festival 2026
          </span>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor={isDark ? "#E78A00" : "#2B2A7B"}
                stopOpacity="0.3"
              />
              <stop
                offset="50%"
                stopColor={isDark ? "#C89B67" : "#C89B67"}
                stopOpacity="0.2"
              />
              <stop
                offset="100%"
                stopColor={isDark ? "#E78A00" : "#2B2A7B"}
                stopOpacity="0.3"
              />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
            fill={isDark ? "#0F0F15" : "#FFF8F2"}
          />
        </svg>
      </div>
    </header>
  );
};

export default GalleryHeader;
