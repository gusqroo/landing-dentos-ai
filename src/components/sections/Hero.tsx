import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Section } from '../layout/Section';
import { HeroTestimonials } from './HeroTestimonials';

export const Hero: React.FC = () => {
    return (
        <Section id="inicio" className="pt-32 md:pt-40 relative overflow-hidden" background="gradient-teal">
            {/* Animated Background Elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
                    {/* Left Column: Content */}
                    <div className="text-left relative z-10">
                        {/* Headline */}
                        <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                            Tu clínica en{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                Autopiloto Inteligente
                            </span>
                            .<br />
                            El resto es solo software.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl text-slate-700 mb-10 leading-relaxed">
                            La primera plataforma en México que fusiona <strong className="text-teal-700">Recepcionista IA</strong>,
                            {' '}<strong className="text-violet-700">Facturación CFDI 4.0</strong> y{' '}
                            <strong className="text-teal-700">Cumplimiento NOM-004</strong> en un ecosistema diseñado para 2026.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button variant="primary" icon={<span>▶</span>}>
                                Ver a Sofía en acción
                            </Button>
                            <Button variant="ghost">
                                Prueba Gratis 30 Días
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Hero Image */}
                    <div className="relative z-10 w-full animate-float">
                        {/* Mexican Pride Badge - Floating Above */}
                        <div className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2.5 md:gap-3 px-4 md:px-5 py-2.5 md:py-2.5 rounded-xl bg-gradient-to-r from-green-500/10 via-white/80 to-red-500/10 backdrop-blur-sm border border-white/40 shadow-lg max-w-[92vw] md:max-w-none">
                            <div className="relative w-9 h-9 md:w-10 md:h-10 min-w-[2.25rem] min-h-[2.25rem] md:min-w-[2.5rem] md:min-h-[2.5rem] max-w-[2.25rem] max-h-[2.25rem] md:max-w-[2.5rem] md:max-h-[2.5rem] aspect-square rounded-full overflow-hidden border border-slate-300 shadow-sm flex items-center justify-center bg-white flex-shrink-0">
                                <img
                                    src="/Logo/mx.webp"
                                    alt="Bandera de México"
                                    className="w-full h-full object-cover rounded-full scale-105"
                                />
                            </div>
                            <div className="flex flex-col md:block">
                                <span className="text-[10.5px] md:text-xs font-black uppercase tracking-wide text-slate-700 leading-tight whitespace-nowrap">
                                    Software dental 100% mexicano<span className="md:hidden">.</span>
                                </span>
                                <span className="hidden md:inline text-xs font-black text-slate-700">. </span>
                                <span className="text-[9.5px] md:text-xs font-semibold md:font-black md:uppercase tracking-wide text-slate-500 md:text-slate-700 leading-tight whitespace-nowrap">
                                    La innovación que México merece.
                                </span>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-full transform scale-75"></div>
                        <img
                            src="/images/hero.png"
                            alt="Doctora utilizando DentalOS AI"
                            className="relative w-full rounded-3xl shadow-2xl shadow-violet-500/20 border-border transform hover:scale-[1.02] transition-transform duration-500"
                        />
                        <HeroTestimonials />
                    </div>
                </div>
            </Container>
        </Section>
    );
};
