import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-16 px-4 duration-200 ease-in-out hover:scale-105">
      <div className="bg-gradient-to-br from-yellow-500 to-yellow-200 rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-white bg-opacity-90 m-1 rounded-3xl p-8">
          <h2 className="mb-8 bg-gradient-to-br from-yellow-900 to-yellow-400 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
            Mission
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1 bg-yellow-300 rounded-2xl p-6 shadow-inner transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <p className="text-yellow-900 [text-wrap:balance] text-lg leading-relaxed">
                Formed in 2024, the MVHS Tech Internship program is dedicated to aiding students, parents, and staff with tech-related issues.
              </p>
            </div>
            <div className="flex-1 bg-yellow-300 rounded-2xl p-6 shadow-inner transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <p className="text-yellow-900 [text-wrap:balance] text-lg leading-relaxed">
                We are pleased to offer technology resources for students, parents, and staff with common applications, including Canvas, Minga, and Aeries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;