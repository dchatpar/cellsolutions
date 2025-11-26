
import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CheckCircleIcon, CloudUploadIcon } from '../components/icons/Icons';

export const CorporateBuyback: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-2xl mb-6 border border-indigo-500/20">
            <BriefcaseIcon className="h-10 w-10 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Corporate Device Buyback
          </h1>
          <p className="text-xl text-slate-400">
            Maximize value from your company's used technology. Secure, compliant, and hassle-free liquidation for businesses of all sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: 'Maximum Value Recovery', desc: 'Get the best market rates for bulk devices with our AI-driven pricing engine.' },
            { title: 'Certified Data Destruction', desc: 'ISO 27001 certified data wiping with audit trails and destruction certificates.' },
            { title: 'Seamless Logistics', desc: 'Free doorstep pickup from multiple office locations across India.' }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
            >
              <CheckCircleIcon className="h-8 w-8 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Request a Quote</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Company Name</label>
                <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Acme Corp" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Contact Person</label>
                <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Official Email</label>
                <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-2">Estimated Quantity</label>
              <select className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none">
                <option>10 - 50 Devices</option>
                <option>51 - 200 Devices</option>
                <option>201 - 500 Devices</option>
                <option>500+ Devices</option>
              </select>
            </div>

            <div>
               <label className="block text-sm text-slate-400 mb-2">Upload Inventory List (Optional)</label>
               <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <CloudUploadIcon className="h-8 w-8 text-slate-500 mx-auto mb-2" />
                  <p className="text-sm text-slate-400">Click to upload CSV/Excel</p>
               </div>
            </div>

            <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold py-4 rounded-xl text-lg shadow-lg shadow-indigo-500/30"
            >
              Submit Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
