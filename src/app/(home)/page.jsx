import GlobalNav from "@/components/globalNav";
import HomeStar from "@/components/homeStar";
import SwiperAd from "@/components/swiperAd";

export default function HomePage() {
  return (
    <>
      <div>
        <SwiperAd />
      </div>
      <div>
        <HomeStar className="mt-10" />
      </div>
    </>
  );
}
