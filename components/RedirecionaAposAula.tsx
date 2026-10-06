import { LIVE_DATE_ISO } from "@/lib/lotes";
import { BASE_PATH } from "@/lib/basePath";
import { SALA } from "@/lib/ofertaAcademy";

// Depois da aula (06/10, 20h) as páginas de venda do ingresso não têm mais o que
// vender: os botões bloqueiam. Quem cai nelas (anúncio antigo, link salvo, busca)
// vai para a Filgueiras Academy, com os mesmos parâmetros (UTMs, fbclid) e
// `de=aula`, que abre na /academy a faixa explicando que a aula já aconteceu.
// Depois do fim dos bônus da sala (06/10, 23h59), a /academy/sala vira a
// /academy: a mesma página, sem a ponte. Script inline no começo do <body> para
// redirecionar antes de pintar a página antiga. ?preview=<ISO> funciona como no
// resto do site (lib/lotes.ts → agora()).
const PAGINAS_DA_AULA = String.raw`^/(sem-vsl|fresh|fresh/sem-vsl|lp2|lp2/sem-vsl|alunas)?(\.html)?/?$`;
const PAGINA_DA_SALA = String.raw`^/academy/sala(\.html)?/?$`;

const script = `(function(){try{
var base=${JSON.stringify(BASE_PATH)};
var p=location.pathname;
if(base&&p.indexOf(base)===0)p=p.slice(base.length)||"/";
var aula=new RegExp(${JSON.stringify(PAGINAS_DA_AULA)}).test(p);
var sala=new RegExp(${JSON.stringify(PAGINA_DA_SALA)}).test(p);
if(!aula&&!sala)return;
var q=new URLSearchParams(location.search);
var pv=q.get("preview");
var t=pv?Date.parse(pv):Date.now();
if(!(t>=(aula?${Date.parse(LIVE_DATE_ISO)}:${Date.parse(SALA.endsAt) + 1000})))return;
if(aula)q.set("de","aula");
var s=q.toString();
location.replace(base+"/academy"+(s?"?"+s:"")+location.hash);
}catch(e){}})();`;

export function RedirecionaAposAula() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
