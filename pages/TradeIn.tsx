
import React from 'react';
import { bt } from '../utils/bilingual';

export const TradeIn: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12">{bt('Trade-in Program', 'ट्रेड-इन कार्यक्रम')}</h1>
        <div className="text-center text-slate-400">
          <p>{bt('Trade-in offers coming soon!', 'ट्रेड-इन ऑफ़र जल्द ही आ रहे हैं!')}</p>
        </div>
      </div>
    </div>
  );
};
