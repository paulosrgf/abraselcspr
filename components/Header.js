// components/Header.js

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Notícias', href: '/noticias' },
    { name: 'Associados', href: '/associados' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Institucional', href: '/institucional' },
    { name: 'Parceiros', href: '/parceiros' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo (Desktop e Mobile) */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logos/abrasel-verde.png" // NOVO CAMINHO
                                alt="ABRASEL"
                                width={130} 
                                height={40}
                                priority 
                            />
                        </Link>
                    </div>

                    {/* Menu de Navegação (Desktop) */}
                    <nav className="hidden md:flex md:space-x-8 h-full items-center">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                className="text-sm font-medium text-gray-300 hover:text-amber-500 transition duration-300 h-full flex items-center border-b-2 border-transparent hover:border-amber-500"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Botão de Associação (Desktop) */}
                    <div className="hidden md:block">
                        <Link 
                            href="/associe-se"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-green-700 hover:bg-green-600 transition duration-300"
                        >
                            Associe-se
                        </Link>
                    </div>

                    {/* Botão do Menu Mobile */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Abrir menu principal</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link 
                            href="/associe-se"
                            className="mt-2 block w-full px-3 py-2 text-center text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Associe-se
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;