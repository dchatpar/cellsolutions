import React from 'react';

export const ServiceableAreas: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">Serviceable Areas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-4">Top Metros</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Phone in Mumbai</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Phone in Bangalore</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Phone in Delhi NCR</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Phone in Hyderabad</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Phone in Chennai</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Phone in Pune</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-4">North India</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Laptop in Gurgaon</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Laptop in Noida</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Laptop in Chandigarh</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Laptop in Jaipur</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell Laptop in Lucknow</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-4">West & Central</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyan-400 transition">Old Mobile Buyers Ahmedabad</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Old Mobile Buyers Surat</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Old Mobile Buyers Indore</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Old Mobile Buyers Bhopal</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Old Mobile Buyers Nagpur</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-4">South India</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyan-400 transition">Sell iPad in Kochi</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell iPad in Coimbatore</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell iPad in Mysore</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell iPad in Vizag</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Sell iPad in Trivandrum</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};