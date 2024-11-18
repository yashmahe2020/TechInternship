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
    // { title: "Athletic Clearance Overview", description: "Introduction to the Athletic Clearance process at Mountain View HS", videoId: "Xaqq6XtSCHs" },
    // { title: "Creating Your Athletic Clearance Account", description: "Step-by-step guide to setting up your account", videoId: "Xaqq6XtSCHs" },
    // { title: "Completing Required Forms", description: "Walk-through of all necessary forms for Athletic Clearance", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating the Athletic Clearance Platform",
      description: "A comprehensive guide for parents using the Athletic Clearance system",
      embedLink: "https://docs.google.com/presentation/d/1Iz7mx8NfcMulFuppPT6ZSg3GQXFc_FQvfMqn_cKvC8A/embed?start=false&loop=false&delayms=3000",
    },
    
  ];

  const faqs: FAQItem[] = [
    {
      question: "How often do I need to complete the Athletic Clearance process?",
      answer: "Athletes must complete the Clearance registration for each sport, every year. This ensures that all information is up-to-date and all requirements are met for each sports season."
    },
    {
      question: "What do I need to have ready before starting the Athletic Clearance process?",
      answer: "Before starting, make sure you have: a recent physical examination form, any relevant medical history information, insurance details, and emergency contact information. You'll also need to be prepared to read and agree to various school and athletic department policies."
    },
    {
      question: "Is there a Spanish version of the Athletic Clearance instructions available?",
      answer: "Yes, Spanish instructions are available. You can access them by clicking the 'Spanish Instructions' link on the Athletic Clearance homepage."
    },
    {
      question: "What should I do if I encounter problems during the Athletic Clearance process?",
      answer: "If you experience any issues, please contact Home Campus Support. They can assist you with technical problems or questions about the clearance process. You can also reach out to the MVHS Athletic Department for school-specific questions."
    },
  ];

  return { videos, slideshows, faqs };
}

export default async function AthleticClearanceSupport() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="Athletic Clearance" 
            description="Resources and support for parents completing the Athletic Clearance process at Mountain View High School."
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