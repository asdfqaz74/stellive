import Image from "next/image";
import classNames from "classnames";

export default function HomeStar({ className, ...restProps }) {
  const containerClass = classNames(
    "flex flex-col items-center gap-4",
    className
  );

  return (
    <div
      className={`animate-fade-up animate-once animate-duration-1000 animate-ease-in ${containerClass}`}
      {...restProps}
    >
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
          src="/main_news.png"
          alt=""
          width={2025}
          height={1271}
          className="object-cover"
        />
      </div>
    </div>
  );
}
