import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  User,
  Heart,
  Star,
  Navigation,
  Calendar,
  Award,
  Users,
  BookOpen,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { ESLint } from "eslint";

const BageshwarDham = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState("baba");

  // Distance calculation from Khajuraho to Bageshwar Dham (approx 115 km)
  const distance = "18 km";
  const travelTime = "30 minutes";

  const tabs = [
    { id: "baba", label: "Pandit Dhirendra Shastri", icon: User },
    { id: "about", label: "About", icon: BookOpen },
    { id: "visit", label: "Visit Info", icon: MapPin },
  ];

  return (
    <section
      className={`relative py-20 overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900"
          : "bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50"
      }`}
      id="bageshwar-dham"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 ${
            isDark ? "bg-orange-500/10" : "bg-orange-300/20"
          } rounded-full blur-3xl`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 ${
            isDark ? "bg-yellow-500/10" : "bg-yellow-300/20"
          } rounded-full blur-3xl`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles
              className={`w-8 h-8 ${
                isDark ? "text-orange-400" : "text-orange-600"
              }`}
            />
            <h2
              className={`text-5xl font-bold ${
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-amber-600 pb-2"
              }`}
            >
              Bageshwar Dham Sarkar
            </h2>
            <Sparkles
              className={`w-8 h-8 ${
                isDark ? "text-orange-400" : "text-orange-600"
              }`}
            />
          </div>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            A Divine Spiritual Sanctuary Near Khajuraho
          </p>
          <div
            className={`mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full ${
              isDark ? "bg-orange-500/20" : "bg-orange-200"
            }`}
          >
            <Navigation
              className={`w-5 h-5 ${
                isDark ? "text-orange-400" : "text-orange-700"
              }`}
            />
            <span
              className={`font-semibold ${
                isDark ? "text-orange-400" : "text-orange-700"
              }`}
            >
              Just {distance} from Khajuraho - Perfect Day Trip!
            </span>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div
            className={`inline-flex p-2 rounded-2xl ${
              isDark
                ? "bg-gray-800/60 border border-orange-500/20"
                : "bg-white shadow-lg border border-orange-200"
            }`}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? isDark
                      ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                      : "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                    : isDark
                    ? "text-gray-400 hover:text-orange-400"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`max-w-6xl mx-auto p-8 md:p-12 rounded-3xl ${
            isDark
              ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-orange-500/20"
              : "bg-white/90 border border-orange-200 shadow-2xl"
          } backdrop-blur-sm`}
        >
          {/* About Tab */}
          {activeTab === "about" && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left side - Content */}
                <div>
                  <h3
                    className={`text-3xl font-bold mb-6 ${
                      isDark ? "text-orange-400" : "text-orange-700"
                    }`}
                  >
                    About Bageshwar Dham
                  </h3>
                  <div className="space-y-4">
                    <p
                      className={`text-lg leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold text-orange-500">
                        Bageshwar Dham Sarkar
                      </span>{" "}
                      is a revered Hindu spiritual sanctuary located in Gada
                      village, Chhatarpur District, Madhya Pradesh. This sacred
                      temple is dedicated to{" "}
                      <span className="font-semibold">Lord Hanuman</span> (also
                      known as Bageshwar Balaji) and has become one of the most
                      prominent pilgrimage destinations in Central India.
                    </p>
                    <p
                      className={`text-lg leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      The Dham was established by Sannyasi Baba and has been
                      serving devotees for generations. The temple complex is
                      renowned for its powerful spiritual atmosphere and the
                      divine presence of Bageshwar Balaji Maharaj.
                    </p>
                  </div>
                </div>

                {/* Right side - Temple Image */}
                <div
                  className={`rounded-2xl overflow-hidden ${
                    isDark
                      ? "bg-gray-800/50 border border-orange-500/20"
                      : "bg-gray-100 border border-orange-200"
                  } h-full min-h-[300px] flex items-center justify-center`}
                >
                  {/* Add your temple image here */}
                  <img
                    src="https://bageshwardham.co.in/wp-content/uploads/2024/01/bageshwer-dham-pooja.jpg"
                    alt="Bageshwar Dham Temple"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl ${
                  isDark
                    ? "bg-orange-500/10 border border-orange-500/30"
                    : "bg-orange-50 border border-orange-200"
                }`}
              >
                <h4
                  className={`text-xl font-bold mb-4 ${
                    isDark ? "text-orange-400" : "text-orange-700"
                  }`}
                >
                  Divine Darbar (दिव्य दरबार)
                </h4>
                <p
                  className={`text-lg leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Every{" "}
                  <span className="font-semibold">Tuesday and Saturday</span>,
                  the sacred Divya Darbar takes place at Bageshwar Dham where
                  thousands of devotees gather for spiritual guidance,
                  blessings, and to experience divine healing. The atmosphere
                  during these gatherings is filled with devotion, prayer, and
                  spiritual energy.
                </p>
              </div>

              <div>
                <h4
                  className={`text-2xl font-bold mb-6 ${
                    isDark ? "text-orange-400" : "text-orange-700"
                  }`}
                >
                  Social Welfare Activities
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className={`p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-800/50 border border-orange-500/20"
                        : "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200"
                    }`}
                  >
                    <Heart
                      className={`w-10 h-10 mb-3 ${
                        isDark ? "text-orange-400" : "text-orange-600"
                      }`}
                    />
                    <h5
                      className={`text-lg font-bold mb-2 ${
                        isDark ? "text-orange-400" : "text-orange-700"
                      }`}
                    >
                      Annapurna Kitchen
                    </h5>
                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      Free food offerings arranged for devotees and followers,
                      ensuring no one goes hungry.
                    </p>
                  </div>
                  <div
                    className={`p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-800/50 border border-orange-500/20"
                        : "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200"
                    }`}
                  >
                    <Users
                      className={`w-10 h-10 mb-3 ${
                        isDark ? "text-orange-400" : "text-orange-600"
                      }`}
                    />
                    <h5
                      className={`text-lg font-bold mb-2 ${
                        isDark ? "text-orange-400" : "text-orange-700"
                      }`}
                    >
                      Mass Marriage Program
                    </h5>
                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      Annual function organizing marriages for poor and
                      destitute girls, providing them dignity and support.
                    </p>
                  </div>
                  <div
                    className={`p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-800/50 border border-orange-500/20"
                        : "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200"
                    }`}
                  >
                    <BookOpen
                      className={`w-10 h-10 mb-3 ${
                        isDark ? "text-orange-400" : "text-orange-600"
                      }`}
                    />
                    <h5
                      className={`text-lg font-bold mb-2 ${
                        isDark ? "text-orange-400" : "text-orange-700"
                      }`}
                    >
                      Vedic Gurukula
                    </h5>
                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      Establishing traditional Vedic education center to promote
                      ancient Vedic studies and Sanskrit learning.
                    </p>
                  </div>
                  <div
                    className={`p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-800/50 border border-orange-500/20"
                        : "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200"
                    }`}
                  >
                    <Award
                      className={`w-10 h-10 mb-3 ${
                        isDark ? "text-orange-400" : "text-orange-600"
                      }`}
                    />
                    <h5
                      className={`text-lg font-bold mb-2 ${
                        isDark ? "text-orange-400" : "text-orange-700"
                      }`}
                    >
                      Gau Seva (Cow Protection)
                    </h5>
                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      Dedicated cow protection and care program honoring the
                      sacred animals in Hindu tradition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Baba Dhirendra Krishna Shastri Tab */}
          {activeTab === "baba" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <div
                  className={`w-[80%] h-60 mx-auto mb-4 rounded-full ${
                    isDark
                      ? "bg-gradient-to-br from-orange-500/30 to-yellow-500/30"
                      : "bg-gradient-to-br from-orange-200 to-yellow-200"
                  } flex items-center justify-center`}
                >
                  <img
                    src="https://hindi.news24online.com/wp-content/uploads/2023/05/pandit-dhirendra-krishna-shastri-1.jpg"
                    alt="Bageshwar Dham Temple"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <h3
                  className={`text-3xl font-bold mb-2 ${
                    isDark ? "text-orange-400" : "text-orange-700"
                  }`}
                >
                  Pandit Dhirendra Krishna Shastri
                </h3>
                <p
                  className={`text-xl ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Peethadhishwar (Chief) of Bageshwar Dham
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4
                    className={`text-2xl font-bold mb-4 ${
                      isDark ? "text-orange-400" : "text-orange-700"
                    }`}
                  >
                    Early Life & Background
                  </h4>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Born on <span className="font-semibold">July 4, 1996</span>,
                    in{" "}
                    <span className="font-semibold">
                      Gada village, Chhatarpur district
                    </span>
                    , Madhya Pradesh, Pandit Dhirendra Krishna Shastri was
                    raised in a traditional Brahmin family. His father, Ram
                    Kripal Garg, worked as a priest, and his mother, Saroj Garg,
                    instilled in him deep spiritual values from an early age.
                  </p>
                </div>

                <div
                  className={`p-6 rounded-2xl ${
                    isDark
                      ? "bg-orange-500/10 border border-orange-500/30"
                      : "bg-orange-50 border border-orange-200"
                  }`}
                >
                  <h4
                    className={`text-xl font-bold mb-3 ${
                      isDark ? "text-orange-400" : "text-orange-700"
                    }`}
                  >
                    Humble Beginnings
                  </h4>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Despite growing up in poverty in a kutcha house, young
                    Dhirendra showed exceptional spiritual inclination. Even as
                    a child, he would narrate kathas (religious stories) to
                    villagers, demonstrating his natural gift for spiritual
                    discourse.
                  </p>
                </div>

                <div>
                  <h4
                    className={`text-2xl font-bold mb-4 ${
                      isDark ? "text-orange-400" : "text-orange-700"
                    }`}
                  >
                    Spiritual Journey
                  </h4>
                  <div className="space-y-4">
                    <p
                      className={`text-lg leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Pandit Dhirendra Krishna Shastri is a devoted disciple of
                      the renowned spiritual leader{" "}
                      <span className="font-semibold">
                        Jagadguru Rambhadracharya
                      </span>
                      . He has dedicated his life to preaching the sacred texts
                      of <span className="font-semibold">Ramcharitmanas</span>{" "}
                      and <span className="font-semibold">Shiva Purana</span>.
                    </p>
                    <p
                      className={`text-lg leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Following in the footsteps of his great-grandfather
                      (Sannyasi Baba), grandfather, and father, he became the
                      Peethadhishwar (chief) of Bageshwar Dham, continuing a
                      multi-generational legacy of spiritual service.
                    </p>
                  </div>
                </div>

                <div>
                  <h4
                    className={`text-2xl font-bold mb-4 ${
                      isDark ? "text-orange-400" : "text-orange-700"
                    }`}
                  >
                    Spiritual Practices & Teachings
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className={`p-6 rounded-2xl ${
                        isDark
                          ? "bg-gray-800/50 border border-orange-500/20"
                          : "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200"
                      }`}
                    >
                      <BookOpen
                        className={`w-10 h-10 mb-3 ${
                          isDark ? "text-orange-400" : "text-orange-600"
                        }`}
                      />
                      <h5
                        className={`text-lg font-bold mb-2 ${
                          isDark ? "text-orange-400" : "text-orange-700"
                        }`}
                      >
                        Spiritual Discourses
                      </h5>
                      <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                        Known for powerful interpretations of Ramcharitmanas and
                        Vedic scriptures, attracting millions of followers.
                      </p>
                    </div>
                    <div
                      className={`p-6 rounded-2xl ${
                        isDark
                          ? "bg-gray-800/50 border border-orange-500/20"
                          : "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200"
                      }`}
                    >
                      <Sparkles
                        className={`w-10 h-10 mb-3 ${
                          isDark ? "text-orange-400" : "text-orange-600"
                        }`}
                      />
                      <h5
                        className={`text-lg font-bold mb-2 ${
                          isDark ? "text-orange-400" : "text-orange-700"
                        }`}
                      >
                        Spiritual Guidance
                      </h5>
                      <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                        Provides spiritual counseling and blessings during the
                        Divine Darbar sessions, helping devotees find peace.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`p-6 rounded-2xl ${
                    isDark
                      ? "bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30"
                      : "bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-300"
                  }`}
                >
                  <h4
                    className={`text-xl font-bold mb-3 ${
                      isDark ? "text-orange-400" : "text-orange-700"
                    }`}
                  >
                    Digital Presence & Influence
                  </h4>
                  <p
                    className={`text-lg leading-relaxed mb-4 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    With over{" "}
                    <span className="font-semibold">7.5 million followers</span>{" "}
                    across social media platforms, including millions on YouTube
                    and Facebook, Pandit Shastri has brought ancient Hindu
                    teachings to the modern digital age, making spirituality
                    accessible to people worldwide.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        isDark ? "bg-gray-800/50" : "bg-white/80"
                      }`}
                    >
                      <span
                        className={`font-bold ${
                          isDark ? "text-orange-400" : "text-orange-700"
                        }`}
                      >
                        3.9M+
                      </span>{" "}
                      <span
                        className={isDark ? "text-gray-300" : "text-gray-600"}
                      >
                        YouTube Subscribers
                      </span>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        isDark ? "bg-gray-800/50" : "bg-white/80"
                      }`}
                    >
                      <span
                        className={`font-bold ${
                          isDark ? "text-orange-400" : "text-orange-700"
                        }`}
                      >
                        3.4M+
                      </span>{" "}
                      <span
                        className={isDark ? "text-gray-300" : "text-gray-600"}
                      >
                        Facebook Followers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Visit Info Tab */}
          {activeTab === "visit" && (
            <div className="space-y-8">
              <div>
                <h3
                  className={`text-3xl font-bold mb-6 ${
                    isDark ? "text-orange-400" : "text-orange-700"
                  }`}
                >
                  Plan Your Visit from Khajuraho
                </h3>
                <div
                  className={`p-6 rounded-2xl mb-6 ${
                    isDark
                      ? "bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30"
                      : "bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-300"
                  }`}
                >
                  <h4
                    className={`text-2xl font-bold mb-3 ${
                      isDark ? "text-orange-400" : "text-orange-700"
                    }`}
                  >
                    Why Combine Khajuraho & Bageshwar Dham?
                  </h4>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    While visiting the magnificent UNESCO World Heritage temples
                    of Khajuraho, enhance your spiritual journey by visiting
                    Bageshwar Dham, located just {distance} away. Experience the
                    perfect blend of historical architectural grandeur and
                    living spiritual tradition - all in the same region of
                    Madhya Pradesh!
                  </p>
                </div>
              </div>

              <div>
                <h4
                  className={`text-2xl font-bold mb-6 ${
                    isDark ? "text-orange-400" : "text-orange-700"
                  }`}
                >
                  Travel Information
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className={`p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-800/50 border border-orange-500/20"
                        : "bg-white border border-orange-200 shadow-lg"
                    }`}
                  >
                    <Navigation
                      className={`w-10 h-10 mb-4 ${
                        isDark ? "text-orange-400" : "text-orange-600"
                      }`}
                    />
                    <h5
                      className={`text-xl font-bold mb-3 ${
                        isDark ? "text-orange-400" : "text-orange-700"
                      }`}
                    >
                      By Road
                    </h5>
                    <p
                      className={`mb-3 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Distance:</span>{" "}
                      {distance}
                    </p>
                    <p
                      className={`mb-3 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Travel Time:</span>{" "}
                      {travelTime}
                    </p>
                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      Well-connected via NH44. Taxis and buses available from
                      Khajuraho. Easy day trip option for visitors.
                    </p>
                  </div>

                  <div
                    className={`p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-800/50 border border-orange-500/20"
                        : "bg-white border border-orange-200 shadow-lg"
                    }`}
                  >
                    <MapPin
                      className={`w-10 h-10 mb-4 ${
                        isDark ? "text-orange-400" : "text-orange-600"
                      }`}
                    />
                    <h5
                      className={`text-xl font-bold mb-3 ${
                        isDark ? "text-orange-400" : "text-orange-700"
                      }`}
                    >
                      Location
                    </h5>
                    <p
                      className={`mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Address:</span> Gada
                      Village
                    </p>
                    <p
                      className={`mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Chhatarpur District, Madhya Pradesh
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Bageshwar+Dham+Sarkar/@24.827046,79.7650321,12.66z/data=!4m6!3m5!1s0x3982b94225124e9b:0x5da7ca55f87cdc7a!8m2!3d24.8381303!4d79.8021981!16s%2Fg%2F11mk75fdzk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg ${
                        isDark
                          ? "bg-orange-500/20 hover:bg-orange-500/30 text-orange-400"
                          : "bg-orange-100 hover:bg-orange-200 text-orange-700"
                      } transition-colors duration-300`}
                    >
                      View on Google Maps
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div
                    className={`p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-800/50 border border-orange-500/20"
                        : "bg-white border border-orange-200 shadow-lg"
                    }`}
                  >
                    <Clock
                      className={`w-10 h-10 mb-4 ${
                        isDark ? "text-orange-400" : "text-orange-600"
                      }`}
                    />
                    <h5
                      className={`text-xl font-bold mb-3 ${
                        isDark ? "text-orange-400" : "text-orange-700"
                      }`}
                    >
                      Divine Darbar Timings
                    </h5>
                    <p
                      className={`mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Days:</span> Every Tuesday
                      & Saturday
                    </p>
                    <p
                      className={`mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Temple Hours:</span> Early
                      morning to evening
                    </p>
                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      Plan to arrive early on Darbar days for best experience.
                    </p>
                  </div>

                  <div
                    className={`p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-800/50 border border-orange-500/20"
                        : "bg-white border border-orange-200 shadow-lg"
                    }`}
                  >
                    <Calendar
                      className={`w-10 h-10 mb-4 ${
                        isDark ? "text-orange-400" : "text-orange-600"
                      }`}
                    />
                    <h5
                      className={`text-xl font-bold mb-3 ${
                        isDark ? "text-orange-400" : "text-orange-700"
                      }`}
                    >
                      Best Time to Visit
                    </h5>
                    <p
                      className={`mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">October to March:</span>{" "}
                      Pleasant weather, ideal for travel
                    </p>
                    <p
                      className={`mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Special Events:</span>{" "}
                      Hanuman Jayanti, Ram Navami
                    </p>
                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      Combine with your Khajuraho visit during festival season!
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-8 rounded-2xl ${
                  isDark
                    ? "bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border-2 border-orange-500/40"
                    : "bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-300"
                }`}
              >
                <h4
                  className={`text-2xl font-bold mb-4 ${
                    isDark ? "text-orange-400" : "text-orange-700"
                  }`}
                >
                  Suggested Itinerary
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isDark ? "bg-orange-500/30" : "bg-orange-300"
                      }`}
                    >
                      <span
                        className={`font-bold ${
                          isDark ? "text-orange-400" : "text-orange-800"
                        }`}
                      >
                        1
                      </span>
                    </div>
                    <p
                      className={`text-lg ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Morning:</span> Visit
                      Khajuraho temples at sunrise
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isDark ? "bg-orange-500/30" : "bg-orange-300"
                      }`}
                    >
                      <span
                        className={`font-bold ${
                          isDark ? "text-orange-400" : "text-orange-800"
                        }`}
                      >
                        2
                      </span>
                    </div>
                    <p
                      className={`text-lg ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Late Morning:</span> Drive
                      to Bageshwar Dham (2.5 hours)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isDark ? "bg-orange-500/30" : "bg-orange-300"
                      }`}
                    >
                      <span
                        className={`font-bold ${
                          isDark ? "text-orange-400" : "text-orange-800"
                        }`}
                      >
                        3
                      </span>
                    </div>
                    <p
                      className={`text-lg ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Afternoon:</span> Attend
                      Divine Darbar, temple darshan & prasad
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isDark ? "bg-orange-500/30" : "bg-orange-300"
                      }`}
                    >
                      <span
                        className={`font-bold ${
                          isDark ? "text-orange-400" : "text-orange-800"
                        }`}
                      >
                        4
                      </span>
                    </div>
                    <p
                      className={`text-lg ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold">Evening:</span> Return to
                      Khajuraho for sunset views
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl ${
                  isDark
                    ? "bg-orange-500/10 border border-orange-500/30"
                    : "bg-orange-50 border border-orange-200"
                }`}
              >
                <h4
                  className={`text-xl font-bold mb-3 ${
                    isDark ? "text-orange-400" : "text-orange-700"
                  }`}
                >
                  Visitor Tips
                </h4>
                <ul className="space-y-2">
                  <li
                    className={`flex items-start gap-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Dress modestly - traditional attire preferred for temple
                      visit
                    </span>
                  </li>
                  <li
                    className={`flex items-start gap-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Photography may be restricted in certain areas - respect
                      the rules
                    </span>
                  </li>
                  <li
                    className={`flex items-start gap-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Free accommodation (dharamshala) may be available for
                      devotees
                    </span>
                  </li>
                  <li
                    className={`flex items-start gap-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Carry water and light snacks for the journey</span>
                  </li>
                  <li
                    className={`flex items-start gap-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-orange-500 mt-1">•</span>
                    <span>
                      Visit on Tuesday or Saturday to experience the Divine
                      Darbar
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div
            className={`max-w-3xl mx-auto p-8 rounded-3xl ${
              isDark
                ? "bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/40"
                : "bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-300"
            }`}
          >
            <h3
              className={`text-3xl font-bold mb-4 ${
                isDark ? "text-orange-400" : "text-orange-700"
              }`}
            >
              Complete Your Spiritual Journey
            </h3>
            <p
              className={`text-lg mb-6 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Experience the architectural marvels of Khajuraho and the divine
              blessings of Bageshwar Dham in one unforgettable trip. Two sacred
              destinations, one incredible journey!
            </p>
            <a
              href="https://www.google.com/maps/dir/Khajuraho,+Madhya+Pradesh/Bageshwar+Dham+Sarkar/@24.827046,79.7650321,12.66z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Navigation className="w-6 h-6" />
              Get Directions from Khajuraho
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BageshwarDham;
