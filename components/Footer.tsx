import Image from "next/image";
import { Container } from "@/components/Container";
import { withBasePath } from "@/lib/basePath";

export function Footer() {
  return (
    <footer className="border-t border-line py-12 text-center">
      <Container className="flex flex-col items-center">
        <Image
          src={withBasePath("/images/logo-ink.png")}
          alt="Aline Filgueiras"
          width={140}
          height={44}
          className="h-auto w-[120px]"
        />
        {/* CNPJ pendente de confirmação do cliente — não inventar antes do build final */}
        <p className="mt-3 text-[12.5px] tracking-[0.03em] text-ink-faint">
          Filgueiras Academy · CNPJ a confirmar · © 2026 · Todos os direitos reservados
        </p>
      </Container>
    </footer>
  );
}
