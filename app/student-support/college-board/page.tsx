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
  const videos: VideoItem[] = [];

  const slideshows: SlideshowItem[] = [
    {
      title: "College Board Instructions",
      description: "College Board resources to enhance your college preparation",
      embedLink: "https://docs.google.com/presentation/d/1zrye8iyIK1Q8gLs4orQuEKh4HjGNu6WdxX79m-7Yf3w/embed?start=false&loop=false&delayms=3000",
    },
    {
      title: "SAT Signup",
      description: "How to sign up for the SAT",
      embedLink: "https://docs.google.com/presentation/d/1IVKyEXXfIE2195fts5CMKg0_H6fqQozcw4Dj0u3hJZg/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "What is BigFuture, and how can it help me?",
      answer: "BigFuture is a College Board tool that helps students explore careers, colleges, and scholarships. It provides personalized guidance on planning for college, finding financial aid, and building a strong college application."
    },
    {
      question: "Where can I find official SAT prep resources?",
      answer: "College Board provides free SAT prep through Khan Academy, which offers personalized study plans, practice tests, and skill assessments. You can also access official SAT practice exams on the College Board website."
    },
    {
      question: "How does College Board support students in the college application process?",
      answer: "College Board offers resources like BigFuture for college search, scholarship opportunities, and financial aid guidance. It also provides fee waivers for SAT and college applications for eligible students."
    },
    {
      question: "What are the benefits of taking AP courses?",
      answer: "AP courses help students earn college credit, strengthen their transcripts, and prepare for rigorous college coursework. Success in AP exams can also improve college admissions prospects."
    }
  ];

  return { videos, slideshows, faqs };
}

export default async function CollegeBoardResources() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="College Board Resources" 
            description="Access College Board resources to prepare for AP courses, SAT exams, and college applications."
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
