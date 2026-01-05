import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard, GlassCardStrong } from '../ui/GlassCard';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

const plans = [
    {
        name: 'ESENCIAL',
        price: '$999',
        period: '/mes',
        description: 'Para iniciar',
        features: [
            'Agenda Inteligente',
            'Cumplimiento NOM-004',
            'CFDI Limitado (50/mes)',
            'Expediente Clínico Digital',
            '1 Usuario'
        ],
        featured: false
    },
    {
        name: 'PRO AI',
        price: '$1,899',
        period: '/mes',
        description: 'Recomendado',
        badge: '🔥 Más Popular',
        features: [
            'Todo en ESENCIAL +',
            '🤖 Recepcionista IA (Voz)',
            '🎤 Dictado SOAP con IA',
            '💰 Facturación Ilimitada',
            'Hasta 3 Usuarios',
            'Soporte Prioritario'
        ],
        featured: true
    },
    {
        name: 'INFINITY',
        price: '$3,499',
        period: '/mes',
        description: 'Para Redes',
        features: [
            'Todo en PRO AI +',
            '🏢 Multi-Sede Ilimitado',
            '👥 Usuarios Ilimitados',
            '📊 Analítica Avanzada',
            'API Personalizada',
            'Soporte Dedicado 24/7'
        ],
        featured: false
    }
];

export const Pricing: React.FC = () => {
    return (
        <Section id="precios" background="gradient-teal">
            <Container>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900">
                    Transparencia total.{' '}
                    <span className="text-teal-600">Sin sorpresas.</span>
                </h2>

                <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
                    Elige el plan que se adapte a tu clínica
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {plans.map((plan, index) => (
                        plan.featured ? (
                            <GlassCardStrong key={index} featured className="relative">
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="inline-block px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-bold rounded-full shadow-lg">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-teal-900 mb-2">{plan.name}</h3>
                                    <p className="text-slate-600 mb-6">{plan.description}</p>
                                    <div className="flex items-end justify-center gap-2 mb-6">
                                        <span className="text-5xl font-bold text-teal-700">{plan.price}</span>
                                        <span className="text-xl text-slate-600 mb-2">{plan.period}</span>
                                    </div>
                                    <Button variant="primary" className="w-full">
                                        Comenzar Ahora
                                    </Button>
                                </div>

                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <span className="text-teal-600 text-xl">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCardStrong>
                        ) : (
                            <GlassCard key={index} hover>
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                    <p className="text-slate-600 mb-6">{plan.description}</p>
                                    <div className="flex items-end justify-center gap-2 mb-6">
                                        <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                                        <span className="text-xl text-slate-600 mb-2">{plan.period}</span>
                                    </div>
                                    <Button variant="ghost" className="w-full">
                                        Seleccionar Plan
                                    </Button>
                                </div>

                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <span className="text-teal-600 text-xl">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        )
                    ))}
                </div>
            </Container>
        </Section>
    );
};
