"use client";

import { useEffect } from "react";
import { captureParams } from "@/lib/tracking";

// Captura os parâmetros de rastreamento (UTM/fbclid/...) da URL de entrada na carga,
// pra serem repassados ao checkout do Ticto no clique do CTA. Renderiza nada.
export function TrackingParams() {
  useEffect(() => {
    captureParams();
  }, []);
  return null;
}
