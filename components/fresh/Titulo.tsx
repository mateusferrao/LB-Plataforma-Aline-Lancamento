import { Reveal } from "@/components/Reveal";

// Eyebrow + H2 das seções da /fresh. O `destaque` (2 ou 3 palavras) fica só com
// o texto vermelho: o grifo marsala (titulo-grifo) é exclusivo do H1 do Hero,
// pra headline ser o único título com bloco de cor na página.
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
        className={`mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.2] text-fg sm:text-[2.5rem] ${
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
