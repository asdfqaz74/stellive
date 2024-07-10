"use client";

import Image from "next/image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function HomeStar({ className, img, ...restProps }) {
  const elementRef = useIntersectionObserver({ threshold: 0.5 });

  const containerClass = `flex flex-col items-center gap-4 opacity-0 ${className}`;

  return (
    <div ref={elementRef} className={`${containerClass}`} {...restProps}>
      <div className="w-16">
        <Image
          src="/main_star1.png"
          alt=""
          width={2025}
          height={1271}
          className="object-cover"
        />
      </div>
      <div className="w-52">
        <Image
          src={img}
          alt=""
          width={2025}
          height={1271}
          className="object-cover"
        />
      </div>
      <div className="w-36">
        <Image
          src="/stelliveText.png"
          alt=""
          width={2025}
          height={1271}
          className="object-cover"
        />
      </div>
    </div>
  );
}
