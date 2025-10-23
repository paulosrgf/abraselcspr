// app/noticias/page.js

import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import NewsHighlightCard from '../../components/NewsHighlightCard';
import { ALL_NEWS_DATA } from '../../data/newsData'; // <-- NOVO IMPORT DOS DADOS

export default function NoticiasPage() {
  // A lista de notícias agora vem do arquivo centralizado
  const ALL_NEWS_DATA_LIST = ALL_NEWS_DATA;

  return (
    <>
      <Header />
      <main className="bg-gray-900 text-white min-h-screen">
        
        {/* Banner Simples de Título */}
        <section className="bg-black py-12 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-extrabold text-white">
                    Todas as <span className="text-amber-500">Notícias</span>
                </h1>
                <p className="text-gray-400 mt-2">Fique por dentro das últimas ações e eventos da ABRASEL Centro Sul do Paraná.</p>
            </div>
        </section>

        {/* Lista de Notícias em Grid */}
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ALL_NEWS_DATA_LIST.map(news => ( // <-- USANDO A LISTA CENTRALIZADA
                        <NewsHighlightCard 
                            key={news.slug}
                            title={news.title}
                            summary={news.summary}
                            imageUrl={news.imageUrl}
                            date={news.date}
                            slug={news.slug}
                        />
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}