// app/page.js
"use client";
import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ConexaoAbrasel from "../components/ConexaoAbrasel";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

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

      {/* SEÇÃO DE DESTAQUE: SABORES DE INVERNO */}
      <motion.section {...fadeInVariant} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1a1a] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch border-b-8 border-amber-600 group">
            {/* Imagem do Evento */}
            <div className="w-full md:w-1/2 relative min-h-[300px] bg-zinc-800 overflow-hidden">
              <Image
                src="/images/eventos/saboresdeinverno.png"
                alt="Festival Sabores de Inverno"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
            </div>

            {/* Conteúdo */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center text-white">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-amber-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full">
                  Destaque
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">
                Sabores de Inverno <br />
                <span className="text-amber-500">em Guarapuava</span>
              </h2>

              <div className="space-y-2 mb-10">
                <p className="text-xl font-bold text-gray-100 italic">
                  Venha aquecer seu paladar com o melhor da gastronomia
                  regional.
                </p>
                <p className="text-amber-500 font-black uppercase tracking-widest text-sm">
                  03 a 05 de Julho | Centro de Eventos Cidade dos Lagos
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/eventos"
                  className="bg-amber-500 text-black font-black px-10 py-4 rounded-2xl text-lg hover:bg-white transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  VER MAIS DETALHES
                </Link>
                <span className="text-gray-500 font-black text-[10px] uppercase tracking-[0.2em]">
                  #SaboresDeInverno
                </span>
              </div>
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
