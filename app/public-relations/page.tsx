import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Nav from '@/components/layout/nav';
import Footer from '@/components/layout/footer';
import { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Instagram, Layers, Users, Video, Newspaper } from 'lucide-react';

// Define the types for each prop
interface SupportCardProps {
  title: string;
  url: string;
  description: string;
  icon: FC<{ className?: string }>;
}

const prItems = [
  { title: 'Instagram', url: '/public-relations/instagram', description: 'Follow our official Instagram for updates and highlights', icon: Instagram },
  { title: 'Canvas', url: '/public-relations/canvas', description: 'Access course materials and announcements', icon: Layers },
  { title: 'ASB Connection', url: '/public-relations/asb', description: 'Stay connected with student government activities', icon: Users },
  { title: 'Promotional Videos', url: '/public-relations/promotional-videos', description: 'Watch and share our school\'s promotional content', icon: Video },
  { title: 'Newsletter', url: '/public-relations/newsletter', description: 'Subscribe to our regular newsletter for important updates', icon: Newspaper },
];

const PRCard: FC<SupportCardProps> = ({ title, url, description, icon: Icon }) => (
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

export default function PublicRelations() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center pt-16">
        <Nav />

        <div className="z-10 w-full max-w-5xl px-5 xl:px-0 mt-16 my-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex flex-col items-center md:items-center text-center">
            <h1
              className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]"
            >
              Public Relations
            </h1>
            <p className="mt-4 text-black [text-wrap:balance] md:text-xl">
              Ensuring all students, parents, and faculty are able to find and utilize the tech support they need.
            </p>
          </div>
          <div className="mr-10 md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
            <img
              src="/spartan.png"
              alt="MVHS Logo"
              className="w-full max-w-[400px] h-auto max-h-[400px] rounded-lg"
            />
          </div>
        </div>

        <div className="z-10 w-full max-w-5xl px-5 xl:px-0 my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prItems.map((item, index) => (
              <PRCard key={index} {...item} />
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