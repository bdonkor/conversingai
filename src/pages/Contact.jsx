import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

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
      <div className="pt-40 pb-20 container text-center h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4">Request Received!</h1>
        <p className="text-xl text-gray-400 max-w-lg mx-auto">
          Thanks for reaching out. One of our growth strategists will analyze your request and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="btn btn-primary mt-10 px-10 py-4"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="section-tag">Get in Touch</span>
            <h1 className="section-title text-gradient">Ready to Scale Your Business?</h1>
            <p className="section-desc mb-12">
              Fill out the form below to request a service, inquire about pricing, or book a discovery call. We'll build a custom roadmap for your AI journey.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-indigo-500 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Email Us</h4>
                  <p className="text-gray-400">hello@conversingai.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-indigo-500 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Sales & Enquiry</h4>
                  <p className="text-gray-400">Free discovery call included with every request.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-indigo-500 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Voice Support</h4>
                  <p className="text-gray-400">Available Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Work Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Service Required</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                  <option className="bg-black">AI Chat Agents (DFY)</option>
                  <option className="bg-black">AI Voice Receptionist (DFY)</option>
                  <option className="bg-black">Lead Generation Subscription</option>
                  <option className="bg-black">Website Design & Development</option>
                  <option className="bg-black">Custom Automation Workflow</option>
                  <option className="bg-black">Something Else</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Tell us about your project</label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="What goals are you trying to achieve?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="btn btn-primary w-full justify-center py-5 text-xl relative overflow-hidden"
              >
                {formState === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Submit Request <Send className="w-5 h-5" />
                  </span>
                )}
              </button>
              <p className="text-center text-xs text-gray-500">
                100% Privacy Guaranteed. We never share your details.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
