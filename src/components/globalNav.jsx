import Link from "next/link";

export default function GlobalNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">HOME</Link>
          <Link href="/talents">TALENTS</Link>
          <Link href="/music">MUSIC</Link>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
