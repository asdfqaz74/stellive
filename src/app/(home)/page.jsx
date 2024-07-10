import HomeCards from "@/components/HomeCard/homeCards";
import HomeStar from "@/components/homeStar";
import SwiperAd from "@/components/swiperAd";

export default function HomePage() {
  return (
    <div className="bg-light">
      <SwiperAd />
      <HomeStar img={"/main_news.png"} className="mt-10" />
      <HomeCards />
      <HomeStar img={"/main_music.png"} className="mt-20" />
      <HomeCards />
    </div>
  );
}
