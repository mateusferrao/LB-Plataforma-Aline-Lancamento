# Criativos estáticos · Por Dentro da Face

5 criativos de feed (1080×1350, 4:5) para a aula ao vivo de 06/10, 20h.
Os PNGs finais estão em `png/`. A fonte é `criativos.html`. Para gerar de novo,
rode `node docs/criativos/render.mjs` (precisa do Playwright com Chromium).

| # | Arquivo | Ângulo | Consciência do público |
|---|---------|--------|------------------------|
| 01 | `png/criativo-01.png` | Crença quebrada: atlas, slide e boneco × rosto real | Sabe que tem o problema |
| 02 | `png/criativo-02.png` | Dor da inconsistência: mesma técnica, resultado diferente | Sente o sintoma, não sabe a causa |
| 03 | `png/criativo-03.png` | Medo da intercorrência: o risco a milímetros | Sabe do problema |
| 04 | `png/criativo-04.png` | Prova social com prints reais de alunas | Já conhece a Aline |
| 05 | `png/criativo-05.png` | Oferta: o ingresso (data, preço, sem replay) | Pronta pra decidir |

---

## 1. Material de origem

- **Drive do lançamento:** 4 fotos reais da Aline no laboratório de dissecção nos EUA:
  sala com as mesas, Aline calçando luvas, Aline de braços abertos e Aline de braço
  erguido, sorrindo. Há também um vídeo (`EUA/IMG_2639.MOV`). Ele passa do limite de
  10 MB da integração e não foi usado. As fotos otimizadas estão em `fotos/`.
- **Padrão do lançamento (este repositório):** LP principal e `/lp2`, playbook de
  vendas, FAQ e políticas (`docs/agente-ia/`), design system em `app/globals.css`.
- **Prints de alunas:** os mesmos da LP (`public/images/depoimento-*.jpg`).

## 2. Análise: mercado, nicho, público, dores e desejos

**Público:** biomédicas, dentistas, enfermeiras, farmacêuticas e esteticistas que já
aplicam ou vão aplicar harmonização facial. É um público quase todo feminino, tecnicamente
formado e que já fez pelo menos um curso de técnica.

**Dores, em ordem de intensidade:**
1. **Medo de intercorrência vascular.** "Aplicar a milímetros de estruturas que só vi
   desenhadas." É o medo que trava a mão e tira o sono.
2. **Resultado inconsistente.** "A mesma técnica fica linda numa paciente e sem graça
   na outra, e eu não sei explicar por quê."
3. **Aprendizado raso.** "Estudei em atlas, slide e boneco." A pessoa sabe o protocolo,
   mas não sabe decidir quando o rosto foge dele.

**Desejos:** mão firme, sem hesitar. Ser a profissional que as pacientes indicam pela
segurança. Entender o porquê, em vez de copiar protocolo. Cobrar mais por saber mais.

**Objeções:** "sou iniciante", "não tem gravação", "não dá certificado", "é confiável?".
O playbook já tem resposta pra todas. Nos criativos, a garantia de 7 dias e a autoridade
(dissecção em fresh frozen nos EUA, cursos na Europa) respondem antes da pergunta.

**Diferencial que ninguém copia:** a Aline estudou a face **por dentro**, em peças
fresh frozen, e tem foto disso. A maioria dos cursos de HOF vende técnica e protocolo.
Os criativos vendem a camada que falta: anatomia e resultado.

<!-- PESQUISA -->

## 3. Por que esses criativos não têm cara de IA

1. **Foto real de bastidor, não banco de imagem.** As fotos do laboratório têm luz de
   teto, câmera presa na luminária e mesas de inox. Nenhum banco de imagem tem isso.
   A legenda "Laboratório de dissecção · EUA" funciona como etiqueta de prova.
2. **O mesmo sistema visual da LP.** Preto quente `#0c0b0a`, marsala `#7e1e1c`, creme
   `#f5f1ea`, Fraunces nos títulos, Inter no texto e o **grifo marsala** atrás da
   frase-chave, igual aos H2 da página. Quem clica cai numa página que já parece a mesma
   marca, e isso reduz o estranhamento do clique.
