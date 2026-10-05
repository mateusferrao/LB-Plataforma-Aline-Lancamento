import { Reveal } from "@/components/Reveal";
import { Secao } from "@/components/academy/Secao";

// Esteticistas entram (decisão de 04/10). O "não é" filtra quem procura
// promessa de agenda, que a página não faz.
const E = [
  "Você é biomédica, dentista, enfermeira, farmacêutica, fisioterapeuta ou esteticista",
  "Você aplica, ou vai começar, e quer a mão mais segura",
  "Você ouve “vou pensar” mais do que gostaria",
  "Você já fez curso e quer técnica, anatomia e consulta num lugar só",
];
const NAO = [
  "Você procura fórmula de agenda cheia em sete dias",
  "Você quer só o certificado, sem estudar nem aplicar",
];

function Lista({ titulo, itens, sim }: { titulo: string; itens: string[]; sim: boolean }) {
  return (
    <div className="rounded-[6px] border border-line p-6">
      <h3 className="font-sans text-[1.1rem] font-semibold text-fg uppercase">{titulo}</h3>
      <ul className="mt-3 list-none p-0">
        {itens.map((x) => (
          <li key={x} className={`flex gap-2.5 py-1.5 text-[1rem] leading-[1.5] ${sim ? "text-fg" : "text-fg-soft"}`}>
            <span className={sim ? "text-wine-ink" : "text-fg-faint"} aria-hidden="true">
              {sim ? "✓" : "×"}
            </span>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ParaQuem() {
  return (
    <Secao>
      <Reveal>
        <h2 className="text-center font-sans font-semibold text-[1.75rem] tracking-[-0.015em] text-fg sm:text-[2.25rem]">
          É pra você?
        </h2>
      </Reveal>
      <Reveal className="mt-8 grid gap-4">
        <Lista titulo="É pra você se" itens={E} sim />
        <Lista titulo="Não é pra você se" itens={NAO} sim={false} />
      </Reveal>
    </Secao>
  );
}
