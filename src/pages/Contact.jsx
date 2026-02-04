import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare, CheckCircle2, Shield, Calendar, Bot } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <div className="pt-40 pb-20 container text-center min-h-[80vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mb-8 border border-blue-500/30"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white uppercase tracking-tight">Request Received</h1>
        <p className="text-xl text-slate-400 max-w-lg mx-auto leading-relaxed">
          One of our senior growth strategists has been notified. We will review your requirements and reach out within 24 hours to schedule your discovery call.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="btn btn-primary mt-12 px-12 py-5 text-lg font-bold"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="pt-36 pb-24 bg-[#020617]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="section-tag mb-4">Discovery Call</span>
            <h1 className="text-4xl lg:text-7xl font-bold mb-8 text-white leading-tight tracking-tight">Secure Your <br className="hidden lg:block" /> AI Future.</h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Every successful AI implementation starts with a strategy. Complete the briefing form to request a service or schedule a strategic audit with our team.
            </p>

            <div className="space-y-10">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Executive Inquiry",
                  detail: "hello@conversingai.com",
                  desc: "For general partnerships and enterprise inquiries."
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: "Strategic Briefing",
                  detail: "Priority Availability",
                  desc: "Discovery calls are typically scheduled within 48 hours."
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Data Confidentiality",
                  detail: "Enterprise-grade Privacy",
                  desc: "Your business intelligence is protected by full NDA compliance."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-blue-500 shrink-0 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-blue-400 font-semibold text-sm mb-1">{item.detail}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 glass-card border-blue-500/10 bg-blue-600/5">
              <div className="flex items-center gap-4">
                <Bot className="w-10 h-10 text-blue-500" />
                <p className="text-sm text-slate-300 italic font-medium">"Our team analyzes every entry personally. No generic bots here—just experts ready to solve your growth challenges."</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10 lg:p-14 border-white/5 bg-slate-900/40 relative overflow-hidden"
          >
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all duration-300 text-white placeholder:text-slate-700"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all duration-300 text-white placeholder:text-slate-700"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Primary Interest</label>
                <div className="relative">
                  <select className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all duration-300 text-white appearance-none cursor-pointer">
                    <option className="bg-slate-900">AI Chat Agents (Managed)</option>
                    <option className="bg-slate-900">AI Voice Receptionist (Managed)</option>
                    <option className="bg-slate-900">Lead Generation Subscription</option>
                    <option className="bg-slate-900">Enterprise AI Integration</option>
                    <option className="bg-slate-900">Strategic Audit / Consulting</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Implementation Briefing</label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-all duration-300 text-white placeholder:text-slate-700"
                  placeholder="Describe your current challenge or specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="btn btn-primary w-full justify-center py-5 text-xl font-bold relative group overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-3">
                  {formState === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Request Service <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                <Shield className="w-3 h-3 text-blue-500" /> Secure Enterprise Protocol Active
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
