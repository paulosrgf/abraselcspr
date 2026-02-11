// app/associados/[slug]/page.js

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// Importamos os dados centralizados
import { ALL_ASSOCIATES_DATA } from '../../../data/associatesData';
import { MapPin, Phone, Utensils, Globe } from 'lucide-react';

export default function AssociateProfilePage({ params }) {
  const { slug } = params;
  
  const restaurant = ALL_ASSOCIATES_DATA.find(item => item.slug === slug);

  if (!restaurant) {
    return (
      <>
        <Header />
        <main className="bg-gray-950 text-white min-h-screen py-20 text-center">
            <h1 className="text-4xl font-extrabold text-red-500">Restaurante Não Encontrado (404)</h1>
            <p className="text-gray-400 mt-4">O perfil de associado que você procurava não existe ou foi removido.</p>
            <Link href="/associados" className="mt-6 inline-block text-amber-500 hover:text-amber-400 underline">
                &larr; Voltar à Lista de Associados
            </Link>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen">
        
        <section className="relative h-[50vh] overflow-hidden">
          <Image 
            src={restaurant.imageUrl} 
            alt={`Imagem de ${restaurant.name}`} 
            fill 
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
            <p className="text-xl text-amber-500 uppercase font-semibold mb-1">{restaurant.city}</p>
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-white leading-tight">
              {restaurant.name}
            </h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="md:col-span-1 p-6 bg-gray-900 rounded-xl h-fit sticky top-24 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2">Detalhes</h2>
              
              <div className="flex items-center space-x-3 mb-4">
                <Utensils className="w-6 h-6 text-amber-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Especialidade</p>
                  <p className="font-semibold text-white">{restaurant.specialty}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-6 h-6 text-green-700 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <a href={`tel:${restaurant.phone.replace(/\D/g, '')}`} className="font-semibold text-white hover:text-green-500 transition">
                    {restaurant.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Endereço</p>
                  <p className="font-semibold text-white">{restaurant.address} - {restaurant.city}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Website</p>
                  <p className="text-sm text-gray-600">N/D (Adicione ao Array)</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-3">Sobre o Estabelecimento</h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                O **{restaurant.name}** é um orgulho da gastronomia de {restaurant.city}. Associado à ABRASEL, ele representa a excelência na área de **{restaurant.specialty}**. Venha nos visitar e saborear o melhor que a região Centro Sul do Paraná tem a oferecer!
              </p>
              
              <p className="text-gray-400 mb-8">
                {/* CORREÇÃO REALIZADA ABAIXO NA PALAVRA 'description' */}
                *Esta é uma descrição gerada. Na versão real, este texto viria de um campo &apos;description&apos; no seu arquivo de dados ou CMS.*
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Localização</h3>
              <div className="w-full h-80 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                <p className="text-gray-500">
                  [Placeholder para o Widget do Google Maps ou similar]
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}