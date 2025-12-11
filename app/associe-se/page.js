// app/associe-se/page.js

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AssociationForm from '../../components/AssociationForm';
import BenefitsSection from '../../components/BenefitsSection';
import Image from 'next/image'; 

// Configuração do WhatsApp
const WHATSAPP_NUMBER = "5542999999999"; 
const WHATSAPP_MESSAGE = "Olá, gostaria de saber mais sobre como associar meu estabelecimento à ABRASEL Centro Sul do Paraná.";
const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


export default function AssocieSePage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen">
        
        {/* Banner de Título Principal */}
        <section className="bg-black py-16 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 🚨 CORRIGIDO: H1 Responsivo com Logo Proporcional */}
                <h1 className="text-[40px] md:text-[50px] font-extrabold text-white flex items-center leading-tight">
                    <span className="text-amber-500 mr-2">Associe-se à</span> 
                    
                    {/* Altura Fixa (h-10) e Proporção (object-contain) para evitar esticamento */}
                    <Image
                        src="/logos/abrasel-verde.png" 
                        alt="ABRASEL"
                        width={200} // Valor alto para o Next.js calcular o aspect ratio
                        height={40} // Altura que harmoniza com a linha de texto
                        className="h-10 w-auto object-contain" // 🚨 Classe Tailwind para corrigir a proporção
                        priority 
                    />
                </h1>
                <p className="text-gray-400 mt-3 text-xl">
                    Junte-se à maior entidade de bares e restaurantes da região e fortaleça seu negócio.
                </p>
            </div>
        </section>

        {/* SEÇÃO 1: BANNER DE WHATSAPP IMEDIATO (CTA Principal) */}
        <section className="py-16 bg-gray-950">
             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                <p className="text-2xl text-white font-semibold mb-6">
                    Seu processo de associação começa aqui, de forma rápida e direta:
                </p>

                <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-12 py-5 text-2xl font-bold uppercase tracking-wider 
                               bg-green-700 text-white rounded-xl 
                               hover:bg-green-600 transition duration-300 transform hover:scale-[1.02] shadow-2xl"
                >
                    {/* Ícone WhatsApp em SVG puro */}
                    <svg className="w-8 h-8 mr-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M380.9 97.1C339.4 56.7 283.4 34 223.7 34c-122.9 0-222.8 99.9-222.8 222.8 0 39.8 10.4 78.4 30.2 112.5L3.9 459.7l126.3-33.1c32.7 17.6 69.4 27.2 106.8 27.2h0c122.8 0 222.7-99.9 222.7-222.7.1-59.3-23-116.1-66.2-159.2zm-123 322c-29.3 0-56.5-7.9-80.4-22.6l-5.3-3.1-53.9 14.2 14.5-52.4-3.4-5.5c-15.6-25-24-54.6-24-87.1 0-82.6 67-149.6 149.6-149.6 40.2 0 77.8 15.7 106.2 44.1 28.5 28.5 44.1 66.1 44.1 106.3 0 82.6-67 149.6-149.6 149.6zm51.7-184.8c-2.3-1.1-13.7-6.8-15.8-7.6s-3.7-1.1-5.2 1.1c-1.5 2.3-5.9 7.6-7.2 9.1s-2.7 1.7-5 0.6c-2.3-1.1-9.7-3.6-18.4-11.4s-14.7-18.9-16.3-21.7c-1.5-2.7-.2-4.1 1-5.2 1-1.1 2.3-2.6 3.4-3.9s1.5-2.3 2.3-3.9c.8-1.5.4-2.7 0-3.9-1.5-3.4-5-8.3-6.9-12.2s-3.8-11.2-5.2-14.2c-1.1-2.7-2.3-2.3-4.1-2.3-1.5 0-3.2.2-4.9.2s-3.9.6-5.9 2.7c-2 2.3-7.6 7.4-7.6 18.2 0 10.8 7.7 21.1 8.8 22.7s15 23.3 36.3 32.5c20.3 8.7 36.3 7.7 40.5 6.4 4.5-1.4 13.7-5.6 15.7-11.4s2-10.7 1.4-11.4z"/>
                    </svg>
                    CONVERSAR COM A EQUIPE
                </a>
            </div>
        </section>
        
        {/* SEÇÃO 2: BENEFÍCIOS (A Seção Persuasiva) */}
        <BenefitsSection />

        {/* SEÇÃO 3: FORMULÁRIO DE CONTATO (Backup) */}
        <section className="py-20 bg-gray-950">
            <div className="text-center max-w-xl mx-auto mb-10">
                <p className="text-2xl font-semibold text-white">
                    <span className="text-amber-500">Ou envie seus dados</span> por e-mail:
                </p>
                <p className="text-gray-400 mt-2">
                    Preencha o formulário abaixo e entraremos em contato.
                </p>
            </div>
            <AssociationForm />
        </section>

      </main>
      <Footer />
    </>
  );
}