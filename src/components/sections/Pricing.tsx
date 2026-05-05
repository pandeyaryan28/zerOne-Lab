import { motion } from "motion/react";
import { Button } from "../Button";
import { Check, Info, Zap } from "lucide-react";

export const Pricing = () => {
  const inclusions = [
    "Functional Web Application",
    "Core Features Implementation",
    "Premium Dark/Light UI",
    "Cloud Deployment",
    "Basic Market Testing Support"
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 relative overflow-hidden group">
          {/* Subtle Icon Background */}
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Zap className="w-32 h-32 text-neon-primary" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <span className="text-neon-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                LAUNCH PACKAGE
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tighter">
                READY TO <br />
                <span className="text-neon-primary italic underline underline-offset-8">VALIDATE?</span>
              </h2>

              <ul className="space-y-4 mb-12">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <Check className="w-4 h-4 text-neon-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center md:items-end">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                className="text-center md:text-right mb-10"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-7xl md:text-8xl font-black tracking-tighter">
                    ₹4,999
                  </span>
                  <span className="text-white/40 text-sm font-mono uppercase">/ single build</span>
                </div>
                <div className="text-neon-primary/60 text-xs font-mono uppercase tracking-[0.3em]">limited slots available</div>
              </motion.div>

              <Button 
                glow 
                size="lg" 
                onClick={() => window.open('https://forms.gle/5EMDGejeuiucGJZG8', '_blank')}
                className="w-full h-14 text-sm uppercase tracking-widest font-black bg-white text-black hover:bg-neon-primary rounded-md"
              >
                Secure Your Slot
              </Button>
              <p className="mt-6 text-[10px] text-white/30 text-center md:text-right uppercase tracking-[0.3em] font-bold">
                * 7-day deployment guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
