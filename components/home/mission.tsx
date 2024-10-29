import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="mt-6 space-y-6 w-full md:w-4/4 mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Left Box */}
        <div className="flex-1 bg-yellow-400 shadow-lg rounded-lg p-8 text-black [text-wrap:balance] md:text-lg leading-relaxed flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-105">
          <p>
          Formed this year, the MVHS Tech Internship program is dedicated to aiding students, parents, and staff with tech-related issues.
          </p>
        </div>

        {/* Right Box */}
        <div className="flex-1 bg-yellow-400 shadow-lg rounded-lg p-8 text-black [text-wrap:balance] md:text-lg leading-relaxed flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-105">
          <p>
            We are pleased to offer technology resources for students, parents, and staff with common applications, including Canvas, Minga, and Aeries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
