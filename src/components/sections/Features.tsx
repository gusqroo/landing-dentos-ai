import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import { Section } from '../layout/Section';

type FeatureTab = 'ai' | 'dictado' | 'facturacion';

interface FeatureContent {
    headline: string;
    copy: string;
    imagePlaceholder: string;
}

const features: Record<FeatureTab, FeatureContent> = {
    ai: {
        headline: 'Tu recepcionista nunca duerme.',
        copy: 'Sofía contesta llamadas, negocia horarios y agenda directamente en tu calendario. Recupera ingresos perdidos por llamadas no atendidas.',
        imagePlaceholder: '/images/feature-ai.png'
    },
    dictado: {
        headline: 'Habla, no escribas.',
        copy: 'Dicta tus hallazgos. Nuestra IA transcribe, estructura la nota SOAP en tiempo real y la blinda bajo NOM-004. De 10 minutos a 2 minutos por paciente.',
        imagePlaceholder: '/images/feature-dictation.png'
    },
    facturacion: {
        headline: 'CFDI 4.0 sin salir de tu pantalla.',
        copy: 'Genera el XML y PDF al finalizar la cita y envíalo por WhatsApp automáticamente. Sin portales externos.',
        imagePlaceholder: '/images/feature-billing.png'
    }
};

export const Features: React.FC = () => {
    const [activeTab, setActiveTab] = useState<FeatureTab>('ai');
    const currentFeature = features[activeTab];

    // Auto-switch tabs every 5 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab(current => {
                if (current === 'ai') return 'dictado';
                if (current === 'dictado') return 'facturacion';
                return 'ai';
            });
        }, 6000);

        return () => clearInterval(interval);
    }, [activeTab]);

    return (
        <Section id="caracteristicas" background="gradient-violet">
            <Container>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
                    Características que{' '}
                    <span className="bg-gradient-to-r from-violet-600 to-teal-600 bg-clip-text text-transparent">
                        transforman
                    </span>
                    {' '}tu clínica
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('ai')}
                        className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-500 ${activeTab === 'ai'
                            ? 'glass-strong text-teal-700 scale-105 shadow-[0_0_30px_rgba(13,148,136,0.3)] border-teal-500/30 ring-1 ring-teal-500/20'
                            : 'glass text-slate-600 hover:scale-105'
                            }`}
                    >
                        🤖 IA Conversacional
                    </button>
                    <button
                        onClick={() => setActiveTab('dictado')}
                        className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-500 ${activeTab === 'dictado'
                            ? 'glass-strong text-violet-700 scale-105 shadow-[0_0_30px_rgba(124,58,237,0.3)] border-violet-500/30 ring-1 ring-violet-500/20'
                            : 'glass text-slate-600 hover:scale-105'
                            }`}
                    >
                        🎤 Clínica & Dictado
                    </button>
                    <button
                        onClick={() => setActiveTab('facturacion')}
                        className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-500 ${activeTab === 'facturacion'
                            ? 'glass-strong text-teal-700 scale-105 shadow-[0_0_30px_rgba(13,148,136,0.3)] border-teal-500/30 ring-1 ring-teal-500/20'
                            : 'glass text-slate-600 hover:scale-105'
                            }`}
                    >
                        💰 Facturación Nativa
                    </button>
                </div>

                {/* Feature Content */}
                <div key={activeTab} className="animate-fade-in">
                    <GlassCard className="max-w-5xl mx-auto" hover>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Image */}
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent opacity-60 z-10"></div>
                                <img
                                    src={currentFeature.imagePlaceholder}
                                    alt={currentFeature.headline}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Text Content */}
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    {currentFeature.headline}
                                </h3>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    {currentFeature.copy}
                                </p>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </Container>
        </Section>
    );
};
