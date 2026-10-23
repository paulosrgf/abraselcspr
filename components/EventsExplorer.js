// components/EventsExplorer.js
'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    AnimatePresence,
    motion,
    useMotionTemplate,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
} from 'framer-motion';
import {
    ArrowRight,
    CalendarDays,
    CalendarPlus,
    ExternalLink,
    Flag,
    Globe,
    MapPin,
    Star,
} from 'lucide-react';
import EventCountdown from './EventCountdown';
import SponsorBanner from './SponsorBanner';
import { EVENT_SCOPES } from '../data/eventsData';
import { getStatus, googleCalendarUrl, partes } from '../data/eventsUtils';

const FILTROS = [
    { key: 'todos', label: 'Todos' },
    { key: 'guarapuava', label: 'Guarapuava' },
    { key: 'brasil', label: 'Brasil' },
    { key: 'internacional', label: 'Internacional' },
];

// Classes escritas por extenso para o Tailwind reconhecer
const SCOPE_UI = {
    guarapuava: {
        icon: Star,
        badge: 'bg-amber-100 text-amber-800 ring-amber-200',
        bar: 'from-amber-400 to-amber-500',
    },
    brasil: {
        icon: Flag,
        badge: 'bg-green-100 text-green-800 ring-green-200',
        bar: 'from-green-500 to-green-700',
    },
    internacional: {
        icon: Globe,
        badge: 'bg-sky-100 text-sky-800 ring-sky-200',
        bar: 'from-sky-400 to-sky-600',
    },
};

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
    const ui = SCOPE_UI[scope];
    const Icon = ui.icon;
    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ring-1 ${ui.badge}`}
        >
            <Icon size={12} />
            {EVENT_SCOPES[scope]?.label}
        </span>
    );
}

// Inclina a imagem seguindo o mouse (desligado para quem prefere menos movimento)
function Tilt({ children }) {
    const reduce = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), {
        stiffness: 160,
        damping: 16,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), {
        stiffness: 160,
        damping: 16,
    });

    function mover(e) {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
    }
    function sair() {
        x.set(0);
        y.set(0);
    }

    if (reduce) return <div>{children}</div>;

    return (
        <div style={{ perspective: 1000 }} onMouseMove={mover} onMouseLeave={sair}>
            <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
                {children}
            </motion.div>
        </div>
    );
}

function FeaturedCard({ ev }) {
    return (
        <article className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#04200f] via-[#0a3b1d] to-[#0f5f2d] text-white shadow-2xl shadow-green-950/30">
            <motion.div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-amber-400/25 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-green-400/20 blur-3xl"
            />

            <div className="relative grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <Tilt>
                        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/30">
                            <Image
                                src={ev.image}
                                alt={`Arte de divulgação: ${ev.title}`}
                                fill
                                sizes="(max-width: 1024px) 90vw, 420px"
                                className="object-cover"
                            />
                        </div>
                    </Tilt>
                </div>

                <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-black">
                            <Star size={12} />
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

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        <Link
                            href={ev.href}
                            className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-7 py-4 text-base font-black text-black shadow-xl transition hover:-translate-y-0.5 hover:bg-amber-300"
                        >
                            Ver detalhes
                            <ArrowRight size={18} />
                        </Link>
                        <a
                            href={googleCalendarUrl(ev)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
                        >
                            <CalendarPlus size={18} />
                            Adicionar à agenda
                            <span className="sr-only"> (abre em nova aba)</span>
                        </a>
                    </div>

                    <div className="mt-6">
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
    const ui = SCOPE_UI[ev.scope];

    // Luz que segue o mouse dentro do card
    const mx = useMotionValue(-300);
    const my = useMotionValue(-300);
    const luz = useMotionTemplate`radial-gradient(360px circle at ${mx}px ${my}px, rgba(22,163,74,0.14), transparent 70%)`;

    function mover(e) {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
    }

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
        'inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-green-700 transition-all hover:gap-3 hover:text-green-600';

    return (
        <article
            onMouseMove={mover}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-green-900/10"
        >
            <motion.div
                aria-hidden="true"
                style={{ background: luz }}
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className={`h-1.5 bg-gradient-to-r ${ui.bar}`} />

            <div className="relative flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-green-50 text-green-800 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
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
                <h3 className="mt-1 text-xl font-black uppercase leading-tight tracking-tight text-gray-900 transition-colors group-hover:text-green-700">
                    {ev.title}
                </h3>

                <ul className="mt-4 space-y-2 text-sm font-medium text-gray-600">
                    <li className="flex items-start gap-2">
                        <CalendarDays size={16} className="mt-0.5 shrink-0 text-green-700" />
                        {ev.date}
                    </li>
                    <li className="flex items-start gap-2">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-amber-500" />
                        {ev.location}
                    </li>
                </ul>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">
                    {ev.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
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

                    <a
                        href={googleCalendarUrl(ev)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Adicionar ao Google Agenda"
                        aria-label={`Adicionar ${ev.title} ao Google Agenda (abre em nova aba)`}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-green-700 hover:bg-green-50 hover:text-green-700"
                    >
                        <CalendarPlus size={18} />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function EventsExplorer({ events }) {
    const reduce = useReducedMotion();
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
        <section id="eventos-lista" className="mx-auto max-w-7xl scroll-mt-8 px-4 py-14 sm:px-6 lg:px-8">
            {/* Filtros com "pílula" que desliza */}
            <div
                role="group"
                aria-label="Filtrar eventos por alcance"
                className="mb-10 inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-gray-200 bg-white/80 p-1.5 shadow-sm backdrop-blur"
            >
                {FILTROS.map((f) => {
                    const ativo = filtro === f.key;
                    return (
                        <button
                            key={f.key}
                            type="button"
                            aria-pressed={ativo}
                            onClick={() => setFiltro(f.key)}
                            className="relative shrink-0 rounded-full px-4 py-2.5 text-sm font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-green-700/20 sm:px-5"
                        >
                            {ativo && (
                                <motion.span
                                    layoutId="filtro-ativo"
                                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                    className="absolute inset-0 rounded-full bg-green-700 shadow-lg shadow-green-900/20"
                                />
                            )}
                            <span
                                className={`relative z-10 flex items-center gap-2 transition-colors ${ativo ? 'text-white' : 'text-gray-600 hover:text-green-700'
                                    }`}
                            >
                                {f.label}
                                <span
                                    className={`rounded-full px-2 py-0.5 text-xs font-black transition-colors ${ativo ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                                        }`}
                                >
                                    {contagem[f.key]}
                                </span>
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Lista com entrada suave */}
            {lista.length > 0 ? (
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {lista.map((ev, i) => (
                            <motion.li
                                key={ev.id}
                                layout={!reduce}
                                initial={reduce ? false : { opacity: 0, y: 36 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        delay: Math.min(i, 5) * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                }}
                                whileHover={
                                    ev.featured || reduce
                                        ? undefined
                                        : { y: -6, transition: { duration: 0.25, delay: 0 } }
                                }
                                viewport={{ once: true, margin: '-40px' }}
                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                className={ev.featured ? 'md:col-span-2 lg:col-span-3' : ''}
                            >
                                {ev.featured ? <FeaturedCard ev={ev} /> : <EventCard ev={ev} />}
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            ) : (
                <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
                    <p className="text-xl font-black text-gray-900">
                        Nenhum evento {filtro === 'todos' ? '' : `(${EVENT_SCOPES[filtro]?.label}) `}
                        na agenda no momento.
                    </p>
                    <p className="mt-2 text-gray-500">
                        Assim que novas datas forem divulgadas, elas aparecem aqui.
                    </p>
                </div>
            )}

            <div className="mt-16 rounded-[2rem] border border-amber-100 bg-amber-50 p-8 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-amber-800">
                    * Datas e locais sujeitos a alteração pela organização de cada evento.
                </p>
            </div>
        </section>
    );
}