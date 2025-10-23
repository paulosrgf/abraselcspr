// components/FeaturedAssociates.js

import Link from 'next/link';
import AssociateCard from './AssociateCard';

// Dados de exemplo para associados em destaque
const DUMMY_ASSOCIATES = [
  {
    id: 1,
    name: 'Churrascaria Grelha de Ouro',
    specialty: 'Carnes Nobres',
    imageUrl: 'https://images.unsplash.com/photo-1594950005527-374c431057e6?q=80&w=2670&auto=format',
    city: 'Guarapuava',
    slug: 'churrascaria-grelha-de-ouro'
  },
  {
    id: 2,
    name: 'Pizzaria Bella Itália',
    specialty: 'Culinária Italiana',
    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b316499ada67?q=80&w=2670&auto=format',
    city: 'Pato Branco',
    slug: 'pizzaria-bella-italia'
  },
  {
    id: 3,
    name: 'Café Aromas do Campo',
    specialty: 'Cafeteria e Doces',
    imageUrl: 'https://images.unsplash.com/photo-1517248135465-4d2d1f70d2b0?q=80&w=2670&auto=format',
    city: 'Irati',
    slug: 'cafe-aromas-do-campo'
  },
];

const FeaturedAssociates = () => {
  return (
    <section className="py-20 bg-gray-950"> {/* Usando bg-gray-950 para um tom mais escuro que a seção anterior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <h2 className="text-4xl font-extrabold text-white mb-4 text-center">
            Nossos <span className="text-green-700">Associados</span> em Destaque
        </h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            Descubra os melhores restaurantes e estabelecimentos de alimentação do Centro Sul do Paraná.
        </p>
        
        {/* Grid Responsivo para os Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_ASSOCIATES.map(associate => (
            <AssociateCard 
              key={associate.id}
              name={associate.name}
              specialty={associate.specialty}
              imageUrl={associate.imageUrl}
              city={associate.city}
              slug={associate.slug}
            />
          ))}
        </div>

        {/* Botão de Ver Todos os Associados */}
        <div className="text-center mt-12">
          <Link 
            href="/associados" 
            className="inline-block px-8 py-3 text-lg font-semibold uppercase tracking-wider 
                       border-2 border-amber-500 text-amber-500 rounded-sm 
                       hover:bg-amber-500 hover:text-black transition duration-300"
          >
            Ver Lista Completa
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAssociates;