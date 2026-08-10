import type { NextConfig } from "next";

// GitHub Pages serve projetos em /<repo>/, não na raiz. GITHUB_PAGES só é setado pelo
// workflow de deploy de teste (.github/workflows/deploy-gh-pages.yml) — no build de produção
// real (Hostinger/Vercel, domínio próprio) a página continua servindo a partir da raiz.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "LB-Plataforma-Aline-Lancamento";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
};

export default nextConfig;
