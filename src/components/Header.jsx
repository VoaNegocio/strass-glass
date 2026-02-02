import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Projetos', href: '#' },
        { name: 'Diferenciais', href: '#' },
        { name: 'Quem Atendemos', href: '#' },
        { name: 'Contato', href: '#' }
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
                        onClick={() => window.open('https://wa.me/5544999999999?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+r%C3%A1pido.', '_blank')}
                        className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-bold transition-all border border-white/20"
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
                            onClick={() => window.open('https://wa.me/5544999999999?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+r%C3%A1pido.', '_blank')}
                            className="bg-strass-accent text-white w-full py-3 rounded-lg font-bold mt-4"
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
