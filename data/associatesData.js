// data/associatesData.js
// Adicionando telefone, endereço e um campo 'isNew' para destaque

export const ALL_ASSOCIATES_DATA = [
    // -------------------------------------------------------------
    // ULTIMOS ASSOCIADOS (Destaque)
    // -------------------------------------------------------------
    { id: 1, name: 'Nova Choperia Gourmet', specialty: 'Cervejas Artesanais', imageUrl: 'https://images.unsplash.com/photo-1579631720610-85f29d2f2d1e?q=80&w=2670&auto=format', city: 'Guarapuava', slug: 'nova-choperia', phone: '(42) 99911-1111', address: 'Rua das Flores, 100 - Centro', isNew: true },
    { id: 2, name: 'Sabores do Mundo Cozinha', specialty: 'Fusion Internacional', imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7e868?q=80&w=2670&auto=format', city: 'Pato Branco', slug: 'sabores-mundo', phone: '(46) 99922-2222', address: 'Av. Brasil, 555 - Industrial', isNew: true },
    { id: 3, name: 'O Pão do Campo (Novo)', specialty: 'Padaria Artesanal', imageUrl: 'https://images.unsplash.com/photo-1517248135465-4d2d1f70d2b0?q=80&w=2670&auto=format', city: 'Irati', slug: 'pao-do-campo', phone: '(42) 99933-3333', address: 'Rua do Pinheiro, 202 - Centro', isNew: true },

    // -------------------------------------------------------------
    // DEMAIS ASSOCIADOS (Lista Compacta)
    // -------------------------------------------------------------
    { id: 4, name: 'Churrascaria Grelha de Ouro', specialty: 'Carnes Nobres', imageUrl: 'https://images.unsplash.com/photo-1594950005527-374c431057e6?q=80&w=2670&auto=format', city: 'Guarapuava', slug: 'churrascaria-grelha-de-ouro', phone: '(42) 3030-4444', address: 'Rua das Pedras, 1000 - Boqueirão' },
    { id: 5, name: 'Pizzaria Bella Itália', specialty: 'Culinária Italiana', imageUrl: 'https://images.unsplash.com/photo-1541592106381-b316499ada67?q=80&w=2670&auto=format', city: 'Pato Branco', slug: 'pizzaria-bella-italia', phone: '(46) 3225-5555', address: 'Av. Tupi, 1200 - Centro' },
    { id: 6, name: 'Café Aromas do Campo', specialty: 'Cafeteria e Doces', imageUrl: 'https://images.unsplash.com/photo-1517248135465-4d2d1f70d2b0?q=80&w=2670&auto=format', city: 'Irati', slug: 'cafe-aromas-do-campo', phone: '(42) 3422-6666', address: 'Praça da Matriz, 50 - Vila Nova' },
    // Adicione mais 144 itens similares aqui...
    { id: 150, name: 'Outro Estabelecimento Exemplo', specialty: 'Diversos', imageUrl: 'https://images.unsplash.com/photo-1563729781604-0997e3751a0b?q=80&w=2670&auto=format', city: 'Guarapuava', slug: 'exemplo-final', phone: '(42) 3030-9999', address: 'Rua dos Testes, 20 - Último Bairro' },

];

export const AVAILABLE_CITIES = ['Todas as Cidades', 'Guarapuava', 'Pato Branco', 'Irati', 'Laranjeiras do Sul'];