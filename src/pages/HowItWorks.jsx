import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, PenTool, Rocket, Headphones, ArrowRight, Search, Code, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      title: "Strategic Audit",
      desc: "Our senior AI consultants analyze your existing sales, support, and internal workflows to identify high-impact automation targets with the best ROI potential.",
      icon: <Search className="w-10 h-10" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "System Architecture",
      desc: "We design a custom AI blueprint tailored to your brand voice. This includes mapping conversation flows, knowledge base structures, and integration logic.",
      icon: <Code className="w-10 h-10" />,
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      title: "Managed Deployment",
      desc: "Our engineering team builds, trains, and stress-tests your AI agents. We then deploy the systems across your digital platforms with zero operational downtime.",
      icon: <Rocket className="w-10 h-10" />,
      color: "text-blue-300",
      bg: "bg-blue-300/10"
    },
    {
      title: "Continuous Optimization",
      desc: "We don't just 'set and forget'. We provide ongoing monitoring, monthly training updates, and performance optimization to ensure your AI scales with your needs.",
      icon: <ShieldCheck className="w-10 h-10" />,
      color: "text-blue-200",
      bg: "bg-blue-200/10"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#020617]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag mb-4">The Blueprint</span>
            <h1 className="text-4xl lg:text-7xl font-bold mb-8 text-white">How We Scale Your <br /> Operations with AI</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              A data-driven framework designed to deliver production-ready AI systems at enterprise speed, with full transparency at every phase.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Decoration Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent -translate-x-1/2"></div>

          <div className="space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className={`w-20 h-20 ${step.bg} ${step.color} rounded-[24px] flex items-center justify-center mb-8 mx-auto lg:mx-0 border border-current opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {step.icon}
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 mb-6 font-bold text-xs uppercase tracking-[0.2em] text-blue-400">
                    Phase 0{i + 1}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white uppercase tracking-tight">{step.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{step.desc}</p>
                </div>

                <div className="hidden lg:flex w-16 h-16 bg-slate-900 border-2 border-blue-500 rounded-full items-center justify-center z-10 font-bold text-2xl text-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  {i + 1}
                </div>

                <div className="flex-1 flex justify-center">
                  <div className="w-full aspect-video rounded-[40px] glass-card border-white/5 bg-slate-900/60 flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>
                    <div className="text-9xl font-bold text-white/[0.02] absolute transform -rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:text-blue-500/5 select-none">
                      BLUEPRINT
                    </div>
                    <div className="relative z-10 p-10 text-center">
                      <Zap className="w-12 h-12 text-blue-500/20 mx-auto mb-4" />
                      <div className="h-2 w-32 bg-blue-500/10 rounded-full mx-auto mb-4">
                        <div className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" style={{ width: `${(i + 1) * 25}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-40 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 lg:p-20 max-w-4xl mx-auto border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-transparent shadow-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white uppercase tracking-tight leading-tight">Ready to see the blueprint <br /> for your business?</h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">We provide a comprehensive implementation roadmap after every discovery call. No obligations, just expertise.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn btn-primary px-12 py-5 text-xl font-bold shadow-xl shadow-blue-500/20">
                Request Service
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link to="/services" className="btn btn-outline px-12 py-5 text-xl font-bold">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
