import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Titulo } from "@/components/Titulo";

// A dor dita com as palavras dela, logo depois do hero. Frases adaptadas para a
// segunda pessoa a partir da pesquisa "Aline - 2025" (respostas sem identificação):
// "medo de errar", "o medo me trava", "insegurança em alguns procedimentos",
// "paciente chamando querendo saber apenas preço", "dou muito desconto",
// "fiz cursos e continuo perdida".
const FRASES = [
  { onde: "Na agulha", f: "A mão hesita quando você chega perto do nariz, da glabela ou do sulco." },
  { onde: "Na agulha", f: "Você tem medo de errar, e às vezes é ele que escolhe o que você oferece pra paciente." },
  { onde: "Na consulta", f: "A paciente pergunta “você já fez isso?” e você sente a voz vacilar." },
  { onde: "Na consulta", f: "Ela diz “vou pensar”… e nunca mais responde." },
  { onde: "Na consulta", f: "Chega mensagem só querendo saber o preço, e você acaba dando desconto." },
  { onde: "Na carreira", f: "Você já fez curso, mentoria, e continua se sentindo perdida." },
] as const;

export function VoceSeReconhece() {
  return (
    <section className="py-16 sm:py-[84px]">
      <Container narrow>
        <Titulo eyebrow="Você se reconhece?" destaque="E ela aparece em dois lugares.">
          Não é falta de estudo. É insegurança.
        </Titulo>

        <ul className="mt-9 list-none border-t border-line p-0">
          {FRASES.map((x, i) => (
            <Reveal as="li" key={x.f} delay={i * 50} className="grid grid-cols-[96px_1fr] gap-4 border-b border-line py-[18px] sm:grid-cols-[120px_1fr]">
              <span className="pt-1 text-[11px] font-semibold tracking-[0.16em] text-wine-ink uppercase">{x.onde}</span>
              <span className="text-[1.08rem] leading-[1.5] text-fg">{x.f}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-7 text-[1rem] leading-[1.6] text-fg-soft">
            Essas frases vieram de profissionais como você, na pesquisa que a Aline fez com a
            audiência dela. Se pelo menos duas são suas, o problema não é coragem nem falta de
            curso. É não ter visto por dentro e não ter um caminho pra consulta.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
