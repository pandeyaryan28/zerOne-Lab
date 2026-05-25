import { motion, useScroll, useSpring, useMotionValue } from "motion/react";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Clients } from "./components/sections/Clients";
import { Problem } from "./components/sections/Problem";
import { Philosophy } from "./components/sections/Philosophy";
import { WhatIsZerone } from "./components/sections/WhatIsZerone";
import { Pricing } from "./components/sections/Pricing";
import { Value } from "./components/sections/Value";
import { AddOns } from "./components/sections/AddOns";
import { WhyItWorks } from "./components/sections/WhyItWorks";
import { Process } from "./components/sections/Process";
import { Footer } from "./components/sections/Footer";
import { CaseStudies } from "./components/sections/CaseStudies";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // App routing/view state
  const [view, setView] = useState<"home" | "case-studies">("home");
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Handle direct selections from marquee or lists
  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    setView("case-studies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavbarViewChange = (newView: "home" | "case-studies", caseId: string | null = null) => {
    setView(newView);
    setSelectedCaseId(caseId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-dark-bg selection:bg-neon-primary selection:text-black">
      {/* Animated Background Elements from Theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.03] dot-grid"></div>
      </div>

      {/* Background Spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(198, 255, 0, 0.03), transparent 80%)`,
        }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar currentView={view} onViewChange={handleNavbarViewChange} />
      
      <main className="relative z-10">
        {view === "home" ? (
          <>
            <Hero />
            <Clients onSelectCase={handleSelectCase} />
            <div id="problem"><Problem /></div>
            <Philosophy />
            <WhatIsZerone />
            <div id="pricing"><Pricing /></div>
            <AddOns />
            <div id="value"><Value /></div>
            <WhyItWorks />
            <div id="process"><Process /></div>
          </>
        ) : (
          <CaseStudies 
            onBackToHome={() => setView("home")} 
            initialSelectedId={selectedCaseId}
            onClearSelectedId={() => setSelectedCaseId(null)}
          />
        )}
        <Footer />
      </main>
    </div>
  );
}
