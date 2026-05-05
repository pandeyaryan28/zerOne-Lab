import { motion } from "motion/react";
import { Handshake, Presentation, CheckCircle2 } from "lucide-react";

export const AddOns = () => {
  const addons = [
    {
      icon: <Handshake className="w-10 h-10 text-white" />,
      title: "Founder Support",
      price: "₹1,999/mo",
      features: ["Strategic consulting", "Growth roadmapping", "Tech advisory"]
    },
    {
      icon: <Presentation className="w-10 h-10 text-white" />,
      title: "Investor Readiness",
      price: "₹1,999",
      features: ["Deck review", "Data room setup", "Metric visualization"]
    }
  ];

  return (
    <section className="py-32 bg-dark-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">ELEVATE YOUR LAUNCH</h2>
          <p className="text-gray-500">Optional add-ons to give you the unfair advantage.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {addons.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem]"
            >
              <div className="bg-dark-bg p-12 rounded-[2.25rem] h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-3xl bg-white/5 border border-white/10 group-hover:bg-neon-primary group-hover:text-black transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-white">{item.price}</div>
                    <div className="text-xs font-mono text-gray-500">ONE-TIME FEE</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-8 tracking-tighter">{item.title}</h3>
                
                <div className="space-y-4">
                  {item.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-neon-primary" />
                      <span className="text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
