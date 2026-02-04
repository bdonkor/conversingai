import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Target, BarChart, Users, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadGeneration = () => {
  const plans = [
    {
      name: "Starter Growth",
      price: "$997",
      period: "per month",
      desc: "Perfect for local businesses wanting to automate lead capture and qualifying.",
      features: [
        "Website AI Chat Agent",
        "Lead Capture & Scoring",
        "CRM Integration (1 Platform)",
        "Email Follow-up Automation",
        "Monthly ROI Reporting",
        "Dedicated Account Setup"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Scale Engine",
      price: "$2,497",
      period: "per month",
      desc: "Designed for high-growth companies needing full-funnel AI automation.",
      features: [
        "Everything in Starter",
        "AI Voice Receptionist",
        "WhatsApp Sales Agent",
        "Active Lead Sourcing",
        "A/B Testing & Optimization",
        "Priority 24/7 Support",
        "Strategic Monthly Audits"
      ],
      cta: "Scale Now",
      popular: true
    },
    {
      name: "Enterprise Monopoly",
      price: "Custom",
      period: "Contact for Pricing",
      desc: "Complete market dominance with custom engineered AI infrastructure.",
      features: [
        "Full Multi-channel AI Stack",
        "Custom Workflow Engineering",
        "Unlimited System Training",
        "Dedicated Growth Team",
        "White-glove Deployment",
        "Custom API Development",
        "Market Intelligence Reports"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#020617]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag mb-4">Productized Growth</span>
            <h1 className="text-4xl lg:text-7xl font-bold mb-8 text-white">Lead Generation <br /> as a Managed Service</h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Stop chasing leads manually. We build the high-performance machine that sources, qualifies, and delivers high-intent prospects to your sales team on autopilot.
            </p>
          </motion.div>
        </div>

        {/* Value Prop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Target className="w-10 h-10 text-blue-500" />, title: "Precision Targeting", desc: "We use advanced AI to source leads that perfectly match your Ideal Customer Profile." },
            { icon: <Zap className="w-10 h-10 text-blue-500" />, title: "Instant Engagement", desc: "Our AI agents respond to inquiries in seconds, ensuring lead heat remains at its peak." },
            { icon: <BarChart className="w-10 h-10 text-blue-500" />, title: "Predictable Growth", desc: "Gain full visibility into your customer acquisition cost and lead-to-close pipeline." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[32px] border-white/5 text-center hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="section-head text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Investment Tiers</h2>
          <p className="text-slate-400">Choose the level of growth that fits your organization's goals.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 relative flex flex-col ${plan.popular ? 'border-blue-500 border-2 bg-blue-600/5 shadow-2xl shadow-blue-500/10' : 'border-white/5 bg-slate-900/40'}`}
              style={plan.popular ? { transform: 'scale(1.05)', zIndex: 10 } : {}}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="mb-10">
                <h3 className="text-3xl font-bold mb-4 text-white">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed h-12">{plan.desc}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-slate-500 font-medium text-sm">{plan.period}</span>
                </div>
              </div>

              <div className="h-px bg-white/10 mb-10"></div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-300">
                    <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`btn w-full justify-center py-5 rounded-2xl text-lg font-bold transition-all duration-300 ${plan.popular ? 'btn-primary' : 'btn-outline border-white/10 hover:border-white/40'}`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ/Trust Footer */}
        <div className="mt-32 glass-card p-12 lg:p-16 border-white/5 bg-gradient-to-br from-blue-900/10 to-transparent flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Our Growth Guarantee</h3>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">
              We are confident in our systems. If we don't deliver the qualified leads promised in your roadmap, we work for free until we do. Your growth is our only metric of success.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <Link to="/contact" className="btn btn-primary px-10 py-5 text-lg font-bold shadow-xl shadow-blue-500/20">
              Schedule Discovery Call
            </Link>
            <p className="text-center text-xs text-slate-500 uppercase tracking-widest font-bold">Limited Onboarding Slots for {new Date().toLocaleString('default', { month: 'long' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGeneration;
