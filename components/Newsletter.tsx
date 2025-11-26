
import React from 'react';
import { motion } from 'framer-motion';
import { BellIcon } from './icons/Icons';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-emerald-900 opacity-40"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-2xl mx-auto"
            >
               <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md mb-8 shadow-xl border border-white/10">
                  <BellIcon className="h-8 w-8 text-white" />
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Get Exclusive Price Alerts</h2>
               <p className="text-indigo-200 text-lg mb-10">
                 Subscribe to our newsletter and get notified when your device value peaks. Plus, receive a <span className="font-bold text-white">₹500 Bonus Coupon</span> instantly!
               </p>
               
               <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-grow px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-sm transition-all"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all"
                  >
                    Subscribe Now
                  </motion.button>
               </form>
               <p className="text-indigo-200/50 text-xs mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </motion.div>
         </div>
      </div>
    </section>
  );
};
