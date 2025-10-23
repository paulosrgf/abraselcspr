// components/AssociateCard.js

'use client';

import Link from 'next/link';
import Image from 'next/image';

// Dados que o card receberá
const AssociateCard = ({ name, specialty, imageUrl, city, slug }) => {
  return (
    <Link 
      href={`/associados/${slug}`} 
      className="block group relative rounded-lg overflow-hidden shadow-2xl transition duration-300 ease-in-out hover:shadow-amber-500/50 hover:scale-[1.02]"
    >
      <div className="relative h-64 w-full">
        {/* Imagem do Restaurante */}
        <Image 
          src={imageUrl} 
          alt={name} 
          fill 
          className="object-cover transition duration-500 group-hover:opacity-80 group-hover:scale-105" 
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        
        {/* Overlay Escuro para Legibilidade */}
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition duration-500"></div>
      </div>

      {/* Conteúdo na parte inferior do Card */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent">
        
        {/* Nome do Restaurante */}
        <h3 className="text-3xl font-serif text-white mb-1 leading-tight">
          {name}
        </h3>
        
        {/* Especialidade e Cidade */}
        <p className="text-amber-500 font-semibold uppercase text-sm mb-2">
          {specialty} - {city}
        </p>
        
        {/* CTA (Chamada para Ação) sutil */}
        <span className="text-sm text-gray-300 group-hover:text-amber-500 transition duration-300">
          Ver Perfil &rarr;
        </span>
      </div>
    </Link>
  );
};

export default AssociateCard;