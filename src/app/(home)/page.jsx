import HomeCards from '@/components/HomeCard/homeCards';
import HomeStar from '@/components/homeStar';
import SwiperAd from '@/components/swiperAd';
import MoreButton from '@/components/moreButton';

export default function HomePage() {
  return (
    <div className="bg-home-background">
      <SwiperAd />
      <HomeStar img={'/main_news.png'} className="mt-10" />
      <HomeCards />
      <MoreButton />
      <HomeStar img={'/main_music.png'} className="mt-20" />
      <HomeCards />
    </div>
  );
}
