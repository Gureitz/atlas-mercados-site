---
title: Dados para download — Parquet e CSV com proveniência — Atlas Mercados
description: 28 conjuntos de dados oficiais da economia e dos mercados do Brasil, com 4.509.159 linhas no total, em Parquet e CSV: PIB trimestral, pesquisas anuais de comércio, serviços, indústria e construção, produção agrícola e pecuária, Pesquisa Mensal de Comércio, CEMPRE, Contas Regionais e população do IBGE, séries e expectativas de mercado (Focus) do Banco Central, comércio exterior do MDIC, usinas, distribuidoras e composição societária do setor elétrico da ANEEL, produção de petróleo e gás por campo da ANP e o catálogo de proveniência.
url: https://atlasmercados.com.br/dados
---
<!-- https://atlasmercados.com.br/dados — versão Markdown da página -->

# Dados para download

28 conjuntos · Parquet e CSV · IBGE e Banco Central · licença [CC BY 4.0](https://atlasmercados.com.br/licenca) na compilação

> 28 conjuntos de dados oficiais da economia e dos mercados do Brasil, com 4.509.159 linhas no total, em Parquet e CSV: PIB trimestral, pesquisas anuais de comércio, serviços, indústria e construção, produção agrícola e pecuária, Pesquisa Mensal de Comércio, CEMPRE, Contas Regionais e população do IBGE, séries e expectativas de mercado (Focus) do Banco Central, comércio exterior do MDIC, usinas, distribuidoras e composição societária do setor elétrico da ANEEL, produção de petróleo e gás por campo da ANP e o catálogo de proveniência.

| Conjunto | Fonte | Período | Linhas | Tipo | Coletado em | Arquivos |
|---|---|---|---|---|---|---|
| Pesquisa Anual de Comércio — receita, VAB, pessoal e unidades locais por segmento e UFmercados_pac | IBGE | 2007–2024 | 70.469 | bruto | 2026-10-15 | parquet · csv |
| Pesquisa Mensal de Comércio — índices de volume e receita por atividade e UFmercados_pmc | IBGE | 2000-01–2026-08 | 276.448 | bruto | 2026-10-15 | parquet · csv.gz |
| Contas Regionais — PIB e VAB por atividade, Brasil e UFsuf_vab | IBGE | 2002–2023 | 4.312 | bruto | 2026-10-15 | parquet · csv |
| CEMPRE — unidades locais, pessoal e salários do varejo por classe CNAE e UFcempre_varejo | IBGE | 2022–2024 | 15.456 | bruto | 2026-10-15 | parquet · csv |
| Estimativa — receita das classes do varejo por UF (rateio pelo CEMPRE)mercados_derivados | Atlas Mercados | 2024–2024 | 1.080 | derivado | 2026-10-15 | parquet · csv |
| Pesquisa Anual de Serviços — receita, valor adicionado, pessoal e empresas por segmento e UFeconomia_servicos_pas | IBGE | 2007–2024 | 3.236 | bruto | 2026-10-20 | parquet · csv |
| Pesquisa Industrial Anual — receita, valor da transformação industrial e pessoal por divisão CNAE e UFeconomia_industria_pia | IBGE | 2007–2024 | 198.612 | bruto | 2026-10-18 | parquet · csv.gz |
| Pesquisa Anual da Indústria da Construção — valor das obras, receita e pessoal por divisão, porte e UFeconomia_construcao_paic | IBGE | 2007–2024 | 6.802 | bruto | 2026-10-20 | parquet · csv |
| Produção Agrícola e da Pecuária Municipal — quantidade, área e valor por produto e UFeconomia_agro_pam_ppm | IBGE | 2015–2025 | 139.832 | bruto | 2026-10-16 | parquet · csv.gz |
| Contas Nacionais Trimestrais — PIB e componentes, taxas de volume e valores correntespib_trimestral_cnt | IBGE | 1996-01–2026-06 | 13.542 | bruto | 2026-10-16 | parquet · csv |
| População residente — estimativas anuais e Censo 2022, Brasil e UFspopulacao_ibge | IBGE | 2001–2026 | 644 | bruto | 2026-10-16 | parquet · csv |
| Expectativas de mercado (pesquisa Focus) — IPCA, Selic, PIB, câmbio e fiscal, por ano de referênciafocus_expectativas | Banco Central do Brasil | 2015-01-02–2026-10-16 | 208.704 | bruto | 2026-10-19 | parquet · csv |
| Banco Central do Brasil — crédito: saldos, juros, inadimplência e concessõescredito_bcb | Banco Central do Brasil | 2011-01-01–2026-08-01 | 3.505 | bruto | 2026-10-19 | parquet · csv |
| Pulso mensal da indústria e dos serviços — PIM-PF e PMS por atividade e UFpulso_industria_servicos | IBGE | 2002-01–2026-08 | 299.568 | bruto | 2026-10-18 | parquet · csv.gz |
| Safra do ano corrente — estimativas mensais do LSPA por produto e UFsafra_lspa | IBGE | 2024-09–2026-09 | 131.600 | bruto | 2026-10-18 | parquet · csv |
| Agropecuária por município — produção, valor e área de cada produto (PAM e PPM)agro_municipios | IBGE | 2025–2025 | 503.379 | bruto | 2026-10-18 | parquet · csv.gz |
| Mercado de trabalho por UF — desocupação, informalidade, rendimento e ocupação (PNAD Contínua)pnad_trabalho | IBGE | 2012-01–2026-06 | 32.256 | bruto | 2026-10-20 | parquet · csv |
| Municípios — PIB, valor adicionado e população (IBGE)municipios_ibge | IBGE | 2022–2026 | 55.702 | bruto | 2026-10-20 | parquet · csv |
| Empresas e emprego por município × seção e divisão CNAE (CEMPRE)cempre_municipios | IBGE | 2024–2024 | 1.030.022 | bruto | 2026-10-20 | parquet · csv.gz |
| Emprego formal por UF × seção e divisão CNAE (CEMPRE)cempre_uf | IBGE | 2022–2024 | 36.624 | bruto | 2026-10-20 | parquet · csv |
| Comércio exterior do Brasil — exportações e importações por UF, produto (SH4), país e mêscomex_mdic | MDIC/SECEX | 2015–2026-09 | 350.607 | bruto | 2026-10-18 | parquet · csv.gz |
| Usinas de geração de energia elétrica e seus proprietários (ANEEL, SIGA)aneel_siga | ANEEL | 2026-10-01–2026-10-01 | 25.624 | bruto | 2026-10-26 | parquet · csv |
| Mercado das distribuidoras de energia — consumidores, energia e receitas por mês (ANEEL, SAMP)aneel_samp | ANEEL | 2024-01-01–2026-09-01 | 1.079.868 | bruto | 2026-10-26 | parquet · csv.gz |
| Composição societária dos agentes do setor elétrico — participações diretas (ANEEL)aneel_societaria | ANEEL | 2020-09-30–2026-09-30 | 7.520 | bruto | 2026-10-26 | parquet · csv |
| Produção de petróleo e gás natural por campo e mês (ANP)anp_producao | ANP | 2025-01-01–2026-08-01 | 5.075 | bruto | 2026-10-26 | parquet · csv |
| Campos de petróleo e gás e seus concessionários — participação e operador (ANP)anp_campos | ANP | 2026-10-27–2026-10-27 | 536 | bruto | 2026-10-27 | parquet · csv |
| Banco Central do Brasil — séries macroeconômicas do SGSmacro_bcb | Banco Central do Brasil | 2015-01-01–2026-10-16 | 8.081 | bruto | 2026-10-19 | parquet · csv |
| Catálogo de proveniência dos dados de mercadocatalogo_fontes | IBGE |  | 55 | bruto | — | parquet · csv |

Bruto e derivado. "Bruto" é o que a fonte oficial publica, como publica — códigos de categoria, texto original de cada célula e unidade original preservados; a única conversão é "Mil Reais" × 1.000 → R$. "Derivado" é estimativa do site, em arquivo próprio, com método e insumos em cada linha. Cada conjunto tem uma página com a descrição das colunas, as tabelas de origem e o modo de carregar. Para séries individuais, veja os [indicadores](https://atlasmercados.com.br/indicadores).

## Como citar

Como citar

Atlas Mercados. Dados para download. https://atlasmercados.com.br/dados. Dados: IBGE (SIDRA) e Banco Central do Brasil (SGS). Acesso em [data de acesso].

Permalink: [https://atlasmercados.com.br/dados](https://atlasmercados.com.br/dados) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
