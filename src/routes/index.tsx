import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-blowout.jpg";

// Substitua pelo número completo de WhatsApp da Vivianne (com DDD e 9).
const WHATSAPP_NUMBER = "5579966XXXXX";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Vivianne Escovista & Manicure | Cabelos Lindos & Unhas Impecáveis",
      },
      {
        name: "description",
        content:
          "Especialista em escovas e cuidados tradicionais para mãos e pés. Atendimento exclusivo de domingo a domingo no bairro Santa Maria. Agende pelo WhatsApp.",
      },
      {
        property: "og:title",
        content:
          "Vivianne Escovista & Manicure | Cabelos Lindos & Unhas Impecáveis",
      },
      {
        property: "og:description",
        content:
          "Escovas modeladas, manicure e pedicure tradicional no bairro Santa Maria. Atendimento de domingo a domingo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/20">
      {/* Sticky Mobile CTA */}
      <a
        href={WHATSAPP_LINK}
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform active:scale-95 animate-pulse-soft"
        aria-label="Agendar pelo WhatsApp"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      {/* Navigation */}
      <nav className="flex flex-col items-center gap-2 border-b border-border px-6 py-8">
        <span className="font-display text-2xl italic tracking-tight text-primary">
          Vivianne
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Escovista & Manicure
        </span>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center px-6 py-12 text-center animate-fade-up">
        <div className="mb-10 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-primary/5">
          <img
            src={heroImage}
            alt="Vivianne escovando cabelos longos e brilhantes em um salão ensolarado"
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <h1 className="mb-6 font-display text-4xl italic leading-[1.1] text-balance">
          Cabelos Lindos & <br /> Unhas Impecáveis
        </h1>
        <p className="mb-8 max-w-[30ch] text-pretty text-muted">
          Especialista em escovas e cuidados tradicionais para mãos e pés.
          Atendimento exclusivo de domingo a domingo.
        </p>
        <a
          href={WHATSAPP_LINK}
          className="inline-block rounded-full bg-foreground px-8 py-4 font-medium tracking-wide text-background transition-transform active:scale-95"
        >
          Agende seu Horário
        </a>
      </header>

      {/* About */}
      <section className="bg-primary/5 px-6 py-16 animate-fade-up">
        <div className="mx-auto max-w-md">
          <h2 className="mb-6 font-display text-2xl italic">
            Cuidado completo para sua beleza e autoestima
          </h2>
          <p className="mb-6 leading-relaxed">
            Com atenção aos mínimos detalhes e dedicação total às clientes, a
            Vivianne oferece o cuidado que você merece: escovas modeladas com
            brilho incrível e serviço de manicure e pedicure com acabamento
            limpo e cuidadoso.
          </p>
          <p className="leading-relaxed text-muted italic">
            Nosso objetivo é proporcionar um momento de relaxamento e
            renovação, garantindo um resultado impecável tanto nos cabelos
            quanto nas unhas.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Nossos Serviços
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Hair */}
        <div className="mb-12 animate-fade-up">
          <h3 className="mb-6 flex items-center gap-3 font-display text-xl italic">
            <span className="size-1.5 rounded-full bg-primary" />
            Cabelos & Escovas
          </h3>
          <div className="space-y-4">
            <ServiceCard
              title="Escovas Perfeitas"
              description="Modelada, Lisa ou Ondulada (Beach Waves)"
            />
            <ServiceCard
              title="Secagem Expressa"
              description="Praticidade para o seu dia a dia"
            />
            <ServiceCard
              title="Tratamentos Capilares"
              description="Hidratação profunda, nutrição e reconstrução dos fios"
            />
            <ServiceCard
              title="Combo Especial"
              description="Lavagem com Massagem + Tratamento + Escova"
            />
          </div>
        </div>

        {/* Nails */}
        <div className="animate-fade-up">
          <h3 className="mb-6 flex items-center gap-3 font-display text-xl italic">
            <span className="size-1.5 rounded-full bg-primary" />
            Mãos & Pés
          </h3>
          <div className="space-y-4">
            <ServiceCard
              title="Manicure Tradicional"
              description="Cutilagem funda e delicada com esmaltação clássica"
            />
            <ServiceCard
              title="Pedicure Tradicional"
              description="Higienização, cutilagem e esmaltação perfeita para os pés"
            />
            <ServiceCard
              title="Combo Mãos e Pés"
              description="Cuidado completo no mesmo atendimento"
            />
            <ServiceCard
              title="Spa dos Pés e Mãos"
              description="Esfoliação e hidratação profunda para pele macia"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="rounded-t-[32px] bg-foreground px-6 py-16 text-background">
        <h2 className="mb-10 font-display text-3xl italic leading-tight text-balance">
          Por que escolher nossos cuidados?
        </h2>
        <ul className="space-y-8">
          <BenefitItem
            number="01"
            title="Horário Super Flexível"
            description="Atendimento de domingo a domingo, das 07:00 às 22:00, ajustado à sua rotina."
          />
          <BenefitItem
            number="02"
            title="Praticidade no Mesmo Lugar"
            description="Cuide do seu cabelo e das suas unhas no mesmo atendimento."
          />
          <BenefitItem
            number="03"
            title="Biossegurança e Higiene"
            description="Materiais descartáveis e higienizados para a segurança da sua saúde."
          />
          <BenefitItem
            number="04"
            title="Acabamento e Durabilidade"
            description="Escovas duradouras e esmaltação tradicional cuidadosa que dura mais tempo nas unhas."
          />
        </ul>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 p-8">
          <div className="relative z-10">
            <p className="mb-6 text-lg leading-relaxed italic">
              "Amo fazer cabelo e unhas com a Vivianne! A cutilagem é perfeita
              e a escova dura dias. Além disso, o horário de atendimento
              facilita muito a minha vida."
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
              — Cliente Satisfeita
            </p>
          </div>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 p-8">
          <div className="relative z-10">
            <p className="mb-6 text-lg leading-relaxed italic">
              "Muito difícil achar quem faça uma manicure tradicional tão bem
              feita e limpinha hoje em dia. Atendimento nota 10!"
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
              — Cliente Satisfeita
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="border-t border-border px-6 py-16">
        <h2 className="mb-8 font-display text-2xl italic">
          Onde nos encontrar
        </h2>
        <div className="mb-12 space-y-6">
          <div>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted">
              Localização
            </p>
            <p className="text-sm">
              Rua Lei do Ventre Livre
              <br />
              Bairro Santa Maria, SE
            </p>
          </div>
          <div>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted">
              Disponibilidade
            </p>
            <p className="text-sm">
              Domingo a Domingo
              <br />
              07:00 — 22:00
            </p>
          </div>
          <div>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted">
              WhatsApp
            </p>
            <p className="text-sm">+55 79 966...</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href={WHATSAPP_LINK}
            className="w-full rounded-full bg-primary py-4 text-center font-medium text-primary-foreground shadow-lg transition-transform active:scale-95"
          >
            Falar no WhatsApp e Garantir meu Horário
          </a>
          <p className="text-center font-mono text-[10px] uppercase tracking-widest text-muted">
            © {new Date().getFullYear()} Vivianne Escovista & Manicure
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start justify-between rounded-xl border border-border bg-white/50 p-4">
      <div>
        <p className="font-medium">{title}</p>
        <p className="mt-1 text-xs text-muted">{description}</p>
      </div>
    </div>
  );
}

function BenefitItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 font-mono text-xs text-primary">{number}</span>
      <div>
        <h4 className="mb-1 font-medium">{title}</h4>
        <p className="text-sm text-background/60">{description}</p>
      </div>
    </li>
  );
}
