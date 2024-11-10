import React, { Suspense } from 'react';
import Nav from '@/components/layout/nav';
import Footer from '@/components/layout/footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ContentTabs } from '@/components/layout/tabs';
import { FAQSection } from '@/components/layout/faq';
import { SupportSection } from '@/components/layout/support';
import { Hero } from '@/components/layout/hero';

interface VideoItem {
  title: string;
  description: string;
  videoId: string;
}

interface SlideshowItem {
  title: string;
  description: string;
  embedLink: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

async function getData() {
  const videos: VideoItem[] = [
    { title: "Canvas Overview", description: "Introduction to Canvas features", videoId: "Xaqq6XtSCHs" },
    { title: "Navigating Your Courses", description: "How to find and access your courses in Canvas", videoId: "Xaqq6XtSCHs" },
    { title: "Submitting Assignments", description: "Step-by-step guide to submitting assignments in Canvas", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Canvas Dashboard Tour",
      description: "Explore the main features of your Canvas dashboard",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
    {
      title: "Using the Canvas Calendar",
      description: "How to effectively use the Calendar feature in Canvas",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
    {
      title: "Participating in Discussions",
      description: "Guide to engaging in Canvas discussion boards",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I reset my Canvas password?",
      answer: "To reset your Canvas password, click on the 'Forgot Password' link on the login page. Enter your email address associated with your Canvas account, and follow the instructions sent to your email to create a new password."
    },
    {
      question: "Can I access Canvas on my mobile device?",
      answer: "Yes, Canvas has mobile apps available for both iOS and Android devices. Search for 'Canvas Student' in your device's app store, download the app, and log in with your Canvas credentials."
    },
    {
      question: "How do I view my grades in Canvas?",
      answer: "To view your grades, click on the 'Grades' link in the left-hand navigation menu of your Canvas dashboard. Here, you'll see a list of your courses and your current grades. Click on a specific course to see detailed grade information for individual assignments."
    },
    {
      question: "What should I do if I can't see one of my courses in Canvas?",
      answer: "If you can't see a course you're enrolled in, first check your Canvas dashboard and the 'Courses' menu to ensure it's not hidden. If you still can't find it, contact your instructor or the school's IT support. They can verify your enrollment and ensure the course is published and accessible to you."
    },
  ];

  return { videos, slideshows, faqs };
}

export default async function CanvasSupport() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="Canvas Support" 
            description="Resources and support for students and teachers using Canvas."
          />

          <Suspense fallback={<div>Loading content...</div>}>
            <ContentTabs videos={videos} slideshows={slideshows} />
          </Suspense>

          <Suspense fallback={<div>Loading FAQs...</div>}>
            <FAQSection faqs={faqs} />
          </Suspense>

          <Suspense fallback={<div>Loading support information...</div>}>
            <SupportSection />
          </Suspense>
        </div>

        <div className="z-10 w-full mt-16">
          <Footer />
        </div>
      </main>
    </>
  );
}