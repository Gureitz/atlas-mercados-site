---
title: Municípios — PIB, valor adicionado e população (IBGE) — dados em Parquet e CSV — Atlas Mercados
description: Municípios — PIB, valor adicionado e população (IBGE): 55.702 linhas, de 2022 a 2026, em Parquet e CSV (dado oficial como publicado), coletado em 20/10/2026.
url: https://atlasmercados.com.br/dados/municipios_ibge
---
<!-- https://atlasmercados.com.br/dados/municipios_ibge — versão Markdown da página -->

# Municípios — PIB, valor adicionado e população (IBGE)

IBGE · dado oficial como publicado · municipios_ibge

> Municípios — PIB, valor adicionado e população (IBGE): 55.702 linhas, de 2022 a 2026, em Parquet e CSV (dado oficial como publicado), coletado em 20/10/2026.

- Linhas · 55.702 · 9 colunas

- Período · 2022 – 2026 · cobertura temporal

- Coletado em · 2026-10-20 · última ingestão

- Parquet · 0,3 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

PIB dos Municípios do IBGE (PIB, impostos e valor adicionado da agropecuária, indústria, serviços e administração pública, último ano), estimativas de população dos dois últimos anos e o Censo 2022, para os ~5.570 municípios.

## Colunas — 9 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| tabela | int64 | Número da tabela no SIDRA do IBGE (ex.: 10653). |
| ano | int64 | Ano de referência. |
| municipio_cod | large_string | Código IBGE do município (7 dígitos). |
| municipio_nome | string | Nome do município. |
| uf_sigla | string | Sigla da UF (vazio para Brasil e regiões). |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/municipios_ibge.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/municipios_ibge.parquet' LIMIT 10")

## Tabelas de origem — 3

| Fonte | Período | Linhas |
|---|---|---|
| t/4709 Censo 2022 — população por município | 2022–2022 | 5.570 |
| t/5938 PIB dos Municípios | 2023–2023 | 38.990 |
| t/6579 População estimada por município | 2025–2026 | 11.142 |

## Como citar

Como citar

Atlas Mercados. Municípios — PIB, valor adicionado e população (IBGE). https://atlasmercados.com.br/dados/municipios_ibge. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:municipios_ibge · Permalink: [https://atlasmercados.com.br/dados/municipios_ibge](https://atlasmercados.com.br/dados/municipios_ibge) · [CSV](https://atlasmercados.com.br/dados/municipios_ibge.csv) · [Parquet](https://atlasmercados.com.br/dados/municipios_ibge.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
