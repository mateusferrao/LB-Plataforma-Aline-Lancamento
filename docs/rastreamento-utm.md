# Rastreamento com UTM — guia rápido

Como etiquetar os links para saber de onde vem cada visita e cada venda.

## Como funciona (resumo)
1. Você coloca as etiquetas UTM no link da landing que divulga.
2. A pessoa clica e cai na LP com as etiquetas na URL.
3. O código da LP **repassa as etiquetas para o checkout do Ticto** no clique do CTA
   (automático — nada a fazer aqui).
4. No **Ticto → aba Rastreamento** de cada venda você vê a origem; no **GA4**, as origens de tráfego.

> Importante: para **anúncio Meta**, quem atribui a venda ao anúncio é o **pixel + CAPI + `fbclid`**
> (a Meta adiciona o `fbclid` sozinha). O UTM serve para o **GA4/Ticto** e para o **orgânico**.

## Convenção
Base da URL: `https://live.alinefilgueiras.com.br/`

| Parâmetro | O que é | Valores sugeridos |
|---|---|---|
| `utm_source` | de onde vem | `instagram`, `facebook` |
| `utm_medium` | tipo de mídia | orgânico: `bio`, `stories`, `reels`, `post` · pago: `paid_social` |
| `utm_campaign` | a campanha | `live-por-dentro-da-face` |
| `utm_content` | qual criativo/link | `teaser-dissecacao`, `depoimento`, `oferta` (livre) |

Regras: tudo minúsculo, sem espaço nem acento (use hífen). Mantenha os mesmos nomes sempre.

## Links prontos (orgânico — copiar e colar)
- **Bio do Instagram:**
  `https://live.alinefilgueiras.com.br/?utm_source=instagram&utm_medium=bio&utm_campaign=live-por-dentro-da-face`
- **Stories:**
  `https://live.alinefilgueiras.com.br/?utm_source=instagram&utm_medium=stories&utm_campaign=live-por-dentro-da-face&utm_content=teaser`
- **Reels (orgânico):**
  `https://live.alinefilgueiras.com.br/?utm_source=instagram&utm_medium=reels&utm_campaign=live-por-dentro-da-face&utm_content=dissecacao`

(Troque `utm_content` conforme o criativo.)

## Meta Ads (anúncios pagos)
No nível do anúncio, campo **"Parâmetros de URL"**, cole (com dinâmicos):

```
utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}
```

O `fbclid` a Meta adiciona automaticamente. Não precisa duplicar o link — só preencher esse campo.

## Conferir se está funcionando
- Abra um link etiquetado, clique no CTA e veja se a URL do checkout do Ticto carrega com os `utm_*`/`fbclid`.
- Faça uma venda-teste e confira a aba **Rastreamento** dela no Ticto.
