import { useState, useEffect, useRef } from "react";

const BottomBar = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for background styling
      setIsScrolled(currentScrollY > 50);

      // Hide the bar while scrolling
      setIsVisible(false);

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Show the bar after scrolling stops (400ms delay for smoother UX)
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      } ${
        isScrolled
          ? isDark
            ? "bg-dark-bg/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.3)] border-t border-gray-700/30"
            : "bg-offwhite/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-sandstone/20"
          : "bg-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 py-3">
          {/* MISS Logo */}
          <img
            src="/images/mtss_logo_2.png"
            alt="Micro Integrated Semiconductors Systems Logo"
            className={`h-8 w-auto object-contain transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-80"
            }`}
          />

          {/* Text */}
          <div className="flex items-center gap-1.5 flex-wrap justify-start lg:justify-center">
            <span
              className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? isDark
                    ? "text-gray-400"
                    : "text-gray-600"
                  : isDark
                  ? "text-offwhite/70"
                  : "text-offwhite/70"
              }`}
            >
              Technology Partner
            </span>
            <a
              href="https://microintegrated.in/web/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${
                isDark
                  ? "text-saffron hover:text-sandstone"
                  : "text-saffron hover:text-blue-600 hoover:underline "
              }`}
            >
              Micro Integrated Semiconductors Systems
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
