'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and School Link */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/spartan.png"
                alt="MVHS Spartan Logo"
                width={50}
                height={50}
                className="rounded-sm"
              />
              <span className="ml-2 font-display text-2xl font-bold text-gray-800">MVHS</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="col-span-2 grid grid-cols-2 gap-8">
            <Link href="/student-support" className="hover:text-black footer-link">Student Support</Link>
            <Link href="/public-relations" className="hover:text-black footer-link">Public Relations</Link>
            <Link href="/faculty-support" className="hover:text-black footer-link">Faculty Support</Link>
            <Link href="/parent-support" className="hover:text-black footer-link">Parent Support</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 transition duration-300">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition duration-300">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mountain View High School. All rights reserved.</p>
        </div>
      </div>
      <style jsx>{`
        .footer-link {
          @apply text-gray-600 hover:text-blue-600 transition duration-300 block;
        }
      `}</style>
    </footer>
  );
}