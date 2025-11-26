
import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Category {
  id: string;
  name: string;
  count: string;
  startingPrice: string;
  icon: React.FC<{ className?: string }>;
  popularModels: string[];
  gradient: string;
}

export interface Device {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  trend: 'up' | 'down' | 'stable';
  trendValue: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
  platform: 'google' | 'trustpilot' | 'appstore';
}

export interface CalculatorState {
  step: number;
  category: string | null;
  brand: string | null;
  model: string | null;
  storage: string | null;
  condition: {
    screen: string;
    body: string;
    functional: string;
    accessories: string[];
  };
}

export interface Transaction {
  id: string;
  user: string;
  location: string;
  device: string;
  amount: string;
  time: string;
}

export interface DetailedDevice {
  id: string;
  name: string;
  brand: string;
  model: string;
  images: string[];
  basePrice: number;
  specs: Specification[];
  conditionPricing: {
    excellent: number;
    good: number;
    fair: number;
    poor: number;
  };
  reviews: Review[];
}

export interface Specification {
  category: string;
  items: { label: string; value: string }[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  images?: string[];
  helpfulCount: number;
}

export interface FilterState {
  brands: string[];
  priceRange: [number, number];
  storage: string[];
  condition: string[];
  color: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  walletBalance: number;
  joinedDate: string;
}

export interface Order {
  id: string;
  deviceId: string;
  deviceName: string;
  deviceImage: string;
  amount: number;
  status: 'pending' | 'scheduled' | 'picked_up' | 'completed' | 'cancelled';
  date: string;
  pickupDate?: string;
}

export interface Notification {
  id: string;
  type: 'order' | 'price' | 'system' | 'promo';
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export interface PaymentMethod {
  id: string;
  type: 'upi' | 'bank' | 'wallet';
  details: string; // e.g. "user@upi" or "**** 1234"
  icon?: string;
}

export interface ReferralStats {
  code: string;
  totalReferrals: number;
  successfulSales: number;
  earnings: number;
  pendingRewards: number;
}

export interface BulkDevice {
  id: string;
  name: string;
  imei: string;
  condition: string;
  estimatedPrice: number;
}

export interface TradeInOffer {
  id: string;
  buyDevice: string;
  sellDevice: string;
  bonusAmount: number;
  finalPrice: number;
}

export interface SalesStat {
  label: string;
  value: string;
  change: number; // percentage
  trend: 'up' | 'down';
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'manager' | 'agent' | 'accountant';
  status: 'active' | 'inactive';
  lastLogin: string;
}

export interface AdminOrder extends Order {
  customerName: string;
  customerPhone: string;
  city: string;
  agentId?: string;
}

export interface InventoryItem {
  id: string;
  deviceId: string;
  deviceName: string;
  imei: string;
  condition: string;
  purchasePrice: number;
  purchaseDate: string;
  status: 'in_stock' | 'refurbishing' | 'sold';
}

export interface DashboardStat {
  label: string;
  value: string | number;
  change?: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

// Gamification Types
export interface RewardProfile {
  points: number;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  nextTierPoints: number;
  lifetimeEarnings: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji or icon name
  unlocked: boolean;
  progress: number; // 0-100
  dateUnlocked?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  rewardPoints: number;
  expiresIn: string; // e.g., "12h 30m"
  completed: boolean;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  sales: number;
  trend: 'up' | 'down' | 'same';
}

export interface RewardItem {
  id: string;
  title: string;
  description: string;
  cost: number;
  image: string;
  type: 'cash' | 'voucher' | 'coupon';
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}