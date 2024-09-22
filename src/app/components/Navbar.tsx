// src/app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-indigo-900 text-white p-4">
      <ul className="flex justify-around list-none m-0 p-0">
        <li>
          <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors duration-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}