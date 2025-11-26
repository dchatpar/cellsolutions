
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from './icons/Icons';

const faqs = [
  { q: "Where can I sell my old electronic items for cash?", a: "You can sell your old electronics like phones, laptops, tablets, and more on Cell Solutions. We offer free doorstep pickup and instant UPI payment across 50+ cities in India." },
  { q: "Is Cell Solutions a trusted platform?", a: "Yes, we are India's leading buyback platform with over 10 Lakh happy customers, ₹500 Crore+ paid out, and an ISO certification for data security." },
  { q: "Can I sell my device even if it's broken?", a: "Absolutely! We buy devices in any condition - broken screen, body damage, or not working. You'll get a fair quote based on the specific condition." },
  { q: "How fast is the payment?", a: "Payment is instant. Our agent will transfer the money via UPI (GPay, PhonePe, Paytm) or IMPS immediately after inspecting and collecting your device at your doorstep." },
  { q: "Is my data safe?", a: "100% safe. We perform a military-grade data wipe on every device we purchase. We also recommend you factory reset your device before handing it over." },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Frequently Asked Questions</h2>
           <p className="text-slate-400 text-lg">Everything you need to know about selling on Cell Solutions.</p>
        </motion.div>

        <div className="space-y-4">
           {faqs.map((faq, index) => (
             <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
             >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
                >
                   <span className="text-lg font-bold text-white">{faq.q}</span>
                   <motion.div
                     animate={{ rotate: openIndex === index ? 180 : 0 }}
                     transition={{ duration: 0.3 }}
                   >
                    <ChevronDownIcon className="h-5 w-5 text-slate-400" />
                   </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
