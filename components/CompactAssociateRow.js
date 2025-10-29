// components/CompactAssociateRow.js

import Link from 'next/link';
// Utensils para Especialidade, ArrowRight para CTA
import { Search, Instagram, Utensils, ArrowRight } from 'lucide-react'; 

const CompactAssociateRow = ({ name, specialty, city, searchQuery, socialLink }) => {
  
  // Define o link principal de ação
  const actionLink = socialLink 
    ? socialLink 
    : `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;

  const ActionIcon = ArrowRight; // Ícone de Seta para 'Saber Mais'
  const ctaText = "Saber Mais"; 

return (
    <div className="border-b border-gray-700/50 py-4 hover:bg-gray-800/50 transition duration-300">
      {/* 🚨 CORREÇÃO DO LAYOUT: Agora com grid-cols-4 e ajustes nos col-span */}
      <div className="grid grid-cols-4 items-center gap-4 px-4 sm:px-6">
        
        {/* Coluna 1: Estabelecimento (Ocupa a 1ª Coluna, não precisa de span para desktop) */}
        <div className="col-span-2 md:col-span-1"> 
          <span className="text-lg font-semibold text-white">
            {name}
          </span>
          {/* Removido specialty daqui, pois agora ele tem sua própria coluna para alinhamento */}
        </div>

        {/* Coluna 2: Cidade (Visível em desktop) */}
        <div className="hidden md:block text-gray-300 text-sm">
          {city}
        </div>

        {/* Coluna 3: Especialidade (Visível em desktop) */}
        <div className="hidden md:flex items-center text-gray-300 text-sm">
            <Utensils className="w-4 h-4 mr-2 text-amber-500" />
            {specialty}
        </div>
        
        {/* Coluna 4: Botão de Ação (Alinhado à direita) */}
        <div className="col-span-2 md:col-span-1 text-right"> 
          <a 
            href={actionLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-full 
                       bg-green-700 text-white hover:bg-green-600 transition"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            {ctaText} 
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default CompactAssociateRow;