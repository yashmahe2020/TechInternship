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
    { title: "Canvas Overview for Teachers", description: "Introduction to Canvas features for teachers and faculty", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating the Canvas Dashboard",
      description: "Step-by-step guide for teachers using Canvas",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I import content from a previous course into a new Canvas course?",
      answer: "To import content, go to your new course, click on 'Settings', then 'Import Course Content'. Choose 'Copy a Canvas Course' as the content type, select the source course, and choose the content you want to import. Click 'Import' to start the process."
    },
    {
      question: "Can I create groups for collaborative work in Canvas?",
      answer: "Yes, Canvas supports group creation. Go to the 'People' section of your course, click on the 'Groups' tab, and then '+ Group Set'. You can manually assign students or let Canvas create random groups. Students can then collaborate within their group space."
    },
    {
      question: "How do I set up a rubric for grading in Canvas?",
      answer: "To create a rubric, go to the assignment, quiz, or discussion you want to attach it to. Click on '+ Rubric' below the description. Add criteria and ratings, set the points, and save. You can also create course-level rubrics that can be used across multiple assignments."
    },
    {
      question: "Can I integrate third-party tools with Canvas?",
      answer: "Yes, Canvas supports various third-party integrations through LTI (Learning Tools Interoperability). Go to 'Settings' in your course, click on the 'Apps' tab, and then 'View App Center'. Here you can browse and install compatible external tools to enhance your course."
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
            title="Canvas Support" 
            description="Resources and support for teachers and faculty using Canvas."
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