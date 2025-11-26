
import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { CheckCircleIcon, UserIcon, BanknotesIcon, TruckIcon } from './icons/Icons';

const AnimatedCounter: React.FC<{ valueString: string }> = ({ valueString }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericValue = parseFloat(valueString.replace(/[^0-9.]/g, ''));
  const suffix = valueString.replace(/[0-9.,]/g, '');

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.textContent = `0${suffix}`;
      animate(0, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = `${latest.toLocaleString('en-IN', {
                maximumFractionDigits: valueString.includes('.') ? 1 : 0,
                minimumFractionDigits: valueString.includes('.') ? 1 : 0
            })}${suffix}`;
          }
        }
      });
    }
  }, [isInView, numericValue, suffix, valueString]);

  return <span ref={ref}>{`0${suffix}`}</span>;
};


export const Stats: React.FC = () => {
  const stats = [
    { label: 'Downloads', value: '10 Lakh+', icon: UserIcon, color: 'text-indigo-400' },
    { label: 'Cash Paid', value: '₹500 Cr+', icon: BanknotesIcon, color: 'text-emerald-400' },
    { label: 'Devices', value: '12 Lakh+', icon: CheckCircleIcon, color: 'text-violet-400' },
    { label: 'Pincodes', value: '25,000+', icon: TruckIcon, color: 'text-amber-400' },
  ];

  return (
    <section className="py-12 bg-slate-900/50 border-y border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="grid grid-cols-2 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
        >
           {stats.map((stat, index) => (
             <motion.div 
               key={index}
               variants={{
                 hidden: { opacity: 0, y: 20 },
                 visible: { opacity: 1, y: 0 }
               }}
               className="text-center group p-4"
             >
                <div className="flex items-center justify-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-slate-700">
                        <stat.icon className={`h-8 w-8 transition-colors ${stat.color}`} />
                    </div>
                </div>
                <div className="text-3xl lg:text-4xl font-black text-white mb-1 tracking-tighter">
                    <AnimatedCounter valueString={stat.value} />
                </div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
};
