// components/ConexaoAbrasel.js
import Link from 'next/link';

const ConexaoAbrasel = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Lado Esquerdo: Texto e Chamada */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-green-700 uppercase tracking-widest mb-2">
              Produtividade e Gestão
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Conexão Abrasel: O seu canal de inteligência
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O **Conexão Abrasel** é um ecossistema completo focado em aumentar a produtividade e os resultados do seu negócio. 
              Tenha acesso a mentorias, cursos exclusivos, inteligência artificial aplicada ao setor e planos de crescimento personalizados.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <span className="text-green-600 mr-2 font-bold text-xl">✓</span>
                <span className="text-gray-700">Plano de crescimento com IA</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 font-bold text-xl">✓</span>
                <span className="text-gray-700">Consultoria especializada</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 font-bold text-xl">✓</span>
                <span className="text-gray-700">Análise de mercado regional</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2 font-bold text-xl">✓</span>
                <span className="text-gray-700">Cursos de qualificação de equipe</span>
              </div>
            </div>
            
            <a 
              href="https://conexao.abrasel.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-700 text-white font-bold px-10 py-4 rounded-lg hover:bg-green-600 transition-all shadow-xl transform hover:scale-105"
            >
              Saiba Mais
            </a>
          </div>

          {/* Lado Direito: Vídeo do YouTube */}
          <div className="lg:w-1/2 w-full group">
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-50 transition-transform duration-500 group-hover:scale-[1.02]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/-zwTG8kT_Vg"
                title="Conexão Abrasel - Produtividade e Sucesso"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500 italic">
              Assista ao vídeo e descubra como revolucionar a gestão do seu estabelecimento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConexaoAbrasel;