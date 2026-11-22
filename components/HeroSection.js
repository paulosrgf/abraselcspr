// components/HeroSection.js
'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const RELATORIO_HREF = '/noticias/anais-de-acao-guarapuava-gastronomica-primavera-2026';

const heroSlides = [
  {
    id: 1,
    tipo: 'relatorio',
    tag: 'Abrasel CSPR · Relatório de Execução',
    title: 'Anais de Ação',
    highlight: 'Guarapuava Gastronômica 2026',
    subtitle:
      'Balanço oficial da edição Primavera no Centro de Eventos Cidade dos Lagos, com resultados de público, mídia e contrapartidas junto à Itaipu Binacional.',
    ctaText: 'Ler o relatório',
    ctaLink: RELATORIO_HREF,
    secondaryText: 'Todas as notícias',
    secondaryLink: '/noticias',
    fundo: '/news-images/anais-2026/palco.jpg',
    cardImage: '/news-images/anais-2026/brinde.jpg',
  },
  {
    id: 2,
    tipo: 'abrasel',
    title: 'JUNTOS SOMOS FORTES',
    subtitle: 'ABRASEL: UNIÃO QUE TRANSFORMA',
    ctaText: 'Associe-se Agora',
    ctaLink: '/associe-se',
    imageUrl: '/images/carrossel-um.jpg',
  },
  {
    id: 3,
    tipo: 'padrao',
    title: 'NOSSOS ASSOCIADOS',
    subtitle: 'Descubra os melhores estabelecimentos da região Centro Sul.',
    ctaText: 'Ver Lista Completa',
    ctaLink: '/associados',
    imageUrl: '/images/carrossel-tres.jpg',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalSlides = heroSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide, paused]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Destaques da Abrasel Centro Sul PR"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full h-[640px] sm:h-[600px] lg:h-[640px] overflow-hidden bg-[#04200f]"
    >
      {heroSlides.map((slide, index) => {
        const ativo = index === currentSlide;

        return (
          <div
            key={slide.id}
            aria-hidden={!ativo}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${ativo ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
          >
            {slide.tipo === 'relatorio' ? (
              /* ===================== SLIDE 1: FUNDO COM IMAGEM + VERDE ===================== */
              <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#04200f] via-[#0a3b1d] to-[#0f5f2d]">
                <Image
                  src={slide.fundo}
                  alt=""
                  aria-hidden="true"
                  fill
                  loading="eager"
                  quality={45}
                  sizes="100vw"
                  className="scale-110 object-cover opacity-35 blur-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#04200f]/90 via-[#04200f]/75 to-[#04200f]/35" />
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-green-500/20 blur-3xl"
                />

                <div className="relative z-20 mx-auto grid h-full max-w-7xl items-center gap-10 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-white ring-1 ring-green-300/30">
                      <FileText size={14} className="text-green-200" />
                      {slide.tag}
                    </span>

                    <h2 className="mt-5 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl">
                      {slide.title}
                      <span className="mt-2 block text-green-300">
                        {slide.highlight}
                      </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base text-green-50/90 sm:text-lg leading-relaxed">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={slide.ctaLink}
                        tabIndex={ativo ? 0 : -1}
                        className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-7 py-4 text-base font-black text-white shadow-xl shadow-green-950/40 ring-1 ring-green-300/30 transition hover:-translate-y-0.5 hover:bg-green-500"
                      >
                        {slide.ctaText}
                        <ArrowRight size={18} />
                      </Link>
                      <Link
                        href={slide.secondaryLink}
                        tabIndex={ativo ? 0 : -1}
                        className="inline-flex items-center rounded-2xl border border-white/30 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
                      >
                        {slide.secondaryText}
                      </Link>
                    </div>

                    <p className="mt-6 text-xs text-green-100/80">
                      Realização Abrasel Centro-Sul PR · Patrocínio master Itaipu Binacional
                    </p>
                  </div>

                  {/* Card fotográfico complementar (desktop) */}
                  <div className="hidden lg:col-span-5 lg:flex justify-center">
                    <Link
                      href={slide.ctaLink}
                      tabIndex={ativo ? 0 : -1}
                      className="group relative block w-full max-w-[440px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/25"
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={slide.cardImage}
                          alt="Abertura oficial da Guarapuava Gastronômica de Primavera 2026"
                          fill
                          sizes="440px"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="bg-[#04200f]/95 px-5 py-4 border-t border-white/10 backdrop-blur">
                        <p className="text-[11px] font-black uppercase tracking-widest text-green-300">
                          Projeto nº 13262/2025
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          15 a 20 mil pessoas · 30 out a 01 nov 2026
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              /* ===================== SLIDES INSTITUCIONAIS ===================== */
              <>
                <div className="relative h-full w-full bg-gradient-to-br from-green-950 to-green-800">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    fill
                    loading="eager"
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <div className="z-20 max-w-5xl px-4">
                    {slide.tipo === 'abrasel' ? (
                      <>
                        <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.5em] text-green-300 drop-shadow-md md:mb-6 md:text-sm">
                          Abrasel Centro Sul PR
                        </span>
                        <h2 className="mb-6 text-5xl font-black uppercase leading-[0.85] tracking-tighter text-white md:mb-8 md:text-7xl lg:text-8xl">
                          JUNTOS SOMOS <br />
                          <span className="text-green-400">FORTES</span>
                        </h2>
                        <div className="mx-auto mb-6 h-2 w-24 rounded-full bg-white md:mb-8" />
                        <p className="mb-8 text-lg font-bold uppercase italic tracking-[0.2em] text-gray-100 md:mb-10 md:text-3xl">
                          União que{' '}
                          <span className="font-black not-italic text-green-300">
                            transforma
                          </span>
                        </p>
                      </>
                    ) : (
                      <>
                        <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tighter text-white sm:text-5xl md:text-7xl">
                          {slide.title}
                        </h2>
                        <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-gray-200 md:text-2xl">
                          {slide.subtitle}
                        </p>
                      </>
                    )}

                    <Link
                      href={slide.ctaLink}
                      tabIndex={ativo ? 0 : -1}
                      className={`inline-flex transform items-center justify-center rounded-2xl px-12 py-5 text-lg font-black uppercase tracking-widest shadow-2xl transition duration-300 hover:scale-105 ${slide.tipo === 'abrasel'
                          ? 'bg-green-700 text-white shadow-green-900/40 hover:bg-green-600'
                          : 'bg-white text-green-800 shadow-white/10 hover:bg-gray-100'
                        }`}
                    >
                      {slide.ctaText}
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}

      {/* Setas de Navegação */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 rounded-2xl bg-black/25 p-3 text-white backdrop-blur-sm transition-all hover:bg-green-700/80 md:block"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 rounded-2xl bg-black/25 p-3 text-white backdrop-blur-sm transition-all hover:bg-green-700/80 md:block"
      >
        <ChevronRight size={40} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide
                ? 'w-14 bg-green-400'
                : 'w-6 bg-white/40 hover:bg-white/70'
              }`}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;