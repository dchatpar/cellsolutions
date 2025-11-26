import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const devices = [
  { name: 'iPhone 15 Pro', price: '₹92,000', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%231e293b"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="%2394a3b8" text-anchor="middle" dy=".3em"%3EiPhone 15 Pro%3C/text%3E%3C/svg%3E' },
  { name: 'MacBook Air M2', price: '₹72,000', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%231e293b"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%2394a3b8" text-anchor="middle" dy=".3em"%3EMacBook Air M2%3C/text%3E%3C/svg%3E' },
  { name: 'Galaxy S24 Ultra', price: '₹88,000', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%231e293b"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%2394a3b8" text-anchor="middle" dy=".3em"%3EGalaxy S24 Ultra%3C/text%3E%3C/svg%3E' },
  { name: 'OnePlus 12', price: '₹51,500', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%231e293b"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="%2394a3b8" text-anchor="middle" dy=".3em"%3EOnePlus 12%3C/text%3E%3C/svg%3E' },
  { name: 'iPad Air 5', price: '₹45,000', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%231e293b"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="%2394a3b8" text-anchor="middle" dy=".3em"%3EiPad Air 5%3C/text%3E%3C/svg%3E' },
  { name: 'Sony WH-1000XM5', price: '₹22,000', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%231e293b"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%2394a3b8" text-anchor="middle" dy=".3em"%3ESony WH-1000XM5%3C/text%3E%3C/svg%3E'},
  { name: 'PlayStation 5', price: '₹38,000', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%231e293b"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="24" fill="%2394a3b8" text-anchor="middle" dy=".3em"%3EPlayStation 5%3C/text%3E%3C/svg%3E'},
];


export const RecentlySold: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
       <div className="container mx-auto px-4 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-2 text-center">Trending Devices</motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg text-center">Real prices paid to customers in the last 24 hours.</motion.p>
       </div>
       
       <motion.div ref={carouselRef} className="cursor-grab">
        <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6 px-4"
        >
          {devices.map((device, idx) => (
             <motion.div 
                key={idx} 
                className="group flex-none w-72 snap-center bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 transition-colors hover:border-slate-600"
             >
                <div className="aspect-video bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
                   <img 
                     src={device.image} 
                     alt={device.name} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                   />
                </div>
                <h3 className="text-white font-bold text-lg mb-1 truncate">{device.name}</h3>
                <div className="flex justify-between items-center">
                   <div className="text-emerald-400 font-bold text-lg">{device.price}</div>
                   <Link to={`/quote?device=${encodeURIComponent(device.name)}`} className="text-xs bg-slate-700 border border-slate-600 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors font-bold">
                     Sell Yours
                   </Link>
                </div>
             </motion.div>
          ))}
        </motion.div>
       </motion.div>
    </section>
  );
};