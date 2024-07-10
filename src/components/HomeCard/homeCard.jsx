import Image from 'next/image';
import Link from 'next/link';

export default function HomeCard({ post }) {
  return (
    <div>
      <span className="bg-gradient-to-b from-dark to-primary pr-6 pl-2 py-1 text-white font-semibold rounded-tr-3xl text-center text-xl">
        ✨ 2024.07.09
      </span>
      <Link href={post.link}>
        <div className="p-2 border w-96 h-[25rem] flex flex-col items-center bg-white group">
          <div className="w-full overflow-hidden h-56 relative">
            <Image
              src={post.img}
              alt=""
              fill
              className="object-cover transition-transform ease-in-out duration-1000 group-hover:scale-110"
            />
          </div>
          <span className="mt-10 font-semiboldbold text-xl leading-relaxed mb-10 px-4">
            {post.title}
          </span>
        </div>
      </Link>
    </div>
  );
}
