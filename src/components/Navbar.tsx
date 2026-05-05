import { motion } from "motion/react";
import { Button } from "./Button";
import { Zap } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-40 bg-dark-bg/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon-primary rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-dark-bg rotate-45"></div>
          </div>
          <span className="text-xl font-display font-bold tracking-tighter text-white uppercase">
            ZERONE LABS
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Problem", "Pricing", "Process", "Value"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/60 hover:text-neon-primary transition-colors uppercase tracking-[0.1em]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-white/5 border-white/10 rounded-full text-[10px] uppercase tracking-widest px-5 font-bold">
            Client Portal
          </Button>
          <Button glow size="sm" className="rounded-full px-5 text-xs uppercase tracking-widest font-bold">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