3. **Nada de clichê de IA.** Sem gradiente neon, sem ícone 3D, sem "✨", sem rosto
   gerado, sem mockup de celular flutuando, sem "Descubra o segredo".
4. **Elementos que só fazem sentido pra este produto.** A régua milimetrada (criativo 3)
   transforma "a milímetros da sua agulha" em imagem. O ingresso picotado (criativo 5)
   repete o passo de "emitir ingresso" da `/lp2`. O "Técnica" riscado (criativo 2) vem
   direto da seção "As 3 camadas".
5. **Grão sutil de filme** sobre tudo. O arquivo perde o acabamento "limpo demais" de
   render digital.

## 4. Copy dos criativos (com justificativa e alternativas)

Regras que valem para todos:
- CTA "Quero minha vaga", o mesmo texto do botão da LP. No criativo de oferta, "Garantir
  meu ingresso", que conversa com o ingresso da `/lp2`.
- Só fatos do playbook: R$67, 06/10 às 20h, ~90 min, online, sem gravação, 12x ou Pix,
  garantia de 7 dias, "poucas vagas" sem número, 11+ anos, 1.000+ alunas, 40 mil+.
- Nada de certificado, replay, bônus, número de vagas ou promessa de resultado clínico.
- Nada de antes/depois nem de ganho financeiro, que são sensíveis na política da Meta.
  Por isso o print "faturei R$20.000" ficou de fora.

### Criativo 01 · Atlas, slide e boneco
- **Foto:** Aline de perfil calçando as luvas, com a câmera de transmissão presa na luminária.
- **Headline:** Você estudou em atlas, slide e boneco. *O rosto na sua cadeira não é nenhum dos três.*
- **Apoio:** No dia 6, ao vivo, a Dra. Aline Filgueiras mostra a face por dentro, direto da mesa de dissecção.
- **Rodapé:** Quero minha vaga → · R$67 · online · sem gravação
- **Por quê:** é o H2 do "Ponto cego" da LP principal. Nomeia exatamente como essa
  profissional aprendeu e mostra o limite disso sem culpar ninguém. É a frase que faz
  a pessoa pensar "é isso".
- **Alternativas de headline:**
  - A. "Seu curso te mostrou o desenho. A face tem profundidade." Mais curta, boa pra Stories.
  - B. "Boneco não tem plano. Paciente tem." Mais provocativa, pra teste de gancho.

### Criativo 02 · Mesma técnica, resultado diferente
- **Headline:** Mesma técnica. Mesmo produto. Mesma seringa. *Resultado diferente.*
- **Apoio:** A diferença não está no protocolo. Está no que fica embaixo da pele: o plano
  onde o produto se acomoda em cada rosto.
- **Camadas:** ~~Técnica~~ (você já tem) · Anatomia · Resultado (a Aline mostra)
- **Autoridade:** foto da Aline no laboratório + "temporada em peças fresh frozen nos EUA e
  cursos internacionais de anatomia na Europa".
- **Por quê:** é a dor mais frequente de quem já aplica e é a promessa do H1 da `/lp2`
  ("pare de ter resultado diferente em cada rosto"). A repetição em cinza cria ritmo e o
  grifo entrega a virada. Criativo só de tipografia se destaca no meio de feed cheio de
  rosto e antes/depois.
- **Alternativas de headline:**
  - A. "Ficou lindo nela. Na próxima, não. Por quê?" Pergunta retórica, tom de consultório.
  - B. "Técnica todo curso ensina. Anatomia e resultado, quase nenhum." É o H2 da `/lp2`.

### Criativo 03 · A milímetros da agulha
- **Foto:** a sala de dissecção vazia, em P&B, com régua milimetrada marsala na divisa.
- **Headline:** O risco que o atlas não mostra fica *a milímetros da sua agulha.*
- **Apoio:** Ao vivo, direto da mesa de dissecção: os planos, as estruturas e os limites que
  fazem a sua mão parar de hesitar.
- **Por quê:** o medo de intercorrência vascular é a dor mais forte do nicho. O criativo
  trata o medo com seriedade, sem cena chocante: a sala vazia sugere o que ali se estuda.
  O fechamento em "parar de hesitar" leva ao desejo de segurança, não ao pânico.
