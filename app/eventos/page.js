// app/eventos/page.js

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ALL_EVENTS_DATA } from '../../data/eventsData'; 
import { Calendar, MapPin, Globe } from 'lucide-react'; 

export default function EventosPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 text-white min-h-screen">
        
        {/* Banner de Título Principal */}
        <section className="bg-black py-16 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-6xl font-extrabold text-white">
                    Próximos <span className="text-amber-500">Eventos</span>
                </h1>
                <p className="text-gray-400 mt-3 text-xl">
                    Capacitação, Networking e Feiras para o setor de alimentação fora do lar.
                </p>
            </div>
        </section>

        {/* Lista de Eventos */}
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-3">
                    Agenda Regional ABRASEL CSPR
                </h2>
                
                <div className="space-y-6">
                    {ALL_EVENTS_DATA.map(event => (
                        <div key={event.id} className="p-6 bg-gray-800 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center shadow-2xl">
                            
                            {/* Detalhes do Evento */}
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-2xl font-semibold text-white mb-1">{event.title}</h3>
                                <div className="text-sm text-gray-400 space-y-1">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2 text-amber-500" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center">
                                        {event.isOnline ? (
                                            <Globe className="w-4 h-4 mr-2 text-green-700" />
                                        ) : (
                                            <MapPin className="w-4 h-4 mr-2 text-green-700" />
                                        )}
                                        {event.location}
                                    </div>
                                </div>
                            </div>

                            {/* Status e CTA */}
                            <div className="flex flex-col items-start md:items-end space-y-3">
                                <span className={`px-4 py-1 text-sm font-bold rounded-full ${
                                    event.status.includes('Abertas') ? 'bg-green-600 text-white' : 'bg-amber-600 text-black'
                                }`}>
                                    {event.status}
                                </span>
                                <Link 
                                    href={event.detailsLink} 
                                    className="text-sm font-semibold text-amber-500 hover:text-amber-400 transition underline"
                                >
                                    Fale Conosco para Detalhes &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-gray-400 mt-12 text-center text-lg">
                    Para mais informações ou sugestões de eventos, entre em contato via nossa página <Link href="/associe-se" className="text-green-500 underline hover:text-green-400">Associe-se</Link>.
                </p>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}