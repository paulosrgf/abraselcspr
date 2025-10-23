// components/Header.js

'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Ícones

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lista dos links de navegação
  const navLinks = [
    { name: 'Notícias', href: '/noticias' },
    { name: 'Associados', href: '/associados' },
    { name: 'Associe-se', href: '/associe-se' },
    { name: 'Institucional', href: '/institucional' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Nome do Site */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-serif uppercase tracking-widest transition duration-300 inline-flex items-center" 
            >
              <span className="inline-flex">
                  <span className="text-white hover:text-gray-300">A</span>
                  <span className="text-green-700 hover:text-green-600">B</span> {/* B em Verde Escuro */}
                  <span className="text-amber-500 hover:text-amber-400">R</span> {/* R em Laranja */}
                  <span className="text-white hover:text-gray-300">A</span>
                  <span className="text-white hover:text-gray-300">S</span>
                  <span className="text-white hover:text-gray-300">E</span>
                  <span className="text-white hover:text-gray-300">L</span>
              </span>
              <span className="text-white hover:text-gray-300 ml-2">CSPR</span>
            </Link>
          </div>

          {/* Links para Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                    {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Botão do Menu (Apenas em telas pequenas) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                  {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;