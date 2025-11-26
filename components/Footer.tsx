
import React from 'react';
import { Link } from 'react-router-dom';
import { CellSolutionsLogo, TwitterIcon, FacebookIcon, WhatsAppIcon } from './icons/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
           <div className="col-span-2 md:col-span-2">
              <Link to="/">
                <CellSolutionsLogo className="h-10 w-auto mb-6" />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                India's most trusted platform for selling used electronics, offering instant payments and free doorstep pickup.
              </p>
              <div className="flex space-x-4">
                 <a href="#" className="text-slate-500 hover:text-white transition-colors"><TwitterIcon className="h-5 w-5" /></a>
                 <a href="#" className="text-slate-500 hover:text-white transition-colors"><FacebookIcon className="h-5 w-5" /></a>
                 <a href="#" className="text-slate-500 hover:text-white transition-colors"><WhatsAppIcon className="h-5 w-5" /></a>
              </div>
           </div>
           
           <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Sell Devices</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><Link to="/quote?category=Smartphones" className="hover:text-indigo-400 transition">Sell Mobile</Link></li>
                <li><Link to="/quote?category=Laptops" className="hover:text-indigo-400 transition">Sell Laptop</Link></li>
                <li><Link to="/quote?category=Tablets" className="hover:text-indigo-400 transition">Sell Tablet</Link></li>
                <li><Link to="/quote" className="hover:text-indigo-400 transition">Sell Smartwatch</Link></li>
                <li><Link to="/quote" className="hover:text-indigo-400 transition">Sell Console</Link></li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><Link to="/about-us" className="hover:text-indigo-400 transition">About Us</Link></li>
                <li><Link to="/corporate-buyback" className="hover:text-indigo-400 transition">Corporate</Link></li>
                <li><Link to="/partner-with-us" className="hover:text-indigo-400 transition">Partner With Us</Link></li>
                <li><Link to="/articles" className="hover:text-indigo-400 transition">Blog</Link></li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Support</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><Link to="/help-center" className="hover:text-indigo-400 transition">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact Us</Link></li>
                <li><Link to="/track-order" className="hover:text-indigo-400 transition">Track Order</Link></li>
              </ul>
           </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
           <p className="text-slate-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Cell Solutions India. All Rights Reserved.</p>
           <div className="flex items-center space-x-4">
              <Link to="#" className="text-slate-500 hover:text-white text-sm transition">Privacy Policy</Link>
              <div className="h-4 w-px bg-slate-700"></div>
              <Link to="#" className="text-slate-500 hover:text-white text-sm transition">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};
