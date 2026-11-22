// app/page.js
"use client";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ConexaoAbrasel from "../components/ConexaoAbrasel";
import SponsorBanner from "../components/SponsorBanner";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const RELATORIO_DESTAQUE = {
  etiqueta: "Abrasel CSPR · Prestação de Contas",
  titulo: "Anais de Ação: Guarapuava Gastronômica de Primavera 2026",
  resumo:
    "Confira os resultados consolidados do festival realizado no Centro de Eventos Cidade dos Lagos, com comprovação das entregas e contrapartidas junto à Itaipu Binacional.",
  imagem: "/news-images/anais-2026/palco.jpg",
  imagemAlt:
    "Palco principal da Guarapuava Gastronômica de Primavera 2026 com a marca da Itaipu Binacional",
  href: "/noticias/anais-de-acao-guarapuava-gastronomica-primavera-2026",
  numeros: [
    { valor: "15 a 20 mil", label: "Público estimado" },
    { valor: "29,4 mil", label: "Impressões digitais" },
    { valor: "15 veículos", label: "Cobertura de mídia" },
  ],
};

export default function Home() {
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

      {/* DESTAQUE REGIONAL: ANAIS DE AÇÃO ITAIPU 2026 */}
      <motion.section
        {...fadeInVariant}
        className="relative bg-gradient-to-b from-white via-green-50/40 to-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Foto grande do palco */}
            <div className="lg:col-span-6">
              <Link
                href={RELATORIO_DESTAQUE.href}
                className="group relative block overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 aspect-[16/11]"
              >
                <Image
                  src={RELATORIO_DESTAQUE.imagem}
                  alt={RELATORIO_DESTAQUE.imagemAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-gray-900 shadow">
                  <FileText size={14} className="text-green-700" />
                  Projeto nº 13262/2025 · Itaipu Binacional
                </span>
              </Link>
            </div>

            {/* Texto, 3 números e CTA */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-green-800">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                {RELATORIO_DESTAQUE.etiqueta}
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-4xl">
                {RELATORIO_DESTAQUE.titulo}
              </h2>

              <p className="mt-4 text-base sm:text-lg text-gray-600 line-clamp-2 leading-relaxed">
                {RELATORIO_DESTAQUE.resumo}
              </p>

              {/* Três números */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-y border-gray-200/80 py-6">
                {RELATORIO_DESTAQUE.numeros.map((item) => (
                  <div key={item.label}>
                    <p className="text-xl sm:text-2xl font-black text-green-700">
                      {item.valor}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-gray-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={RELATORIO_DESTAQUE.href}
                  className="inline-flex items-center gap-2 rounded-2xl bg-green-700 px-7 py-4 text-base font-black text-white shadow-lg shadow-green-900/20 transition hover:-translate-y-0.5 hover:bg-green-600"
                >
                  Ler o relatório
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/noticias"
                  className="text-sm font-bold text-gray-600 hover:text-green-700 transition"
                >
                  Ver todas as notícias &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SEÇÃO CONEXÃO ABRASEL */}
      <motion.div {...fadeInVariant}>
        <ConexaoAbrasel />
      </motion.div>

      {/* SEÇÃO CTA FINAL */}
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
            className="bg-green-700 text-white font-extrabold px-12 py-4 rounded-full text-lg hover:bg-green-800 hover:shadow-xl transition-all shadow-lg inline-block hover:-translate-y-0.5 active:translate-y-0"
          >
            QUERO ME ASSOCIAR AGORA
          </Link>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}