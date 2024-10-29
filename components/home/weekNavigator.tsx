"use client"

import React, { useState } from "react";

const WeekNavigator: React.FC = () => {
  // Define the days of the work week
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Define filler content for each day
  const dayContent = {
    Monday: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Tuesday: "Vestibulum at odio eu metus pulvinar suscipit.",
    Wednesday: "Nulla facilisi. Sed efficitur metus et massa vehicula.",
    Thursday: "Praesent euismod nulla a ante congue, a facilisis metus.",
    Friday: "Curabitur eget erat a metus gravida sodales.",
  };

  // State to track the current day index
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  // Handler to go to the next day
  const handleNextDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex + 1) % daysOfWeek.length);
  };

  // Handler to go to the previous day
  const handlePrevDay = () => {
    setCurrentDayIndex(
      (prevIndex) => (prevIndex - 1 + daysOfWeek.length) % daysOfWeek.length
    );
  };

  return (
    <section className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-7xl p-8 mx-auto bg-white shadow-lg rounded-lg">
        {/* Previous Button */}
        <button
          onClick={handlePrevDay}
          className="p-4 text-gray-500 transition duration-200 ease-in-out rounded-full hover:bg-gray-200 focus:outline-none"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path d="M15.5 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Display Current Day and Content */}
        <div className="flex-1 px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            {daysOfWeek[currentDayIndex]}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {dayContent[daysOfWeek[currentDayIndex] as keyof typeof dayContent]}
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextDay}
          className="p-4 text-gray-500 transition duration-200 ease-in-out rounded-full hover:bg-gray-200 focus:outline-none"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path d="M8.5 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default WeekNavigator;
