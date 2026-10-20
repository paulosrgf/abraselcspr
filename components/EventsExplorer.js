// components/EventsExplorer.js
'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import EventCountdown from './EventCountdown';
import SponsorBanner from './SponsorBanner';
import { EVENT_SCOPES } from '../data/eventsData';

const MESES = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

const FILTROS = [
    { key: 'todos', label: 'Todos' },
    { key: 'guarapuava', label: 'Guarapuava' },
    { key: 'brasil', label: 'Brasil' },
    { key: 'internacional', label: 'Internacional' },
];

// Classes escritas por extenso para o Tailwind reconhecer
const SCOPE_BADGE = {
    guarapuava: 'bg-amber-100 text-amber-800 ring-amber-200',
    brasil: 'bg-green-100 text-green-800 ring-green-200',
    internacional: 'bg-sky-100 text-sky-800 ring-sky-200',
};
const SCOPE_BAR = {
    guarapuava: 'bg-amber-400',
    brasil: 'bg-green-600',
    internacional: 'bg-sky-500',
};

function partes(iso) {
    const [, m, d] = iso.split('-');
    return { dia: d, mes: MESES[Number(m) - 1] };
}

// Horário de Brasília (-03:00)
function getStatus(ev, agora) {
    const inicio = new Date(`${ev.start}T00:00:00-03:00`).getTime();
    const fim = new Date(`${ev.end}T23:59:59-03:00`).getTime();
    if (agora > fim) return { key: 'ended', label: 'Encerrado' };
    if (agora >= inicio) return { key: 'live', label: 'Acontecendo agora' };
    const dias = Math.ceil((inicio - agora) / 86400000);
    return { key: 'soon', label: dias <= 1 ? 'Começa amanhã' : `Em ${dias} dias` };
}

function StatusChip({ status, escuro = false }) {
    if (!status) return null;
    if (status.key === 'live') {
        return (
            <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white motion-reduce:animate-none" />
                {status.label}
            </span>
        );
    }
    return (
        <span
            className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${escuro ? 'bg-white/15 text-white' : 'bg-gray-100 text-gray-600'
                }`}
        >
            {status.label}
        </span>
    );
}

function ScopeBadge({ scope }) {
    return (
        <span
            className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ring-1 ${SCOPE_BADGE[scope]}`}
        >
            {EVENT_SCOPES[scope]?.label}
        </span>
    );
}

