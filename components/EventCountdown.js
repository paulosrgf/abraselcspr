'use client';

import { useEffect, useState } from 'react';

// Horário de Brasília (-03:00)
const START = new Date('2026-10-30T00:00:00-03:00').getTime();
const END = new Date('2026-11-01T23:59:59-03:00').getTime();

function calcular(agora) {
    if (agora >= END) return { status: 'ended' };
    if (agora >= START) return { status: 'live' };

    const diff = START - agora;
    return {
        status: 'soon',
        dias: Math.floor(diff / 86400000),
        horas: Math.floor((diff % 86400000) / 3600000),
        minutos: Math.floor((diff % 3600000) / 60000),
    };
}

export default function EventCountdown({ className = '' }) {
    const [tempo, setTempo] = useState(null);

    useEffect(() => {
        const atualizar = () => setTempo(calcular(Date.now()));
        atualizar();
        const id = setInterval(atualizar, 30000);
        return () => clearInterval(id);
    }, []);

    // Antes de carregar (ou depois do evento) não mostra nada
    if (!tempo || tempo.status === 'ended') return null;

    if (tempo.status === 'live') {
        return (
            <div className={className}>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2 text-sm font-black uppercase tracking-widest text-black">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
                    Acontecendo agora!
                </span>
            </div>
        );
    }

    const caixas = [
        { valor: tempo.dias, rotulo: 'dias' },
        { valor: tempo.horas, rotulo: 'horas' },
        { valor: tempo.minutos, rotulo: 'min' },
    ];

    return (
        <div className={className} role="timer" aria-label="Contagem regressiva para o evento">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-green-200">
                Faltam
            </p>
            <div className="flex gap-3">
                {caixas.map((c) => (
                    <div
                        key={c.rotulo}
                        className="min-w-[72px] rounded-xl bg-white/10 px-4 py-2 text-center ring-1 ring-white/20 backdrop-blur"
                    >
                        <span className="block text-2xl font-black tabular-nums text-white sm:text-3xl">
                            {String(c.valor).padStart(2, '0')}
                        </span>
                        <span className="block text-[10px] font-semibold uppercase tracking-widest text-green-100">
                            {c.rotulo}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}