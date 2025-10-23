// app/noticias/page.js

// Usamos os mesmos componentes comuns em todas as páginas
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import NewsHighlightCard from '../../components/NewsHighlightCard';

// Reutilizamos os dados de exemplo (aqui a lista seria muito maior na prática)
const ALL_NEWS_DATA = [
  // AQUI VOCÊ ADICIONARIA TODAS AS SUAS NOTÍCIAS
  { id: 1, title: 'ABRASEL Lança Campanha "Sabor Solidário"', summary: 'A nova iniciativa visa arrecadar fundos...', imageUrl: 'https://images.unsplash.com/photo-1517248135465-4d2d1f70d2b0?q=80&w=2670&auto=format', date: '25 DE OUTUBRO', slug: 'sabor-solidario' },
  { id: 2, title: 'Novos Associados Impulsionam a Gastronomia', summary: 'Conheça os 5 novos restaurantes...', imageUrl: 'https://images.unsplash.com/photo-1555547631-f155986927d2?q=80&w=2670&auto=format', date: '20 DE OUTUBRO', slug: 'novos-associados' },
  { id: 3, title: 'Workshop de Inovação em Serviços', summary: 'Confira os destaques do evento...', imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7e868?q=80&w=2670&auto=format', date: '10 DE OUTUBRO', slug: 'workshop-inovacao' },
  { id: 4, title: 'Feira Gastronômica Regional', summary: 'Mais de 30 estabelecimentos confirmados no maior evento de culinária da região.', imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e684?q=80&w=2670&auto=format', date: '01 DE OUTUBRO', slug: 'feira-gastronomica' },
];

export default function NoticiasPage() {
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
                    {ALL_NEWS_DATA.map(news => (
                        <NewsHighlightCard // Reutilizamos o Card!
                            key={news.id}
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

        {/* Aqui seria o espaço para Paginação */}

      </main>
      <Footer />
    </>
  );
}