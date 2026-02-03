import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Projetos', href: '#projetos' },
        { name: 'Diferenciais', href: '#diferenciais' },
        { name: 'Quem Atendemos', href: '#quem-atendemos' },
        { name: 'Contato', href: '#contato' }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-strass-blue/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center">
                    <img
                        src="/logo/logo-strasglass-horizontal-curvas.png"
                        alt="Strass Glass"
                        className="h-10 w-auto brightness-0 invert"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <button
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')}
                        className="hidden lg:flex items-center gap-2 bg-strass-accent hover:bg-white text-strass-blue px-6 py-2.5 rounded-md font-bold transition-all duration-300 transform hover:scale-105"
                    >
                        Orçamento
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-strass-blue border-b border-white/10 absolute top-20 left-0 right-0 p-6 animate-fade-in">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-lg text-slate-300 hover:text-white py-2 border-b border-white/5"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')}
                            className="flex items-center justify-center gap-2 bg-strass-accent text-strass-blue px-6 py-3 rounded-md font-bold hover:bg-white transition-colors"
                        >
                            Solicitar Orçamento
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
