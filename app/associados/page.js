// app/associados/page.js

'use client'; 

import { useState, useMemo } from 'react'; 
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import AssociateCard from '../../components/AssociateCard'; // Para cards de destaque
import CompactAssociateRow from '../../components/CompactAssociateRow'; // Para a lista simples
// 🚨 REMOVIDO: MapPlaceholder e a importação de seu arquivo
import { ALL_ASSOCIATES_DATA, AVAILABLE_CITIES } from '../../data/associatesData'; // Dados e Cidades

export default function AssociadosPage() {
  const [selectedCity, setSelectedCity] = useState('Todas as Cidades');
  
  // 1. Lógica de Filtragem
  const allFilteredAssociates = useMemo(() => {
    return ALL_ASSOCIATES_DATA.filter(associate => 
      selectedCity === 'Todas as Cidades' || associate.city === selectedCity
    );
  }, [selectedCity]);
  
  // 2. Separação dos Destaques (isNew) e da Lista Compacta
  const featuredAssociates = allFilteredAssociates.filter(a => a.isNew);
  const compactAssociates = allFilteredAssociates.filter(a => !a.isNew);

  return (
    <>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen">
        
        {/* Banner de Título */}
        <section className="bg-black py-12 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-extrabold text-white">
                    Nossos <span className="text-green-700">Associados</span>
                </h1>
                <p className="text-gray-400 mt-2">Encontre o melhor da gastronomia no Centro Sul do Paraná.</p>
            </div>
        </section>

        {/* Seção Principal de Filtro e Listas */}
        <section className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Filtro de Cidades */}
                <div className="mb-10 text-center">
                    <label htmlFor="city-filter" className="block text-xl font-semibold mb-3 text-white">
                        Filtrar por Cidade:
                    </label>
                    <select
                        id="city-filter"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full md:w-80 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white appearance-none cursor-pointer focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    >
                        {AVAILABLE_CITIES.map(city => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                
                {/* ------------------------------------------------------------- */}
                {/* 1. ULTIMOS ASSOCIADOS (Destaque com Cards Visuais) */}
                {/* ------------------------------------------------------------- */}
                {featuredAssociates.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-3xl font-extrabold text-amber-500 mb-8 text-center">
                            ⭐ Últimos Associados em Destaque
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredAssociates.map(associate => (
                                <AssociateCard key={associate.id} {...associate} /> 
                            ))}
                        </div>
                    </div>
                )}
                
                {/* ------------------------------------------------------------- */}
                {/* 2. LISTA COMPACTA (150+ Associados) */}
                {/* ------------------------------------------------------------- */}
                <h2 className="text-3xl font-extrabold text-white mb-6 text-center pt-10 border-t border-gray-800">
                    Lista Completa ({compactAssociates.length})
                </h2>
                
                <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                    
                    {/* Cabeçalho da Lista Compacta (3 Colunas + Ação) */}
                 <div className="hidden md:grid grid-cols-4 text-xs uppercase font-bold text-gray-400 bg-gray-700/50 p-4 sticky top-0">
    <span className="md:col-span-1">Estabelecimento</span>
    <span>Cidade</span>
    <span>Especialidade</span>
    <span className="text-right">Ação</span> {/* Alinhado à direita para o botão */}
</div>

                    {/* Linhas da Lista */}
                    {compactAssociates.map(associate => (
                        <CompactAssociateRow key={associate.id} {...associate} />
                    ))}
                    
                    {/* Mensagem se não houver resultados */}
                    {compactAssociates.length === 0 && featuredAssociates.length === 0 && (
                        <div className="text-center py-10">
                            <p className="text-xl text-red-400">Nenhum associado encontrado em <span className="text-amber-500">{selectedCity}</span>.</p>
                        </div>
                    )}
                    
                </div>
                
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}