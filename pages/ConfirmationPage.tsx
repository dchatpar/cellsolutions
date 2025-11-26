
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuote } from '../context/QuoteContext';
import { CheckCircleIcon } from '../components/icons/Icons';

const ConfettiPiece: React.FC = () => {
    const randomX = Math.random() * 2 - 1;
    const randomY = Math.random() * 2 - 1;
    const randomDuration = 2 + Math.random() * 2;
    const colors = ['#6366f1', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899'];
    
    return (
        <motion.div
            className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
            style={{ 
                backgroundColor: colors[Math.floor(Math.random() * colors.length)]
            }}
            initial={{ opacity: 1, x: 0, y: 0, rotate: Math.random() * 360 }}
            animate={{
                opacity: [1, 1, 0],
                x: randomX * (window.innerWidth / 3),
                y: randomY * (window.innerHeight / 3),
                rotate: Math.random() * 720,
            }}
            transition={{ duration: randomDuration, ease: "easeOut" }}
        />
    )
}

const ConfettiExplosion: React.FC = () => {
    return <div className="absolute inset-0 pointer-events-none">{[...Array(150)].map((_, i) => <ConfettiPiece key={i} />)}</div>;
}


export const ConfirmationPage: React.FC = () => {
    const { quote, resetQuote } = useQuote();
    const navigate = useNavigate();

    useEffect(() => {
        if (!quote.pickupDetails) {
            navigate('/');
        }
        // Cleanup on unmount
        return () => {
            if (location.pathname !== '/confirmation') {
                resetQuote();
            }
        };
    }, [quote.pickupDetails, navigate, resetQuote]);

    if (!quote.pickupDetails) {
        return null; 
    }

    return (
        <div className="pt-32 pb-20 bg-slate-950 min-h-screen flex items-center justify-center relative overflow-hidden">
            <ConfettiExplosion />
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-center max-w-2xl mx-auto relative z-10"
            >
                <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type: 'spring', stiffness: 200, damping: 15, delay: 0.3}} className="inline-block p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                    <CheckCircleIcon className="h-20 w-20 text-emerald-500" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                    Pickup Scheduled!
                </h1>
                <p className="text-xl text-slate-400 mb-8">
                    Your request has been confirmed. Our agent will contact you shortly.
                </p>
                
                <div className="glass-card rounded-2xl p-8 text-left space-y-6 mb-10">
                    <div>
                        <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Device</span>
                        <p className="text-lg text-white font-bold">{quote.device?.name}</p>
                    </div>
                    <div>
                        <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Final Offer</span>
                        <p className="text-2xl text-emerald-400 font-bold">₹ {quote.estimatedPrice?.toLocaleString('en-IN')}</p>
                    </div>
                     <div>
                        <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Pickup Address</span>
                        <p className="text-lg text-white">{quote.pickupDetails.address}, {quote.pickupDetails.pincode}</p>
                    </div>
                     <div>
                        <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Pickup Date</span>
                        <p className="text-lg text-white">{new Date(quote.pickupDetails.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/" onClick={resetQuote} className="inline-block bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold py-4 px-12 rounded-xl text-lg shadow-lg shadow-indigo-500/20 transition-all">
                        Back to Home
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};
