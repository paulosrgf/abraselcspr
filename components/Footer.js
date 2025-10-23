// components/Footer.js

'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react'; 

// Dados de navegação (REMOVIDO 'Contato' da lista)
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
      { name: 'Associe-se (WhatsApp)', href: '/associe-se' }, // Renomeado o link para o novo foco
      { name: 'Encontre Associados', href: '/associados' },
      { name: 'Área do Associado', href: '/login' },
    ]
  },
  { 
    title: 'Conteúdo', 
    links: [
      { name: 'Notícias', href: '/noticias' },
      { name: 'Eventos', href: '/eventos' },
      { name: 'Fale Conosco', href: '/associe-se' }, // Direcionando para a página de contato (WhatsApp)
    ]
  }
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Aqui viria a lógica real de envio para o seu backend (API)
    console.log('Inscrição:', { nome, email });
    alert(`Obrigado, ${nome}! Seu e-mail (${email}) foi registrado para a newsletter.`);
    setEmail('');
    setNome('');
  };

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* 1. Newsletter e Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-b border-gray-800 pb-10 mb-10">
          
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
             {/* Logo com as cores CORRIGIDAS (B verde-escuro, R laranja) e sem espaçamento */}
             <Link 
                href="/" 
                className="text-2xl font-serif uppercase tracking-widest block mb-4 inline-flex items-center"
              >
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
            <p className="text-sm">Representando a força da gastronomia no Centro Sul do Paraná.</p>
          </div>

          {/* Seção de Newsletter */}
          <div className="lg:col-span-3">
             <h4 className="text-white text-lg font-bold mb-4">Assine Nossa Newsletter</h4>
             <p className="text-sm mb-4">Receba novidades, eventos e insights direto no seu e-mail.</p>

             <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full sm:w-1/3 p-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-1/3 p-3 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center p-3 bg-amber-600 text-black font-semibold rounded hover:bg-amber-500 transition"
                >
                  <Send className="w-5 h-5 mr-2" /> Assinar
                </button>
             </form>
          </div>
        </div>


        {/* 2. Links de Navegação e Contato */}
       <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10"> {/* <-- MUDANÇA: md:grid-cols-3 */}
    
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

          {/* Informações de Contato */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contato</h4>
            <address className="text-sm not-italic space-y-2">
                <p>Rua Exemplo, 1234 - Sala 101</p>
                <p>Centro, Guarapuava - PR, 85010-000</p>
                <p>E-mail: <a href="mailto:contato@abraselcspr.com.br" className="hover:text-amber-500">contato@abraselcspr.com.br</a></p>
                <p>Telefone: (42) 99999-9999</p>
            </address>
          </div>

        </div>

        {/* 3. Rodapé Final com Direitos Autorais e Logos */}
        <div className="text-center pt-8 border-t border-gray-800">
            <div className="flex justify-center space-x-6 mb-4">
                <div className="w-20 h-10 bg-gray-700 flex items-center justify-center text-xs text-white rounded">Logo Parceiro</div>
                <div className="w-20 h-10 bg-gray-700 flex items-center justify-center text-xs text-white rounded">Certificado</div>
            </div>
            
            <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} ABRASEL Centro Sul do Paraná. Todos os direitos reservados.
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;