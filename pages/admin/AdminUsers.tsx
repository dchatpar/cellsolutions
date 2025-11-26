
import React from 'react';
import { bt } from '../../utils/bilingual';

export const AdminUsers: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">{bt('User Management', 'उपयोगकर्ता प्रबंधन')}</h1>
    </div>
  );
};
