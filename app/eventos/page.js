// app/eventos/page.js
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EventsHero from '../../components/EventsHero';
import EventsExplorer from '../../components/EventsExplorer';
import { UPCOMING_EVENTS } from '../../data/eventsData';
import { absoluteUrl, SITE_URL } from '../../data/eventsUtils';

export const metadata = {
  title: 'Eventos | Abrasel Centro-Sul do Paraná',
  description:
    'Agenda 2026 da Abrasel Centro-Sul do Paraná: Guarapuava Gastronômica, Festival Bar em Bar, HFN e Encontro Nacional Abrasel. Datas, locais e como participar.',
};

// Dados estruturados: ajudam o Google a mostrar os eventos nos resultados de busca
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': UPCOMING_EVENTS.map((ev) => ({
    '@type': 'Event',
    name: ev.title,
    description: ev.description,
    startDate: ev.start,
    endDate: ev.end,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: { '@type': 'Place', name: ev.location, address: ev.location },
    url: absoluteUrl(ev.href),
    ...(ev.image && { image: [`${SITE_URL}${ev.image}`] }),
    ...(ev.organizer && {
      organizer: { '@type': 'Organization', name: ev.organizer },
    }),
  })),
};

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <Header />

      <EventsHero events={UPCOMING_EVENTS} />

      <EventsExplorer events={UPCOMING_EVENTS} />

      {/* Chamada final */}
      <section className="border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-black text-gray-900 md:text-3xl">
            Associados vivem a Abrasel por dentro
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            O Encontro Nacional Abrasel, por exemplo, é gratuito para associados.
            Faça parte da rede e aproveite.
          </p>
          <Link
            href="/associe-se"
            className="mt-8 inline-block rounded-full bg-amber-500 px-10 py-4 text-lg font-extrabold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl"
          >
            QUERO ME ASSOCIAR
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}