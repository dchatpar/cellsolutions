
import React from 'react';
import { SmartphoneIcon, LaptopIcon, TabletIcon } from './icons/Icons';
import { bt } from '../utils/bilingual';

export const DeviceCalculators: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">{bt("Check Your Device's Value Instantly", "अपने डिवाइस का मूल्य तुरंत जांचें")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <SmartphoneIcon className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">{bt('Phone Calculator', 'फोन कैलकुलेटर')}</h3>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <LaptopIcon className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">{bt('Laptop Calculator', 'लैपटॉप कैलकुलेटर')}</h3>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl text-center">
            <TabletIcon className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">{bt('Tablet Calculator', 'टैबलेट कैलकुलेटर')}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
