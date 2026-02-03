import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const CTAFinal = () => {
    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
    };

    return (
        <section id="contato" className="py-24 bg-gradient-to-t from-strass-gray/50 to-white text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Precisa de vidros ou esquadrias para obra comercial e <span className="text-red-600">não pode correr risco</span>?
                </h2>

                <p className="text-xl text-slate-600 mb-10">
                    Fale direto com a equipe técnica da Strass Glass no WhatsApp. Vamos entender sua obra e avaliar o fornecimento.
                </p>

                <button
                    onClick={handleWhatsAppClick}
                    className="group inline-flex items-center gap-3 bg-[linear-gradient(110deg,#16a34a,45%,#22c55e,55%,#16a34a)] bg-[length:200%_100%] animate-shimmer-pulse text-white px-10 py-5 rounded-lg font-bold text-lg transition-all hover:shadow-green-500/30 transform hover:-translate-y-1"
                >
                    <MessageCircle className="w-6 h-6" />
                    Solicitar orçamento técnico
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};

export default CTAFinal;
