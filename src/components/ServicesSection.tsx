import React from "react";
import { FadeIn } from "./ui/FadeIn";

const SERVICES = [
  {
    num: "01",
    name: "AI Solutions",
    desc: "Creation of sophisticated AI solutions tailored to specific client needs, ideal for enterprise systems and data pipelines."
  },
  {
    num: "02",
    name: "Multi-Agent Systems",
    desc: "High-quality, autonomous multi-agent pipelines that execute complex tasks and orchestrate dynamic workflows."
  },
  {
    num: "03",
    name: "RAG Pipelines",
    desc: "Dynamic Retrieval-Augmented Generation systems that connect LLMs to your private data for highly accurate responses."
  },
  {
    num: "04",
    name: "Cloud Deployment",
    desc: "Crafting cohesive cloud infrastructure architectures using GCP and Docker that ensure scalable and secure deployments."
  },
  {
    num: "05",
    name: "Workflow Automation",
    desc: "Designing clean, modern automated workflows with attention to efficiency, data integrity, and real-time operations."
  }
];

export function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      
      <FadeIn y={40} className="w-full flex justify-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((srv, i) => (
          <FadeIn 
            key={srv.num}
            delay={i * 0.1}
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 last:border-b-0"
          >
            <div className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none shrink-0 w-[120px] sm:w-[180px] md:w-[240px]">
              {srv.num}
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                {srv.name}
              </h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {srv.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

    </section>
  );
}
