"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  image2: string;
}

const timelineData: TimelineEvent[] = [
  {
    date: "August 2024",
    title: "Start of MVHS Tech Internship Program",
    description:
      "Launched the MVHS Tech Internship program and recruited students to begin building a student-led technology initiative. This program was designed to empower students with hands-on experience in technology leadership and project management. The initiative quickly gained traction, with over 30 students applying for the first cohort. The program's success has inspired similar initiatives at neighboring schools.",
    tags: ["Program Launch", "Student Leadership"],
    image: "/images/timeline/group-working.jpeg",
    image2: "/images/timeline/students-working.jpeg",
  },
  {
    date: "Fall 2024",
    title: "MVHS Tech Website Launched",
    description:
      "Developed and launched the tech website, a central hub for resources, tutorials, and outreach tools, built with Next.js. The website features an intuitive user interface with comprehensive documentation for students and teachers. It has become an essential resource for the school community. The platform continues to evolve with regular updates based on user feedback.",
    tags: ["Next.js", "Website", "Outreach"],
    image: "/images/timeline/website.png",
    image2: "/images/timeline/student-working.jpeg",
  },
  {
    date: "Fall 2024",
    title: "MVHS Turkey Trot 2024",
    description:
      "Collaborated with the community to create a marketing plan and distributed both tech and non-tech infused promotional materials. The event successfully integrated technology with traditional community engagement, featuring QR codes for registration and real-time tracking. Significant amounts of people joined the event, raising funds for local causes. The success of this event established a new model for community-tech partnerships.",
    tags: ["Community", "Marketing", "Event"],
    image: "/images/timeline/group-photo.jpeg",
    image2: "/images/timeline/group-photo-2.jpeg",
  },
  {
    date: "Fall 2024",
    title: "Meeting with Tiffany Taylor (ASU+GSV)",
    description:
      "Met with Tiffany Taylor from ASU+GSV through Dr. Glazer's invitation. Shared our work and received an invitation to ASU-GSV. The meeting was a turning point for our program, opening doors to national recognition and networking opportunities. Our presentation impressed the ASU+GSV team, leading to ongoing mentorship and collaboration opportunities.",
    tags: ["Networking", "ASU+GSV", "Presentation"],
    image: "/images/timeline/tiffany-taylor-meeting.jpeg",
    image2: "/images/timeline/presentation-tiffany-taylor.jpeg",
  },
  {
    date: "Spring 2025",
    title: "Presentation at Berkeley 21 CSLA Conference",
    description:
      "Tech Internship students presented their perspectives on educational technology and student-driven innovation at the Berkeley-hosted 21 CSLA Conference. The presentation highlighted the importance of student voice in educational technology decisions and showcased our successful implementation of student-led tech initiatives. Our team received recognition for innovative approaches to integrating technology in education. The conference provided valuable networking opportunities with education leaders across California.",
    tags: ["Conference", "Berkeley", "Student Voice"],
    image: "/images/timeline/berkeley-speaking.jpeg",
    image2: "/images/timeline/berkeley-conference-group.jpeg",
  },
  {
    date: "Spring 2025",
    title: "Google Innovator Project",
    description:
      "Began development of a customizable AI Bill of Rights program for schools, incorporating legal policy, ethical standards, and AI-driven analysis tools. The project aims to establish guidelines for responsible AI use in educational settings while protecting student privacy and promoting ethical technology practices. Our team collaborated with legal experts and educators to ensure the program's comprehensiveness and practicality. The initiative has garnered interest from educational institutions nationwide.",
    tags: ["Google Innovator", "AI", "Policy"],
    image: "/images/timeline/students-discussing.jpeg",
    image2: "/images/timeline/students-discussing-2.jpeg",
  },
  {
    date: "Spring 2025",
    title: "Department of Education Webinars",
    description:
      "Spoke about the role of AI in education during two California Department of Education webinars. The presentations focused on practical applications of AI in classroom settings and ethical considerations for educational technology. Our insights were well-received, leading to invitations for additional speaking engagements. The webinars reached thousands of people across California, expanding our program's influence.",
    tags: ["AI", "Webinars", "Education Policy"],
    image: "/images/timeline/group-jaime-nueze.jpeg",
    image2: "/images/timeline/students-discussing-2.jpeg",
  },
  {
    date: "Spring 2025",
    title: "Presentation at Common Sense Media Summit",
    description:
      "Contributed to the Common Sense Media Summit, where students shared insights on tech use, digital wellness, and ethical AI. Our presentation highlighted the importance of student perspectives in developing responsible technology policies. The summit provided a platform to showcase our school's innovative approach to digital citizenship education. Our contributions were featured in the summit's final report, gaining recognition for our program.",
    tags: ["Media", "Common Sense", "Digital Citizenship"],
    image: "/images/timeline/common-sense-media.jpeg",
    image2: "/images/timeline/common-sense-media-2.jpeg",
  },
  {
    date: "Spring 2025",
    title: "Digital Wellbeing Challenge",
    description:
      "Hosted an expert panel at MVHS and an AI playlab at a local middle school for AI Day, promoting digital literacy and responsible AI use. The event engaged over 100 students in hands-on AI activities and discussions about digital wellbeing. The expert panel provided valuable insights on balancing technology use with mental health. The success of this event led to the development of a district-wide digital wellbeing curriculum.",
    tags: ["AI", "Wellbeing", "Community Engagement"],
    image: "/images/timeline/ai-expert-panel.jpeg",
    image2: "/images/timeline/ai-playlab.jpeg",
  },
  {
    date: "Spring 2025",
    title: "Bill of Rights Video Game",
    description:
      "Developed an interactive video game based on the SAFE-AI Bill of Rights for Educators. The game teaches players about the six key rights: Support, Agency, Fairness, Equitable access, Advocacy, and Information. Players navigate educational scenarios where they must apply these rights to make ethical decisions about AI implementation in classrooms. The game has been used in teacher professional development workshops across the district.",
    tags: ["AI", "Education", "Game Development"],
    image: "/images/timeline/ai-playlab-3.jpeg",
    image2: "/images/timeline/ai-playlab-4.jpeg",
  },
  {
    date: "Spring 2025",
    title: "Bill of Rights Card Game",
    description:
      "Created a card game to help educators understand and apply the SAFE-AI Bill of Rights principles. The game features scenario cards that present common AI implementation challenges in education, along with solution cards based on the six rights. Players collaborate to match scenarios with appropriate rights-based solutions, fostering discussion about ethical AI use in education. The card game has been distributed to schools throughout the region.",
    tags: ["AI", "Education", "Game Design"],
    image: "/images/timeline/ai-playlab-5.jpeg",
    image2: "/images/timeline/group-photo-2.jpeg",
  },
  {
    date: "Spring 2025",
    title: "ASU-GSV Summit",
    description:
      "Presented at ASU-GSV's AI Show on Sunday and the Summit at the Glass Classroom on Tuesday. Showcased our team's work and shared our unique perspective on AI in education. The presentations highlighted our student-led approach to technology innovation and our commitment to ethical AI implementation. We also had the opportunity to learn from other teams and experts, gaining valuable insights to enhance our program.",
    tags: ["ASU+GSV", "AI", "Presentation", "Networking"],
    image: "/images/timeline/asu-gsv-2.jpeg",
    image2: "/images/timeline/group-colin-capernick.jpeg",
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
            <div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="text-yellow-600 font-bold text-lg">{event.date}</span>
              <h3 className="text-2xl font-bold mt-2 text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{event.description}</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {event.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-32 h-64 flex-shrink-0 flex flex-col gap-2">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-1/2 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
              />
              <img 
                src={event.image2} 
                alt={`${event.title} (2)`} 
                className="w-full h-1/2 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-32 h-64 flex-shrink-0 flex flex-col gap-2">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-1/2 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
              />
              <img 
                src={event.image2} 
                alt={`${event.title} (2)`} 
                className="w-full h-1/2 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="text-yellow-600 font-bold text-lg">{event.date}</span>
              <h3 className="text-2xl font-bold mt-2 text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{event.description}</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {event.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full py-16 min-h-screen mb-32" ref={containerRef}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 transform-origin-0"
        style={{ scaleX }}
      />
      
      <div className="w-full">
        <div className="relative">
          {/* Central line that runs through all events */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200" />
          
          {timelineData.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-center mb-32 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-8 h-8 bg-yellow-500 rounded-full shadow-lg relative">
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Content container */}
              <div className="w-full grid grid-cols-2 gap-8">
                {/* Left side */}
                <div className={`pr-8 ${index % 2 === 0 ? 'block' : 'invisible'}`}>
                  <div className="flex items-center gap-4 justify-end">
                    <div
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-yellow-600 font-bold text-lg">{event.date}</span>
                      <h3 className="text-2xl font-bold mt-2 text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 mt-3 leading-relaxed">{event.description}</p>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {event.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-48 h-96 flex-shrink-0 flex flex-col gap-2">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-1/2 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                      />
                      <img 
                        src={event.image2} 
                        alt={`${event.title} (2)`} 
                        className="w-full h-1/2 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Right side */}
                <div className={`pl-8 ${index % 2 !== 0 ? 'block' : 'invisible'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-48 h-96 flex-shrink-0 flex flex-col gap-2">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-1/2 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                      />
                      <img 
                        src={event.image2} 
                        alt={`${event.title} (2)`} 
                        className="w-full h-1/2 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-yellow-600 font-bold text-lg">{event.date}</span>
                      <h3 className="text-2xl font-bold mt-2 text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 mt-3 leading-relaxed">{event.description}</p>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {event.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 