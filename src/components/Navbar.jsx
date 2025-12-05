import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "About", href: "#about", type: "scroll" },
    { name: "Schedule", href: "#schedule", type: "scroll" },
    { name: "Artists", href: "#artists", type: "scroll" },
    { name: "Visit", href: "#visit", type: "scroll" },
    { name: "Gallery", href: "/gallery", type: "route" },
    { name: "FAQs", href: "#faqs", type: "scroll" },
    { name: "Contact", href: "#contact", type: "scroll" },
  ];

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > 50);

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 theme-transition ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? isDark
              ? "bg-dark-bg/95 backdrop-blur-xl shadow-lg shadow-gold-glow/10"
              : "bg-offwhite/95 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 group"
              onClick={handleLogoClick}
            >
              <div className="relative">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Temple Icon */}
                  <path
                    d="M20 2L4 16V38H36V16L20 2Z"
                    className={`${
                      isDark ? "fill-sandstone" : "fill-indigo"
                    } transition-colors`}
                  />
                  <path
                    d="M20 2L12 10V20H28V10L20 2Z"
                    className="fill-saffron"
                  />
                  <path
                    d="M16 22H24V38H16V22Z"
                    className={`${
                      isDark ? "fill-gold-glow" : "fill-sandstone"
                    } transition-colors`}
                  />
                  <circle cx="20" cy="8" r="2" className="fill-offwhite" />
                </svg>
                <div className="absolute -inset-1 bg-saffron/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span
                className={`font-heading text-lg md:text-xl font-bold ${
                  isDark ? "text-offwhite" : "text-charcoal"
                } `}
              >
                Khajuraho
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isDark
                        ? "text-offwhite/80 hover:text-saffron hover:bg-white/5"
                        : "text-charcoal/80 hover:text-indigo hover:bg-indigo/5"
                    } ${
                      location.pathname === link.href
                        ? isDark
                          ? "text-saffron"
                          : "text-indigo"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isDark
                        ? "text-offwhite/80 hover:text-saffron hover:bg-white/5"
                        : "text-charcoal/80 hover:text-indigo hover:bg-indigo/5"
                    }`}
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`relative p-2 rounded-full transition-all duration-200 ${
                  isDark
                    ? "bg-white/10 hover:bg-white/20 text-saffron"
                    : "bg-indigo/10 hover:bg-indigo/20 text-indigo"
                }`}
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
                aria-pressed={isDark}
                tabIndex={0}
              >
                <div className="relative w-5 h-5">
                  {/* Sun Icon */}
                  <svg
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                      isDark
                        ? "opacity-0 rotate-90 scale-50"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  {/* Moon Icon */}
                  <svg
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                      isDark
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-50"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
              </button>

              {/* Register CTA */}
              <a
                href="#register"
                onClick={(e) => scrollToSection(e, "#register")}
                className="hidden sm:flex btn-ripple px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-saffron to-sandstone text-white font-semibold rounded-full hover:shadow-lg hover:shadow-saffron/30 transition-all duration-300 hover:scale-105"
              >
                Register
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg ${
                  isDark ? "text-offwhite" : "text-charcoal"
                }`}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          } ${
            isDark
              ? "bg-dark-bg/98 backdrop-blur-xl"
              : "bg-offwhite/98 backdrop-blur-xl"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isDark
                      ? "text-offwhite hover:bg-white/10 hover:text-saffron"
                      : "text-charcoal hover:bg-indigo/10 hover:text-indigo"
                  } ${
                    location.pathname === link.href
                      ? isDark
                        ? "text-saffron"
                        : "text-indigo"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isDark
                      ? "text-offwhite hover:bg-white/10 hover:text-saffron"
                      : "text-charcoal hover:bg-indigo/10 hover:text-indigo"
                  }`}
                >
                  {link.name}
                </a>
              )
            )}
            <a
              href="#register"
              onClick={(e) => scrollToSection(e, "#register")}
              className="block mt-4 text-center px-6 py-3 bg-gradient-to-r from-saffron to-sandstone text-white font-semibold rounded-full glow-gold"
            >
              Register Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
