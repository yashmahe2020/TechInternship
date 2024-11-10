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
    { title: "Slack Overview for Educators", description: "Introduction to Slack features for teachers and faculty", videoId: "Xaqq6XtSCHs" },
    { title: "Setting Up Channels and Direct Messages", description: "Learn how to organize communication in Slack", videoId: "Xaqq6XtSCHs" },
    { title: "Using Slack for Collaboration", description: "Guide to leveraging Slack for team projects and discussions", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Navigating the Slack Interface",
      description: "Step-by-step guide for teachers using Slack",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
    {
      title: "Integrating Educational Apps with Slack",
      description: "How to enhance Slack with education-focused integrations",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
    {
      title: "Managing File Sharing in Slack",
      description: "Efficiently sharing and organizing resources in Slack",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I create a new channel in Slack?",
      answer: "To create a new channel, click on the '+' icon next to 'Channels' in the sidebar. Choose 'Create a channel', enter a name and description, set it as public or private, and invite members. Click 'Create' to finish."
    },
    {
      question: "Can I schedule messages in Slack?",
      answer: "Yes, you can schedule messages in Slack. When composing a message, click the dropdown arrow next to the send button and select 'Schedule for later'. Choose the date and time, then click 'Schedule message'."
    },
    {
      question: "How do I use Slack for student group projects?",
      answer: "Create a channel for each group project. Invite relevant students and yourself. Use threaded conversations for specific topics, pin important messages, and use integrations like Google Drive for file sharing. Set channel topics to track project progress."
    },
    {
      question: "Can I integrate other educational tools with Slack?",
      answer: "Yes, Slack supports many integrations. You can add tools like Google Classroom, Trello for project management, or Zoom for video calls. Go to the Slack App Directory, find the app you want, and follow the installation instructions."
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
            title="Slack Support" 
            description="Resources and support for faculty using Slack."
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