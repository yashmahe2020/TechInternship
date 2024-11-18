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
    { title: "Minga Overview", description: "Learn the basics of Minga", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Setting Up Minga",
      description: "Step-by-step guide for initial setup",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I download and install Minga?",
      answer: "Minga can be downloaded from the App Store for iOS devices or Google Play Store for Android devices. Search for 'Minga' and tap 'Install' to begin the download process."
    },
    {
      question: "How do I check in for attendance using Minga?",
      answer: "To check in, open the Minga app and scan the QR code provided by your teacher or displayed in your classroom. Alternatively, you may be able to check in using a location-based feature if enabled by your school."
    },
    {
      question: "What if I forget to check in?",
      answer: "If you forget to check in, contact your teacher or school administration as soon as possible. They may be able to manually mark you as present or provide an alternative check-in method."
    },
    {
      question: "Can I view my attendance history in Minga?",
      answer: "Yes, Minga typically provides an attendance history feature. Look for a 'History' or 'Attendance Record' section in the app to view your past check-ins and attendance status."
    },
    {
      question: "What should I do if Minga isn't working properly?",
      answer: "If you're experiencing issues with Minga, try closing and reopening the app, or restarting your device. If problems persist, check your internet connection and ensure you have the latest version of the app installed. For ongoing issues, contact your school's IT support."
    },
    {
      question: "Can teachers see when I've checked in?",
      answer: "Yes, teachers and school administrators have access to real-time attendance data through Minga. They can see when and where you've checked in."
    },
  ];

  return { videos, slideshows, faqs };
}

export default async function MingaSupport() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="Minga Support" 
            description="Tech support and resources for students using Minga."
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