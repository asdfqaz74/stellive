import Image from 'next/image';
import Link from 'next/link';

export default function HomeCard({ post }) {
  return (
    <div>
      <span className="bg-gradient-to-b from-dark to-primary pr-6 pl-2 py-1 text-white font-semibold rounded-tr-3xl text-center text-xl">
        ✨ 2024.07.09
      </span>
      <Link href={post.link}>
        <div className="p-2 border w-96 flex flex-col items-center bg-white group">
          <div className="w-full overflow-hidden">
            <Image
              src={post.img}
              alt=""
              width={368}
              height={207}
              className="object-cover transition-transform ease-in-out duration-1000 group-hover:scale-110"
            />
          </div>
          <span className="mt-10 font-bold text-2xl leading-relaxed mb-10 px-4">
            {post.title}
          </span>
        </div>
      </Link>
    </div>
  );
}
