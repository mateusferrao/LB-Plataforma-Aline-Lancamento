import { Reveal } from "@/components/Reveal";

// Eyebrow + H2 das seções de todas as LPs (padrão da /fresh). O `destaque` (as
// palavras finais) fica só com o texto vermelho: o grifo marsala (titulo-grifo)
// é exclusivo do H1 do Hero, pra headline ser o único título com bloco de cor.
// Fonte: a mesma do H1 da /fresh (Inter semibold, espaçamento apertado) — vale
// pra todo H1/H2 das LPs. A Fraunces fica nos títulos menores (h3, FAQ,
// números e ingresso).
export function Titulo({
  eyebrow,
  children,
  destaque,
  center = false,
}: {
  eyebrow: string;
  children?: React.ReactNode;
  destaque?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
        {eyebrow}
      </span>
      <h2
        className={`mt-[18px] text-balance font-sans font-semibold text-[1.75rem] leading-[1.18] tracking-[-0.015em] text-fg sm:text-[2.25rem] ${
          center ? "mx-auto max-w-[620px]" : ""
        }`}
      >
        {children}
        {children && destaque ? " " : null}
        {destaque && <span className="text-wine-bright">{destaque}</span>}
      </h2>
    </Reveal>
  );
}
