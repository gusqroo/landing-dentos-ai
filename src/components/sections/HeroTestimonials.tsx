import React, { useState, useEffect } from 'react';

export interface TestimonialData {
    id: number;
    name: string;
    text: string;
    image: string;
}

const TESTIMONIALS: TestimonialData[] = [
    {
        id: 1,
        name: "Dra. Ana López",
        text: "Sofía recuperó 5 citas hoy mientras operaba. Una locura.",
        image: "/images/avatars/avatar-ana.png"
    },
    {
        id: 2,
        name: "Dr. Carlos Ruiz",
        text: "Facturé 15 pacientes en 30 segundos. Adiós estrés del SAT.",
        image: "/images/avatars/avatar-carlos.png"
    },
    {
        id: 3,
        name: "Dr. Miguel Torres",
        text: "La nota clínica se llenó sola con lo que dije. Magia pura.",
        image: "/images/avatars/avatar-miguel.png"
    }
];

export const HeroTestimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentTestimonial = TESTIMONIALS[currentIndex];

    return (
        <div className="absolute -bottom-16 right-0 md:-right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl max-w-sm w-[90%] md:w-80 animate-fade-in z-20">
            <div className="flex items-center gap-4">
                <div
                    className="w-12 h-12 rounded-full border-2 border-teal-400 shrink-0 bg-slate-200 transition-all duration-500 ease-in-out"
                    style={{
                        backgroundImage: `url(${currentTestimonial.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    aria-label={currentTestimonial.name}
                    role="img"
                />
                <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {currentTestimonial.name}
                    </h4>
                    <p className="text-xs text-slate-700 leading-snug mt-1">
                        "{currentTestimonial.text}"
                    </p>
                </div>
            </div>

            {/* Progress indicators */}
            <div className="flex gap-1 mt-3 justify-center">
                {TESTIMONIALS.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-teal-500' : 'w-2 bg-slate-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
