
import React, { useState } from 'react';
import { BellIcon } from './icons/Icons';
import { bt } from '../utils/bilingual';

export const NotificationCenter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = 3;

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-slate-400 hover:text-white transition-colors relative"
      >
        <BellIcon className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-slate-900">
            {unreadCount}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-slate-900 rounded-xl shadow-xl border border-slate-800 py-2 z-50">
          <div className="px-4 py-2 font-bold text-white border-b border-slate-800">{bt('Notifications', 'सूचनाएं')}</div>
          <div className="py-2">
            <div className="px-4 py-3 hover:bg-slate-800">
              <p className="text-sm text-white font-bold">{bt('Order Picked Up', 'ऑर्डर उठाया गया')}</p>
              <p className="text-xs text-slate-400">{bt('Your iPhone 14 Pro has been picked up.', 'आपका आईफोन 14 प्रो उठाया गया है।')}</p>
            </div>
             <div className="px-4 py-3 hover:bg-slate-800">
              <p className="text-sm text-white font-bold">{bt('Price Alert!', 'मूल्य चेतावनी!')}</p>
              <p className="text-xs text-slate-400">{bt('Price for MacBook Air M1 has increased.', 'मैकबुक एयर एम1 की कीमत बढ़ गई है।')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
