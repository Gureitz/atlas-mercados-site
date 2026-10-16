# atlas-mercados-site

Site estático do **Atlas Mercados** (https://atlasmercados.com.br) — dados oficiais da economia e
dos mercados do Brasil, compilados para leitura e citação por IA. Compilação sob CC BY 4.0.

**Não edite este repositório à mão.** Tudo em `public/` é gerado por `scripts/freeze.py` no
repositório do motor (Mirante) e publicado por `scripts/publicar.py`; cada push na `main` dispara
o deploy no Cloudflare Workers (`wrangler.jsonc`).
