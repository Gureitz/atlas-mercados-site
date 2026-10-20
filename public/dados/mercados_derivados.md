---
title: Estimativa — receita das classes do varejo por UF (rateio pelo CEMPRE) — dados em Parquet e CSV — Atlas Mercados
description: Estimativa — receita das classes do varejo por UF (rateio pelo CEMPRE): 1.080 linhas, referência 2024, em Parquet e CSV (estimativa do site, com método declarado), coletado em 15/10/2026.
url: https://atlasmercados.com.br/dados/mercados_derivados
---
<!-- https://atlasmercados.com.br/dados/mercados_derivados — versão Markdown da página -->

# Estimativa — receita das classes do varejo por UF (rateio pelo CEMPRE)

Atlas Mercados · estimativa (derivado) · mercados_derivados

> Estimativa — receita das classes do varejo por UF (rateio pelo CEMPRE): 1.080 linhas, referência 2024, em Parquet e CSV (estimativa do site, com método declarado), coletado em 15/10/2026.

- Linhas · 1.080 · 22 colunas

- Período · 2024 – 2024 · cobertura temporal

- Coletado em · 2026-10-15 · última ingestão

- Parquet · 0,0 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

Estimativa — não é dado publicado. Receita nacional de cada classe do varejo (PAC, t/10648) distribuída entre as UFs na proporção dos salários da classe no CEMPRE (t/9528), com a razão contra o agrupamento publicado por UF ao lado.

## Colunas — 22 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| tipo | large_string | bruto ou derivado. |
| metodo | large_string | Método da estimativa (só derivados). |
| chave | large_string | Nome curto da variável. |
| ano_pac | int64 | — |
| ano_cempre | int64 | — |
| nivel_cod | large_string | Nível territorial: 1 Brasil, 2 Grande Região, 3 UF. |
| territorio_cod | large_string | Código IBGE do território (1 = Brasil; 35 = São Paulo…). |
| territorio_nome | large_string | Nome do território. |
| uf_sigla | large_string | Sigla da UF (vazio para Brasil e regiões). |
| categoria_cod | large_string | Código da categoria no SIDRA — a chave para conferir a célula na fonte. |
| cnae_nivel | large_string | Nível da categoria: total, divisao, grupo, classe, classe_agregada, agrupamento_pac… |
| cnae_cod | large_string | Chave harmonizada do projeto entre as séries antiga e nova (ex.: 47.7, 4.4, 4754+4757+4759). |
| nome_curto | large_string | Nome curto da categoria. |
| classes_cempre | large_string | — |
| receita_brasil | double | — |
| share_uf | double | Participação estimada da UF no total do Brasil. |
| valor_estimado | double | Valor estimado (R$). |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| agrupamento_pac_cod | large_string | — |
| razao_vs_publicado | double | Soma das estimativas do agrupamento ÷ valor publicado pela PAC na UF (1,0 = exato). |
| insumos | large_string | JSON com as tabelas, variáveis e anos usados na estimativa. |
| gerado_em | large_string | — |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/mercados_derivados.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/mercados_derivados.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/10648+9528 Estimativa — receita das classes do varejo por UF (rateio pelo CEMPRE) | 2024–2024 | 1.080 |

## Como citar

Como citar

Atlas Mercados. Estimativa — receita das classes do varejo por UF (rateio pelo CEMPRE). https://atlasmercados.com.br/dados/mercados_derivados. Dados: Atlas Mercados. Acesso em [data de acesso].

Identificador da série: atlas-mercados:mercados_derivados · Permalink: [https://atlasmercados.com.br/dados/mercados_derivados](https://atlasmercados.com.br/dados/mercados_derivados) · [CSV](https://atlasmercados.com.br/dados/mercados_derivados.csv) · [Parquet](https://atlasmercados.com.br/dados/mercados_derivados.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
