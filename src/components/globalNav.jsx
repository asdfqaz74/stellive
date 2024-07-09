import Image from "next/image";
import Link from "next/link";

export default function GlobalNav() {
  return (
    <nav className="bg-light rounded shadow-lg justify-center items-center flex h-[7rem] px-4">
      <ul className="font-bold text-lg flex items-center gap-x-36">
        <li className="relative w-40 h-auto">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="logo"
              layout="intrinsic"
              width={236}
              height={54}
              objectFit="cover"
            />
          </Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link className="" href="/">
            HOME
          </Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link href="/talents">TALENTS</Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link href="/music">MUSIC</Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
