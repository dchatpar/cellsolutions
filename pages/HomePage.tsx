
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { CategoryGrid } from '../components/CategoryGrid';
import { RecentlySold } from '../components/RecentlySold';
import { Features } from '../components/Features';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { AppPromo } from '../components/AppPromo';
import { FaqSection } from '../components/FaqSection';
import { Newsletter } from '../components/Newsletter';
import { ServiceableAreas } from '../components/ServiceableAreas';
import { SeoContent } from '../components/SeoContent';

const QuoteCtaSection: React.FC = () => (
  <section id="calculator" className="py-24 bg-slate-950 text-center">
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Sell?</motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">Get an instant, data-driven quote for your device in under 60 seconds.</motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Link to="/quote" className="inline-block bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg shadow-indigo-500/20 transition-all transform hover:scale-105 animate-pulse-glow">
          Start Your Quote
        </Link>
      </motion.div>
    </div>
  </section>
);

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <CategoryGrid />
      <RecentlySold />
      <Features />
      <QuoteCtaSection />
      <Testimonials />
      <AppPromo />
      <FaqSection />
      <Newsletter />
    </>
  );
};
