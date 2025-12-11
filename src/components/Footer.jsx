import { useIntersectionObserver } from "../hooks";

const Footer = ({ isDark, festivalData }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });
  const contact = festivalData?.contact;

  const footerLinks = {
    festival: [
      { name: "About", href: "#about" },
      { name: "Schedule", href: "#schedule" },
      { name: "Artists", href: "#artists" },
      { name: "Gallery", href: "#gallery" },
    ],
    visit: [
      { name: "How to Reach", href: "#visit" },
      { name: "Accommodation", href: "#" },
      { name: "Local Attractions", href: "#" },
      { name: "Travel Tips", href: "#" },
    ],
    info: [
      { name: "FAQs", href: "#faqs" },
      { name: "Contact Us", href: "#contact" },
      { name: "Press & Media", href: "#" },
      { name: "Sponsorship", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: contact?.socialMedia?.facebook || "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: contact?.socialMedia?.instagram || "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: contact?.socialMedia?.twitter || "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: contact?.socialMedia?.youtube || "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      ref={elementRef}
      className={`relative pt-20 pb-20 overflow-hidden theme-transition ${
        isDark ? "bg-charcoal" : "bg-indigo"
      }`}
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 transition-all duration-700 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg
                className="w-10 h-10"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 2L4 16V38H36V16L20 2Z"
                  className="fill-sandstone"
                />
                <path d="M20 2L12 10V20H28V10L20 2Z" className="fill-saffron" />
                <path d="M16 22H24V38H16V22Z" className="fill-gold-glow" />
                <circle cx="20" cy="8" r="2" className="fill-offwhite" />
              </svg>
              <span className="font-heading text-xl font-bold text-offwhite">
                Khajuraho
              </span>
            </div>
            <p className="text-offwhite/70 mb-6 text-sm leading-relaxed">
              India's premier classical dance festival celebrating 50 years of
              heritage, art, and cultural excellence at the magnificent UNESCO
              World Heritage Site.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${contact?.email}`}
                className="flex items-center gap-3 text-offwhite/70 hover:text-saffron transition-colors text-sm"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {contact?.email}
              </a>
              <a
                href={`tel:${contact?.phone}`}
                className="flex items-center gap-3 text-offwhite/70 hover:text-saffron transition-colors text-sm"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {contact?.phone}
              </a>
            </div>
          </div>

          {/* Festival Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-offwhite mb-6">
              Festival
            </h4>
            <ul className="space-y-3">
              {footerLinks.festival.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-offwhite/70 hover:text-saffron transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-offwhite mb-6">
              Visit
            </h4>
            <ul className="space-y-3">
              {footerLinks.visit.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={
                      link.href.startsWith("#")
                        ? (e) => scrollToSection(e, link.href)
                        : undefined
                    }
                    className="text-offwhite/70 hover:text-saffron transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-offwhite mb-6">
              Information
            </h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={
                      link.href.startsWith("#")
                        ? (e) => scrollToSection(e, link.href)
                        : undefined
                    }
                    className="text-offwhite/70 hover:text-saffron transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div
          className={`mb-12 p-6 md:p-8 rounded-2xl transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${isDark ? "bg-white/5" : "bg-white/10"}`}
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-heading text-xl font-bold text-offwhite mb-2">
                Stay Updated
              </h4>
              <p className="text-offwhite/70 text-sm">
                Subscribe to receive the latest news about the festival, artist
                announcements, and more.
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-offwhite placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-saffron"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-saffron to-sandstone text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-saffron/30 transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Registration QR Section */}
        <div
          className={`mb-12 transition-all duration-700 delay-300 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`relative p-8 rounded-2xl overflow-hidden ${
              isDark
                ? "bg-gradient-to-br from-saffron/10 to-sandstone/10"
                : "bg-gradient-to-br from-saffron/20 to-sandstone/20"
            }`}
          >
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-saffron/20" />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-saffron/20 rounded-full">
                  <svg
                    className="w-4 h-4 text-saffron"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold text-saffron">
                    Register Now
                  </span>
                </div>

                <h4 className="font-heading text-2xl font-bold text-offwhite">
                  Reserve Your Spot at the Festival
                </h4>

                <p className="text-offwhite/70 text-sm leading-relaxed max-w-md">
                  Scan the QR code to complete your registration and be part of
                  India's most prestigious classical dance festival. Limited
                  seats available!
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-offwhite/60 text-sm">
                    <svg
                      className="w-5 h-5 text-saffron"
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
                    Quick Registration
                  </div>
                  <div className="flex items-center gap-2 text-offwhite/60 text-sm">
                    <svg
                      className="w-5 h-5 text-saffron"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Instant Confirmation
                  </div>
                </div>
              </div>

              {/* QR Code Container */}
              <div className="flex justify-center md:justify-end">
                <div className="relative group">
                  <div
                    className={`absolute inset-0 rounded-2xl blur-xl transition-opacity duration-300 ${
                      isDark ? "bg-saffron/20" : "bg-saffron/30"
                    } group-hover:opacity-100 opacity-70`}
                  />

                  <div className="relative bg-white p-6 rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                    {/* QR Code Placeholder - Replace with actual QR code image */}
                    <div className="w-40 h-40 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-32 h-32"
                        viewBox="0 0 100 100"
                        fill="none"
                      >
                        {/* QR Code Pattern */}
                        <rect
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          fill="white"
                        />
                        <rect x="5" y="5" width="15" height="15" fill="black" />
                        <rect
                          x="80"
                          y="5"
                          width="15"
                          height="15"
                          fill="black"
                        />
                        <rect
                          x="5"
                          y="80"
                          width="15"
                          height="15"
                          fill="black"
                        />
                        <rect x="10" y="10" width="5" height="5" fill="white" />
                        <rect x="85" y="10" width="5" height="5" fill="white" />
                        <rect x="10" y="85" width="5" height="5" fill="white" />
                        {/* Additional QR pattern elements */}
                        <rect x="25" y="5" width="5" height="5" fill="black" />
                        <rect x="35" y="5" width="5" height="5" fill="black" />
                        <rect x="45" y="5" width="10" height="5" fill="black" />
                        <rect x="60" y="5" width="5" height="5" fill="black" />
                        <rect x="70" y="5" width="5" height="5" fill="black" />
                        <rect x="5" y="25" width="5" height="5" fill="black" />
                        <rect
                          x="25"
                          y="25"
                          width="10"
                          height="10"
                          fill="black"
                        />
                        <rect
                          x="45"
                          y="25"
                          width="5"
                          height="10"
                          fill="black"
                        />
                        <rect
                          x="60"
                          y="25"
                          width="10"
                          height="5"
                          fill="black"
                        />
                        <rect
                          x="80"
                          y="25"
                          width="5"
                          height="10"
                          fill="black"
                        />
                        <rect
                          x="5"
                          y="45"
                          width="10"
                          height="10"
                          fill="black"
                        />
                        <rect x="25" y="45" width="5" height="5" fill="black" />
                        <rect
                          x="40"
                          y="40"
                          width="20"
                          height="20"
                          fill="black"
                        />
                        <rect
                          x="45"
                          y="45"
                          width="10"
                          height="10"
                          fill="white"
                        />
                        <rect
                          x="70"
                          y="45"
                          width="10"
                          height="10"
                          fill="black"
                        />
                        <rect
                          x="90"
                          y="45"
                          width="5"
                          height="10"
                          fill="black"
                        />
                        <rect x="5" y="60" width="5" height="10" fill="black" />
                        <rect
                          x="25"
                          y="60"
                          width="10"
                          height="5"
                          fill="black"
                        />
                        <rect
                          x="65"
                          y="60"
                          width="15"
                          height="5"
                          fill="black"
                        />
                        <rect x="90" y="60" width="5" height="5" fill="black" />
                        <rect
                          x="25"
                          y="75"
                          width="5"
                          height="10"
                          fill="black"
                        />
                        <rect
                          x="40"
                          y="70"
                          width="5"
                          height="15"
                          fill="black"
                        />
                        <rect
                          x="50"
                          y="75"
                          width="10"
                          height="5"
                          fill="black"
                        />
                        <rect
                          x="65"
                          y="70"
                          width="5"
                          height="15"
                          fill="black"
                        />
                        <rect
                          x="75"
                          y="75"
                          width="10"
                          height="10"
                          fill="black"
                        />
                        <rect
                          x="90"
                          y="80"
                          width="5"
                          height="10"
                          fill="black"
                        />
                      </svg>
                    </div>

                    <div className="mt-3 text-center">
                      <p className="text-xs font-semibold text-gray-800">
                        Scan to Register
                      </p>
                    </div>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-saffron rounded-tl-lg" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-saffron rounded-tr-lg" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-saffron rounded-bl-lg" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-saffron rounded-br-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 transition-all duration-700 delay-300 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 text-offwhite/70 hover:bg-saffron hover:text-white transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-offwhite/50 text-sm text-center">
            © 2025 Khajuraho Dance Festival. Organized by Madhya Pradesh
            Tourism.
          </p>

          {/* Official Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href={contact?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite/70 hover:text-saffron transition-colors"
            >
              Official Website
            </a>
            <span className="text-offwhite/30">|</span>
            <a
              href="https://www.mptourism.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite/70 hover:text-saffron transition-colors"
            >
              MP Tourism
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-saffron/5" : "bg-saffron/10"
        }`}
      />
      <div
        className={`absolute top-1/2 right-0 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-neon-indigo/5" : "bg-offwhite/5"
        }`}
      />
    </footer>
  );
};

export default Footer;
