import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: 'default' | 'gradient-teal' | 'gradient-violet' | 'dark';
}

export const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    background = 'default'
}) => {
    const bgClasses = {
        default: 'bg-slate-50',
        'gradient-teal': 'gradient-teal',
        'gradient-violet': 'gradient-violet',
        dark: 'bg-gradient-to-br from-slate-800 to-slate-900'
    };

    return (
        <section
            id={id}
            className={`py-20 md:py-32 ${bgClasses[background]} ${className}`}
        >
            {children}
        </section>
    );
};
