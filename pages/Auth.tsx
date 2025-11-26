
import React from 'react';
import { motion } from 'framer-motion';
import { GoogleIcon, FacebookIcon, AppleIcon, CellSolutionsLogo } from '../components/icons/Icons';

export const Auth: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-slate-950 min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass-card p-8 rounded-2xl"
      >
        <CellSolutionsLogo className="h-10 w-auto mx-auto mb-8" />
        <h1 className="text-3xl font-bold text-white text-center mb-2">Welcome Back</h1>
        <p className="text-slate-400 text-center mb-8">Login or create an account to continue</p>

        <div className="flex items-center space-x-4 mb-6">
          <button className="w-full py-3 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors">
            <GoogleIcon className="h-5 w-5" />
          </button>
          <button className="w-full py-3 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors">
            <FacebookIcon className="h-5 w-5 text-[#1877F2]" />
          </button>
          <button className="w-full py-3 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-800 transition-colors">
            <AppleIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="relative flex items-center my-8">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-4 text-slate-500 text-xs uppercase">Or continue with</span>
            <div className="flex-grow border-t border-slate-800"></div>
        </div>

        <form className="space-y-6">
           <div>
              <label className="block text-sm text-slate-400 mb-2">Email Address</label>
              <input type="email" className="w-full p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 outline-none"/>
           </div>
           
           <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg font-bold text-white shadow-lg shadow-indigo-500/20"
           >
            Continue
           </motion.button>
        </form>
      </motion.div>
    </div>
  );
};
