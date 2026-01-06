// app/page.js
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ConexaoAbrasel from '../components/ConexaoAbrasel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Cabeçalho */}
      <Header />
      
      {/* Carrossel com imagens locais (Passo anterior) */}
      <HeroSection />
      
      {/* Seção Conexão Abrasel (Substituindo Associados em Destaque) */}
      <ConexaoAbrasel />
      
      {/* Seção de Chamada para Ação Final (Opcional) */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Faça parte da maior rede de gastronomia do Brasil
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Associe sua empresa à Abrasel Centro Sul do Paraná e tenha acesso a benefícios exclusivos, 
            representatividade política e suporte jurídico.
          </p>
          <a 
            href="/associe-se" 
            className="bg-amber-500 text-black font-extrabold px-12 py-4 rounded-full text-lg hover:bg-amber-400 transition-all shadow-lg"
          >
            QUERO ME ASSOCIAR AGORA
          </a>
        </div>
      </section>
      
      {/* Rodapé */}
      <Footer />
    </main>
  );
}