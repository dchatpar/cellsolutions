
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuote } from '../context/QuoteContext';
import { deviceCategories, devices, conditionQuestions } from '../data/mockData';
import { CheckCircleIcon, SmartphoneIcon, LaptopIcon, TabletIcon, CalendarIcon, UserIcon, MapPinIcon } from '../components/icons/Icons';

export const QuotePage: React.FC = () => {
  const [step, setStep] = useState(1);
  const { quote, setQuote, resetQuote } = useQuote();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    resetQuote(); 
    const category = searchParams.get('category');
    const deviceName = searchParams.get('device');
    if (category && deviceCategories.some(c => c.name === category)) {
      setQuote(q => ({ ...q, category }));
      setStep(2);
    }
    if (deviceName) {
        for (const cat of Object.keys(devices)) {
            for (const brand of Object.keys(devices[cat])) {
                const foundDevice = devices[cat][brand].find(d => d.name.toLowerCase().includes(deviceName.toLowerCase()));
                if(foundDevice) {
                    setQuote(q => ({...q, category: cat, brand, device: foundDevice}));
                    setStep(4);
                    return;
                }
            }
        }
    }
  }, [searchParams]);

  const calculatePrice = () => {
    if (!quote.device || !quote.condition.screen || !quote.condition.body || !quote.condition.functional) return;
    const basePrice = quote.device.basePrice;
    const screenMultiplier = conditionQuestions.screen.find(c => c.label === quote.condition.screen)?.multiplier || 0;
    const bodyMultiplier = conditionQuestions.body.find(c => c.label === quote.condition.body)?.multiplier || 0;
    const functionalMultiplier = conditionQuestions.functional.find(c => c.label === quote.condition.functional)?.multiplier || 0;
    const finalPrice = Math.round(basePrice * screenMultiplier * bodyMultiplier * functionalMultiplier);
    setQuote(q => ({ ...q, estimatedPrice: finalPrice }));
    setStep(s => s + 1);
  };
  
  const handlePickupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const details = {
          name: formData.get('name') as string,
          phone: formData.get('phone') as string,
          address: formData.get('address') as string,
          pincode: formData.get('pincode') as string,
          date: formData.get('date') as string,
      };
      setQuote(q => ({...q, pickupDetails: details}));
      navigate('/confirmation');
  }

  const availableBrands = useMemo(() => quote.category ? Object.keys(devices[quote.category] || {}) : [], [quote.category]);
  const availableModels = useMemo(() => (quote.category && quote.brand) ? devices[quote.category][quote.brand] : [], [quote.category, quote.brand]);

  const titles = ["Select Category", "Select Brand", "Select Model", "Assess Condition", "Your Quote", "Schedule Pickup"];
  const progress = (step - 1) / (titles.length - 1) * 100;
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deviceCategories.map(cat => (
                <motion.button key={cat.name} onClick={() => { setQuote(q => ({...q, category: cat.name})); setStep(2); }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group glass-card p-8 rounded-2xl flex flex-col items-center justify-center">
                    <cat.icon className="h-16 w-16 text-slate-300 group-hover:text-white mb-4 transition-colors"/>
                    <span className="text-xl font-bold text-white">{cat.name}</span>
                </motion.button>
            ))}
        </div>;
      case 2:
        return <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {availableBrands.map(brand => (
                <motion.button key={brand} onClick={() => { setQuote(q => ({...q, brand})); setStep(3); }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-indigo-500 hover:bg-slate-800 text-lg font-bold text-white transition-all shadow-md">
                    {brand}
                </motion.button>
            ))}
        </div>;
      case 3:
        return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableModels.map(model => (
                <motion.button key={model.name} onClick={() => { setQuote(q => ({...q, device: model})); setStep(4); }} whileHover={{y: -5}} className="text-left px-6 py-5 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-slate-200 transition-colors border border-slate-700 hover:border-slate-600">
                    {model.name}
                </motion.button>
            ))}
        </div>;
      case 4:
        return <div className="space-y-8">
            {Object.entries(conditionQuestions).map(([key, options]) => (
                <div key={key}>
                    <h3 className="text-2xl font-bold text-white mb-4 capitalize">{key} Condition</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {options.map(opt => <motion.button key={opt.label} onClick={() => setQuote(q => ({...q, condition: {...q.condition, [key]: opt.label}}))} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={`py-4 text-sm md:text-base border rounded-xl font-semibold transition-all duration-200 ${quote.condition[key as keyof typeof quote.condition] === opt.label ? 'bg-indigo-500 border-indigo-400 text-white shadow-lg shadow-indigo-500/20' : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-indigo-500'}`}>{opt.label}</motion.button>)}
                    </div>
                </div>
            ))}
             <motion.button onClick={calculatePrice} disabled={!quote.condition.screen || !quote.condition.body || !quote.condition.functional} whileHover={{scale: 1.02}} className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold py-4 rounded-xl text-lg shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed">Calculate Price</motion.button>
        </div>
      case 5:
        return <div className="text-center">
            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type: 'spring', stiffness: 200, damping: 15}} className="inline-block p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <CheckCircleIcon className="h-16 w-16 text-emerald-500" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">Estimated Value</h3>
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-6 drop-shadow-lg">
                ₹ {quote.estimatedPrice?.toLocaleString('en-IN')}
            </div>
            <p className="text-slate-400 mb-8 bg-slate-800/50 inline-block px-4 py-2 rounded-lg border border-slate-700">For a {quote.device?.name}</p>
            <motion.button onClick={() => setStep(6)} whileHover={{scale:1.05}} className="w-full md:w-auto bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-xl shadow-indigo-500/30">
                Schedule Free Pickup
            </motion.button>
        </div>
      case 6:
        return <form className="space-y-6" onSubmit={handlePickupSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm text-slate-400 mb-2">Full Name</label><input required name="name" type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                <div><label className="block text-sm text-slate-400 mb-2">Phone Number</label><input required name="phone" type="tel" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
            </div>
            <div><label className="block text-sm text-slate-400 mb-2">Full Address</label><input required name="address" type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-sm text-slate-400 mb-2">Pincode</label><input required name="pincode" type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                <div><label className="block text-sm text-slate-400 mb-2">Pickup Date</label><input required name="date" type="date" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
            </div>
            <motion.button type="submit" whileHover={{scale:1.02}} className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-4 rounded-xl text-lg shadow-lg shadow-emerald-500/20">Confirm Pickup</motion.button>
        </form>
      default: return null;
    }
  };

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800 rounded-t-3xl">
               <motion.div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${progress}%` }} transition={{duration: 0.5, ease: 'easeInOut'}}></motion.div>
            </div>

            <div className="text-center mb-10">
                <AnimatePresence mode="wait">
                  <motion.h2 key={step} initial={{opacity: 0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration: 0.3}} className="text-3xl md:text-4xl font-black text-white mb-2">{titles[step-1]}</motion.h2>
                </AnimatePresence>
                {step > 1 && step < 5 && <p className="text-slate-400 text-sm">{quote.category} {quote.brand && `> ${quote.brand}`} {quote.device && `> ${quote.device.name}`}</p>}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                    {renderStep()}
                </motion.div>
            </AnimatePresence>
            
            {step > 1 && step < 6 && (
               <motion.button onClick={() => setStep(s => s - 1)} className="mt-8 text-slate-400 hover:text-white flex items-center mx-auto transition-colors font-medium">
                 ← Back
               </motion.button>
            )}
        </div>
      </div>
    </div>
  );
};
