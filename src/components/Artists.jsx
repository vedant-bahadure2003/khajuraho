import { useIntersectionObserver } from "../hooks";

const ArtistCard = ({ artist, isDark, index }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={elementRef}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-500 flex-shrink-0 w-[70vw] sm:w-auto snap-center ${
        hasIntersected
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } ${
        isDark
          ? "bg-white/5 border border-white/10 hover:border-saffron/50"
          : "bg-white shadow-lg hover:shadow-2xl"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {/* Placeholder Image */}
        <div
          className={`w-full h-full flex items-center justify-center ${
            isDark
              ? "bg-gradient-to-br from-indigo/30 to-saffron/20"
              : "bg-gradient-to-br from-indigo/10 to-saffron/10"
          }`}
        >
          <img
            src={artist.thumbnail}
            alt={artist.artist}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300`}
        />

        {/* Dance Form Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
              isDark ? "bg-saffron/80 text-white" : "bg-white/90 text-indigo"
            }`}
          >
            {artist.form}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-end p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-sm line-clamp-3">{artist.bio}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4
          className={`font-heading text-lg font-bold mb-1 group-hover:text-saffron transition-colors ${
            isDark ? "text-offwhite" : "text-charcoal"
          }`}
        >
          {artist.artist}
        </h4>
        <p
          className={`text-sm ${
            isDark ? "text-offwhite/60" : "text-charcoal/60"
          }`}
        >
          {artist.time} • Day {artist.day}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isDark ? "shadow-[inset_0_0_30px_rgba(255,215,130,0.1)]" : ""
        }`}
      />
    </div>
  );
};

const Artists = ({ isDark, festivalData }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  // Extract unique artists from all days
  const allArtists =
    festivalData?.days
      ?.flatMap((day, dayIndex) =>
        day.events.map((event) => ({
          ...event,
          day: dayIndex + 1,
          date: day.date,
        }))
      )
      .filter(
        (event) =>
          !["Opening", "Closing", "Special", "Various"].includes(event.form)
      )
      .slice(0, 8) || [];

  return (
    <section
      id="artists"
      ref={elementRef}
      className={`relative py-20 md:py-32 overflow-hidden theme-transition ${
        isDark ? "bg-dark-bg" : "bg-offwhite"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${
              isDark ? "#C89B67" : "#2B2A7B"
            } 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
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
            Featured Performers
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Meet the{" "}
            <span className="gradient-text">Celebrities & Artists</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Award-winning maestros and rising stars bringing India's classical
            dance heritage to life.
          </p>
        </div>

        {/* Artists Grid - Horizontal scroll on mobile, grid on larger screens */}
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0">
          {allArtists.map((artist, index) => (
            <ArtistCard
              key={`${artist.artist}-${index}`}
              artist={artist}
              isDark={isDark}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#schedule"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-gradient-to-r from-saffron to-sandstone text-white hover:shadow-lg hover:shadow-saffron/30"
                : "bg-gradient-to-r from-indigo to-neon-indigo text-white hover:shadow-lg hover:shadow-indigo/30"
            }`}
          >
            View Full Schedule
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
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className={`absolute -bottom-32 -left-32 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-saffron/20" : "bg-indigo/10"
        }`}
      />
      <div
        className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl ${
          isDark ? "bg-neon-indigo/20" : "bg-saffron/10"
        }`}
      />
    </section>
  );
};

export default Artists;
