import Image from "next/image";
import Link from "next/link";
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
        <Link
          href="/politica-de-privacidade"
          className="mt-2 text-[12.5px] tracking-[0.03em] text-ink-faint underline underline-offset-2 hover:text-accent-deep"
        >
          Política de Privacidade
        </Link>
      </Container>
    </footer>
  );
}
