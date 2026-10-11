# Vídeos do Mapa do Envelhecimento · tráfego pago → WhatsApp → Academy

São 3 vídeos (V1, V2, V3), cada um com 2 ganchos (A = Camila, B = abre direto na Aline), ou seja, 6
arquivos 9:16 de 27 a 31s. São anúncios na Meta com clique pro WhatsApp.

**O Mapa é a isca. O que se vende é a Filgueiras Academy** (R$1.797 ou 12x de R$185,85), com o
Mapa incluso. O Mapa avulso por R$597 é downsell e só entra depois de um "não" firme à Academy (o
agente segue a seção 6c de `docs/agente-ia/04-filgueiras-academy.md`). Por isso nenhum vídeo vende
só o álbum. Todos fecham com **"o Mapa é o passo 3 de 5 da Consulta que Vende; os outros 4 estão na
Filgueiras Academy"**, sem preço.

"Mapa do Envelhecimento" é o nome do anúncio para o **Manual do Envelhecimento** (checkout,
agente e a fala da Aline). É o mesmo produto.

## 1. Decisões

| Tema | Decisão |
|---|---|
| Público | Quem **já aplica**. A primeira palavra filtra: "Aplica harmonização?" ou "Injetora?". Sempre "sua paciente", nunca "você está envelhecendo" |
| Linha-mestra | **A paciente decide na 1ª consulta.** A prova é a frase da Aline: "responsável por uma conversão de mais de 98% aqui dentro do meu consultório" |
| DNA do 98% | Os 6 abrem com **98% FECHAM NA 1ª CONSULTA** no topo. A Aline diz o 98% até os 8s em todas as versões |
| Ângulos | **V1** 98% (decide na 1ª consulta) · **V2** "Explica e não convence" (a paciente não entende o que precisa) · **V3** "Cobra menos por medo" (cobrar o valor certo) |
| Voz | A Aline real no miolo (trechos da aula do QR Code). A Camila (IA) só no gancho, na ponte e no CTA. **A IA nunca imita a Aline** |
| Escassez | Só no end card e no texto do anúncio: **"Últimas unidades"** (o Mapa é físico). Sem número e sem data |
| CTA | Mensagem pronta com código por versão: "Quero o Mapa do Envelhecimento (V1A)" e assim por diante |
| Aula do QR Code | Não aparece no vídeo. É argumento do downsell, porque a Consulta que Vende já está na Academy |
| Anos | **12 anos** de consultório (fala da Aline). O site e os docs foram atualizados de "11+" para "12+" |

## 2. Material de origem

| Arquivo | O que é | Uso |
|---|---|---|
| `0dce6385…mp4` (44s, 1080×1920, sem áudio) | B-roll do álbum + Aline com paciente | Metade de cima e telas cheias |
| `247c489a…mov` (19s) | Abertura da aula, com o Mapa fechado | **O 98%** (5,95–10,30s) e os 12 anos (14,62–17,85s). Cortado: "se você está assistindo… você comprou" |
| `8dd12c72…mp4` (38s) | Close nas mãos da Aline explicando no Mapa | Gordura, músculo e osso; "embaixo dessa pele…"; "tudo que interferir…" |
| `5374380e…mp4` (55s) | Bandeja e preenchimento | "só um lábio, 1 ml… 8 a 10 ml" e **"levo com naturalidade… não vou ficar falando que é muito, que é caro"**. O recorte é fechado na Aline, e a bandeja com rótulos fica de fora |
| `d198b924…mp4` (60s) | Passo 5 (orçamento) | **"não entra de cara dando desconto, paciente às vezes nem pede e o aluno dá desconto"** |
| `3d155f09…mp4` (79s) | Toxina e tablet | **Descartado:** tem antes/depois no tablet (a Meta proíbe) e a marca de um produto |
| Fotos DSC04103 e DSC04112 | Capa e rostos 30/45/60 | End card e b-roll do V3 |

As falas, com tempo palavra a palavra, estão em `palavras.json` (transcrição com faster-whisper,
revisada).

Decupagem do b-roll (±0,3s):

| Bloco | Tempo | Plano |
|---|---|---|
| B | 2,0–3,8s | Capa virando e revelando o rosto |
| D | 6,0–12,5s | Acetatos: gordura, depois músculo, depois osso (o melhor plano) |
| F | 15,0–19,5s | Gordura aos 30, 45 e 60 anos |
| H | 21,5–25,5s | Osso aos 45 e 60 anos |
| L | 34,0–35,4s | Pele aos 30, 45 e 60 anos |
| M | 35,5–37,5s | Aline e paciente à mesa |
| N | 37,6–41,4s | Aline mostrando "A pele" pra paciente |

