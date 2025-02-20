import React, { Suspense } from 'react';
import Nav from '@/components/layout/nav';
import Footer from '@/components/layout/footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ContentTabs } from '@/components/layout/tabs';
import { FAQSection } from '@/components/layout/faq';
import { SupportSection } from '@/components/layout/support';
import { Hero } from '@/components/layout/hero';
import { SocialMedia } from '@/components/layout/social-media';

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
    //   title: "Social Media",
    //   description: "Finding social media accounts?",
    //   embedLink: "https://docs.google.com/presentation/d/1MV8311icU4tBoUeZX60Ge12SfGjQszMRyDFOZeEhDGA/embed?start=false&loop=false&delayms=3000",
    // },
  ];

  const faqs: FAQItem[] = [
    {
      question: "Where can I follow the Tech Internship Program on social media?",
      answer: "You can follow the Tech Internship Program on Linkedin and Instagram at mvhs-principal-s-tech-internship and @mvhs.tech, respectively, for updates, tips, and highlights!"
    },
    {
      question: "What type of content is shared on the program's social media?",
      answer: "We share updates about upcoming events, success stories from students, and tech tips."
    },
    {
      question: "Can I tag the program in my posts or share my experiences?",
      answer: "Yes, we encourage students to share their experiences and tag us using @mvhs.tech."
    },
    {
      question: "Can I get my content featured on the program's social media?",
      answer: "Yes, we intend to feature student's perspective. Just make sure it's tech-related and aligns with our program's mission!"
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
            title="Social Media" 
            description="Tech support and resources for students, parents, and administration."
          />

          <Suspense fallback={<div>Loading content...</div>}>
            <ContentTabs videos={videos} slideshows={slideshows} />
          </Suspense>

          <Suspense fallback={<div>Loading Social Media...</div>}>
            <SocialMedia/>
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