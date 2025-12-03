import { useState, useMemo } from "react";
import { useIntersectionObserver } from "../hooks";

const Registration = ({ isDark, festivalData }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visitors: "1",
    preferredDays: [],
    newsletter: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFreeEntry = festivalData?.festivalInfo?.freeEntry;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDayToggle = (day) => {
    setFormData((prev) => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter((d) => d !== day)
        : [...prev.preferredDays, day],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setShowConfetti(true);

    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Generate confetti particles - memoized to prevent recalculation
  const confettiParticles = useMemo(() => {
    const seededRandom = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${seededRandom(i * 1.5) * 100}%`,
      delay: `${seededRandom(i * 2.3) * 0.5}s`,
      color: ["#E78A00", "#C89B67", "#2B2A7B", "#4A48C9", "#FFD700"][
        Math.floor(seededRandom(i * 3.7) * 5)
      ],
    }));
  }, []);

  return (
    <section
      id="register"
      ref={elementRef}
      className={`relative py-20 md:py-32 overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-saffron/10 to-dark-bg"
          : "bg-gradient-to-b from-white via-saffron/10 to-white"
      }`}
    >
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {confettiParticles.map((particle) => (
            <div
              key={particle.id}
              className="confetti absolute w-3 h-3 rounded"
              style={{
                left: particle.left,
                backgroundColor: particle.color,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              isFreeEntry
                ? isDark
                  ? "bg-green-500/20 text-green-400"
                  : "bg-green-500/10 text-green-600"
                : isDark
                ? "bg-saffron/20 text-saffron"
                : "bg-saffron/10 text-saffron"
            }`}
          >
            {isFreeEntry ? "✨ Free Entry" : "Book Now"}
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            {isFreeEntry ? "Register for Updates" : "Reserve Your"}{" "}
            <span className="gradient-text">
              {isFreeEntry ? "& Seat Allocation" : "Seat"}
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            {isFreeEntry
              ? "Registration helps us manage seating and keeps you informed about schedule updates."
              : "Secure your spot at India's premier classical dance festival."}
          </p>
        </div>

        {/* Registration Form */}
        <div
          className={`rounded-3xl p-6 md:p-10 transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${
            isDark
              ? "bg-white/5 border border-white/10 glow-gold"
              : "bg-white shadow-2xl"
          }`}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-saffron ${
                      isDark
                        ? "bg-white/10 border border-white/20 text-offwhite placeholder-white/40 focus:bg-white/15"
                        : "bg-gray-50 border border-gray-200 text-charcoal placeholder-gray-400 focus:bg-white"
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-saffron ${
                      isDark
                        ? "bg-white/10 border border-white/20 text-offwhite placeholder-white/40 focus:bg-white/15"
                        : "bg-gray-50 border border-gray-200 text-charcoal placeholder-gray-400 focus:bg-white"
                    }`}
                  />
                </div>
              </div>

              {/* Phone & Visitors Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-saffron ${
                      isDark
                        ? "bg-white/10 border border-white/20 text-offwhite placeholder-white/40 focus:bg-white/15"
                        : "bg-gray-50 border border-gray-200 text-charcoal placeholder-gray-400 focus:bg-white"
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-offwhite" : "text-charcoal"
                    }`}
                  >
                    Number of Visitors
                  </label>
                  <select
                    name="visitors"
                    value={formData.visitors}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-saffron ${
                      isDark
                        ? "bg-white/10 border border-white/20 text-offwhite focus:bg-white/15"
                        : "bg-gray-50 border border-gray-200 text-charcoal focus:bg-white"
                    }`}
                  >
                    {[1, 2, 3, 4, 5, "6+"].map((num) => (
                      <option key={num} value={num} className="bg-charcoal">
                        {num} {num === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Days */}
              <div>
                <label
                  className={`block text-sm font-medium mb-3 ${
                    isDark ? "text-offwhite" : "text-charcoal"
                  }`}
                >
                  Preferred Days (Optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {festivalData?.days?.slice(0, 7).map((day, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleDayToggle(day.date)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        formData.preferredDays.includes(day.date)
                          ? isDark
                            ? "bg-saffron text-white"
                            : "bg-indigo text-white"
                          : isDark
                          ? "bg-white/10 text-offwhite/70 hover:bg-white/20"
                          : "bg-gray-100 text-charcoal/70 hover:bg-gray-200"
                      }`}
                    >
                      Day {index + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded border-2 border-saffron text-saffron focus:ring-saffron"
                />
                <span
                  className={`text-sm ${
                    isDark ? "text-offwhite/70" : "text-charcoal/70"
                  } group-hover:text-saffron transition-colors`}
                >
                  Keep me updated about schedule changes and special events
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-ripple py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-[1.02] hover:shadow-xl hover:shadow-saffron/30"
                } bg-gradient-to-r from-saffron to-sandstone text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    {isFreeEntry
                      ? "Register for Free"
                      : "Complete Registration"}
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </>
                )}
              </button>

              {/* Privacy Note */}
              <p
                className={`text-xs text-center ${
                  isDark ? "text-offwhite/50" : "text-charcoal/50"
                }`}
              >
                By registering, you agree to our Terms of Service and Privacy
                Policy. Your data is safe with us.
              </p>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isDark ? "bg-green-500/20" : "bg-green-500/10"
                }`}
              >
                <svg
                  className="w-10 h-10 text-green-500"
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
              <h3
                className={`font-heading text-2xl md:text-3xl font-bold mb-4 ${
                  isDark ? "text-offwhite" : "text-charcoal"
                }`}
              >
                🎉 You're Registered!
              </h3>
              <p
                className={`text-lg mb-6 ${
                  isDark ? "text-offwhite/70" : "text-charcoal/70"
                }`}
              >
                Check your email for confirmation and updates about the
                festival.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  className={`px-6 py-3 rounded-full font-medium ${
                    isDark
                      ? "bg-white/10 text-offwhite hover:bg-white/20"
                      : "bg-gray-100 text-charcoal hover:bg-gray-200"
                  }`}
                >
                  📅 Add to Calendar
                </button>
                <button
                  className={`px-6 py-3 rounded-full font-medium ${
                    isDark
                      ? "bg-saffron/20 text-saffron hover:bg-saffron/30"
                      : "bg-saffron/10 text-saffron hover:bg-saffron/20"
                  }`}
                >
                  📱 Share with Friends
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Social Share */}
        <div
          className={`mt-8 text-center transition-all duration-700 delay-400 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className={`text-sm mb-4 ${
              isDark ? "text-offwhite/60" : "text-charcoal/60"
            }`}
          >
            Share the festival with your friends
          </p>
          <div className="flex justify-center gap-3">
            {[
              {
                name: "WhatsApp",
                icon: "📱",
                color: "bg-green-500/20 hover:bg-green-500/30 text-green-500",
              },
              {
                name: "Twitter",
                icon: "🐦",
                color: "bg-blue-400/20 hover:bg-blue-400/30 text-blue-400",
              },
              {
                name: "Facebook",
                icon: "👍",
                color: "bg-blue-600/20 hover:bg-blue-600/30 text-blue-600",
              },
              {
                name: "Email",
                icon: "✉️",
                color: isDark
                  ? "bg-white/10 hover:bg-white/20 text-offwhite"
                  : "bg-gray-100 hover:bg-gray-200 text-charcoal",
              },
            ].map((social) => (
              <button
                key={social.name}
                className={`p-3 rounded-full transition-colors ${social.color}`}
                aria-label={`Share on ${social.name}`}
              >
                <span className="text-xl">{social.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-saffron/20" : "bg-saffron/10"
        }`}
      />
      <div
        className={`absolute bottom-1/4 -right-32 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-neon-indigo/20" : "bg-indigo/10"
        }`}
      />
    </section>
  );
};

export default Registration;
