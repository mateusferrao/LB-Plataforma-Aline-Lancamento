// Marcas no localStorage pra oferecer o downsell (só a anatomia) a quem foi ao
// checkout da Academy e voltou sem comprar. Só no navegador da própria pessoa;
// nada sai daqui. Tudo em try/catch: modo anônimo ou bloqueio de storage
// simplesmente desliga o aviso.
const CLIQUE = "fa_checkout_academy";
const COMPROU = "fa_comprou";
const FECHOU = "fa_downsell_fechado";

function ler(k: string) {
  try {
    return window.localStorage.getItem(k);
  } catch {
    return null;
  }
}
function gravar(k: string, v: string) {
  try {
    window.localStorage.setItem(k, v);
  } catch {
    // sem storage, sem aviso
  }
}

export function marcarCliqueCheckout() {
  gravar(CLIQUE, String(Date.now()));
}
export function marcarCompra() {
  gravar(COMPROU, "1");
}
export function fecharDownsell() {
  gravar(FECHOU, "1");
}

// Mostra o aviso se a pessoa clicou no checkout da Academy há pelo menos
// `minutos`, não comprou e não fechou o aviso antes.
export function deveOferecerDownsell(minutos = 20) {
  if (ler(COMPROU) || ler(FECHOU)) return false;
  const t = Number(ler(CLIQUE));
  return Boolean(t) && Date.now() - t >= minutos * 60_000;
}
