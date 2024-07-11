'use client';

import Image from 'next/image';
import Link from 'next/link';
import { register } from 'swiper/element/bundle';

register();

export default function SwiperAd() {
  return (
    <swiper-container
      speed="1000"
      loop="true"
      pagination="true"
      autoplay='{"delay": 4000}'
    >
      <swiper-slide>
        <Link href="https://stellive.me/news/2652">
          <img src="/epicseven.jpg" alt="" />
        </Link>
      </swiper-slide>
      <swiper-slide>
        <Link href="https://www.youtube.com/watch?v=R_RAWjqdgTs">
          <img src="/supadopa.png" alt="" />
        </Link>
      </swiper-slide>
      <swiper-slide>
        <Link href="https://stellive.me/news/2441">
          <img src="/universe.png" alt="" />
        </Link>
      </swiper-slide>
    </swiper-container>
  );
}
