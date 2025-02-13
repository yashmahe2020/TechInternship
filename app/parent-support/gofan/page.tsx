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
    // { title: "GoFan Overview for Parents", description: "Introduction to using GoFan for purchasing tickets to school events", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating the GoFan Platform",
      description: "A comprehensive guide to using GoFan",
      embedLink: "https://docs.google.com/presentation/d/1fI6NMpbzWrTsCFZASALE33O8HMOZY-ycrqCifzDx7NQ/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I find events for my school on GoFan?",
      answer: "To find events, open the GoFan app or website and search for your school name. You can also use the 'Near Me' feature to find local events. Once you select your school, you'll see a list of upcoming events with available tickets."
    },
    {
      question: "Can I get a refund for tickets purchased on GoFan?",
      answer: "Refund policies may vary depending on the event and school. Generally, if an event is cancelled, you will receive a refund automatically. For other circumstances, contact the event organizer or school athletic department for assistance with refunds."
    },
    {
      question: "How do I transfer tickets to someone else?",
      answer: "To transfer tickets, log into your GoFan account, go to 'My Tickets', select the ticket you want to transfer, and click 'Transfer'. Enter the recipient's name and email address. They'll receive an email with instructions to claim the ticket."
    },
    {
      question: "What should I do if I have trouble accessing my digital ticket at the event?",
      answer: "If you have trouble accessing your ticket, first ensure you have a good internet connection. Try closing and reopening the GoFan app. If issues persist, find a ticket booth or event staff member for assistance. It's always a good idea to take a screenshot of your ticket as a backup."
    },
  ];

  return { videos, slideshows, faqs };
}

export default async function GoFanSupport() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="GoFan Support" 
            description="Resources and support for parents using GoFan to purchase tickets for school events."
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