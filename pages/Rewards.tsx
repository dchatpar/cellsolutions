
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrophyIcon, GiftIcon, TargetIcon, CheckCircleIcon, SparklesIcon, FireIcon } from '../components/icons/Icons';
import type { RewardProfile, Challenge } from '../types';

export const Rewards: React.FC = () => {
  const [profile] = useState<RewardProfile>({
    points: 1250,
    tier: 'Silver',
    nextTierPoints: 2000,
    lifetimeEarnings: 4500
  });

  const challenges: Challenge[] = [
    { id: '1', title: 'Daily Login', description: 'Log in 5 days in a row', rewardPoints: 50, expiresIn: '12h', completed: true },
    { id: '2', title: 'Refer a Friend', description: 'Invite a friend who sells a device', rewardPoints: 200, expiresIn: '2d', completed: false },
    { id: '3', title: 'Sell a Device', description: 'Sell any device this week', rewardPoints: 500, expiresIn: '5d', completed: false },
  ];

  const tierProgress = (profile.points / profile.nextTierPoints) * 100;

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-10"
        >
            My Rewards
        </motion.h1>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 mb-12 relative overflow-hidden shadow-2xl shadow-indigo-500/20"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                 <div className="text-indigo-100 text-sm font-bold uppercase tracking-wider mb-2">Current Balance</div>
                 <div className="text-5xl font-black text-white mb-2 flex items-center">
                   {profile.points} <span className="text-2xl ml-2 opacity-80">pts</span>
                 </div>
                 <div className="text-indigo-100 text-sm">
                   Lifetime Earnings: {profile.lifetimeEarnings} pts
                 </div>
              </div>

              <div className="flex-1 w-full max-w-md bg-black/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                 <div className="flex justify-between text-sm font-bold text-white mb-2">
                    <span>{profile.tier}</span>
                    <span>Gold</span>
                 </div>
                 <div className="h-3 bg-black/30 rounded-full overflow-hidden mb-2">
                    <motion.div 
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-500" 
                        initial={{ width: 0 }}
                        animate={{ width: `${tierProgress}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                 </div>
                 <div className="text-xs text-indigo-100 text-right">
                    {profile.nextTierPoints - profile.points} pts to next tier
                 </div>
              </div>
           </div>
        </motion.div>

        <div className="mb-12">
           <div className="flex items-center space-x-3 mb-6">
              <FireIcon className="h-7 w-7 text-amber-500" />
              <h2 className="text-2xl font-bold text-white">Daily Challenges</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges.map((challenge, i) => (
                 <motion.div 
                   key={challenge.id}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className={`p-6 rounded-2xl border ${challenge.completed ? 'bg-emerald-900/20 border-emerald-500/30' : 'bg-slate-900 border-slate-800'}`}
                 >
                    <div className="flex justify-between items-start mb-4">
                       <div className={`p-3 rounded-xl ${challenge.completed ? 'bg-emerald-500/20' : 'bg-slate-800'}`}>
                          {challenge.completed ? <CheckCircleIcon className="h-6 w-6 text-emerald-500" /> : <TargetIcon className="h-6 w-6 text-indigo-400" />}
                       </div>
                       <span className="text-xs font-bold bg-slate-800 text-slate-300 px-3 py-1 rounded-md border border-slate-700">
                          {challenge.rewardPoints} pts
                       </span>
                    </div>
                    <h3 className="font-bold text-white mb-2">{challenge.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 h-10">{challenge.description}</p>
                 </motion.div>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <Link to="/rewards-marketplace" className="group glass-card p-6 rounded-2xl flex items-center hover:border-indigo-500/50">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full flex items-center justify-center mr-5 transition-transform group-hover:scale-110">
                 <GiftIcon className="h-7 w-7 text-indigo-400" />
              </div>
              <div>
                 <h3 className="font-bold text-white text-lg">Redeem Points</h3>
                 <p className="text-slate-400 text-sm">Get vouchers & cash</p>
              </div>
           </Link>

           <Link to="/achievements" className="group glass-card p-6 rounded-2xl flex items-center hover:border-amber-500/50">
              <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mr-5 transition-transform group-hover:scale-110">
                 <TrophyIcon className="h-7 w-7 text-amber-400" />
              </div>
              <div>
                 <h3 className="font-bold text-white text-lg">Achievements</h3>
                 <p className="text-slate-400 text-sm">View your badges</p>
              </div>
           </Link>
        </div>
      </div>
    </div>
  );
};
