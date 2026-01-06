// app/associados/page.js
'use client'; 

import { useState, useMemo } from 'react'; 
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import CompactAssociateRow from '../../components/CompactAssociateRow'; 
import { ALL_ASSOCIATES_DATA, AVAILABLE_CITIES } from '../../data/associatesData'; 
import { Search, MapPin, Users, ListFilter } from 'lucide-react';

export default function AssociadosPage() {
  const [selectedCity, setSelectedCity] = useState('Todas as Cidades');
  const [searchTerm, setSearchTerm] = useState('');
  
  const allFilteredAssociates = useMemo(() => {
    return ALL_ASSOCIATES_DATA.filter(associate => {
      const matchesCity = selectedCity === 'Todas as Cidades' || associate.city === selectedCity;
      const matchesSearch = associate.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCity && matchesSearch;
    });
  }, [selectedCity, searchTerm]);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      {/* Título Moderno */}
      <div className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase">
              Guia de <span className="text-green-700">Associados</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl leading-relaxed">
              Encontre estabelecimentos que seguem os padrões de excelência da ABRASEL no Centro Sul do Paraná.
            </p>
          </div>
          
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100">
            <Users className="text-green-700" size={20} />
            <span className="text-gray-900 font-bold text-lg">{allFilteredAssociates.length}</span>
            <span className="text-gray-400 uppercase text-[10px] tracking-widest font-bold">Cadastrados</span>
          </div>
        </div>
      </div>

      {/* Área de Busca e Filtro - Mais "Clean" */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-700 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Digite o nome do restaurante ou empresa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-green-700/5 focus:border-green-700 transition-all shadow-sm"
            />
          </div>

          <div className="relative md:w-80">
            <ListFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full pl-12 pr-10 py-4 bg-white border border-gray-200 rounded-2xl text-gray-700 font-bold appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-700/5 transition-all shadow-sm"
            >
              {AVAILABLE_CITIES.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Lista de Associados - Layout de Lista Nítida */}
      <section className="pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-gray-100 overflow-hidden">
          
          {/* Cabeçalho da Lista - Visível apenas em Desktop */}
          <div className="hidden md:grid grid-cols-12 text-[11px] uppercase tracking-[0.2em] font-black text-gray-400 bg-gray-50/80 p-6 border-b border-gray-100">
            <div className="col-span-5">Estabelecimento</div>
            <div className="col-span-3">Cidade</div>
            <div className="col-span-3">Segmento</div>
            <div className="col-span-1 text-right">Contato</div>
          </div>

          {/* Renderização das Linhas */}
          <div className="divide-y divide-gray-100">
            {allFilteredAssociates.map(associate => (
              <CompactAssociateRow key={associate.id} {...associate} />
            ))}
          </div>

          {/* Feedback se não houver resultados */}
          {allFilteredAssociates.length === 0 && (
            <div className="py-32 text-center">
              <div className="inline-flex p-6 bg-gray-50 rounded-full mb-4 text-gray-300">
                <Search size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Nenhum resultado encontrado</h3>
              <p className="text-gray-500 mt-2">Tente ajustar os termos da busca ou mudar a cidade.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}