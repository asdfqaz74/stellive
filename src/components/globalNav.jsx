import Image from "next/image";
import Link from "next/link";

export default function GlobalNav() {
  return (
    <nav className="bg-light gap-10 rounded shadow-lg justify-center items-center flex h-[7rem] px-64 text-nav">
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
      <ul className="text-base font-semibold flex items-center justify-around flex-grow gap-4">
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link className="" href="/">
            ABOUT
          </Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link href="/talents">TALENTS</Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link href="/music">NEWS</Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link href="/contact">MUSIC</Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link href="/contact">GOODS</Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link href="/contact">GUIDELINE</Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-primary">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
