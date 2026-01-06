// app/eventos/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { UPCOMING_EVENTS } from '../../data/eventsData';
import { Calendar, MapPin, Info } from 'lucide-react';

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      {/* Cabeçalho Minimalista */}
      <div className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
              AGENDA <span className="text-green-700">2026</span>
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              Calendário oficial de eventos e festivais Abrasel.
            </p>
          </div>
          
          {/* Aviso Discreto */}
          <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-100 text-sm font-medium">
            <Info size={16} />
            <span>Datas sujeitas a alteração</span>
          </div>
        </div>
      </div>

      {/* Grid de Eventos */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event) => (
            <div 
              key={event.id} 
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Badge de Categoria */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-gray-100 text-gray-600 rounded-full group-hover:bg-green-700 group-hover:text-white transition-colors">
                    {event.type}
                  </span>
                </div>

                {/* Título e Data */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-tight">
                  {event.title}
                </h3>
                
                <div className="flex items-center text-amber-500 font-bold text-sm mb-4">
                  <Calendar size={16} className="mr-2" />
                  {event.date}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
              </div>

              {/* Localização no Rodapé do Card */}
              <div className="pt-4 border-t border-gray-50 flex items-center text-gray-400 text-xs">
                <MapPin size={14} className="mr-1 text-green-600" />
                {event.location}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}