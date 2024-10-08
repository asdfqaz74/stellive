import Image from 'next/image';
import Link from 'next/link';

export default function GlobalNav() {
  return (
    <nav className="bg-white gap-10 rounded shadow-2xl justify-center items-center flex h-20 px-64 text-nav z-50 relative">
      <Link href="/">
        <Image
          src="/logo2.png"
          alt="logo"
          width={236}
          height={54}
          className="object-cover"
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
