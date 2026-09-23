# Criativos estáticos · Por Dentro da Face

5 criativos de feed (1080×1350, 4:5) para a aula ao vivo de 06/10, 20h.
Os PNGs finais estão em `png/`. A fonte é `criativos.html`. Para gerar de novo,
rode `node docs/criativos/render.mjs` (precisa do Playwright com Chromium).

**Regra de copy de todas as peças:** a aluna não compra anatomia. Ela compra **resultado
melhor e segurança pra aplicar**. A headline sempre fala do desejo: mão firme, resultado
bonito em cada rosto, calma perto das áreas de risco, paciente que volta e indica.
Anatomia e dissecção nunca aparecem como o que ela está comprando. Aparecem só como
prova de por que a Aline consegue entregar isso (legenda da foto, linha de autoridade).

| # | Arquivo | Desejo que a peça vende | Público |
|---|---------|-------------------------|---------|
| 01 | `png/criativo-01.png` | Mão firme pra aplicar sem medo | Frio |
| 02 | `png/criativo-02.png` | Resultado bonito e previsível em cada rosto | Frio |
| 03 | `png/criativo-03.png` | Calma perto das áreas de risco | Frio |
| 04 | `png/criativo-04.png` | Mais segurança na mão, mais resultado na paciente (prova) | Morno/quente |
| 05 | `png/criativo-05.png` | Uma noite pra aplicar com outra segurança (oferta) | Quente |

---

## 1. Material de origem

- **Drive do lançamento:** 4 fotos reais da Aline no laboratório de dissecção nos EUA:
  sala com as mesas, Aline calçando luvas, Aline de braços abertos e Aline de braço
  erguido, sorrindo. Há também um vídeo (`EUA/IMG_2639.MOV`). Ele passa do limite de
  10 MB da integração e não foi usado. As fotos otimizadas estão em `fotos/`.
- **Padrão do lançamento (este repositório):** LP principal e `/lp2`, playbook de
  vendas, FAQ e políticas (`docs/agente-ia/`), design system em `app/globals.css`.
- **Prints de alunas:** os mesmos da LP (`public/images/depoimento-*.jpg`).
- **Pesquisa de mercado feita em 23/09/2026.** O proxy bloqueou a leitura direta de
  vários sites, então alguns números vêm do trecho que a busca devolveu. **Abra a fonte
  e confira antes de usar qualquer número em peça.** Nenhum número externo foi usado
  nos 5 criativos.

## 2. Análise

