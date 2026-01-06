import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../layout/Section';

export const Problem: React.FC = () => {
    return (
        <Section id="problema">
            <Container>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
                    La Odontología ha evolucionado.{' '}
                    <span className="text-teal-600">¿Tu gestión también?</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Traditional Software - Left */}
                    <div className="bg-slate-200 rounded-3xl p-6 md:p-10 border-2 border-slate-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-300/50 rounded-full -mr-16 -mt-16"></div>
                        <div className="relative z-10">
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 bg-slate-400 text-white text-sm font-semibold rounded-lg">
                                    Software Tradicional
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-700 mb-6">
                                Quedado en el pasado
                            </h3>

                            <ul className="space-y-4 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 text-xl">✗</span>
                                    <span>Interfaz de los 2000s</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 text-xl">✗</span>
                                    <span>Llamadas perdidas constantemente</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 text-xl">✗</span>
                                    <span>Notas manuales eternas</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 text-xl">✗</span>
                                    <span>Cobros ocultos y módulos separados</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 text-xl">✗</span>
                                    <span>Sin integración con IA</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* DentalOS AI - Right */}
                    <div className="glass-strong rounded-3xl p-6 md:p-10 border-2 border-teal-300 shadow-teal-glow relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400/20 rounded-full -mr-20 -mt-20 animate-pulse-slow"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-400/20 rounded-full -ml-16 -mb-16 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

                        <div className="relative z-10">
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-semibold rounded-lg">
                                    Ecosistema DentalOS
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-teal-900 mb-6">
                                El futuro es ahora
                            </h3>

                            <ul className="space-y-4 text-slate-700">
                                <li className="flex items-start gap-3">
                                    <span className="text-teal-600 text-xl">✓</span>
                                    <span><strong>Recepción 24/7</strong> con voz humana</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-teal-600 text-xl">✓</span>
                                    <span><strong>Llamadas nunca perdidas</strong> - Sofía responde siempre</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-teal-600 text-xl">✓</span>
                                    <span><strong>Notas clínicas dictadas</strong> y blindadas (NOM-004)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-teal-600 text-xl">✓</span>
                                    <span><strong>Un solo precio</strong>, crecimiento ilimitado</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-teal-600 text-xl">✓</span>
                                    <span><strong>IA nativa</strong> en cada función</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
