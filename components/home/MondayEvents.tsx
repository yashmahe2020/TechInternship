import React from 'react';

const MondayEvents: React.FC = () => {
  return (
    <div className="mt-6 space-y-6 w-full md:w-4/4 mx-auto">
      {/* Top Box for Mission Statement */}
      <div className="bg-yellow-400 shadow-lg rounded-lg p-8 text-black [text-wrap:balance] md:text-lg leading-relaxed flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-105">
        <p>
        The STEAM Speaker Series features scientists, mathematicians, artists, and technologists from local companies and universities sharing their personal and professional experiences with Mountain View High School students.
        </p>
      </div>

      {/* Bottom Boxes - 2 Columns */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Left Box */}
        <div className="flex-1 bg-yellow-400 shadow-lg rounded-lg p-8 text-black [text-wrap:balance] md:text-lg leading-relaxed flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-105">
          <p>
          Presentations take place in the Spartan Theater for 300+ students. Speakers discuss their background in STEAM, the types of projects they work on, and the latest research and challenges of their profession.
          </p>
        </div>

        {/* Right Box */}
        <div className="flex-1 bg-yellow-400 shadow-lg rounded-lg p-8 text-black [text-wrap:balance] md:text-lg leading-relaxed flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-105">
          <p>
          We are grateful for our speakers&#39; participation and willingness to share their stories with MVHS students to inspire the next generation of STEAM professionals. Stop by the theater to watch if you have a free period! 
          </p>
        </div>
      </div>

      <div className="bg-yellow-400 shadow-lg rounded-lg p-8 text-black [text-wrap:balance] md:text-lg leading-relaxed flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-105">
        <p>
        <a rel="noreferrer" target="_blank" className="text-lg text-black hover:text-blue-500 hover:underline" href="https://youtube.com/live/XuFvYz3BOHw?feature=share">Link to the live stream</a>
        </p>
        
      </div>
    </div>
  );
};

export default MondayEvents;
