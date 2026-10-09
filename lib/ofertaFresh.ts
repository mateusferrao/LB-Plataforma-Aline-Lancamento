// ============================================================================
//  OFERTA DA /fresh — FONTE ÚNICA DOS TEXTOS DA OFERTA
//  Preço, parcela e checkout continuam vindo de lib/lotes.ts (lote ativo). Aqui
//  ficam só os textos que a /fresh (e a /alunas, na garantia) repetem em vários
//  lugares: o bump pré-vendido, a garantia nomeada e a linha da plataforma.
//  Plano e decisões em docs/fresh/README.md ("Decisões de 01/10").
//
//  Regras:
//   - O Protocolo NÃO entra no preço da aula: continua sendo o order bump do
//     checkout (R$29,90). A página só avisa que ele existe, antes do clique.
//   - A garantia tem duas camadas: 7 dias após a compra (como sempre) e, pra
//     quem esteve ao vivo, até 24h depois da aula. Termos iguais em todas as LPs
//     que a usarem e no playbook do agente (docs/agente-ia).
//   - A plataforma é citada sem nome de preço e sem detalhes: a condição é
//     apresentada na sala.
//   - Nenhum nome de medicamento, nenhum número de vagas, nenhum "de/por" além
//     do AULA_VALOR_DE (lib/lotes.ts).
// ============================================================================

import { LIVE_DATE_ISO } from "@/lib/lotes";

export const OFERTA_FRESH = {
  contentName: "Ingresso Por Dentro da Face",
  endsAt: LIVE_DATE_ISO,
} as const;

// Order bump do checkout da aula, pré-vendido na página.
export const BUMP = {
  nome: "Protocolo de Resgate Vascular",
  priceLabel: "R$29,90",
  titulo: "Opcional, no checkout: o Protocolo de Resgate Vascular por R$29,90",
  descricao:
    "O passo a passo de oclusão e necrose que a Aline usa, com prancha de parede, ficha hora a hora e 2 cards pra enviar à paciente. Chega no seu WhatsApp depois do pagamento.",
} as const;

export const GARANTIA = {
  nome: "Garantia de Presença",
  prazoCompraDias: 7,
  prazoPosAulaH: 24,
  // Versão curta, pra cards e FAQ.
  curta:
    "7 dias após a compra, sem perguntas. E se você esteve ao vivo e achou que não valeu, pede até 24h depois da aula e devolvemos.",
  // Uma linha, pra baixo dos botões.
  linha: "Garantia de Presença: 7 dias ou até 24h depois da aula, se você esteve ao vivo",
  whatsapp: "+55 31 93618-4139",
  email: "suporte.filgueirasacademy@gmail.com",
} as const;

export const PLATAFORMA_LINHA =
  "Quem estiver na sala conhece, em primeira mão, a condição especial da Filgueiras Academy.";
