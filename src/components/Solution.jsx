import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Solution = () => {
    return (
        <section className="py-24 bg-strass-blue relative">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    {/* Visual element representing precision/layers using CSS borders */}
                    <div className="absolute inset-0 border-2 border-white/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
                    <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
                        <ShieldCheck className="w-12 h-12 text-strass-accent mb-6" />
                        <h4 className="text-xl font-bold text-white mb-2">Garantia Formal</h4>
                        <p className="text-slate-300 mb-6">Documentação técnica completa e responsabilidade assumida em contrato.</p>
                        <div className="h-px w-full bg-white/10 my-6"></div>
                        <p className="text-sm text-slate-400 italic">"Segurança jurídica e técnica para sua obra."</p>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Execução com <span className="text-strass-accent">foco em previsibilidade</span>.
                    </h2>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        A Strass Glass executa vidros e esquadrias para obras comerciais entendendo que o cronograma é sagrado. O que isso significa na prática:
                    </p>

                    <ul className="space-y-4 mb-10">
                        {[
                            "Planejamento alinhado ao cronograma da obra",
                            "Execução técnica de vidros e esquadrias comerciais",
                            "Acompanhamento no pós-obra (sem abandono)",
                            "Garantia formal dos materiais utilizados"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="text-slate-200 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="border-l-4 border-strass-accent pl-6 py-2 mb-8">
                        <p className="text-lg font-bold text-white">
                            Aqui, prazo não é argumento de venda.
                        </p>
                        <p className="text-slate-400">
                            É critério operacional.
                        </p>
                    </div>

                    <button
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C+preciso+de+or%C3%A7amento+para+obra+comercial`, '_blank')}
                        className="group flex items-center gap-3 bg-[linear-gradient(110deg,#16a34a,45%,#22c55e,55%,#16a34a)] bg-[length:200%_100%] animate-shimmer-pulse text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-green-500/30 transform hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Falar com engenharia
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Solution;
