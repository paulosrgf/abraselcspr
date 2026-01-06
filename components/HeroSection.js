// components/HeroSection.js

'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const heroSlides = [
  {
    id: 1,
    title: 'JUNTOS, FORTES', 
    subtitle: 'A união que fortalece o setor de Bares e Restaurantes no Centro Sul do Paraná.',
    ctaText: 'Associe-se Agora',
    ctaLink: '/associe-se',
    // 🚨 Imagem Local 1
    imageUrl: '/images/carrossel-um.jpg' 
  },
  {
    id: 2,
    title: 'PRÓXIMO EVENTO',
    subtitle: 'Fique por dentro das novidades e capacitações da região.',
    ctaText: 'Ver Agenda',
    ctaLink: '/eventos', 
    // 🚨 Imagem Local 2
    imageUrl: '/images/carrossel-dois.jpg' 
  },
  {
    id: 3,
    title: 'CONHEÇA NOSSOS ASSOCIADOS',
    subtitle: 'Descubra os melhores estabelecimentos da região. Qualidade e sabor garantidos.',
    ctaText: 'Ver Lista Completa',
    ctaLink: '/associados',
    // 🚨 Imagem Local 3
    imageUrl: '/images/carrossel-tres.jpg' 
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = heroSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  // Autoplay a cada 7 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden bg-black">
      
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Tratamento da Imagem de Fundo */}
          <div className="relative w-full h-full">
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover" // Preenche sem esticar a imagem
            />
            {/* Overlay escuro para garantir leitura do texto branco/âmbar */}
            <div className="absolute inset-0 bg-black/45"></div>
          </div>

          {/* Conteúdo Centralizado */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <div className="max-w-4xl z-20 px-4">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-amber-400 mb-4 tracking-tight leading-tight drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl text-white mb-8 font-light drop-shadow-md">
                {slide.subtitle}
              </p>
              
              <Link
                href={slide.ctaLink}
                className={`inline-flex items-center justify-center px-10 py-4 
                            text-lg font-bold uppercase tracking-wider rounded-lg shadow-2xl transition duration-300 transform hover:scale-105
                            ${
                                slide.ctaText === 'Associe-se Agora' 
                                    ? 'bg-green-700 text-white hover:bg-green-600'
                                    : 'bg-amber-500 text-black hover:bg-amber-400'
                            }`}
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Setas de Navegação */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-all hidden md:block"
      >
        <ChevronLeft size={48} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-all hidden md:block"
      >
        <ChevronRight size={48} />
      </button>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === currentSlide ? 'bg-amber-400 w-10' : 'bg-white/40 w-4 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;