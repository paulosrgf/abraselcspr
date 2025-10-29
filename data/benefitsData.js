// data/benefitsData.js
// 🚨 IMPORTAÇÃO CORRETA:
import { DollarSign, Zap, Users, Megaphone, LifeBuoy } from 'lucide-react'; 

export const ASSOCIATION_BENEFITS = [
// ... (restante do código)
    {
        icon: DollarSign,
        title: "Redução de Custos e Vantagens Financeiras",
        items: [
            "Parcerias com vouchers: Condições e taxas reduzidas em negociações com Alelo, Sodexo, Ticket e Ben.",
            "Convênios: Acordos com fornecedores para preços mais competitivos em produtos e serviços essenciais."
        ]
    },
    {
        icon: Zap,
        title: "Capacitação e Desenvolvimento Profissional",
        items: [
            "Cursos e treinamentos: Programas de qualificação como o 'Qualidade na Mesa', seminários e palestras.",
            "Consultorias especializadas: Acesso a assessorias jurídica e contábil para esclarecer dúvidas complexas."
        ]
    },
    {
        icon: Users,
        title: "Fortalecimento do Networking e Representatividade",
        items: [
            "Eventos: Participação em feiras, congressos nacionais e festivais como o 'Brasil Sabor'.",
            "Força política: Atuação conjunta para defender os interesses do setor perante órgãos públicos."
        ]
    },
    {
        icon: Megaphone,
        title: "Marketing e Divulgação",
        items: [
            "Visibilidade: Divulgação do seu estabelecimento em boletins, guias e no site da Abrasel.",
            "Promoção da marca: Participação em ações de marketing institucional junto ao público, mídia e setor turístico."
        ]
    },
    {
        icon: LifeBuoy,
        title: "Suporte Operacional",
        items: [
            "Bolsa de empregos: Acesso a um banco de currículos com candidatos para diversas áreas.",
            "Atendimento personalizado: Suporte individualizado para tratar de assuntos específicos do seu negócio."
        ]
    },
];