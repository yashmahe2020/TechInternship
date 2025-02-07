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
      title: "Student Research Resources",
      description: "Discover how and where to conduct and publish research",
      embedLink: "https://docs.google.com/presentation/d/1Xc3ppd6YjoNYJQxggnhyzMxz2hzlCcJn5kBsGgsufEc/embed?start=false&loop=false&delayms=3000",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How can I start my own research project?",
      answer: "To start a research project, first identify a topic of interest, then find a mentor or advisor who can guide you. Next, conduct a literature review to understand existing work and develop a research question. Finally, create a research plan and seek approval if necessary."
    },
    {
      question: "Where can I publish my research as a high school student?",
      answer: "There are several journals and conferences that accept high school research, such as the Journal of Emerging Investigators, the High School Research Journal, and the Regeneron Science Talent Search. Your school may also have opportunities to present your findings."
    },
    {
      question: "What resources are available for student research at MVHS?",
      answer: "MVHS offers access to research databases, faculty mentorship, and science fairs. You can also join research-oriented clubs like the STEM Research Club."
    },
    {
      question: "How do I find a research mentor?",
      answer: "You can reach out to teachers, university professors, or professionals in your field of interest. Many universities have outreach programs for high school students, and some online platforms connect students with mentors in various disciplines."
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
            title="Research Resources" 
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
