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
    { title: "MVHS Clubs Overview", description: "Learn about the diverse clubs at Mountain View High School", videoId: "Xaqq6XtSCHs" },
    { title: "How to Start a Club", description: "Step-by-step guide to creating your own club at MVHS", videoId: "Xaqq6XtSCHs" },
    { title: "Club Fair Highlights", description: "Explore the exciting clubs showcased at our annual Club Fair", videoId: "Xaqq6XtSCHs" },
  ];

  const slideshows: SlideshowItem[] = [
    {
      title: "Popular MVHS Clubs",
      description: "Discover our most active and popular student organizations",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
    {
      title: "Club Leadership Roles",
      description: "Learn about different leadership positions within clubs",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    },
    {
      title: "Club Event Planning",
      description: "Tips for organizing successful club events",
      embedLink: "https://docs.google.com/presentation/d/1QzZibyyGJ0YRejfh0TM9H1J-KeWTb6j873Z4U-t1wng/embed?start=false&loop=false&delayms=3000",
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I join a club at Mountain View High School?",
      answer: "To join a club, attend the annual Club Fair at the beginning of the school year or contact the club's advisor or president directly. Most clubs welcome new members throughout the year."
    },
    {
      question: "What types of clubs are available at MVHS?",
      answer: "MVHS offers a wide variety of clubs, including academic clubs, cultural organizations, community service groups, arts and music clubs, and special interest groups. Visit the school's club directory for a complete list."
    },
    {
      question: "How can I start a new club at Mountain View High School?",
      answer: "To start a new club, you'll need to find a faculty advisor, gather at least 10 interested students, draft a club constitution, and submit a club charter application to the Student Activities Office. Attend a new club orientation for more details."
    },
    {
      question: "When do most clubs meet?",
      answer: "Club meeting times vary, but many clubs meet during lunch, after school, or on specific days of the week. Check the club's information page or contact the club leader for specific meeting times and locations."
    },
    {
      question: "Can I be in multiple clubs?",
      answer: "Yes, you can join multiple clubs at MVHS. However, be mindful of your time commitments and ensure you can actively participate in each club you join."
    },
    {
      question: "Do clubs count towards community service hours?",
      answer: "Some clubs focus on community service and may offer opportunities to earn service hours. Check with the specific club or the Student Activities Office to confirm if a club's activities qualify for community service credit."
    }
  ];

  return { videos, slideshows, faqs };
}

export default async function MVHSClubs() {
  const { videos, slideshows, faqs } = await getData();

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <Nav />

        <div className="z-10 w-full max-w-7xl px-5 xl:px-0 mt-16 my-8">
          <Hero 
            title="MVHS Clubs" 
            description="Explore, join, or create clubs at Mountain View High School."
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