### Mercado
- Pelo ISAPS Global Survey 2024, o Brasil é o **2º país do mundo em procedimentos não
  cirúrgicos**. Toxina botulínica somou 351.488 procedimentos e ácido hialurônico 176.069.
  ([ISAPS 2024, PT-BR](https://www.isaps.org/media/3uhnjvup/2024-global-survey-portuguese-brazilian.pdf))
- Os especialistas em HOF registrados no CFO passaram de 908 (2021) para **4.012 (2024)**,
  +50% em 12 meses. ([CRO-DF](https://cro-df.org.br/quantidade-de-cirurgioes-dentistas-especialistas-em-harmonizacao-orofacial-cresceu-50-em-2024/))
- **Leitura:** o mercado cresce rápido e fica saturado. Tem muita gente nova saindo de
  curso de técnica, e a disputa passa a ser por **resultado e segurança**. Quem entrega
  resultado previsível e não tem intercorrência é indicada, e quem não entrega cai na
  guerra de preço.

### Contexto que muda o tom (2025-2026)
- **19/08/2026:** o TRF1 anulou a resolução do CFO que reconhece a HOF como especialidade
  odontológica. O CFO vai recorrer e diz que, por ora, nada muda.
  ([Migalhas](https://www.migalhas.com.br/quentes/462893/trf-1-anula-norma-que-autorizava-harmonizacao-facial-por-dentistas) ·
  [CFO](https://website.cfo.org.br/cfo-esclarece-decisao-judicial-sobre-a-harmonizacao-orofacial/))
  Houve decisões na mesma linha sobre biomédicas (CFBM) e farmacêuticas (CFF). A
  enfermagem estética foi mantida.
- **Mar/2026:** a ANVISA alertou para o uso de preenchedores fora da bula, com relatos de
  perda visual. ([ANVISA](https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/anvisa-recomenda-preenchedores-dermicos-somente-dentro-das-indicacoes-aprovadas))
- **Consequência pros criativos:** o público está pressionado e sensível. Nenhuma peça
  fala de habilitação, conselho ou do que cada profissão "pode" fazer. O tom é de
  segurança e competência, nunca de pânico.

### Intercorrência: o medo tem base real
- **511 casos de cegueira por preenchedor** publicados até mar/2023, contra 146 até 2018.
  ([Aesthetic Surgery Journal, 2024](https://academic.oup.com/asj/article/44/10/1091/7649223))
- O evento é raro, mas grave, e se concentra em regiões conhecidas (nariz, glabela,
  fronte, sulco nasogeniano). ([PubMed](https://pubmed.ncbi.nlm.nih.gov/30805636/))
- **Leitura:** o medo é legítimo, e por isso o desejo é tão forte: "aplicar com calma
  perto das áreas de risco". O criativo 03 vende essa calma, não o susto.

### Público
Biomédicas, dentistas, enfermeiras, farmacêuticas e esteticistas que já aplicam ou vão
aplicar harmonização facial. Quase todas mulheres, com formação técnica e pelo menos um
curso de protocolo no currículo.

### Dores (o ponto de partida)
1. **Travar com a agulha na mão.** Páginas do setor falam em "parar de travar na frente
   do paciente" e em "dúvida, insegurança e medo de intercorrência".
   ([Nepuga](https://nepuga.edu.br/curso-harmonizacao-facial-sao-paulo/))
2. **Resultado que não se repete.** "Ficou lindo numa paciente e sem graça na outra."
3. **Evitar regiões por medo.** Há profissionais que "evitam regiões por medo" em vez de
   injetar a face toda com tranquilidade.
   ([blog do setor](https://drthiagoperfeito.com.br/cursos/blog/mapa-zonas-risco-vascular-face/))
4. **Guerra de preço.** Quem não se diferencia "vende seringa avulsa".
   ([Instituto Velasco](https://institutovelasco.com.br/cobrar-tratamentos-harmonizacao-facial/))

### Desejos (o que os criativos vendem)
- **Mão firme:** aplicar sem hesitar.
- **Resultado bonito e previsível** em cada rosto.
- **Calma perto das áreas de risco:** saber até onde ir.
- **Paciente que volta e indica:** ser conhecida pela segurança.
- **Valorização:** cobrar mais por entregar mais.

### Objeções
"Sou iniciante", "não tem gravação", "não dá certificado", "é confiável?". O playbook já
responde todas. Nos criativos, a garantia de 7 dias fica colada no preço e a autoridade
aparece como prova.

### Concorrência e diferencial
- Cursos presenciais em peças fresh frozen custam de **R$6.600 a R$8.600**, fora a viagem.
  ([Faculdade CTA](https://www.faculdadecta.edu.br/anatomia-da-face-com-enfase-em-harmonizacao-facial-fresh-frozen-specimen/) ·
  [Rãmaga](https://www.ramagaproestetica.com.br/produto/curso-harmonizacao-facial-em-cadaver-fresh-frozen-sao-paulo-data-extra-24-25-e-26-08-26/))
- Esses cursos anunciam **o meio**: "zonas de perigo", "planos anatômicos", "hands-on em
  cadáver", "certificado internacional". Todo mundo fala de anatomia e quase ninguém fala
  do que a aluna quer sentir na cadeira. **Os nossos criativos vão pelo outro lado:
  falam do resultado e da segurança.** Isso diferencia a mensagem, além do preço.
- Clichês que evitamos: "zonas de perigo", "transforme sua prática", foto de cadáver,
  tom de choque.

## 3. Por que esses criativos não têm cara de IA

1. **Foto real de bastidor, não banco de imagem.** As fotos do laboratório têm luz de
   teto, câmera presa na luminária e mesas de inox. A legenda "Laboratório de dissecção
   · EUA" funciona como etiqueta de prova. Uma pesquisa da Gartner (out/2025) aponta
   que 50% dos consumidores preferem marcas que não usam IA generativa em anúncios.
   ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-03-16-gartner-marketing-survey-finds-50-percent-of-consumers-prefer-brands-that-avoid-using-genai-in-consumer-facing-content0))
2. **O mesmo sistema visual da LP.** Preto quente `#0c0b0a`, marsala `#7e1e1c`, creme
   `#f5f1ea`, Fraunces nos títulos, Inter no texto e o **grifo marsala** atrás da
   frase-chave, igual aos H2 da página. Quem clica cai numa página que já parece a mesma
   marca.
3. **Nada de clichê de IA.** Sem gradiente neon, sem ícone 3D, sem "✨", sem rosto gerado
   e sem antes/depois, que a Meta proíbe para toxina e preenchedor.
   ([Meta](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness/))
4. **Elementos que só fazem sentido pra este produto.** A régua milimetrada (03)
   transforma "saber até onde ir" em imagem. O ingresso picotado (05) repete o passo de
   "emitir ingresso" da `/lp2`.
5. **Grão sutil de filme** sobre tudo. O arquivo perde o acabamento "limpo demais" de
   render digital.

## 4. Copy dos criativos (com justificativa e alternativas)

Regras que valem para todos:
- A headline fala do **desejo**. A anatomia e a dissecção só entram como prova.
- CTA "Quero minha vaga", o mesmo texto do botão da LP. No criativo de oferta, "Garantir
  meu ingresso", que conversa com o ingresso da `/lp2`.
- Só fatos do playbook: R$67, 06/10 às 20h, ~90 min, online, sem gravação, 12x ou Pix,
  garantia de 7 dias, "poucas vagas" sem número, 11+ anos, 1.000+ alunas, 40 mil+.
- Nada de certificado, replay, bônus, número de vagas ou garantia de resultado clínico.
  O desejo aparece como aspiração ("pra quem quer"), não como promessa de tratamento.
- Nada de antes/depois nem de ganho financeiro. Por isso o print "faturei R$20.000"
  ficou de fora.

### Criativo 01 · Mão firme
- **Foto:** Aline de perfil calçando as luvas, com a câmera de transmissão presa na luminária.
- **Headline:** Você já sabe a técnica. *Agora falta a mão firme pra aplicar sem medo.*
- **Apoio:** No dia 6, ao vivo, a Dra. Aline Filgueiras te mostra o que muda a sua
  segurança na cadeira. Você leva isso pro consultório já na semana seguinte.
- **Rodapé:** Quero minha vaga → · R$67 · online · sem gravação
- **Por quê:** começa validando o que ela já tem (a técnica) e aponta o que falta, que é
  exatamente o que ela quer: aplicar sem medo. "Na semana seguinte" deixa o resultado
  próximo e concreto (é a mesma fala do playbook).
- **Alternativas:**
  - A. "Imagine chegar na área de risco e a sua mão não hesitar."
  - B. "A segurança que falta na sua mão não vem de mais um protocolo."

### Criativo 02 · Resultado em cada rosto
- **Headline:** Ficou lindo nela. Na próxima, nem tanto. E você não sabe por quê.
  *Pare de ter resultado diferente em cada rosto.*
- **Apoio:** Na aula ao vivo, a Dra. Aline mostra por que cada rosto responde de um jeito,
  pra você aplicar sabendo o resultado que vai entregar.
- **Pra quem quer:** resultado bonito em cada rosto · mão firme, sem hesitar · paciente
  que volta e indica
- **Autoridade:** foto da Aline no laboratório + "11+ anos de clínica e mais de 1.000
  alunas formadas".
- **Por quê:** as três linhas em cinza descrevem a frustração com as palavras dela, e o
  grifo entrega o desejo (é o H1 da `/lp2`). Os cards eram "Técnica/Anatomia/Resultado",
  ou seja, o meio. Agora listam os três resultados que ela quer.
- **Alternativas:**
  - A. "O mesmo cuidado. O mesmo produto. Resultado bonito em todo rosto."
  - B. "Aplique sabendo, antes da agulha, o resultado que vai entregar."

### Criativo 03 · Calma perto do risco
- **Foto:** a sala de dissecção vazia, em P&B, com régua milimetrada marsala na divisa.
- **Headline:** Aplique perto das áreas de risco *com a calma de quem sabe até onde ir.*
- **Apoio:** Dia 6/10, ao vivo: a Dra. Aline mostra os limites que fazem o medo de
  intercorrência dar lugar à segurança na cadeira.
- **Por quê:** a versão anterior ("o risco fica a milímetros da sua agulha") vendia o
  medo. Esta vende o estado que ela quer alcançar: calma. A régua deixa de ser ameaça e
  passa a representar controle: "eu sei até onde ir".
- **Alternativas:**
  - A. "Chega de evitar regiões por medo."
  - B. "Durma tranquila depois de cada aplicação." (tom mais emocional)

### Criativo 04 · Prova social
- **Headline:** Mais segurança na mão. *Mais resultado na paciente.*
- **Prints:** dois reais, sobre HOF e segurança: "nunca tinha feito uma boca tão linda…
  a paciente ficou perfeita" e "saio desse curso… profissionais mais humanos e seguros".
  A headline resume exatamente o que os dois prints dizem.
- **Rótulo honesto:** "Prints reais de alunas da Filgueiras Academy". Os depoimentos são
  sobre o ensino da Aline, não sobre esta aula, que ainda não aconteceu.
- **Números:** 11+ anos de clínica · 1.000+ alunas formadas · 40 mil+ na comunidade.
- **Uso ideal:** remarketing de quem visitou a LP ou engajou no Instagram.
- **Alternativas:**
  - A. "Elas voltaram pra cadeira mais seguras."
  - B. "A paciente ficou perfeita." (citação do print como headline)

### Criativo 05 · O ingresso
- **Headline:** Uma noite pra aplicar *com outra segurança.*
- **Apoio:** Você sai com a mão mais firme e resultados mais previsíveis em cada rosto.
- **Ingresso:** Por Dentro da Face · pra aplicar harmonização facial com mais segurança e
  resultado · 06.10.2026 · 20h (Brasília) · ~90 min · Online · **R$67** · 12x no cartão ou
  Pix · garantia de 7 dias
- **Urgência (verdadeira):** Ao vivo, uma vez só, sem replay. Inscrições encerram às 20h
  do dia 6. Poucas vagas.
- **CTA:** Garantir meu ingresso →
- **Por quê:** fundo de funil. O desejo vem primeiro e a urgência depois, pra ela decidir
  pelo que ganha, não só pelo medo de perder.
- **Alternativas:**
  - A. "R$67 pra aplicar com outra segurança." Preço como gancho, pra público quente.
  - B. "06/10, 20h. A noite em que a sua mão fica mais firme."

## 5. Legendas sugeridas (texto principal do anúncio)

**Para 01 e 03 (público frio):**
> Você já sabe a técnica. O que falta é chegar perto das áreas de risco com a mão firme,
> sem aquele frio na barriga.
>
> No dia 6/10, às 20h, a Dra. Aline Filgueiras mostra ao vivo o que muda a sua segurança
> na cadeira. Você leva isso pro consultório na semana seguinte.
>
> Ao vivo, online, sem gravação. R$67.

**Para 02:**
> Se a mesma técnica fica linda numa paciente e sem graça na outra, o problema não é a
> sua mão. É o que ninguém te mostrou sobre cada rosto.
>
> Aula ao vivo "Por Dentro da Face", 06/10 às 20h, com a Dra. Aline Filgueiras. Pra você
> aplicar sabendo o resultado que vai entregar.

**Para 04 e 05 (público quente):**
> Uma noite pra aplicar com outra segurança. Ao vivo, sem replay: as inscrições encerram
> às 20h do dia 6. R$67 no Pix ou em até 12x, com 7 dias de garantia.

**Título do anúncio:** Aplique com mais segurança · 06/10 às 20h
**Descrição:** Aula ao vivo com a Dra. Aline Filgueiras

## 6. Sugestão de teste

- **Fase 1 (gancho):** 01, 02 e 03 no mesmo conjunto, público frio de profissionais da
  estética. Cada peça testa um desejo diferente (mão firme × resultado × calma). O desejo
  vencedor vira a linha principal das próximas peças e da VSL.
- **Fase 2 (conversão):** 04 e 05 em remarketing (visitou a LP, assistiu a VSL, engajou
  no perfil) nos últimos 7 a 10 dias antes da aula.
- **Últimas 72h:** 05 com a alternativa A de headline e a legenda de encerramento.
- **Não teste junto** o criativo e a LP (já existe o A/B `/` × `/lp2`).
  Nos anúncios pagos, o `utm_content` já vem de `{{ad.name}}` (ver
  `docs/rastreamento-utm.md`). Basta nomear cada anúncio como `criativo-01`,
  `criativo-02` etc. pra ler o resultado por peça.
- **Próximo passo sugerido:** juntar à mão comentários reais em posts de grandes perfis de
  HOF (a pesquisa não achou fala espontânea do público em fóruns) pra afinar a linguagem.
