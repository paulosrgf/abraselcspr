// components/NewsHighlightCard.js

import Link from 'next/link';
import Image from 'next/image'; 

// Este é um Client Component se for usar fill, embora a Image atual do Next.js 
// no App Router seja mais flexível. Para segurança, se for usar interatividade, adicione:
// 'use client'; 

// Receberá os detalhes da notícia/evento via 'props' (propriedades)
const NewsHighlightCard = ({ title, summary, imageUrl, date, slug }) => {
  return (
    <Link href={`/noticias/${slug}`} className="block group transition duration-300 ease-in-out hover:scale-[1.03]">
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden h-full">
        
        {/* Imagem de Destaque */}
        <div className="relative h-48 w-full">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill // Ocupa todo o div pai
            className="object-cover group-hover:opacity-80 transition duration-300" 
            sizes="(max-width: 768px) 100vw, 33vw" // Para otimização de imagem
          />
        </div>

        {/* Conteúdo do Card */}
        <div className="p-5">
          <p className="text-xs text-amber-500 uppercase font-semibold mb-1">{date}</p>
          
          {/* Título da Notícia */}
          <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition duration-300 mb-2 line-clamp-2">
            {title}
          </h3>
          
          {/* Resumo da Notícia */}
          <p className="text-gray-400 text-sm line-clamp-3">
            {summary}
          </p>
          
          {/* Linha de Leitura */}
          <p className="mt-4 text-sm text-amber-500 font-medium group-hover:text-amber-400">
            Leia Mais &rarr;
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsHighlightCard;