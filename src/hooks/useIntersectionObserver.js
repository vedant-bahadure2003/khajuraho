import { useState, useEffect, useRef, useCallback } from "react";

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  const handleIntersection = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      });
    },
    [hasIntersected]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || "0px",
      ...options,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [handleIntersection, options.threshold, options.rootMargin]);

  return { isIntersecting, hasIntersected, elementRef };
};

export default useIntersectionObserver;
