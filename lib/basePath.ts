// next/image com unoptimized:true (export estático) não prefixa o basePath sozinho —
// só os assets internos do _next recebem o prefixo automaticamente. Como o GitHub Pages
// de teste serve o site em /<repo>/, toda imagem em public/ precisa passar por aqui.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${BASE_PATH}${path}`;
}
