// app/noticias/[slug]/page.js

// Correção dos caminhos de importação para subir 3 níveis (da rota dinâmica)
import Header from '../../../components/Header'; 
import Footer from '../../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// Importa os dados centralizados
import { ALL_NEWS_DATA } from '../../../data/newsData'; 

// Componente principal da página. Recebe o 'params' da URL.
export default function NewsArticlePage({ params }) {
  const { slug } = params;
  
  // 1. Aplica o toLowerCase() no slug da URL para garantir que a busca não seja case-sensitive
  const cleanSlug = slug.toLowerCase(); 

  // 2. Busca a notícia: compara o slug da URL com o slug nos dados
  const article = ALL_NEWS_DATA.find(item => item.slug.toLowerCase() === cleanSlug);

  // Tratamento caso a notícia não seja encontrada
  if (!article) {
    return (
      <>
        <Header />
        <main className="bg-gray-950 text-white min-h-screen py-20 text-center">
            <h1 className="text-4xl font-extrabold text-amber-500">Notícia Não Encontrada (404)</h1>
            <p className="text-gray-400 mt-4">A notícia que você procurava pode ter sido removida.</p>
            <Link href="/noticias" className="mt-6 inline-block text-amber-500 hover:text-amber-400 underline">
                &larr; Voltar para a lista de notícias
            </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen">
        
        {/* Banner com a Imagem de Destaque */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image 
            src={article.imageUrl} 
            alt={article.title} 
            fill 
            className="object-cover"
            sizes="100vw"
          />
          
          {/* Overlay Escuro com Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent"></div>

          {/* Conteúdo do Título */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
            <p className="text-sm text-amber-500 uppercase font-semibold mb-2">{article.date}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {article.title}
            </h1>
            <p className="text-gray-400 mt-2">Por: {article.author}</p>
          </div>
        </section>

        {/* Corpo do Artigo */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Renderização de parágrafos com destaque para o CTA final */}
            {article.content.map((paragraph, index) => {
                // Checa se é o último parágrafo e contém a frase de associação
                const isFinalCTA = index === article.content.length - 1 && paragraph.includes('associado Abrasel');

                if (isFinalCTA) {
                    return (
                        <div key={index} className="mt-10 p-6 bg-gray-800 rounded-lg border-l-4 border-amber-500 shadow-lg text-center">
                            <Link href="/associe-se" className="text-xl font-bold text-amber-500 hover:text-amber-400 transition">
                                {paragraph}
                            </Link>
                        </div>
                    );
                }

                return (
                    <p key={index} className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {paragraph}
                    </p>
                );
            })}
            
          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}