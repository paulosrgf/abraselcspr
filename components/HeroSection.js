// components/HeroSection.js

'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

// Dados de exemplo para o Carrossel
const heroSlides = [
  {
    id: 1,
    title: 'JUNTOS + FORTES', // Título simplificado, ABRASEL será adicionado com cores
    subtitle: 'Representando a força da gastronomia no Centro Sul do Paraná.',
    ctaText: 'Associe-se Agora',
    ctaLink: '/associe-se',
    imageUrl: 'https://images.unsplash.com/photo-1543353071-873f17a7e868?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  {
    id: 2,
    title: 'PRÓXIMO EVENTO',
    subtitle: 'Workshop de Inovação: Inscrições abertas!',
    ctaText: 'Ver Agenda',
    ctaLink: '/noticias',
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f34bce71932?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  {
    id: 3,
    title: 'CONHEÇA NOSSOS ASSOCIADOS',
    subtitle: 'Descubra os melhores restaurantes da região.',
    ctaText: 'Ver Lista Completa',
    ctaLink: '/associados',
    imageUrl: 'https://images.unsplash.com/photo-1555547631-f155986927d2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir para o próximo slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Função para ir para o slide anterior
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1
    );
  };

  // Efeito para o carrossel automático
  useEffect(() => {
    const interval = setInterval(goToNext, 7000); 
    return () => clearInterval(interval);
  }, []); 

  const currentSlide = heroSlides[currentIndex];

  return (
    <section className="relative h-[85vh] overflow-hidden bg-black flex items-center justify-center">
      
      {/* CONTAINER PRINCIPAL DE IMAGENS (Move todo o bloco) */}
      <div 
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
      >
        {heroSlides.map((slide, index) => (
          // CADA SLIDE OCUPA 100% DA LARGURA E É UM BLOCO RÍGIDO (flex-shrink-0)
          <div 
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative" 
            style={{ 
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay Escuro */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}
      </div>
      
      {/* Conteúdo (Fixo, sobrepõe o carrossel) */}
      <div className="absolute z-10 text-center text-white p-6 max-w-4xl">
        
        {/* Título Principal - AGORA COM CORES E ALINHAMENTO */}
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wider uppercase drop-shadow-lg transition duration-500">
            {/* Customização ABRASEL */}
            <span className="inline-flex items-center text-8xl md:text-9xl"> {/* Aumentado o tamanho do logo ABRASEL */}
                <span className="text-white">A</span>
                <span className="text-green-700">B</span>
                <span className="text-amber-500">R</span>
                <span className="text-white">A</span>
                <span className="text-white">S</span>
                <span className="text-white">EL</span>
            </span>
            <br />
            {/* Restante do Título, com quebra de linha forçada */}
            {currentSlide.title.split(',').map((part, index) => (
                <span key={index} className="block leading-none mt-2 text-6xl md:text-8xl">
                    {index > 0 ? ',' : ''} {part.trim()}
                </span>
            ))}
        </h2>
        
        {/* Subtítulo */}
        <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md transition duration-500">
          {currentSlide.subtitle}
        </p>

        <Link 
          href={currentSlide.ctaLink} 
          className="inline-block px-10 py-4 text-lg font-semibold uppercase tracking-wider 
                     bg-amber-600 text-black rounded-sm 
                     hover:bg-amber-500 transition duration-300 transform hover:scale-105 shadow-2xl"
        >
          {currentSlide.ctaText}
        </Link>
      </div>

      {/* Botões de Navegação (Fixo) */}
      <button 
        onClick={goToPrev} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full z-20 transition"
        aria-label="Slide Anterior"
      >
        <ChevronLeft className="h-6 w-6" /> 
      </button>
      
      <button 
        onClick={goToNext} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full z-20 transition"
        aria-label="Próximo Slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores de Carrossel (Fixo) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${
              index === currentIndex ? 'bg-amber-500 scale-125' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;