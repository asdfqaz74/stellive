"use client";

import { useEffect } from "react";
import { register } from "swiper/element/bundle";

export function useSwiper() {
  useEffect(() => {
    register();
  }, []);
}
