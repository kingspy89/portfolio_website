import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  let charIndex = 0;
  const totalChars = text.replace(/\s/g, "").length;

  return (
    <p ref={container} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const wordChars = word.split("");
        const wordEl = (
          <span key={i} className="inline-flex relative whitespace-nowrap mr-[0.25em]">
            {wordChars.map((char, j) => {
              const currentIdx = charIndex;
              charIndex++;
              
              const start = currentIdx / totalChars;
              const end = start + (1 / totalChars);
              
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
              
              return (
                <span key={j} className="relative inline-block">
                  <span className="invisible">{char}</span>
                  <motion.span
                    className="absolute left-0 top-0"
                    style={{ opacity }}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
        return wordEl;
      })}
    </p>
  );
}
