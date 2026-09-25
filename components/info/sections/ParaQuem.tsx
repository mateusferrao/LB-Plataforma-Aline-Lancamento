import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// "Isso é pra mim?" com os perfis da pesquisa de público (quem já aplica,
// quem está começando — ~28% formadas há 1–3 anos — e quem quer passar mais
// segurança à paciente). O "não é pra você" deixa claro que é material de
// consulta, não formação: honestidade que também protege de expectativa errada.
const PERFIS = [
  "Já aplica e quer o protocolo de emergência à vista, não só na memória.",
  "Está começando e quer saber, desde o primeiro atendimento, onde o risco se concentra.",
  "Quer responder com calma quando a paciente manda foto do pós.",
  "Quer passar mais segurança pra paciente antes e depois do procedimento.",
];

export function ParaQuem() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Pra quem é
          </span>
          <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
            <span className="titulo-grifo">O Mapa é pra você que…</span>
          </h2>
        </Reveal>

        <div className="mt-[38px] grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PERFIS.map((perfil, i) => (
            <Reveal
              key={perfil}
              delay={i * 90}
              className="rounded-[6px] border border-line bg-bg-2 p-6"
            >
              <span className="font-serif text-[1.05rem] text-wine-ink">0{i + 1}</span>
              <p className="mt-2.5 text-[1.02rem] leading-[1.5] text-fg">{perfil}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 max-w-[600px] text-[1.02rem] leading-[1.6] text-fg-soft">
            Biomédicas, dentistas, enfermeiras, farmacêuticas e esteticistas que já aplicam
            (ou vão aplicar) harmonização facial.
          </p>
          <p className="mt-4 max-w-[600px] border-l-2 border-wine pl-4 text-[1.02rem] leading-[1.6] text-fg-soft">
            <strong className="font-semibold text-fg">Não é pra você</strong> se procura um
            curso ou um protocolo de tratamento. O Mapa é material de consulta rápida:
            organiza o que a literatura publicou e não substitui formação nem protocolos
            clínicos oficiais.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
