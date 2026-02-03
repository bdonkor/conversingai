import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Phone, Globe, Zap, BarChart3, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: "AI Chat & Voice Agents",
      desc: "Fully managed AI agents that handle customer queries on your website and phone lines 24/7.",
      icon: <Bot className="w-8 h-8 text-indigo-500" />,
      image: "/images/ai-agents.png",
      link: "/services"
    },
    {
      title: "AI Receptionist Services",
      desc: "Professional call handling, appointment booking, and enquiry management with human-like precision.",
      icon: <Phone className="w-8 h-8 text-indigo-500" />,
      image: "/images/receptionist.png",
      link: "/services"
    },
    {
      title: "Lead Generation Systems",
      desc: "Subscription-based growth engine that sources, qualifies, and follows up with leads automatically.",
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      image: "/images/leadgen.png",
      link: "/lead-generation"
    }
  ];

  const stats = [
    { label: "Efficiency Increase", value: "85%" },
    { label: "Response Rate", value: "Instant" },
    { label: "Leads Generated", value: "1M+" },
    { label: "Client Satisfaction", value: "99%" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Hero background"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-[#050505]"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">Done-For-You AI & Automation</span>
              <h1 className="section-title text-gradient leading-tight lg:text-6xl">
                We Build the AI Systems <br /> That Grow Your Business
              </h1>
              <p className="section-desc text-xl mb-10 max-w-2xl mx-auto">
                Skip the learning curve. We design, deploy, and manage custom AI agents and automation workflows that handle your sales, support, and lead generation on autopilot.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn btn-primary px-10 py-4 text-lg">
                  Request a Solution
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/how-it-works" className="btn btn-outline px-10 py-4 text-lg">
                  See How It Works
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 w-full py-10 glass border-y-0 border-x-0">
          <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1 font-heading">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#050505]">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Our Core Offerings</span>
            <h2 className="section-title">Premium Done-For-You Services</h2>
            <p className="section-desc">Expertly crafted solutions designed to move the needle for your business.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="glass-card p-7 group"
              >
                <div className="mb-6 relative h-44 rounded-xl overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 w-14 h-14 glass flex items-center justify-center rounded-xl">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8">{service.desc}</p>
                <Link to={service.link} className="flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">The Conversing AI Edge</span>
              <h2 className="section-title">Why Busy Leaders Choose Us</h2>
              <div className="space-y-6 mt-10">
                {[
                  { title: "Zero Technical Overhead", desc: "You don't need to know how AI works. We handle everything from design to deployment." },
                  { title: "Platform Agnostic", desc: "We build on the best stack for your specific needs—custom code, WhatsApp, or voice." },
                  { title: "Continuous Optimization", desc: "We don't just 'set and forget'. We manage and train your systems monthly for peak performance." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-4 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-20 h-20 text-indigo-500 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Maximum Performance</h3>
                  <p className="text-gray-500 mt-2">Delivered in weeks, not months.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">Ready to automate your growth?</h2>
              <p className="text-indigo-100 text-xl opacity-90">Book a discovery call today and see how our DFY solutions fit your business.</p>
            </div>
            <Link to="/contact" className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all flex items-center gap-3 shadow-2xl">
              Get Started Now <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
