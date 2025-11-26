
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage } from './pages/HomePage';
import { CorporateBuyback } from './pages/CorporateBuyback';
import { Articles } from './pages/Articles';
import { PartnerWithUs } from './pages/PartnerWithUs';
import { TrackOrder } from './pages/TrackOrder';
import { Dashboard } from './pages/Dashboard';
import { HelpCenter } from './pages/HelpCenter';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Marketplace } from './pages/Marketplace';
import { DeviceDetail } from './pages/DeviceDetail';
import { Compare } from './pages/Compare';
import { Wishlist } from './pages/Wishlist';
import { BulkSell } from './pages/BulkSell';
import { Auth } from './pages/Auth';
import { Referral } from './pages/Referral';
import { BusinessSell } from './pages/BusinessSell';
import { TradeIn } from './pages/TradeIn';
import { WarrantyCheck } from './pages/WarrantyCheck';
import { MySales } from './pages/MySales';
import { Rewards } from './pages/Rewards';
import { Achievements } from './pages/Achievements';
import { Leaderboard } from './pages/Leaderboard';
import { RewardsMarketplace } from './pages/RewardsMarketplace';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminOrders } from './pages/admin/AdminOrders';
import { AdminInventory } from './pages/admin/AdminInventory';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AdminAnalytics } from './pages/admin/AdminAnalytics';
import { AdminLayout } from './layouts/AdminLayout';
import { PublicLayout } from './layouts/PublicLayout';
import { QuotePage } from './pages/QuotePage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { QuoteProvider } from './context/QuoteContext';
import { DeviceInsights } from './pages/DeviceInsights';

const AppRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="inventory" element={<AdminInventory />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="analytics" element={<AdminAnalytics />} />
        </Route>

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/device-insights" element={<DeviceInsights />} />

          <Route path="/auth" element={<Auth />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/buyback/device/:id" element={<DeviceDetail />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bulk-sell" element={<BulkSell />} />
          <Route path="/business-sell" element={<BusinessSell />} />
          <Route path="/trade-in" element={<TradeIn />} />
          <Route path="/warranty-check" element={<WarrantyCheck />} />
          <Route path="/my-sales" element={<MySales />} />
          <Route path="/corporate-buyback" element={<CorporateBuyback />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/referral" element={<Referral />} />
          
          {/* Gamification Routes */}
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/rewards-marketplace" element={<RewardsMarketplace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    // FIX: Moved QuoteProvider to be the top-level wrapper around Router. This ensures context is available everywhere and fixes the 'children' property error by placing the provider correctly in the component tree.
    <QuoteProvider>
      <Router>
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 font-sans">
          <AppRoutes />
        </div>
      </Router>
    </QuoteProvider>
  );
};

export default App;