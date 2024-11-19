import React from 'react';
import { ArrowRight } from 'lucide-react';

const TechRequestForm: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-4 duration-200 ease-in-out hover:scale-105">
      <div className="bg-[#FFC600] rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-[#F5E1A4] m-1 rounded-3xl p-8">
          <h2 className="mb-8 bg-gradient-to-b from-[#212721] to-[#63666A] bg-clip-text text-transparent font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]">
            Tech Request Form
          </h2>
          <p className="text-lg text-center text-[#212721] mb-8">
            Need technical assistance? We're here to help! Fill out our Tech Request Form and our dedicated team of tech interns will address your issue promptly.
          </p>
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSehoITzqM1l_caV6YP9hqih-PvNv-QQ2Ljd8fS9qYDoHbkIHg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#FFFFFF] bg-[#FFC600] rounded-full shadow-lg hover:text-[#212721] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#98989A] focus:ring-opacity-50"
            >
              Open Tech Request Form
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechRequestForm;