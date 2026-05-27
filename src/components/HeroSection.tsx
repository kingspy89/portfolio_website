import { Magnet } from "./ui/Magnet";
import { FadeIn } from "./ui/FadeIn";
import { ContactButton } from "./ui/ContactButton";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-x-clip px-6 md:px-10">
      
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex items-center justify-between pt-6 md:pt-8 w-full z-20 relative">
        {["About", "Projects", "Contact"].map((link) => (
          <a
            key={link}
            href={link === "Contact" ? "https://www.linkedin.com/in/malav-patel-766196302/" : `#${link.toLowerCase()}`}
            target={link === "Contact" ? "_blank" : undefined}
            rel={link === "Contact" ? "noopener noreferrer" : undefined}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Heading */}
      <div className="flex-1 flex flex-col justify-center relative z-20 mt-6 sm:mt-4 md:-mt-5">
        <div className="overflow-hidden w-full flex justify-center">
          <FadeIn delay={0.15} y={40} className="w-full text-center">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[9vw]">
              Hi, i&apos;m malav
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <Magnet padding={150} strength={3}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
            alt="Portrait" 
            className="w-full h-auto object-contain pointer-events-none"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="flex items-end justify-between pb-7 sm:pb-8 md:pb-10 relative z-20 w-full">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            an ai developer driven by crafting intelligent and unforgettable agentic systems
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

    </section>
  );
}
