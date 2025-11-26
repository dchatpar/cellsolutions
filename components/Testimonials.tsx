import React from 'react';
import { StarIcon } from './icons/Icons';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: '1', name: 'Rajesh Kumar', location: 'Mumbai', text: 'Sold my iPhone 14 Pro. The price was ₹5,000 higher than other sites! Incredibly fast process, highly recommend.', rating: 5, image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=0D8ABC&color=fff', platform: 'trustpilot' },
  { id: '2', name: 'Priya Sharma', location: 'Bangalore', text: 'Incredibly fast. The agent arrived in Koramangala on time and money was UPI transferred instantly. Best app for selling phones!', rating: 5, image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=6D28D9&color=fff', platform: 'google' },
  { id: '3', name: 'Amit Patel', location: 'Ahmedabad', text: 'The entire process was so transparent and easy. I was hesitant at first but Cell Solutions is genuinely the best.', rating: 5, image: 'https://ui-avatars.com/api/?name=Amit+Patel&background=059669&color=fff', platform: 'appstore' },
  { id: '4', name: 'Sneha Reddy', location: 'Hyderabad', text: 'Sold my old iPad Air. Got the payment before the agent even left my house. 10/10 service, will use again for sure.', rating: 5, image: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=DB2777&color=fff', platform: 'google' },
  { id: '5', name: 'Vikram Singh', location: 'Delhi', text: 'Used their corporate buyback for our office laptops. Smooth process, fair pricing, and certified data wipe. Very professional.', rating: 5, image: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=F59E0B&color=fff', platform: 'trustpilot' },
  { id: '6', name: 'Ananya Iyer', location: 'Chennai', text: 'The app is brilliant. It diagnosed my phone and gave me a quote in seconds. Pickup was scheduled for the next day. Flawless.', rating: 5, image: 'https://ui-avatars.com/api/?name=Ananya+Iyer&background=8B5CF6&color=fff', platform: 'appstore' },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="flex-shrink-0 w-80 glass-card p-8 rounded-2xl mx-4">
     <div className="flex items-center space-x-1 text-amber-400 mb-6">
        {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < testimonial.rating} className="h-5 w-5" />)}
     </div>
     <p className="text-slate-300 mb-6 text-sm md:text-base h-24">"{testimonial.text}"</p>
     <div className="flex items-center">
        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-slate-700" />
        <div>
           <div className="font-bold text-white">{testimonial.name}</div>
           <div className="text-xs text-slate-400">{testimonial.location}</div>
        </div>
     </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="py-24 bg-slate-900/70 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
         <h2 className="text-3xl md:text-5xl font-black text-white">Loved by 10 Lakh+ Indians</h2>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedTestimonials.map((t, index) => <TestimonialCard key={`${t.id}-${index}`} testimonial={t} />)}
        </div>
      </div>
    </section>
  );
};