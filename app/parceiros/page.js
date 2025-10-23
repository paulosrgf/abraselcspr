// app/parceiros/page.js

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PartnerGrid from '../../components/PartnerGrid'; // O novo componente

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen">
        
        {/* Banner de Título Principal */}
        <section className="bg-black py-16 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-6xl font-extrabold text-white">
                    Nossos <span className="text-green-700">Parceiros</span>
                </h1>
                <p className="text-gray-400 mt-3 text-xl">
                    Conheça as empresas e instituições que fortalecem nossa missão.
                </p>
            </div>
        </section>

        {/* Seção do Grid de Parceiros */}
        <PartnerGrid />

      </main>
      <Footer />
    </>
  );
}