- **Alternativas de headline:**
  - A. "Você só viu essa estrutura desenhada. Ela está a milímetros da sua agulha."
  - B. "A intercorrência que ninguém quer viver começa num plano que ninguém te mostrou."

### Criativo 04 · Prova social
- **Headline:** *Quem aprende com a Aline volta pra cadeira diferente.* (H2 da `/lp2`)
- **Prints:** dois reais, sobre HOF e segurança: "nunca tinha feito uma boca tão linda…
  a paciente ficou perfeita" e "saio desse curso… profissionais mais humanos e seguros".
- **Rótulo honesto:** "Prints reais de alunas da Filgueiras Academy". Os depoimentos são
  sobre o ensino da Aline, não sobre esta aula, que ainda não aconteceu.
- **Números:** 11+ anos de clínica · 1.000+ alunas formadas · 40 mil+ na comunidade.
- **Por quê:** print de conversa é o formato de prova que o público confia, porque
  reconhece a interface do próprio celular. Os prints sobre plataforma, espiritualidade e
  copy ficaram de fora porque não falam de harmonização.
- **Uso ideal:** remarketing de quem visitou a LP ou engajou no Instagram.

### Criativo 05 · O ingresso
- **Headline:** Uma noite só. *Sem replay.*
- **Apoio:** A anatomia que só a dissecção revela, aplicada à sua conduta na cadeira.
- **Ingresso:** Por Dentro da Face · 06.10.2026 · 20h (Brasília) · ~90 min · Online ·
  **R$67** · 12x no cartão ou Pix · garantia de 7 dias
- **Urgência (verdadeira):** As inscrições encerram às 20h do dia 6. Poucas vagas na sala ao vivo.
- **CTA:** Garantir meu ingresso →
- **Por quê:** fundo de funil. Responde de uma vez "quando, quanto, como e por que agora".
  A garantia de 7 dias fica colada no preço pra reduzir o risco no momento da decisão.
- **Alternativas de headline:**
  - A. "06/10, 20h. Ao vivo, uma vez só."
  - B. "R$67 pra ver a face por dentro." Preço como gancho, pra público quente.

## 5. Legendas sugeridas (texto principal do anúncio)

**Para 01 e 03 (público frio):**
> Você aprendeu a técnica. Mas o que está a milímetros da sua agulha, você só viu desenhado.
>
> No dia 6/10, às 20h, a Dra. Aline Filgueiras abre a face por dentro, direto da mesa de
> dissecção: os planos, as estruturas e os limites que mudam a conduta na cadeira.
>
> Ao vivo, online, sem gravação. R$67.

**Para 02:**
> Se a mesma técnica fica linda numa paciente e sem graça na outra, o problema não é a
> sua mão. É a camada que ninguém te mostrou.
>
> Aula ao vivo "Por Dentro da Face", 06/10 às 20h, com a Dra. Aline Filgueiras.

**Para 04 e 05 (público quente):**
> Uma noite, ao vivo, sem replay. As inscrições encerram às 20h do dia 6.
> R$67 no Pix ou em até 12x, com 7 dias de garantia.

**Título do anúncio:** Por Dentro da Face · 06/10 às 20h
**Descrição:** Aula ao vivo com a Dra. Aline Filgueiras

## 6. Sugestão de teste

- **Fase 1 (gancho):** 01, 02 e 03 no mesmo conjunto, público frio de profissionais da
  estética. O vencedor é o de menor custo por visita à LP com boa taxa de clique no CTA.
- **Fase 2 (conversão):** 04 e 05 em remarketing (visitou a LP, assistiu a VSL, engajou
  no perfil) nos últimos 7 a 10 dias antes da aula.
- **Últimas 72h:** 05 com a variação "B" de headline e a legenda de encerramento.
- **Não teste junto:** o criativo e a LP ao mesmo tempo (já existe o A/B `/` × `/lp2`).
  Nos anúncios pagos, o `utm_content` já vem de `{{ad.name}}` (ver
  `docs/rastreamento-utm.md`). Basta nomear cada anúncio como `criativo-01`,
  `criativo-02` etc. pra ler o resultado por peça.
