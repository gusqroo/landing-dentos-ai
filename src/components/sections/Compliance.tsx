import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import { Section } from '../layout/Section';

const complianceFeatures = [
    {
        icon: '📋',
        title: 'Bitácora Inmutable',
        description: 'Nada se borra. Registro de auditoría completo para total transparencia.'
    },
    {
        icon: '✅',
        title: 'Cumplimiento NOM-004',
        description: 'Expediente clínico validado para COFEPRIS. Tranquilidad legal garantizada.'
    },
    {
        icon: '🔒',
        title: 'Seguridad Bancaria',
        description: 'Respaldos automáticos en la nube encriptada. Tus datos siempre protegidos.'
    }
];

export const Compliance: React.FC = () => {
    return (
        <Section id="blindaje-legal">
            <Container>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900">
                    Tu tranquilidad es{' '}
                    <span className="text-teal-600">nuestra prioridad</span>
                </h2>

                <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto">
                    Cumplimiento legal y seguridad de datos de nivel empresarial
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {complianceFeatures.map((feature, index) => (
                        <GlassCard key={index} hover className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-violet-400 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
