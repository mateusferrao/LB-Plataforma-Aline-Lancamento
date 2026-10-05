import { Reveal } from "@/components/Reveal";
import { Secao } from "@/components/academy/Secao";
import { GARANTIA_ACADEMY } from "@/lib/ofertaAcademy";

// Garantia em um bloco (selo + título + duas frases), como na referência.
export function Garantia() {
  return (
    <Secao>
      <Reveal className="flex flex-col items-center rounded-[6px] border border-line px-6 py-9 text-center">
        <div className="flex h-[112px] w-[112px] flex-col items-center justify-center rounded-full border-2 border-wine-ink">
          <span className="font-sans text-[2.3rem] font-semibold leading-none text-fg">
            {GARANTIA_ACADEMY.prazoCondicionalDias}
          </span>
          <span className="mt-1 text-[10.5px] font-semibold tracking-[0.14em] text-fg-soft uppercase">dias de garantia</span>
        </div>
        <h2 className="mt-6 font-sans font-semibold text-[1.6rem] tracking-[-0.015em] text-fg sm:text-[1.9rem]">
          {GARANTIA_ACADEMY.nome}
        </h2>
        <p className="mt-3 max-w-[520px] text-[1.05rem] leading-[1.6] text-fg-soft">
          {GARANTIA_ACADEMY.incondicional} {GARANTIA_ACADEMY.condicional}
        </p>
        <p className="mt-4 text-[0.9rem] text-fg-faint">
          Pedido pelo WhatsApp {GARANTIA_ACADEMY.whatsapp} ou pelo e-mail {GARANTIA_ACADEMY.email}.
        </p>
      </Reveal>
    </Secao>
  );
}
