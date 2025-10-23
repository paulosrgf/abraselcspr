// components/PartnerGrid.js

import Link from 'next/link';
import Image from 'next/image';

// 🚨 Dados dos Parceiros (Substitua os 'logoUrl' pelos caminhos para os logos na sua pasta 'public/logos')
const PARTNERS = [
  { name: 'Souza Cruz', url: 'https://www.batbrasil.com/', logoUrl: '/logos/souzacruz.png' },
  { name: 'Prazeres da Mesa', url: 'https://prazeresdamesa.uol.com.br/', logoUrl: '/logos/prazeresdamesa.jpg' },
  { name: 'Sodexo', url: 'https://www.sodexobeneficios.com.br/', logoUrl: '/logos/sodexo.png' },
  { name: 'Philip Morris Brasil', url: 'https://www.pmi.com/', logoUrl: '/logos/philipmorris.png' },
  { name: 'Bares & Restaurantes', url: 'https://www.bareserestaurantes.com.br/', logoUrl: '/logos/bareserestaurantes.jpg' },
  { name: 'Ambev', url: 'https://www.ambev.com.br/', logoUrl: '/logos/ambev.png' },
  { name: 'Ecolab', url: 'https://www.ecolab.com/pt-BR', logoUrl: '/logos/ecolab.svg' },
  { name: 'SEBRAE', url: 'https://sebrae.com.br/', logoUrl: '/logos/sebrae.png' },
];

const PartnerGrid = () => {
  return (
    <section className="py-20 bg-gray-900"> {/* Aumentando o padding vertical */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <h2 className="text-4xl font-extrabold text-white mb-16 text-center">
          Nossos <span className="text-amber-500">Parceiros</span> de <span className="text-green-500">Destaque</span>
        </h2>
        
        {/* 🚨 Grid de Logos com MÁXIMO DESTAQUE: 
           - Colunas reduzidas para 4 em desktop (lg:grid-cols-4)
           - Altura do card aumentada para h-56
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {PARTNERS.map((partner) => (
            <Link 
              key={partner.name} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              // CLASSE CORRIGIDA: w-full h-56 para máximo destaque
              className="w-full h-56 p-6 bg-gray-800 rounded-xl flex items-center justify-center 
                         border border-gray-700 hover:border-amber-500/80 
                         shadow-xl hover:shadow-amber-500/50 transition duration-300 transform hover:scale-[1.03]"
              aria-label={`Visitar site de ${partner.name}`}
            >
              {/* O p-6 no card reduz o padding interno, dando mais foco à imagem */}
              <div className="relative w-full h-full p-2">
                <Image 
                  src={partner.logoUrl} 
                  alt={partner.name} 
                  fill 
                  className="object-contain" // Garante que o logo caiba sem cortar
                  sizes="(max-width: 768px) 33vw, 25vw" 
                />
              </div>
            </Link>
          ))}
        </div>
        
        <p className="text-center text-gray-500 mt-20 text-sm"> {/* Aumentando margem superior */}
          Agradecemos a todos os parceiros que apoiam a ABRASEL Centro Sul do Paraná.
        </p>

      </div>
    </section>
  );
};

export default PartnerGrid;