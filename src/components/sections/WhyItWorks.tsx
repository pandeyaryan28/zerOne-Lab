import { motion } from "motion/react";

export const WhyItWorks = () => {
  const stats = [
    { label: "Lower Cost", value: 90, sub: "compared to agencies" },
    { label: "Faster Build", value: 85, sub: "7-day turnaround" },
    { label: "Real Feedback", value: 100, sub: "real world evidence" }
  ];

  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              WHY THIS <br />
              <span className="text-neon-primary underline decoration-neon-primary/30 underline-offset-8">WORKS.</span>
            </h2>
            <div className="space-y-12">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xl font-bold">{stat.label}</span>
                    <span className="text-neon-primary font-display font-black text-2xl">{stat.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      className="h-full bg-neon-primary shadow-[0_0_15px_rgba(198,255,0,0.5)]"
                    />
                  </div>
                  <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-neon-primary/20 rounded-full blur-[100px] animate-pulse" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full border-2 border-dashed border-white/10 rounded-full flex items-center justify-center"
            >
               <div className="w-3/4 h-3/4 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-1/2 h-1/2 bg-neon-primary rounded-full blur-2xl opacity-20" />
               </div>
               
               {/* Orbital elements */}
               <motion.div
                 animate={{ rotate: -360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute top-1/2 left-0 -translate-x-1/2 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
               >
                 <span className="text-xs font-mono font-bold text-white">SPEED</span>
               </motion.div>
               
               <motion.div
                 animate={{ rotate: -360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="absolute top-0 left-1/2 -translate-y-1/2 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
               >
                 <span className="text-xs font-mono font-bold text-white">EVIDENCE</span>
               </motion.div>
            </motion.div>
            
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
               <span className="text-5xl font-black text-white">VALU-</span>
               <span className="text-5xl font-black text-neon-primary">ATION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
