// components/NewsHighlights.js

import Link from 'next/link';
import NewsHighlightCard from './NewsHighlightCard'; 
// 🚨 CORREÇÃO: Importa a lista de notícias do novo arquivo centralizado
import { ALL_NEWS_DATA } from '../data/newsData'; 

const NewsHighlights = () => {
  
  // 🚨 CORREÇÃO: Pega apenas os 3 primeiros itens da lista centralizada 
  // O item 0 será a notícia real da Keeta que você adicionou
  const highlights = ALL_NEWS_DATA.slice(0, 3); 

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
            Últimas <span className="text-amber-500">Notícias</span> e Ações
        </h2>
        
        {/* Grid Responsivo para os Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map(news => ( // <-- Usa o array 'highlights'
            <NewsHighlightCard 
              key={news.slug} // Usando slug como chave (melhor que ID)
              title={news.title}
              summary={news.summary}
              imageUrl={news.imageUrl}
              date={news.date}
              slug={news.slug}
            />
          ))}
        </div>

        {/* Botão de Ver Todas as Notícias */}
        <div className="text-center mt-12">
          <Link 
            href="/noticias" 
            className="inline-block px-8 py-3 text-lg font-semibold uppercase tracking-wider 
                        border-2 border-amber-500 text-amber-500 rounded-sm 
                        hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Ver Todas as Notícias
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsHighlights;