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
    // { title: "Aeries Overview for Teachers", description: "Introduction to Aeries features for teachers and faculty", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating the Teacher Portal",
      description: "Step-by-step guide for teachers using Aeries",
      embedLink: "https://docs.google.com/presentation/d/1QKPfM5XOsHJJZB6TrC8ABisXXjHqxwmOjgtfVNQvEaM/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I reset my Aeries teacher account password?",
      answer: "To reset your password, go to the Aeries login page and click 'Forgot Password'. Follow the steps to receive a reset link via email. If you need further assistance, please contact your school's IT department or Aeries administrator."
    },
    {
      question: "Can I import grades from another system into Aeries?",
      answer: "Yes, Aeries supports grade import from various formats. Go to your gradebook, look for an 'Import' option, and follow the prompts. You can typically import CSV files or connect directly with some third-party grading tools. For specific import instructions, consult your school's Aeries guide or contact support."
    },
    {
      question: "How do I set up weighted grading in my Aeries gradebook?",
      answer: "To set up weighted grading, go to your gradebook settings in Aeries. Look for an option like 'Grade Calculations' or 'Weighting'. Here, you can define categories (e.g., Tests, Homework) and assign weights to each. Save your changes, and Aeries will automatically calculate final grades based on these weights."
    },
    {
      question: "Can I communicate with parents through Aeries?",
      answer: "Yes, Aeries offers communication features for teachers to interact with parents. Look for a 'Communication' or 'Messages' tab in your teacher portal. You can typically send individual messages, group notifications, or even automate certain communications based on student performance or attendance."
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
            title="Aeries Support" 
            description="Resources and support for teachers and faculty using Aeries."
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