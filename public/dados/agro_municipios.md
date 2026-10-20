---
title: Agropecuária por município — produção, valor e área de cada produto (PAM e PPM) — dados em Parquet e CSV — Atlas Mercados
description: Agropecuária por município — produção, valor e área de cada produto (PAM e PPM): 503.379 linhas, referência 2025, em Parquet e CSV (dado oficial como publicado), coletado em 18/10/2026.
url: https://atlasmercados.com.br/dados/agro_municipios
---
<!-- https://atlasmercados.com.br/dados/agro_municipios — versão Markdown da página -->

# Agropecuária por município — produção, valor e área de cada produto (PAM e PPM)

IBGE · dado oficial como publicado · agro_municipios

> Agropecuária por município — produção, valor e área de cada produto (PAM e PPM): 503.379 linhas, referência 2025, em Parquet e CSV (dado oficial como publicado), coletado em 18/10/2026.

- Linhas · 503.379 · 13 colunas

- Período · 2025 – 2025 · cobertura temporal

- Coletado em · 2026-10-18 · última ingestão

- Parquet · 2,4 MB · baixar

- CSV · gzip · baixar (comprimido)

- Licença · CC BY 4.0 · termos e fontes

## O que é

Produção Agrícola Municipal e Pesquisa da Pecuária Municipal do IBGE no nível municipal (~5.570 municípios), último ano: quantidade produzida, valor da produção e área colhida das lavouras, efetivo dos rebanhos e produção de origem animal, por produto. Células zero ('-' da fonte) não são guardadas.

## Colunas — 13 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| tabela | int64 | Número da tabela no SIDRA do IBGE (ex.: 10653). |
| ano | int64 | Ano de referência. |
| municipio_cod | large_string | Código IBGE do município (7 dígitos). |
| municipio_nome | large_string | Nome do município. |
| uf_sigla | large_string | Sigla da UF (vazio para Brasil e regiões). |
| produto | large_string | Nome curto do produto no projeto (ex.: soja, milho-2a-safra). |
| produto_nome | large_string | Produto como o IBGE publica. |
| categoria_cod | large_string | Código da categoria no SIDRA — a chave para conferir a célula na fonte. |
| variavel_cod | int64 | Código da variável no SIDRA (ex.: 866 receita bruta de revenda). |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/agro_municipios.csv.gz", compression="gzip") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/agro_municipios.parquet' LIMIT 10")

## Tabelas de origem — 3

| Fonte | Período | Linhas |
|---|---|---|
| t/3939 PPM — rebanhos por município, 2025 | 2025–2025 | 47.453 |
| t/5457 PAM — lavouras por município, 2025 | 2025–2025 | 421.824 |
| t/74 PPM — produção de origem animal por município, 2025 | 2025–2025 | 34.102 |

## Como citar

Como citar

Atlas Mercados. Agropecuária por município — produção, valor e área de cada produto (PAM e PPM). https://atlasmercados.com.br/dados/agro_municipios. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:agro_municipios · Permalink: [https://atlasmercados.com.br/dados/agro_municipios](https://atlasmercados.com.br/dados/agro_municipios) · [CSV](https://atlasmercados.com.br/dados/agro_municipios.csv) · [Parquet](https://atlasmercados.com.br/dados/agro_municipios.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
