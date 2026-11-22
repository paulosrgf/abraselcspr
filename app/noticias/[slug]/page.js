// app/noticias/[slug]/page.js
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ALL_NEWS_DATA } from '../../../data/newsData';

export default function NewsArticlePage({ params }) {
  const { slug } = params;
  const cleanSlug = slug.toLowerCase();
  const article = ALL_NEWS_DATA.find((item) => item.slug.toLowerCase() === cleanSlug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="bg-white text-gray-900 min-h-screen py-24 px-4 text-center">
          <h1 className="text-4xl font-extrabold text-green-700">Notícia Não Encontrada (404)</h1>
          <p className="text-gray-600 mt-4">A notícia que você procurava pode ter sido removida.</p>
          <Link
            href="/noticias"
            className="mt-6 inline-block font-bold text-green-700 hover:text-green-800 underline"
          >
            &larr; Voltar para a lista de notícias
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const isRegional = article.source === 'regional';
  const badgeText = article.sourceLabel || (isRegional ? 'Abrasel CSPR' : 'Abrasel Nacional');

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 min-h-screen">
        {/* Cabeçalho e Imagem de Capa */}
        <section className="pt-10 pb-10 border-b border-gray-100 bg-gray-50/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-700 hover:text-green-800 mb-6 transition"
            >
              <ArrowLeft size={14} />
              Voltar para Notícias
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${isRegional
                    ? 'bg-green-700 text-white'
                    : 'bg-green-50 text-green-800 border border-green-200'
                  }`}
              >
                {badgeText}
              </span>
              <span className="text-xs sm:text-sm text-green-700 uppercase font-bold tracking-wider">
                {article.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              {article.title}
            </h1>
            <p className="text-gray-500 mt-4 text-sm sm:text-base font-medium">
              Por: <span className="text-gray-800 font-semibold">{article.author}</span>
            </p>

            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-lg border border-gray-200/80 bg-gray-100">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </div>
          </div>
        </section>

        {/* Corpo do Artigo */}
        <article className="py-14 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Indicadores em destaque (quando houver) */}
            {article.metrics && article.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                {article.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-green-50/70 border border-green-200/80 p-5"
                  >
                    <p className="text-2xl sm:text-3xl font-black text-green-700">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wider text-gray-600 mt-1 font-bold">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Parágrafos */}
            {article.content.map((paragraph, index) => {
              const isFinalCTA =
                index === article.content.length - 1 && paragraph.includes('associado Abrasel');

              if (isFinalCTA) {
                return (
                  <div
                    key={index}
                    className="mt-12 p-6 bg-green-50 rounded-2xl border-l-4 border-green-700 text-center"
                  >
                    <Link
                      href="/associe-se"
                      className="text-lg sm:text-xl font-extrabold text-green-800 hover:text-green-600 transition"
                    >
                      {paragraph}
                    </Link>
                  </div>
                );
              }

              return (
                <p key={index} className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}

            {/* Tabelas de Comprovação (quando houver) */}
            {article.tables && article.tables.length > 0 && (
              <div className="mt-12 space-y-10">
                {article.tables.map((table, tIdx) => (
                  <section
                    key={tIdx}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                  >
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                      <h2 className="text-lg font-extrabold text-gray-900">{table.title}</h2>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-green-800 bg-green-50/60">
                            {table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="py-3.5 px-6 font-bold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-700">
                          {table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-gray-50/70">
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`py-3.5 px-6 align-top ${cIdx === 0 ? 'font-bold text-gray-900 whitespace-nowrap' : ''
                                    }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                ))}
              </div>
            )}

            {/* Galeria de Evidências Fotográficas (quando houver) */}
            {article.gallery && article.gallery.length > 0 && (
              <section className="mt-14">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  Registros Fotográficos e <span className="text-green-700">Comprovações</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {article.gallery.map((photo, pIdx) => (
                    <figure
                      key={pIdx}
                      className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm flex flex-col"
                    >
                      <div className="relative aspect-[4/3] w-full bg-gray-100">
                        <Image
                          src={photo.src}
                          alt={photo.caption}
                          fill
                          sizes="(max-width: 640px) 100vw, 450px"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="p-4 text-sm text-gray-600 leading-relaxed">
                        {photo.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}