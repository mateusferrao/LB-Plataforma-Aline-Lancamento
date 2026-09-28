import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

// As 4 dúvidas que paralisam na hora. Cada uma tem resposta literal no
// protocolo da Aline (calor e nunca gelo; 1 frasco por hora; alta após 5
// protocolos; pústulas = descamação → casquinhas). A pesquisa de público fala
// em "medo" e "insegurança", então o tom é de preparo, nunca de pânico.
const PAINS = [
  "A cor muda no meio da aplicação e você não sabe se massageia, se esquenta ou se esfria.",
  "Você aplicou a hialuronidase e não reverteu. Repete? Quanto? Por quanto tempo?",
  "Já se passaram horas. Você manda a paciente pra casa ou não?",
  "Ela volta no dia seguinte com pústulas, e você não sabe se é piora ou o caminho da cicatrização.",
];

export function Problem() {
  return (
    <section className="py-16 sm:py-[92px]">
      <Container narrow>
        <Reveal>
          <span className="text-[12px] font-semibold tracking-[0.24em] text-wine-ink uppercase">
            Na hora que importa
          </span>
          <h2 className="mt-[18px] text-balance font-serif font-semibold text-[1.95rem] leading-[1.12] sm:text-[2.6rem]">
            <span className="titulo-grifo">
              Você sabe que é raro. Também sabe que, se acontecer, vai ser na sua cadeira.
            </span>
          </h2>
          <p className="mt-[18px] max-w-[560px] text-[1.08rem] leading-[1.55] text-fg-soft">
            E, na hora, as dúvidas chegam todas juntas:
          </p>
        </Reveal>

        <div className="mt-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PAINS.map((pain, i) => (
            <Reveal
              key={pain}
              delay={i * 90}
              className="rounded-[6px] border border-line bg-bg-2 p-6"
            >
              <span className="font-serif text-[1.05rem] text-wine-ink">0{i + 1}</span>
              <p className="mt-2.5 text-[1.02rem] leading-[1.5] text-fg-soft">{pain}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-9 max-w-[600px] font-serif text-[1.28rem] leading-[1.4] text-fg italic">
            O protocolo responde cada uma delas, na ordem em que elas aparecem. Você não
            precisa decidir nada no susto: só seguir o próximo passo.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
