// components/HeroSection.js

'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Dados de exemplo para o Carrossel
const heroSlides = [
  {
    id: 1,
    title: 'JUNTOS, FORTES', 
    subtitle: 'A união que fortalece o setor de Bares e Restaurantes no Centro Sul do Paraná.',
    ctaText: 'Associe-se Agora',
    ctaLink: '/associe-se',
     },
  {
    id: 2,
    title: 'PRÓXIMO EVENTO',
    subtitle: 'Workshop de Inovação: Inscrições abertas!',
    ctaText: 'Ver Agenda',
    ctaLink: '/eventos', 
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f34bce71932?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  {
    id: 3,
    title: 'CONHEÇA NOSSOS ASSOCIADOS',
    subtitle: 'Descubra os melhores estabelecimentos da região. Qualidade e sabor garantidos.',
    ctaText: 'Ver Lista Completa',
    ctaLink: '/associados',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
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

  // Autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // Muda a cada 7 segundos
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
      
      {/* Slides do Carrossel */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Imagem de Fundo */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            {/* Overlay Escuro para Legibilidade do Texto */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Conteúdo (Texto e CTA) */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <div className="max-w-3xl">
              {/* Título Principal em Cor Âmbar/Amarelo */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-400 mb-4 tracking-tight leading-tight">
                {slide.title}
              </h2>
              {/* Subtítulo em Branco */}
              <p className="text-xl md:text-2xl text-white mb-8 font-light">
                {slide.subtitle}
              </p>
              
              {/* Botão CTA (Cor Verde da ABRASEL) */}
              <Link
                href={slide.ctaLink}
                className={`inline-flex items-center justify-center px-8 py-3 
                            text-lg font-bold uppercase tracking-wider rounded-lg shadow-xl transition duration-300
                            ${
                                // Usa o verde principal para o CTA de associação
                                slide.ctaText === 'Associe-se Agora' 
                                    ? 'bg-green-700 text-white hover:bg-green-600'
                                    // Usa o âmbar para outros CTAs para contraste
                                    : 'bg-amber-500 text-black hover:bg-amber-400'
                            }`}
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navegação (Setas) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white transition"
        aria-label="Slide Anterior"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 hover:bg-black/60 text-white transition"
        aria-label="Próximo Slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicadores de Slide (Dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-amber-400' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection; 