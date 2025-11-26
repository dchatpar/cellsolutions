
import React from 'react';
import { bt } from '../../utils/bilingual';

export const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">{bt('Dashboard', 'डैशबोर्ड')}</h1>
      <p className="text-slate-400 mt-2">{bt('Welcome to the admin dashboard.', 'एडमिन डैशबोर्ड में आपका स्वागत है।')}</p>
    </div>
  );
};
