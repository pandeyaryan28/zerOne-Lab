import { motion } from "motion/react";
import { AlertCircle, Clock, Wallet } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-rose-500" />,
      title: "Months without validation",
      description: "Spending 6 months building a product that nobody wants is the #1 startup killer."
    },
    {
      icon: <Wallet className="w-8 h-8 text-rose-500" />,
      title: "Agencies charge ₹50,000+, ₹1,00,000+",
      description: "Traditional agencies are slow and expensive, eating up your pre-seed capital."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-rose-500" />,
      title: "I have an idea, but I can't build",
      description: "The 'missing technical cofounder' gap stops great ideas before they even start."
    }
  ];

  return (
    <section id="problem" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rose-500 font-mono text-sm tracking-[0.2em] uppercase mb-4 block"
          >
            The Founder&apos;s Dilemma
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            IDEAS DON&apos;T FAIL.<br />
            <span className="text-gray-500">UNVALIDATED IDEAS DO.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-rose-500/30 transition-all duration-500"
            >
              <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 w-fit group-hover:scale-110 transition-transform duration-500">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
