// Prova do PROBLEMA (a dor é coletiva). Entra dentro da seção Problem,
// logo após as dores — Cialdini (prova social) + Voss ("that's right").
//
// ⚠️ CONTEÚDO PROVISÓRIO DE MAQUETE — NÃO PUBLICAR COMO REAL.
// As respostas abaixo são um stand-in de layout para visualizar a seção cheia.
// NÃO são respostas reais de pessoas. Antes de publicar, SUBSTITUIR pelos
// prints/respostas VERDADEIROS da caixinha da Semana 1 (10-16/08). Publicar
// este texto como se fosse depoimento genuíno é publicidade enganosa.
const RESPOSTAS_PROVISORIAS = [
  "Meu maior medo é a intercorrência vascular, fico com a mão tremendo perto do vaso 😣",
  "Estudei anatomia só no atlas, na hora da aplicação dá um branco e a insegurança bate forte",
  "Aplico e depois fico dias com medo de ter pegado o plano errado sem perceber",
];

export function CaixinhaProof() {
  return (
    <div className="mt-12" data-mock="caixinha-provisoria">
      <span className="text-[12px] font-semibold tracking-[0.24em] text-accent uppercase">
        Não é só você
      </span>
      <p className="mt-3 max-w-[560px] text-[1.08rem] leading-[1.5] text-ink-soft">
        Quando a Aline perguntou nos stories, muita gente respondeu a mesma coisa:
      </p>
      <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
        {RESPOSTAS_PROVISORIAS.map((resposta, i) => (
          <div
            key={i}
            className="flex min-h-[104px] flex-col justify-between rounded-[10px] rounded-tl-[2px] border border-line-soft bg-nude/70 px-4 py-4"
          >
            <p className="text-[0.94rem] leading-[1.42] text-ink">{resposta}</p>
            <span className="mt-3 text-[11px] tracking-[0.04em] text-ink-faint uppercase">
              resposta na caixinha
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
