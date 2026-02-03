import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Problem = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/problem-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40"></div>
            </div>
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-strass-blue/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-strass-blue">
                        Quem já conduziu obra comercial sabe:
                    </h2>

                    <div className="space-y-6">
                        {[
                            "Fornecedor que promete prazo e entrega atrasado",
                            "Instalação mal feita que vira ajuste infinito",
                            "Pós-obra inexistente (o famoso 'sumiço')",
                            "Risco financeiro e jurídico recaindo sobre quem gerencia"
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm border border-white/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                <p className="text-lg text-slate-700 font-medium">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <button
                            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C+quero+evitar+problemas+com+vidros+na+minha+obra.+Pode+me+explicar+como+voc%C3%AAs+trabalham%3F`, '_blank')}
                            className="group flex items-center gap-3 bg-[linear-gradient(110deg,#16a34a,45%,#22c55e,55%,#16a34a)] bg-[length:200%_100%] animate-shimmer-pulse text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-green-500/30 transform hover:-translate-y-1"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Evite dor de cabeça na obra
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="bg-strass-gray border border-strass-border p-10 rounded-2xl relative shadow-lg">
                    <div className="absolute -top-6 -left-6 text-6xl opacity-20 text-strass-blue">"</div>
                    <h3 className="text-2xl font-semibold mb-4 text-strass-blue">
                        O problema não é o vidro.
                    </h3>
                    <p className="text-xl text-strass-alert font-bold">
                        👉 É quem não assume responsabilidade depois que instala.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Problem;
