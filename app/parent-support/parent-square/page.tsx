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
    { title: "ParentSquare Overview", description: "Introduction to ParentSquare features for parents", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating the ParentSquare Platform",
      description: "A comprehensive guide for parents using ParentSquare",
      embedLink: "https://docs.google.com/presentation/d/1pxB6Y_HAmLdRUtAZAJrv6FFKzV-HCCcsn3Ge_ClFwE0/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I change my notification preferences in ParentSquare?",
      answer: "To change your notification preferences, log into your ParentSquare account and go to your Account Settings. Here you can choose how you want to receive notifications (email, text, or app push notifications) and for which types of messages."
    },
    {
      question: "Can I communicate with my child's teacher through ParentSquare?",
      answer: "Yes, ParentSquare allows direct communication with teachers. You can send a private message to a teacher by going to the 'Directory' section, finding the teacher's name, and clicking on the message icon. Remember to keep communications respectful and relevant to your child's education."
    },
    {
      question: "How do I sign up for school events or volunteer opportunities?",
      answer: "When a sign-up request is posted, you'll receive a notification. Open the ParentSquare app or website, find the sign-up post, and click on the 'Sign Up' button. You can then choose available slots or options. You can also view all open sign-ups in the 'Sign Ups' section of ParentSquare."
    },
    {
      question: "What should I do if I'm not receiving ParentSquare notifications?",
      answer: "First, check your notification settings in your ParentSquare account to ensure they're set up correctly. If you're still not receiving notifications, verify that your contact information (email and phone number) is correct. If problems persist, check your email spam folder or contact your school's ParentSquare administrator for assistance."
    },
  ];

  return { videos, slideshows, faqs };
}

export default async function ParentSquareSupport() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="ParentSquare Support" 
            description="Resources and support for parents using ParentSquare for school communications."
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