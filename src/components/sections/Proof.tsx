import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import {
    Calendar,
    Play,
    Flag,
    ShieldCheck,
    FileCheck,
    Zap,
    Clock,
    ArrowRight,
    TrendingUp,
    X
} from 'lucide-react';

export const Proof: React.FC = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);

    const socialActions = [
        { name: "Dr. Martínez", city: "CDMX", action: "acaba de agendar una demo", time: "hace 3 minutos" },
        { name: "Dra. Rodríguez", city: "Guadalajara", action: "está probando el dictado con IA", time: "hace 8 minutos" },
        { name: "Dr. Castillo", city: "Monterrey", action: "importó sus expedientes", time: "hace 15 minutos" },
    ];

    return (
        <Section id="demo" className="relative py-24 overflow-hidden bg-white/50">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(14,165,233,0.05),transparent)]"></div>

            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-teal-600 font-bold mb-4 tracking-[0.2em] uppercase text-sm">
                        La prueba está en probarlo
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        No Nos Creas. <span className="text-teal-600">Compruébalo Tú Mismo.</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Nuestra IA está funcionando ahora mismo.
                        Llámala y agenda una cita demo como lo haría tu paciente.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* OPTION A: Live Phone Demo */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-teal-500/5 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="glass-strong rounded-[2.5rem] p-8 md:p-10 border border-teal-100 shadow-2xl relative h-full flex flex-col">
                            <div className="mb-8">
                                <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-teal-200">
                                    <Zap className="w-3 h-3 fill-teal-700" />
                                    Opción A: Demo Telefónica
                                </span>
                            </div>

                            <h3 className="text-2xl font-black text-slate-800 mb-6">
                                📞 Llama a nuestra recepcionista IA ahora:
                            </h3>

                            <div className="flex-grow flex flex-col justify-center py-6 text-center">
                                <a
                                    href="tel:+525547448651"
                                    className="text-3xl md:text-5xl font-black text-teal-600 tracking-tight hover:scale-105 transition-transform inline-block mb-4"
                                >
                                    +52 55 4744 8651
                                </a>
                                <p className="text-slate-400 text-sm font-medium mb-10 italic">
                                    "Hola, buenos días. Me gustaría agendar una cita para una limpieza dental."
                                </p>

                                <div className="space-y-4 max-w-sm mx-auto">
                                    <div className="flex items-center gap-4 text-left p-4 bg-white/50 rounded-2xl border border-teal-50/50">
                                        <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                        <p className="text-sm font-bold text-slate-700 leading-tight">La IA te responderá y te preguntará tu nombre.</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-left p-4 bg-white/50 rounded-2xl border border-teal-50/50">
                                        <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                        <p className="text-sm font-bold text-slate-700 leading-tight">Te ofrecerá horarios y confirmará tu cita demo.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-teal-50 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <Clock className="w-4 h-4 text-teal-500" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Promedio: 2 min</span>
                                </div>
                                <button
                                    onClick={() => setShowVideoModal(true)}
                                    className="text-teal-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all group"
                                >
                                    Prefiero ver un video <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* OPTION B: Calendar Widget */}
                    <div className="group relative">
                        <div className="absolute inset-0 bg-violet-500/5 blur-3xl rounded-[3rem] opacity-0 group-hover/sol:opacity-100 transition-opacity duration-700"></div>
                        <div className="glass-strong rounded-[2.5rem] p-8 md:p-10 border border-slate-200/60 shadow-2xl relative h-full flex flex-col overflow-hidden">
                            <div className="mb-8">
                                <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-slate-200">
                                    <Calendar className="w-3 h-3" />
                                    Opción B: Agenda una Videollamada
                                </span>
                            </div>

                            <h3 className="text-2xl font-black text-slate-800 mb-6">
                                Selecciona fecha y hora para tu demo personalizada →
                            </h3>

                            {/* Calendar Placeholder / Widget */}
                            <div className="flex-grow bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center group-hover:border-teal-200 transition-colors">
                                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                                    <Calendar className="w-8 h-8 text-teal-500" />
                                </div>
                                <p className="text-slate-400 font-bold text-sm mb-6">
                                    [Widget de calendario DentalOS integrado]
                                </p>
                                <Button variant="ghost" size="sm" className="bg-white hover:bg-teal-50">
                                    Abrir Calendario
                                </Button>
                            </div>

                            <div className="mt-8 p-6 bg-teal-50/50 rounded-2xl border border-teal-100">
                                <p className="text-teal-900 text-sm font-bold leading-relaxed">
                                    ✨ Al agendar, nuestra IA te llamará inmediatamente para confirmar y preparar tu sesión demo de 20 minutos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats & Trust */}
                <div className="mt-16 pt-16 border-t border-slate-100">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Social Proof Dinámico */}
                        <div className="space-y-4 w-full lg:w-auto">
                            <h4 className="flex items-center gap-3 text-slate-900 font-black text-xs uppercase tracking-[0.3em] mb-6">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                En vivo ahora
                            </h4>
                            <div className="space-y-4">
                                {socialActions.map((s, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-slate-100 shadow-sm transition-all hover:scale-[1.02]">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-xs">
                                            {s.name[0]}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800 leading-none mb-1">
                                                {s.name} <span className="font-medium text-slate-500">en {s.city}</span>
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                {s.action} • <span className="font-bold text-teal-500">{s.time}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center lg:justify-end gap-x-12 gap-y-8">
                            <div className="flex flex-col items-center gap-3 group">
                                <div className="p-4 bg-teal-50 rounded-2xl group-hover:scale-110 transition-transform">
                                    <Flag className="w-6 h-6 text-teal-600" />
                                </div>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">100% Mexicano</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 group">
                                <div className="p-4 bg-teal-50 rounded-2xl group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-6 h-6 text-teal-600" />
                                </div>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cumple NOM-004</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 group">
                                <div className="p-4 bg-teal-50 rounded-2xl group-hover:scale-110 transition-transform">
                                    <FileCheck className="w-6 h-6 text-teal-600" />
                                </div>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SAT Aprobado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Video Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl"
                        onClick={() => setShowVideoModal(false)}
                    ></div>
                    <div className="relative w-full max-w-5xl aspect-video glass-strong rounded-3xl overflow-hidden shadow-[0_0_100px_-12px_rgba(20,184,166,0.3)] animate-scale-in">
                        <button
                            onClick={() => setShowVideoModal(false)}
                            className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                            <div className="text-center text-white p-12">
                                <div className="w-24 h-24 mx-auto mb-6 bg-teal-500/20 rounded-full flex items-center justify-center animate-pulse">
                                    <Play className="w-10 h-10 fill-teal-500 text-teal-500" />
                                </div>
                                <h4 className="text-3xl font-black mb-4 uppercase tracking-tight italic">
                                    DentalOS AI en Acción
                                </h4>
                                <p className="text-xl text-slate-300 max-w-lg mx-auto leading-relaxed">
                                    Sofía atendiendo llamada, agendando en tiempo real y actualizando dashboard.
                                </p>
                                <div className="mt-8 inline-flex items-center gap-4 text-xs font-bold text-teal-400 uppercase tracking-widest">
                                    <TrendingUp className="w-4 h-4" />
                                    Demo 100% Real • 90 Segundos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
};
