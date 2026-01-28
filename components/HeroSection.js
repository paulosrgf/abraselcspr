'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const heroSlides = [
  {
    id: 1,
    // Note que separei a frase principal para aplicar estilos diferentes no render
    title: 'JUNTOS SOMOS FORTES', 
    subtitle: 'ABRASEL: UNIÃO QUE TRANSFORMA',
    ctaText: 'Associe-se Agora',
    ctaLink: '/associe-se',
    imageUrl: '/images/carrossel-um.jpg' 
  },
  {
    id: 2,
    title: 'PRÓXIMO EVENTO',
    subtitle: 'Fique por dentro das novidades e capacitações da região.',
    ctaText: 'Ver Agenda',
    ctaLink: '/eventos', 
    imageUrl: '/images/carrossel-dois.jpg' 
  },
  {
    id: 3,
    title: 'NOSSOS ASSOCIADOS',
    subtitle: 'Descubra os melhores estabelecimentos da região Centro Sul.',
    ctaText: 'Ver Lista Completa',
    ctaLink: '/associados',
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

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden bg-black">
      
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Imagem de Fundo com Overlay */}
          <div className="relative w-full h-full">
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Conteúdo Centralizado */}
          <div className="absolute inset-0 flex items-center justify-center text-center p-4">
            <div className="max-w-5xl z-20 px-4">
              
              {/* Lógica Diferenciada para o Slide 1 (A Assinatura da Abrasel) */}
              {index === 0 ? (
                <>
                  <span className="inline-block text-amber-500 font-black text-xs md:text-sm uppercase tracking-[0.5em] mb-6 drop-shadow-md">
                    Abrasel Centro Sul PR
                  </span>
                  <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
                    JUNTOS SOMOS <br />
                    <span className="text-green-600">FORTES</span>
                  </h2>
                  <div className="w-24 h-2 bg-white mx-auto rounded-full mb-8"></div>
                  <p className="text-lg md:text-3xl font-bold text-gray-100 tracking-[0.2em] uppercase italic mb-10">
                    União que <span className="text-amber-500 not-italic font-black">transforma</span>
                  </p>
                </>
              ) : (
                /* Estilo Padrão para os outros slides */
                <>
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                </>
              )}
              
              <Link
                href={slide.ctaLink}
                className={`inline-flex items-center justify-center px-12 py-5 
                            text-lg font-black uppercase tracking-widest rounded-2xl shadow-2xl transition duration-300 transform hover:scale-105
                            ${
                                slide.ctaText === 'Associe-se Agora' 
                                    ? 'bg-green-700 text-white hover:bg-green-600 shadow-green-900/40'
                                    : 'bg-white text-black hover:bg-gray-100 shadow-white/10'
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
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-2xl bg-white/5 hover:bg-white/20 text-white transition-all backdrop-blur-sm hidden md:block"
      >
        <ChevronLeft size={40} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-2xl bg-white/5 hover:bg-white/20 text-white transition-all backdrop-blur-sm hidden md:block"
      >
        <ChevronRight size={40} />
      </button>

      {/* Indicadores (Dots) Progressivos */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === currentSlide ? 'bg-green-600 w-16' : 'bg-white/20 w-6 hover:bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;