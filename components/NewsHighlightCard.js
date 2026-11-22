// components/NewsHighlightCard.js
import Link from 'next/link';
import Image from 'next/image';

const NewsHighlightCard = ({
  title,
  summary,
  imageUrl,
  date,
  slug,
  source = 'nacional',
  sourceLabel,
}) => {
  const isRegional = source === 'regional';
  const badgeText = sourceLabel || (isRegional ? 'Abrasel CSPR' : 'Abrasel Nacional');

  return (
    <Link
      href={`/noticias/${slug}`}
      className="block group transition duration-300 ease-in-out hover:-translate-y-1"
    >
      <article className="rounded-2xl overflow-hidden h-full flex flex-col bg-white border border-gray-200/90 shadow-md hover:shadow-xl transition-shadow">
        {/* Imagem de Destaque */}
        <div className="relative h-52 w-full overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/* Etiqueta de Origem */}
          <span
            className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm ${isRegional
                ? 'bg-green-700 text-white'
                : 'bg-white/95 text-green-800 border border-green-200'
              }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${isRegional ? 'bg-green-200' : 'bg-green-600'
                }`}
            />
            {badgeText}
          </span>
        </div>

        {/* Conteúdo do Card */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-xs uppercase font-bold tracking-wider text-green-700 mb-2">
            {date}
          </p>

          <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-green-700 transition duration-300 mb-3 line-clamp-2 leading-snug">
            {title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-3 flex-1 leading-relaxed">
            {summary}
          </p>

          <p className="mt-5 text-sm font-bold text-green-700 group-hover:text-green-800 flex items-center gap-1">
            {isRegional ? 'Ler relatório completo' : 'Leia Mais'} &rarr;
          </p>
        </div>
      </article>
    </Link>
  );
};

export default NewsHighlightCard;