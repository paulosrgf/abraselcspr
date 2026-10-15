'use client';

import { useState } from 'react';

export default function ShareButtons({ url, title }) {
    const [copied, setCopied] = useState(false);

    const text = encodeURIComponent(`${title} - ${url}`);
    const encodedUrl = encodeURIComponent(url);

    const whatsappHref = `https://wa.me/?text=${text}`;
    const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

    function track(network) {
        try {
            if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                window.gtag('event', 'share', { method: network, content_type: 'evento' });
            }
        } catch (e) { }
    }

    async function copyLink() {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            track('copy_link');
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            setCopied(false);
        }
    }

    const base =
        'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

    return (
        <div className="flex flex-wrap gap-3" role="group" aria-label="Compartilhar este evento">
            <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('whatsapp')}
                className={`${base} bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-600`}
            >
                Compartilhar no WhatsApp
            </a>

            <a
                href={facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('facebook')}
                className={`${base} bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600`}
            >
                Facebook
            </a>

            <button
                type="button"
                onClick={copyLink}
                className={`${base} border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 focus-visible:ring-gray-400`}
            >
                {copied ? 'Link copiado!' : 'Copiar link'}
            </button>
        </div>
    );
}