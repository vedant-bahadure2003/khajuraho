import React, { useState, useEffect } from "react";

const Chetan = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const boxes = [
    {
      id: 1,
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      delay: "0s",
      icon: "✦",
    },
    {
      id: 2,
      gradient: "from-cyan-400 via-teal-500 to-emerald-500",
      delay: "0.2s",
      icon: "◈",
    },
    {
      id: 3,
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      delay: "0.4s",
      icon: "❖",
    },
    {
      id: 4,
      gradient: "from-amber-400 via-orange-500 to-red-500",
      delay: "0.6s",
      icon: "✧",
    },
  ];

  const [particles] = useState(() =>
    Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }))
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Orbs Background */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl opacity-30 animate-pulse"
          style={{
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
            background: `linear-gradient(135deg, ${
              [
                "#8b5cf6",
                "#06b6d4",
                "#ec4899",
                "#f59e0b",
                "#10b981",
                "#6366f1",
              ][i]
            }, transparent)`,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen p-8">
        {/* Title with Glitch Effect */}
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 mb-16 text-center relative">
          <span className="animate-pulse">Creative Boxes</span>
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-30 blur-xl -z-10 animate-pulse"></div>
        </h1>

        {/* Interactive Boxes Grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          style={{
            transform: `perspective(1000px) rotateX(${
              mousePosition.y * 0.5
            }deg) rotateY(${mousePosition.x * 0.5}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {boxes.map((box) => (
            <div
              key={box.id}
              className="relative group cursor-pointer"
              style={{ animationDelay: box.delay }}
              onMouseEnter={() => setIsHovered(box.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-4 bg-gradient-to-r ${box.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-500`}
              ></div>

              {/* Main Box */}
              <div
                className={`relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br ${
                  box.gradient
                } p-[2px] transform transition-all duration-500 ease-out
                  ${
                    isHovered === box.id
                      ? "scale-110 rotate-12"
                      : "hover:scale-105"
                  }
                  animate-float`}
                style={{
                  animationDelay: box.delay,
                  boxShadow:
                    isHovered === box.id
                      ? "0 25px 50px -12px rgba(139, 92, 246, 0.5)"
                      : "0 10px 40px -10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Inner Glass Effect */}
                <div className="w-full h-full rounded-2xl bg-slate-900/80 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div
                      className={`absolute inset-[-100%] bg-gradient-to-r ${box.gradient} animate-spin-slow opacity-50`}
                    ></div>
                  </div>

                  {/* Inner Content */}
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <span
                      className="text-3xl md:text-4xl lg:text-5xl animate-bounce"
                      style={{ animationDelay: box.delay }}
                    >
                      {box.icon}
                    </span>
                    <span className="text-white/80 font-medium text-sm tracking-wider">
                      BOX {box.id}
                    </span>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                </div>
              </div>

              {/* Reflection */}
              <div
                className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-r ${box.gradient} rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-float-particle opacity-60"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          <button className="relative px-8 py-4 bg-slate-900 rounded-full text-white font-semibold tracking-wider hover:bg-slate-800 transition-colors">
            ✨ Hover the boxes! ✨
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-100px) translateX(20px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Chetan;
