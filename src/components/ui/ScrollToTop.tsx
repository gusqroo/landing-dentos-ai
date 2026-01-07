import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-[60] p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
                }`}
            aria-label="Volver arriba"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-violet-500/10 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <ArrowUp className="w-6 h-6 text-slate-800 transition-transform group-hover:-translate-y-1" />
        </button>
    );
};
