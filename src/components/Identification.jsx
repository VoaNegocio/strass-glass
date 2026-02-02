import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, AlertTriangle, UserCheck } from 'lucide-react';

const Identification = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-strass-blue mb-4">Para quem responde pela obra</h2>
                    <p className="text-slate-600 text-lg">
                        Atendemos projetos onde alguém assina, coordena e precisa garantir entrega.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            icon: Calendar,
                            title: "Cronograma Definido",
                            text: "Para obras comerciais e industriais onde o prazo não é sugestão, é obrigação."
                        },
                        {
                            icon: AlertTriangle,
                            title: "Impacto Real",
                            text: "Onde o atraso gera multa, retrabalho ou pressão insuportável do cliente final."
                        },
                        {
                            icon: UserCheck,
                            title: "Responsabilidade",
                            text: "O fornecedor precisa responder (e resolver) após a instalação, sem sumir."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-strass-gray rounded-xl border border-strass-border hover:border-strass-blue/30 transition-colors"
                        >
                            <div className="w-12 h-12 bg-strass-blue/5 rounded-lg flex items-center justify-center mb-6">
                                <item.icon className="w-6 h-6 text-strass-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-strass-blue mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-strass-blue font-medium bg-blue-50 inline-block px-6 py-3 rounded-lg">
                        Se esse é o seu cenário, o atendimento da Strass Glass faz sentido.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Identification;
