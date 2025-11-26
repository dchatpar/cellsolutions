
import React from 'react';
import { motion } from 'framer-motion';
import { CellSolutionsLogo, AppleIcon, PlayStoreIcon } from './icons/Icons';

export const AppPromo: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 text-center md:text-left">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-bold text-white mb-6 border border-white/20"
                 >
                   Get ₹500 Extra on First App Sale
                 </motion.div>
                 <motion.h2 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.1 }}
                   className="text-3xl md:text-5xl font-black text-white mb-6"
                 >
                   Sell Faster with the Cell Solutions App
                 </motion.h2>
                 <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="text-indigo-100 text-lg mb-8 max-w-md mx-auto md:mx-0"
                 >
                   Scan your device for instant valuation, track pickup agents in real-time, and get exclusive app-only bonuses.
                 </motion.p>
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                   className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                 >
                    <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors transform hover:scale-105">
                      <AppleIcon className="h-6 w-6" /> App Store
                    </button>
                    <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors transform hover:scale-105">
                      <PlayStoreIcon className="h-5 w-5" /> Google Play
                    </button>
                 </motion.div>
              </div>
              
              <div className="md:w-1/2 flex justify-center items-center h-full min-h-[300px]">
                  <motion.div 
                    className="w-64 h-[30rem] bg-slate-950 rounded-[40px] border-8 border-slate-800 shadow-2xl flex items-center justify-center relative transform transition-transform duration-500 animate-float"
                    style={{ transform: 'rotateY(20deg) rotateX(10deg)'}}
                  >
                     <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-full"></div>
                     <CellSolutionsLogo className="h-8 w-auto opacity-50" />
                     <div className="absolute inset-2 bg-gradient-to-br from-indigo-500 to-violet-500 opacity-20 rounded-[32px]"></div>
                  </motion.div>
              </div>
           </div>

           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};
