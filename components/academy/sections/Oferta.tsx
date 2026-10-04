import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";
import { CtaButton, type Modo } from "@/components/academy/CtaButton";
import { Prazo } from "@/components/academy/Prazo";
import { Preco } from "@/components/academy/Preco";
import { ACADEMY, ANCORAS, GARANTIA_ACADEMY, NIVEIS_SALA, SALA } from "@/lib/ofertaAcademy";

// Ordem do pitch (Hormozi): as âncoras reais e o núcleo com o preço cheio
// primeiro; na sala, depois, a condição e a escada de bônus. A evergreen não
// tem bônus: a urgência dela é o próximo encontro mensal, quando tiver data.
const INCLUI = [
  ["O novo curso de Fresh Frozen + dissecção", "Mais intercorrências e anestesia"],
  ["Mais de 70 aulas práticas", "Toxina, preenchimento e bioestimuladores"],
  ["A Consulta que Vende e as ferramentas prontas", "Marketing, posicionamento, jurídico, anamnese, termos e precificação"],
  ["Encontros ao vivo todo mês na Sala de Lapidação", "Com as gravações dentro da plataforma"],
  ["Alfa Ômega · fé, identidade e propósito", "O começo de tudo pra Aline"],
] as const;

function Ancoras() {
  return (
    <Reveal className="mt-10 rounded-[6px] border border-line-soft bg-bg-3 p-6 sm:p-7">
      <span className="text-[11.5px] font-semibold tracking-[0.18em] text-wine-ink uppercase">
        Pra você ter uma referência
      </span>
      <ul className="mt-3 list-none p-0">
        {ANCORAS.map((a) => (
          <li key={a.o} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line py-3 last:border-b-0">
            <span className="text-[1rem] text-fg-soft">{a.o}</span>
            <span className="font-serif text-[1.1rem] text-fg">{a.v}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.92rem] leading-[1.5] text-fg-faint">
        Os dois primeiros são os cursos presenciais da própria Aline, só de técnica.
      </p>
    </Reveal>
  );
}

function CardPreco({ modo }: { modo: Modo }) {
  return (
    <Reveal delay={90} className="flex flex-col justify-center rounded-[6px] bg-wine px-8 py-9 text-on-wine">
      <div className="text-center text-[12px] tracking-[0.16em] uppercase opacity-90">{ACADEMY.nomeCompleto}</div>
      <div className="mt-5">
        <Preco modo={modo} onWine />
      </div>
      <CtaButton modo={modo} variant="accent" className="mt-7 w-full justify-center">
        Quero entrar na Academy
      </CtaButton>
      {modo === "sala" && (
        <div className="mt-3 text-center text-[0.9rem] opacity-90">
          Cupom <strong className="font-semibold">{SALA.cupom}</strong> já aplicado pelo botão
        </div>
      )}
      <div className="mt-6 flex items-start gap-2.5 text-left text-[0.96rem] opacity-90">
        <span className="font-serif text-[1.2rem] leading-none italic">✓</span>
        <span>
          <strong className="font-semibold">{GARANTIA_ACADEMY.nome}:</strong> {GARANTIA_ACADEMY.incondicional}{" "}
          {GARANTIA_ACADEMY.condicional}
        </span>
      </div>
    </Reveal>
  );
}

export function Oferta({ modo }: { modo: Modo }) {
  if (modo === "evergreen") {
    return (
      <section id="oferta" className="bg-bg-2 py-16 sm:py-[92px]">
        <Container narrow>
          <Titulo eyebrow={ACADEMY.nomeCompleto} destaque="no mesmo lugar.">
            Consulta, agulha e espelho
          </Titulo>
        </Container>
        <Container>
          <Ancoras />
          <div className="mt-11 grid grid-cols-1 items-stretch gap-9 sm:gap-11 md:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="grid content-center">
              {INCLUI.map(([t, d], i) => (
                <div
                  key={t}
                  className={`grid grid-cols-[22px_1fr] gap-4 py-[17px] ${i < INCLUI.length - 1 ? "border-b border-line" : ""}`}
                >
                  <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-wine-ink" aria-hidden="true" />
                  <span className="text-[1.08rem] text-fg">
                    {t}
                    <small className="mt-1 block text-[0.87rem] text-fg-faint">{d}</small>
                  </span>
                </div>
              ))}
            </Reveal>
            <CardPreco modo="evergreen" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="oferta" className="bg-bg-2 py-16 sm:py-[92px]">
      <Container narrow>
        <Titulo eyebrow="Condição de quem esteve na aula" destaque={`${SALA.precoLabel} e os bônus da sala.`}>
          Até {SALA.prazoCurto}:
        </Titulo>
        <Reveal>
          <p className="mt-5 text-[1.05rem] leading-[1.6] text-fg-soft">
            O valor da {ACADEMY.nomeCompleto} é {ACADEMY.precoCheioLabel}. Quem esteve na aula de
            06/10 entra por {SALA.precoLabel} até {SALA.prazoLabel}, e leva os bônus abaixo.
          </p>
        </Reveal>
      </Container>

      <Container>
        <Ancoras />
        <div className="mt-11 grid grid-cols-1 items-stretch gap-9 sm:gap-11 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="grid content-start gap-4">
            {NIVEIS_SALA.map((n, i) => (
              <div key={n.quem} className={`rounded-[6px] border p-6 ${i === 0 ? "border-line bg-bg-3" : "border-wine/60 bg-bg-3"}`}>
                <span className="text-[11.5px] font-semibold tracking-[0.16em] text-wine-ink uppercase">
                  {i === 0 ? n.quem : `+ ${n.quem}`}
                </span>
                <ul className="mt-2 list-none p-0">
                  {n.itens.map((it) => (
                    <li key={it.nome} className="py-2">
                      <div className="text-[1.05rem] text-fg">{it.nome}</div>
                      <div className="mt-0.5 text-[0.9rem] leading-[1.5] text-fg-faint">{it.porque}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-[0.9rem] leading-[1.55] text-fg-faint">
              As primeiras {SALA.primeirasN} e as primeiras {SALA.primeirasTopo} contam pela ordem de
              confirmação do pagamento. A equipe avisa no WhatsApp quem entrou em cada nível
              {SALA.encontroCasosData ? ` · encontro de casos em ${SALA.encontroCasosData}` : ""}
              {SALA.diagnosticoAte ? ` · diagnóstico agendado até ${SALA.diagnosticoAte}` : ""}.
            </p>
          </Reveal>
          <CardPreco modo="sala" />
        </div>
        <Prazo className="mt-10" />
      </Container>
    </section>
  );
}
