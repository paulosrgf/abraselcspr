// app/page.js

import Header from '../components/Header';
import HeroSection from '../components/HeroSection'; 
import NewsHighlights from '../components/NewsHighlights'; // <-- NOVO IMPORT REAL
import FeaturedAssociates from '../components/FeaturedAssociates'; 
import Footer from '../components/Footer'; 

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="bg-gray-900 text-white"> 
        
        <HeroSection />

        {/* 1. Seção de Notícias REAL (Substituindo o Placeholder) */}
        <NewsHighlights /> 

        {/* 2. Seção de Associados em Destaque */}
        <FeaturedAssociates />

      </main>
      
      <Footer />
    </>
  );
}