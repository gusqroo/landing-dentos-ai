import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'md' | 'lg';
    icon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'lg',
    icon,
    onClick,
    className = ''
}) => {
    const sizeClasses = {
        md: 'px-4 py-2 text-sm',
        lg: 'px-8 py-4 text-lg'
    };

    const baseClass = `inline-flex items-center gap-3 rounded-2xl font-semibold transition-all duration-500 ${sizeClasses[size]}`;

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
