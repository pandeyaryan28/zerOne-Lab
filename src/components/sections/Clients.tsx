import { motion } from "motion/react";
import { Award, TrendingUp } from "lucide-react";

export const Clients = () => {
  const clients = [
    { name: "Intugine Technologies", type: "Logistics Tech", highlight: "SERIES A" },
    { name: "SVS Food", type: "F&B", highlight: "SHARK TANK FUNDED" },
    { name: "UniCare", type: "HealthTech", highlight: "FUNDED BY OUR PARTNER" },
    { name: "Glinte LipGloss", type: "D2C Fashion" },
  ];

  // Double the list for infinite marquee effect
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-black/50 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-center gap-4 opacity-50">
          <Award className="w-5 h-5 text-neon-primary" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em]">Trusted by Forward-Thinking Founders</span>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center py-4"
        >
          {marqueeItems.map((client, i) => (
            <div
              key={i}
              className="group flex flex-col items-start px-8 py-6 rounded-2xl glass border-white/5 hover:border-neon-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl md:text-3xl font-black tracking-tighter text-white/80 group-hover:text-neon-primary transition-colors">
                  {client.name.toUpperCase()}
                </span>
                {client.highlight && (
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-neon-primary/20 border border-neon-primary/30">
                    <TrendingUp className="w-3 h-3 text-neon-primary" />
                    <span className="text-[10px] font-black text-neon-primary uppercase tracking-tighter">
                      {client.highlight}
                    </span>
                  </div>
                )}
              </div>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                {client.type}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Grid Fallback / Additional Info */}
      <div className="container mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 hover:opacity-100 transition-opacity duration-700">
        <div className="text-[10px] font-mono uppercase tracking-widest text-center py-2 border border-white/10 rounded-lg bg-white/5">
          Real Products
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-center py-2 border border-white/10 rounded-lg bg-white/5">
          Real Feedback
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-center py-2 border border-white/10 rounded-lg bg-white/5">
          Real Users
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-center py-2 border border-white/10 rounded-lg bg-white/5">
          Real Growth
        </div>
      </div>
    </section>
  );
};
