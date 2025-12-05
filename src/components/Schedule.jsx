import { useState } from "react";
import { useIntersectionObserver } from "../hooks";

const Schedule = ({ isDark, festivalData }) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedForm, setSelectedForm] = useState("all");
  const [expandedEvent, setExpandedEvent] = useState(null);
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const days = festivalData?.days || [];
  const danceForms = festivalData?.danceForms || [];

  const allForms = [
    "all",
    ...new Set(days.flatMap((day) => day.events.map((event) => event.form))),
  ];

  const filteredEvents =
    selectedForm === "all"
      ? days[selectedDay]?.events || []
      : (days[selectedDay]?.events || []).filter(
          (event) => event.form === selectedForm
        );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section
      id="schedule"
      ref={elementRef}
      className={`relative py-20  overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-b from-dark-bg via-indigo/20 to-dark-bg"
          : "bg-gradient-to-b from-white via-indigo/5 to-white"
      }`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl ${
            isDark ? "bg-neon-indigo/10" : "bg-indigo/10"
          }`}
        />
        <div
          className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl ${
            isDark ? "bg-saffron/10" : "bg-saffron/10"
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
              isDark
                ? "bg-neon-indigo/20 text-neon-indigo"
                : "bg-indigo/10 text-indigo"
            }`}
          >
            7 Days of Magic
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Festival <span className="gradient-text">Schedule</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Experience a week of mesmerizing performances from India's finest
            classical dancers.
          </p>
        </div>

        {/* Day Selector - Horizontal Scroll */}
        <div
          className={`mb-8 transition-all duration-700 delay-100 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`flex-shrink-0 px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedDay === index
                    ? isDark
                      ? "bg-gradient-to-r from-saffron to-sandstone text-white shadow-lg shadow-saffron/30"
                      : "bg-gradient-to-r from-indigo to-neon-indigo text-white shadow-lg shadow-indigo/30"
                    : isDark
                    ? "bg-white/5 text-offwhite/70 hover:bg-white/10 hover:text-offwhite"
                    : "bg-white text-charcoal/70 hover:bg-indigo/5 hover:text-charcoal shadow"
                }`}
                aria-pressed={selectedDay === index}
              >
                <span className="block text-xs uppercase tracking-wide opacity-70">
                  {formatDate(day.date)}
                </span>
                <span className="block text-sm md:text-base mt-0.5">
                  {day.dayName.split(" - ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dance Form Filter Chips */}
        <div
          className={`mb-8 transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap gap-2">
            {allForms.map((form) => (
              <button
                key={form}
                onClick={() => setSelectedForm(form)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedForm === form
                    ? isDark
                      ? "bg-saffron text-white"
                      : "bg-indigo text-white"
                    : isDark
                    ? "bg-white/10 text-offwhite/70 hover:bg-white/20 hover:text-offwhite border border-white/10"
                    : "bg-gray-100 text-charcoal/70 hover:bg-gray-200 hover:text-charcoal"
                }`}
                aria-pressed={selectedForm === form}
              >
                {form === "all" ? "All Forms" : form}
              </button>
            ))}
          </div>
        </div>

        {/* Day Title */}
        <div
          className={`mb-6 transition-all duration-700 delay-300 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className={`font-heading text-2xl font-bold ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            {days[selectedDay]?.dayName}
          </h3>
          <p
            className={`text-sm mt-1 ${
              isDark ? "text-offwhite/60" : "text-charcoal/60"
            }`}
          >
            {formatDate(days[selectedDay]?.date)} • {filteredEvents.length}{" "}
            Events
          </p>
        </div>

        {/* Events Accordion */}
        <div className="space-y-4">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                hasIntersected
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:border-saffron/30"
                  : "bg-white shadow-lg hover:shadow-xl"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Event Header */}
              <button
                onClick={() =>
                  setExpandedEvent(expandedEvent === index ? null : index)
                }
                className="w-full p-4 md:p-6 flex items-center gap-4 text-left"
                aria-expanded={expandedEvent === index}
              >
                {/* Time Badge */}
                <div
                  className={`flex-shrink-0 w-20 md:w-24 text-center p-2 rounded-xl ${
                    isDark ? "bg-saffron/20" : "bg-indigo/10"
                  }`}
                >
                  <span
                    className={`block text-lg md:text-xl font-bold ${
                      isDark ? "text-saffron" : "text-indigo"
                    }`}
                  >
                    {event.time}
                  </span>
                </div>

                {/* Event Info */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4
                      className={`font-heading text-lg md:text-xl font-bold truncate ${
                        isDark ? "text-offwhite" : "text-charcoal"
                      }`}
                    >
                      {event.artist}
                    </h4>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-neon-indigo/20 text-neon-indigo"
                          : "bg-saffron/20 text-saffron"
                      }`}
                    >
                      {event.form}
                    </span>
                  </div>
                  <p
                    className={`text-sm line-clamp-1 ${
                      isDark ? "text-offwhite/60" : "text-charcoal/60"
                    }`}
                  >
                    {event.bio}
                  </p>
                </div>

                {/* Expand Icon */}
                <div
                  className={`flex-shrink-0 p-2 rounded-full transition-colors ${
                    isDark ? "bg-white/10" : "bg-gray-100"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedEvent === index ? "rotate-180" : ""
                    } ${isDark ? "text-offwhite" : "text-charcoal"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Expanded Content */}
              <div
                className={`accordion-content ${
                  expandedEvent === index ? "open" : ""
                }`}
              >
                <div>
                  <div
                    className={`px-4 md:px-6 pb-6 pt-2 border-t ${
                      isDark ? "border-white/10" : "border-gray-100"
                    }`}
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Artist Image Placeholder */}
                      <div
                        className={`aspect-video md:aspect-square rounded-xl overflow-hidden ${
                          isDark ? "bg-white/10" : "bg-gray-100"
                        }`}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={event.thumbnail}
                            alt={event.artist}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>

                      {/* Artist Details */}
                      <div className="md:col-span-2 space-y-4">
                        <p
                          className={`text-base ${
                            isDark ? "text-offwhite/80" : "text-charcoal/80"
                          }`}
                        >
                          {event.bio}
                        </p>

                        {/* Dance Form Info */}
                        {danceForms.find((f) => f.name === event.form) && (
                          <div
                            className={`p-4 rounded-xl ${
                              isDark ? "bg-white/5" : "bg-gray-50"
                            }`}
                          >
                            <h5
                              className={`font-semibold mb-1 ${
                                isDark ? "text-saffron" : "text-indigo"
                              }`}
                            >
                              About {event.form}
                            </h5>
                            <p
                              className={`text-sm ${
                                isDark ? "text-offwhite/60" : "text-charcoal/60"
                              }`}
                            >
                              {
                                danceForms.find((f) => f.name === event.form)
                                  ?.description
                              }
                            </p>
                            <p
                              className={`text-xs mt-2 ${
                                isDark ? "text-offwhite/40" : "text-charcoal/40"
                              }`}
                            >
                              Origin:{" "}
                              {
                                danceForms.find((f) => f.name === event.form)
                                  ?.origin
                              }
                            </p>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <button
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                              isDark
                                ? "bg-saffron/20 text-saffron hover:bg-saffron/30"
                                : "bg-indigo/10 text-indigo hover:bg-indigo/20"
                            }`}
                          >
                            🎬 Watch Highlights
                          </button>
                          <button
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                              isDark
                                ? "bg-white/10 text-offwhite hover:bg-white/20"
                                : "bg-gray-100 text-charcoal hover:bg-gray-200"
                            }`}
                          >
                            📅 Add to Calendar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div
            className={`text-center py-16 rounded-2xl ${
              isDark ? "bg-white/5" : "bg-gray-50"
            }`}
          >
            <svg
              className={`w-16 h-16 mx-auto mb-4 ${
                isDark ? "text-offwhite/30" : "text-gray-300"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className={isDark ? "text-offwhite/60" : "text-charcoal/60"}>
              No {selectedForm} performances on this day.
            </p>
            <button
              onClick={() => setSelectedForm("all")}
              className={`mt-4 px-4 py-2 rounded-full text-sm font-medium ${
                isDark ? "bg-saffron text-white" : "bg-indigo text-white"
              }`}
            >
              View All Events
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Schedule;
