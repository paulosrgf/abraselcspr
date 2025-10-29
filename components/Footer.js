// components/Footer.js

// 'use client'; // 🚨 REMOVIDO: Não precisamos mais de 'use client' se tirarmos o useState
// 🚨 REMOVIDO: import { useState } from 'react';
// 🚨 REMOVIDO: import { Send } from 'lucide-react'; 

import Link from 'next/link';
// Importamos o Instagram para o link social
import { Instagram } from 'lucide-react'; 

// Dados de navegação
const footerNav = [
  { 
    title: 'ABRASEL', 
    links: [
      { name: 'Quem Somos', href: '/institucional' },
      { name: 'Gestão Atual', href: '/institucional#gestao' },
      { name: 'Missão & Visão', href: '/institucional#missao' },
    ]
  },
  { 
    title: 'Serviços', 
    links: [
      { name: 'Associe-se (WhatsApp)', href: '/associe-se' }, 
      { name: 'Encontre Associados', href: '/associados' },
      { name: 'Área do Associado', href: '/login' },
    ]
  },
  { 
    title: 'Conteúdo', 
    links: [
      { name: 'Notícias', href: '/noticias' },
      { name: 'Parceiros', href: '/parceiros' }, // Adicionado Parceiros aqui
      { name: 'Agenda de Eventos', href: '/eventos' },
    ]
  }
];

const Footer = () => {
    // 🚨 REMOVIDO: Lógica do handleSubmit, useState, etc.

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* 🚨 NOVA ESTRUTURA: COLUNAS DE INFO E LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-10 mb-10">
          
          {/* Coluna 1: Logo e Social Media */}
          <div className="lg:col-span-1">
             <Link href="/" className="text-2xl font-serif uppercase tracking-widest block mb-4 inline-flex items-center">
                {/* Logo ABRASEL com cores customizadas */}
                <span className="inline-flex">
                    <span className="text-white">A</span>
                    <span className="text-green-700">B</span>
                    <span className="text-amber-500">R</span>
                    <span className="text-white">A</span>
                    <span className="text-white">S</span>
                    <span className="text-white">EL</span>
                </span>
                <span className="text-white ml-2">CSPR</span>
            </Link>
            <p className="text-sm mb-4">Representando a força da gastronomia no Centro Sul do Paraná.</p>
            
            {/* 🚨 NOVO: Link do Instagram */}
            <div className="mt-4">
                <a 
                    href="https://instagram.com/abraselcspr" // Link do Instagram da ABRASEL
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-amber-500 transition"
                    aria-label="Instagram da ABRASEL Centro Sul do Paraná"
                >
                    <Instagram className="w-8 h-8" />
                </a>
            </div>

          </div>

          {/* Colunas 2, 3 e 4: Links de Navegação e Informações de Contato */}
          {footerNav.map((col, index) => (
            <div key={index}>
              <h4 className="text-white text-lg font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-amber-500 transition duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Nova Coluna para Endereço/Contato Físico (Opcional, se houver espaço) */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Entre em Contato</h4>
            <address className="text-sm not-italic space-y-2">
                <p>Rua Exemplo, 1234 - Sala 101</p>
                <p>Centro, Guarapuava - PR</p>
                <p>E-mail: contato@abraselcspr.com.br</p>
                <p className="mt-4">
                    <Link href="/associe-se" className="text-green-500 hover:text-green-400 font-semibold underline">
                        Atendimento Rápido (WhatsApp)
                    </Link>
                </p>
            </address>
          </div>
        </div>

        {/* Rodapé Final com Direitos Autorais e Logos */}
        <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} ABRASEL Centro Sul do Paraná. Todos os direitos reservados.
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;