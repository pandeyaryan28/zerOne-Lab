import { motion } from "motion/react";
import { Handshake, Presentation, CheckCircle2, Zap } from "lucide-react";

export const AddOns = () => {
  const addons = [
    {
      icon: <Handshake className="w-10 h-10 text-white" />,
      title: "Founder Support",
      price: "₹1,999",
      period: "/ month",
      description: "A continuous guidance layer for your early journey.",
      features: [
        "Daily 10-minute async/sync support",
        "Weekly 1-hour deep session",
        "Validation strategy",
        "Early traction thinking",
        "Decision clarity"
      ]
    },
    {
      icon: <Presentation className="w-10 h-10 text-white" />,
      title: "Investor Readiness",
      price: "₹1,999",
      period: "one-time",
      description: "Turn your raw idea into something actually fundable.",
      features: [
        "Pitch deck creation",
        "Market research summary",
        "Problem-solution clarity",
        "Basic investor narrative"
      ]
    }
  ];

  return (
    <section className="py-32 bg-dark-surface/50 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-neon-primary mb-4"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase">Extended Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic">Strategic Boosters</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Beyond building code, we build successful foundations for founders who iterate fast.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {addons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="group p-[1px] bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] hover:from-neon-primary/30 transition-all duration-500"
            >
              <div className="bg-[#080808] p-10 md:p-14 rounded-[2.9rem] h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-5 rounded-[2rem] bg-white/5 border border-white/10 group-hover:bg-neon-primary group-hover:text-black transition-all duration-500 shadow-xl">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-1 justify-end">
                      <span className="text-4xl font-black text-white">{item.price}</span>
                      <span className="text-xs font-mono text-gray-500 tracking-tighter line-clamp-1">{item.period}</span>
                    </div>
                    <div className="text-[10px] font-mono text-neon-primary font-black uppercase tracking-widest mt-1">Limited Availability</div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-black mb-2 tracking-tighter uppercase italic">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-10 font-medium leading-relaxed italic border-l-2 border-neon-primary/30 pl-4">
                  “{item.description}”
                </p>
                
                <div className="space-y-4 mt-auto">
                  {item.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-4 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-primary shadow-[0_0_8px_rgba(198,255,0,0.8)]" />
                      <span className="text-sm font-bold text-white/70 group-hover/item:text-white transition-colors">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                  <button 
                    onClick={() => window.open('https://forms.gle/5EMDGejeuiucGJZG8', '_blank')}
                    className="w-full py-4 rounded-xl border border-white/10 hover:border-neon-primary/50 text-[10px] font-black uppercase tracking-[0.3em] font-mono hover:bg-neon-primary/5 transition-all text-white/40 hover:text-neon-primary"
                  >
                    Add to Phase 1 Build
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
