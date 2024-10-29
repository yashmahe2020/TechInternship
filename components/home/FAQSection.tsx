"use client"

import React, { useState } from "react";

const FAQSection = () => {
  // State to keep track of which FAQ is open
  const [openItem, setOpenItem] = useState<number | null>(null);

  // Function to toggle open/close state of FAQ items
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Array of FAQ questions
  const questions = [
    "What is this web app template?",
    "Can I customize the components?",
    "How do I deploy this template?",
    "Is this template responsive?",
  ];

  // Array of corresponding answers
  const answers = [
    "This web app template is a starter project designed to help developers quickly set up a new web application. It includes pre-built components, routing, and basic styles to accelerate the development process.",
    "Yes, you can easily customize the components by modifying the styles or structure. The template is built with modularity in mind, allowing you to adjust the components to fit your specific needs.",
    "To deploy this template, you can use platforms like Vercel, Netlify, or any hosting service that supports Next.js. Simply follow the deployment instructions provided by the hosting platform, and your app will be live in no time.",
    "Yes, the template is fully responsive, ensuring that it works seamlessly on mobile devices, tablets, and desktop screens. It uses a responsive grid system and flexible components to adapt to various screen sizes.",
  ];

  return (
    <div className="relative z-20 px-4 md:px-10">
      <div className="space-y-4 max-w-3xl mx-auto">
        {questions.map((question, index) => (
          <div
            key={index}
            className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-8 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 focus:outline-none flex justify-between items-center"
            >
              <span>{question}</span>
              <span>{openItem === index ? "-" : "+"}</span>
            </button>
            {openItem === index && (
              <div className="px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 text-gray-600 dark:text-gray-400">
                <p>{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;