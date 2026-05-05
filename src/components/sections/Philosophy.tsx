import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Philosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="h-[100vh] flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-neon-primary/5 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] opacity-20" />
      
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-6 text-center z-10"
      >
        <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
          STOP BUILDING <span className="text-white/20">PERFECT.</span><br />
          START <span className="text-neon-primary drop-shadow-[0_0_30px_rgba(198,255,0,0.5)]">PROVING.</span>
        </h2>
        <p className="text-xl md:text-3xl text-gray-400 font-medium max-w-3xl mx-auto leading-tight">
          You don’t need a full product. <br />
          <span className="text-white">You need evidence.</span>
        </p>
      </motion.div>
    </section>
  );
};
