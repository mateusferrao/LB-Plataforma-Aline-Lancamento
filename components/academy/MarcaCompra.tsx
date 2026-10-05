"use client";

import { useEffect } from "react";
import { marcarCompra } from "@/lib/funilAcademy";

// Nas páginas de obrigado: quem comprou nunca vê o aviso do downsell.
export function MarcaCompra() {
  useEffect(() => marcarCompra(), []);
  return null;
}
