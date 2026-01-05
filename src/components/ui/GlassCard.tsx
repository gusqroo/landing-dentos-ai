import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glow?: 'teal' | 'violet' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className = '',
    hover = false,
    glow = 'none'
}) => {
    const glowClass = glow === 'teal' ? 'hover:shadow-teal-glow' : glow === 'violet' ? 'hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]' : '';
    const hoverClass = hover ? 'hover:scale-105 transition-all duration-500' : '';

    return (
        <div className={`glass rounded-3xl p-8 ${hoverClass} ${glowClass} ${className}`}>
            {children}
        </div>
    );
};

interface GlassCardStrongProps {
    children: React.ReactNode;
    className?: string;
    featured?: boolean;
}

export const GlassCardStrong: React.FC<GlassCardStrongProps> = ({
    children,
    className = '',
    featured = false
}) => {
    const featuredClass = featured ? 'scale-110 shadow-teal-glow' : '';

    return (
        <div className={`glass-strong rounded-3xl p-10 ${featuredClass} ${className}`}>
            {children}
        </div>
    );
};
