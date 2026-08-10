import Image from "next/image";
import { Container } from "@/components/Container";
import { withBasePath } from "@/lib/basePath";

// Sem links de navegação de propósito — regra da write-landing-page.md: "o único
// elemento clicável deve ser o CTA". A logo aqui é só identidade, não é clicável.
export function SiteHeader() {
  return (
    <Container className="pt-8">
      <Image
        src={withBasePath("/images/logo-ink.png")}
        alt="Aline Filgueiras"
        width={162}
        height={51}
        priority
        className="h-auto w-[132px] sm:w-[150px]"
      />
    </Container>
  );
}
