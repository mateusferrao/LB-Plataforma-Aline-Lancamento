"use client";

import { useEffect, useState } from "react";

// Personalização por nome via ?nome= na URL, se o Ticto anexar esse parâmetro no
// redirecionamento. Começa genérico (evita mismatch de hidratação) e só troca depois
// de montar no cliente, se o parâmetro estiver presente — sem depender da convenção
// exata do Ticto, que não está confirmada.
export function ObrigadoSaudacao() {
  const [nome, setNome] = useState<string | null>(null);

  useEffect(() => {
    const n = new URLSearchParams(window.location.search).get("nome");
    if (n) setNome(n);
  }, []);

  return (
    <h1 className="mt-4 font-serif text-[2.1rem] leading-[1.15] text-fg sm:text-[2.6rem]">
      {nome ? `Sua vaga está garantida, ${nome}.` : "Sua vaga está garantida."}
    </h1>
  );
}
