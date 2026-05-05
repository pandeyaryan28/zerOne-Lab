import { motion } from "motion/react";
import { MessageSquare, BarChart3, Users2, LineChart } from "lucide-react";

export const Value = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "User Feedback",
      description: "Direct behavioral insights from active prototype usage.",
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Market Testing",
      description: "Real data to prove value proposition to potential customers.",
      color: "bg-purple-500/20 text-purple-400"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Investor Proof",
      description: "Tangible evidence to secure funding and build confidence.",
      color: "bg-emerald-500/20 text-emerald-400"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Future Roadmap",
      description: "A clear engineering path for your V1 and beyond.",
      color: "bg-amber-500/20 text-amber-400"
    }
  ];

  return (
    <section id="value" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            FROM IDEA <br />
            <span className="text-neon-primary">TO EVIDENCE</span>
          </h2>
          <div className="h-1 w-24 bg-neon-primary rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className={`p-4 rounded-2xl ${step.color} w-fit mb-6`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
