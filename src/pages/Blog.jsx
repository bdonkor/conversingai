import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: "How AI Voice Receptionists are Changing Small Business Operations",
      excerpt: "Discover why local businesses are ditching traditional answering services for AI-powered voice agents that never sleep.",
      category: "AI Technology",
      author: "James Wilson",
      date: "Feb 10, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "5 Automation Workflows That Save Founders 10+ Hours Weekly",
      excerpt: "Real-world examples of CRM and email automations that actually move the needle for scaling startups.",
      category: "Growth",
      author: "Sarah Chen",
      date: "Feb 05, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1518186239715-6a97ff67b931?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Future of Customer Support: Why Human-in-the-Loop is Key",
      excerpt: "Why the best AI strategy isn't replacing humans, but empowering them with better tools and instant data.",
      category: "Strategy",
      author: "Michael Ross",
      date: "Jan 28, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Sourcing High-Quality Leads with AI: A Step-by-Step Guide",
      excerpt: "How we use machine learning to identify and qualify the top 1% of prospects in any industry.",
      category: "Lead Gen",
      author: "James Wilson",
      date: "Jan 15, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Maximizing ROI on Your Website with Conversational AI",
      excerpt: "Stop letting traffic bounce. Learn how to turn anonymous visitors into booked appointments instantly.",
      category: "Conversion",
      author: "Sarah Chen",
      date: "Jan 10, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Digital Growth Trends to Watch in 2026",
      excerpt: "From hyper-personalization to autonomous sales agents, here's what the next 12 months look like.",
      category: "Trends",
      author: "Michael Ross",
      date: "Jan 02, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="section-head text-center mb-16">
          <span className="section-tag">Insights & Updates</span>
          <h1 className="section-title text-gradient">The Growth Journal</h1>
          <p className="section-desc">Expert advice on AI, automation, and scaling your business in the modern digital age.</p>
        </div>

        {/* Search & Categories */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 animate-reveal">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "AI Technology", "Growth", "Strategy", "Lead Gen", "Conversion"].map((cat, i) => (
              <button key={i} className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? 'bg-indigo-600' : 'glass hover:bg-white/10'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center">
                      <User className="w-4 h-4 text-indigo-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{post.author}</span>
                  </div>
                  <a href="#" className="text-indigo-500 hover:text-indigo-400 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-20 flex justify-center gap-4">
          <button className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-500 flex items-center justify-center font-bold">1</button>
          <button className="w-12 h-12 rounded-xl glass hover:bg-white/10 flex items-center justify-center font-bold transition-colors">2</button>
          <button className="w-12 h-12 rounded-xl glass hover:bg-white/10 flex items-center justify-center font-bold transition-colors">3</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
