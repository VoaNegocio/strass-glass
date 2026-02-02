import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ArrowDown } from 'lucide-react';

const Hero = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5544999999999?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+um+or%C3%A7amento+para+obra+comercial.', '_blank');
    };

    return (
        <section className="relative w-full h-[90vh] min-h-[600px] flex items-center bg-strass-blue overflow-hidden">
            {/* Background with Grid Pattern */}
            <div className="absolute inset-0 opacity-40 bg-[url('/hero/img1-hero.png')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-strass-blue via-strass-blue/90 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                        <span className="text-strass-accent text-sm font-semibold tracking-wider uppercase">Engenharia de Esquadrias</span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl/tight font-bold text-white mb-6">
                        Vidros e esquadrias para <span className="text-strass-accent">obras comerciais</span> — com prazo cumprido.
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                        Sem atraso no cronograma. Sem dor de cabeça no pós-obra.
                        Atendimento técnico especializado para engenheiros, construtores e arquitetos em <span className="text-white font-medium">Maringá, Sarandi, Marialva e Londrina</span>.
                    </p>

                    <button
                        onClick={handleWhatsAppClick}
                        className="group flex items-center gap-3 bg-[linear-gradient(110deg,#16a34a,45%,#22c55e,55%,#16a34a)] bg-[length:200%_100%] animate-shimmer-pulse text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-green-500/30 transform hover:-translate-y-1 mt-4"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Solicitar orçamento técnico
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* Explore Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-2 z-20 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-white/60 text-xs font-medium tracking-[0.2em] uppercase">Explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-5 h-5 text-strass-accent" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
