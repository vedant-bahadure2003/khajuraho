import { useState, useCallback, useMemo } from "react";
import { useIntersectionObserver } from "../../hooks";

// Video Card Component - defined outside to prevent recreation on each render
const VideoCard = ({
  video,
  index,
  size = "medium",
  isDark,
  onPlay,
  onOpenModal,
  isPlaying,
}) => {
  const sizeClasses = {
    large: "col-span-2 row-span-2",
    medium: "col-span-1 row-span-1",
    featured: "col-span-full lg:col-span-2",
  };

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
        sizeClasses[size] || sizeClasses.medium
      } ${
        isDark ? "shadow-lg shadow-black/30" : "shadow-lg shadow-gray-300/50"
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onClick={() => !isPlaying && onOpenModal(video)}
    >
      {/* Thumbnail or Embedded Video */}
      <div className="relative aspect-video w-full">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
              }}
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${
                isDark
                  ? "from-black/90 via-black/40 to-transparent"
                  : "from-charcoal/80 via-charcoal/30 to-transparent"
              } opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPlay(video.id);
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-saffron/90 hover:bg-saffron flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg shadow-saffron/30"
              >
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Duration Badge */}
            <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/70 text-white text-xs font-medium">
              {video.duration}
            </div>

            {/* Sponsor Badge */}
            {video.sponsor && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-saffron text-white text-xs font-semibold">
                {video.sponsor}
              </div>
            )}
          </>
        )}
      </div>

      {/* Content */}
      {!isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <h3 className="text-white font-bold text-sm md:text-base lg:text-lg line-clamp-2 mb-2 group-hover:text-saffron transition-colors">
            {video.title}
          </h3>
          <p className="text-white/70 text-xs md:text-sm line-clamp-2 mb-3 hidden sm:block">
            {video.description}
          </p>
          <div className="flex items-center gap-3 text-white/60 text-xs">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              {video.views}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// Section Header Component - defined outside to prevent recreation on each render
const SectionHeader = ({ section, isDark }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-3xl">{section.icon}</span>
      <h2
        className={`font-heading text-2xl md:text-3xl font-bold ${
          isDark ? "text-offwhite" : "text-charcoal"
        }`}
      >
        {section.title}
      </h2>
    </div>
    <p
      className={`text-sm md:text-base ${
        isDark ? "text-offwhite/60" : "text-charcoal/60"
      }`}
    >
      {section.subtitle}
    </p>
    <div className="mt-4 h-1 w-24 bg-gradient-to-r from-saffron to-sandstone rounded-full" />
  </div>
);

const VideoGallery = ({ isDark }) => {
  const { hasIntersected, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const [activeSection, setActiveSection] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Video sections with curated content
  const videoSections = useMemo(
    () => ({
      featured: {
        title: "Featured Highlights",
        subtitle: "Best moments from Khajuraho Dance Festival",
        icon: "🌟",
        videos: [
          {
            id: "f1",
            title: "Khajuraho Dance Festival 2024 - Official Highlights",
            thumbnail:
              "https://img.youtube.com/vi/XIQeNhriohY/maxresdefault.jpg",
            youtubeId: "XIQeNhriohY",
            duration: "8:45",
            views: "1.2M",
            category: "featured",
            description:
              "Experience the magic of India's premier classical dance festival",
          },
          {
            id: "f2",
            title: "Opening Ceremony - A Night of Grandeur",
            thumbnail:
              "https://img.youtube.com/vi/EseCtcZJdyY/maxresdefault.jpg",
            youtubeId: "EseCtcZJdyY",
            duration: "12:30",
            views: "856K",
            category: "featured",
            description:
              "The spectacular opening ceremony against the backdrop of ancient temples",
          },
          {
            id: "f3",
            title: "50 Years of Khajuraho Dance Festival",
            thumbnail:
              "https://img.youtube.com/vi/jYJ9qKlng8k/maxresdefault.jpg",
            youtubeId: "jYJ9qKlng8k",
            duration: "0:60",
            views: "2.1M",
            category: "featured",
            description:
              "A journey through five decades of cultural excellence",
          },
        ],
      },
      performances: {
        title: "Classical Dance Performances",
        subtitle: "Mesmerizing performances by legendary artists",
        icon: "💃",
        videos: [
          {
            id: "p1",
            title: "Bharatanatyam Performance at Khajuraho",
            thumbnail:
              "https://img.youtube.com/vi/LLbTCw-PGPQ/maxresdefault.jpg",
            youtubeId: "LLbTCw-PGPQ",
            duration: "18:45",
            views: "3.4M",
            category: "performances",
            description:
              "A soul-stirring Bharatanatyam performance at Khajuraho",
          },
          {
            id: "p2",
            title: "Kathak Brilliance - Classical Dance",
            thumbnail:
              "https://img.youtube.com/vi/6Ap74ucreRA/maxresdefault.jpg",
            youtubeId: "6Ap74ucreRA",
            duration: "22:10",
            views: "5.6M",
            category: "performances",
            description: "Tribute to the legendary Kathak maestro",
          },
          {
            id: "p3",
            title: "Odissi - The Dance of Sculptures",
            thumbnail:
              "https://img.youtube.com/vi/lpqmNsuGxNI/maxresdefault.jpg",
            youtubeId: "lpqmNsuGxNI",
            duration: "16:30",
            views: "1.8M",
            category: "performances",
            description: "Bringing temple sculptures to life through Odissi",
          },
          {
            id: "p4",
            title: "Kuchipudi - Grace in Motion",
            thumbnail:
              "https://img.youtube.com/vi/-pGX5znMk9Y/maxresdefault.jpg",
            youtubeId: "-pGX5znMk9Y",
            duration: "14:55",
            views: "980K",
            category: "performances",
            description: "Enchanting Kuchipudi under the starlit sky",
          },
          {
            id: "p5",
            title: "Mohiniyattam - The Dance of the Enchantress",
            thumbnail:
              "https://img.youtube.com/vi/m_avP6toESU/maxresdefault.jpg",
            youtubeId: "m_avP6toESU",
            duration: "19:20",
            views: "1.2M",
            category: "performances",
            description: "Kerala's classical dance form in its full glory",
          },
          {
            id: "p6",
            title: "Manipuri - Dance from the Valley",
            thumbnail:
              "https://img.youtube.com/vi/BUt3W9ZYUDI/maxresdefault.jpg",
            youtubeId: "BUt3W9ZYUDI",
            duration: "17:45",
            views: "750K",
            category: "performances",
            description: "The gentle and lyrical Manipuri dance tradition",
          },
        ],
      },
      behindScenes: {
        title: "Behind the Scenes",
        subtitle: "The making of a cultural extravaganza",
        icon: "🎬",
        videos: [
          {
            id: "b1",
            title: "Artist Preparations - The Journey Begins",
            thumbnail:
              "https://img.youtube.com/vi/Dy0nmAOSXdI/maxresdefault.jpg",
            youtubeId: "Dy0nmAOSXdI",
            duration: "10:15",
            views: "450K",
            category: "behindScenes",
            description:
              "How artists prepare for their performance at Khajuraho",
          },
          {
            id: "b2",
            title: "Stage Design & Light Setup",
            thumbnail:
              "https://img.youtube.com/vi/zGMxppcKIwg/maxresdefault.jpg",
            youtubeId: "zGMxppcKIwg",
            duration: "0:60",
            views: "320K",
            category: "behindScenes",
            description:
              "Creating the perfect ambiance against ancient temples",
          },
          {
            id: "b3",
            title: "Costume & Makeup Artistry",
            thumbnail:
              "https://img.youtube.com/vi/Yj8CQIApkeQ/maxresdefault.jpg",
            youtubeId: "Yj8CQIApkeQ",
            duration: "0:60",
            views: "680K",
            category: "behindScenes",
            description:
              "The intricate art of classical dance makeup and costumes",
          },
        ],
      },
      sponsors: {
        title: "Our Sponsors & Partners",
        subtitle: "Making the festival possible",
        icon: "🤝",
        videos: [
          {
            id: "s1",
            title: "MP Tourism - Incredible Madhya Pradesh",
            thumbnail:
              "https://img.youtube.com/vi/zh5GYlhugJk/maxresdefault.jpg",
            youtubeId: "zh5GYlhugJk",
            duration: "3:45",
            views: "2.8M",
            category: "sponsors",
            description: "Discover the heart of incredible India",
            sponsor: "MP Tourism",
          },
          {
            id: "s2",
            title: "Festival Partners - Cultural Journey",
            thumbnail:
              "https://img.youtube.com/vi/4vz5tTrY-nQ/maxresdefault.jpg",
            youtubeId: "4vz5tTrY-nQ",
            duration: "2:30",
            views: "1.5M",
            category: "sponsors",
            description: "Official partners of the festival",
            sponsor: "Partners",
          },
          {
            id: "s3",
            title: "Supporting Indian Classical Arts",
            thumbnail:
              "https://img.youtube.com/vi/v1U9tbhny7Y/maxresdefault.jpg",
            youtubeId: "v1U9tbhny7Y",
            duration: "0:60",
            views: "980K",
            category: "sponsors",
            description: "Proud sponsor of Indian classical arts",
            sponsor: "Sponsor",
          },
        ],
      },
      interviews: {
        title: "Artist Interviews",
        subtitle: "Conversations with dance legends",
        icon: "🎤",
        videos: [
          {
            id: "i1",
            title: "In Conversation with Classical Dancers",
            thumbnail:
              "https://img.youtube.com/vi/1d_1mshKJiI/maxresdefault.jpg",
            youtubeId: "1d_1mshKJiI",
            duration: "35:20",
            views: "890K",
            category: "interviews",
            description: "Padma Vibhushan dancer shares her journey",
          },
          {
            id: "i2",
            title: "Artists on Bharatanatyam & Tradition",
            thumbnail:
              "https://img.youtube.com/vi/zmt-i5onGIU/maxresdefault.jpg",
            youtubeId: "zmt-i5onGIU",
            duration: "28:15",
            views: "1.5M",
            category: "interviews",
            description: "The legendary dancer talks about her art",
          },
          {
            id: "i3",
            title: "Young Artists - Future of Classical Dance",
            thumbnail:
              "https://img.youtube.com/vi/BRwga3ECY_E/maxresdefault.jpg",
            youtubeId: "BRwga3ECY_E",
            duration: "0:60",
            views: "450K",
            category: "interviews",
            description: "New generation keeping traditions alive",
          },
        ],
      },
      celebrities: {
        title: "Celebrity Interviews & Appearances",
        subtitle: "Bollywood stars celebrating Indian classical arts",
        icon: "⭐",
        videos: [
          {
            id: "c4",
            title: "Celebrity Dance Performance - Viral Short",
            thumbnail:
              "https://img.youtube.com/vi/Z1lNNLXaGQg/maxresdefault.jpg",
            youtubeId: "Z1lNNLXaGQg",
            duration: "0:60",
            views: "2.5M",
            category: "celebrities",
            description:
              "A viral dance moment showcasing Bollywood meets classical",
          },
          {
            id: "c5",
            title: "Behind the Glamour - Celebrity Dance Moments",
            thumbnail:
              "https://img.youtube.com/vi/9J0KhCv2pjw/maxresdefault.jpg",
            youtubeId: "9J0KhCv2pjw",
            duration: "0:60",
            views: "1.8M",
            category: "celebrities",
            description:
              "Exclusive glimpse into celebrity performances and rehearsals",
          },
          {
            id: "c6",
            title: "Stars & Classical Dance - A Beautiful Tribute",
            thumbnail:
              "https://img.youtube.com/vi/HSgXmT3aDXM/maxresdefault.jpg",
            youtubeId: "HSgXmT3aDXM",
            duration: "4:30",
            views: "3.2M",
            category: "celebrities",
            description:
              "Bollywood celebrities paying tribute to Indian classical dance forms",
          },
        ],
      },
    }),
    []
  );

  const sectionFilters = [
    { id: "all", label: "All Videos", icon: "✨" },
    { id: "featured", label: "Featured", icon: "🌟" },
    { id: "performances", label: "Performances", icon: "💃" },
    { id: "celebrities", label: "Celebrities", icon: "⭐" },
    { id: "behindScenes", label: "Behind Scenes", icon: "🎬" },
    { id: "sponsors", label: "Sponsors", icon: "🤝" },
    { id: "documentary", label: "Documentaries", icon: "🎥" },
    { id: "interviews", label: "Interviews", icon: "🎤" },
  ];

  const getAllVideos = useCallback(() => {
    return Object.values(videoSections).flatMap((section) => section.videos);
  }, [videoSections]);

  const getFilteredVideos = useCallback(() => {
    if (activeSection === "all") {
      return getAllVideos();
    }
    return videoSections[activeSection]?.videos || [];
  }, [activeSection, videoSections, getAllVideos]);

  // Compute currently selected section object (null for "all") to avoid
  // accessing undefined properties in the JSX render path.
  const currentSection = useMemo(() => {
    return activeSection === "all"
      ? null
      : videoSections[activeSection] || null;
  }, [activeSection, videoSections]);

  const openVideoModal = useCallback((video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeVideoModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedVideo(null);
    setPlayingVideoId(null);
    document.body.style.overflow = "auto";
  }, []);

  const handlePlayInline = useCallback((videoId) => {
    setPlayingVideoId(videoId);
  }, []);

  return (
    <section
      id="video-gallery"
      ref={elementRef}
      className={`py-16  transition-colors duration-300 ${
        isDark ? "bg-dark-bg" : "bg-offwhite"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-2xl">🎬</span>
            <span
              className={`text-sm font-medium ${
                isDark ? "text-offwhite" : "text-charcoal"
              }`}
            >
              Video Gallery
            </span>
          </div>
          <h1
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? "text-offwhite" : "text-charcoal"
            }`}
          >
            Relive the <span className="gradient-text">Magic</span>
          </h1>
          <p
            className={`max-w-2xl mx-auto text-base md:text-lg ${
              isDark ? "text-offwhite/70" : "text-charcoal/70"
            }`}
          >
            Experience the grandeur of Khajuraho Dance Festival through our
            curated video collection
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-12 transition-all duration-700 delay-200 ${
            hasIntersected
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {sectionFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveSection(filter.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeSection === filter.id
                  ? "bg-gradient-to-r from-saffron to-sandstone text-white shadow-lg shadow-saffron/30"
                  : isDark
                  ? "bg-white/5 text-offwhite/70 hover:bg-white/10 hover:text-offwhite"
                  : "bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10 hover:text-charcoal"
              }`}
            >
              <span>{filter.icon}</span>
              <span className="hidden sm:inline">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Video Grid - Show All Sections or Filtered */}
        {activeSection === "all" ? (
          // Show all sections
          <div className="space-y-16">
            {Object.entries(videoSections).map(
              ([key, section], sectionIndex) => (
                <div
                  key={key}
                  className={`transition-all duration-700 ${
                    hasIntersected
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${sectionIndex * 150}ms` }}
                >
                  <SectionHeader section={section} isDark={isDark} />

                  {/* Featured Section - Special Layout */}
                  {key === "featured" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                      {section.videos.map((video, index) => (
                        <VideoCard
                          key={video.id}
                          video={video}
                          index={index}
                          size={index === 0 ? "featured" : "medium"}
                          isDark={isDark}
                          onPlay={handlePlayInline}
                          onOpenModal={openVideoModal}
                          isPlaying={playingVideoId === video.id}
                        />
                      ))}
                    </div>
                  ) : key === "sponsors" ? (
                    // Sponsors Section - Special Styling
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      {section.videos.map((video, index) => (
                        <div
                          key={video.id}
                          className={`relative rounded-2xl overflow-hidden p-1 ${
                            isDark
                              ? "bg-gradient-to-br from-saffron/20 to-sandstone/20"
                              : "bg-gradient-to-br from-saffron/30 to-sandstone/30"
                          }`}
                        >
                          <VideoCard
                            video={video}
                            index={index}
                            isDark={isDark}
                            onPlay={handlePlayInline}
                            onOpenModal={openVideoModal}
                            isPlaying={playingVideoId === video.id}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Regular Grid
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {section.videos.map((video, index) => (
                        <VideoCard
                          key={video.id}
                          video={video}
                          index={index}
                          isDark={isDark}
                          onPlay={handlePlayInline}
                          onOpenModal={openVideoModal}
                          isPlaying={playingVideoId === video.id}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        ) : (
          // Show filtered section
          <div
            className={`transition-all duration-700 delay-300 ${
              hasIntersected
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {currentSection && (
              <SectionHeader section={currentSection} isDark={isDark} />
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {getFilteredVideos().map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  index={index}
                  isDark={isDark}
                  onPlay={handlePlayInline}
                  onOpenModal={openVideoModal}
                  isPlaying={playingVideoId === video.id}
                />
              ))}
            </div>
          </div>
        )}

        {/* Video Count */}
        <div
          className={`text-center mt-12 ${
            isDark ? "text-offwhite/50" : "text-charcoal/50"
          }`}
        >
          <p className="text-sm">Showing {getFilteredVideos().length} videos</p>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
          onClick={closeVideoModal}
        >
          {/* Close Button */}
          <button
            onClick={closeVideoModal}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
            aria-label="Close video"
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

          {/* Video Container */}
          <div
            className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
              title={selectedVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-center">
            <h3 className="text-white font-bold text-lg md:text-xl mb-2">
              {selectedVideo.title}
            </h3>
            <p className="text-white/60 text-sm">{selectedVideo.description}</p>
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-20 left-4 md:left-8 w-20 h-20 border-l-2 border-t-2 border-saffron/20 rounded-tl-3xl pointer-events-none" />
      <div className="absolute bottom-8 right-4 md:right-8 w-20 h-20 border-r-2 border-b-2 border-saffron/20 rounded-br-3xl pointer-events-none" />
    </section>
  );
};

export default VideoGallery;
