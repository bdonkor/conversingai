import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, PenTool, Rocket, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      title: "Tell Us What You Need",
      desc: "Start with a discovery call. We analyze your current processes, pain points, and growth goals to identify the best AI opportunities.",
      icon: <ClipboardList className="w-10 h-10" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "We Design the Solution",
      desc: "Our architects map out a custom AI and automation strategy. We design the conversation flows, knowledge bases, and integration hooks.",
      icon: <PenTool className="w-10 h-10" />,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "We Build & Deploy",
      desc: "Our engineers develop and train your AI agents, build the integrations, and deploy everything to your platforms—tested and ready for traffic.",
      icon: <Rocket className="w-10 h-10" />,
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      title: "Support & Optimize",
      desc: "The work doesn't stop at deployment. We manage, monitor, and continuously optimize your systems to ensure they scale with your business.",
      icon: <Headphones className="w-10 h-10" />,
      color: "text-green-500",
      bg: "bg-green-500/10"
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container">
        <div className="section-head text-center mb-12">
          <span className="section-tag">Our Process</span>
          <h1 className="section-title text-gradient">How We Deliver Growth</h1>
          <p className="section-desc">A professional framework designed for speed, clarity, and long-term business value.</p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className={`w-20 h-20 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0`}>
                    {step.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">0{i + 1}. {step.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                </div>

                <div className="hidden lg:flex w-16 h-16 bg-[#050505] border border-white/10 rounded-full items-center justify-center z-10 font-bold text-xl text-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  {i + 1}
                </div>

                <div className="flex-1 flex justify-center">
                  <div className="w-full h-64 glass-card flex items-center justify-center opacity-20 relative group hover:opacity-100 transition-opacity">
                    <span className="text-6xl font-bold font-heading text-white/5 group-hover:text-indigo-500/20 transition-colors uppercase tracking-widest rotate-6">
                      Phase {i + 1}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="glass-card p-10 max-w-3xl mx-auto border-indigo-500/20">
            <h2 className="text-3xl font-bold mb-4">Ready to see the blueprint for your business?</h2>
            <p className="text-gray-400 text-lg mb-8">We deliver a custom implementation roadmap after every discovery call.</p>
            <Link to="/contact" className="btn btn-primary px-10 py-4 text-lg">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
