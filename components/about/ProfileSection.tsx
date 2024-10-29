import React from 'react';
import Image from 'next/image';

const ProfileSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">Yash Maheshwari</h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Yash is the visionary behind this project, a high school student determined to help peers find the best opportunities for internships and research. 
            His passion for mentoring and guiding students through their academic and professional journeys inspired him to create this platform.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/yashmaheshwari.png" // Ensure the image is placed in the public directory or provide the correct path
            alt="Yash Maheshwari"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;