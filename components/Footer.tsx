import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { withBasePath } from "@/lib/basePath";

export function Footer() {
  return (
    <footer className="border-t border-line py-12 text-center">
      <Container className="flex flex-col items-center">
        {/* logo-ink.png é escura; brightness-0 + invert força ela a branco no fundo preto.
            Se houver uma versão clara do logo, troque o arquivo e remova o filtro. */}
        <Image
          src={withBasePath("/images/logo-ink.png")}
          alt="Aline Filgueiras"
          width={140}
          height={44}
          className="h-auto w-[120px] brightness-0 invert"
        />
        <p className="mt-3 text-[12.5px] tracking-[0.03em] text-fg-faint">
          Filgueiras Academy · © 2026 · Todos os direitos reservados
        </p>
        <Link
          href="/politica-de-privacidade"
          className="mt-2 text-[12.5px] tracking-[0.03em] text-fg-faint underline underline-offset-2 hover:text-wine-ink"
        >
          Política de Privacidade
        </Link>
      </Container>
    </footer>
  );
}
