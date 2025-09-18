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
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
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
      setActiveCard(closestBreakpointIndex);
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
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-gray-200"
              >
                {item.title}
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-gray-400 max-w-sm mt-10"
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
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </div>
  );
};
