import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Section } from '../layout/Section';
import { HeroTestimonials } from './HeroTestimonials';

export const Hero: React.FC = () => {
    return (
        <Section className="pt-24 md:pt-32 relative overflow-hidden" background="gradient-teal">
            {/* Animated Background Elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    {/* Left Column: Content */}
                    <div className="text-left relative z-10">
                        {/* Headline */}
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
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
                        <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-full transform scale-75"></div>
                        <img
                            src="/images/hero.png"
                            alt="Doctora utilizando DentalOS AI"
                            className="relative w-full rounded-3xl shadow-2xl shadow-violet-500/20 border-border transform hover:scale-[1.02] transition-transform duration-500"
                        />
                        <HeroTestimonials />
                    </div>
                </div>

                {/* Video Demo Container - Moved Below */}
                <div className="relative z-10 glass-strong rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
                    <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                        <div className="text-center text-white p-12">
                            <div className="w-24 h-24 mx-auto mb-6 bg-teal-500/20 rounded-full flex items-center justify-center">
                                <span className="text-5xl">▶</span>
                            </div>
                            <p className="text-2xl font-semibold mb-4">VIDEO: Demo Generada con Veo/Sora</p>
                            <p className="text-lg text-slate-300">IA Agendando - Sofía atendiendo llamada y actualizando dashboard</p>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Logos */}
                <div className="mt-20">
                    <p className="text-center text-slate-500 text-sm uppercase tracking-wider mb-8">
                        Impulsado por tecnología de vanguardia
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale">
                        <div className="glass px-8 py-4 rounded-xl">
                            <span className="text-xl font-bold text-slate-600">AWS</span>
                        </div>
                        <div className="glass px-8 py-4 rounded-xl">
                            <span className="text-xl font-bold text-slate-600">VAPI</span>
                        </div>
                        <div className="glass px-8 py-4 rounded-xl">
                            <span className="text-xl font-bold text-slate-600">OpenAI</span>
                        </div>
                        <div className="glass px-8 py-4 rounded-xl">
                            <span className="text-xl font-bold text-slate-600">SAT</span>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
