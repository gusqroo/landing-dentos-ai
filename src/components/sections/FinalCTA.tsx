import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Section } from '../layout/Section';

export const FinalCTA: React.FC = () => {
    return (
        <Section background="dark" className="relative overflow-hidden">
            {/* Background Placeholder for Modern Dental Office */}
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/bg-office.png"
                    alt="Dental Office"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 to-slate-900/95 z-10"></div>

            <Container className="relative z-20">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        El futuro de la odontología es{' '}
                        <span className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
                            inteligente
                        </span>
                        .<br />
                        ¿Te subes?
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-300 mb-12">
                        Únete a las clínicas que ya están transformando su gestión con IA
                    </p>

                    <div className="mb-8">
                        <Button variant="primary" className="text-xl px-12 py-6">
                            COMENZAR PRUEBA DE 30 DÍAS
                        </Button>
                    </div>

                    <p className="text-slate-400">
                        Sin tarjeta de crédito requerida • Cancela cuando quieras
                    </p>
                </div>
            </Container>
        </Section>
    );
};
