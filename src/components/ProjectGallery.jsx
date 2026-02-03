import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight, X } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const projects = [
    {
        id: 1,
        title: "Fachadas Comerciais",
        category: "Vidros de Alta Performance",
        image: "/projects/img1-grid.jpeg",
        size: "large"
    },
    {
        id: 2,
        title: "Interiores Corporativos",
        category: "Divisórias & Acabamentos",
        image: "/projects/img2-grid.jpeg",
        size: "normal"
    },
    {
        id: 3,
        title: "Engenharia de Detalhe",
        category: "Esquadrias de Precisão",
        image: "/projects/img3-grid.jpeg",
        size: "normal"
    },
    {
        id: 4,
        title: "Coberturas de Vidro",
        category: "Proteção & Estilo",
        image: "/projects/img4-grid.jpeg",
        size: "large"
    },
    {
        id: 5,
        title: "Lobbies Corporativos",
        category: "Acústica & Privacidade",
        image: "/projects/img5-grid.jpeg",
        size: "normal"
    },
    {
        id: 6,
        title: "Vãos Livres",
        category: "Grandes Formatos",
        image: "/projects/img6-grid.jpeg",
        size: "normal"
    },
    {
        id: 7,
        title: "Guarda-Corpos",
        category: "Segurança Certificada",
        image: "/projects/img7-grid.jpeg",
        size: "normal"
    },
    {
        id: 8,
        title: "Peles de Vidro",
        category: "Eficiência Energética",
        image: "/projects/img8-grid.jpeg",
        size: "normal"
    },
    {
        id: 9,
        title: "Fachadas em Vidro",
        category: "Profundidade e Design",
        image: "/projects/img9-grid.jpeg",
        size: "large"
    }
];

const ProjectGallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="py-24 bg-strass-blue relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Excelência em <span className="text-strass-accent">Obras Corporativas</span>
                    </h2>
                    <p className="text-lg text-slate-300">
                        Soluções técnicas em vidro e esquadrias para projetos que exigem precisão.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                            layoutId={`project-${project.id}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                layoutId={`image-${project.id}`}
                            />

                            <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-strass-accent text-xs font-bold uppercase tracking-widest mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <div className="h-1 w-12 bg-strass-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')}
                        className="group inline-flex items-center gap-3 bg-[linear-gradient(110deg,#16a34a,45%,#22c55e,55%,#16a34a)] bg-[length:200%_100%] animate-shimmer-pulse text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-green-500/30 transform hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Ver mais projetos no WhatsApp
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="relative max-w-5xl w-full bg-strass-blue/50 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            layoutId={`project-${selectedProject.id}`}
                        >
                            <button
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="h-[40vh] lg:h-[70vh] w-full overflow-hidden">
                                    <motion.img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                        layoutId={`image-${selectedProject.id}`}
                                    />
                                </div>

                                <div className="p-8 lg:p-12 flex flex-col justify-center text-left bg-strass-blue">
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-strass-accent text-sm font-bold uppercase tracking-widest mb-4 block"
                                    >
                                        {selectedProject.category}
                                    </motion.span>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                                    >
                                        {selectedProject.title}
                                    </motion.h3>

                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        transition={{ delay: 0.4 }}
                                        className="h-1 w-20 bg-strass-accent mb-8"
                                    />

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-slate-300 text-lg leading-relaxed mb-8"
                                    >
                                        Projeto desenvolvido com especificações técnicas rigorosas, garantindo conformidade com normas de segurança e desempenho acústico/térmico. A Strass Glass atua desde o detalhamento até a instalação final.
                                    </motion.p>

                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')}
                                        className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-[linear-gradient(110deg,#16a34a,45%,#22c55e,55%,#16a34a)] bg-[length:200%_100%] animate-shimmer-pulse text-white px-8 py-4 rounded-lg font-bold transition-all hover:shadow-green-500/30 transform hover:-translate-y-1"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Cotar projeto similar
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectGallery;
