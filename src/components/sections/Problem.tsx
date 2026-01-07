import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../layout/Section';
import {
    CheckCircle2,
    Phone,
    FileText,
    FolderOpen,
    AlertCircle,
    FileBarChart,
    Clock,
    ArrowRight,
    Sparkles,
    XCircle
} from 'lucide-react';

export const Problem: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const problems = [
        {
            icon: Phone,
            title: "15 llamadas perdidas al día",
            quote: "Estaba atendiendo un paciente cuando entraron muchas llamadas, no las atendí, se fueron con la competencia.",
            author: "Dr. Ricardo Mendoza, CDMX"
        },
        {
            icon: FileText,
            title: "10 minutos escribiendo cada nota",
            quote: "Termino exhausto de tanto escribir expedientes. Me roba tiempo que podría usar atendiendo más pacientes o simplemente yéndome temprano a casa.",
            author: "Dra. Patricia Ruiz, Monterrey"
        },
        {
            icon: FolderOpen,
            title: "Excel, WhatsApp, carpetas físicas",
            quote: "No sé dónde guardé la radiografía de Don José. Tengo 3 carpetas diferentes, 2 celulares con WhatsApp, y un Excel que nadie actualiza. Es un caos.",
            author: "Dr. Jorge Salinas, Guadalajara"
        },
        {
            icon: AlertCircle,
            title: "Miedo constante a inspecciones",
            quote: "No sé si mis expedientes cumplen 100% con NOM-004. Si llega una inspección hoy, no podría dormir tranquilo. Trabajo en la incertidumbre.",
            author: "Dra. Mónica Herrera, Puebla"
        },
        {
            icon: FileBarChart,
            title: "Facturación manual = estrés",
            quote: "Cada mes es un dolor de cabeza facturar. Busco los XMLs, genero PDFs, me preocupo por auditorías. Temo que me llegue una multa por un error.",
            author: "Dr. Alberto Castro, Querétaro"
        },
        {
            icon: Clock,
            title: "2 horas diarias en administración",
            quote: "Paso más tiempo administrando que haciendo lo que amo: odontología. Llego a casa cansado de tareas que no deberían ser mi responsabilidad.",
            author: "Dr. Fernando Lagos, Cancún"
        }
    ];

    const solutions = [
        {
            icon: CheckCircle2,
            title: "IA contesta 24/7 y agenda automáticamente",
            quote: "Mientras opero, la IA ya agendó 3 citas nuevas, confirmó las de mañana por WhatsApp y reagendó una cancelación. Todo sin que yo mueva un dedo.",
            author: "Dr. Ricardo Mendoza, CDMX"
        },
        {
            icon: CheckCircle2,
            title: "Dicta notas en 2 minutos, IA las estructura",
            quote: "Hablo naturalmente: 'Paciente refiere dolor en molar 36'. La IA genera el expediente completo en formato NOM-004. Es magia pura. Recuperé 90 minutos al día.",
            author: "Dra. Patricia Ruiz, Monterrey"
        },
        {
            icon: CheckCircle2,
            title: "Todo centralizado en una plataforma",
            quote: "Expedientes, fotos, odontogramas, pagos, inventario... todo en un solo lugar. Acceso desde mi iPad mientras desayuno o desde la clínica. Ya no busco nada.",
            author: "Dr. Jorge Salinas, Guadalajara"
        },
        {
            icon: CheckCircle2,
            title: "Verificación COFEPRIS 100% garantizada",
            quote: "El inspector revisó el sistema y quedó impresionado. Bitácora completa, notas bloqueadas, todo cumple NOM-004. Salí sin una sola observación. Ahora duermo tranquilo.",
            author: "Dra. Mónica Herrera, Puebla"
        },
        {
            icon: CheckCircle2,
            title: "Factura CFDI 4.0 en 1 clic",
            quote: "El sistema genera XML y PDF automáticamente. Mis pacientes los reciben por email al instante. Ya no temo auditorías del SAT. Todo es transparente.",
            author: "Dr. Alberto Castro, Querétaro"
        },
        {
            icon: CheckCircle2,
            title: "Enfócate solo en atender pacientes",
            quote: "Recuperé 2 horas al día. Ahora atiendo más pacientes o simplemente me voy temprano a casa con mi familia. Mi calidad de vida cambió radicalmente.",
            author: "Dr. Fernando Lagos, Cancún"
        }
    ];

    return (
        <Section id="problema" className="bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/30 py-24 overflow-hidden">
            <Container>
                {/* Header */}
                <div className="text-center mb-20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-200/20 blur-3xl rounded-full -z-10"></div>
                    <p className="text-teal-600 font-bold mb-4 tracking-[0.2em] uppercase text-sm">
                        El día a día de todo odontólogo...
                    </p>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        ¿Te Suena Familiar?
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        La mayoría de odontólogos pierde entre <span className="text-red-500 font-bold decoration-red-200 underline decoration-4 underline-offset-4">$15,000 y $45,000 MXN</span> al mes por problemas administrativos evitables.
                    </p>
                </div>

                {/* Main Comparison Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 mb-20 relative">

                    {/* Problems Column */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-red-100/20 blur-3xl rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="glass-strong rounded-[2.5rem] p-8 md:p-12 border border-slate-200/60 shadow-2xl relative overflow-hidden h-full">
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-3">
                                    <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-slate-200">
                                        Software Tradicional
                                    </span>
                                </div>
                                <span className="text-3xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">😫</span>
                            </div>

                            <h3 className="text-3xl font-black text-slate-400 mb-10 group-hover:text-red-500 transition-colors duration-500">
                                Sin DentalOS AI
                            </h3>

                            <div className="space-y-8">
                                {problems.map((problem, idx) => {
                                    const Icon = problem.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className={`group/item border-b border-slate-100 last:border-0 pb-8 last:pb-0 transition-all duration-500 ${hoveredCard === `problem-${idx}` ? 'translate-x-2' : ''
                                                }`}
                                            onMouseEnter={() => setHoveredCard(`problem-${idx}`)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                        >
                                            <div className="flex items-start gap-4 mb-3">
                                                <div className="p-3 bg-red-50 rounded-xl group-hover/item:bg-red-100 transition-colors">
                                                    <Icon className="w-6 h-6 text-red-500/60 group-hover/item:text-red-600 transition-colors" />
                                                </div>
                                                <h4 className="font-extrabold text-slate-800 text-lg lg:text-xl group-hover/item:text-red-900 transition-colors">
                                                    {problem.title}
                                                </h4>
                                            </div>
                                            <p className="text-slate-500 italic text-sm md:text-base leading-relaxed pl-16 mb-2 border-l-2 border-transparent group-hover/item:border-red-200 transition-all">
                                                "{problem.quote}"
                                            </p>
                                            <p className="text-[10px] font-bold text-slate-400 pl-16 uppercase tracking-wider">
                                                — {problem.author}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Stat Box */}
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-3xl p-8 mt-12 shadow-inner">
                                <div className="text-center">
                                    <p className="text-xs font-black text-red-900 mb-4 tracking-[0.2em] uppercase">
                                        💸 Costo real de la ineficiencia
                                    </p>
                                    <div className="space-y-4">
                                        <p className="text-sm font-bold text-red-800">Cada llamada perdida ≈ <span className="text-lg font-black">$1,500 MXN</span></p>
                                        <div className="py-6 px-4 bg-white/60 backdrop-blur-md rounded-2xl border border-red-200/50 shadow-sm">
                                            <p className="text-4xl md:text-5xl font-black text-red-600 mb-2 leading-none">
                                                $495,000 MXN
                                            </p>
                                            <p className="text-[10px] font-black text-red-400 uppercase tracking-[0.3em]">
                                                Perdidos al año en promedio
                                            </p>
                                        </div>
                                        <p className="text-[10px] text-slate-400 font-medium italic">
                                            *Basado en estudio ADA 2024 & mercado mexicano
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className="relative group/sol">
                        <div className="absolute inset-0 bg-teal-200/20 blur-3xl rounded-[3rem] -z-10 opacity-0 group-hover/sol:opacity-100 transition-opacity duration-700"></div>
                        <div className="glass-strong rounded-[2.5rem] p-8 md:p-12 border-2 border-teal-200 shadow-[0_0_50px_-12px_rgba(20,184,166,0.2)] relative overflow-hidden h-full">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

                            <div className="flex items-center justify-between mb-10 relative z-10">
                                <div className="flex items-center gap-3">
                                    <span className="bg-teal-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-teal-400 shadow-lg shadow-teal-500/20 flex items-center gap-2">
                                        <Sparkles className="w-3 h-3" />
                                        DentalOS AI
                                    </span>
                                </div>
                                <span className="text-3xl animate-bounce-slow">🚀</span>
                            </div>

                            <h3 className="text-3xl font-black text-teal-900 mb-10 relative z-10">
                                El Futuro Dental
                            </h3>

                            <div className="space-y-8 relative z-10">
                                {solutions.map((solution, idx) => {
                                    const Icon = solution.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className={`group/sitem border-b border-teal-100 last:border-0 pb-8 last:pb-0 transition-all duration-500 ${hoveredCard === `solution-${idx}` ? 'translate-x-2' : ''
                                                }`}
                                            onMouseEnter={() => setHoveredCard(`solution-${idx}`)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                        >
                                            <div className="flex items-start gap-4 mb-3">
                                                <div className="p-3 bg-teal-50 rounded-xl group-hover/sitem:bg-teal-100 transition-colors">
                                                    <Icon className="w-6 h-6 text-teal-500 group-hover/sitem:text-teal-600 transition-colors" />
                                                </div>
                                                <h4 className="font-extrabold text-slate-800 text-lg lg:text-xl group-hover/sitem:text-teal-900 transition-colors">
                                                    {solution.title}
                                                </h4>
                                            </div>
                                            <p className="text-slate-600 italic text-sm md:text-base leading-relaxed pl-16 mb-2 border-l-2 border-transparent group-hover/sitem:border-teal-200 transition-all">
                                                "{solution.quote}"
                                            </p>
                                            <p className="text-[10px] font-bold text-teal-600/60 pl-16 uppercase tracking-wider">
                                                — {solution.author}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Stat Box */}
                            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-8 mt-12 shadow-2xl relative overflow-hidden group/box">
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/box:opacity-100 transition-opacity duration-700"></div>
                                <div className="text-center relative z-10">
                                    <p className="text-xs font-black text-white/80 mb-6 tracking-[0.2em] uppercase">
                                        📈 Resultados Comprobados
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {[
                                            { label: "+30%", sub: "Más Citas" },
                                            { label: "0", sub: "Missed Calls" },
                                            { label: "2hr", sub: "Libres/Día" },
                                            { label: "+$45k", sub: "Extra/Mes" }
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 transition-transform group-hover/box:scale-105" style={{ transitionDelay: `${i * 100}ms` }}>
                                                <p className="text-xl font-black text-white">{stat.label}</p>
                                                <p className="text-[8px] font-black text-teal-100 uppercase tracking-tighter">{stat.sub}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="py-4 border-t border-white/20">
                                        <p className="text-4xl md:text-5xl font-black text-white mb-1 drop-shadow-lg">
                                            ROI 350%+
                                        </p>
                                        <p className="text-[10px] font-black text-teal-50 uppercase tracking-[0.3em]">
                                            Primeros 90 días
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile CTA */}
                <div className="lg:hidden mb-20 text-center">
                    <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-teal-500/30 w-full max-w-sm active:scale-95 transition-all flex items-center justify-center gap-3">
                        Habla con IA ahora
                        <Sparkles className="w-6 h-6" />
                    </button>
                </div>

                {/* Bottom Comparison Table - Premium Glass */}
                <div className="glass-strong rounded-[2.5rem] p-8 md:p-12 border border-white/60 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/20 blur-3xl -z-10 rounded-full"></div>
                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <XCircle className="w-5 h-5 text-slate-400" />
                                </div>
                                <h4 className="text-xl font-black text-slate-800 uppercase tracking-tight">Software Legacy</h4>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "$0 inicial (pero pierdes $495k al año)",
                                    "2 horas diarias de carga administrativa",
                                    "Riesgo de multas por NOM-004",
                                    "Ineficiencia en seguimiento de citas"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                                        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-l-0 md:border-l-2 border-teal-100 md:pl-12 space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-teal-50 rounded-lg shadow-inner">
                                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                </div>
                                <h4 className="text-xl font-black text-teal-900 uppercase tracking-tight">DentalOS AI</h4>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "ROI positivo inmediato",
                                    "Recuperas 14 horas libres a la semana",
                                    "Cumplimiento NOM-004 automático",
                                    "+$45,000 MXN extras mensuales"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-teal-700">
                                        <span className="w-1.5 h-1.5 bg-teal-600 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.6)] flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4 border-t border-teal-50">
                                <p className="text-sm font-black text-teal-600 flex items-center gap-2 uppercase tracking-widest animate-pulse">
                                    <Sparkles className="w-4 h-4" />
                                    LA MEJOR INVERSIÓN PARA TU CLÍNICA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA Action */}
                <div className="text-center mt-24">
                    <button className="bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 text-white px-12 md:px-20 py-6 md:py-8 rounded-[2.5rem] font-black text-xl md:text-3xl shadow-[0_20px_50px_-15px_rgba(20,184,166,0.5)] hover:shadow-[0_30px_60px_-15px_rgba(20,184,166,0.6)] transition-all transform hover:-translate-y-2 active:translate-y-0 inline-flex items-center gap-4 group">
                        Prueba DentalOS 30 Días Gratis
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                    </button>

                    <div className="flex flex-wrap items-center justify-center gap-8 mt-12 mb-8">
                        {[
                            { label: "Sin tarjeta" },
                            { label: "Setup 24h" },
                            { label: "Soporte VIP" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 group cursor-default">
                                <CheckCircle2 className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <a href="#pricing" className="text-teal-600 font-black text-xs uppercase tracking-[0.4em] hover:text-teal-400 transition-colors border-b-2 border-teal-500/20 pb-1">
                        Ver planes y precios
                    </a>
                </div>
            </Container>
        </Section>
    );
};
