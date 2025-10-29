// app/institucional/page.js

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

// Dados de Exemplo da Gestão
const MANAGEMENT_TEAM = [
  { 
    id: 1, 
    name: 'João da Silva', 
    position: 'Presidente', 
    // 🚨 NOVO CAMINHO LOCAL: A imagem deve estar em public/management/presidente-joao.jpg
    imageUrl: '/management/presidente-joao.jpg', 
    bio: 'Lidera a ABRASEL desde 2023, com foco em inovação e apoio ao empreendedorismo regional.' 
  },
  { 
    id: 2, 
    name: 'Maria Souza', 
    position: 'Vice-Presidente', 
    // 🚨 NOVO CAMINHO LOCAL: A imagem deve estar em public/management/vice-maria.jpg
    imageUrl: '/management/terceiro-gestao.jpg', 
    bio: 'Especialista em turismo gastronômico e relações institucionais.' 
  },
  { 
    id: 3, 
    name: 'Pedro Alves', 
    position: 'Diretor Financeiro', 
    // 🚨 NOVO CAMINHO LOCAL: A imagem deve estar em public/management/diretor-pedro.jpg
    imageUrl: '/management/vice-presidente.jpeg', 
    bio: 'Responsável pela sustentabilidade e crescimento financeiro da associação.' 
  },
];

export default function InstitucionalPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen">
        
        {/* Banner de Título Principal */}
        <section className="bg-black py-16 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-6xl font-extrabold text-white">
                    <span className="text-green-700">Quem</span> Somos
                </h1>
                <p className="text-gray-400 mt-3 text-xl">
                    Nossa missão, visão e a equipe que impulsiona a gastronomia regional.
                </p>
            </div>
        </section>

        {/* 1. Seção Missão, Visão e Valores (About Us) */}
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
                
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold text-amber-500 mb-3">Missão</h2>
                    <p className="text-gray-300">
                        Promover o desenvolvimento sustentável do setor de bares e restaurantes, defendendo seus interesses e fomentando a inovação na região Centro Sul do Paraná.
                    </p>
                </div>
                
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold text-amber-500 mb-3">Visão</h2>
                    <p className="text-gray-300">
                        Ser reconhecida como a principal voz e referência para a excelência e o sucesso do setor de alimentação fora do lar no Paraná.
                    </p>
                </div>
                
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold text-amber-500 mb-3">Valores</h2>
                    <ul className="text-gray-300 list-disc list-inside space-y-1">
                        <li>Ética e Transparência</li>
                        <li>Foco no Associado</li>
                        <li>Inovação e Qualidade</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* 2. Seção Gestão Atual (Diretoria) */}
        <section id="gestao" className="py-20 bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
                    Nossa <span className="text-amber-500">Gestão</span> Atual
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {MANAGEMENT_TEAM.map(member => (
                        <div key={member.id} className="text-center p-6 bg-gray-900 rounded-lg shadow-2xl">
                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-500">
                                <Image 
                                    src={member.imageUrl} 
                                    alt={member.name} 
                                    fill 
                                    className="object-cover"
                                    sizes="33vw"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-amber-500 font-semibold mb-3">{member.position}</p>
                            <p className="text-gray-400 text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
                
                <p className="text-center text-gray-500 mt-12 text-sm">
                    Para mais informações sobre a estrutura de governança, entre em contato.
                </p>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}