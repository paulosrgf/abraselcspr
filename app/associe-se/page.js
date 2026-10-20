// app/associe-se/page.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AssociationForm from '../../components/AssociationForm';
import BenefitsSection from '../../components/BenefitsSection';
import WhatsAppButton from '../../components/WhatsAppButton';
import { ArrowDown, CheckCircle2, Clock, ShieldCheck, Users } from 'lucide-react';

export const metadata = {
  title: 'Associe-se | Abrasel Centro-Sul do Paraná',
  description:
    'Associe seu bar ou restaurante à Abrasel Centro-Sul do Paraná e tenha acesso a vantagens financeiras, capacitação, networking, marketing e suporte. Fale com a gente pelo WhatsApp.',
};

// ============================================================
// EDITE AQUI: contato de WhatsApp
// ============================================================
const WHATSAPP_NUMBER = '5542999172322';
const WHATSAPP_MESSAGE =
  'Olá, gostaria de saber mais sobre como associar meu estabelecimento à ABRASEL Centro Sul do Paraná.';
const whatsappLink = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const PASSOS = [
  {
    titulo: 'Fale com a gente',
    texto: 'Chame no WhatsApp ou envie o formulário com os dados do seu negócio.',
  },
  {
    titulo: 'Receba o contato',
    texto: 'Um de nossos consultores entra em contato em até 24h.',
  },
  {
    titulo: 'Faça parte da rede',
    texto: 'Seu estabelecimento passa a contar com a força da Abrasel.',
  },
];

const SELOS = [
  { icon: Clock, texto: 'Retorno em até 24h' },
  { icon: ShieldCheck, texto: 'Dados protegidos pela LGPD' },
  { icon: Users, texto: 'Maior rede de gastronomia do Brasil' },
];
// ============================================================

export default function AssocieSePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* ===================== TOPO (HERO) ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#04200f] via-[#0a3b1d] to-[#0f5f2d] text-white">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-green-500/20 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:px-8">
          {/* Texto */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full bg-amber-400 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-black">
              Abrasel Centro-Sul PR
            </span>

            <h1 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
              Associe-se à <span className="text-amber-400">Abrasel</span>
              <span className="mt-3 block font-serif text-3xl font-semibold normal-case italic tracking-normal text-green-200 sm:text-4xl lg:text-5xl">
                e fortaleça o seu negócio
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-green-50/90 md:text-xl">
              Junte-se à maior entidade de bares e restaurantes da região e tenha
              acesso a ferramentas exclusivas para crescer.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton href={whatsappLink} placement="associe-se-hero">
                Falar no WhatsApp
              </WhatsAppButton>

              <a
                href="#formulario"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                Preencher formulário
                <ArrowDown size={18} />
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-green-100">
              {SELOS.map(({ icon: Icon, texto }) => (
                <li key={texto} className="inline-flex items-center gap-2">
                  <Icon size={18} className="text-amber-300" />
                  {texto}
                </li>
              ))}
            </ul>
          </div>

          {/* Cartão: como funciona */}
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
                Como funciona
              </p>

              <ol className="mt-6 space-y-6">
                {PASSOS.map((passo, i) => (
                  <li key={passo.titulo} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 text-lg font-black text-black">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-lg font-extrabold">
                        {passo.titulo}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-green-100">
                        {passo.texto}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BENEFÍCIOS ===================== */}
      <BenefitsSection />

      {/* ===================== FORMULÁRIO + WHATSAPP ===================== */}
      <section
        id="formulario"
        className="scroll-mt-24 bg-gradient-to-b from-white to-green-50/60 py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          {/* Coluna da esquerda */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-green-700">
              Vamos começar
            </span>
            <h2 className="mt-2 text-3xl font-black uppercase leading-tight tracking-tighter text-gray-900 md:text-4xl">
              Envie seus <span className="text-green-700">dados</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Preencha o formulário e um de nossos consultores entrará em contato
              em até 24h.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                'Sem compromisso para conhecer a Abrasel',
                'Atendimento personalizado para o seu negócio',
                'Seus dados são usados só para o contato',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-green-600"
                  />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Alternativa: WhatsApp */}
            <div className="mt-10 rounded-3xl border border-green-100 bg-white p-6 shadow-xl shadow-green-900/5">
              <h3 className="text-xl font-extrabold text-gray-900">
                Prefere um atendimento{' '}
                <span className="text-green-700">rápido?</span>
              </h3>
              <p className="mt-2 text-gray-600">
                Converse direto com nossa equipe pelo WhatsApp.
              </p>
              <WhatsAppButton
                href={whatsappLink}
                placement="associe-se-formulario"
                className="mt-5 w-full"
              >
                Conversar agora
              </WhatsAppButton>
            </div>
          </div>

          {/* Coluna da direita: formulário (não mudou) */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl shadow-slate-200 sm:p-10">
              <AssociationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton
        href={whatsappLink}
        variant="float"
        placement="associe-se-flutuante"
      />
    </main>
  );
}