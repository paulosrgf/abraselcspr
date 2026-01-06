// app/institucional/page.js

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';

// Dados da Gestão Atualizados (6 Integrantes)
const MANAGEMENT_TEAM = [
  { 
    id: 1, 
    name: 'João da Silva', 
    position: 'Presidente', 
    imageUrl: '/management/presidente-joao.jpg', 
    bio: 'Lidera a ABRASEL desde 2023, com foco em inovação e apoio ao empreendedorismo regional.' 
  },
  { 
    id: 2, 
    name: 'Maria Souza', 
    position: 'Vice-Presidente', 
    imageUrl: '/management/terceiro-gestao.jpg', 
    bio: 'Especialista em turismo gastronômico e relações institucionais.' 
  },
  { 
    id: 3, 
    name: 'Pedro Alves', 
    position: 'Diretor Financeiro', 
    imageUrl: '/management/vice-presidente.jpeg', 
    bio: 'Responsável pela sustentabilidade e crescimento financeiro da associação.' 
  },
  { 
    id: 4, 
    name: 'Ricardo Lima', 
    position: 'Conselheiro Fiscal', 
    imageUrl: '/management/placeholder-gestao.jpg', 
    bio: 'Atua na fiscalização e transparência das contas da seccional.' 
  },
  { 
    id: 5, 
    name: 'Fernanda Rocha', 
    position: 'Diretora de Eventos', 
    imageUrl: '/management/placeholder-gestao.jpg', 
    bio: 'Coordena festivais e ações promocionais da gastronomia local.' 
  },
  { 
    id: 6, 
    name: 'Carlos Mendes', 
    position: 'Diretor Jurídico', 
    imageUrl: '/management/placeholder-gestao.jpg', 
    bio: 'Suporte legal e defesa dos interesses dos estabelecimentos associados.' 
  },
];

export default function InstitucionalPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      {/* 1. Header da Página */}
      <div className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase">
              <span className="text-green-700">Quem</span> Somos
            </h1>
            <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl leading-relaxed">
              Conheça a missão, os valores e a equipe que impulsiona a força da gastronomia no Centro Sul do Paraná.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Missão, Visão e Valores (Layout Moderno) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Missão */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Missão</h2>
              <p className="text-gray-500 leading-relaxed">
                Promover o desenvolvimento sustentável do setor de bares e restaurantes, defendendo seus interesses e fomentando a inovação na região.
              </p>
            </div>
            
            {/* Visão */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Visão</h2>
              <p className="text-gray-500 leading-relaxed">
                Ser reconhecida como a principal voz e referência para a excelência e o sucesso do setor de alimentação fora do lar no Paraná.
              </p>
            </div>
            
            {/* Valores */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Valores</h2>
              <ul className="text-gray-500 space-y-2 font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Ética e Transparência</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Foco no Associado</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Inovação e Qualidade</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> União e Sustentabilidade</li>
              </ul>
            </div>

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {MANAGEMENT_TEAM.map(member => (
              <div key={member.id} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white group-hover:border-green-700 transition-all duration-300 transform group-hover:-translate-y-2">
                  <Image 
                    src={member.imageUrl} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-green-700 font-bold text-sm uppercase tracking-widest mb-4">{member.position}</p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto italic">
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