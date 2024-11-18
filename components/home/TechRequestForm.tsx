import React from 'react';
import { ArrowRight } from 'lucide-react';

const TechRequestForm: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 px-4 duration-200 ease-in-out hover:scale-105">
      <div className="bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-white bg-opacity-90 m-1 rounded-3xl p-8">
          <h2 className="mb-8 bg-gradient-to-br from-yellow-900 to-yellow-400 bg-clip-text text-4xl font-display font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]">
            Tech Request Form
          </h2>
          <p className="text-lg text-center text-yellow-800 mb-8">
            Need technical assistance? We're here to help! Fill out our Tech Request Form and our dedicated team of tech interns will address your issue promptly.
          </p>
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSehoITzqM1l_caV6YP9hqih-PvNv-QQ2Ljd8fS9qYDoHbkIHg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
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