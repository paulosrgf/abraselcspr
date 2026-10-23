// data/eventsUtils.js
// Funções de apoio da página de eventos (datas, status e link do Google Agenda)

export const SITE_URL = 'https://abraselcspr.com.br';

const MESES = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

// "2026-10-30" -> { dia: "30", mes: "OUT" }
export function partes(iso) {
    const [, m, d] = iso.split('-');
    return { dia: d, mes: MESES[Number(m) - 1] };
}

// Horário de Brasília (-03:00)
export function getStatus(ev, agora) {
    const inicio = new Date(`${ev.start}T00:00:00-03:00`).getTime();
    const fim = new Date(`${ev.end}T23:59:59-03:00`).getTime();
    if (agora > fim) return { key: 'ended', label: 'Encerrado', dias: 0 };
    if (agora >= inicio) return { key: 'live', label: 'Acontecendo agora', dias: 0 };
    const dias = Math.ceil((inicio - agora) / 86400000);
    return {
        key: 'soon',
        label: dias <= 1 ? 'Começa amanhã' : `Em ${dias} dias`,
        dias,
    };
}

export function absoluteUrl(href) {
    return href.startsWith('http') ? href : `${SITE_URL}${href}`;
}

// Link "Adicionar ao Google Agenda" (evento de dia inteiro)
export function googleCalendarUrl(ev) {
    const [y, m, d] = ev.end.split('-').map(Number);
    // O Google Agenda considera o dia final como "exclusivo", por isso somamos 1 dia
    const fimExclusivo = new Date(Date.UTC(y, m - 1, d + 1))
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, '');
    const inicio = ev.start.replace(/-/g, '');

    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: ev.title,
        dates: `${inicio}/${fimExclusivo}`,
        details: `${ev.description}\n\nMais informações: ${absoluteUrl(ev.href)}`,
        location: ev.location,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}