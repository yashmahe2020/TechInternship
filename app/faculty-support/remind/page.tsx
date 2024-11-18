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
    { title: "Remind Overview for Teachers", description: "Introduction to Remind features for teachers and faculty", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating the Remind Platform",
      description: "Step-by-step guide for teachers using Remind",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I create a new class in Remind?",
      answer: "To create a new class, log into your Remind account and click 'Add a class' on your dashboard. Enter the class name and grade level, then choose how you want to add participants. You can share the class code or send invitations directly."
    },
    {
      question: "Can I schedule messages in advance?",
      answer: "Yes, Remind allows you to schedule messages. When composing a message, click on the calendar icon next to the 'Send' button. Choose the date and time you want the message to be sent, then click 'Schedule'."
    },
    {
      question: "How do I attach files to my Remind messages?",
      answer: "When composing a message, click on the paperclip icon to attach a file. You can upload files from your device or connect to cloud services like Google Drive or Dropbox. Note that there are file size limits for attachments."
    },
    {
      question: "Can I create polls or surveys in Remind?",
      answer: "Yes, Remind supports creating polls. When composing a message, click on the 'Poll' option. Enter your question and answer choices. You can set a deadline for responses and choose whether to allow multiple selections or not."
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
            title="Remind Support" 
            description="Resources and support for teachers and faculty using Remind."
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