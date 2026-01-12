// app/institucional/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const MANAGEMENT_TEAM = [
  { 
    id: 1, 
    name: 'João Rogério Paiva Dal Santo', 
    position: 'Presidente', 
    imageUrl: '/management/joao-dal-santo.jpeg', 
    bio: 'Liderança estratégica focada no fortalecimento da gastronomia regional e representatividade do setor.' 
  },
  { 
    id: 2, 
    name: 'Tayna Cristina Silva Nogueira Meneguel', 
    position: 'Presidente do Conselho Fiscal', 
    imageUrl: '/management/tayna-meneguel.jpeg', 
    bio: 'Responsável pela transparência, conformidade e integridade das ações financeiras da associação.',
    objectPosition: 'top'
  },
  { 
    id: 3, 
    name: 'Pedro Henrique Jeczmionski', 
    position: 'Conselho de Administração', 
    imageUrl: '/management/pedro-henrique.jpg', 
    bio: 'Atua no planejamento tático e nas decisões fundamentais para o crescimento dos associados.' 
  },
  { 
    id: 4, 
    name: 'Eduardo Szymonka', 
    position: 'Conselho Fiscal', 
    imageUrl: '/management/eduardo-szymonka.jpeg', 
    bio: 'Suporte técnico na fiscalização contábil e garantia da sustentabilidade da entidade.',
    objectPosition: 'top' // 🚨 Ajuste de enquadramento para o rosto
  },
  { 
    id: 5, 
    name: 'Mayara Bahia Monteiro', 
    position: 'Conselho de Administração', 
    imageUrl: '/management/mayara-monteiro.jpeg', 
    bio: 'Contribui para a inovação e o desenvolvimento de novas parcerias no setor de bares e restaurantes.',
    objectPosition: 'top' // 🚨 Ajuste de enquadramento para o rosto
  },
  { 
    id: 6, 
    name: 'Leonardo Moreira Sampaio', 
    position: 'Conselho de Administração', 
    imageUrl: '/management/leonardo-sampaio.jpeg', 
    bio: 'Foco na integração da rede e compartilhamento de melhores práticas de gestão.',
    objectPosition: 'top' // 🚨 Ajuste de enquadramento para o rosto
  },
  { 
    id: 7, 
    name: 'Fábio Augusto Pletsch', 
    position: 'Advogado Abrasel', 
    imageUrl: '/management/fabio-pletsch.jpeg', 
    bio: 'Responsável pelo suporte jurídico especializado e defesa dos direitos e interesses dos estabelecimentos.' 
  },
];

export default function InstitucionalPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      {/* 1. Header da Página */}
      <div className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase">
            <span className="text-green-700">Quem</span> Somos
          </h1>
          <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl leading-relaxed">
            Nossa diretoria e conselhos trabalham incansavelmente para impulsionar a gastronomia no Centro Sul do Paraná.
          </p>
        </div>
      </div>

      {/* 2. Seção Missão, Visão e Valores */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
                  <Target size={32} />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Missão</h2>
                <p className="text-gray-500 leading-relaxed text-sm italic">
                  "Promover o desenvolvimento sustentável do setor de bares e restaurantes, defendendo seus interesses e fomentando a inovação."
                </p>
            </div>
            
            {/* Visão */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Eye size={32} />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Visão</h2>
                <p className="text-gray-500 leading-relaxed text-sm italic">
                  "Ser reconhecida como a voz líder e referência em excelência para a gastronomia paranaense."
                </p>
            </div>
            
            {/* Valores */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ShieldCheck size={32} />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Valores</h2>
                <p className="text-gray-500 leading-relaxed text-sm italic">
                  "Ética, transparência, foco no associado e valorização das raízes gastronômicas regionais."
                </p>
            </div>
        </div>
      </section>

      {/* 3. Seção Gestão Atual */}
      <section id="gestao" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase mb-4">
              Nossa <span className="text-green-700">Gestão</span> Atual
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Grid de 3 Colunas com centralização inteligente do último item (Advogado) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
            {MANAGEMENT_TEAM.map((member, index) => (
              <div 
                key={member.id} 
                className={`group text-center ${
                  index === 6 ? 'lg:col-start-2' : '' 
                }`}
              >
                {/* Container da Imagem */}
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white group-hover:border-green-700 transition-all duration-300 transform group-hover:-translate-y-2">
                  <Image 
                    src={member.imageUrl} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition || 'center' }} // 🚨 Aplica o enquadramento customizado
                    sizes="200px"
                  />
                </div>
                
                {/* Textos do Card */}
                <h3 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-tight leading-tight px-4">
                  {member.name}
                </h3>
                <p className="text-green-700 font-bold text-xs uppercase tracking-widest mb-4 h-6 flex items-center justify-center">
                  {member.position}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto italic">
                  "{member.bio}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}