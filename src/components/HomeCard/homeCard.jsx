import Image from "next/image";
import Link from "next/link";

export default function HomeCard() {
  return (
    <div>
      <span className="bg-gradient-to-b from-dark to-primary pr-6 pl-2 py-1 text-white font-semibold rounded-tr-3xl text-center text-lg">
        ✨ 2024.07.09
      </span>
      <Link href="https://stellive.me/news/2662">
        <div className="p-2 border w-96 flex flex-col items-center bg-white">
          <Image
            src="/ad1.jpg"
            alt=""
            width={368}
            height={207}
            className="object-cover"
          />
          <span className="mt-10 font-bold text-2xl leading-relaxed">
            &lt;스텔라이브 유니버스 1주년&gt; 아크릴 스탠드 판매 마감 임박!
          </span>
        </div>
      </Link>
    </div>
  );
}
