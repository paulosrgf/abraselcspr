'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  MapPin,
  ArrowRight,
  Music,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import EventCountdown from './EventCountdown';

const EVENTO_HREF = '/guarapuava-gastronomica-de-primavera';
const MAPS_HREF =
  'https://www.google.com/maps/search/?api=1&query=Centro+de+Eventos+Cidade+dos+Lagos+Guarapuava';

const BANNER = '/images/eventos/guarapuava-gastronomica-primavera-banner.jpg';
const POSTER = '/images/eventos/guarapuava-gastronomica-primavera-destaque.jpg';

const heroSlides = [
  {
    id: 1,
    tipo: 'evento',
    title: 'Guarapuava Gastronômica - Edição Primavera',
    fundo: BANNER,
    poster: POSTER,
  },
  {
    id: 2,
    tipo: 'banner',
    title: 'Guarapuava Gastronômica - Banner oficial',
    banner: BANNER,
    poster: POSTER,
  },
  {
    id: 3,
    tipo: 'abrasel',
    title: 'JUNTOS SOMOS FORTES',
    subtitle: 'ABRASEL: UNIÃO QUE TRANSFORMA',
    ctaText: 'Associe-se Agora',
    ctaLink: '/associe-se',
    imageUrl: '/images/carrossel-um.jpg',
  },
  {
    id: 4,
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
      className="relative w-full h-[700px] sm:h-[640px] lg:h-[660px] overflow-hidden bg-[#04200f]"
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
            {/* ===================== SLIDE 1: EVENTO + CONTAGEM ===================== */}
            {slide.tipo === 'evento' ? (
              <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#04200f] via-[#0a3b1d] to-[#0f5f2d]">
                <Image
                  src={slide.fundo}
                  alt=""
                  aria-hidden="true"
                  fill
                  loading="eager"
                  quality={40}
                  sizes="100vw"
                  className="scale-110 object-cover opacity-30 blur-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#04200f] via-[#04200f]/75 to-[#04200f]/20" />
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-green-500/20 blur-3xl"
                />

                <div className="relative z-20 mx-auto grid h-full max-w-7xl items-center gap-10 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-12">
                  {/* Texto */}
                  <div className="lg:col-span-7">
                    <span className="inline-flex items-center rounded-full bg-amber-400 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-black">
                      Entrada e estacionamento gratuitos
                    </span>

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-green-200 sm:text-sm">
                      Celebrando a gastronomia de nossa cidade
                    </p>

                    <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
                      Guarapuava <br className="hidden sm:block" />
                      Gastronômica
                      <span className="mt-3 block font-serif text-3xl font-semibold normal-case italic tracking-normal text-amber-300 sm:text-5xl lg:text-6xl">
                        edição Primavera
                      </span>
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-white sm:text-base">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
                        <CalendarDays size={18} className="text-amber-300" />
                        30 Out a 01 Nov
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
                        <MapPin size={18} className="text-amber-300" />
                        Centro de Eventos Cidade dos Lagos
                      </span>
                    </div>

                    <EventCountdown className="mt-6" />

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        href={EVENTO_HREF}
                        tabIndex={ativo ? 0 : -1}
                        className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-7 py-4 text-base font-black text-black shadow-xl transition hover:-translate-y-0.5 hover:bg-amber-300"
                      >
                        Ver detalhes
                        <ArrowRight size={18} />
                      </Link>
                      <a
                        href={MAPS_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={ativo ? 0 : -1}
                        className="inline-flex items-center rounded-2xl border border-white/30 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
                      >
                        Como chegar
                      </a>
                    </div>

                    <p className="mt-6 hidden text-xs text-green-100/80 sm:block">
                      Realização Abrasel Centro-Sul PR · Patrocínio master Itaipu
                      Binacional
                    </p>
                  </div>

                  {/* Arte quadrada (só computador) */}
                  <div className="hidden justify-center lg:col-span-5 lg:flex">
                    <Link
                      href={EVENTO_HREF}
                      tabIndex={ativo ? 0 : -1}
                      aria-label="Ver detalhes da Guarapuava Gastronômica de Primavera"
                      className="relative block w-full max-w-[420px] rotate-3 transition duration-500 hover:rotate-0"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-400/40 to-green-400/30 blur-xl"
                      />
                      <div className="relative aspect-square overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-white/30">
                        <Image
                          src={slide.poster}
                          alt="Arte de divulgação da Guarapuava Gastronômica edição Primavera, de 30 de outubro a 1º de novembro, com show de Jeann e Julio"
                          fill
                          loading="eager"
                          sizes="420px"
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-black">
                          <Music size={18} />
                        </span>
                        <span className="leading-tight">
                          <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            Show · 31 out · 21h30
                          </span>
                          <span className="block text-sm font-black text-gray-900">
                            Jeann &amp; Julio
                          </span>
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ) : slide.tipo === 'banner' ? (
              /* ===================== SLIDE 2: BANNER OFICIAL ===================== */
              <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#04200f] via-[#0a3b1d] to-[#0f5f2d]">
                {/* Fundo: a própria arte desfocada */}
                <Image
                  src={slide.banner}
                  alt=""
                  aria-hidden="true"
                  fill
                  loading="eager"
                  quality={40}
                  sizes="100vw"
                  className="scale-110 object-cover opacity-40 blur-2xl"
                />
                <div className="absolute inset-0 bg-black/20" />

                <Link
                  href={EVENTO_HREF}
                  tabIndex={ativo ? 0 : -1}
                  aria-label="Ver detalhes da Guarapuava Gastronômica de Primavera"
                  className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-6 px-5 pb-16 pt-6 md:px-16"
                >
                  {/* COMPUTADOR / TABLET: banner largo inteiro */}
                  <Image
                    src={slide.banner}
                    alt="Guarapuava Gastronômica edição Primavera, de 30 de outubro a 1º de novembro, no Centro de Eventos Cidade dos Lagos. Entrada e estacionamento gratuitos. Patrocínio master Itaipu Binacional."
                    width={1983}
                    height={793}
                    loading="eager"
                    sizes="(min-width: 768px) 1600px, 1px"
                    className="hidden h-auto max-h-full w-auto max-w-full rounded-3xl shadow-2xl ring-1 ring-white/20 transition duration-500 hover:scale-[1.01] md:block"
                  />

                  {/* CELULAR: arte quadrada, bem mais legível */}
                  <Image
                    src={slide.poster}
                    alt="Arte de divulgação da Guarapuava Gastronômica edição Primavera, de 30 de outubro a 1º de novembro, com show de Jeann e Julio"
                    width={1024}
                    height={1024}
                    loading="eager"
                    sizes="(max-width: 767px) 90vw, 1px"
                    className="h-auto w-full max-w-sm rounded-3xl shadow-2xl ring-1 ring-white/20 md:hidden"
                  />
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-7 py-3 text-base font-black text-black shadow-xl md:hidden">
                    Ver detalhes
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            ) : (
              /* ===================== SLIDES NORMAIS ===================== */
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
                        <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.5em] text-amber-500 drop-shadow-md md:mb-6 md:text-sm">
                          Abrasel Centro Sul PR
                        </span>
                        <h2 className="mb-6 text-5xl font-black uppercase leading-[0.85] tracking-tighter text-white md:mb-8 md:text-7xl lg:text-8xl">
                          JUNTOS SOMOS <br />
                          <span className="text-green-500">FORTES</span>
                        </h2>
                        <div className="mx-auto mb-6 h-2 w-24 rounded-full bg-white md:mb-8"></div>
                        <p className="mb-8 text-lg font-bold uppercase italic tracking-[0.2em] text-gray-100 md:mb-10 md:text-3xl">
                          União que{' '}
                          <span className="font-black not-italic text-amber-500">
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
                          : 'bg-white text-black shadow-white/10 hover:bg-gray-100'
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
        className="absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 rounded-2xl bg-black/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/40 md:block"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 rounded-2xl bg-black/20 p-3 text-white backdrop-blur-sm transition-all hover:bg-black/40 md:block"
      >
        <ChevronRight size={40} />
      </button>

      {/* Indicadores (bolinhas) */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide
                ? 'w-14 bg-amber-400'
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