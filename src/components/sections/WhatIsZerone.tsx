import { motion } from "motion/react";
import { CheckCircle, Rocket, ShieldCheck } from "lucide-react";

export const WhatIsZerone = () => {
  const features = [
    {
      icon: <CheckCircle className="w-10 h-10 text-neon-primary" />,
      title: "Concept Validation",
      description: "We help you identify the 'Core Hook' of your idea and build just enough to test it with real users."
    },
    {
      icon: <Rocket className="w-10 h-10 text-neon-primary" />,
      title: "Rapid Deployment",
      description: "Your functional web app is live in days, not months. We use high-performance stacks that scale."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-neon-primary" />,
      title: "Investor Proof",
      description: "A working prototype with real user data is worth more than a 50-page pitch deck."
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-10 rounded-[32px] bg-white/[0.03] border border-white/5 hover:border-neon-primary/30 transition-all duration-500 overflow-hidden group"
            >
              {/* Radial Blur Background */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-primary/5 rounded-full blur-[60px] group-hover:bg-neon-primary/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="mb-8">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
