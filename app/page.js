// app/page.js
"use client";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Ticket, Music, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ConexaoAbrasel from "../components/ConexaoAbrasel";
import SponsorBanner from "../components/SponsorBanner";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

// ============================================================
// EDITE AQUI: evento em destaque na página inicial
// ============================================================
const DESTAQUE = {
  imagem: "/images/eventos/guarapuava-gastronomica-primavera-destaque.jpg",
  imagemAlt:
    "Guarapuava Gastronômica edição Primavera, de 30 de outubro a 1º de novembro, com show de Jeann e Julio no dia 31 às 21h30",
  href: "/guarapuava-gastronomica-de-primavera",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Centro+de+Eventos+Cidade+dos+Lagos+Guarapuava",
};

const INFO = [
  { icon: CalendarDays, label: "Data", valor: "30 de outubro a 1º de novembro" },
  { icon: MapPin, label: "Local", valor: "Centro de Eventos Cidade dos Lagos" },
  { icon: Ticket, label: "Entrada", valor: "Gratuita, com estacionamento gratuito" },
];
// ============================================================

export default function Home() {
  // Configuração padrão de animação suave e profissional
  const fadeInVariant = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header />

      <HeroSection />

      {/* FAIXA DE PATROCÍNIO: ITAIPU */}
      <section
        aria-label="Patrocinador"
        className="border-b border-gray-100 bg-white py-8"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SponsorBanner
            variant="band"
            placement="home-faixa"
            label="Patrocínio master"
            size="md"
          />
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUE: EVENTO ATUAL */}
      <motion.section
        {...fadeInVariant}
        className="relative bg-gradient-to-b from-white via-green-50/60 to-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Arte do evento */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-green-600/25 to-amber-400/25 blur-2xl"
              />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5">
                <Image
                  src={DESTAQUE.imagem}
                  alt={DESTAQUE.imagemAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-cover"
                />
              </div>

              {/* Selo flutuante do show */}
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5 sm:left-auto sm:right-6">
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
            </div>

            {/* Conteúdo */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-green-800">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Acontece em breve
              </span>

              <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-5xl">
                Guarapuava Gastronômica
                <span className="block text-green-700">Edição Primavera</span>
              </h2>

              <p className="mt-5 max-w-xl text-lg text-gray-600">
                Três dias para celebrar a gastronomia da nossa cidade, com
                cervejarias, shows, artesanato e área kids.
              </p>

              <ul className="mt-8 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {INFO.map(({ icon: Icon, label, valor }) => (
                  <li key={label} className="flex items-center gap-4 px-5 py-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <Icon size={22} />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">
                        {label}
                      </span>
                      <span className="block text-base font-semibold text-gray-900">
                        {valor}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={DESTAQUE.href}
                  className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-7 py-4 text-base font-black text-white shadow-lg shadow-green-900/20 transition hover:-translate-y-0.5 hover:bg-green-600"
                >
                  Ver detalhes do evento
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={DESTAQUE.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-2xl border border-gray-300 bg-white px-7 py-4 text-base font-bold text-gray-800 transition hover:border-green-700 hover:text-green-700"
                >
                  Como chegar
                </a>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                Realização Abrasel Centro-Sul PR · Patrocínio master Itaipu
                Binacional
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SEÇÃO CONEXÃO ABRASEL COM ANIMAÇÃO */}
      <motion.div {...fadeInVariant}>
        <ConexaoAbrasel />
      </motion.div>

      {/* SEÇÃO CTA FINAL COM ANIMAÇÃO */}
      <motion.section
        {...fadeInVariant}
        className="py-20 bg-gray-50 border-t border-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Faça parte da maior rede de gastronomia do Brasil
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Associe sua empresa à Abrasel Centro Sul do Paraná e tenha acesso a
            benefícios exclusivos.
          </p>
          <Link
            href="/associe-se"
            className="bg-amber-500 text-black font-extrabold px-12 py-4 rounded-full text-lg hover:bg-amber-400 hover:shadow-xl transition-all shadow-lg inline-block hover:-translate-y-0.5 active:translate-y-0"
          >
            QUERO ME ASSOCIAR AGORA
          </Link>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}