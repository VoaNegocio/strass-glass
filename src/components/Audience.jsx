import React from 'react';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Audience = () => {
    return (
        <section className="py-24 bg-strass-blue text-white relative">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-8">Atendemos principalmente:</h2>
                    <ul className="space-y-4">
                        {[
                            "Engenheiros civis responsáveis por obras comerciais",
                            "Construtores e empreiteiros",
                            "Arquitetos à frente de projetos comerciais ou industriais",
                            "Empresas em fase de execução, ampliação ou retrofit"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-strass-accent/20 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-strass-accent" />
                                </div>
                                <span className="text-lg text-slate-100">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 p-6 bg-white/5 rounded-xl border border-white/10 mb-8">
                        <p className="text-slate-300 italic">
                            "O atendimento é técnico e voltado para decisão de obra, não para compra pontual de balcão."
                        </p>
                    </div>

                    <button
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C+sou+profissional+do+setor+%28Engenheiro%2FArquiteto%29+e+gostaria+de+discutir+uma+parceria+ou+obra.`, '_blank')}
                        className="group flex items-center gap-3 bg-[linear-gradient(110deg,#16a34a,45%,#22c55e,55%,#16a34a)] bg-[length:200%_100%] animate-shimmer-pulse text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-green-500/30 transform hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Sou profissional do setor
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    {/* Visual placeholder for Engineer/Construction site */}
                    <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply z-10"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>

                    <div className="absolute bottom-8 left-8 z-20">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                            <p className="font-bold text-white">Parceria Técnica</p>
                            <p className="text-sm text-slate-300">Do projeto à entrega</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Audience;
