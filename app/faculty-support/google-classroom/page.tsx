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
    { title: "Google Classroom Overview for Teachers", description: "Introduction to Google Classroom features for teachers", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating Google Classroom",
      description: "Step-by-step guide for teachers using Google Classroom",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I create a new class in Google Classroom?",
      answer: "To create a new class, click the '+' button at the top of the Google Classroom homepage and select 'Create Class'. Fill in the class details like name, section, subject, and room. Click 'Create' to finish setting up your new class."
    },
    {
      question: "Can I reuse posts from previous classes?",
      answer: "Yes, you can reuse posts. In the Classwork page, click 'Create' and select 'Reuse post'. Choose the class and the post you want to reuse. You can modify the post before sharing it with your current class."
    },
    {
      question: "How do I give feedback on student work?",
      answer: "Open the student's submission from the Classwork page. You can add comments directly on documents or use the private comments feature. Use the rubric if you've attached one, and enter the grade. Click 'Return' when you're ready to send the feedback to the student."
    },
    {
      question: "Can I schedule assignments in advance?",
      answer: "Yes, when creating an assignment, you can schedule it for a future date. After filling out the assignment details, click the dropdown next to 'Assign' and select 'Schedule'. Choose the date and time you want the assignment to be posted, then click 'Schedule'."
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
            title="Google Classroom" 
            description="Resources and support for teachers using Google Classroom."
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