
import React from 'react';
import { bt } from '../utils/bilingual';

export const SeoContent: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-sm">
        <h3 className="text-lg font-bold text-white mb-4">{bt('Unlock the Value of Your Old Electronics', 'अपने पुराने इलेक्ट्रॉनिक्स का मूल्य अनलॉक करें')}</h3>
        <p className="mb-4">
          {bt('Cell Solutions is the top destination in India for selling your used gadgets. We provide a seamless experience from getting an instant quote to receiving payment in seconds.', 'सेल सॉल्यूशंस आपके पुराने गैजेट्स को बेचने के लिए भारत में शीर्ष स्थान है। हम तत्काल उद्धरण प्राप्त करने से लेकर सेकंडों में भुगतान प्राप्त करने तक एक सहज अनुभव प्रदान करते हैं।')}
        </p>
        <h4 className="text-md font-bold text-white mb-2">{bt('Why Choose Us?', 'हमें क्यों चुनें?')}</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>{bt('Best Prices Guaranteed', 'सर्वोत्तम मूल्य की गारंटी')}</li>
          <li>{bt('Free & Insured Doorstep Pickup', 'मुफ्त और बीमित डोरस्टेप पिकअप')}</li>
          <li>{bt('Instant UPI/Bank Payment', 'तत्काल यूपीआई/बैंक भुगतान')}</li>
        </ul>
        <p className="text-xs text-slate-600">
          {bt('Please note: Previous domain redirects here.', 'कृपया ध्यान दें: पिछला डोमेन यहां रीडायरेक्ट करता है।')}
        </p>
      </div>
    </section>
  );
};
