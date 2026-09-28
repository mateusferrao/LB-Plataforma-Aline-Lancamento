import { Reveal } from "@/components/Reveal";

// Eyebrow + H2 das seções da /fresh. O grifo marsala fica só no `destaque`
// (2 ou 3 palavras), não na frase inteira: mantém a ligação visual com os
// criativos sem o peso do título todo grifado das LPs anteriores.
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
        {destaque && <span className="titulo-grifo">{destaque}</span>}
      </h2>
    </Reveal>
  );
}
