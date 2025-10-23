// app/associados/page.js

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AssociateCard from '../../components/AssociateCard'; // Reutiliza o card do associado

// Dados de exemplo (Aqui, a lista seria MUITO maior na versão real)
const ALL_ASSOCIATES_DATA = [
  { id: 1, name: 'Churrascaria Grelha de Ouro', specialty: 'Carnes Nobres', imageUrl: 'https://images.unsplash.com/photo-1594950005527-374c431057e6?q=80&w=2670&auto=format', city: 'Guarapuava', slug: 'churrascaria-grelha-de-ouro' },
  { id: 2, name: 'Pizzaria Bella Itália', specialty: 'Culinária Italiana', imageUrl: 'https://images.unsplash.com/photo-1541592106381-b316499ada67?q=80&w=2670&auto=format', city: 'Pato Branco', slug: 'pizzaria-bella-italia' },
  { id: 3, name: 'Café Aromas do Campo', specialty: 'Cafeteria e Doces', imageUrl: 'https://images.unsplash.com/photo-1517248135465-4d2d1f70d2b0?q=80&w=2670&auto=format', city: 'Irati', slug: 'cafe-aromas-do-campo' },
  // Adicionando mais alguns para simular uma lista
  { id: 4, name: 'Bar do Zé', specialty: 'Petiscos e Cervejas', imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7e868?q=80&w=2670&auto=format', city: 'Guarapuava', slug: 'bar-do-ze' },
  { id: 5, name: 'Restaurante Açaí da Serra', specialty: 'Alimentação Saudável', imageUrl: 'https://images.unsplash.com/photo-1555547631-f155986927d2?q=80&w=2670&auto=format', city: 'Laranjeiras do Sul', slug: 'acai-da-serra' },
];

export default function AssociadosPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen">
        
        {/* Banner Simples de Título */}
        <section className="bg-black py-12 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-extrabold text-white">
                    Nossos <span className="text-green-700">Associados</span>
                </h1>
                <p className="text-gray-400 mt-2">Encontre o melhor da gastronomia no Centro Sul do Paraná.</p>
            </div>
        </section>

        {/* Lista de Associados em Grid */}
        <section className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Seção de Filtros (Seria implementada aqui) */}
                <div className="mb-10 p-4 bg-gray-800 rounded-lg text-gray-300">
                    {/* Placeholder para Busca e Filtros */}
                    <p className="text-center">🔍 **Área de Busca:** Aqui você adicionaria campos de filtro por Cidade, Tipo de Comida, etc.</p>
                </div>
                
                {/* Grid para os Cards de Associados */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ALL_ASSOCIATES_DATA.map(associate => (
                        <AssociateCard // Reutilizamos o Card!
                            key={associate.id}
                            name={associate.name}
                            specialty={associate.specialty}
                            imageUrl={associate.imageUrl}
                            city={associate.city}
                            slug={associate.slug}
                        />
                    ))}
                </div>
                
                {/* Aqui seria o espaço para Paginação */}
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}