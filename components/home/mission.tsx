import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-16 px-4 duration-200 ease-in-out hover:scale-105">
      <div className="bg-[#FFC600] rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-[#F5E1A4] m-1 rounded-3xl p-8">
          <h2 className="mb-8 bg-gradient-to-b from-[#212721] to-[#63666A] bg-clip-text text-transparent font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
            Mission
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1 bg-[#FFC600] rounded-2xl p-6 shadow-inner transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <p className="text-[#212721] [text-wrap:balance] text-lg leading-relaxed">
                Formed in 2024, the MVHS Tech Internship program is dedicated to aiding students, parents, and staff with tech-related issues.
              </p>
            </div>
            <div className="flex-1 bg-[#FFC600] rounded-2xl p-6 shadow-inner transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <p className="text-[#212721] [text-wrap:balance] text-lg leading-relaxed">
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