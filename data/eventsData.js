// data/eventsData.js

// Alcance de cada evento (usado nos filtros e nas etiquetas da página /eventos)
export const EVENT_SCOPES = {
  guarapuava: { label: "Guarapuava" },
  brasil: { label: "Brasil" },
  internacional: { label: "Internacional" },
};

// Datas em formato AAAA-MM-DD (start e end). Eventos que já passaram
// somem sozinhos da página, então não precisa apagar na mão.
//
// Para adicionar um evento novo, copie um bloco abaixo e troque os dados.
//  - scope: "guarapuava" | "brasil" | "internacional"
//  - external: true se o link for de outro site (abre em nova aba)
//  - featured: true para o card grande de destaque (use em um evento só)
export const UPCOMING_EVENTS = [
  {
    id: 12,
    title: "Guarapuava Gastronômica - Edição Primavera",
    date: "30 de Outubro a 01 de Novembro",
    start: "2026-10-30",
    end: "2026-11-01",
    location: "Centro de Eventos Cidade dos Lagos - Guarapuava/PR",
    description:
      "Gastronomia, cervejarias, shows, artesanato e área kids, com entrada e estacionamento gratuitos. Show de Jeann & Julio no dia 31 de outubro, às 21h30. Patrocínio master: Itaipu Binacional.",
    type: "Festival",
    scope: "guarapuava",
    organizer: "Abrasel Centro-Sul do Paraná",
    featured: true,
    countdown: true,
    href: "/guarapuava-gastronomica-de-primavera",
    image: "/images/eventos/guarapuava-gastronomica-primavera-destaque.jpg",
  },
  {
    id: 9,
    title: "Festival Bar em Bar",
    date: "29 de Outubro a 15 de Novembro",
    start: "2026-10-29",
    end: "2026-11-15",
    location: "Em bares de todo o Brasil",
    description:
      "20ª edição do festival que celebra a cultura dos botecos. Cada bar participante cria um petisco inédito e o vende a preço promocional durante todo o período. Inscrições em breve.",
    type: "Festival",
    scope: "brasil",
    organizer: "Abrasel",
    href: "https://abrasel.com.br/agenda/festival-bar-em-bar/",
    external: true,
  },
  {
    id: 13,
    title: "HFN - Hotel & Food Nordeste",
    date: "04 a 06 de Novembro",
    start: "2026-11-04",
    end: "2026-11-06",
    location: "Centro de Convenções de Pernambuco - Olinda/PE",
    description:
      "8ª edição da maior feira de hotelaria e alimentação do Nordeste, com fórum de conteúdo e rodadas de negócios para bares, restaurantes e hotéis. Credenciamento aberto no site oficial.",
    type: "Feira",
    scope: "brasil",
    organizer: "Insight Feiras & Negócios",
    href: "https://hfne.com.br/",
    external: true,
  },
  {
    id: 10,
    title: "45º Encontro Nacional Abrasel",
    date: "24 a 26 de Novembro",
    start: "2026-11-24",
    end: "2026-11-26",
    location: "Fortaleza/CE",
    description:
      "Encontro itinerante que reúne empreendedores do setor de alimentação fora do lar para debater o mercado e fechar novos negócios. Gratuito para associados Abrasel.",
    type: "Encontro",
    scope: "brasil",
    organizer: "Abrasel",
    href: "https://abrasel.com.br/agenda/45-encontro-nacional-abrasel-1/",
    external: true,
  },
];