import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Hammer, Shield, MessageCircle, ArrowRight } from 'lucide-react';

const Differentials = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-strass-gray to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        O que torna a Strass a escolha segura
                    </h2>
                    <p className="text-slate-600">
                        Três pilares que sustentam nossa operação em obras comerciais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        {
                            icon: Clock,
                            title: "1. Compromisso com Prazo",
                            text: "O cronograma da obra é tratado como prioridade, não como expectativa. Alinhamos a logística para não travar outras etapas."
                        },
                        {
                            icon: Hammer,
                            title: "2. Pós-venda Responsável",
                            text: "Após a entrega, existe acompanhamento técnico. Se houver necessidade de ajuste, nossa equipe resolve. Não há abandono."
                        },
                        {
                            icon: Shield,
                            title: "3. Garantia do Material",
                            text: "Segurança para quem especifica e para quem responde pela execução. Materiais certificados e adequados à norma técnica."
                        }
                    ].map((item, index) => (
                        <div key={index} className="group p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:border-strass-blue/20 transition-all duration-300">
                            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-strass-blue transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => window.open('https://wa.me/5544999999999?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+conversa+t%C3%A9cnica+sobre+os+diferenciais+da+Strass+Glass.', '_blank')}
                        className="group inline-flex items-center gap-3 bg-[linear-gradient(110deg,#16a34a,45%,#22c55e,55%,#16a34a)] bg-[length:200%_100%] animate-shimmer-pulse text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-green-500/30 transform hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Agendar conversa técnica
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Differentials;
