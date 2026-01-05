import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    icon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    icon,
    onClick,
    className = ''
}) => {
    const baseClass = 'inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500';

    const variantClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        ghost: 'bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-50 hover:scale-105'
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClass} ${variantClasses[variant]} ${className}`}
        >
            {icon && <span className="text-xl">{icon}</span>}
            {children}
        </button>
    );
};
