// app/eventos/page.js
'use client';

import { useState, useMemo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, MapPin, Filter, Globe, Star } from 'lucide-react';

const EVENTS_DATA = [
  {
    id: 1,
    title: 'Encontro de Talentos',
    date: '03 a 07 de Fevereiro',
    location: 'Nacional / Online',
    scope: 'Brasil',
    description: 'Capacitação e reconhecimento dos profissionais que fazem a diferença no setor.',
    category: 'Desenvolvimento'
  },
  {
    id: 2,
    title: 'Encontro Nacional em Minas Gerais',
    date: '21 a 28 de Março',
    location: 'Belo Horizonte - MG',
    scope: 'Brasil',
    description: 'Intercâmbio de experiências e discussões estratégicas em um dos maiores polos gastronômicos do país.',
    category: 'Congresso'
  },
  {
    id: 3,
    title: 'Brasil Sabor',
    date: '14 a 31 de Maio',
    location: 'Guarapuava e todo o Brasil',
    scope: 'Guarapuava',
    description: 'O maior festival gastronômico do planeta, valorizando os ingredientes locais nos restaurantes participantes.',
    category: 'Festival'
  },
  {
    id: 4,
    title: 'NRA Show',
    date: '16 a 19 de Maio',
    location: 'Chicago - EUA',
    scope: 'Internacional',
    description: 'A maior feira de serviços de alimentação do mundo. Tendências globais para o seu negócio.',
    category: 'Feira Internacional'
  },
  {
    id: 5,
    title: '38º Congresso Abrasel em Brasília',
    date: '16 a 18 de Junho',
    location: 'Brasília - DF',
    scope: 'Brasil',
    description: 'O principal encontro político e empresarial do setor de alimentação fora do lar no Brasil.',
    category: 'Político/Empresarial'
  },
  {
    id: 6,
    title: 'Semana da Alimentação Fora do Lar em SP',
    date: '14 a 18 de Setembro',
    location: 'São Paulo - SP',
    scope: 'Brasil',
    description: 'Uma semana intensiva de eventos, incluindo a Equipotel (15 a 18 de setembro).',
    category: 'Negócios'
  },
  {
    id: 7,
    title: 'O Quilo é Nosso',
    date: '15 a 25 de Setembro',
    location: 'Guarapuava e todo o Brasil',
    scope: 'Guarapuava',
    description: 'Concurso que elege o melhor restaurante de comida a quilo do país.',
    category: 'Concurso'
  },
  {
    id: 8,
    title: 'Semana da Criança',
    date: '05 a 10 de Outubro',
    location: 'Guarapuava e Região',
    scope: 'Guarapuava',
    description: 'Ações sociais e menus especiais voltados para o público infantil em nossos associados.',
    category: 'Social'
  },
  {
    id: 9,
    title: 'Bar em Bar',
    date: '29 de Outubro a 15 de Novembro',
    location: 'Guarapuava e todo o Brasil',
    scope: 'Guarapuava',
    description: 'O festival que celebra a cultura dos botecos com petiscos exclusivos.',
    category: 'Festival'
  },
  {
    id: 10,
    title: 'Encontro Nacional da Abrasel no Ceará',
    date: '24 a 26 de Novembro',
    location: 'Fortaleza - CE',
    scope: 'Brasil',
    description: 'Encerramento do ano com debates sobre o futuro da gastronomia e turismo.',
    category: 'Congresso'
  }
];

export default function EventosPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredEvents = useMemo(() => {
    if (activeFilter === 'Todos') return EVENTS_DATA;
    return EVENTS_DATA.filter(event => event.scope === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />

      {/* Título Principal */}
      <div className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-10">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
            Agenda <span className="text-green-700">2026</span>
          </h1>
          <p className="text-gray-500 mt-4 text-lg md:text-xl max-w-2xl font-medium">
            Calendário oficial: Das ações locais em Guarapuava aos grandes congressos nacionais.
          </p>
        </div>
      </div>

      {/* Filtros */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          {['Todos', 'Guarapuava', 'Brasil', 'Internacional'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeFilter === filter
                  ? 'bg-green-700 text-white border-green-700 shadow-lg shadow-green-700/20'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-green-700 hover:text-green-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Cards */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-700/20 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                  {event.category}
                </div>
                <div className={`${event.scope === 'Internacional' ? 'text-blue-500' : 'text-amber-500'}`}>
                   {event.scope === 'Internacional' ? <Globe size={20} /> : <Star size={20} />}
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight mb-4 group-hover:text-green-700 transition-colors">
                {event.title}
              </h3>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center text-gray-900 font-black text-xs uppercase tracking-widest">
                  <Calendar className="mr-3 text-green-700" size={18} />
                  {event.date}
                </div>
                <div className="flex items-start text-gray-500 text-sm font-medium">
                  <MapPin className="mr-3 text-amber-500 flex-shrink-0" size={18} />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed italic border-t border-gray-50 pt-4">
                  "{event.description}"
                </p>
              </div>

              {/* 🚨 SELO DINÂMICO AQUI */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 transition-colors group-hover:text-green-700/50">
                  {event.scope === 'Guarapuava' || event.scope === 'Paraná' 
                    ? 'Abrasel Centro Sul PR' 
                    : 'Abrasel'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-amber-50 rounded-[2rem] border border-amber-100 text-center">
            <p className="text-amber-800 text-[10px] font-black uppercase tracking-[0.15em]">
              * Datas e locais sujeitos a alteração pela organização nacional.
            </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}