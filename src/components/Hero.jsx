import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero = () => {
    const handleWhatsAppClick = () => {
        if (window.dataLayer) {
            window.dataLayer.push({
                event: 'conversion_click',
                conversion_location: 'hero'
            });
        }
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+um+or%C3%A7amento+para+obra+comercial.`, '_blank');
    };

    return (
        <section className="relative w-full min-h-[600px] flex items-center bg-strass-blue overflow-hidden pt-32 pb-12">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-strass-blue via-strass-blue/95 to-strass-blue/90"></div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    {/* Hero Image - Moved to top as requested */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative block w-full mb-8"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-tr from-strass-blue/20 to-transparent z-10"></div>
                            <img
                                src="/hero/img1-hero.png"
                                alt="Fachada de vidro moderna"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    <div className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                        <span className="text-strass-accent text-sm font-semibold tracking-wider uppercase">Engenharia de Esquadrias</span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl/tight font-bold text-white mb-6">
                        Vidros e esquadrias para <span className="text-strass-accent">obras comerciais</span> — com prazo cumprido.
                    </h1>

                    <button
                        id="hero-cta-button"
                        onClick={handleWhatsAppClick}
                        className="group flex items-center gap-3 bg-[linear-gradient(110deg,#16a34a,45%,#22c55e,55%,#16a34a)] bg-[length:200%_100%] animate-shimmer-pulse text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-green-500/30 transform hover:-translate-y-1 mb-8"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Solicitar orçamento técnico
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                        Sem atraso no cronograma. Sem dor de cabeça no pós-obra.
                        Atendimento técnico especializado para engenheiros, construtores e arquitetos em <span className="text-white font-medium">Maringá, Sarandi, Marialva e Londrina</span>.
                    </p>
                </motion.div>


            </div>


        </section>
    );
};

export default Hero;
