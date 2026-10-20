// components/WhatsAppButton.js
'use client';

// Logo oficial do WhatsApp (SVG), herda a cor do texto via "currentColor"
export function WhatsAppIcon({ className = 'h-6 w-6' }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
        >
            <path d="M380.9 97.1C339.4 56.7 283.4 34 223.7 34c-122.9 0-222.8 99.9-222.8 222.8 0 39.8 10.4 78.4 30.2 112.5L3.9 459.7l126.3-33.1c32.7 17.6 69.4 27.2 106.8 27.2h0c122.8 0 222.7-99.9 222.7-222.7.1-59.3-23-116.1-66.2-159.2zm-123 322c-29.3 0-56.5-7.9-80.4-22.6l-5.3-3.1-53.9 14.2 14.5-52.4-3.4-5.5c-15.6-25-24-54.6-24-87.1 0-82.6 67-149.6 149.6-149.6 40.2 0 77.8 15.7 106.2 44.1 28.5 28.5 44.1 66.1 44.1 106.3 0 82.6-67 149.6-149.6 149.6zm51.7-184.8c-2.3-1.1-13.7-6.8-15.8-7.6s-3.7-1.1-5.2 1.1c-1.5 2.3-5.9 7.6-7.2 9.1s-2.7 1.7-5 0.6c-2.3-1.1-9.7-3.6-18.4-11.4s-14.7-18.9-16.3-21.7c-1.5-2.7-.2-4.1 1-5.2 1-1.1 2.3-2.6 3.4-3.9s1.5-2.3 2.3-3.9c.8-1.5.4-2.7 0-3.9-1.5-3.4-5-8.3-6.9-12.2s-3.8-11.2-5.2-14.2c-1.1-2.7-2.3-2.3-4.1-2.3-1.5 0-3.2.2-4.9.2s-3.9.6-5.9 2.7c-2 2.3-7.6 7.4-7.6 18.2 0 10.8 7.7 21.1 8.8 22.7s15 23.3 36.3 32.5c20.3 8.7 36.3 7.7 40.5 6.4 4.5-1.4 13.7-5.6 15.7-11.4s2-10.7 1.4-11.4z" />
        </svg>
    );
}

export default function WhatsAppButton({
    href,
    children = 'Conversar no WhatsApp',
    variant = 'solid', // 'solid' (botão grande) | 'float' (botão flutuante)
    placement = 'associe-se',
    className = '',
}) {
    // Registra o clique no Google Analytics (se existir no site)
    function handleClick() {
        try {
            if (typeof window !== 'undefined') {
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'whatsapp_click', { placement });
                }
                if (Array.isArray(window.dataLayer)) {
                    window.dataLayer.push({ event: 'whatsapp_click', placement });
                }
            }
        } catch (e) {
            // Se o tracking falhar, o link continua funcionando
        }
    }

    // BOTÃO FLUTUANTE (canto da tela)
    if (variant === 'float') {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                aria-label="Falar com a Abrasel no WhatsApp (abre em nova aba)"
                data-placement={placement}
                className={`group fixed bottom-5 right-5 z-50 flex items-center gap-3 ${className}`}
            >
                <span className="hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-800 opacity-0 shadow-lg ring-1 ring-black/5 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
                    Fale com a gente
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/30 transition-transform duration-300 group-hover:scale-110">
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 motion-reduce:animate-none"
                    />
                    <WhatsAppIcon className="relative h-8 w-8" />
                </span>
            </a>
        );
    }

    // BOTÃO GRANDE (dentro da página)
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            data-placement={placement}
            className={`inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-base font-black uppercase tracking-wider text-green-950 shadow-lg shadow-green-900/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#2fe074] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 ${className}`}
        >
            <WhatsAppIcon className="h-7 w-7" />
            {children}
        </a>
    );
}