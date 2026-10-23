// components/EventsHero.js
'use client';

import { useEffect, useRef, useState } from 'react';
import {
    animate,
    motion,
    useInView,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'framer-motion';
import { ArrowDown, CalendarDays, Clock, MapPin } from 'lucide-react';
import { getStatus, partes } from '../data/eventsUtils';

// Título que "sobe" palavra por palavra
function Palavras({ texto, delay = 0, wordClassName = '' }) {
    const reduce = useReducedMotion();
    return (
        <span aria-label={texto}>
            {texto.split(' ').map((palavra, i) => (
                <span
                    key={i}
                    aria-hidden="true"
                    className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom"
                >
                    <motion.span
                        className={`inline-block ${wordClassName}`}
                        initial={reduce ? false : { y: '110%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: delay + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {palavra}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

// Número que "sobe" de 0 até o valor quando aparece na tela
function CountUp({ to }) {
    const ref = useRef(null);
    const visivel = useInView(ref, { once: true });
    const reduce = useReducedMotion();
    const [valor, setValor] = useState(0);

    useEffect(() => {
        if (!visivel) return undefined;
        if (reduce) {
            setValor(to);
            return undefined;
        }
        const controle = animate(0, to, {
            duration: 1.4,
            ease: 'easeOut',
            onUpdate: (n) => setValor(Math.round(n)),
        });
        return () => controle.stop();
    }, [visivel, to, reduce]);

    return (
        <span ref={ref} className="tabular-nums">
            {valor}
        </span>
    );
}

function Faixa({ itens }) {
    const reduce = useReducedMotion();
    const trilha = [...itens, ...itens];
    return (
        <div
            aria-hidden="true"
            className="relative overflow-hidden border-t border-white/10 bg-black/25 py-4 backdrop-blur"
        >
            <motion.div
                className="flex w-max whitespace-nowrap"
                animate={reduce ? undefined : { x: ['0%', '-50%'] }}
                transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
            >
                {trilha.map((texto, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-10 pr-10 text-xs font-bold uppercase tracking-[0.22em] text-green-50/90 sm:text-sm"
                    >
                        {texto}
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

// Cartão de vidro com o próximo evento (só em telas grandes)
function ProximoCard({ ev, status }) {
    const reduce = useReducedMotion();
    const { dia, mes } = partes(ev.start);
    return (
        <motion.div
            initial={reduce ? false : { opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden w-full max-w-sm lg:block"
        >
            <motion.a
                href="#eventos-lista"
                animate={reduce ? undefined : { y: [0, -10, 0], rotate: -2 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={reduce ? undefined : { rotate: 0, scale: 1.03 }}
                className="group block rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/25 backdrop-blur-xl"
            >
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-amber-300">
                    Próximo evento
                </p>

                <div className="mt-5 flex items-start gap-4">
                    <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-amber-400 text-black shadow-lg">
                        <span className="text-3xl font-black leading-none">{dia}</span>
                        <span className="mt-1 text-xs font-bold tracking-widest">{mes}</span>
                    </div>
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-green-200">
                            {ev.type}
                        </p>
                        <p className="mt-1 text-xl font-black uppercase leading-tight">{ev.title}</p>
                    </div>
                </div>

                <p className="mt-5 flex items-start gap-2 text-sm font-medium text-green-50/90">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-amber-300" />
                    {ev.location}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4">
                    <span className="text-sm font-bold text-white">{status?.label ?? ev.date}</span>
                    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-300 transition-all group-hover:gap-3">
                        Ver agenda
                        <ArrowDown size={14} />
                    </span>
                </div>
            </motion.a>
        </motion.div>
    );
}

export default function EventsHero({ events }) {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const [agora, setAgora] = useState(null);

    useEffect(() => {
        setAgora(Date.now());
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const yFundo = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const yTexto = useTransform(scrollYProgress, [0, 1], [0, 70]);
    const opacidade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Antes de saber a data de hoje (servidor), mostra todos
    const visiveis = events
        .filter((ev) => !agora || getStatus(ev, agora).key !== 'ended')
        .sort((a, b) => a.start.localeCompare(b.start));

    const proximo = visiveis[0];
    const status = proximo && agora ? getStatus(proximo, agora) : null;
    const emGuarapuava = visiveis.filter((ev) => ev.scope === 'guarapuava').length;

    const itensFaixa = visiveis.map((ev) => `${ev.title} · ${ev.date}`);

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-gradient-to-br from-[#04200f] via-[#0a3b1d] to-[#0f5f2d] text-white"
        >
            {/* Fundo: grade + luzes que flutuam */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                    maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
                }}
            />
            <motion.div
                aria-hidden="true"
                style={reduce ? undefined : { y: yFundo }}
                className="pointer-events-none absolute inset-0"
            >
                <motion.div
                    className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-amber-400/25 blur-3xl"
                    animate={reduce ? undefined : { x: [0, -40, 0], y: [0, 30, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-green-500/25 blur-3xl"
                    animate={reduce ? undefined : { x: [0, 50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>

            <motion.div
                style={reduce ? undefined : { y: yTexto, opacity: opacidade }}
                className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-24 lg:px-8"
            >
                <div className="grid items-center gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <motion.span
                            initial={reduce ? false : { opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-black"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/50 motion-reduce:animate-none" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
                            </span>
                            Calendário oficial
                        </motion.span>

                        <h1 className="mt-6 text-6xl font-black uppercase leading-[0.88] tracking-tighter sm:text-8xl lg:text-9xl">
                            <Palavras texto="Agenda" />
                            <span className="block">
                                <Palavras
                                    texto="2026"
                                    delay={0.2}
                                    wordClassName="text-transparent [-webkit-text-stroke:2px_#fbbf24] sm:[-webkit-text-stroke:3px_#fbbf24]"
                                />
                            </span>
                        </h1>

                        <motion.p
                            initial={reduce ? false : { opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-green-50/90 md:text-xl"
                        >
                            Das ações locais em Guarapuava aos grandes congressos nacionais.
                            Acompanhe as datas e participe com a Abrasel Centro-Sul PR.
                        </motion.p>

                        {/* Números */}
                        <motion.div
                            initial={reduce ? false : { opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.65 }}
                            className="mt-10 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4"
                        >
                            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
                                <CalendarDays size={18} className="text-amber-300" />
                                <p className="mt-2 text-3xl font-black sm:text-4xl">
                                    <CountUp to={visiveis.length} />
                                </p>
                                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-green-100 sm:text-[11px]">
                                    Eventos na agenda
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
                                <Clock size={18} className="text-amber-300" />
                                <p className="mt-2 text-3xl font-black sm:text-4xl">
                                    {status?.key === 'live' ? (
                                        <span className="text-2xl sm:text-3xl">Agora</span>
                                    ) : (
                                        <CountUp to={status?.dias ?? 0} />
                                    )}
                                </p>
                                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-green-100 sm:text-[11px]">
                                    {status?.key === 'live' ? 'Acontecendo' : 'Dias para o próximo'}
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
                                <MapPin size={18} className="text-amber-300" />
                                <p className="mt-2 text-3xl font-black sm:text-4xl">
                                    <CountUp to={emGuarapuava} />
                                </p>
                                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-green-100 sm:text-[11px]">
                                    Em Guarapuava
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex justify-end lg:col-span-5">
                        {proximo && <ProximoCard ev={proximo} status={status} />}
                    </div>
                </div>
            </motion.div>

            <Faixa itens={itensFaixa} />
        </section>
    );
}