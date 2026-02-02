import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">STRASS GLASS</h3>
                    <p className="text-slate-400">Soluções em Vidros e Esquadrias Comerciais</p>
                </div>

                <div className="text-sm text-slate-500 text-center md:text-right">
                    <p>© {new Date().getFullYear()} Strass Glass. Todos os direitos reservados.</p>
                    <p className="mt-1">Maringá • Sarandi • Marialva • Londrina</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
