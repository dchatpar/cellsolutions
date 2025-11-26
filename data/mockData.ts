
import { SmartphoneIcon, LaptopIcon, TabletIcon } from '../components/icons/Icons';

export const deviceCategories = [
  { name: 'Smartphones', icon: SmartphoneIcon },
  { name: 'Laptops', icon: LaptopIcon },
  { name: 'Tablets', icon: TabletIcon },
];

export const devices: Record<string, Record<string, {name: string, basePrice: number}[]>> = {
  Smartphones: {
    Apple: [
      { name: 'iPhone 15 Pro Max', basePrice: 95000 },
      { name: 'iPhone 15 Pro', basePrice: 85000 },
      { name: 'iPhone 14 Pro Max', basePrice: 75000 },
      { name: 'iPhone 14', basePrice: 55000 },
    ],
    Samsung: [
      { name: 'Galaxy S24 Ultra', basePrice: 90000 },
      { name: 'Galaxy S23 Ultra', basePrice: 72000 },
      { name: 'Galaxy Z Fold 5', basePrice: 95000 },
    ],
    OnePlus: [
      { name: 'OnePlus 12', basePrice: 50000 },
      { name: 'OnePlus 11', basePrice: 40000 },
    ],
  },
  Laptops: {
    Apple: [
      { name: 'MacBook Air M2', basePrice: 70000 },
      { name: 'MacBook Pro M3', basePrice: 120000 },
    ],
    Dell: [
      { name: 'XPS 15', basePrice: 80000 },
      { name: 'Inspiron 15', basePrice: 45000 },
    ],
  },
  Tablets: {
    Apple: [
        { name: 'iPad Pro 12.9"', basePrice: 65000 },
        { name: 'iPad Air 5', basePrice: 45000 },
    ],
    Samsung: [
        { name: 'Galaxy Tab S9 Ultra', basePrice: 75000 },
    ]
  }
};

export const conditionQuestions = {
  screen: [
    { label: 'Flawless', multiplier: 1.0 },
    { label: 'Minor Scratches', multiplier: 0.9 },
    { label: 'Deep Scratches/Cracks', multiplier: 0.6 },
  ],
  body: [
    { label: 'Like New', multiplier: 1.0 },
    { label: 'Minor Dents/Scuffs', multiplier: 0.95 },
    { label: 'Major Dents/Bends', multiplier: 0.7 },
  ],
  functional: [
    { label: 'Fully Functional', multiplier: 1.0 },
    { label: 'Minor Issues (e.g., battery)', multiplier: 0.8 },
    { label: 'Major Issues (e.g., not working)', multiplier: 0.3 },
  ],
};
