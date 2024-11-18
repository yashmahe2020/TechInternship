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
    { title: "Minga Overview for Teachers", description: "Introduction to Minga features for teachers and faculty", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating the Minga Dashboard",
      description: "Step-by-step guide for teachers using Minga",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I create a digital hall pass in Minga?",
      answer: "To create a digital hall pass, open the Minga app, tap on 'Hall Pass', then 'Create Pass'. Select the student, destination, and duration. The pass will be sent to the student's device and tracked in the system."
    },
    {
      question: "Can I schedule recurring events in Minga?",
      answer: "Yes, when creating an event in Minga, you can set it as recurring. Choose the frequency (daily, weekly, monthly), set an end date if applicable, and the event will automatically appear on the scheduled days."
    },
    {
      question: "How do I track student participation in school events?",
      answer: "Minga allows you to take attendance at events. When the event is ongoing, open it in the app and use the 'Check-in' feature. You can manually check in students or let them self-check-in using a QR code."
    },
    {
      question: "Can I communicate with students through Minga?",
      answer: "Yes, Minga offers communication features. You can send announcements to all students or specific groups. For individual communication, use the messaging feature, ensuring all interactions are logged for transparency."
    },
  ];

  return { videos, slideshows, faqs };
}

export default async function TeacherFacultySupport() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="Minga Support" 
            description="Resources and support for teachers and faculty using Minga."
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