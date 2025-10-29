// app/noticias/page.js

import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import NewsHighlightCard from '../../components/NewsHighlightCard';
import { ALL_NEWS_DATA } from '../../data/newsData'; // <-- NOVO IMPORT DOS DADOS
import Link from 'next/link';

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
<section className="py-20 bg-gray-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
            Acompanhe a <span className="text-green-700">ABRASEL Nacional</span>
        </h2>
        
        <div className="w-full h-[600px] bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* 🚨 Integração via iFrame - Direciona para o site nacional */}
            <iframe 
                src="https://abrasel.com.br/noticias/" 
                title="Notícias da Abrasel Nacional"
                className="w-full h-full border-0"
                loading="lazy"
            >
            </iframe>
        </div>

        <p className="text-center text-gray-500 mt-4 text-sm">
            Conteúdo fornecido pelo site oficial da Abrasel (Nacional).
        </p>

    </div>
</section>
      </main>
      <Footer />
    </>
  );
}