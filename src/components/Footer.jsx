import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Linkedin, Mail, ArrowUpRight, Shield, Globe, Cpu } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight text-white">
                Conversing<span className="text-blue-500">AI</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs text-[15px]">
              The premier choice for managed AI infrastructure. We design, deploy, and manage the intelligent systems that power your business growth.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Globe className="w-5 h-5" />, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8 ml-1">Solutions</h4>
            <ul className="space-y-5">
              {[
                { name: 'AI Chat Agents', path: '/services' },
                { name: 'AI Voice Receptionists', path: '/services' },
                { name: 'Lead Generation AI', path: '/lead-generation' },
                { name: 'Website AI Integration', path: '/services' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8 ml-1">Platform</h4>
            <ul className="space-y-5">
              {[
                { name: 'How It Works', path: '/how-it-works' },
                { name: 'Strategic Audits', path: '/services' },
                { name: 'Knowledge Hub', path: '/blog' },
                { name: 'Request Service', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group text-[15px]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8 ml-1">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">Join 2,000+ executives getting our weekly AI implementation insights.</p>
            <form className="relative flex flex-col gap-3">
              <input
                type="email"
                placeholder="Work email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all duration-300 text-white"
                required
              />
              <button
                type="submit"
                className="btn btn-primary w-full justify-center py-4 rounded-xl font-bold shadow-lg shadow-blue-500/10"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[13px] text-slate-500 font-medium">
            <p>© {currentYear} Conversing AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-600">
              <Shield className="w-4 h-4 text-blue-500 opacity-50" /> Secure Protocol
            </div>
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-600">
              <Cpu className="w-4 h-4 text-blue-500 opacity-50" /> Cloudflare Edge
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
