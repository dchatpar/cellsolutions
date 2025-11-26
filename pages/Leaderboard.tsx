
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon } from '../components/icons/Icons';
import type { LeaderboardUser } from '../types';

const mockUsers: LeaderboardUser[] = [
  { rank: 1, name: 'Rahul Sharma', avatar: 'https://ui-avatars.com/api/?name=Rahul+Sharma&background=8b5cf6&color=fff', points: 15400, sales: 45, trend: 'up' },
  { rank: 2, name: 'Priya Patel', avatar: 'https://ui-avatars.com/api/?name=Priya+Patel&background=ec4899&color=fff', points: 12300, sales: 38, trend: 'up' },
  { rank: 3, name: 'Amit Singh', avatar: 'https://ui-avatars.com/api/?name=Amit+Singh&background=f59e0b&color=fff', points: 11050, sales: 32, trend: 'down' },
  { rank: 4, name: 'Sneha Gupta', avatar: 'https://ui-avatars.com/api/?name=Sneha+Gupta&background=10b981&color=fff', points: 9800, sales: 28, trend: 'same' },
  { rank: 5, name: 'Vikram Reddy', avatar: 'https://ui-avatars.com/api/?name=Vikram+Reddy&background=3b82f6&color=fff', points: 8500, sales: 25, trend: 'up' },
];

export const Leaderboard: React.FC = () => {
  const [period, setPeriod] = useState<'weekly' | 'monthly' | 'allTime'>('weekly');

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
        >
           <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Leaderboard</h1>
           <p className="text-slate-400 text-lg">Top sellers and earners this week.</p>
        </motion.div>

        <div className="flex justify-center mb-12">
           <div className="bg-slate-900 p-1.5 rounded-xl flex space-x-2 border border-slate-800">
              {(['weekly', 'monthly', 'allTime'] as const).map((p) => (
                 <button
                   key={p}
                   onClick={() => setPeriod(p)}
                   className="px-6 py-2 rounded-lg text-sm font-bold transition-colors relative"
                 >
                    {period === p && <motion.div layoutId="leaderboardFilter" className="absolute inset-0 bg-indigo-600 rounded-lg shadow-lg" />}
                    <span className="relative z-10 text-white">
                        {p === 'weekly' && 'This Week'}
                        {p === 'monthly' && 'This Month'}
                        {p === 'allTime' && 'All Time'}
                    </span>
                 </button>
              ))}
           </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-end gap-4 mb-12"
        >
           <motion.div initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.5}} className="flex flex-col items-center">
              <img src={mockUsers[1].avatar} alt={mockUsers[1].name} className="w-20 h-20 rounded-full border-4 border-slate-400 mb-3" />
              <div className="bg-slate-800 w-32 h-32 rounded-t-2xl flex flex-col items-center justify-start pt-4 border-t-4 border-slate-400">
                 <span className="text-3xl font-bold text-slate-400">2</span>
                 <span className="text-sm text-white font-bold mt-2 text-center">{mockUsers[1].name}</span>
                 <span className="text-sm text-indigo-400">{mockUsers[1].points}</span>
              </div>
           </motion.div>
           <motion.div initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.4}} className="flex flex-col items-center z-10">
              <div className="relative">
                 <TrophyIcon className="h-10 w-10 text-amber-400 absolute -top-12 left-1/2 -translate-x-1/2" />
                 <img src={mockUsers[0].avatar} alt={mockUsers[0].name} className="w-24 h-24 rounded-full border-4 border-amber-400 mb-3 shadow-2xl shadow-amber-500/20" />
              </div>
              <div className="bg-slate-800 w-40 h-40 rounded-t-2xl flex flex-col items-center justify-start pt-4 border-t-4 border-amber-400 bg-gradient-to-b from-slate-800 to-slate-900">
                 <span className="text-5xl font-black text-amber-400">1</span>
                 <span className="text-md text-white font-bold mt-2 text-center">{mockUsers[0].name}</span>
                 <span className="text-md text-indigo-400 font-bold">{mockUsers[0].points} pts</span>
              </div>
           </motion.div>
           <motion.div initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.6}} className="flex flex-col items-center">
              <img src={mockUsers[2].avatar} alt={mockUsers[2].name} className="w-16 h-16 rounded-full border-4 border-amber-700 mb-3" />
              <div className="bg-slate-800 w-28 h-28 rounded-t-2xl flex flex-col items-center justify-start pt-4 border-t-4 border-amber-700">
                 <span className="text-2xl font-bold text-amber-700">3</span>
                 <span className="text-xs text-white font-bold mt-2 text-center">{mockUsers[2].name}</span>
                 <span className="text-xs text-indigo-400">{mockUsers[2].points}</span>
              </div>
           </motion.div>
        </motion.div>

        <div className="glass-card rounded-2xl overflow-hidden">
           {mockUsers.slice(3).map((user, i) => (
             <motion.div 
                key={user.rank} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center justify-between p-4 border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors"
             >
                <div className="flex items-center gap-4">
                   <span className="text-slate-500 font-bold w-6 text-center">{user.rank}</span>
                   <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
                   <div>
                      <div className="text-white font-bold text-lg">{user.name}</div>
                      <div className="text-xs text-slate-500">{user.sales} Sales</div>
                   </div>
                </div>
                <div className="text-right">
                   <div className="text-indigo-400 font-bold text-lg">{user.points} pts</div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};
