import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade · Aline Filgueiras",
  description:
    "Como tratamos seus dados e cookies na página da aula Por Dentro da Face.",
};

const CONTROLLER = "Filgueiras Academy (Dra. Aline Filgueiras)";
const UPDATED_AT = "agosto de 2026";

export default function PoliticaDePrivacidade() {
  return (
    <>
      <main className="py-14 sm:py-20">
        <Container narrow>
          <Link
            href="/"
            className="text-[13px] tracking-[0.02em] text-wine-ink hover:text-fg"
          >
            ← Voltar
          </Link>

          <h1 className="mt-6 font-serif text-[2rem] leading-[1.15] text-fg sm:text-[2.6rem]">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-[13px] text-fg-faint">
            Atualizada em {UPDATED_AT}
          </p>

          <div className="mt-8 flex flex-col gap-7 text-[1.02rem] leading-[1.65] text-fg-soft">
            <p>
              Esta política explica como {CONTROLLER} trata os seus dados nesta página
              (live.alinefilgueiras.com.br), referente à aula ao vivo &quot;Por Dentro da
              Face&quot;. Levamos a sua privacidade a sério e seguimos a Lei Geral de
              Proteção de Dados (LGPD, Lei nº 13.709/2018).
            </p>

            <section>
              <h2 className="font-serif text-[1.4rem] text-fg">1. Dados que coletamos</h2>
              <p className="mt-2">
                Ao navegar nesta página, coletamos dados de navegação por meio de cookies e
                tecnologias semelhantes: páginas vistas, cliques, tipo de dispositivo,
                navegador, localização aproximada e identificadores de anúncio (como o
                <span className="whitespace-nowrap"> fbclid</span> da Meta). Não pedimos
                cadastro nem dados sensíveis nesta página.
              </p>
              <p className="mt-2">
                Os dados que você informa na hora da compra (nome, e-mail, telefone e dados
                de pagamento) são coletados e tratados diretamente pela{" "}
                <strong>Ticto</strong>, a plataforma de checkout, conforme a política de
                privacidade dela. Este site não armazena dados de pagamento.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.4rem] text-fg">
                2. Cookies e ferramentas de medição
              </h2>
              <p className="mt-2">
                Usamos o <strong>Meta Pixel</strong> (Meta Platforms) e o{" "}
                <strong>Google Analytics 4</strong> (Google) para entender a audiência e
                medir a eficiência da divulgação. Essas ferramentas usam cookies próprios.
                Você pode bloquear ou apagar cookies nas configurações do seu navegador; a
                página continua funcionando normalmente.
              </p>
              <p className="mt-2">
                O vídeo de apresentação desta página é exibido por meio do{" "}
                <strong>Vimeo</strong> (Vimeo.com Inc.), que também pode usar cookies
                próprios para reproduzir o player e medir a audiência do vídeo, conforme a
                política de privacidade dele.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.4rem] text-fg">
                3. Para que usamos e base legal
              </h2>
              <p className="mt-2">
                Usamos esses dados para medir e melhorar a divulgação da aula, entender de
                onde vêm os visitantes e otimizar anúncios. A base legal é o legítimo
                interesse e o seu consentimento ao continuar navegando.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.4rem] text-fg">
                4. Com quem compartilhamos
              </h2>
              <p className="mt-2">
                Os dados de navegação são compartilhados com Meta e Google, que operam essas
                ferramentas de medição, e a finalização da compra ocorre na Ticto. Cada uma
                dessas empresas tem a própria política de privacidade. Não vendemos os seus
                dados.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.4rem] text-fg">5. Os seus direitos</h2>
              <p className="mt-2">
                Você pode solicitar acesso, correção, exclusão, portabilidade ou oposição ao
                tratamento dos seus dados, além de revogar o consentimento. É só entrar em
                contato pelo nosso WhatsApp de atendimento.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-[1.4rem] text-fg">6. Contato</h2>
              <p className="mt-2">
                Para qualquer questão sobre os seus dados, fale com {CONTROLLER} pelo nosso
                WhatsApp de atendimento.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
