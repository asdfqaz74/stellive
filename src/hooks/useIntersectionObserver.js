"use client";

import { useEffect, useRef } from "react";

export default function useIntersectionObserver(options) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-up",
          "animate-once",
          "animate-duration-1000",
          "animate-ease-in",
          "opacity-100"
        );
        entry.target.classList.remove("opacity-0");
      }
    }, options);

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return elementRef;
}
