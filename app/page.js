// app/page.js
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ConexaoAbrasel from '../components/ConexaoAbrasel';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <HeroSection />
      
      {/* SEÇÃO DE DESTAQUE: ABRASEIROS 2026 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Adicionei um fallback de cor caso a imagem falhe e ajustei o layout */}
          <div className="bg-[#1a1a1a] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch border-b-8 border-amber-600">
            
            {/* Imagem do Evento */}
            <div className="w-full md:w-1/2 relative min-h-[300px] bg-zinc-800">
              <Image 
                src="/images/eventos/logo-abraseiros-2026.jpeg" 
                alt="Abraseiros 2026"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8" // "object-contain" é melhor para LOGOS para não cortar as bordas
                priority
              />
            </div>

            {/* Conteúdo */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center text-white">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-amber-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full">
                  Destaque
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">
                O Texas chegou <br />
                <span className="text-amber-500">em Guarapuava</span>
              </h2>
              
              <div className="space-y-2 mb-10">
                <p className="text-xl font-bold text-gray-100 italic">
                  Churrasco, Country e Cerveja.
                </p>
                <p className="text-amber-500 font-black uppercase tracking-widest text-sm">
                  06 a 08 de Março | Centro de Eventos Agrária
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  href="/eventos" 
                  className="bg-amber-500 text-black font-black px-10 py-4 rounded-2xl text-lg hover:bg-white transition-all shadow-xl"
                >
                  VER MAIS DETALHES
                </Link>
                <span className="text-gray-500 font-black text-[10px] uppercase tracking-[0.2em]">#Abraseiros2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConexaoAbrasel />
      
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Faça parte da maior rede de gastronomia do Brasil
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Associe sua empresa à Abrasel Centro Sul do Paraná e tenha acesso a benefícios exclusivos.
          </p>
          <Link 
            href="/associe-se" 
            className="bg-amber-500 text-black font-extrabold px-12 py-4 rounded-full text-lg hover:bg-amber-400 transition-all shadow-lg inline-block"
          >
            QUERO ME ASSOCIAR AGORA
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}