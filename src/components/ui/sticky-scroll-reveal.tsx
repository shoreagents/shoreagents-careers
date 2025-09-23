"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyScrollRevealProps {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}

export const StickyScrollReveal = ({
  content,
  contentClassName,
}: StickyScrollRevealProps) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // More sensitive breakpoint calculation
      const cardsBreakpoints = content.map((_, index) => {
        // Create more granular breakpoints for better sensitivity
        const baseProgress = index / cardLength;
        const nextProgress = (index + 1) / cardLength;
        const midPoint = (baseProgress + nextProgress) / 2;
        return midPoint;
      });
      
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint);
          if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        0
      );
      
      // Ensure we don't go beyond the content length
      const newActiveCard = Math.min(closestBreakpointIndex, cardLength - 1);
      setActiveCard(newActiveCard);
    });

    return () => unsubscribe();
  }, [scrollYProgress, cardLength, content]);

  return (
    <div
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 bg-gray-900"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: activeCard === index ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  y: activeCard === index ? 0 : 10,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="text-lg text-white max-w-sm mt-10"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md sticky top-10 overflow-hidden",
          contentClassName
        )}
        key={activeCard}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </div>
  );
};
