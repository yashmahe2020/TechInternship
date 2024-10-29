"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  title: string;
  url: string;
}

interface DropdownHead {
  name: string;
  url: string;
  items: DropdownItem[];
}

const DROPDOWN_ITEMS: DropdownHead[] = [
  {
    name: 'Student Support',
    url: '/student-support',
    items: [
      { title: 'Aeries', url: '/student-support/aeries'},
      { title: 'Canvas', url: '/student-support/canvas'},
      { title: 'Minga', url: '/student-support/minga'},
      { title: 'Club Stuff', url: '/student-support/clubs'},
      { title: 'Student Research Sources', url: '/student-support/student-research-sources'},
    ],
  },
  {
    name: 'Public Relations',
    url: '/public-relations',
    items: [
      { title: 'Instagram', url: '/public-relations/instagram'},
      { title: 'Canvas', url: '/public-relations/canvas'},
      { title: 'ASB Connection', url: '/public-relations/asb'},
      { title: 'Promotional Videos', url: '/public-relations/promotional-videos'},
      { title: 'Newsletter', url: '/public-relations/newsletter'},
    ],
  },
  {
    name: 'Faculty Support',
    url: '/faculty-support',
    items: [
      { title: 'Aeries', url: '/faculty-support/aeries'},
      { title: 'Canvas', url: '/faculty-support/canvas'},
      { title: 'Minga', url: '/faculty-support/minga'},
      { title: 'Google Classroom', url: '/faculty-support/google-classroom'},
      { title: 'Remind', url: '/faculty-support/remind'},
      { title: 'Slack', url: '/faculty-support/slack'},
      { title: 'Copier Instructions', url: '/faculty-support/copier-instructions'},
    ],
  },
  {
    name: 'Parent Support',
    url: '/parent-support',
    items: [
      { title: 'Athletic Clearance', url: '/parent-support/athletic-clearance'},
      { title: 'Aeries', url: '/parent-support/aeries'},
      { title: 'Parent Square', url: '/parent-support/parent-square'},
      { title: 'GoFan', url: '/parent-support/gofan'},
    ],
  },
];

const Dropdown = ({ items, isOpen }: { items: DropdownItem[], isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 z-50">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default function NavBar() {
  const scrolled = useScroll(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (name: string) => {
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <div
      className={`fixed top-0 w-full flex justify-center ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/spartan.png"
              alt="MVHS Spartan Logo"
              width="40"
              height="40"
              className="mr-2 rounded-sm"
            />
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex items-center gap-2 md:relative absolute top-full left-0 right-0 bg-white md:bg-transparent md:top-auto md:left-auto md:right-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <nav className="flex flex-col md:flex-row items-center gap-1.5 mt-2 md:mt-0 px-4 py-2 md:p-0">
            <Link
              href="/"
              className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 hover:text-black text-muted dark:text-muted-dark"
            >
              Home
            </Link>
            {DROPDOWN_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.url}
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 hover:text-black text-muted dark:text-muted-dark"
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                <Dropdown
                  items={item.items}
                  isOpen={openDropdown === item.name}
                />
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}