import React from 'react';
import { Container } from '../ui/Container';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

            <Container>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <img
                                src="/Logo/logo_azul.png"
                                alt="DentOS AI Logo"
                                className="h-10 w-auto rounded-lg"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            <span className="text-2xl font-black text-white tracking-tight">
                                DentOS<span className="text-teal-400">AI</span>
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Transformando la odontología en México con inteligencia artificial de vanguardia.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Legal</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Términos</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Compliance</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Soporte</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Contacto</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Ayuda</a></li>
                            <li><a href="#" className="hover:text-teal-400 transition-colors">Citas Demo</a></li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Síguenos</h4>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-teal-500 hover:text-white transition-all duration-300 group">
                                <Facebook className="w-5 h-5 group-hover:scale-110" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white transition-all duration-300 group">
                                <Instagram className="w-5 h-5 group-hover:scale-110" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                                <Linkedin className="w-5 h-5 group-hover:scale-110" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <p className="text-slate-500 text-sm">
                            © 2026 DentOS AI. Todos los derechos reservados. Hecho en México.
                        </p>
                        <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
                            Software desarrollado por{' '}
                            <a
                                href="https://AstraVertex.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-500/80 hover:text-teal-400 transition-colors underline decoration-teal-500/20 underline-offset-4"
                            >
                                AstraVertex.com
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Pequeños iconos de tecnología si fuera necesario */}
                    </div>
                </div>
            </Container>
        </footer>
    );
};
