import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Target, BarChart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadGeneration = () => {
  const plans = [
    {
      name: "Starter Growth",
      price: "$997",
      period: "per month",
      desc: "Ideal for local businesses looking to automate their lead capture.",
      features: [
        "Website AI Chat Agent",
        "Lead Capture & Qualification",
        "CRM Integration (1 Platform)",
        "Email Follow-up Automation",
        "Monthly Reporting",
        "Up to 500 Qualified Leads"
      ],
      cta: "Start Growing",
      popular: false
    },
    {
      name: "Scale Engine",
      price: "$2,497",
      period: "per month",
      desc: "Perfect for growing companies needing high-volume lead sourcing.",
      features: [
        "Everything in Starter",
        "AI Voice Receptionist",
        "WhatsApp Sales Agent",
        "Active Lead Sourcing",
        "A/B Testing & Optimization",
        "Up to 2,000 Qualified Leads",
        "Priority Support"
      ],
      cta: "Scale Now",
      popular: true
    },
    {
      name: "Enterprise Monopoly",
      price: "Custom",
      period: "Contact for Pricing",
      desc: "Full-scale market dominance for high-volume enterprises.",
      features: [
        "Everything in Scale",
        "Multi-channel AI Integration",
        "Custom Workflow Engineering",
        "Dedicated Account Manager",
        "Unlimited Qualified Leads",
        "Custom API Development",
        "Strategic Growth Consulting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container">
        <div className="section-head text-center mb-16">
          <span className="section-tag">Continuous Growth</span>
          <h1 className="section-title text-gradient">Lead Generation as a Service</h1>
          <p className="section-desc">We build the machine, you close the deals. Subscription-based lead sourcing, capture, and qualification.</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Target className="w-8 h-8" />, title: "Precision Targeting", desc: "We source leads that actually fit your customer profile." },
            { icon: <Zap className="w-8 h-8" />, title: "Instant Response", desc: "Our AI agents engage leads within seconds of first contact." },
            { icon: <BarChart className="w-8 h-8" />, title: "Real-time ROI", desc: "Transparent dashboard to track your lead flow and quality." }
          ].map((item, i) => (
            <div key={i} className="glass p-6 rounded-2xl border-white/5 text-center">
              <div className="text-indigo-500 mb-4 inline-block">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className={`glass-card p-8 relative flex flex-col ${plan.popular ? 'border-indigo-500 border-2 scale-105 z-10' : 'border-white/5'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-gray-500 font-medium">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`btn w-full justify-center py-4 rounded-xl ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center glass-card p-10 bg-indigo-600/5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Not sure which plan is right for you?</h3>
              <p className="text-gray-400">Our Growth Strategists can help you build a custom roadmap for your business.</p>
            </div>
            <Link to="/contact" className="btn btn-outline whitespace-nowrap">
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGeneration;
