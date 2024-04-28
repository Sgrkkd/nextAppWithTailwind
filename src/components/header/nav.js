import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link href="/about" className="mr-5 hover:text-gray-900">
            About
        </Link>
        <Link href="/events" className="mr-5 hover:text-gray-900">
            Events
        </Link>
        <Link href="/contact-us" className="mr-5 hover:text-gray-900">
            Contact Us
        </Link>
    </nav>
  )
}