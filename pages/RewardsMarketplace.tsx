import React from 'react';
import { motion } from 'framer-motion';
import { GiftIcon, LockIcon } from '../components/icons/Icons';
import type { RewardItem } from '../types';

const rewards: RewardItem[] = [
  { id: '1', title: '₹100 Amazon Voucher', description: 'Instant gift card', cost: 1000, image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="150" fill="none"%3E%3Crect width="300" height="150" fill="%23232f3e" rx="12"/%3E%3Cpath fill="%23fff" d="M54.45 101.2h10.4v-4.2H54.45v4.2Zm23.3-26.4c-4.6 0-8.8 1.8-11.7 4.9-3.3 3.5-5.1 8.5-5.1 14.1v.2h4.3v-.2c0-5.3 1.7-9.5 4.6-12.3 2.8-2.7 6.3-4.2 10.7-4.2 4.1 0 7.4 1.4 9.9 4.1 2.5 2.8 3.8 6.5 3.8 11.2 0 4.1-1.1 7.6-3.4 10.3-2.3 2.7-5.5 4.2-9.6 4.6v-4.1c3.4-.4 5.9-1.6 7.6-3.8 1.7-2.1 2.5-4.8 2.5-8 0-4-1.2-7-3.5-9-2.3-2-5.4-3.1-9.2-3.1Zm22 26.4h10.4v-4.2h-10.4v4.2Zm25.4-26.4c-4.6 0-8.8 1.8-11.7 4.9-3.3 3.5-5.1 8.5-5.1 14.1v.2h4.3v-.2c0-5.3 1.7-9.5 4.6-12.3 2.8-2.7 6.3-4.2 10.7-4.2 4.1 0 7.4 1.4 9.9 4.1 2.5 2.8 3.8 6.5 3.8 11.2 0 4.1-1.1 7.6-3.4 10.3-2.3 2.7-5.5 4.2-9.6 4.6v-4.1c3.4-.4 5.9-1.6 7.6-3.8 1.7-2.1 2.5-4.8 2.5-8 0-4-1.2-7-3.5-9-2.3-2-5.4-3.1-9.2-3.1Zm30.2 12.3h-4.3v14.1h-4.3V87.1h14.7v4.1h-10.4v6.2h10.1v4.1h-10.1v6.7h10.4v4.1Zm22.9-10.3c-2.3-2.7-5.5-4.2-9.6-4.6v-4.1c4.9.4 9.1 2.3 12 5.5 2.8 3.2 4.3 7.5 4.3 12.7 0 5.4-1.5 9.8-4.5 13-3 3.2-6.9 4.8-11.8 4.8-5 0-9.1-1.7-12-5.1-3-3.4-4.5-7.8-4.5-13.2 0-5.5 1.5-10 4.6-13.4 3.1-3.4 7-5.1 11.7-5.1 4.5 0 8.4 1.4 11.5 4.2l-2.9 2.8c-2.5-2.2-5.4-3.2-8.6-3.2-3.8 0-7 1.3-9.4 3.8-2.4 2.5-3.7 5.8-3.7 9.8 0 4.5 1.2 8 3.7 10.5 2.5 2.5 5.7 3.7 9.6 3.7 4.2 0 7.6-1.3 10.1-4 2.6-2.6 3.8-6.1 3.8-10.4 0-4.1-1.1-7.6-3.4-10.3Z"/%3E%3Cpath fill="%23f90" d="m213.75 49.95 10.3 20.1 21.3 2.5-15.8 14.9 4.1 21.2-18.9-10.4-18.9 10.4 4.1-21.2-15.8-14.9 21.3-2.5 10.3-20.1Z"/%3E%3C/svg%3E', type: 'voucher' },
  { id: '2', title: '₹500 Cash Bonus', description: 'Added to your wallet', cost: 5000, image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="150" fill="none"%3E%3Crect width="300" height="150" fill="%2310b981" rx="12"/%3E%3Ctext x="50%25" y="50%25" fill="%23fff" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" dy=".3em"%3ECash Bonus%3C/text%3E%3C/svg%3E', type: 'cash' },
  { id: '3', title: 'Priority Pickup', description: 'Skip the queue', cost: 500, image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="150" fill="none"%3E%3Crect width="300" height="150" fill="%236366f1" rx="12"/%3E%3Ctext x="50%25" y="50%25" fill="%23fff" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" dy=".3em"%3EPriority Pickup%3C/text%3E%3C/svg%3E', type: 'coupon' },
  { id: '4', title: '1 Month Netflix', description: 'Mobile plan', cost: 2000, image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="150" fill="none"%3E%3Crect width="300" height="150" fill="%23000" rx="12"/%3E%3Cpath fill="%23E50914" d="M96.7 108.5V64.2h-11L67 92.4V64.2H55.6v50h11.2L85.4 82v31.7h11.3v-5.2zM120.4 64.2h11.3v50h-11.3v-50zM158.4 64.2h11.8l18.5 28.3V64.2h11.3v50h-11.2l-18.9-29v29h-11.5v-50zM244.4 74.8c-5.1-1-8.3 2.1-8.3 8.3v17c0 6.6 3.1 9.3 8.4 8.3l1.1-.2V74.8h-1.2zm-12.7-10.6h12.5c8.1 0 12.5 4 12.5 12.3v17.2c0 8-4.6 12.5-12.5 12.5h-12.5V64.2z"/%3E%3C/svg%3E', type: 'voucher' },
];

export const RewardsMarketplace: React.FC = () => {
  const userPoints = 1250;

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
        >
           <div>
              <h1 className="text-4xl font-black text-white mb-2">Rewards Store</h1>
              <p className="text-slate-400 text-lg">Redeem your hard-earned points</p>
           </div>
           <div className="glass-card px-6 py-3 rounded-xl flex items-center shrink-0">
              <span className="text-slate-400 text-sm mr-3">Your Balance:</span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">{userPoints} pts</span>
           </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {rewards.map((item, i) => {
             const canAfford = userPoints >= item.cost;
             return (
               <motion.div 
                 key={item.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className={`glass-card rounded-2xl p-6 hover:border-indigo-500/50 ${!canAfford && 'opacity-50'}`}
               >
                  <div className="h-36 w-full bg-slate-800 rounded-xl mb-6 flex items-center justify-center p-4">
                     <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain rounded-md" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 truncate">{item.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 h-10">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                     <span className="text-indigo-400 font-bold text-lg">{item.cost} pts</span>
                     <button 
                       disabled={!canAfford}
                       className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${canAfford ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:scale-105' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
                     >
                       {canAfford ? 'Redeem' : <LockIcon className="h-4 w-4" />}
                     </button>
                  </div>
               </motion.div>
             );
           })}
        </div>
      </div>
    </div>
  );
};