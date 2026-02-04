import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Phone,
  Globe,
  Zap,
  BarChart3,
  ChevronRight,
  CheckCircle2,
  Layers,
  Users,
  Target,
  ShieldCheck,
  Code2,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: "AI Chat Agents",
      desc: "Custom-trained chatbots that handle complex customer inquiries, qualify leads, and close sales directly on your website.",
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      image: "/images/ai-agents.png"
    },
    {
      title: "AI Voice Agents",
      desc: "Human-like AI receptionists that handle inbound/outbound calls, book appointments, and manage enquiries 24/7.",
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      image: "/images/receptionist.png"
    },
    {
      title: "Lead Generation AI",
      desc: "Automated systems that source, qualify, and nurture high-intent leads across multiple platforms on autopilot.",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      image: "/images/leadgen.png"
    },
    {
      title: "Website AI Integration",
      desc: "Seamlessly embed AI capabilities into your existing workflows, CRM, and digital infrastructure for maximum efficiency.",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      image: "/images/hero.png" // Placeholder or different image
    }
  ];

  const steps = [
    {
      title: "Strategic Audit",
      desc: "We analyze your current workflows to identify high-impact automation opportunities.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Custom Build",
      desc: "Our engineers build bespoke AI agents tailored specifically to your brand voice and data.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Seamless Launch",
      desc: "We deploy and integrate the systems into your existing stack with zero downtime.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Ongoing Optimization",
      desc: "We continuously monitor and train your AI to ensure peak performance as you scale.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const audience = [
    { title: "Local Businesses", desc: "Scale customer support and lead capture without hiring a massive team." },
    { title: "Digital Agencies", desc: "Offer premium AI solutions to your clients and increase your recurring revenue." },
    { title: "Enterprises", desc: "Automate complex internal workflows and enterprise-level customer interactions." }
  ];

  const features = [
    { title: "Fully Managed Service", desc: "You focus on your business; we handle the AI infrastructure and technical management." },
    { title: "Enterprise Reliability", desc: "Built on high-availability systems with 99.9% uptime and secure data handling." },
    { title: "Data Privacy First", desc: "Your data is yours. We ensure all AI systems comply with modern privacy standards." },
    { title: "Rapid ROI", desc: "Most clients see significant efficiency gains within the first 30 days of deployment." }
  ];

  return (
    <div className="overflow-hidden bg-[#020617]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Enterprise AI"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/95 to-[#020617]"></div>

          {/* Animated Background Glows */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 mb-8 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-100/80">Premium AI Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-8 leading-[1.05] tracking-tight text-white">
                Intelligent AI Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Scale Your Growth</span>
              </h1>

              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                We design, deploy, and manage custom AI agents that handle your sales, customer support, and lead generation—completely done-for-you.
              </p>

              <div className="flex flex-wrap gap-5 justify-center">
                <Link to="/contact" className="btn btn-primary px-10 py-5 text-lg group">
                  Request Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/how-it-works" className="btn btn-outline px-10 py-5 text-lg">
                  See How It Works
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-16 pt-8 border-t border-white/5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-6">Trusted by Forward-Thinking Companies</p>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="text-xl font-bold text-white tracking-tighter">FINTECH.</div>
                  <div className="text-xl font-bold text-white tracking-tighter">AI SCALE.</div>
                  <div className="text-xl font-bold text-white tracking-tighter">TECHFLOW.</div>
                  <div className="text-xl font-bold text-white tracking-tighter">QUANTUM.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 border-y border-white/5">
        <div className="container">
          <div className="section-head mb-20 text-center">
            <span className="section-tag mb-4">Core Capabilities</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Built to Perform. Optimized for ROI.</h2>
            <p className="section-desc max-w-2xl mx-auto">Our productized AI services are designed to integrate seamlessly into your business and drive immediate value.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="glass-card p-8 h-full flex flex-col items-start hover:border-blue-500/50 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-[15px] leading-relaxed mb-8 flex-grow">{service.desc}</p>
                  <Link to="/services" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-[#020617]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="section-tag mb-4">The Process</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Simple. Transparent. <br />Effective.</h2>
              <div className="space-y-10">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        {i + 1}
                      </div>
                      {i !== steps.length - 1 && <div className="absolute top-12 left-1/2 w-px h-10 bg-gradient-to-b from-blue-500/30 to-transparent"></div>}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border border-white/5 p-4">
                <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-blue-900/40 to-slate-900 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150"></div>
                  <div className="relative z-10 text-center p-12">
                    <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/20">
                      <Zap className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Go Live in 14 Days</h3>
                    <p className="text-blue-100/60 text-lg">From initial discovery call to fully deployed AI agents in under two weeks.</p>
                  </div>
                </div>
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-8 -left-8 glass-card p-6 border border-white/10 backdrop-blur-2xl shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-widest">Full Deployment</div>
                    <div className="text-xs text-slate-400">System validated & secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="container relative z-10">
          <div className="section-head mb-20 text-center">
            <span className="section-tag mb-4">Target Audience</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Designed for Impactful Organizations</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {audience.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="text-blue-500 mb-8">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ConversingAI Section */}
      <section className="py-32 bg-slate-950 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag mb-4">The Conversing Advantage</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-10 leading-tight">Trust. Reliability. <br />Expertise.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-12">
                {features.map((feature, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0">
              <div className="p-1 rounded-3xl bg-gradient-to-br from-blue-500/20 via-white/5 to-transparent">
                <div className="glass h-full rounded-[22px] p-10 flex flex-col justify-between min-h-[400px]">
                  <div>
                    <Bot className="w-16 h-16 text-blue-500 mb-8" />
                    <h3 className="text-3xl font-bold text-white mb-6">Expertise Built In</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">We don't just use AI; we engineer high-performance business assets that work while you sleep.</p>
                  </div>
                  <div className="pt-10 flex items-center gap-4 border-t border-white/5 mt-8">
                    <div className="flex -space-x-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                      ))}
                    </div>
                    <div className="text-sm text-slate-400">Join 50+ businesses automating with us.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="glass-card bg-gradient-to-br from-blue-600/20 to-transparent p-12 lg:p-20 text-center border-white/10 relative overflow-hidden">
            {/* Background elements for CTA */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full"></div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-8 font-heading text-white">Ready to Transform Your <br className="hidden lg:block" /> Business with AI?</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Book a discovery call today and get a custom strategy on how we can implement AI to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn btn-primary px-12 py-5 text-xl font-bold shadow-2xl shadow-blue-600/40">
                Request Service
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link to="/contact" className="btn btn-outline px-12 py-5 text-xl font-bold">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
