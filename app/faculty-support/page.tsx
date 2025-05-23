import React from 'react';
import { DEPLOY_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Nav from '@/components/layout/nav';
import Footer from '@/components/layout/footer';
import { FC } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, BookOpen, Layers, Users, MessageSquare, Bell, MessageCircle, Printer } from 'lucide-react';

interface SupportCardProps {
  title: string;
  url: string;
  description: string;
  icon: FC<{ className?: string }>;
}

const supportItems = [
  { title: 'Aeries', url: '/faculty-support/aeries', description: 'Access and manage student grades and attendance', icon: BookOpen },
  { title: 'Canvas', url: '/faculty-support/canvas', description: 'Manage your courses, assignments, and student submissions', icon: Layers },
  { title: 'Minga', url: '/faculty-support/minga', description: 'Stay connected with school events and activities', icon: Users },
  { title: 'Google Classroom', url: '/faculty-support/google-classroom', description: 'Create, distribute, and grade assignments', icon: MessageSquare },
  { title: 'Remind', url: '/faculty-support/remind', description: 'Send quick, important messages to students and parents', icon: Bell },
  { title: 'Slack', url: '/faculty-support/slack', description: 'Collaborate with other faculty members in real-time', icon: MessageCircle },
  { title: 'Copier Instructions', url: '/faculty-support/copier', description: 'Learn how to use the school copiers efficiently', icon: Printer },
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
              src="/tech-internship.png"
              alt="Tech Internship Logo"
              className="w-full max-w-[400px] h-auto max-h-[400px] rounded-lg"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-center text-center">
            <h1
              className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]"
            >
              Faculty Support
            </h1>
            <p className="mt-4 text-black [text-wrap:balance] md:text-xl">
              Tech resources and support for faculty, including Aeries, Canvas, Minga, and Google Classroom.
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