---
title: Comércio exterior do Brasil — exportações e importações por UF, produto (SH4), país e mês — dados em Parquet e CSV — Atlas Mercados
description: Comércio exterior do Brasil — exportações e importações por UF, produto (SH4), país e mês: 350.607 linhas, de 2015 a 2026-09, em Parquet e CSV (dado oficial como publicado), coletado em 18/10/2026.
url: https://atlasmercados.com.br/dados/comex_mdic
---
<!-- https://atlasmercados.com.br/dados/comex_mdic — versão Markdown da página -->

# Comércio exterior do Brasil — exportações e importações por UF, produto (SH4), país e mês

MDIC/SECEX · dado oficial como publicado · comex_mdic

> Comércio exterior do Brasil — exportações e importações por UF, produto (SH4), país e mês: 350.607 linhas, de 2015 a 2026-09, em Parquet e CSV (dado oficial como publicado), coletado em 18/10/2026.

- Linhas · 350.607 · 14 colunas

- Período · 2015 – 2026-09 · cobertura temporal

- Coletado em · 2026-10-18 · última ingestão

- Parquet · 5,0 MB · baixar

- CSV · gzip · baixar (comprimido)

- Licença · CC BY 4.0 · termos e fontes

## O que é

Exportações e importações do Brasil do Comex Stat (MDIC/SECEX), em US$ FOB e kg líquido, como a API oficial publica: por ano, UF do produto e posição SH4 do Sistema Harmonizado (2015 em diante), por ano e país, e o total mensal desde 1997 (importações também em US$ CIF). O ano corrente é parcial e traz o número de meses.

## Colunas — 14 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| recorte | large_string | Recorte do Comex Stat: uf_sh4 (ano × UF × posição SH4), pais (ano × país) ou mensal (Brasil). |
| fluxo | large_string | exportacao ou importacao. |
| ano | int64 | Ano de referência. |
| mes | int64 | Mês (só no recorte mensal). |
| meses | int64 | Meses incluídos no ano (12 = ano completo; menos = ano corrente parcial). |
| uf_cod | string | Código IBGE da UF do produto (vazio quando a UF não é declarada). |
| uf_sigla | string | Sigla da UF (vazio para Brasil e regiões). |
| uf_nome | string | UF do produto como o MDIC publica. |
| sh4_cod | string | Posição SH4 do Sistema Harmonizado. |
| sh4_nome | string | Descrição da posição SH4. |
| pais | string | País de destino (exportação) ou origem (importação). |
| fob_usd | double | Valor US$ FOB. |
| kg | double | Quilograma líquido. |
| cif_usd | double | Valor US$ CIF (só importação mensal). |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/comex_mdic.csv.gz", compression="gzip") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/comex_mdic.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/general Comex Stat — exportações e importações (MDIC/SECEX) | 2015–2026-09 | 350.433 |

## Como citar

Como citar

Atlas Mercados. Comércio exterior do Brasil — exportações e importações por UF, produto (SH4), país e mês. https://atlasmercados.com.br/dados/comex_mdic. Dados: MDIC/SECEX. Acesso em [data de acesso].

Identificador da série: atlas-mercados:comex_mdic · Permalink: [https://atlasmercados.com.br/dados/comex_mdic](https://atlasmercados.com.br/dados/comex_mdic) · [CSV](https://atlasmercados.com.br/dados/comex_mdic.csv) · [Parquet](https://atlasmercados.com.br/dados/comex_mdic.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
