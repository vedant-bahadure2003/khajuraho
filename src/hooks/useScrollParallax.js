import { useState, useEffect, useRef, useCallback } from "react";

export const useScrollParallax = (speed = 0.5, maxOffset = 8) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          const scrolled = window.scrollY;
          const elementTop = rect.top + scrolled;
          const relativeScroll = scrolled - elementTop;
          const calculatedOffset = Math.max(
            -maxOffset,
            Math.min(maxOffset, relativeScroll * speed * 0.1)
          );
          setOffset(calculatedOffset);
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [speed, maxOffset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { offset, elementRef };
};

export default useScrollParallax;
