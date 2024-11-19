'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and School Link */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="https://mvhs.mvla.net" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4">
              <Image
                src="/spartan.png"
                alt="MVHS Spartan Logo"
                width={50}
                height={50}
                className="rounded-sm"
              />
              <span className="ml-2 font-display text-2xl font-bold text-gray-800">MVHS</span>
            </Link>
            <p className="text-sm text-gray-700 mt-2 text-center md:text-left">Empowering minds, shaping futures</p>
          </div>

          {/* Navigation Links */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/student-support" className="footer-link hover:text-gray-800">Student Support</Link>
              <Link href="/public-relations" className="footer-link hover:text-gray-800">Public Relations</Link>
              <Link href="/faculty-support" className="footer-link hover:text-gray-800">Faculty Support</Link>
              <Link href="/parent-support" className="footer-link hover:text-gray-800">Parent Support</Link>
            </div>
          </div>

          {/* Contact and Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <a href="mailto:100028415@mvla.net" className="footer-contact-link">
                <Mail size={16} className="inline mr-2" />
                Meera Mathew
              </a>
              <a href="mailto:100029051@mvla.net" className="footer-contact-link">
                <Mail size={16} className="inline mr-2" />
                Jaeden Pietrofeso
              </a>
              <a href="mailto:100032240@mvla.net" className="footer-contact-link">
                <Mail size={16} className="inline mr-2" />
                Yash Maheshwari
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
        .footer-social-link {
          @apply text-gray-400 hover:text-blue-600 transition duration-300;
        }
        .footer-contact-link {
          @apply text-sm text-gray-500 hover:text-blue-600 transition duration-300 flex items-center;
        }
      `}</style>
    </footer>
  );
}