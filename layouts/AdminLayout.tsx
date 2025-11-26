
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DashboardIcon, InventoryIcon, UserIcon, ChartBarIcon, SettingsIcon, LogOutIcon, CellSolutionsLogo } from '../components/icons/Icons';

const menuItems = [
  { path: '/admin/dashboard', icon: DashboardIcon, label: 'Dashboard' },
  { path: '/admin/orders', icon: InventoryIcon, label: 'Orders' },
  { path: '/admin/inventory', icon: InventoryIcon, label: 'Inventory' },
  { path: '/admin/users', icon: UserIcon, label: 'Users' },
  { path: '/admin/analytics', icon: ChartBarIcon, label: 'Analytics' },
];

export const AdminLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <Link to="/admin/dashboard">
            <CellSolutionsLogo className="h-8 w-auto" />
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                location.pathname.startsWith(item.path)
                  ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Link to="/" className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
            <LogOutIcon className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-10">
           <h2 className="text-xl font-bold text-white">Admin Portal</h2>
           <div className="flex items-center space-x-4">
              <div className="text-sm text-slate-400">
                 Logged in as <span className="text-white font-bold">Super Admin</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold">
                 AD
              </div>
           </div>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
           <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Outlet />
           </motion.div>
        </main>
      </div>
    </div>
  );
};
