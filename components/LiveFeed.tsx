import React from 'react';

const activities = [
  "Rahul from Mumbai sold iPhone 14 Pro for ₹52,000",
  "Priya from Bangalore sold MacBook Air for ₹78,000",
  "Amit from Delhi sold Galaxy S23 Ultra for ₹48,000",
  "Sneha from Pune sold iPad Air for ₹35,000",
  "Vikram from Hyderabad sold OnePlus 11 for ₹32,000",
  "Ananya from Chennai sold AirPods Pro for ₹18,000",
  "Rohan from Gurgaon sold PS5 for ₹35,000",
  "Neha from Kolkata sold iPhone 13 for ₹32,000"
];

export const LiveFeed: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-t border-slate-800 py-2 z-40 hidden md:block">
       <div className="container mx-auto flex items-center overflow-hidden">
          <div className="flex items-center space-x-2 mr-8">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </span>
             <span className="text-xs font-bold text-white uppercase tracking-wider">Live Activity</span>
          </div>
          
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
             {activities.concat(activities).map((act, i) => (
               <span key={i} className="text-sm text-slate-300 font-medium">
                 {act} <span className="text-slate-600 mx-2">•</span> <span className="text-xs text-slate-500">Just now</span>
               </span>
             ))}
          </div>
       </div>
    </div>
  );
};