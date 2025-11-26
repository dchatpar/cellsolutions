
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { CellSolutionsLogo, MenuIcon, XIcon, SearchIcon, UserIcon, ChevronDownIcon } from './icons/Icons';

const primaryLinks = [
  { label: 'Sell Now', to: '/quote' },
  { label: 'Device Insights', to: '/device-insights' },
];

const moreLinks = [
  { label: 'Corporate', to: '/corporate-buyback' },
  { label: 'Rewards', to: '/rewards' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Help Center', to: '/help-center' },
];

const allLinksForMobile = [...primaryLinks, ...moreLinks];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/quote?device=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full glass"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left side: Logo and Navigation Links */}
          <div className="flex items-center gap-10">
            <Link to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
              <CellSolutionsLogo className="h-12 w-auto" />
            </Link>

            <div className="hidden xl:flex items-center space-x-8">
              {primaryLinks.map((link) => (
                <Link key={link.label} to={link.to} className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group">
                  {link.label}
                  <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              ))}

              <div 
                className="relative"
                onMouseEnter={() => setShowMoreMenu(true)}
                onMouseLeave={() => setShowMoreMenu(false)}
              >
                <button
                  className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group flex items-center gap-1"
                >
                  More
                  <ChevronDownIcon className={`h-4 w-4 transition-transform ${showMoreMenu ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </button>
                <AnimatePresence>
                  {showMoreMenu && (
                    <motion.div
                      variants={menuVariants} initial="hidden" animate="visible" exit="exit"
                      className="absolute left-0 mt-4 w-56 bg-slate-900/80 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-800 py-2 z-50"
                    >
                      {moreLinks.map(link => (
                         <Link key={link.label} to={link.to} onClick={() => setShowMoreMenu(false)} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">{link.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right side: Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
             <div className="hidden lg:flex items-center space-x-5">
                <form onSubmit={handleSearch} className="relative group">
                  <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search device..." className="bg-slate-800/50 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-40 xl:w-48 transition-all duration-300 group-hover:w-64 text-white placeholder-slate-500" />
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                </form>

                <div className="relative">
                 <motion.button whileTap={{ scale: 0.9 }} onClick={() => setShowUserMenu(!showUserMenu)} className="text-slate-400 hover:text-white transition-colors flex items-center">
                   <UserIcon className="h-5 w-5" />
                 </motion.button>
                 <AnimatePresence>
                 {showUserMenu && (
                    <motion.div 
                      variants={menuVariants} initial="hidden" animate="visible" exit="exit"
                      className="absolute right-0 mt-4 w-56 bg-slate-900/80 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-800 py-2 z-50"
                    >
                       <Link to="/dashboard" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">Dashboard</Link>
                       <Link to="/my-sales" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">My Sales</Link>
                       <Link to="/rewards" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm text-amber-400 font-bold hover:bg-slate-800 transition-colors">Rewards</Link>
                       <div className="border-t border-slate-800 my-1"></div>
                       <Link to="/auth" onClick={() => setShowUserMenu(false)} className="block px-4 py-2 text-sm text-red-400 hover:bg-slate-800 hover:text-red-300 transition-colors">Logout</Link>
                    </motion.div>
                 )}
                 </AnimatePresence>
               </div>

               <Link to="/quote" className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white text-sm font-bold py-2.5 px-6 rounded-full shadow-lg shadow-indigo-500/20 transition-all transform hover:scale-105">
                 Get Quote
               </Link>
             </div>

             <div className="flex items-center xl:hidden">
               <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
                 {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
               </motion.button>
             </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden absolute top-20 left-0 w-full bg-slate-900/90 backdrop-blur-lg border-b border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 p-4">
              {allLinksForMobile.map((link) => (
                <Link key={link.label} to={link.to} className="text-base font-medium text-slate-300 hover:text-white px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors" onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-slate-800 my-2"></div>
              <Link to="/auth" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-white px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">My Account</Link>
              <Link to="/quote" onClick={() => setIsOpen(false)} className="w-full text-center bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold py-3 rounded-lg mt-2">
                Get Instant Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
