// components/PartnerGrid.js

import Link from 'next/link';
import Image from 'next/image';
import { Handshake } from 'lucide-react';

const PARTNERS = [
  { name: 'Coca-Cola Brasil', url: 'https://www.cocacolabrasil.com.br/', logoUrl: '/logos/coca_cola.png' },
  { name: 'GetNet', url: 'https://site.getnet.com.br/', logoUrl: '/logos/getnet_1.png' },
  { name: 'Caixa Econômica', url: 'https://www.caixa.gov.br/', logoUrl: '/logos/caixa_1.png' },
  { name: 'Embratur', url: 'https://embratur.com.br/', logoUrl: '/logos/embratur_1.jpg' },
  { name: 'Heineken', url: 'https://www.heinekenbrasil.com.br/', logoUrl: '/logos/heineken_1.png' },
  { name: 'iFood', url: 'https://www.ifood.com.br/', logoUrl: '/logos/ifood_1.png' },
  { name: 'Nogueira Brinquedos', url: 'https://nogueirabrinquedos.com.br/', logoUrl: '/logos/nogueira_brinquedos.png' },
  { name: 'Pluxee', url: 'https://www.pluxee.com.br/', logoUrl: '/logos/pluxee_1.png' },
  { name: 'Safrapay', url: 'https://www.safrapay.com.br/', logoUrl: '/logos/safrapay_1.png' },
  { name: 'Mundo Mesa', url: 'https://www.mundomesa.com.br/', logoUrl: '/logos/mundo_mesa.png' },
  { name: 'Ticket (Edenred)', url: 'https://www.ticket.com.br/', logoUrl: '/logos/ticket_1.png' },
  { name: 'Alelo', url: 'https://www.alelo.com.br/', logoUrl: '/logos/alelo_2.png' },
  { name: 'BAT Brasil', url: 'https://www.batbrasil.com/', logoUrl: '/logos/bat_brasil.png' },
  { name: 'Ambev', url: 'https://www.ambev.com.br/', logoUrl: '/logos/ambev.png' },
  { name: 'SEBRAE', url: 'https://sebrae.com.br/', logoUrl: '/logos/sebrae.png' },
];

const PartnerGrid = () => {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-black uppercase tracking-widest mb-4">
            <Handshake size={14} />
            Parceiros Oficiais
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase leading-none">
            Nossa <span className="text-green-700">Rede</span> de Apoio
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Grid de Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {PARTNERS.map((partner) => (
            <Link 
              key={partner.name} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-full h-40 p-8 bg-white rounded-[2rem] flex items-center justify-center 
                         border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-700/30 
                         transition-all duration-500 transform hover:-translate-y-2"
              aria-label={`Visitar site de ${partner.name}`}
            >
              <div className="relative w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100">
                <Image 
                  src={partner.logoUrl} 
                  alt={partner.name} 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 20vw" 
                />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <p className="text-gray-400 text-sm italic font-medium max-w-2xl mx-auto leading-relaxed">
            Trabalhamos em conjunto com as maiores marcas do país para fortalecer a gastronomia no Centro Sul do Paraná.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PartnerGrid;