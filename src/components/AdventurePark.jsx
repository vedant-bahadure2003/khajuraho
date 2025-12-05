import { useState } from "react";
import { useIntersectionObserver } from "../hooks";

const AdventurePark = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });
  const [activeActivity, setActiveActivity] = useState(null);
  const [selectedTab, setSelectedTab] = useState("adventure");

  const tabs = [
    { id: "adventure", label: "Adventure Zone", icon: "🎢" },
    { id: "nature", label: "Nature Escapes", icon: "🌿" },
    { id: "heritage", label: "Heritage Tours", icon: "🏛️" },
  ];

  const activities = {
    adventure: [
      {
        id: 1,
        name: "Zipline",
        tagline: "High-velocity canopy traverse",
        duration: "30-45 mins",
        description:
          "Soar through the air on our 300m zipline with panoramic views of the Vindhya landscape. Perfect for thrill-seekers!",
        image:
          "https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&h=400&fit=crop",
        difficulty: "Moderate",
        ageGroup: "10+ years",
        price: "₹800",
        featured: true,
      },
      {
        id: 2,
        name: "ATV Ride",
        tagline: "Trail loops & quick laps",
        duration: "20-40 mins",
        description:
          "Navigate rugged terrain on powerful ATVs through forest trails and open fields. Multiple track options available.",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
        difficulty: "Easy-Hard",
        ageGroup: "16+ years",
        price: "₹1,200",
        featured: true,
      },
      {
        id: 3,
        name: "Rope Course",
        tagline: "Bridges & balance challenges",
        duration: "30-60 mins",
        description:
          "Test your balance and agility on suspended bridges, cargo nets, and wobbly platforms high above the ground.",
        image:
          "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=400&fit=crop",
        difficulty: "Moderate",
        ageGroup: "8+ years",
        price: "₹600",
        featured: false,
      },
      {
        id: 4,
        name: "Archery",
        tagline: "Beginner-friendly range",
        duration: "20-30 mins",
        description:
          "Learn traditional archery techniques from expert instructors. Compete with friends at our professional range.",
        image:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=400&fit=crop",
        difficulty: "Easy",
        ageGroup: "All ages",
        price: "₹400",
        featured: false,
      },
      {
        id: 5,
        name: "Rock Climbing",
        tagline: "Natural boulder walls",
        duration: "45-60 mins",
        description:
          "Scale natural rock formations with safety gear. Multiple routes for beginners to advanced climbers.",
        image:
          "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=500&h=400&fit=crop",
        difficulty: "Hard",
        ageGroup: "12+ years",
        price: "₹900",
        featured: false,
      },
      {
        id: 6,
        name: "Paintball",
        tagline: "Team combat arena",
        duration: "30-45 mins",
        description:
          "Engage in tactical battles across themed arenas. Full equipment provided with safety briefings.",
        image:
          "https://images.unsplash.com/photo-1560472355-536de3962603?w=500&h=400&fit=crop",
        difficulty: "Moderate",
        ageGroup: "14+ years",
        price: "₹700",
        featured: false,
      },
    ],
    nature: [
      {
        id: 7,
        name: "Panna Safari",
        tagline: "Tiger Reserve expedition",
        duration: "3-4 hours",
        description:
          "Explore Panna National Park, home to tigers, leopards, and 200+ bird species. Morning and evening safaris available.",
        image:
          "https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&h=400&fit=crop",
        difficulty: "Easy",
        ageGroup: "All ages",
        price: "₹2,500",
        featured: true,
      },
      {
        id: 8,
        name: "Raneh Falls",
        tagline: "Crystalline canyon wonder",
        duration: "2-3 hours",
        description:
          "Visit the stunning 30ft deep canyon with crystalline granite formations and seasonal waterfalls.",
        image:
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=500&h=400&fit=crop",
        difficulty: "Easy",
        ageGroup: "All ages",
        price: "₹150",
        featured: true,
      },
      {
        id: 9,
        name: "Pandav Falls",
        tagline: "Hidden jungle cascade",
        duration: "2-3 hours",
        description:
          "Trek to the mythical 30m waterfall in Panna where the Pandavas are said to have rested.",
        image:
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=500&h=400&fit=crop",
        difficulty: "Moderate",
        ageGroup: "All ages",
        price: "₹50",
        featured: false,
      },
      {
        id: 10,
        name: "Beni Sagar Dam",
        tagline: "Serene sunset views",
        duration: "1-2 hours",
        description:
          "Enjoy boating and water sports at the 8km scenic dam. Perfect for photography and picnics.",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
        difficulty: "Easy",
        ageGroup: "All ages",
        price: "Free",
        featured: false,
      },
    ],
    heritage: [
      {
        id: 11,
        name: "Temple Tour",
        tagline: "UNESCO World Heritage walk",
        duration: "3-4 hours",
        description:
          "Guided tour of the magnificent Khajuraho temples with expert narration on architecture and sculptures.",
        image:
          "https://images.unsplash.com/photo-1590123796529-e5c9a5fa5c4e?w=500&h=400&fit=crop",
        difficulty: "Easy",
        ageGroup: "All ages",
        price: "₹600",
        featured: true,
      },
      {
        id: 12,
        name: "Sound & Light Show",
        tagline: "Evening temple illumination",
        duration: "1 hour",
        description:
          "Witness the temples come alive with a spectacular light show narrating the history of Chandela dynasty.",
        image:
          "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=500&h=400&fit=crop",
        difficulty: "Easy",
        ageGroup: "All ages",
        price: "₹250",
        featured: true,
      },
      {
        id: 13,
        name: "Ajaigarh Fort",
        tagline: "Chandela fortress trek",
        duration: "4-5 hours",
        description:
          "Trek to the hilltop fort at 688m with panoramic views of Vindhya ranges. Rich in Chandela history.",
        image:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=400&fit=crop",
        difficulty: "Moderate",
        ageGroup: "12+ years",
        price: "Free",
        featured: false,
      },
      {
        id: 14,
        name: "Old Town Walk",
        tagline: "Rural heritage experience",
        duration: "2-3 hours",
        description:
          "Explore rustic mud cottages, interact with locals, and experience authentic rural Indian lifestyle.",
        image:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&h=400&fit=crop",
        difficulty: "Easy",
        ageGroup: "All ages",
        price: "₹200",
        featured: false,
      },
    ],
  };

  const highlights = [
    { icon: "🛡️", text: "Full safety gear & trained instructors" },
    { icon: "👨‍👩‍👧‍👦", text: "Activities for all ages — family friendly" },
    { icon: "⏱️", text: "Typical duration 2-4 hours combined" },
    { icon: "🅿️", text: "Nearby parking & picnic areas" },
  ];

  const quickFacts = [
    { label: "Location", value: "Adventure Zone, near Khajuraho", icon: "📍" },
    { label: "Best Time", value: "Oct — Mar (cool)", icon: "🗓️" },
    { label: "Bring", value: "Comfortable shoes, sunscreen", icon: "🎒" },
  ];

  const currentActivities = activities[selectedTab] || [];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "moderate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "hard":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <section
      id="adventure"
      ref={elementRef}
      className={`relative py-20 md:py-32 overflow-hidden theme-transition ${
        isDark
          ? "bg-gradient-to-br from-dark-bg via-indigo/5 to-dark-bg"
          : "bg-gradient-to-br from-offwhite via-sandstone/30 to-offwhite"
      }`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div
          className={`absolute top-1/4 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse ${
            isDark ? "bg-saffron/10" : "bg-saffron/20"
          }`}
        />
        <div
          className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
            isDark ? "bg-indigo/10" : "bg-indigo/15"
          }`}
        />

        {/* Decorative dots pattern */}
        <div
          className={`absolute inset-0 ${isDark ? "opacity-5" : "opacity-10"}`}
          style={{
            backgroundImage: `radial-gradient(circle, ${
              isDark ? "#FFD782" : "#4A3C8C"
            } 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
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
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border ${
              isDark
                ? "bg-saffron/10 text-saffron border-saffron/30"
                : "bg-indigo/10 text-indigo border-indigo/30"
            }`}
          >
            <span className="text-lg">🎢</span>
            ADVENTURE PARK
          </div>

          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Thrills • Family •{" "}
            <span className="gradient-text">Outdoor Fun</span>
          </h2>
          <p
            className={`max-w-3xl mx-auto text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Big-zipline, rope courses, ATVs and family-friendly activities —
            image-first, short descriptions, quick scan.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              "6 Key Activities",
              "2-4 hrs typical",
              "All ages (safety gear)",
            ].map((stat, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  isDark
                    ? "bg-white/5 text-offwhite/80 border border-white/10"
                    : "bg-charcoal/5 text-charcoal/80 border border-charcoal/10"
                }`}
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedTab === tab.id
                  ? isDark
                    ? "bg-gradient-to-r from-saffron to-gold text-dark-bg shadow-lg shadow-saffron/25"
                    : "bg-gradient-to-r from-indigo to-indigo/80 text-white shadow-lg shadow-indigo/25"
                  : isDark
                  ? "bg-white/5 text-offwhite/70 hover:bg-white/10 border border-white/10"
                  : "bg-white text-charcoal/70 hover:bg-charcoal/5 border border-charcoal/10"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Activities Grid - Takes 2 columns */}
          <div className="lg:col-span-2">
            {/* Horizontal scroll on mobile, grid on larger screens */}
            <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0">
              {currentActivities.slice(0, 4).map((activity) => (
                <div
                  key={activity.id}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex-shrink-0 w-[85vw] sm:w-auto snap-center ${
                    activity.featured ? "sm:col-span-1" : ""
                  } ${
                    isDark
                      ? "bg-white/5 border border-white/10 hover:border-saffron/50"
                      : "bg-white border border-charcoal/10 hover:border-indigo/50"
                  }`}
                  style={{ minHeight: "280px" }}
                  onMouseEnter={() => setActiveActivity(activity.id)}
                  onMouseLeave={() => setActiveActivity(null)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        activeActivity === activity.id
                          ? "scale-110"
                          : "scale-100"
                      }`}
                      loading="lazy"
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        isDark
                          ? "bg-gradient-to-t from-dark-bg via-dark-bg/70 to-transparent"
                          : "bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent"
                      }`}
                    />
                  </div>

                  {/* Activity Label Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-sm font-bold backdrop-blur-sm ${
                      isDark
                        ? "bg-saffron/90 text-dark-bg"
                        : "bg-white/90 text-indigo"
                    }`}
                  >
                    {activity.name}
                  </div>

                  {/* Difficulty Badge */}
                  <div
                    className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-medium border ${getDifficultyColor(
                      activity.difficulty
                    )}`}
                  >
                    {activity.difficulty}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium mb-1">
                      {activity.tagline}
                    </p>
                    <p className="text-white/60 text-sm flex items-center gap-2">
                      <span>⏱️</span>
                      {activity.duration}
                    </p>

                    {/* Expanded content on hover */}
                    <div
                      className={`mt-3 pt-3 border-t border-white/20 transition-all duration-500 ${
                        activeActivity === activity.id
                          ? "opacity-100 max-h-40 translate-y-0"
                          : "opacity-0 max-h-0 translate-y-4 overflow-hidden"
                      }`}
                    >
                      <p className="text-white/70 text-sm mb-2 line-clamp-2">
                        {activity.description}
                      </p>
                      <div className="flex items-center justify-between">
                        {/* <span className="text-saffron font-bold">
                          {activity.price}
                        </span> */}
                        <span className="text-white/50 text-xs">
                          {activity.ageGroup}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More Activities Row */}
            {currentActivities.length > 4 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {currentActivities.slice(4).map((activity) => (
                  <div
                    key={activity.id}
                    className={`p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                      isDark
                        ? "bg-white/5 border border-white/10 hover:border-saffron/30"
                        : "bg-white border border-charcoal/10 hover:border-indigo/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                          isDark ? "bg-saffron/20" : "bg-indigo/10"
                        }`}
                      >
                        {selectedTab === "adventure"
                          ? "🎯"
                          : selectedTab === "nature"
                          ? "🌊"
                          : "🏰"}
                      </div>
                      <div>
                        <h4
                          className={`font-medium text-sm ${
                            isDark ? "text-offwhite" : "text-charcoal"
                          }`}
                        >
                          {activity.name}
                        </h4>
                        <p
                          className={`text-xs ${
                            isDark ? "text-offwhite/50" : "text-charcoal/50"
                          }`}
                        >
                          {activity.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar - Highlights & Quick Facts */}
          <div className="space-y-6">
            {/* Highlights Card */}
            <div
              className={`p-6 rounded-2xl ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-charcoal/10"
              }`}
            >
              <h3
                className={`font-bold text-lg mb-4 ${
                  isDark ? "text-offwhite" : "text-charcoal"
                }`}
              >
                Highlights
              </h3>
              <div className="space-y-3">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <p
                      className={`text-sm ${
                        isDark ? "text-offwhite/70" : "text-charcoal/70"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p
                  className={`text-xs mb-3 ${
                    isDark ? "text-offwhite/50" : "text-charcoal/50"
                  }`}
                >
                  Available Slots
                </p>
                <div className="flex gap-2">
                  {["Morning", "Afternoon", "Evening"].map((slot) => (
                    <span
                      key={slot}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-indigo/20 text-indigo-300 border border-indigo/30"
                          : "bg-indigo/10 text-indigo border border-indigo/20"
                      }`}
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div
              className={`p-6 rounded-2xl ${
                isDark
                  ? "bg-gradient-to-br from-saffron/10 to-gold/5 border border-saffron/20"
                  : "bg-gradient-to-br from-indigo/10 to-saffron/5 border border-indigo/20"
              }`}
            >
              <h3
                className={`font-bold text-lg mb-4 ${
                  isDark ? "text-gold" : "text-indigo"
                }`}
              >
                Quick Facts
              </h3>
              <div className="space-y-4">
                {quickFacts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg">{fact.icon}</span>
                    <div>
                      <p
                        className={`text-xs ${
                          isDark ? "text-offwhite/50" : "text-charcoal/50"
                        }`}
                      >
                        {fact.label}
                      </p>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-offwhite" : "text-charcoal"
                        }`}
                      >
                        {fact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-saffron to-gold text-dark-bg hover:shadow-lg hover:shadow-saffron/25"
                  : "bg-gradient-to-r from-indigo to-indigo/80 text-white hover:shadow-lg hover:shadow-indigo/25"
              }`}
            >
              Book Adventure Package
            </button>
          </div>
        </div>

        {/* Bottom Info Banner */}
        {/* <div
          className={`mt-12 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 delay-500 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${
            isDark
              ? "bg-white/5 border border-white/10"
              : "bg-charcoal/5 border border-charcoal/10"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                isDark ? "bg-saffron/20" : "bg-indigo/10"
              }`}
            >
              🎟️
            </div>
            <div>
              <h4
                className={`font-bold ${
                  isDark ? "text-offwhite" : "text-charcoal"
                }`}
              >
                Festival Special Combo
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-offwhite/60" : "text-charcoal/60"
                }`}
              >
                Dance Festival + Adventure Package at 20% off during Feb 2025
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p
                className={`text-xs ${
                  isDark ? "text-offwhite/50" : "text-charcoal/50"
                }`}
              >
                Starting from
              </p>
              <p
                className={`text-2xl font-bold ${
                  isDark ? "text-saffron" : "text-indigo"
                }`}
              >
                ₹2,499
              </p>
            </div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium animate-pulse ${
                isDark
                  ? "bg-green-500/20 text-green-400"
                  : "bg-green-500/20 text-green-600"
              }`}
            >
              Limited Offer
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AdventurePark;
