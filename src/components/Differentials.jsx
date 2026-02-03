```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Settings, PenTool, MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Differentials = () => {
    const differentials = [
        {
            icon: Clock,
            title: "Cumprimento de Prazos",
            description: "Cronograma auditado em contrato. Entendemos que sua obra não pode parar por atraso de fornecedor."
        },
        {
            icon: Shield,
            title: "Garantia Real",
            description: "5 anos de garantia em instalações e vedação. Assistência técnica rápida e descomplicada."
        },
        {
            icon: Settings,
            title: "Engenharia Precisão",
            description: "Medição técnica a laser e projetos executivos detalhados para evitar surpresas na instalação."
        },
        {
            icon: PenTool,
            title: "Instalação Certificada",
            description: "Equipes próprias e treinadas, seguindo rigorosamente as normas NBR da ABNT e segurança do trabalho."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-strass-blue mb-6">
                        Por que grandes construtoras escolhem a <span className="text-strass-accent">Strass Glass</span>?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Não somos apenas vidraceiros. Somos parceiros de engenharia para sua obra.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {differentials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:border-strass-accent/30 hover:shadow-lg transition-all group"
                        >
                            <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-7 h-7 text-strass-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-strass-blue mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')}
className = "inline-flex items-center gap-2 bg-strass-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors"
    >
    Agendar conversa técnica
        < ArrowRight className = "w-5 h-5" />
                    </button >
                </div >
            </div >
        </section >
    );
};

export default Differentials;
```