As capas estáticas (0–2s, 26–27,5s e 41,5–44s) foram descartadas.

## 3. Os roteiros

Estrutura comum aos 6:
1. **Gancho, 0–4s.**
2. **Miolo** em tela dividida: b-roll do Mapa em cima (1080×1100) e a Aline embaixo (1080×820), com legenda na emenda.
3. **Ponte, 3,8s:** "O Mapa do Envelhecimento é o passo 3 de 5 da Consulta que Vende. Os outros 4 estão na Filgueiras Academy".
4. **End card, 3,6s:** packshot, "Mapa do Envelhecimento + os 5 passos da Consulta que Vende", selo de últimas unidades e botão desenhado apontando pro "Enviar mensagem".

| Versão | Sequência | Duração |
|---|---|---|
| V1A | Camila + 98% + camadas + "tudo que interferir…" + ponte + final | ~28s |
| V1B | 98% + 12 anos + camadas + "tudo que interferir…" + ponte + final | ~28s |
| V2A | Camila + 98% + "embaixo dessa pele…" + camadas + citação + ponte + final | ~30s |
| V2B | 98% + "embaixo dessa pele…" + camadas + "tudo que interferir…" + citação + ponte + final | ~31s |
| V3A | Camila + 98% + ml + "levo com naturalidade…" + "não entra dando desconto…" + ponte + final | ~31s |
| V3B | 98% + ml + "levo com naturalidade…" + "não entra dando desconto…" + ponte + final | ~27s |

O texto do cabeçalho tem três camadas:
- **Filtro** em cima: PRA QUEM APLICA HARMONIZAÇÃO.
- **Principal:** 98% FECHAM NA 1ª CONSULTA.
- **Subtítulo do ângulo:** COM O MAPA DO ENVELHECIMENTO, ELA NÃO ENTENDE O QUE PRECISA (V2A), ELA ENTENDE NA HORA (V2B) ou COBRAR O VALOR CERTO (V3).

Depois do gancho, o cabeçalho vira um selo pequeno no topo até a ponte.

Rótulos grandes entram na hora da fala (GORDURA, MÚSCULO, OSSO, 30/45/60 ANOS, 1 ML · LÁBIO, COM NATURALIDADE, SEM DESCONTO DE CARA…), com um "pop" a cada rótulo.

**Card de citação (V2):** "As pessoas só compram quando elas entendem que elas precisam." Dra. Aline Filgueiras (frase da aula).

**V3:** o desejo é cobrar o valor certo, com a paciente entendendo o que paga. Não há número de faturamento, nem "fature mais", nem "venda mais ml".

## 4. Etapa 2 · Falas da Camila no Google Flow

Use `docs/criativos/video-ugc/avatar/camila-fundo-verde.jpg` como ingrediente, pra manter a mesma pessoa.
- **Uma fala por geração**, de até 8s, em 9:16 e com **fundo verde liso `#00B140`**.
- Gere 3 ou 4 tomadas de cada fala e escolha as de timbre mais parecido entre si.
- Valem as regras do `video-ugc/README.md`: jaleco liso, sem crachá, sem nome, sem registro. Ela fala da Aline em 3ª pessoa e nunca dá depoimento.

Modelo de prompt:

> Vertical 9:16 smartphone selfie video of the woman in the reference image (32, Brazilian, plain
> fitted white lab coat, black top, low ponytail) on flat chroma green #00B140, chest-up, eyes on
> lens. She raises her eyebrows and says in Brazilian Portuguese, fast and confident, like telling a
> colleague: "<FALA>". Then she turns her head ~20° and points with her thumb over her shoulder. Soft
> window light, natural skin texture, slight handheld motion. No text, no logos, no music, no name tag.

| Arquivo | Fala | Observação |
|---|---|---|
| `gancho-v1.mp4` | "Aplica harmonização? Mais de 98% das pacientes dela fecham na consulta." | Aponta no fim |
| `gancho-v2.mp4` | "Injetora? Você explica, explica, e a paciente continua sem entender?" | Pausa curta e só depois aponta |
| `gancho-v3.mp4` | "Injetora? Você cobra menos do que vale com medo da paciente achar caro?" | Aponta no fim |
| `ponte.mp4` | "Esse é o Mapa do Envelhecimento, o passo 3 da Consulta que Vende. Os outros 4 estão na Filgueiras Academy." | Olhando pra lente, sem apontar. Só o áudio entra (em off) |
| `cta.mp4` | "Toca em enviar mensagem e fala com a equipe da Aline." | Só o áudio entra (em off) |

