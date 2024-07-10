import HomeCards from "@/components/HomeCard/homeCards";
import HomeStar from "@/components/homeStar";
import SwiperAd from "@/components/swiperAd";

export default function HomePage() {
  return (
    <div className="bg-light">
      <SwiperAd />
      <HomeStar className="mt-10" />
      <HomeCards />
      <HomeStar className="mt-10" />
      <HomeCards />
    </div>
  );
}
