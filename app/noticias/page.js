// app/noticias/page.js
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import { ExternalLink, Globe } from 'lucide-react';

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]"> {/* Fundo claro e moderno */}
      <Header />
      
      {/* Cabeçalho da Página */}
      <section className="pt-16 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
              Notícias <span className="text-green-700">Nacionais</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg md:text-xl leading-relaxed">
              Fique por dentro das principais notícias do setor de alimentação fora do lar em todo o Brasil.
            </p>
          </div>
          
          {/* Badge de Origem */}
          <div className="flex items-center gap-2 text-green-700 bg-green-50 px-4 py-2 rounded-full border border-green-100 text-sm font-bold self-start md:self-end">
            <Globe size={16} />
            <span>Portal Abrasel Nacional</span>
          </div>
        </div>
      </section>

      {/* Seção Principal: Portal Integrado */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center px-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Atualizado em tempo real</span>
            <a 
              href="https://abrasel.com.br/noticias/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-bold text-green-700 hover:text-amber-500 flex items-center transition-colors"
            >
              Ver no site oficial <ExternalLink size={14} className="ml-1" />
            </a>
          </div>

          {/* Container do iFrame com Design Moderno */}
          <div className="w-full h-[800px] bg-white rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 relative">
            <iframe 
                src="https://abrasel.com.br/noticias/" 
                title="Notícias da Abrasel Nacional"
                className="w-full h-full border-0"
                loading="lazy"
            >
            </iframe>
          </div>
          
          <p className="text-center text-gray-400 mt-6 text-sm italic">
            O conteúdo acima é uma integração direta do portal nacional da Associação Brasileira de Bares e Restaurantes.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}