Confira a pronúncia de "Filgueiras". Se sair errado, escreva no prompt como se fala: "Fiu-guêi-ras".

Com os 5 clipes prontos, preencha `"camila"` no `fontes.json` e rode o script de novo:
- **Nas versões A,** o gancho passa a ser a Camila sobre o quadro pausado.
- **Nas 6 versões,** a voz dela entra na ponte e no CTA.

## 5. Como montar

```
python3 docs/criativos/video-mapa/montar_mapa.py --fontes fontes.json --video todos --saida saida/
```

- **Dependências:** ffmpeg e Pillow. As fontes da marca (Inter e Fraunces) saem de `app/fonts/`. O script gera as TTF na primeira execução, se `fontes_dir` não existir. Isso precisa de `pip install fonttools brotli`.
- **`fontes.json`:** veja `fontes.exemplo.json`. Ele aponta para os vídeos, as fotos, a trilha e os efeitos.
- **Trilha:** "Hazy After Hours" (Mixkit, a partir de 28s), com ducking por baixo da voz.
- **Efeitos:** "Page turn single", "Hard pop click" e "Air woosh", todos da Mixkit.
- **Licença:** a [Mixkit Free License](https://mixkit.co/license/) libera uso em anúncios online, mas não em TV nem rádio.
- **Saída:** 1080×1920, 30fps, H.264 CRF 18, AAC 192k. A voz é normalizada em −14 LUFS.
- **Os vídeos não vão pro git, porque são pesados.** Eles ficam na pasta de saída e são enviados à equipe.

## 6. Anúncio

| Versão | Nome do anúncio | Mensagem pronta |
|---|---|---|
| V1A / V1B | `mapa-v1a` / `mapa-v1b` | Quero o Mapa do Envelhecimento (V1A) / (V1B) |
| V2A / V2B | `mapa-v2a` / `mapa-v2b` | Quero o Mapa do Envelhecimento (V2A) / (V2B) |
| V3A / V3B | `mapa-v3a` / `mapa-v3b` | Quero o Mapa do Envelhecimento (V3A) / (V3B) |

**Texto principal (base):**

> Aplica harmonização? O Mapa do Envelhecimento é o álbum que a Dra. Aline Filgueiras usa na consulta
> pra paciente entender, no próprio rosto, o que precisa tratar. No consultório dela, mais de 98%
> fecham. Ele é o passo 3 da Consulta que Vende, o método da Filgueiras Academy, e vai junto com
> ela. Últimas unidades do Mapa.

- **Título:** O álbum que a Dra. Aline usa na consulta.
- **Botão:** Enviar mensagem.

## 7. Teste e leitura

- **Montagem do teste:** as 6 versões no mesmo conjunto de público frio de profissionais.
  - Dentro de cada vídeo, A × B mostra se a Camila na frente ainda ganha.
  - Entre os vídeos, a comparação mostra qual dor (fechar, explicar ou cobrar) puxa mais conversa que vira venda.
- **O que olhar, nesta ordem:**
  1. **Taxa de gancho** (views de 3s ÷ impressões), com meta acima de 25–30%.
  2. **Retenção até os 10s.**
  3. **Custo por conversa.**
  4. **Taxa de conversa que vira venda da Academy, por código** (V1A…V3B). Esse é o número que decide, não o CTR.
- **Se o V3 reter menos,** o primeiro trecho a cortar é a fala dos ml (cerca de 5,5s).

## 8. Checagem antes de subir

- [ ] Nenhum quadro com antes/depois, rótulo de marca legível, valor em reais ou promessa de resultado.
- [ ] Assistido sem som: o gancho, o "passo 3 de 5" e o CTA ficam claros só pelo texto.
- [ ] Prévia de Reels e Stories na Meta: nada importante nos 250px de cima nem nos 330px de baixo.
- [ ] Teste da paciente: quem não aplica não se sente chamada nos 3 primeiros segundos.
- [ ] A versão 4:5 pro feed fica pra depois da etapa 2, só para a versão vencedora de cada vídeo.
