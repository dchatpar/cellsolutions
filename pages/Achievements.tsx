
import React from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, CheckCircleIcon } from '../components/icons/Icons';
import type { Badge } from '../types';

const badges: Badge[] = [
  { id: '1', name: 'First Sale', description: 'Successfully sold your first device', icon: '🎉', unlocked: true, progress: 100 },
  { id: '2', name: 'Five Star', description: 'Received 5-star rating from buyer', icon: '⭐', unlocked: true, progress: 100 },
  { id: '3', name: 'Power Seller', description: 'Sell 10 devices', icon: '⚡', unlocked: false, progress: 40 },
  { id: '4', name: 'Eco Warrior', description: 'Recycle 5 old devices', icon: '🌱', unlocked: false, progress: 20 },
  { id: '5', name: 'Referral Pro', description: 'Refer 5 friends', icon: '🤝', unlocked: false, progress: 60 },
  { id: '6', name: 'Early Bird', description: 'Sell a device within 1 hour of quote', icon: '🐦', unlocked: false, progress: 0 },
];

export const Achievements: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
           <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/10 rounded-full mb-6 border border-amber-500/20">
              <TrophyIcon className="h-10 w-10 text-amber-500 animate-pulse" />
           </div>
           <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Your Achievements</h1>
           <p className="text-slate-400 text-lg">Unlock badges to earn bonus points and exclusive rewards.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {badges.map((badge, index) => (
             <motion.div 
               key={badge.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`relative p-6 rounded-2xl border ${badge.unlocked ? 'glass-card border-amber-500/30 shadow-lg shadow-amber-500/10' : 'bg-slate-900/50 border-slate-800 opacity-60'}`}
             >
                <div className="flex justify-between items-start mb-4">
                   <div className="text-5xl">{badge.icon}</div>
                   {badge.unlocked && <CheckCircleIcon className="h-6 w-6 text-emerald-500" />}
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${badge.unlocked ? 'text-white' : 'text-slate-500'}`}>{badge.name}</h3>
                <p className="text-sm text-slate-400 mb-6 h-10">{badge.description}</p>
                
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                   <div className={`h-full transition-all duration-500 ${badge.unlocked ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-slate-600'}`} style={{ width: `${badge.progress}%` }}></div>
                </div>
                <div className="text-right text-xs text-slate-500 mt-2">{badge.progress}%</div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};
