// app/noticias/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewsHighlightCard from '../../components/NewsHighlightCard';
import { ALL_NEWS_DATA } from '../../data/newsData';
import { ExternalLink, Globe, MapPin } from 'lucide-react';

export default function NoticiasPage() {
  const regionalNews = ALL_NEWS_DATA.filter((item) => item.source === 'regional');

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />

      {/* Cabeçalho da Página */}
      <section className="pt-16 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
              Notícias <span className="text-green-700">&amp; Ações</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg md:text-xl leading-relaxed">
              Acompanhe os relatórios e ações da Abrasel Centro-Sul do Paraná e as notícias do setor em todo o Brasil.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            <span className="inline-flex items-center gap-1.5 text-green-800 bg-green-100 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
              <MapPin size={14} />
              Abrasel CSPR
            </span>
            <span className="inline-flex items-center gap-1.5 text-gray-700 bg-white px-4 py-2 rounded-full border border-gray-200 text-xs font-bold uppercase tracking-wider">
              <Globe size={14} />
              Abrasel Nacional
            </span>
          </div>
        </div>
      </section>

      {/* Bloco 1: Publicações Regionais (Abrasel CSPR) */}
      {regionalNews.length > 0 && (
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-green-700">
                Publicações Regionais
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mt-1">
                Abrasel Centro-Sul PR
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionalNews.map((news) => (
              <NewsHighlightCard
                key={news.slug}
                title={news.title}
                summary={news.summary}
                imageUrl={news.imageUrl}
                date={news.date}
                slug={news.slug}
                source={news.source}
                sourceLabel={news.sourceLabel}
                variant="light"
              />
            ))}
          </div>
        </section>
      )}

      {/* Bloco 2: Portal Integrado Abrasel Nacional */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-14 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
            <div>
              <div className="inline-flex items-center gap-2 text-green-700 bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100 text-xs font-bold uppercase tracking-wider mb-3">
                <Globe size={14} />
                <span>Portal Abrasel Nacional</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                Notícias Nacionais
              </h2>
            </div>

            <a
              href="https://abrasel.com.br/noticias/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-green-700 hover:text-amber-500 flex items-center transition-colors"
            >
              Ver no site oficial <ExternalLink size={14} className="ml-1" />
            </a>
          </div>

          <div className="w-full h-[800px] bg-white rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 relative">
            <iframe
              src="https://abrasel.com.br/noticias/"
              title="Notícias da Abrasel Nacional"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <p className="text-center text-gray-400 mt-4 text-sm italic">
            O conteúdo acima é uma integração direta do portal nacional da Associação Brasileira de Bares e Restaurantes.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}