import React, { useState } from 'react';
// FIX: import Variants to fix type error with ease property
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ShoppingBagIcon, WalletIcon, SettingsIcon, LogOutIcon, BellIcon } from '../components/icons/Icons';

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'listings' | 'orders' | 'wallet' | 'settings'>('listings');

  const tabs = [
    { id: 'listings', label: 'Active Listings', icon: ShoppingBagIcon },
    { id: 'orders', label: 'Order History', icon: BellIcon },
    { id: 'wallet', label: 'My Wallet', icon: WalletIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  // FIX: Explicitly type contentVariants as Variants to fix type error with ease property
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-10"
        >
            My Dashboard
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-72 flex-shrink-0"
          >
             <div className="glass-card rounded-2xl p-4 sticky top-24">
                <div className="flex items-center space-x-4 mb-6 p-2">
                   <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      JD
                   </div>
                   <div>
                      <div className="font-bold text-white text-lg">John Doe</div>
                      <div className="text-xs text-slate-400">+91 98765 43210</div>
                   </div>
                </div>
                
                <nav className="space-y-1">
                   {tabs.map(tab => (
                     <button
                       key={tab.id}
                       onClick={() => setActiveTab(tab.id as any)}
                       className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors relative ${
                         activeTab === tab.id 
                           ? 'text-indigo-300' 
                           : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                       }`}
                     >
                        {activeTab === tab.id && (
                          <motion.div
                            layoutId="activeTabIndicator"
                            className="absolute inset-0 bg-indigo-500/10 rounded-xl border border-indigo-500/20"
                          ></motion.div>
                        )}
                        <tab.icon className="h-5 w-5 z-10" />
                        <span className="font-bold z-10">{tab.label}</span>
                     </button>
                   ))}
                   <div className="pt-4 mt-4 border-t border-slate-800">
                     <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors">
                        <LogOutIcon className="h-5 w-5" />
                        <span className="font-bold">Logout</span>
                     </button>
                   </div>
                </nav>
             </div>
          </motion.div>

          <div className="flex-1 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="glass-card rounded-2xl p-8"
              >
                 {activeTab === 'listings' && (
                    <div>
                       <h2 className="text-2xl font-bold text-white mb-6">Active Listings</h2>
                       <div className="text-center py-12">
                          <p className="text-slate-400 mb-4">No active listings found</p>
                       </div>
                    </div>
                 )}
                 {activeTab === 'orders' && (
                    <div>
                       <h2 className="text-2xl font-bold text-white mb-6">Order History</h2>
                       <p className="text-slate-400">No past orders found.</p>
                    </div>
                 )}
                 {activeTab === 'wallet' && (
                    <div>
                       <h2 className="text-2xl font-bold text-white mb-6">My Wallet</h2>
                       <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-8 text-white mb-8 shadow-2xl shadow-indigo-500/20">
                          <div className="text-sm opacity-80 mb-1">Current Balance</div>
                          <div className="text-5xl font-black">₹ 0.00</div>
                       </div>
                    </div>
                 )}
                 {activeTab === 'settings' && (
                    <div>
                       <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                       <form className="space-y-6 max-w-md">
                          <div>
                             <label className="block text-sm text-slate-400 mb-2">Full Name</label>
                             <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" defaultValue="John Doe" />
                          </div>
                          <div>
                             <label className="block text-sm text-slate-400 mb-2">Email</label>
                             <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white" defaultValue="john@example.com" />
                          </div>
                          <motion.button whileHover={{scale: 1.05}} className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg font-bold transition-colors">
                             Save Changes
                          </motion.button>
                       </form>
                    </div>
                 )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};