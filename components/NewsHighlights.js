// components/NewsHighlights.js
import Link from 'next/link';
import NewsHighlightCard from './NewsHighlightCard';
import { ALL_NEWS_DATA } from '../data/newsData';

const NewsHighlights = () => {
  const highlights = ALL_NEWS_DATA.slice(0, 3);

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Últimas <span className="text-green-700">Notícias</span> e Ações
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((news) => (
            <NewsHighlightCard
              key={news.slug}
              title={news.title}
              summary={news.summary}
              imageUrl={news.imageUrl}
              date={news.date}
              slug={news.slug}
              source={news.source}
              sourceLabel={news.sourceLabel}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/noticias"
            className="inline-block px-8 py-3 text-base font-bold uppercase tracking-wider 
                        border-2 border-green-700 text-green-700 rounded-xl 
                        hover:bg-green-700 hover:text-white transition duration-300"
          >
            Ver Todas as Notícias
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsHighlights;