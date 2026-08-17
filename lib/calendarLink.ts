import { LIVE_DATE_ISO } from "@/lib/lotes";

// Duração da aula, mesma copy já usada em Offer.tsx ("Aula ao vivo de ~90 minutos").
const DURACAO_MINUTOS = 90;

function formatUTC(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

// Link do Google Calendar montado a partir de LIVE_DATE_ISO (lib/lotes.ts), pra nunca
// ficar dessincronizado da data real do evento. Não precisa de backend.
export function googleCalendarUrl(): string {
  const start = new Date(LIVE_DATE_ISO);
  const end = new Date(start.getTime() + DURACAO_MINUTOS * 60_000);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Por Dentro da Face · aula ao vivo com Dra. Aline Filgueiras",
    dates: `${formatUTC(start)}/${formatUTC(end)}`,
    details: "Aula ao vivo de anatomia da dissecção aplicada à harmonização facial.",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
