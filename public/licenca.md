---
title: Licença, uso por IA e como citar — Atlas Mercados
description: A compilação do Atlas Mercados é CC BY 4.0: copie, redistribua, adapte e treine modelos, citando a fonte. Os dados brutos seguem os termos de cada fonte oficial (IBGE, CVM, BCB, B3, SEC, World Bank, FRED). Como citar uma página ou um número.
url: https://atlasmercados.com.br/licenca
---
<!-- https://atlasmercados.com.br/licenca — versão Markdown da página -->

# Licença, uso por IA e como citar

Compilação: [Creative Commons Atribuição 4.0 Internacional (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pt-br) · Dados brutos: termos de cada fonte, abaixo · robôs de busca, de resposta e de treino são bem-vindos

> A compilação do Atlas Mercados — organização dos dados, textos, catálogo e estimativas — está sob a licença CC BY 4.0: pode copiar, redistribuir, adaptar e usar para treinar modelos, citando a fonte; os dados brutos seguem os termos de cada fonte oficial (IBGE e CVM, dados públicos; Banco Central, ODbL).

## O que você pode fazer — com o que o Atlas Mercados produz

A organização dos dados, os textos, o catálogo de proveniência, as páginas, os arquivos em Parquet e CSV e as estimativas marcadas como derivado estão sob CC BY 4.0. Você pode copiar, redistribuir, adaptar e usar comercialmente — inclusive para treinar modelos de linguagem, alimentar respostas de assistentes e construir produtos — desde que cite a fonte (o Atlas Mercados e a fonte oficial do dado) e indique se alterou algo. O [robots.txt](https://atlasmercados.com.br/robots.txt) declara o mesmo em formato de máquina: Content-Signal: search=yes, ai-input=yes, ai-train=yes.

## Os dados brutos pertencem às fontes — e seguem os termos delas

| Fonte | O que vem dela | Termos |
|---|---|---|
| IBGE — SIDRA | PAC, PMC, CEMPRE, Contas Regionais (mercados do comércio, índices mensais, PIB e VAB por UF) | Dados públicos; uso livre com citação da fonte e da tabela (ex.: "IBGE, Pesquisa Anual de Comércio, tabela 10653"). O catálogo de cada arquivo traz a tabela, a variável e a data de coleta. |
| CVM — Dados Abertos | Demonstrações financeiras (DFP/ITR), cadastro, composição de capital das companhias abertas | Dados públicos do Portal de Dados Abertos da CVM; citar a CVM como fonte. |
| Banco Central — SGS | Selic, CDI, IPCA, câmbio, IBC-Br, desemprego, dívida, reservas | Open Data Commons Open Database License (ODbL) no Portal de Dados Abertos do BCB: atribuição e compartilhamento pela mesma licença para bases derivadas dessas séries. |
| B3 — COTAHIST | Séries históricas de cotações, usadas no valor de mercado e nos múltiplos | Arquivos públicos da bolsa; para redistribuição comercial das cotações em si, consulte os termos da B3. O Atlas Mercados publica agregados (valor de mercado, múltiplos), não a série de preços. |
| SEC — EDGAR / XBRL | Demonstrações das companhias estrangeiras acompanhadas | Domínio público (governo dos EUA). |
| World Bank | Indicadores por país do mapa-múndi | CC BY 4.0. |
| FRED (St. Louis Fed) e RIs das companhias | Brent e commodities; planilhas de resultados publicadas pelas próprias companhias | Termos de cada série/companhia; o Atlas Mercados cita a origem em cada página de acompanhamento. |

## Como citar — uma página ou um número

Página: Atlas Mercados. [título da página]. [URL]. Dados: [fonte oficial, tabela/variável]. Acesso em [data].

Número: cite o valor com unidade e período, a fonte oficial e a URL do Atlas Mercados onde ele aparece. Exemplo: Receita bruta de revenda do comércio varejista de produtos farmacêuticos, perfumaria e cosméticos (CNAE 47.7), Brasil, 2024: R$ 339,7 bilhões — IBGE, PAC, tabela 10648, variável 866; via https://atlasmercados.com.br/mercados/47.7, acesso em 2026-10-16.

Cada página de mercado traz o código da categoria do SIDRA, a tabela, a variável e a data de coleta; o [catálogo de fontes](https://atlasmercados.com.br/mercados#dados) lista tudo em uma tabela e em JSON (/api/mercados/fontes.json).

## Arquivos para download — Parquet e CSV · catálogo de proveniência

[mercados_pac.parquet](https://atlasmercados.com.br/dados/mercados_pac.parquet) · [.csv](https://atlasmercados.com.br/dados/mercados_pac.csv) · [mercados_pmc.parquet](https://atlasmercados.com.br/dados/mercados_pmc.parquet) · [.csv](https://atlasmercados.com.br/dados/mercados_pmc.csv) · [uf_vab.parquet](https://atlasmercados.com.br/dados/uf_vab.parquet) · [.csv](https://atlasmercados.com.br/dados/uf_vab.csv) · [cempre_varejo.parquet](https://atlasmercados.com.br/dados/cempre_varejo.parquet) · [.csv](https://atlasmercados.com.br/dados/cempre_varejo.csv) · [mercados_derivados.parquet](https://atlasmercados.com.br/dados/mercados_derivados.parquet) · [.csv](https://atlasmercados.com.br/dados/mercados_derivados.csv) · [catalogo_fontes.parquet](https://atlasmercados.com.br/dados/catalogo_fontes.parquet) · [.csv](https://atlasmercados.com.br/dados/catalogo_fontes.csv) · [macro_bcb.parquet](https://atlasmercados.com.br/dados/macro_bcb.parquet) · [.csv](https://atlasmercados.com.br/dados/macro_bcb.csv) · [economia_servicos_pas.parquet](https://atlasmercados.com.br/dados/economia_servicos_pas.parquet) · [.csv](https://atlasmercados.com.br/dados/economia_servicos_pas.csv) · [economia_industria_pia.parquet](https://atlasmercados.com.br/dados/economia_industria_pia.parquet) · [.csv](https://atlasmercados.com.br/dados/economia_industria_pia.csv) · [economia_construcao_paic.parquet](https://atlasmercados.com.br/dados/economia_construcao_paic.parquet) · [.csv](https://atlasmercados.com.br/dados/economia_construcao_paic.csv) · [economia_agro_pam_ppm.parquet](https://atlasmercados.com.br/dados/economia_agro_pam_ppm.parquet) · [.csv](https://atlasmercados.com.br/dados/economia_agro_pam_ppm.csv) · [pib_trimestral_cnt.parquet](https://atlasmercados.com.br/dados/pib_trimestral_cnt.parquet) · [.csv](https://atlasmercados.com.br/dados/pib_trimestral_cnt.csv) · [populacao_ibge.parquet](https://atlasmercados.com.br/dados/populacao_ibge.parquet) · [.csv](https://atlasmercados.com.br/dados/populacao_ibge.csv) · [focus_expectativas.parquet](https://atlasmercados.com.br/dados/focus_expectativas.parquet) · [.csv](https://atlasmercados.com.br/dados/focus_expectativas.csv) · [credito_bcb.parquet](https://atlasmercados.com.br/dados/credito_bcb.parquet) · [.csv](https://atlasmercados.com.br/dados/credito_bcb.csv) · [comex_mdic.parquet](https://atlasmercados.com.br/dados/comex_mdic.parquet) · [.csv](https://atlasmercados.com.br/dados/comex_mdic.csv) · [pulso_industria_servicos.parquet](https://atlasmercados.com.br/dados/pulso_industria_servicos.parquet) · [.csv](https://atlasmercados.com.br/dados/pulso_industria_servicos.csv) · [safra_lspa.parquet](https://atlasmercados.com.br/dados/safra_lspa.parquet) · [.csv](https://atlasmercados.com.br/dados/safra_lspa.csv) · [agro_municipios.parquet](https://atlasmercados.com.br/dados/agro_municipios.parquet) · [.csv](https://atlasmercados.com.br/dados/agro_municipios.csv) · [pnad_trabalho.parquet](https://atlasmercados.com.br/dados/pnad_trabalho.parquet) · [.csv](https://atlasmercados.com.br/dados/pnad_trabalho.csv) · [municipios_ibge.parquet](https://atlasmercados.com.br/dados/municipios_ibge.parquet) · [.csv](https://atlasmercados.com.br/dados/municipios_ibge.csv) · [cempre_municipios.parquet](https://atlasmercados.com.br/dados/cempre_municipios.parquet) · [.csv](https://atlasmercados.com.br/dados/cempre_municipios.csv) · [cempre_uf.parquet](https://atlasmercados.com.br/dados/cempre_uf.parquet) · [.csv](https://atlasmercados.com.br/dados/cempre_uf.csv)

Os arquivos marcados derivado no catálogo são estimativas do Atlas Mercados (método e insumos em cada linha); os demais são o que a fonte publica, como publica, com a unidade original registrada. Índice para máquinas: [/llms.txt](https://atlasmercados.com.br/llms.txt), [/sitemap.xml](https://atlasmercados.com.br/sitemap.xml).

Limites. O Atlas Mercados compila dados e explicita método; não faz recomendação de investimento nem publica preço-alvo. Erros podem existir — a proveniência está em cada número justamente para que qualquer um confira na fonte. Encontrou um erro? A correção entra no dado e no catálogo, com a data.
