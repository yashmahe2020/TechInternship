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
  ];

  const slideshows: SlideshowItem[] = [
    // {
    //   title: "Navigating Aeries",
    //   description: "Step-by-step guide to using Aeries",
    //   embedLink: "https://docs.google.com/presentation/d/1MV8311icU4tBoUeZX60Ge12SfGjQszMRyDFOZeEhDGA/embed?start=false&loop=false&delayms=3000",
    // },
  ];

  const faqs: FAQItem[] = [
    {
      question: "Where can I listen to the Tech Podcast?",
      answer: "You can listen to the podcast on the Tech Internship website at mvhs-tech.vercel.app/public-relations/podcast."
    },
    {
      question: "How often are new episodes released?",
      answer: "We release new episodes every two weeks during the school year. Special episodes may also drop during school events or holidays."
    },
    {
      question: "Can I suggest topics or be a guest on the podcast?",
      answer: "Absolutely! We welcome topic suggestions and student guest appearances. Reach out to us via email or visit the Tech Internship program. "
    },
    {
      question: "How can I get involved in creating the podcast?",
      answer: "Join the Tech Club Internship Program at Mountain View High! We handle a lot of tech  from researching topics and recording episodes to editing and promoting the podcast. No prior experience is needed!"
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
            title="MVHS Tech Podcast" 
            description="Tech support for all students of MVHS"
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