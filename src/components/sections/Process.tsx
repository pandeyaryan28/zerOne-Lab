import { motion } from "motion/react";

export const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Share",
      desc: "Tell us your idea. We sign an NDA if needed. You share the vision, we identify the hook."
    },
    {
      num: "02",
      title: "Define",
      desc: "We strip away the noise. We scope down to the absolute core features needed for proof."
    },
    {
      num: "03",
      title: "Build",
      desc: "7 days of high-intensity development. No bloat. Pure, functional application code."
    },
    {
      num: "04",
      title: "Launch",
      desc: "We deploy. You test. You gather evidence. You move to the next stage with data."
    }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">The Process</h2>
          <p className="text-gray-400 text-lg">We move at the speed of thought. Here is how we turn your vision into a reality in 168 hours.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-0 left-8 md:left-1/2 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.4, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row gap-12 md:gap-0 items-start ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Number Bubble from Theme */}
                <div className={`absolute left-0 md:left-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 scale-75 md:scale-100 transition-colors duration-500 border ${
                  i === 2 ? "border-neon-primary bg-neon-primary/10 text-neon-primary" : "border-white/20 text-white/40 bg-dark-bg"
                }`}>
                  <span className="text-[10px] font-mono font-bold tracking-tighter">{step.num}</span>
                </div>

                <div className={`w-full md:w-[45%] pl-24 md:pl-0 ${i === 2 ? "" : "opacity-40"} ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                  <h3 className={`text-2xl font-bold mb-4 uppercase tracking-tighter ${i === 2 ? "text-neon-primary" : "text-white"}`}>{step.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
