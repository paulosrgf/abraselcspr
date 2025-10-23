// components/AssociationContent.js

import AssociationForm from './AssociationForm';
// 🚨 Removido: import { Whatsapp, Mail } from 'lucide-react'; 
// Usaremos SVG simples abaixo para evitar o erro de importação!

// Número de telefone da ABRASEL para o WhatsApp (Exemplo)
const WHATSAPP_NUMBER = "5541995541649"; 
const WHATSAPP_MESSAGE = "Olá, gostaria de saber mais sobre como associar meu estabelecimento à ABRASEL Centro Sul do Paraná.";

const AssociationContent = () => {
    
  // Link dinâmico para o WhatsApp
  const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* ------------------------------------------------------------- */}
      {/* FOCO PRINCIPAL: BOTÃO DO WHATSAPP */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-green-700 p-8 md:p-10 rounded-xl text-center shadow-2xl mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Quero me associar! Fale Conosco agora via WhatsApp
        </h2>
        <p className="text-lg text-green-100 mb-6">
          Clique no botão abaixo para iniciar uma conversa direta com nossa equipe pelo WhatsApp!
        </p>
        
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 text-xl font-bold uppercase tracking-wider 
                     bg-white text-green-700 rounded-full 
                     hover:bg-gray-100 transition duration-300 transform hover:scale-[1.02] shadow-xl"
        >
          {/* 🚨 SUBSTITUIÇÃO: ÍCONE WHATSAPP em SVG */}
          <svg className="w-6 h-6 mr-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339.4 56.7 283.4 34 223.7 34c-122.9 0-222.8 99.9-222.8 222.8 0 39.8 10.4 78.4 30.2 112.5L3.9 459.7l126.3-33.1c32.7 17.6 69.4 27.2 106.8 27.2h0c122.8 0 222.7-99.9 222.7-222.7.1-59.3-23-116.1-66.2-159.2zm-123 322c-29.3 0-56.5-7.9-80.4-22.6l-5.3-3.1-53.9 14.2 14.5-52.4-3.4-5.5c-15.6-25-24-54.6-24-87.1 0-82.6 67-149.6 149.6-149.6 40.2 0 77.8 15.7 106.2 44.1 28.5 28.5 44.1 66.1 44.1 106.3 0 82.6-67 149.6-149.6 149.6zm51.7-184.8c-2.3-1.1-13.7-6.8-15.8-7.6s-3.7-1.1-5.2 1.1c-1.5 2.3-5.9 7.6-7.2 9.1s-2.7 1.7-5 0.6c-2.3-1.1-9.7-3.6-18.4-11.4s-14.7-18.9-16.3-21.7c-1.5-2.7-.2-4.1 1-5.2 1-1.1 2.3-2.6 3.4-3.9s1.5-2.3 2.3-3.9c.8-1.5.4-2.7 0-3.9-1.5-3.4-5-8.3-6.9-12.2s-3.8-11.2-5.2-14.2c-1.1-2.7-2.3-2.3-4.1-2.3-1.5 0-3.2.2-4.9.2s-3.9.6-5.9 2.7c-2 2.3-7.6 7.4-7.6 18.2 0 10.8 7.7 21.1 8.8 22.7s15 23.3 36.3 32.5c20.3 8.7 36.3 7.7 40.5 6.4 4.5-1.4 13.7-5.6 15.7-11.4s2-10.7 1.4-11.4z"/>
          </svg>
          QUERO ME ASSOCIAR AGORA
        </a>
      </div>
      
      {/* OPÇÃO SECUNDÁRIA: FORMULÁRIO DE CONTATO (Antigo) */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center">
            {/* 🚨 SUBSTITUIÇÃO: ÍCONE MAIL em SVG */}
            <svg className="w-6 h-6 mr-2 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM240 256c-8.1 0-16.2 3.1-22.3 9.2L0 448H512L274.3 265.2c-6.1-6.1-14.2-9.2-22.3-9.2H240zM492.3 74.9l-220 159.2c-2.6 1.9-5.4 3-8.3 3s-5.7-1.1-8.3-3L19.7 74.9c-2.3-1.7-5.2-2.9-8.1-2.9c-10.2 0-18.4 8.2-18.4 18.4v288c0 10.2 8.2 18.4 18.4 18.4h416c10.2 0 18.4-8.2 18.4-18.4V90.4c0-10.2-8.2-18.4-18.4-18.4h-416zM48 80h416c4.4 0 8 3.6 8 8v288c0 4.4-3.6 8-8 8H48c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8z"/>
            </svg>
            <p className="text-xl font-semibold text-white">
                Prefere o contato por e-mail? Preencha o formulário abaixo:
            </p>
        </div>
      </div>
      
      {/* O formulário de e-mail original */}
      <AssociationForm /> 
      
    </div>
  );
};

export default AssociationContent;