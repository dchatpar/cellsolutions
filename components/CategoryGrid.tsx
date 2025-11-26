
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SmartphoneIcon, TabletIcon, LaptopIcon, WatchIcon, GamingIcon, CameraIcon, HeadphonesIcon, DroneIcon } from './icons/Icons';
import type { Category } from '../types';

const categories: Omit<Category, 'count' | 'startingPrice' | 'popularModels' | 'id'>[] = [
  { name: 'Smartphones', icon: SmartphoneIcon, gradient: 'from-indigo-500 to-blue-500' },
  { name: 'Tablets', icon: TabletIcon, gradient: 'from-violet-500 to-purple-500' },
  { name: 'Laptops', icon: LaptopIcon, gradient: 'from-sky-500 to-cyan-500' },
  { name: 'Smartwatches', icon: WatchIcon, gradient: 'from-rose-500 to-pink-500' },
  { name: 'Consoles', icon: GamingIcon, gradient: 'from-emerald-500 to-green-500' },
  { name: 'Cameras', icon: CameraIcon, gradient: 'from-amber-500 to-yellow-500' },
  { name: 'Headphones', icon: HeadphonesIcon, gradient: 'from-fuchsia-500 to-rose-500' },
  { name: 'Drones', icon: DroneIcon, gradient: 'from-teal-500 to-cyan-500' },
];

const CategoryCard: React.FC<{ category: Omit<Category, 'count' | 'startingPrice' | 'popularModels' | 'id'>; index: number }> = ({ category, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <Link to={`/quote?category=${category.name}`}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.08 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative bg-slate-900 rounded-3xl p-6 border border-slate-800 transition-all duration-300 hover:border-slate-700 cursor-pointer h-full"
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="relative z-10 flex flex-col items-center text-center h-full">
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-5 border-2 border-slate-950 shadow-lg`}>
                    <category.icon className="h-10 w-10 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{category.name}</h3>
                <p className="text-sm text-slate-500 mb-4">Phones, iPads & more</p>

                <div className="mt-auto pt-4">
                   <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 transition-all group-hover:bg-indigo-500/20 group-hover:text-indigo-300">
                     Get Quote →
                   </span>
                </div>
            </div>
            {/* Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

        </motion.div>
    </Link>
  );
};


export const CategoryGrid: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">What Are You Selling Today?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Select a category to get an instant, fair-market price for your device.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {categories.map((cat, index) => (
             <CategoryCard category={cat} index={index} key={cat.name} />
           ))}
        </div>
      </div>
    </section>
  );
};
