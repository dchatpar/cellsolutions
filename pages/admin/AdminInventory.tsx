
import React from 'react';
import { bt } from '../../utils/bilingual';

export const AdminInventory: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">{bt('Inventory Management', 'इन्वेंटरी प्रबंधन')}</h1>
    </div>
  );
};
