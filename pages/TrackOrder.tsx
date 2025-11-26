
import React from 'react';
import { bt } from '../utils/bilingual';

export const TrackOrder: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12">{bt('Track Your Order', 'अपना ऑर्डर ट्रैक करें')}</h1>
        <div className="max-w-md mx-auto">
           <input type="text" placeholder={bt('Enter Order ID', 'ऑर्डर आईडी दर्ज करें')} className="w-full p-4 bg-slate-800 border border-slate-700 rounded-lg text-white" />
        </div>
      </div>
    </div>
  );
};
