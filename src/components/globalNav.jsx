import Image from "next/image";
import Link from "next/link";

export default function GlobalNav() {
  return (
    <nav className="bg-light rounded shadow-lg justify-center items-center flex h-[7rem]">
      <ul className="font-bold text-lg flex items-center gap-x-36 px-4">
        <li>
          <Link href="/">
            <Image
              src="/logo2.png"
              width={200}
              height={117}
              alt=""
              className="object-cover"
            />
          </Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-black">
          <Link className="" href="/">
            HOME
          </Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-black">
          <Link href="/talents">TALENTS</Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-black">
          <Link href="/music">MUSIC</Link>
        </li>
        <li className="hover:text-primaryHover link-underline link-underline-black">
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
