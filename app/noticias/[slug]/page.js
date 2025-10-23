// app/noticias/[slug]/page.js

// O caminho correto é: .../../../components/NomeDoComponente
import Header from '../../../components/Header'; // <-- CORREÇÃO AQUI
import Footer from '../../../components/Footer'; // <-- CORREÇÃO AQUI
import Image from 'next/image';
// Remova o caminho antigo se ele não existir, o Image é importado assim mesmo

// --- DADOS DE TESTE SIMULANDO UM BANCO DE DADOS ---
// Na vida real, você buscará estes dados usando o valor de 'slug'
const ALL_NEWS_DATA = [
  { 
    slug: 'sabor-solidario', 
    title: 'ABRASEL Lança Campanha "Sabor Solidário" em Guarapuava', 
    date: '25 DE OUTUBRO DE 2025', 
    imageUrl: '', 
    content: [
      "A iniciativa Sabor Solidário, promovida pela ABRASEL Centro Sul do Paraná, é um marco na união entre gastronomia e responsabilidade social na região. O projeto visa arrecadar fundos para famílias carentes através da participação voluntária de restaurantes associados, que destinam uma porcentagem de pratos selecionados.",
      "O lançamento oficial ocorreu na Câmara Municipal de Guarapuava, contando com a presença de autoridades locais e membros da diretoria da ABRASEL. A meta é impactar positivamente mais de 500 famílias nos próximos meses.",
      "Participe e confira os restaurantes participantes em nossa página de Associados!"
    ],
    author: 'Equipe de Comunicação ABRASEL'
  },
  { 
    slug: 'novos-associados', 
    title: 'Novos Associados Impulsionam a Gastronomia do Centro Sul', 
    date: '20 DE OUTUBRO DE 2025', 
    imageUrl: 'https://images.unsplash.com/photo-1555547631-f155986927d2?q=80&w=2670&auto=format', 
    content: [
      "Com a adesão de cinco novos estabelecimentos em Pato Branco e Guarapuava, a ABRASEL Centro Sul do Paraná consolida seu crescimento e representatividade no setor. Os novos membros trazem uma variedade de culinárias, desde culinária oriental até lanchonetes artesanais.",
      "A diretoria da ABRASEL expressou grande satisfação com a expansão, destacando que a união é fundamental para enfrentar os desafios do mercado atual e promover eventos de grande porte na região.",
    ],
    author: 'Assessoria de Imprensa'
  },
  // Mais dados de teste aqui...
];


// Componente principal da página. Recebe o 'params' da URL.
export default function NewsArticlePage({ params }) {
  const { slug } = params;
  
  // Na vida real, você usaria fetch para buscar a notícia pelo slug
  const article = ALL_NEWS_DATA.find(item => item.slug === slug);

  // Tratamento caso a notícia não seja encontrada
  if (!article) {
    return (
      <>
        <Header />
        <main className="bg-gray-950 text-white min-h-screen py-20 text-center">
            <h1 className="text-4xl font-extrabold text-amber-500">Notícia Não Encontrada (404)</h1>
            <p className="text-gray-400 mt-4">Verifique o endereço: /noticias/{slug}</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen">
        
        {/* Banner com a Imagem de Destaque */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image 
            src={article.imageUrl} 
            alt={article.title} 
            fill 
            className="object-cover"
            sizes="100vw"
          />
          
          {/* Overlay Escuro com Gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent"></div>

          {/* Conteúdo do Título */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
            <p className="text-sm text-amber-500 uppercase font-semibold mb-2">{article.date}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {article.title}
            </h1>
            <p className="text-gray-400 mt-2">Por: {article.author}</p>
          </div>
        </section>

        {/* Corpo do Artigo */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Renderiza os parágrafos do Array de Conteúdo */}
            {article.content.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {paragraph}
                </p>
            ))}
            
            {/* CTA de Rodapé */}
            <div className="mt-10 pt-6 border-t border-gray-800">
                <p className="text-xl text-amber-500 font-semibold">
                    Quer saber mais? Visite a nossa página de Eventos ou Associados!
                </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}