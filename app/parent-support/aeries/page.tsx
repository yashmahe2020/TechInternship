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
    { title: "Aeries Overview for Parents", description: "Introduction to Aeries features for parents", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating the Parent Portal",
      description: "Step-by-step guide for parents",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I reset my Aeries parent account password?",
      answer: "To reset your password, go to the Aeries login page and click 'Forgot Password'. Follow the steps to receive a reset link. If you need further help, please contact your child's school office."
    },
    {
      question: "Can I see my child's assignments and grades on Aeries?",
      answer: "Yes, you can view your child's grades, assignments, and more. Log in to your parent account, and look under the 'Grades' or 'Assignments' sections for detailed information."
    },
    {
      question: "How do I track my child's attendance?",
      answer: "In your parent portal, click on the 'Attendance' section to view your child's attendance history, including any absences or tardies."
    },
    {
      question: "Can I communicate with teachers through Aeries?",
      answer: "Yes, Aeries offers a messaging feature to help parents communicate with teachers. Look for the 'Messages' or 'Communication' tab in the portal."
    },
  ];

  return { videos, slideshows, faqs };
}

export default async function ParentSupport() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="Aeries Support" 
            description="Resources and support for parents using the Aeries Parent Portal."
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