import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Problema', href: '#problema' },
        { name: 'Características', href: '#caracteristicas' },
        { name: 'Precios', href: '#precios' },
    ];

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300">
            <div className="glass shadow-xl rounded-[2.5rem] py-3 md:py-4 px-6 md:px-10 border border-white/40">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#inicio" className="flex items-center gap-2 md:gap-3 group">
                        <img
                            src="/Logo/logo.png"
                            alt="DentOS AI Logo"
                            className="h-8 md:h-10 w-auto transition-transform group-hover:scale-110"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent tracking-tight">
                            DentOS AI
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-slate-600 hover:text-teal-600 transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Button variant="primary" size="md" className="hidden sm:flex shadow-lg shadow-teal-500/20">
                            Prueba Gratis
                        </Button>

                        <button
                            className="lg:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden pt-6 pb-4 border-t border-slate-200/50 mt-4 flex flex-col gap-4 animate-fade-in">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-bold text-slate-600 hover:text-teal-600 transition-colors px-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="primary" size="lg" className="sm:hidden w-full mt-2">
                            Prueba Gratis
                        </Button>
                    </nav>
                )}
            </div>
        </header>
    );
};
