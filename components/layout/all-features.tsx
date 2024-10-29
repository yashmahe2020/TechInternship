import React from 'react';

const AllFeatures: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto w-full">
      {/* Ensure the grid has 5 columns on larger screens */}
      <section className="grid grid-cols-1 gap-8 lg:gap-4 lg:grid-cols-5">

        {/* Feature 1: STEAM Speaker Series */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r py-10 relative group dark:border-neutral-800">
          <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
          <div className="mb-4 relative z-10 px-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-microphone">
              <path d="M12 1v8a3 3 0 0 0 6 0v-8"></path>
              <path d="M8 1v8a6 6 0 0 0 12 0v-8"></path>
              <path d="M12 16v4m0 4v-4"></path>
              <path d="M8 12h8"></path>
            </svg>
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
            <span className="group-hover:translate-x-2 transition duration-200 inline-block">STEAM Speaker Series</span>
          </div>
          <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
            Join us on Monday for a series of talks by STEAM professionals. Talks are 30 minutes each with an optional Q&A. Attend in the Theater or watch live streams in your class.
          </p>
        </div>

        {/* Feature 2: STEAM Fair */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r py-10 relative group dark:border-neutral-800">
          <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
          <div className="mb-4 relative z-10 px-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-flask">
              <path d="M9 3v7a5 5 0 0 0 6 0v-7"></path>
              <path d="M5 21v-2a5 5 0 0 1 10 0v2"></path>
            </svg>
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
            <span className="group-hover:translate-x-2 transition duration-200 inline-block">STEAM Fair</span>
          </div>
          <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
            On Tuesday, explore hands-on STEAM activities and learn about STEAM careers from community partners during lunch in the Quad.
          </p>
        </div>

        {/* Feature 3: Junior Achievement Entrepreneurship Workshop */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r py-10 relative group dark:border-neutral-800">
          <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
          <div className="mb-4 relative z-10 px-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-briefcase">
              <path d="M3 7v13h18V7"></path>
              <path d="M8 21v-2"></path>
              <path d="M16 21v-2"></path>
              <path d="M12 21v-2"></path>
              <path d="M12 3v5"></path>
            </svg>
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
            <span className="group-hover:translate-x-2 transition duration-200 inline-block">Entrepreneurship Workshop</span>
          </div>
          <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
            On Wednesday, selected students will participate in an entrepreneurship workshop to learn how to start and manage a business. This event is held during periods 4 and 6.
          </p>
        </div>

        {/* Feature 4: STEAM Club Outreach & Hour of Code */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r py-10 relative group dark:border-neutral-800">
          <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
          <div className="mb-4 relative z-10 px-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-code">
              <path d="M7 8l-4 4l4 4"></path>
              <path d="M17 8l4 4l-4 4"></path>
              <path d="M14 6l-2 12"></path>
            </svg>
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
            <span className="group-hover:translate-x-2 transition duration-200 inline-block">STEAM Club Outreach & Hour of Code</span>
          </div>
          <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
            On Thursday, participate in club outreach activities and join the Hour of Code, hosted by the Computer Science students for Algebra 1 and Geometry classes.
          </p>
        </div>

        {/* Feature 5: Open Art Studios & STEAM Performance */}
        <div className="flex flex-col py-10 relative group dark:border-neutral-800">
          <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"></div>
          <div className="mb-4 relative z-10 px-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brush">
              <path d="M4 18a1 1 0 0 0 1.293.707L8 17a1 1 0 0 0 .5-1.5"></path>
              <path d="M5 16a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1"></path>
              <path d="M15 5l3 3"></path>
              <path d="M17 3h3v3"></path>
              <path d="M3 21v-3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v3"></path>
            </svg>
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200"></div>
            <span className="group-hover:translate-x-2 transition duration-200 inline-block">Open Art Studios & STEAM Performance</span>
          </div>
          <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
            On Friday, the Open Art Studios event showcases student artwork, followed by a STEAM performance to celebrate creativity and innovation in the arts.
          </p>
        </div>

      </section>
    </div>
  );
};

export default AllFeatures;
