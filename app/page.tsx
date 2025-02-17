import React from 'react';
import Nav from '@/components/layout/nav';
import Footer from '@/components/layout/footer';
import Mission from '@/components/home/mission';
import { ArrowRight } from 'lucide-react'
import TechRequestForm from '@/components/home/TechRequestForm';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center pt-16">
        <Nav />
        <div className="z-10 w-full max-w-5xl px-5 xl:px-0 mt-16 mb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
              MVHS Tech Support
            </h1>
            <p className="mt-6 text-center text-black [text-wrap:balance] md:text-xl">
              The MVHS Tech Internship program is dedicated to aiding students, parents, and staff with tech issues, and ensuring a prosperous and productive tech environment.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
            <img
              src="/tech-internship.png"
              alt="Tech Internship"
              className="w-full max-w-[450px] h-auto max-h-[450px] rounded-lg"
            />
          </div>
        </div>

        <div className="md:w-2/3 flex flex-col items-center text-center mt-16">
          <TechRequestForm />
        </div>

        <div className="md:w-2/3 flex flex-col items-center text-center mt-8 mb-16">
          <Mission />
        </div>

        <div className="z-10 w-full mt-16">
          <Footer />
        </div>
      </main>
    </>
  );
}