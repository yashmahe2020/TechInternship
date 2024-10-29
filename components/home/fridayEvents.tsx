import React from 'react';

const FridayEvents: React.FC = () => {
  return (
    <div className="mt-6 space-y-6 w-full md:w-4/4 mx-auto">

      {/* Top Box for Appreciation */}
      <div className="bg-yellow-400 shadow-lg rounded-lg p-8 text-black [text-wrap:balance] md:text-lg leading-relaxed flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-105">
        <p>
          We are grateful to have Sterling Johnson present to MVHS during tutorial in the theater and lunch in the main quad. Don&#39;t miss out!
        </p>
      </div>

      {/* Bottom Boxes - 2 Columns */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Left Box */}
        <div className="flex-1 bg-yellow-400 shadow-lg rounded-lg p-8 text-black [text-wrap:balance] md:text-lg leading-relaxed flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-105">
          <p>
            During tutorial, learn about the art and science of bubbles and experience bubbles in ways you never have before. Register on <a className="hover:underline" href="https://app.minga.io/tools/flextime">Minga</a> now!
          </p>
        </div>

        {/* Right Box */}
        <div className="flex-1 bg-yellow-400 shadow-lg rounded-lg p-8 text-black [text-wrap:balance] md:text-lg leading-relaxed flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-105">
          <p>
            Sterling will also perform during Lunch in the main quad. Bring your lunch to the quad to see the dazzling bubble display and take a picture inside a giant bubble!
          </p>
        </div>
      </div>

    </div>
  );
};

export default FridayEvents;
