// data/associatesData.js

export const ALL_ASSOCIATES_DATA = [
    // -------------------------------------------------------------
    // ULTIMOS ASSOCIADOS (Destaque)
    // -------------------------------------------------------------
    { 
        id: 1, 
        name: 'Big Knife BBQ', 
        specialty: 'Churrasco Americano', 
        city: 'Guarapuava', 
        slug: 'big-knife-bbq', 
        searchQuery: 'Big Knife BBQ Guarapuava', 
        socialLink: 'https://instagram.com/bigknifebbq', 
        imageUrl: '/logos/bigknife.png', 
        isNew: true 
    },
    { 
        id: 2, 
        name: 'Zero 42', 
        specialty: 'Gastropub / Hamburgueria', 
        city: 'Guarapuava', 
        slug: 'zero-42', 
        searchQuery: 'Zero 42 Guarapuava', 
        socialLink: 'https://instagram.com/zero42grpa',
        imageUrl: '/logos/zero42.png',
        isNew: true 
    },
    { 
        id: 3, 
        name: 'Cookie do Boleta Café', 
        specialty: 'Cafeteria / Doces', 
        city: 'Guarapuava', 
        slug: 'cookie-boleta-cafe', 
        searchQuery: 'Cookie do Boleta Café Guarapuava', 
        socialLink: 'https://instagram.com/cookiedoboletacafe',
        imageUrl: 'https://images.unsplash.com/photo-1517248135465-4d2d1f70d2b0?q=80&w=2670&auto=format',
        isNew: true 
    },

    // -------------------------------------------------------------
    // DEMAIS ASSOCIADOS (Lista Compacta)
    // -------------------------------------------------------------
    { 
        id: 4, 
        name: 'Churrascaria Grelha de Ouro', 
        specialty: 'Carnes Nobres', 
        city: 'Guarapuava', 
        slug: 'churrascaria-grelha-de-ouro', 
        searchQuery: 'Churrascaria Grelha de Ouro Guarapuava', 
        socialLink: '',
        imageUrl: 'https://images.unsplash.com/photo-1594950005527-374c431057e6?q=80&w=2670&auto=format'
    },
    { 
        id: 5, 
        name: 'Pizzaria Bella Itália', 
        specialty: 'Culinária Italiana', 
        city: 'Pato Branco', 
        slug: 'pizzaria-bella-italia', 
        searchQuery: 'Pizzaria Bella Itália Pato Branco', 
        socialLink: 'https://instagram.com/bellapizzas',
        imageUrl: 'https://images.unsplash.com/photo-1541592106381-b316499ada67?q=80&w=2670&auto=format'
    },
    { 
        id: 6, 
        name: 'Café Aromas do Campo', 
        specialty: 'Cafeteria e Doces', 
        city: 'Irati', 
        slug: 'cafe-aromas-do-campo', 
        searchQuery: 'Café Aromas do Campo Irati', 
        socialLink: '',
        imageUrl: 'https://images.unsplash.com/photo-1517248135465-4d2d1f70d2b0?q=80&w=2670&auto=format'
    },
    { id: 7, name: 'Bar do Zé', specialty: 'Petiscos e Cervejas', city: 'Guarapuava', slug: 'bar-do-ze', searchQuery: 'Bar do Zé Guarapuava', socialLink: '', imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7e868?q=80&w=2670&auto=format' },
];

export const AVAILABLE_CITIES = ['Todas as Cidades', 'Guarapuava', 'Pato Branco', 'Irati', 'Laranjeiras do Sul'];