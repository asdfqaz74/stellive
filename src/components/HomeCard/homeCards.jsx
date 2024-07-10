"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import HomeCard from "./homeCard";

export default function HomeCards() {
  const elementRef = useIntersectionObserver({ threshold: 0.5 });
  return (
    <div
      ref={elementRef}
      className="flex items-center justify-center gap-x-24 mt-10 opacity-0"
    >
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </div>
  );
}
