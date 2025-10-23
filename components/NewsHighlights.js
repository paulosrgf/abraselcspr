// components/NewsHighlights.js

import Link from 'next/link';
import NewsHighlightCard from './NewsHighlightCard'; // Este import agora funcionará!

// Dados de exemplo para preencher a seção
const DUMMY_NEWS = [
  {
    id: 1,
    title: 'ABRASEL Lança Campanha "Sabor Solidário" em Guarapuava',
    summary: 'A nova iniciativa visa arrecadar fundos para famílias carentes através da gastronomia local.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135465-4d2d1f70d2b0?q=80&w=2670&auto=format',
    date: '25 DE OUTUBRO',
    slug: 'sabor-solidario'
  },
  {
    id: 2,
    title: 'Novos Associados Impulsionam a Gastronomia do Centro Sul',
    summary: 'Conheça os 5 novos restaurantes que se juntaram à ABRASEL em Pato Branco e Guarapuava.',
    imageUrl: 'https://images.unsplash.com/photo-1555547631-f155986927d2?q=80&w=2670&auto=format',
    date: '20 DE OUTUBRO',
    slug: 'novos-associados'
  },
  {
    id: 3,
    title: 'Workshop de Inovação em Serviços de Alimentação',
    summary: 'Confira os destaques do evento que trouxe as últimas tendências para bares e restaurantes da região.',
    imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7e868?q=80&w=2670&auto=format',
    date: '10 DE OUTUBRO',
    slug: 'workshop-inovacao'
  },
];

const NewsHighlights = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
            Últimas <span className="text-amber-500">Notícias</span> e Ações
        </h2>
        
        {/* Grid Responsivo para os Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_NEWS.map(news => (
            <NewsHighlightCard 
              key={news.id}
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