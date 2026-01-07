import { useState, useEffect } from 'react';
import { User, Mail, MapPin, Building2, Phone, Users as UsersIcon, ShieldCheck, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormData {
    nombre: string;
    correo: string;
    estado: string;
    ciudad: string;
    numeroOdontologos: string;
    nombreClinica: string;
    telefono: string;
    plan: 'ESENCIAL' | 'PRO AI' | 'INFINITY' | '';
}

export default function DemoRequest() {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        correo: '',
        estado: '',
        ciudad: '',
        numeroOdontologos: '',
        nombreClinica: '',
        telefono: '',
        plan: ''
    });

    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
    const [captchaInput, setCaptchaInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Generar captcha dinámico al montar
    useEffect(() => {
        regenerateCaptcha();
    }, []);

    const regenerateCaptcha = () => {
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ num1: n1, num2: n2, answer: n1 + n2 });
        setCaptchaInput('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validar captcha
        if (parseInt(captchaInput) !== captcha.answer) {
            alert('El resultado de la suma es incorrecto. Intenta de nuevo.');
            regenerateCaptcha();
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://n8n.astravertex.com/webhook/demo-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    nombre: '',
                    correo: '',
                    estado: '',
                    ciudad: '',
                    numeroOdontologos: '',
                    nombreClinica: '',
                    telefono: '',
                    plan: ''
                });
                regenerateCaptcha();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error al enviar:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="demo" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-slate-50">
            {/* Background Decorativo */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-50 overflow-hidden -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Transformación Digital</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-teal-800 to-slate-900 mb-4">
                        Solicita tu Demo Personalizada
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Descubre cómo DentalOS puede automatizar tu clínica. Completa el formulario y un especialista te contactará brevemente.
                    </p>
                </div>

                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10 overflow-hidden">
                    {/* Barra superior de color */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 via-violet-500 to-teal-400"></div>

                    {submitStatus === 'success' ? (
                        <div className="text-center py-20 animate-fade-in">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Enviada con Éxito!</h3>
                            <p className="text-slate-600 max-w-md mx-auto">
                                Hemos recibido tus datos correctamente. Nuestro equipo revisará tu solicitud y te contactará muy pronto.
                            </p>
                            <button
                                onClick={() => setSubmitStatus('idle')}
                                className="mt-8 text-teal-600 font-medium hover:text-teal-700 underline"
                            >
                                Enviar otra solicitud
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Sección: Datos Personales */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                                    <User className="w-5 h-5 text-teal-500" />
                                    Información de Contacto
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                                        <input
                                            type="text"
                                            name="nombre"
                                            required
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            placeholder="Nombre completo"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                                        <input
                                            type="email"
                                            name="correo"
                                            required
                                            value={formData.correo}
                                            onChange={handleChange}
                                            placeholder="Correo electrónico"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                                        <input
                                            type="tel"
                                            name="telefono"
                                            required
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            placeholder="Teléfono móvil"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Sección: Datos de la Clínica */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                                    <Building2 className="w-5 h-5 text-violet-500" />
                                    Detalles de la Clínica
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                                        <input
                                            type="text"
                                            name="nombreClinica"
                                            required
                                            value={formData.nombreClinica}
                                            onChange={handleChange}
                                            placeholder="Nombre de la clínica"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <UsersIcon className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                                        <input
                                            type="number"
                                            name="numeroOdontologos"
                                            required
                                            min="1"
                                            value={formData.numeroOdontologos}
                                            onChange={handleChange}
                                            placeholder="Nº Odontólogos"
                                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700"
                                        />
                                    </div>
                                    <div className="relative group md:col-span-2 grid grid-cols-2 gap-4">
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
                                            <input
                                                type="text"
                                                name="estado"
                                                required
                                                value={formData.estado}
                                                onChange={handleChange}
                                                placeholder="Estado"
                                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700"
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="ciudad"
                                                required
                                                value={formData.ciudad}
                                                onChange={handleChange}
                                                placeholder="Ciudad"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all placeholder:text-slate-400 font-medium text-slate-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Selección de Plan y Captcha */}
                            <div className="grid md:grid-cols-2 gap-6 pt-4">
                                <div className="relative">
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Plan de Interés</label>
                                    <select
                                        name="plan"
                                        required
                                        value={formData.plan}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all font-medium text-slate-700 cursor-pointer"
                                    >
                                        <option value="" disabled>Selecciona un plan</option>
                                        <option value="ESENCIAL">Plan ESENCIAL</option>
                                        <option value="PRO AI">Plan PRO AI</option>
                                        <option value="INFINITY">Plan INFINITY</option>
                                    </select>
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-teal-600" />
                                        Pregunta de seguridad
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <div className="px-4 py-3 bg-slate-100 rounded-xl font-bold text-slate-600 select-none min-w-[80px] text-center border border-slate-200">
                                            {captcha.num1} + {captcha.num2} = ?
                                        </div>
                                        <input
                                            type="number"
                                            required
                                            value={captchaInput}
                                            onChange={(e) => setCaptchaInput(e.target.value)}
                                            placeholder="Respuesta"
                                            className="w-32 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all font-medium text-slate-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            {submitStatus === 'error' && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100 text-sm">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    <span>Hubo un error al enviar la solicitud. Por favor intenta nuevamente.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-teal-600 to-violet-600 hover:from-teal-500 hover:to-violet-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-lg group"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Solicitar Demo Gratuita
                                        <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-slate-400">
                                Al enviar este formulario aceptas nuestra Política de Privacidad y el procesamiento de tus datos.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

