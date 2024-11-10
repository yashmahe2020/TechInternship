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
    { title: "Copier Basics for Teachers", description: "Introduction to using the school copier efficiently", videoId: "Xaqq6XtSCHs" },
    { title: "Advanced Copier Features", description: "Learn how to use advanced copying and scanning features", videoId: "Xaqq6XtSCHs" },
    { title: "Troubleshooting Common Copier Issues", description: "Guide to resolving frequent copier problems", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating the Copier Interface",
      description: "Step-by-step guide for using the copier control panel",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
    {
      title: "Eco-Friendly Copying Practices",
      description: "How to reduce paper waste and use eco-settings",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
    {
      title: "Maintaining Copier Quality",
      description: "Tips for ensuring high-quality copies and scans",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I load paper into the copier?",
      answer: "To load paper, locate the paper tray (usually at the bottom of the copier). Pull it out gently, adjust the guides to match your paper size, and insert the paper with the print side facing up. Make sure not to overfill the tray. Slide the tray back in until it clicks."
    },
    {
      question: "What should I do if there's a paper jam?",
      answer: "If there's a paper jam, the copier screen will usually indicate where the jam is located. Open the appropriate panels as shown on the screen. Gently remove any stuck paper, being careful not to tear it. Close all panels securely. If the problem persists, contact the IT support team."
    },
    {
      question: "How can I make double-sided copies?",
      answer: "To make double-sided copies, place your original document in the feeder or on the glass. On the control panel, look for an option that says 'Two-sided' or '2-sided'. Select this option, choose whether your original is one-sided or two-sided, then press the start button."
    },
    {
      question: "Can I scan documents to my email using the copier?",
      answer: "Yes, most modern copiers allow scanning to email. Place your document in the feeder or on the glass. Select the 'Scan' or 'Send' option on the control panel. Choose 'Email' as the destination. Enter your email address using the keypad or select it from the address book if it's saved. Press start to scan and send."
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
            title="Copier Instructions" 
            description="Resources and support for teachers and faculty using the school copier."
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