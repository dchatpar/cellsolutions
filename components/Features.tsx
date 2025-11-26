
import React from 'react';
import { motion } from 'framer-motion';
import { TruckIcon, ShieldCheckIcon, BoltIcon, BanknotesIcon } from './icons/Icons';
import type { Feature } from '../types';

const features: Feature[] = [
  { title: 'Highest Market Prices', description: 'Our AI algorithm scans 20+ marketplaces to ensure you get the best deal.', icon: BoltIcon },
  { title: 'Instant Payment', description: 'Get paid via UPI or Bank Transfer within 60 seconds of device pickup.', icon: BanknotesIcon },
  { title: '100% Data Security', description: 'Military-grade data wipe for every device with a digital certificate.', icon: ShieldCheckIcon },
  { title: 'Free Doorstep Pickup', description: 'Service available in 50+ cities with real-time tracking.', icon: TruckIcon },
];

const timelineSteps = [
  { step: '01', title: 'Get Instant Quote', desc: 'Select your device and answer a few simple questions about its condition.' },
  { step: '02', title: 'Schedule Pickup', desc: 'Choose a convenient time slot and location for our agent to visit.' },
  { step: '03', title: 'Quick Inspection', desc: 'Our expert performs a quick, transparent check at your doorstep.' },
  { step: '04', title: 'Get Paid Instantly', desc: 'Receive your money via UPI/Bank transfer before the agent leaves.' },
];

export const Features: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-950">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-24">
             <motion.div 
                initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.5 }}
                className="text-center mb-16"
             >
               <h2 className="text-3xl md:text-5xl font-black text-white mb-6">A Smarter Way to Sell</h2>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto">We've simplified everything. Better prices, faster payments, and zero headaches.</p>
             </motion.div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y:30 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                    className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:bg-slate-800/80 hover:border-slate-700 transition-all group"
                  >
                     <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20 transition-transform duration-300 group-hover:scale-110">
                        <feature.icon className="h-8 w-8 text-indigo-400" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                     <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
             </div>
          </div>

          <div>
             <motion.div 
                initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true, amount: 0.5 }}
                className="text-center mb-16"
             >
                <h2 className="text-3xl md:text-5xl font-black text-white">How It Works in 4 Steps</h2>
             </motion.div>
             
             <div className="relative">
                <div className="hidden md:block absolute top-12 left-1/2 w-0.5 h-[calc(100%-6rem)] bg-slate-800 -translate-x-1/2 z-0"></div>

                {timelineSteps.map((item, idx) => (
                   <motion.div 
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className={`flex items-start gap-8 mb-16 md:mb-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                   >
                       <motion.div 
                         variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } } }}
                         className="relative z-10 w-24 h-24 rounded-full bg-slate-900 border-4 border-indigo-500 flex-shrink-0 flex items-center justify-center text-3xl font-bold text-white shadow-2xl shadow-indigo-900/50"
                       >
                         {item.step}
                       </motion.div>
                       <motion.div 
                          variants={{ hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
                          className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} py-6`}
                       >
                         <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                         <p className="text-slate-400">{item.desc}</p>
                       </motion.div>
                       <div className="hidden md:block w-1/2"></div>
                   </motion.div>
                ))}
             </div>
          </div>

       </div>
    </section>
  );
};
