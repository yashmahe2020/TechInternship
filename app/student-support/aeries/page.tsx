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
    // { title: "Aeries Overview", description: "Learn the basics of Aeries", videoId: "Xaqq6XtSCHs" },
    // { title: "Checking Active Grades", description: "How to view and understand your grades", videoId: "Xaqq6XtSCHs" },
    // { title: "Checking Transcript", description: "How to find and understand your transcript", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating Aeries",
      description: "Step-by-step guide to using Aeries",
      embedLink: "https://docs.google.com/presentation/d/1MV8311icU4tBoUeZX60Ge12SfGjQszMRyDFOZeEhDGA/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "What should I do if I forget my Aeries password?",
      answer: "If you forget your password, click on the 'Forgot Password' link on the Aeries login page. Follow the prompts to reset your password. If you continue to have issues, contact your school's administration office for assistance."
    },
    {
      question: "Can my parents access my Aeries account?",
      answer: "Yes, parents can have their own Aeries accounts to view their child's information. They need to contact the school to receive their account credentials. Parents' accounts are separate from student accounts and may have different levels of access."
    },
    {
      question: "How do I view my class schedule in Aeries?",
      answer: "In Aeries, look for a tab or section labeled 'Schedule' or 'Classes'. This will display your current class schedule, including class periods, teacher names, and room numbers."
    },
    {
      question: "Where can I find my attendance record in Aeries?",
      answer: "To view your attendance record, look for an 'Attendance' tab in Aeries. This section will show your attendance for each class, including any absences or tardies."
    },
  ];

  return { videos, slideshows, faqs };
}

export default async function StudentSupport() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="Aeries Support" 
            description="Tech support and resources for students using Aeries."
          />

          <Suspense fallback={<div>Loading content...</div>}>
            <ContentTabs videos={videos} slideshows={slideshows} />
          </Suspense>

          <Suspense fallback={<div>Loading FAQs...</div>}>
            <FAQSection faqs={faqs} />
          </Suspense>

          <Suspense fallback={<div>Loading support information...</div>}>
            <SupportSection/>
          </Suspense>
        </div>

        <div className="z-10 w-full mt-16">
          <Footer />
        </div>
      </main>
    </>
  );
}