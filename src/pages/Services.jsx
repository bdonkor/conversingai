import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Phone, Globe, MessageSquare, Code, Search, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
    {
      title: "AI Chat Agents",
      tag: "Business Intelligence",
      icon: <Bot className="w-12 h-12" />,
      desc: "Custom-trained AI agents that understand your business, products, and brand voice. Deployed on your website to qualify leads and answer support queries 24/7.",
      features: ["Custom Knowledge Base", "Lead Qualification", "Live Chat Handover", "Multi-language Support"],
      color: "from-blue-600/20 to-indigo-600/20"
    },
    {
      title: "AI Receptionist (Voice)",
      tag: "Customer Experience",
      icon: <Phone className="w-12 h-12" />,
      desc: "Intelligent voice agents that handle inbound and outbound calls. Book appointments, handle enquiries, and transfer calls to humans when necessary.",
      features: ["Natural Voice Synthesis", "Calendar Integration", "Call Recording & Summary", "Inbound/Outbound Logic"],
      color: "from-purple-600/20 to-pink-600/20"
    },
    {
      title: "WhatsApp AI Agents",
      tag: "Mobile Growth",
      icon: <MessageSquare className="w-12 h-12" />,
      desc: "Bring AI power to the world's most popular messaging app. Automate sales conversations and support directly on WhatsApp Business API.",
      features: ["Official API Integration", "Bulk Messaging Workflows", "Catalog Integration", "Shared Inbox"],
      color: "from-green-600/20 to-emerald-600/20"
    },
    {
      title: "Website Design & Dev",
      tag: "Digital Foundation",
      icon: <Globe className="w-12 h-12" />,
      desc: "High-performance, conversion-focused websites built with modern frameworks. Optimized for speed, SEO, and user experience.",
      features: ["Mobile-First Design", "Cloudflare Hosting", "SEO Optimization", "Performance Obsessed"],
      color: "from-orange-600/20 to-red-600/20"
    },
    {
      title: "Workflow Automation",
      tag: "Operation Excellence",
      icon: <Code className="w-12 h-12" />,
      desc: "Connect your AI systems to your CRM, Email, and internal tools. We build the bridges that keep your business running smoothly.",
      features: ["Custom Integrations", "CRM Syncing", "Email Nurture Sequences", "Automated Reporting"],
      color: "from-cyan-600/20 to-blue-600/20"
    },
    {
      title: "SEO & Content Systems",
      tag: "Organic Growth",
      icon: <Search className="w-12 h-12" />,
      desc: "Done-for-you authority content that ranks. We research, write, and publish SEO-optimized articles that drive organic traffic.",
      features: ["Keyword Research", "Authority Blog Writing", "Internal Link Building", "Monthly Ranking Reports"],
      color: "from-yellow-600/20 to-amber-600/20"
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container">
        <div className="section-head text-center mb-16">
          <span className="section-tag">Our Expertise</span>
          <h1 className="section-title text-gradient">World-Class AI & Digital Services</h1>
          <p className="section-desc">We don't just sell tools. We build and manage the entire system for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-8 bg-gradient-to-br ${service.color} border-white/5`}
            >
              <div className="text-indigo-500 mb-6">{service.icon}</div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 block">{service.tag}</span>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8">{service.desc}</p>

              <ul className="space-y-3 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-indigo-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="btn btn-outline w-full justify-between">
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
