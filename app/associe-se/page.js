// app/associe-se/page.js

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AssociationForm from '../../components/AssociationForm'; // Importa o formulário

export default function AssocieSePage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen">
        
        {/* Banner de Título Principal */}
        <section className="bg-black py-16 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-6xl font-extrabold text-white">
                    <span className="text-amber-500">Associe-se</span> à ABRASEL
                </h1>
                <p className="text-gray-400 mt-3 text-xl">
                    Junte-se à maior entidade de bares e restaurantes da região e fortaleça seu negócio.
                </p>
            </div>
        </section>

        {/* Seção do Formulário */}
        <section className="py-20 bg-gray-950">
            <AssociationForm />
        </section>

      </main>
      <Footer />
    </>
  );
}