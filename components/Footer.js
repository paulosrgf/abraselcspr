// components/Footer.js

import Link from 'next/link';
import Image from 'next/image'; 
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
      // 🚨 REMOVIDO: Área do Associado
    ]
  },
  { 
    title: 'Conteúdo', 
    links: [
      { name: 'Notícias', href: '/noticias' },
      { name: 'Parceiros', href: '/parceiros' }, 
      { name: 'Agenda de Eventos', href: '/eventos' },
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-10 mb-10">
          
          {/* Coluna 1: Logo e Social Media */}
          <div className="lg:col-span-1">
             <Link href="/" className="block mb-4">
                <Image
                    src="/logos/abrasel-verde.png" 
                    alt="ABRASEL"
                    width={180} 
                    height={60}
                />
            </Link>
            <p className="text-sm mb-4">Representando a força da gastronomia no Centro Sul do Paraná.</p>
            
            {/* Link do Instagram */}
            <div className="mt-4">
                <a 
                    href="https://www.instagram.com/abraselcentrosulpr/"
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
          
          {/* Informações de Contato (Sem Endereço Físico) */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Fale Conosco</h4>
            <address className="text-sm not-italic space-y-2">
                <p>Para suporte geral:</p>
                <p>E-mail: abraselcspr@gmail.com</p>
                <p className="mt-4 pt-2 border-t border-gray-700">
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