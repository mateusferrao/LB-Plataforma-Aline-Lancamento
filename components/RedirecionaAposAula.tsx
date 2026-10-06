import { LIVE_DATE_ISO } from "@/lib/lotes";
import { BASE_PATH } from "@/lib/basePath";

// Depois da aula (06/10, 20h) as páginas de venda do ingresso não têm mais o que
// vender: os botões bloqueiam. Quem cai nelas (anúncio antigo, link salvo, busca)
// vai para a Filgueiras Academy, com os mesmos parâmetros (UTMs, fbclid). Script
// inline no começo do <body> para redirecionar antes de pintar a página antiga.
// ?preview=<ISO> funciona como no resto do site (lib/lotes.ts → agora()).
const PAGINAS_DA_AULA = String.raw`^/(sem-vsl|fresh|fresh/sem-vsl|lp2|lp2/sem-vsl|alunas)?(\.html)?/?$`;

const script = `(function(){try{
var base=${JSON.stringify(BASE_PATH)};
var p=location.pathname;
if(base&&p.indexOf(base)===0)p=p.slice(base.length)||"/";
if(!new RegExp(${JSON.stringify(PAGINAS_DA_AULA)}).test(p))return;
var pv=new URLSearchParams(location.search).get("preview");
var t=pv?Date.parse(pv):Date.now();
if(!(t>=${Date.parse(LIVE_DATE_ISO)}))return;
location.replace(base+"/academy"+location.search+location.hash);
}catch(e){}})();`;

export function RedirecionaAposAula() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
