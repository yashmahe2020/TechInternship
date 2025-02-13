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
  const videos: VideoItem[] = [];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating ClassLink",
      description: "Learn how to use ClassLink to access your educational apps and resources",
      embedLink: "https://docs.google.com/presentation/d/1SmVdlIWliFJHVy4FaK9gv7FqhtFM89ZWO4fRMOhCVQY/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "What is ClassLink, and how does it help students?",
      answer: "ClassLink is a single sign-on platform that allows students to access all their educational tools, applications, and resources in one place with a single login. It simplifies access to digital learning materials."
    },
    {
      question: "How do I log into ClassLink?",
      answer: "You can log into ClassLink by visiting your school's ClassLink portal and signing in with your school-provided credentials. Some schools also support login through Google or Microsoft accounts."
    },
    {
      question: "What apps can I access through ClassLink?",
      answer: "ClassLink provides access to a variety of educational apps, including Canvas, Aeries, Google Drive, and College Board resources. The apps available may vary depending on your school's setup."
    },
    {
      question: "Can I use ClassLink on my mobile device?",
      answer: "Yes, ClassLink has a mobile app available for iOS and Android, allowing you to access your school resources from anywhere."
    }
  ];

  return { videos, slideshows, faqs };
}

export default async function ClassLinkResources() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="ClassLink Resources" 
            description="Learn how to navigate ClassLink for seamless access to your educational apps and tools."
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
