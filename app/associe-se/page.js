// app/associe-se/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AssociationForm from '../../components/AssociationForm';
import BenefitsSection from '../../components/BenefitsSection';
import Image from 'next/image'; 
import { MessageCircle, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = "5542999172322"; 
const WHATSAPP_MESSAGE = "Olá, gostaria de saber mais sobre como associar meu estabelecimento à ABRASEL Centro Sul do Paraná.";
const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function AssocieSePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      {/* Banner de Título Padronizado */}
      <section className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-10">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none flex flex-wrap items-center gap-4">
            Associe-se à
            <Image
              src="/logos/abrasel-verde.png" 
              alt="ABRASEL"
              width={180}
              height={40}
              className="h-10 md:h-12 w-auto object-contain"
              priority 
            />
          </h1>
          <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-3xl leading-relaxed">
            Junte-se à maior entidade de bares e restaurantes da região e tenha acesso a ferramentas exclusivas para fortalecer seu negócio.
          </p>
        </div>
      </section>

      {/* CTA WHATSAPP - Card Flutuante Moderno */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-green-900/5 border border-green-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prefere um atendimento <span className="text-green-700">rápido?</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Inicie seu processo de associação agora mesmo conversando diretamente com nossa equipe técnica pelo WhatsApp.
            </p>
          </div>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-black uppercase tracking-wider 
                       bg-green-700 text-white rounded-2xl hover:bg-green-600 transition-all 
                       transform hover:scale-105 shadow-lg shadow-green-700/20 gap-3"
          >
            <MessageCircle size={28} />
            CONVERSAR AGORA
          </a>
        </div>
      </section>
      
      {/* BENEFÍCIOS (A Seção Persuasiva) */}
      <div className="bg-white py-12">
        <BenefitsSection />
      </div>

      {/* FORMULÁRIO DE CONTATO (Backup) */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-700 font-black text-xs uppercase tracking-[0.3em]">Ou se preferir</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 tracking-tighter uppercase">
            Envie seus <span className="text-green-700">dados</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Preencha o formulário abaixo e um de nossos consultores entrará em contato em até 24h.
          </p>
        </div>
        
        {/* Container do Formulário */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-gray-100">
          <AssociationForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}