
import React from 'react';
import { bt } from '../../utils/bilingual';

export const AdminOrders: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">{bt('Order Management', 'ऑर्डर प्रबंधन')}</h1>
    </div>
  );
};
