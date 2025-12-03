import { useState, useEffect } from "react";

export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("khajuraho-reduced-motion");
      if (stored) return stored === "true";
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (reducedMotion) {
      root.classList.add("reduced-motion");
    } else {
      root.classList.remove("reduced-motion");
    }
    localStorage.setItem("khajuraho-reduced-motion", reducedMotion.toString());
  }, [reducedMotion]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e) => {
      const stored = localStorage.getItem("khajuraho-reduced-motion");
      if (!stored) {
        setReducedMotion(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleReducedMotion = () => {
    setReducedMotion((prev) => !prev);
  };

  return { reducedMotion, toggleReducedMotion };
};

export default useReducedMotion;
