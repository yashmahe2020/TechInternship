import React from 'react';
import Image from 'next/image';

// Update the icon imports with new icons that reflect the actions
import attendIcon from '@/public/icons/calender.png';
import learnIcon from '@/public/icons/book.png';
import participateIcon from '@/public/icons/hand.png';

const Steps = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-5xl mx-auto space-y-12 md:space-y-0 space-x-8 md:space-x-8">
      {/* Step 1: Attend */}
      <div className="flex flex-col items-center text-center md:w-1/3 mt-0 md:mt-0">
        <div className="bg-blue-100 p-7 rounded-full shadow-md mb-6">
          <div className="h-14 w-14 flex items-center justify-center text-blue-500">
            <Image src={attendIcon} alt="Attend Events" width={65} height={65} />
          </div>
        </div>
        <h3 className="text-2xl font-semibold">Attend</h3>
        <p className="text-gray-500 mt-3 text-lg">Find and attend the unique events hosted this week.</p>
      </div>

      {/* Step 2: Learn */}
      <div className="flex flex-col items-center text-center md:w-1/3 mt-4 md:mt-8">
        <div className="bg-green-100 p-7 rounded-full shadow-md mb-6">
          <div className="h-14 w-14 flex items-center justify-center text-green-500">
            <Image src={learnIcon} alt="Learn" width={65} height={65} />
          </div>
        </div>
        <h3 className="text-2xl font-semibold">Learn</h3>
        <p className="text-gray-500 mt-3 text-lg">Listen and learn from experts, clubs, and peers.</p>
      </div>

      {/* Step 3: Participate */}
      <div className="flex flex-col items-center text-center md:w-1/3 mt-4 md:mt-16">
        <div className="bg-yellow-100 p-7 rounded-full shadow-md mb-6">
          <div className="h-14 w-14 flex items-center justify-center text-yellow-500">
            <Image src={participateIcon} alt="Participate" width={65} height={65} />
          </div>
        </div>
        <h3 className="text-2xl font-semibold">Participate</h3>
        <p className="text-gray-500 mt-3 text-lg">Engage in the interactive activities hosted throughout the week.</p>
      </div>
    </div>
  );
};

export default Steps;
