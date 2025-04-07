"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const timelineData: TimelineEvent[] = [
  {
    date: "2024",
    title: "Tech Support Website Launch",
    description:
      "Launched a comprehensive support platform to help students, faculty, and parents with various technology tools and resources.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "/images/timeline/website-launch.jpg",
  },
  {
    date: "2023",
    title: "Digital Learning Initiative",
    description:
      "Implemented a school-wide digital learning program, integrating various educational technologies and platforms.",
    tags: ["Canvas", "Google Classroom", "Educational Tech"],
    image: "/images/timeline/digital-learning.jpg",
  },
  {
    date: "2023",
    title: "Parent Communication Hub",
    description:
      "Established a centralized communication system for parents, improving school-home connectivity.",
    tags: ["ParentSquare", "Aeries", "Communication"],
    image: "/images/timeline/parent-communication.jpg",
  },
  {
    date: "2022",
    title: "Student Support Center",
    description:
      "Created a dedicated support center for students, offering technical assistance and resources.",
    tags: ["Support", "Resources", "Student Services"],
    image: "/images/timeline/student-support.jpg",
  },
  {
    date: "2022",
    title: "Faculty Tech Training Program",
    description:
      "Developed comprehensive training programs for faculty members to enhance their technical skills.",
    tags: ["Professional Development", "Training", "Education"],
    image: "/images/timeline/faculty-training.jpg",
  },
  {
    date: "2021",
    title: "Digital Infrastructure Upgrade",
    description:
      "Modernized the school's digital infrastructure to support advanced learning technologies.",
    tags: ["Infrastructure", "Network", "Security"],
    image: "/images/timeline/infrastructure.jpg",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const TimelineCard = ({ event, isLeft }: { event: TimelineEvent; isLeft: boolean }) => {
    return (
      <div className={`flex items-center gap-2 ${isLeft ? 'justify-end' : ''}`}>
        {isLeft ? (
          <>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span className="text-blue-600 font-bold text-lg">{event.date}</span>
              <h3 className="text-2xl font-bold mt-2 text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{event.description}</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {event.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <div className="w-32 h-32 flex-shrink-0">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-32 h-32 flex-shrink-0">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span className="text-blue-600 font-bold text-lg">{event.date}</span>
              <h3 className="text-2xl font-bold mt-2 text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{event.description}</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {event.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full py-16" ref={containerRef}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 transform-origin-0"
        style={{ scaleX }}
      />
      
      <div className="w-full">
        <div className="relative">
          {/* Central line that runs through all events */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
          
          {timelineData.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center mb-24 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg relative">
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Content container */}
              <div className="w-full grid grid-cols-2 gap-8">
                {/* Left side */}
                <div className={`pr-8 ${index % 2 === 0 ? 'block' : 'invisible'}`}>
                  <div className="flex items-center gap-4 justify-end">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm"
                    >
                      <span className="text-blue-600 font-bold text-lg">{event.date}</span>
                      <h3 className="text-2xl font-bold mt-2 text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 mt-3 leading-relaxed">{event.description}</p>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {event.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                    <div className="w-48 h-48 flex-shrink-0">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Right side */}
                <div className={`pl-8 ${index % 2 !== 0 ? 'block' : 'invisible'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-48 h-48 flex-shrink-0">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm"
                    >
                      <span className="text-blue-600 font-bold text-lg">{event.date}</span>
                      <h3 className="text-2xl font-bold mt-2 text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 mt-3 leading-relaxed">{event.description}</p>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {event.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 