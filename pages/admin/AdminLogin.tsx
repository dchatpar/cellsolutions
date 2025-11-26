
import React from 'react';
import { bt } from '../../utils/bilingual';
import { CellSolutionsLogo } from '../../components/icons/Icons';

export const AdminLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
       <div className="w-full max-w-sm bg-slate-900 p-8 rounded-2xl border border-slate-800">
         <CellSolutionsLogo className="h-10 w-auto mx-auto mb-8" />
         <h2 className="text-2xl font-bold text-white text-center mb-6">{bt('Admin Login', 'एडमिन लॉगिन')}</h2>
         <form className="space-y-4">
            <div>
               <label className="block text-sm text-slate-400 mb-1">{bt('Email', 'ईमेल')}</label>
               <input type="email" className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-white" />
            </div>
            <div>
               <label className="block text-sm text-slate-400 mb-1">{bt('Password', 'पासवर्ड')}</label>
               <input type="password" placeholder="••••••••" className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-white" />
            </div>
            <button className="w-full p-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold text-white">{bt('Login', 'लॉगिन')}</button>
         </form>
       </div>
    </div>
  );
};
