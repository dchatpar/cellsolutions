
import React from 'react';
import { bt } from '../utils/bilingual';

export const Articles: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12">{bt('Articles & Guides', 'लेख और गाइड')}</h1>
        <div className="text-center text-slate-400">
          <p>{bt('Blog content coming soon!', 'ब्लॉग सामग्री जल्द ही आ रही है!')}</p>
        </div>
      </div>
    </div>
  );
};
