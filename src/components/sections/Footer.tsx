import { motion } from "motion/react";
import { Button } from "../Button";
import { Mail, MessageCircle, ArrowUpRight, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-16 rounded-[64px] glass border-neon-primary/20 relative"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-neon-primary rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(198,255,0,0.4)]">
              <Zap className="w-10 h-10 text-black fill-current" />
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              READY TO <span className="text-neon-primary">BUILD?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Don’t wait to be ready. <br className="hidden md:block" />
              Be ready by starting.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button glow size="lg" className="h-16 px-12 text-xl w-full sm:w-auto">
                Let&apos;s Launch Your MVP
                <ArrowUpRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-gray-500">
              <a href="mailto:hello@zeronelabs.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">hello@zeronelabs.com</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-8">
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold hidden lg:flex">
            <span>User Feedback Ready</span>
            <span>Market Testing Optimized</span>
            <span>Investor Proof Ready</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-neon-primary rounded-full shadow-[0_0_8px_#C6FF00]"></span>
              +91 98XXX XXXXX
            </span>
            <span>hello@zeronelabs.io</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-6 text-[8px] uppercase tracking-[0.3em] text-white/20 font-mono">
          <p>© 2026 ZERONE LABS. BUILT FOR THE BOLD.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-neon-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
