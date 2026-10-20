'use client';

import { useState } from 'react';
import Image from 'next/image';

const ITAIPU_URL = 'https://www.itaipu.gov.br';

const SIZES = {
    sm: { w: 130, h: 52 },
    md: { w: 200, h: 80 },
    lg: { w: 280, h: 112 },
};

export default function SponsorBanner({
    placement = 'home-topo',
    href = ITAIPU_URL,
    logoSrc = '/logos/logotipo-itaipu-preferencial.jpg',
    alt = 'Itaipu Binacional',
    label = 'Patrocínio',
    size = 'md',
    variant = 'card', // 'card' | 'band' | 'badge'
    className = '',
}) {
    const [failed, setFailed] = useState(false);
    const s = SIZES[size] || SIZES.md;

    // Registra o clique no Google Analytics (se existir no site)
    function handleClick() {
        try {
            if (typeof window !== 'undefined') {
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'sponsor_click', {
                        sponsor: 'itaipu',
                        placement,
                        destination: href,
                    });
                }
                if (Array.isArray(window.dataLayer)) {
                    window.dataLayer.push({
                        event: 'sponsor_click',
                        sponsor: 'itaipu',
                        placement,
                    });
                }
            }
        } catch (e) {
            // Se o tracking falhar, o link continua funcionando
        }
    }

    // Se o arquivo da logo não existir, mostra o nome em texto
    const logo = failed ? (
        <span className="text-lg font-extrabold tracking-tight text-green-900">
            {alt}
        </span>
    ) : (
        <Image
            src={logoSrc}
            alt={alt}
            width={s.w}
            height={s.h}
            onError={() => setFailed(true)}
            style={{ height: 'auto', width: s.w }}
            className="max-w-full object-contain"
        />
    );

    const link = (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            aria-label={`Visitar o site da ${alt} (abre em nova aba)`}
            className="block rounded transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
        >
            {logo}
        </a>
    );

    const dataAttrs = { 'data-sponsor': 'itaipu', 'data-placement': placement };
    const ariaLabel = `${label}: ${alt}`;

    // FAIXA LIMPA (home): linhas decorativas dos lados + logo no centro
    if (variant === 'band') {
        return (
            <aside
                aria-label={ariaLabel}
                {...dataAttrs}
                className={`flex items-center justify-center gap-4 sm:gap-8 ${className}`}
            >
                <span
                    aria-hidden="true"
                    className="hidden h-px w-16 bg-gradient-to-r from-transparent to-green-700/40 sm:block md:w-32"
                />
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">
                        {label}
                    </span>
                    {link}
                </div>
                <span
                    aria-hidden="true"
                    className="hidden h-px w-16 bg-gradient-to-l from-transparent to-green-700/40 sm:block md:w-32"
                />
            </aside>
        );
    }

    // PÍLULA BRANCA (para usar sobre fundos escuros)
    if (variant === 'badge') {
        return (
            <aside
                aria-label={ariaLabel}
                {...dataAttrs}
                className={`inline-flex items-center gap-4 rounded-2xl bg-white px-5 py-3 shadow-lg ring-1 ring-black/5 ${className}`}
            >
                <span className="text-[10px] font-bold uppercase leading-tight tracking-[0.25em] text-gray-500">
                    {label}
                </span>
                <span aria-hidden="true" className="h-8 w-px bg-gray-200" />
                {link}
            </aside>
        );
    }

    // CARD (estilo antigo, usado na página do evento)
    return (
        <aside
            aria-label={ariaLabel}
            {...dataAttrs}
            className={`flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm sm:flex-row sm:gap-4 ${className}`}
        >
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                {label}
            </span>
            {link}
        </aside>
    );
}