function FeaturedCard({ ev }) {
    return (
        <article className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#04200f] via-[#0a3b1d] to-[#0f5f2d] text-white shadow-2xl">
            <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl"
            />
            <div className="relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/30">
                        <Image
                            src={ev.image}
                            alt={`Arte de divulgação: ${ev.title}`}
                            fill
                            sizes="(max-width: 1024px) 90vw, 420px"
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex rounded-full bg-amber-400 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-black">
                            Em destaque · {EVENT_SCOPES[ev.scope]?.label}
                        </span>
                        <StatusChip status={ev.status} escuro />
                    </div>

                    <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                        {ev.title}
                    </h2>

                    <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold sm:text-base">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">
                            <CalendarDays size={18} className="text-amber-300" />
                            {ev.date}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">
                            <MapPin size={18} className="text-amber-300" />
                            {ev.location}
                        </span>
                    </div>

                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-green-50/90">
                        {ev.description}
                    </p>

                    {ev.countdown && <EventCountdown className="mt-6" />}

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                        <Link
                            href={ev.href}
                            className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-7 py-4 text-base font-black text-black shadow-xl transition hover:-translate-y-0.5 hover:bg-amber-300"
                        >
                            Ver detalhes
                            <ArrowRight size={18} />
                        </Link>
                        <SponsorBanner
                            variant="badge"
                            size="sm"
                            placement="eventos-destaque"
                            label="Patrocínio master"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}

function EventCard({ ev }) {
    const { dia, mes } = partes(ev.start);
    const conteudoLink = (
        <>
            Mais informações
            {ev.external ? (
                <>
                    <ExternalLink size={16} />
                    <span className="sr-only"> (abre em nova aba)</span>
                </>
            ) : (
                <ArrowRight size={16} />
            )}
        </>
    );
    const classeLink =
        'inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-green-700 transition group-hover:gap-3 hover:text-green-600';

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className={`h-1.5 ${SCOPE_BAR[ev.scope]}`} />
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-green-50 text-green-800">
                        <span className="text-2xl font-black leading-none">{dia}</span>
                        <span className="mt-1 text-[11px] font-bold tracking-widest">{mes}</span>
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                        <ScopeBadge scope={ev.scope} />
                        <StatusChip status={ev.status} />
                    </div>
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
                    {ev.type}
                </p>
                <h3 className="mt-1 text-xl font-black leading-tight tracking-tight text-gray-900">
                    {ev.title}
                </h3>

                <ul className="mt-4 space-y-2 text-sm font-medium text-gray-600">
                    <li className="flex items-start gap-2">
                        <CalendarDays size={16} className="mt-0.5 shrink-0 text-green-700" />
                        {ev.date}
                    </li>
                    <li className="flex items-start gap-2">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-green-700" />
                        {ev.location}
                    </li>
                </ul>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">
                    {ev.description}
                </p>

                <div className="mt-6 border-t border-gray-100 pt-4">
                    {ev.external ? (
                        <a
                            href={ev.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classeLink}
                        >
                            {conteudoLink}
                        </a>
                    ) : (
                        <Link href={ev.href} className={classeLink}>
                            {conteudoLink}
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function EventsExplorer({ events }) {
    const [filtro, setFiltro] = useState('todos');
    const [agora, setAgora] = useState(null);

    // Só calcula o "agora" no navegador, para não dar diferença entre servidor e tela
    useEffect(() => {
        setAgora(Date.now());
    }, []);

    const visiveis = useMemo(() => {
        return events
            .map((ev) => ({ ...ev, status: agora ? getStatus(ev, agora) : null }))
            .filter((ev) => ev.status?.key !== 'ended');
    }, [events, agora]);

    const contagem = useMemo(() => {
        const c = { todos: visiveis.length, guarapuava: 0, brasil: 0, internacional: 0 };
        visiveis.forEach((ev) => {
            c[ev.scope] += 1;
        });
        return c;
    }, [visiveis]);

    const lista = useMemo(() => {
        return visiveis
            .filter((ev) => filtro === 'todos' || ev.scope === filtro)
            .sort(
                (a, b) =>
                    (b.featured ? 1 : 0) - (a.featured ? 1 : 0) ||
                    a.start.localeCompare(b.start)
            );
    }, [visiveis, filtro]);

    return (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            {/* Filtros */}
            <div
                role="group"
                aria-label="Filtrar eventos por alcance"
                className="mb-10 flex flex-wrap gap-3"
            >
                {FILTROS.map((f) => {
                    const ativo = filtro === f.key;
                    return (
                        <button
                            key={f.key}
                            type="button"
                            aria-pressed={ativo}
                            onClick={() => setFiltro(f.key)}
                            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-green-700/20 ${ativo
                                    ? 'bg-green-700 text-white shadow-lg shadow-green-900/20'
                                    : 'border border-gray-200 bg-white text-gray-700 hover:border-green-700 hover:text-green-700'
                                }`}
                        >
                            {f.label}
                            <span
                                className={`rounded-full px-2 py-0.5 text-xs font-black ${ativo ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                                    }`}
                            >
                                {contagem[f.key]}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Lista */}
            {lista.length > 0 ? (
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {lista.map((ev) => (
                        <li
                            key={ev.id}
                            className={ev.featured ? 'md:col-span-2 lg:col-span-3' : ''}
                        >
                            {ev.featured ? <FeaturedCard ev={ev} /> : <EventCard ev={ev} />}
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
                    <p className="text-xl font-black text-gray-900">
                        Nenhum evento {filtro === 'todos' ? '' : `(${EVENT_SCOPES[filtro]?.label}) `}na agenda no momento.
                    </p>
                    <p className="mt-2 text-gray-500">
                        Assim que novas datas forem divulgadas, elas aparecem aqui.
                    </p>
                </div>
            )}

            <p className="mt-10 text-center text-xs font-medium text-gray-400">
                Datas e informações conforme a agenda oficial da Abrasel e dos
                organizadores. Sujeitas a alteração.
            </p>
        </section>
    );
}