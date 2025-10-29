// components/AssociateCard.js

import Link from 'next/link';
import Image from 'next/image';
// Ícone ArrowRight (Seta) para 'Saber Mais'
import { Search, Instagram, ArrowRight } from 'lucide-react'; 

// Recebe searchQuery e socialLink
const AssociateCard = ({ name, specialty, imageUrl, city, searchQuery, socialLink }) => {
  
  // Define o link principal de ação: prioriza Google Search, usa Instagram como fallback.
  const actionLink = socialLink 
    ? socialLink 
    : `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
  
  // Define o ícone de contexto para a animação
  const ContextIcon = socialLink ? Instagram : Search;
  const ctaText = "Saber Mais"; // CTA único

  return (
    // Usa <a> para links externos
    <a 
      href={actionLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group relative rounded-lg overflow-hidden shadow-2xl transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-green-700/50" 
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
        
        <h3 className="text-3xl font-serif text-white mb-1 leading-tight">
          {name}
        </h3>
        
        <p className="text-amber-500 font-semibold uppercase text-sm mb-2">
          {specialty} - {city}
        </p>
        
        {/* Botão de Ação Sutil */}
        <span className="inline-flex items-center mt-2 text-sm text-green-500 font-medium group-hover:text-green-400">
          <ArrowRight className="w-4 h-4 mr-1" />
          {ctaText}
        </span>
      </div>
    </a>
  );
};

export default AssociateCard;