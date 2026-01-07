import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import { Section } from '../layout/Section';
import {
    Bot,
    Mic2,
    Receipt,
    ShieldCheck,
    Sparkles,
    ArrowRight
} from 'lucide-react';

type FeatureTab = 'ai' | 'dictado' | 'facturacion' | 'cumplimiento';

interface FeatureContent {
    headline: string;
    copy: string;
    image: string;
    icon: React.ElementType;
    color: string;
}

const features: Record<FeatureTab, FeatureContent> = {
    cumplimiento: {
        headline: 'Blindaje Legal y NOM-004.',
        copy: 'Expediente clínico inmutable y validado para auditorías de COFEPRIS. Seguridad bancaria con respaldos automáticos y encriptación de grado militar para proteger lo más valioso: tus datos.',
        image: '/images/feature-compliance.png',
        icon: ShieldCheck,
        color: 'emerald'
    },
    ai: {
        headline: 'Tu recepcionista nunca duerme.',
        copy: 'Sofía contesta llamadas, negocia horarios y agenda directamente en tu calendario. Recupera ingresos perdidos por llamadas no atendidas con una atención humana e inteligente 24/7.',
        image: '/images/feature-ai.png',
        icon: Bot,
        color: 'teal'
    },
    dictado: {
        headline: 'Habla, no escribas.',
        copy: 'Dicta tus hallazgos de forma natural. Nuestra IA transcribe y llena Historias Clínicas (Anamnesis) y Notas SOAP (Evoluciones) en tiempo real y de manera inteligente. Reduce el tiempo administrativo de 10 a solo 2 minutos por paciente.',
        image: '/images/feature-dictation.png',
        icon: Mic2,
        color: 'violet'
    },
    facturacion: {
        headline: 'CFDI 4.0 sin portales externos.',
        copy: 'Genera el XML y PDF al finalizar la cita con un solo clic. Envía la factura por WhatsApp y correo electrónico con un solo click, manteniendo tu contabilidad al día sin esfuerzo.',
        image: '/images/feature-billing.png',
        icon: Receipt,
        color: 'blue'
    }

};

export const Features: React.FC = () => {
    const [activeTab, setActiveTab] = useState<FeatureTab>('ai');
    const currentFeature = features[activeTab];

    // Auto-switch tabs every 8 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab(current => {
                if (current === 'ai') return 'dictado';
                if (current === 'dictado') return 'facturacion';
                if (current === 'facturacion') return 'cumplimiento';
                return 'ai';
            });
        }, 8000);

        return () => clearInterval(interval);
    }, [activeTab]);

    return (
        <Section id="caracteristicas" className="bg-slate-50/50 py-16 md:py-24">
            <Container>
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        La Potencia de la{' '}
                        <span className="bg-gradient-to-r from-teal-600 to-violet-600 bg-clip-text text-transparent">
                            Inteligencia Real
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        No somos solo un software de agenda. Somos el motor de eficiencia que tu clínica necesita para escalar al siguiente nivel.
                    </p>
                </div>

                {/* Compact Tabs Bar */}
                <div className="flex justify-center mb-12">
                    <div className="glass-strong p-2 rounded-[2rem] flex flex-wrap justify-center gap-2 border border-white/40 shadow-xl overflow-hidden">
                        {(Object.keys(features) as FeatureTab[]).map((tab) => {
                            const Icon = features[tab].icon;
                            const isActive = activeTab === tab;
                            const config = features[tab];

                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all duration-500 group relative ${isActive
                                        ? 'bg-white text-slate-900 shadow-sm scale-105'
                                        : 'text-slate-500 hover:text-slate-800'
                                        }`}
                                >
                                    <Icon className={`w-5 h-5 transition-colors ${isActive ? `text-${config.color}-600` : 'text-slate-400'
                                        }`} />
                                    <span className="text-xs uppercase tracking-widest whitespace-nowrap">
                                        {tab === 'ai' ? 'Asistente IA' :
                                            tab === 'dictado' ? 'Notas de voz' :
                                                tab === 'facturacion' ? 'Facturación' : 'Legal'}
                                    </span>
                                    {isActive && (
                                        <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-${config.color}-500`}></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Display */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-violet-500/5 blur-3xl -z-10 rounded-[3rem]"></div>
                    <GlassCard className="max-w-6xl mx-auto overflow-hidden border-white/20 shadow-2xl" noPadding>
                        <div className="grid lg:grid-cols-2 items-center">
                            {/* Visual Side */}
                            <div className="relative aspect-video lg:aspect-[1.2/1] group overflow-hidden bg-slate-100">
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent z-10"></div>
                                <img
                                    key={currentFeature.image}
                                    src={currentFeature.image}
                                    alt={currentFeature.headline}
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 animate-fade-in"
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-teal-500" />
                                        <span className="text-[10px] font-black uppercase text-slate-800 tracking-wider">Tecnología de Vanguardia</span>
                                    </div>
                                </div>
                            </div>

                            {/* Text side */}
                            <div className="p-8 md:p-16 lg:p-20">
                                <div className="inline-flex items-center gap-2 text-teal-600 font-black text-xs uppercase tracking-[0.3em] mb-6">
                                    <div className="w-8 h-1 bg-teal-500 rounded-full"></div>
                                    Feature Focus
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight animate-slide-up">
                                    {currentFeature.headline}
                                </h3>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 animate-fade-in">
                                    {currentFeature.copy}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all group">
                                        Saber más
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </Container>
        </Section>
    );
};
