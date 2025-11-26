import React, { useState } from 'react';
import { SmartphoneIcon, LaptopIcon, TabletIcon, CheckCircleIcon, CalculatorIcon } from './icons/Icons';
import type { CalculatorState } from '../types';

export const PriceCalculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    step: 1,
    category: null,
    brand: null,
    model: null,
    storage: null,
    condition: { screen: '', body: '', functional: '', accessories: [] }
  });

  const nextStep = () => setState(prev => ({ ...prev, step: prev.step + 1 }));
  const updateState = (key: keyof CalculatorState, value: any) => {
      setState(prev => ({ ...prev, [key]: value }));
      nextStep();
  };

  const renderStep1 = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
        { id: 'mobile', name: 'Mobile', icon: SmartphoneIcon },
        { id: 'laptop', name: 'Laptop', icon: LaptopIcon },
        { id: 'tablet', name: 'Tablet', icon: TabletIcon },
      ].map((cat) => (
        <button 
          key={cat.id}
          onClick={() => updateState('category', cat.id)}
          className="group flex flex-col items-center justify-center p-8 bg-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500 hover:bg-slate-800/80 transition-all shadow-lg hover:shadow-cyan-500/20"
        >
          <cat.icon className="h-12 w-12 text-slate-400 group-hover:text-cyan-400 mb-4 transition-colors" />
          <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{cat.name}</span>
        </button>
      ))}
    </div>
  );

  const renderStep2 = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Vivo', 'Oppo', 'Realme', 'Nothing'].map((brand) => (
        <button 
          key={brand}
          onClick={() => updateState('brand', brand)}
          className="p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-cyan-500 hover:bg-slate-800/80 text-lg font-bold text-white transition-all shadow-md hover:shadow-cyan-500/10"
        >
          {brand}
        </button>
      ))}
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
       <input type="text" placeholder="Search model (e.g. iPhone 13, OnePlus 11)" className="w-full p-4 bg-slate-800 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-cyan-500 outline-none shadow-inner" />
       <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
         {['iPhone 15 Pro Max', 'Samsung S23 Ultra', 'OnePlus 11 5G', 'Vivo X90 Pro'].map(model => (
            <button key={model} onClick={() => updateState('model', model)} className="text-left px-5 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-200 transition-colors border border-transparent hover:border-slate-600">
              {model}
            </button>
         ))}
       </div>
    </div>
  );

  const renderStep4 = () => (
      <div className="grid grid-cols-3 gap-4">
        {['128 GB', '256 GB', '512 GB', '1 TB'].map(storage => (
           <button key={storage} onClick={() => updateState('storage', storage)} className="py-4 bg-slate-800 border border-slate-700 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500 text-white font-semibold transition-all">
             {storage}
           </button>
        ))}
      </div>
  );

  const renderQuote = () => (
    <div className="text-center animate-in fade-in zoom-in duration-500">
       <div className="inline-block p-4 rounded-full bg-green-500/20 mb-6 border border-green-500/30">
         <CheckCircleIcon className="h-16 w-16 text-green-500" />
       </div>
       <h3 className="text-2xl font-bold text-white mb-2">Estimated Value</h3>
       <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 mb-6 drop-shadow-lg">
         ₹ 58,500
       </div>
       <p className="text-slate-400 mb-8 bg-slate-800/50 inline-block px-4 py-2 rounded-lg border border-slate-700">Price locked for 7 days. Free pickup across India.</p>
       <button className="w-full md:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-xl shadow-cyan-500/30 transition-transform hover:scale-105">
         Schedule Free Pickup
       </button>
    </div>
  );

  return (
    <section id="calculator" className="py-24 relative bg-slate-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
         <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden shadow-2xl">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800">
               <div 
                 className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                 style={{ width: `${(state.step / 5) * 100}%` }}
               ></div>
            </div>

            <div className="text-center mb-12">
               <div className="inline-flex items-center space-x-2 bg-slate-800 rounded-full px-3 py-1 mb-4 border border-slate-700">
                  <CalculatorIcon className="h-4 w-4 text-cyan-400" />
                  <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs">Instant AI Quote</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-white">
                 {state.step === 1 && "Select Device Category"}
                 {state.step === 2 && "Choose Your Brand"}
                 {state.step === 3 && "Which Model Is It?"}
                 {state.step === 4 && "Device Capacity"}
                 {state.step === 5 && "Your Best Price"}
               </h2>
            </div>

            <div className="min-h-[350px] flex flex-col justify-center">
               {state.step === 1 && renderStep1()}
               {state.step === 2 && renderStep2()}
               {state.step === 3 && renderStep3()}
               {state.step === 4 && renderStep4()}
               {state.step === 5 && renderQuote()}
            </div>
            
            {state.step > 1 && state.step < 5 && (
               <button onClick={() => setState(prev => ({ ...prev, step: prev.step - 1 }))} className="mt-8 text-slate-500 hover:text-white flex items-center mx-auto transition-colors font-medium">
                 ← Back to previous step
               </button>
            )}
         </div>
      </div>
    </section>
  );
};