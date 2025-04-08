"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface AutoScrollProps {
  children: React.ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
}

export default function AutoScroll({
  children,
  speed = 1,
  pauseOnHover = true,
}: AutoScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const animationRef = useRef<number>();
  const isScrollingToTop = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkScrollPosition = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      setScrollPosition(scrollTop);
      setIsAtTop(scrollTop === 0);
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
    };

    const scroll = () => {
      if (isHovered) return;

      const container = containerRef.current;
      if (!container) return;

      // If we're at the bottom and not already scrolling to top
      if (isAtBottom && !isScrollingToTop.current) {
        isScrollingToTop.current = true;
        
        // Smoothly scroll back to top
        container.scrollTo({ 
          top: 0, 
          behavior: "smooth" 
        });
        
        // Reset the flag after animation completes
        setTimeout(() => {
          isScrollingToTop.current = false;
          setIsAtBottom(false);
        }, 1000);
        
        return;
      }
      
      // Normal scrolling
      if (!isScrollingToTop.current) {
        container.scrollTop += speed;
        checkScrollPosition();
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    container.addEventListener("scroll", checkScrollPosition);
    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, isHovered, isAtBottom]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 transform-origin-0 z-50"
        style={{ scaleX }}
      />
      {children}
    </div>
  );
} 