import React from 'react';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
    return (
        <footer className="relative overflow-hidden py-16 bg-gradient-to-br from-slate-900 to-slate-800">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

            <Container>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/Logo/logo_azul.png"
                            alt="DentOS AI Logo"
                            className="h-10 w-auto rounded-lg"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <span className="text-xl font-bold text-white">
                            DentOS AI
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-slate-300">
                        <a href="#" className="hover:text-teal-400 transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-teal-400 transition-colors">Términos</a>
                        <a href="#" className="hover:text-teal-400 transition-colors">Contacto</a>
                    </div>

                    {/* Copyright */}
                    <p className="text-slate-400 text-sm">
                        © 2026 DentOS AI. Todos los derechos reservados.
                    </p>
                </div>
            </Container>
        </footer>
    );
};
