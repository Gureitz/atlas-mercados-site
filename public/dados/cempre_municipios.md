---
title: Empresas e emprego por município × seção e divisão CNAE (CEMPRE) — dados em Parquet e CSV — Atlas Mercados
description: Empresas e emprego por município × seção e divisão CNAE (CEMPRE): 1.030.022 linhas, referência 2024, em Parquet e CSV (dado oficial como publicado), coletado em 20/10/2026.
url: https://atlasmercados.com.br/dados/cempre_municipios
---
<!-- https://atlasmercados.com.br/dados/cempre_municipios — versão Markdown da página -->

# Empresas e emprego por município × seção e divisão CNAE (CEMPRE)

IBGE · dado oficial como publicado · cempre_municipios

> Empresas e emprego por município × seção e divisão CNAE (CEMPRE): 1.030.022 linhas, referência 2024, em Parquet e CSV (dado oficial como publicado), coletado em 20/10/2026.

- Linhas · 1.030.022 · 12 colunas

- Período · 2024 – 2024 · cobertura temporal

- Coletado em · 2026-10-20 · última ingestão

- Parquet · 5,2 MB · baixar

- CSV · gzip · baixar (comprimido)

- Licença · CC BY 4.0 · termos e fontes

## O que é

Cadastro Central de Empresas do IBGE no nível municipal, último ano: unidades locais, pessoal ocupado total e salários das empresas e outras organizações formais, por seção e divisão da CNAE 2.0. Zeros não guardados.

## Colunas — 12 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| ano | int64 | Ano de referência. |
| municipio_cod | large_string | Código IBGE do município (7 dígitos). |
| municipio_nome | string | Nome do município. |
| uf_sigla | string | Sigla da UF (vazio para Brasil e regiões). |
| nivel_cnae | large_string | Nível da CNAE: total, secao (A–U) ou divisao (2 dígitos). |
| cnae_cod | large_string | Chave harmonizada do projeto entre as séries antiga e nova (ex.: 47.7, 4.4, 4754+4757+4759). |
| cnae_nome | large_string | Nome da seção ou divisão da CNAE 2.0. |
| categoria_cod | large_string | Código da categoria no SIDRA — a chave para conferir a célula na fonte. |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/cempre_municipios.csv.gz", compression="gzip") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/cempre_municipios.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/9528 CEMPRE — unidades locais, pessoal ocupado e salários por município × seção e divisão CNAE, 2024 | 2024–2024 | 1.030.022 |

## Como citar

Como citar

Atlas Mercados. Empresas e emprego por município × seção e divisão CNAE (CEMPRE). https://atlasmercados.com.br/dados/cempre_municipios. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:cempre_municipios · Permalink: [https://atlasmercados.com.br/dados/cempre_municipios](https://atlasmercados.com.br/dados/cempre_municipios) · [CSV](https://atlasmercados.com.br/dados/cempre_municipios.csv) · [Parquet](https://atlasmercados.com.br/dados/cempre_municipios.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
