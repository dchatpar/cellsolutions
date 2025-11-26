
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from './icons/Icons';

const Particle = () => {
  const duration = Math.random() * 3 + 2;
  const size = Math.floor(Math.random() * 15 + 5);
  const initialY = Math.random() * 100;
  const initialX = Math.random() * 100;
  const color = ['#6366f1', '#8b5cf6', '#10b981'][Math.floor(Math.random() * 3)];
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top: `${initialY}%`,
        left: `${initialX}%`,
        backgroundColor: color,
        opacity: Math.random() * 0.2 + 0.1,
      }}
      animate={{
        x: [0, Math.random() * 50 - 25, 0],
        y: [0, Math.random() * 50 - 25, 0],
        scale: [1, Math.random() * 0.5 + 0.8, 1],
      }}
      transition={{
        duration: duration * 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/quote?device=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/quote');
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-slate-950">
        {[...Array(25)].map((_, i) => <Particle key={i} />)}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 to-slate-950" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tighter"
          >
            Sell Your Devices For <br />
            <span className="text-gradient-animated">Maximum Instant Cash</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg lg:text-xl text-slate-400 mb-12 max-w-3xl mx-auto"
          >
            AI-powered quotes. Free doorstep pickup across 50+ cities. Money in your account, instantly.
          </motion.p>

          <motion.form 
            onSubmit={handleSearch}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto relative group"
          >
            <div className="relative flex items-center bg-slate-900/70 border border-slate-700/80 rounded-2xl p-2 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm">
              <SearchIcon className="h-6 w-6 text-slate-400 ml-4 pointer-events-none" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any device (e.g., iPhone 15, MacBook Air M2)" 
                className="w-full bg-transparent border-none focus:ring-0 text-white placeholder-slate-500 px-4 py-3 text-lg"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-indigo-500/30"
              >
                Get Quote
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
