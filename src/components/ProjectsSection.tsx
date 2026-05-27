import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { LiveProjectButton } from "./ui/LiveProjectButton";

const PROJECTS = [
  {
    num: "01",
    cat: "Google APL",
    name: "StadiumAI",
    img: "/stadium_ai.png",
  },
  {
    num: "02",
    cat: "Top Performer",
    name: "Aegis OS",
    img: "/aegis.png",
  },
  {
    num: "03",
    cat: "ML Pipeline",
    name: "Crediscope",
    img: "/crediscope.png",
  }
];

interface CardProps {
  project: typeof PROJECTS[0];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function Card({ project, index, progress, range, targetScale }: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full">
      <motion.div 
        style={{ scale, top: index * 28 }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 md:gap-10 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[#D7E2EA] font-black text-[clamp(3rem,10vw,140px)] leading-none shrink-0">{project.num}</span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm font-medium">{project.cat}</span>
              <h3 className="text-[#D7E2EA] font-medium text-[clamp(1.5rem,3vw,3rem)] leading-none uppercase mt-1">{project.name}</h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={project.img} 
            alt={project.name} 
            className="w-full h-[clamp(200px,40vw,480px)] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" 
          />
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef} 
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 pb-32 pt-20 sm:pt-24 md:pt-32 px-5 sm:px-8 md:px-10"
    >
      <div className="w-full flex justify-center mb-10 sm:mb-16 md:mb-20">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
          Project
        </h2>
      </div>

      <div className="flex flex-col relative w-full items-center">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
          const range: [number, number] = [i * 0.25, 1];
          
          return (
            <Card 
              key={project.num}
              project={project} 
              index={i} 
              progress={scrollYProgress} 
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
