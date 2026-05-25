import { motion } from "motion/react";
import { Button } from "./Button";
import { Zap } from "lucide-react";
import * as React from "react";

interface NavbarProps {
  currentView?: "home" | "case-studies";
  onViewChange?: (view: "home" | "case-studies", caseId?: string | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView = "home", onViewChange }) => {
  const handleLogoClick = () => {
    if (onViewChange) {
      onViewChange("home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (currentView !== "home" && onViewChange) {
      e.preventDefault();
      onViewChange("home");
      // Delay slightly to let page render before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-40 bg-dark-bg/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={handleLogoClick}>
          <div className="w-8 h-8 bg-neon-primary rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="w-4 h-4 bg-dark-bg rotate-45"></div>
          </div>
          <span className="text-xl font-display font-bold tracking-tighter text-white">
            zer<span className="text-neon-primary">O</span>ne Lab
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Problem", "Pricing", "Process", "Value"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-sm font-medium text-white/60 hover:text-neon-primary transition-colors uppercase tracking-[0.1em]"
            >
              {item}
            </a>
          ))}
          <a
            href="#case-studies"
            onClick={(e) => {
              e.preventDefault();
              if (onViewChange) onViewChange("case-studies");
            }}
            className={`text-sm font-medium transition-colors uppercase tracking-[0.1em] ${
              currentView === "case-studies" ? "text-neon-primary border-b border-neon-primary" : "text-white/60 hover:text-neon-primary"
            }`}
          >
            Case Studies
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => alert("Client Portal launching soon for active founders!")}
            className="hidden sm:inline-flex bg-white/5 border-white/10 rounded-full text-[10px] uppercase tracking-widest px-5 font-bold"
          >
            Client Portal
          </Button>
          <Button 
            glow 
            size="sm" 
            onClick={() => {
              if (onViewChange) {
                onViewChange("home");
                setTimeout(() => {
                  window.open('https://forms.gle/5EMDGejeuiucGJZG8', '_blank');
                }, 100);
              } else {
                window.open('https://forms.gle/5EMDGejeuiucGJZG8', '_blank');
              }
            }}
            className="rounded-full px-5 text-xs uppercase tracking-widest font-bold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
