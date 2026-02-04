import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Phone, Globe, MessageSquare, Code, Search, ArrowRight, Check, Zap, Target, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
    {
      title: "AI Chat Agents",
      tag: "Customer Intelligence",
      icon: <Bot className="w-12 h-12" />,
      desc: "Bespoke AI agents trained on your unique business data. We design, deploy, and manage chatbots that qualify leads and close sales 24/7.",
      features: ["Custom Knowledge Base", "Lead Qualification", "Live CRM Syncing", "Multi-language Support"],
      color: "from-blue-600/10 to-blue-900/10"
    },
    {
      title: "AI Voice Agents",
      tag: "Seamless Communication",
      icon: <Phone className="w-12 h-12" />,
      desc: "Ultra-realistic AI voice receptionists that handle inbound calls, book appointments, and manage enquiries without human intervention.",
      features: ["Natural Voice Synthesis", "Calendar Integration", "Call Summarization", "Intelligent Routing"],
      color: "from-sky-600/10 to-sky-900/10"
    },
    {
      title: "Lead Generation AI",
      tag: "Growth Engine",
      icon: <Target className="w-12 h-12" />,
      desc: "End-to-end lead sourcing and qualification systems. We build the infrastructure to source high-intent leads and deliver them to your sales team.",
      features: ["Automated Prospecting", "Intent Verification", "Email Nurture Flow", "Performance Dashboard"],
      color: "from-blue-700/10 to-blue-950/10"
    },
    {
      title: "Website AI Integration",
      tag: "Platform Strategy",
      icon: <Globe className="w-12 h-12" />,
      desc: "Turn your website into a conversion powerhouse. We integrate AI capabilities directly into your site and existing tech stack.",
      features: ["API Integration", "Performance Optimization", "User Behavior Analysis", "Custom UI Components"],
      color: "from-blue-500/10 to-slate-900/10"
    },
    {
      title: "Enterprise Automation",
      tag: "Internal Efficiency",
      icon: <Zap className="w-12 h-12" />,
      desc: "Automate complex internal workflows and bridge the gap between your tools. We build the custom bridges that keep you moving fast.",
      features: ["Custom Webhooks", "CRM Orchestration", "Document Processing", "Security & Compliance"],
      color: "from-blue-400/10 to-blue-800/10"
    },
    {
      title: "Strategic Consulting",
      tag: "Expert Guidance",
      icon: <ShieldCheck className="w-12 h-12" />,
      desc: "Not sure where to start? We provide deep strategic audits to identify the highest ROI automation opportunities for your organization.",
      features: ["Process Audits", "ROI Projections", "Tech Stack Review", "Custom Roadmap"],
      color: "from-slate-800/20 to-slate-900/20"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#020617]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag mb-4">Our Services</span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-white">Managed AI Solutions <br /> Built for Enterprise</h1>
            <p className="text-xl text-slate-400 leading-relaxed">We don't just provide tools. We build and manage the entire AI ecosystem so you can focus on scaling your business.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-10 bg-gradient-to-br ${service.color} border-white/5 flex flex-col h-full hover:border-blue-500/40 transition-all duration-500`}
            >
              <div className="text-blue-500 mb-8 w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20">
                {service.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">{service.tag}</span>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed flex-grow">{service.desc}</p>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn btn-outline w-full justify-between py-4 group">
                Request Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Value Prop Section */}
        <div className="mt-32 p-12 lg:p-20 rounded-[40px] bg-slate-900/50 border border-white/5 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-white">The Done-For-You Advantage</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">Skip months of development and thousands in overhead. Our experts handle the architecture, training, and 24/7 management of your AI assets.</p>
          <Link to="/contact" className="btn btn-primary px-12 py-5 text-lg font-bold">
            Book Your Strategic Audit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
