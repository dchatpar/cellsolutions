
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Condition {
  screen: string | null;
  body: string | null;
  functional: string | null;
}

interface PickupDetails {
  name: string;
  address: string;
  pincode: string;
  date: string;
  phone: string;
}

interface QuoteState {
  category: string | null;
  brand: string | null;
  device: { name: string; basePrice: number } | null;
  condition: Condition;
  estimatedPrice: number | null;
  pickupDetails: PickupDetails | null;
}

interface QuoteContextType {
  quote: QuoteState;
  setQuote: React.Dispatch<React.SetStateAction<QuoteState>>;
  resetQuote: () => void;
}

const initialState: QuoteState = {
  category: null,
  brand: null,
  device: null,
  condition: { screen: null, body: null, functional: null },
  estimatedPrice: null,
  pickupDetails: null,
};

export const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [quote, setQuote] = useState<QuoteState>(initialState);

  const resetQuote = () => setQuote(initialState);

  return (
    <QuoteContext.Provider value={{ quote, setQuote, resetQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = (): QuoteContextType => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};
