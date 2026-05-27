import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ITEMS = [
  { type: "image", src: "/image.png" },
  { type: "image", src: "/google1.jpg" },
  { type: "image", src: "/image copy.png" },
  { type: "post", src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7464336423278665729" },
  { type: "image", src: "/image copy 2.png" },
  { type: "image", src: "/google2.jpg" }
];

const row1 = [...ITEMS, ...ITEMS, ...ITEMS];
const row2 = [...ITEMS.reverse(), ...ITEMS.reverse(), ...ITEMS.reverse()];

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [startOffset, setStartOffset] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setStartOffset(containerRef.current.offsetTop - window.innerHeight);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setStartOffset(containerRef.current.offsetTop - window.innerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const x1 = useTransform(scrollY, (y) => {
    const offset = Math.max(0, y - startOffset);
    return offset * 0.3 - 500;
  });

  const x2 = useTransform(scrollY, (y) => {
    const offset = Math.max(0, y - startOffset);
    return -(offset * 0.3 - 500);
  });

  return (
    <section ref={containerRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-8">
      
      {/* Row 1 */}
      <motion.div 
        className="flex gap-6 w-max items-center"
        style={{ x: x1, willChange: 'transform' }}
      >
        {row1.map((item, idx) => (
          item.type === "image" ? (
            <img 
              key={`r1-${idx}`} 
              src={item.src} 
              alt={`Preview ${idx}`}
              loading="lazy"
              className="w-[340px] sm:w-[420px] md:w-[480px] h-[220px] sm:h-[280px] md:h-[320px] rounded-2xl object-cover shrink-0 border border-white/10"
            />
          ) : (
            <div key={`r1-${idx}`} className="w-[340px] sm:w-[420px] md:w-[480px] shrink-0 bg-white rounded-2xl overflow-hidden pointer-events-none">
               <iframe src={item.src} height="320" width="100%" frameBorder="0" allowFullScreen title="LinkedIn Post"></iframe>
            </div>
          )
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div 
        className="flex gap-6 w-max items-center"
        style={{ x: x2, willChange: 'transform' }}
      >
        {row2.map((item, idx) => (
          item.type === "image" ? (
            <img 
              key={`r2-${idx}`} 
              src={item.src} 
              alt={`Preview ${idx}`}
              loading="lazy"
              className="w-[340px] sm:w-[420px] md:w-[480px] h-[220px] sm:h-[280px] md:h-[320px] rounded-2xl object-cover shrink-0 border border-white/10"
            />
          ) : (
            <div key={`r2-${idx}`} className="w-[340px] sm:w-[420px] md:w-[480px] shrink-0 bg-white rounded-2xl overflow-hidden pointer-events-none">
               <iframe src={item.src} height="320" width="100%" frameBorder="0" allowFullScreen title="LinkedIn Post"></iframe>
            </div>
          )
        ))}
      </motion.div>

    </section>
  );
}
