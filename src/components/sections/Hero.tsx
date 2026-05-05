import { motion } from "motion/react";
import { Button } from "../Button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-neon-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 px-6 text-left max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon-primary shadow-[0_0_8px_#C6FF00]"></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-white/80">PROTOTYPE PHASE OPEN FOR Q4</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold font-display leading-[0.9] mb-8 tracking-tighter"
          >
            IDEA IN YOUR HEAD?<br />
            LET&apos;S MAKE IT <span className="text-neon-primary italic underline underline-offset-8 decoration-2">
              REAL.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-lg md:text-xl text-white/40 mb-12 font-medium leading-relaxed"
          >
            No technical cofounder? No problem. We build high-performance 
            MVPs for founders who need to move at the speed of thought.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button 
              glow 
              size="lg" 
              onClick={() => window.open('https://forms.gle/5EMDGejeuiucGJZG8', '_blank')}
              className="h-16 px-10 text-lg font-bold rounded-lg shadow-[0_0_30px_rgba(198,255,0,0.3)]"
            >
              Get Your MVP Built
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open('https://calendly.com', '_blank')}
              className="h-16 px-10 text-lg rounded-lg"
            >
              Book Strategy Call
            </Button>
          </motion.div>

          {/* Philosophy Hint from Theme */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 border-l border-neon-primary/30 pl-6 hidden md:block"
          >
            <p className="text-sm text-white/60 italic mb-2">Our Philosophy</p>
            <h3 className="text-2xl font-semibold tracking-tight text-white/90">Stop building perfect. Start proving.</h3>
          </motion.div>
        </div>

        {/* Hero Visual Placeholder - Could be animated geometric shapes */}
        <div className="hidden lg:block flex-1 relative h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-primary/10 to-transparent rounded-full blur-[80px]" />
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full flex items-center justify-center"
          >
            <div className="w-80 h-80 glass rounded-3xl rotate-12 flex items-center justify-center p-8">
              <Zap className="w-32 h-32 text-neon-primary fill-current" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 glass rounded-2xl -rotate-12 p-6">
              <div className="w-full h-2 bg-neon-primary/20 rounded-full mb-4" />
              <div className="w-2/3 h-2 bg-neon-primary/20 rounded-full mb-4" />
              <div className="w-1/2 h-2 bg-neon-primary rounded-full mb-4 shadow-[0_0_10px_#C6FF00]" />
            </div>
          </motion.div>
        </div>
      </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-1 h-12 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full h-1/3 bg-neon-primary"
            />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Scroll to explore</span>
        </motion.div>
      </section>
  );
};
