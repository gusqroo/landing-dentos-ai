import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass py-2 md:py-4">
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <img
                            src="/Logo/logo.png"
                            alt="DentOS AI Logo"
                            className="h-8 md:h-12 w-auto"
                            onError={(e) => {
                                // Fallback if logo not found
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
                            DentOS AI
                        </span>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center">
                        <Button variant="primary" size="md" className="md:hidden">
                            Probar Gratis
                        </Button>
                        <Button variant="primary" size="lg" className="hidden md:flex">
                            Comenzar Prueba Gratis
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
