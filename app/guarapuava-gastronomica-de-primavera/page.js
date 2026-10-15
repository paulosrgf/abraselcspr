import Link from 'next/link';
import SponsorBanner from '@/components/SponsorBanner';
import ShareButtons from '@/components/ShareButtons';

// ============================================================
// EDITE AQUI: dados do evento (troque tudo que diz PREENCHER)
// ============================================================
const SITE_URL = 'https://abraselcspr.com.br';
const PAGE_PATH = '/guarapuava-gastronomica-de-primavera';

const EVENT = {
    name: 'Guarapuava Gastronômica - Edição Primavera',
    shortDescription:
        'De 30 de outubro a 1º de novembro, no Centro de Eventos Cidade dos Lagos: gastronomia, cervejarias, shows, artesanato e área kids, com entrada e estacionamento gratuitos. Patrocínio master: Itaipu Binacional.',
    dateText: '30 de outubro a 1º de novembro de 2026',
    startDateISO: '2026-10-30',
    endDateISO: '2026-11-01',
    locationName: 'Centro de Eventos Cidade dos Lagos - Guarapuava/PR',
    ogImage: '/images/eventos/guarapuava-gastronomica-primavera-destaque.jpg',
    ctaText: 'Quero participar',
    ctaHref: '/associe-se',
    paragraphs: [
        'A Guarapuava Gastronômica, edição Primavera, celebra a gastronomia da nossa cidade com bares e restaurantes, cervejarias, shows, artesanato e área kids, tudo com entrada e estacionamento gratuitos.',
        'No sábado, 31 de outubro, às 21h30, o palco recebe o show da dupla Jeann & Julio.',
        'O evento é uma realização da Abrasel Regional Centro-Sul do Paraná, com patrocínio master da Itaipu Binacional (Projeto 13262/2025), patrocínio da Cresol e da Cielo, e apoio da Prefeitura de Guarapuava e da Secretaria de Turismo e Eventos.',
    ],
};
// ============================================================

const pageUrl = `${SITE_URL}${PAGE_PATH}`;

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: `${EVENT.name} | Abrasel Centro-Sul do Paraná`,
    description: EVENT.shortDescription,
    alternates: { canonical: PAGE_PATH },
    openGraph: {
        type: 'article',
        url: pageUrl,
        siteName: 'Abrasel Centro-Sul do Paraná',
        locale: 'pt_BR',
        title: `${EVENT.name} | Patrocínio Itaipu Binacional`,
        description: EVENT.shortDescription,
        images: [
            {
                url: EVENT.ogImage,
                width: 1024,
                height: 1024,
                alt: `${EVENT.name} - Patrocínio Itaipu Binacional`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${EVENT.name} | Patrocínio Itaipu Binacional`,
        description: EVENT.shortDescription,
        images: [EVENT.ogImage],
    },
};

export default function GuarapuavaGastronomicaPage() {
    // Dados estruturados para o Google entender que é um evento
    // (só é gerado quando você preencher a data de início)
    const jsonLd = EVENT.startDateISO
        ? {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: EVENT.name,
            description: EVENT.shortDescription,
            startDate: EVENT.startDateISO,
            ...(EVENT.endDateISO && { endDate: EVENT.endDateISO }),
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
                '@type': 'Place',
                name: EVENT.locationName,
                address: { '@type': 'PostalAddress', addressLocality: 'Guarapuava', addressRegion: 'PR', addressCountry: 'BR' },
            },
            image: [`${SITE_URL}${EVENT.ogImage}`],
            organizer: {
                '@type': 'Organization',
                name: 'Abrasel Centro-Sul do Paraná',
                url: SITE_URL,
            },
            sponsor: {
                '@type': 'Organization',
                name: 'Itaipu Binacional',
                url: 'https://www.itaipu.gov.br',
            },
        }
        : null;

    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}

            <article>
                <header className="mb-8">
                    {/* Banner da Itaipu visível já no topo, sem precisar rolar */}
                    <SponsorBanner placement="evento-topo" size="md" className="mb-6" />

                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-700">
                        Evento
                    </p>
                    <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        {EVENT.name}
                    </h1>

                    <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg bg-gray-50 p-4">
                            <dt className="text-xs font-semibold uppercase text-gray-500">Data</dt>
                            <dd className="mt-1 text-base font-medium text-gray-900">{EVENT.dateText}</dd>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-4">
                            <dt className="text-xs font-semibold uppercase text-gray-500">Local</dt>
                            <dd className="mt-1 text-base font-medium text-gray-900">{EVENT.locationName}</dd>
                        </div>
                    </dl>

                    <div className="mt-6">
                        <Link
                            href={EVENT.ctaHref}
                            className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-base font-bold text-white transition hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                        >
                            {EVENT.ctaText}
                        </Link>
                    </div>
                </header>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="space-y-5 text-lg leading-relaxed text-gray-800 lg:col-span-2">
                        {EVENT.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}

                        <section aria-labelledby="compartilhe" className="pt-4">
                            <h2 id="compartilhe" className="mb-3 text-xl font-bold text-gray-900">
                                Compartilhe este evento
                            </h2>
                            <ShareButtons url={pageUrl} title={EVENT.name} />
                        </section>
                    </div>

                    {/* Lateral: patrocinador em destaque (no celular aparece abaixo do texto) */}
                    <aside className="lg:col-span-1">
                        <div className="lg:sticky lg:top-24">
                            <SponsorBanner
                                placement="evento-lateral"
                                size="lg"
                                className="w-full"
                            />
                        </div>
                    </aside>
                </div>

                <footer className="mt-12 border-t border-gray-200 pt-6">
                    <p className="mb-4 text-sm text-gray-600">
                        Este evento é uma realização da Abrasel Regional Centro-Sul do Paraná, com
                        patrocínio da Itaipu Binacional - Projeto 13262/2025.
                    </p>
                    <SponsorBanner placement="evento-rodape" size="sm" />
                </footer>
            </article>
        </main>
    );
}