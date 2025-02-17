import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Nav from '@/components/layout/nav';
import Footer from '@/components/layout/footer';
import { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Dumbbell, BookOpen, MessageSquare, Ticket } from 'lucide-react';

// Define the types for each prop
interface SupportCardProps {
  title: string;
  url: string;
  description: string;
  icon: FC<{ className?: string }>;
}

const parentSupportItems = [
  { 
    title: 'Athletic Clearance', 
    url: '/parent-support/athletic-clearance', 
    description: 'Complete necessary forms for your child to participate in school sports', 
    icon: Dumbbell 
  },
  { 
    title: 'Aeries', 
    url: '/parent-support/aeries', 
    description: 'Access your child\'s grades, attendance, and other academic information', 
    icon: BookOpen 
  },
  { 
    title: 'Parent Square', 
    url: '/parent-support/parent-square', 
    description: 'Stay connected with school announcements and communication', 
    icon: MessageSquare 
  },
  { 
    title: 'GoFan', 
    url: '/parent-support/gofan', 
    description: 'Purchase tickets for school events and athletic competitions', 
    icon: Ticket 
  },
];

const ParentSupportCard: FC<SupportCardProps> = ({ title, url, description, icon: Icon }) => (
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
              Parent Support
            </h1>
            <p className="mt-4 text-black [text-wrap:balance] md:text-xl">
              Tech resources and support for parents, including Aeries, Parent Square and GoFan.
            </p>
          </div>
          <div className="mr-10 md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
            <img
              src="/tech-internship.png"
              alt="Tech Internship Logo"
              className="w-full max-w-[400px] h-auto max-h-[400px] rounded-lg"
            />
          </div>
        </div>

        <div className="z-10 w-full max-w-5xl px-5 xl:px-0 my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parentSupportItems.map((item, index) => (
              <ParentSupportCard key={index} {...item} />
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