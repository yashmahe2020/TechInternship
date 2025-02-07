import React from 'react';
import { DEPLOY_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Nav from '@/components/layout/nav';
import Footer from '@/components/layout/footer';
import { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Search, Layers, GraduationCap } from 'lucide-react';

interface SupportCardProps {
  title: string;
  url: string;
  description: string;
  icon: FC<{ className?: string }>;
}

const supportItems = [
  { title: 'Aeries', url: '/student-support/aeries', description: 'Access your grades and attendance information', icon: BookOpen },
  { title: 'Canvas', url: '/student-support/canvas', description: 'Manage your courses and assignments', icon: Layers },
  { title: 'Minga', url: '/student-support/minga', description: 'Stay connected with school events and activities', icon: Users },
  { title: 'Clubs', url: '/student-support/clubs', description: 'Explore and join student clubs', icon: GraduationCap },
  { title: 'Research', url: '/student-support/research', description: 'Discover how to conduct and publish research', icon: GraduationCap },
];

const SupportCard: FC<SupportCardProps> = ({ title, url, description, icon: Icon }) => (
  <Link href={url} className="group">
    <Card className="transition-all duration-300 hover:shadow-md hover:bg-gray-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Icon className="h-8 w-8 text-primary" />
          <ArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  </Link>
);

export default function StudentSupport() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center mt-16">
        <Nav />

        <div className="z-10 w-full max-w-5xl px-5 xl:px-0 mt-16 my-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mr-10 md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
            <img
              src="/spartan.png"
              alt="MVHS Spartan Logo"
              className="w-full max-w-[400px] h-auto max-h-[400px] rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-center text-center">
            <h1
              className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]"
            >
              Student Support
            </h1>
            <p className="mt-4 text-black [text-wrap:balance] md:text-xl">
              Tech support and resources for students, including Aeries, Canvas, and Minga.
            </p>
          </div>
        </div>

        <div className="z-10 w-full max-w-5xl px-5 xl:px-0 my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportItems.map((item, index) => (
              <SupportCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="z-10 w-full mt-16">
          <Footer />
        </div>
      </main>
    </>
  );
}