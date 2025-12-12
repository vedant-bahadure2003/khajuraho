import { useState, useEffect, useRef } from "react";

const LeadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);

  const scrollingAds = [
    "🎭 Talent Hunt 2025 - Win ₹5 Lakhs Prize Pool!",
    "🌟 Register Now for Khajuraho Dance Festival",
    "🎪 100+ Performance Slots Available",
    "✨ Perform at UNESCO World Heritage Site",
    "🏆 Get Discovered by Industry Experts",
    "📅 Festival Dates: Feb 20-26, 2025",
  ];

  // Check session storage and show popup after 3 seconds
  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem("leadPopupClosed");
    if (hasClosedPopup) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsMinimized(true);
  };

  const handleExpand = () => {
    setIsMinimized(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-3 right-0 z-50 
        transform transition-all duration-500 ease-out
        ${
          isMinimized
            ? "translate-x-[calc(100%-12px)]"
            : "translate-x-0 right-3"
        }
        ${isVisible ? "opacity-100" : "opacity-0"}
        sm:bottom-16
        w-[260px] max-w-[calc(100vw-1.5rem)]
        sm:w-[280px]
        md:w-[300px]`}
      style={{ right: isMinimized ? "0" : "12px" }}
    >
      {/* Slide-out Tab (visible when minimized) */}
      {isMinimized && (
        <div
          onClick={handleExpand}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full
            cursor-pointer group"
        >
          <div
            className="bg-gradient-to-b from-saffron via-orange-500 to-saffron 
            rounded-l-lg py-6  shadow-lg
            flex flex-col items-center justify-center gap-1
            hover:px-1 transition-all duration-200"
            style={{
              boxShadow: "-4px 0 15px rgba(255, 153, 51, 0.3)",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            <svg
              className="w-4 h-4 text-white mb-1 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-white text-[10px] font-bold tracking-wider">
              WATCH
            </span>
          </div>
        </div>
      )}

      {/* Main Popup Container */}
      <div
        className="relative rounded-xl overflow-hidden shadow-xl bg-white"
        style={{
          boxShadow:
            "0 15px 30px -8px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Top Ticker Bar */}
        <div className="bg-gradient-to-r from-saffron via-orange-500 to-saffron py-2 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...scrollingAds, ...scrollingAds].map((ad, index) => (
              <span
                key={index}
                className="text-white text-[10px] font-semibold mx-6 inline-block"
              >
                {ad}
              </span>
            ))}
          </div>
        </div>

        {/* Close/Minimize Button */}
        <button
          onClick={handleClose}
          className="absolute top-7 right-1.5 z-20 w-5 h-5 rounded-full 
            bg-black/50 hover:bg-black/70 shadow-md backdrop-blur-sm
            flex items-center justify-center transition-all duration-200
            hover:scale-110 group"
          aria-label="Minimize popup"
        >
          <svg
            className="w-2.5 h-2.5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Video Section */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-indigo/20 to-saffron/20 ">
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/1__BIceAvzQ?autoplay=1&mute=${
              isMuted ? 1 : 0
            }&loop=1&playlist=1__BIceAvzQ&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1`}
            title="Khajuraho Dance Festival Promo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Sound Control Button */}
          <div className="absolute bottom-1.5 right-1.5 flex gap-1">
            <button
              onClick={toggleMute}
              className="w-6 h-6 rounded-full bg-black/60 hover:bg-black/80 
                flex items-center justify-center transition-all duration-200
                backdrop-blur-sm"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
          </div>

          {/* Live Badge */}
          <div className="absolute top-1.5 left-1.5 flex items-center gap-1 bg-red-600 px-1.5 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            <span className="text-white text-[9px] font-bold">LIVE</span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Bottom Ticker Bar - Continuous Running Ads */}
        <div className="bg-gradient-to-r from-indigo via-neon-indigo to-indigo py-2 overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...scrollingAds, ...scrollingAds].map((ad, index) => (
              <span
                key={index}
                className="text-white text-[10px] font-semibold mx-6 inline-block"
              >
                {ad}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LeadPopup;
