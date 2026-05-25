import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { caseStudies, CaseStudy } from "../../lib/caseStudiesData";
import { Button } from "../Button";
import { ArrowLeft, ExternalLink, Search, Sparkles, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export const CaseStudies: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const list = new Set(caseStudies.map((c) => c.category));
    return ["All", ...Array.from(list)];
  }, []);

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((c) => {
      const matchesCategory = selectedCategory === "All" || c.category === selectedCategory;
      const matchesSearch = 
        c.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentCase = useMemo(() => {
    if (!id) return null;
    return caseStudies.find((c) => c.id === id) || null;
  }, [id]);

  const handleCloseDetail = () => {
    navigate("/case-studies");
  };

  const handleSelectCase = (caseId: string) => {
    navigate(`/case-studies/${caseId}`);
  };

  // Scroll to top when view changes or detail is opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <section className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-dark-bg">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.02] dot-grid" />
      </div>

      <div className="container relative z-10 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!currentCase ? (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header block */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => navigate("/")}
                    className="mb-6 -ml-4 flex items-center gap-2 text-white/50 hover:text-neon-primary"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </Button>
                  <span className="text-neon-primary font-mono text-sm tracking-[0.25em] uppercase mb-4 block">
                    Proven Solutions
                  </span>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
                    CASE <span className="text-neon-primary drop-shadow-[0_0_15px_rgba(198,255,0,0.2)]">STUDIES</span>
                  </h1>
                  <p className="text-white/40 mt-4 max-w-2xl text-lg font-medium leading-relaxed">
                    From highly performant MVPs deployed in 168 hours to custom automated workflow engines, explore real evidence of validated value.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    placeholder="Search Case Studies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 hover:border-white/20 focus:border-neon-primary rounded-full text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-neon-primary transition-all font-mono"
                  />
                </div>
              </div>

              {/* Categories Tabs */}
              <div className="flex flex-wrap gap-2 mb-12 border-b border-white/5 pb-6 overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase border transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-neon-primary border-neon-primary text-black shadow-[0_0_15px_rgba(198,255,0,0.2)]"
                        : "bg-white/5 border-white/5 hover:border-white/10 text-white/60 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Grid cards */}
              {filteredCaseStudies.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCaseStudies.map((study, idx) => (
                    <motion.div
                      key={study.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -8 }}
                      className="group p-[1px] bg-gradient-to-br from-white/10 to-transparent hover:from-neon-primary/30 rounded-3xl transition-all duration-500 cursor-pointer h-full flex flex-col"
                      onClick={() => handleSelectCase(study.id)}
                    >
                      <div className="bg-[#080808]/90 p-8 rounded-[1.7rem] h-full flex flex-col justify-between relative overflow-hidden">
                        {/* Static light background element */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-neon-primary/5 rounded-full blur-2xl group-hover:bg-neon-primary/10 transition-colors" />

                        <div>
                          {/* Top Row Category & Icon */}
                          <div className="flex justify-between items-center mb-6">
                            <span className="text-[10px] font-mono font-bold text-white/40 tracking-[0.2em] uppercase bg-white/5 px-3 py-1 rounded-full">
                              {study.category}
                            </span>
                            <Zap className="w-4 h-4 text-white/30 group-hover:text-neon-primary transition-colors" />
                          </div>

                          {/* Client & Title */}
                          <h3 className="text-2xl font-black text-white group-hover:text-neon-primary transition-colors tracking-tight mb-2 uppercase italic leading-tight">
                            {study.client}
                          </h3>
                          <p className="text-white/70 font-semibold text-sm mb-4 leading-snug line-clamp-2">
                            {study.title}
                          </p>
                          <p className="text-white/40 text-xs font-medium leading-relaxed mb-8 line-clamp-3">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Large Impact KPI Block */}
                        <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                          <div>
                            <div className="text-neon-primary font-display font-black text-2xl tracking-tighter">
                              {study.metric}
                            </div>
                            <div className="text-white/30 text-[10px] font-mono uppercase tracking-widest mt-0.5">
                              {study.metricLabel}
                            </div>
                          </div>
                          <div className="w-8 h-8 rounded-full border border-white/15 group-hover:border-neon-primary group-hover:bg-neon-primary flex items-center justify-center transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-black transition-colors" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <Sparkles className="w-12 h-12 text-white/20 mx-auto mb-4" />
                  <p className="text-white/40 font-mono text-sm tracking-wider">No case studies found matching your criteria.</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              {/* Back CTA */}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCloseDetail}
                className="mb-8 -ml-4 flex items-center gap-2 text-white/50 hover:text-neon-primary"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Button>

              {/* Detail Core Content */}
              <div className="glass p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-neon-primary/5 rounded-full blur-[100px] pointer-events-none" />

                {/* Meta Head */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <span className="text-xs font-mono font-bold text-neon-primary tracking-[0.25em] uppercase border border-neon-primary/20 bg-neon-primary/5 px-4 py-1.5 rounded-full">
                    {currentCase.category}
                  </span>
                  {currentCase.link && (
                    <a
                      href={currentCase.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-white/60 hover:text-neon-primary flex items-center gap-1.5 transition-colors underline underline-offset-4"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Visit {currentCase.client.toLowerCase()}.space
                    </a>
                  )}
                </div>

                {/* Big Title Block */}
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[1.05] mb-6">
                  {currentCase.client}
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-white/90 leading-snug mb-10 border-l-2 border-neon-primary/30 pl-6">
                  {currentCase.title}
                </h2>

                {/* Giant Metric Callout */}
                <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16 shadow-2xl">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] block mb-2 font-bold">PROVEN IMPACT</span>
                    <h3 className="text-4xl md:text-5xl font-black text-neon-primary drop-shadow-[0_0_15px_rgba(198,255,0,0.3)] tracking-tighter">
                      {currentCase.metric}
                    </h3>
                  </div>
                  <div className="text-white/60 text-sm font-medium leading-relaxed max-w-sm md:text-right">
                    {currentCase.metricLabel}
                  </div>
                </div>

                {/* Core Sections Grid */}
                <div className="space-y-12 mb-16">
                  {/* Challenge */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono font-bold text-rose-500 uppercase tracking-[0.3em]">01 / The Challenge</h3>
                    <p className="text-white/60 text-base leading-relaxed font-medium">
                      {currentCase.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono font-bold text-neon-primary uppercase tracking-[0.3em]">02 / The Solution</h3>
                    <p className="text-white/60 text-base leading-relaxed font-medium">
                      {currentCase.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-[0.3em]">03 / The Outcome</h3>
                    <p className="text-white/60 text-base leading-relaxed font-medium">
                      {currentCase.outcome}
                    </p>
                  </div>
                </div>

                {/* Checklist Technical Scope */}
                {currentCase.details && currentCase.details.length > 0 && (
                  <div className="pt-10 border-t border-white/5 space-y-6">
                    <h3 className="text-sm font-mono font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-neon-primary" />
                      Detailed Scope Completed
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentCase.details.map((detail, dIdx) => (
                        <div 
                          key={dIdx} 
                          className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 text-neon-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-bold text-white/80">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Final booking CTA */}
                <div className="mt-16 pt-12 border-t border-white/5 text-center">
                  <h4 className="text-2xl font-black mb-4 uppercase italic">Ready to scale like {currentCase.client}?</h4>
                  <p className="text-white/40 mb-8 max-w-md mx-auto text-sm">Let&apos;s map out your high-performance V1 MVP. 100% custom-built in 7 days.</p>
                  <Button 
                    glow 
                    onClick={() => window.open('https://forms.gle/5EMDGejeuiucGJZG8', '_blank')}
                    className="px-8 h-12 uppercase tracking-widest font-black text-xs"
                  >
                    Build Your App
                  </Button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
