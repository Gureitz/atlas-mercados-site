---
title: Mercado das distribuidoras de energia — consumidores, energia e receitas por mês (ANEEL, SAMP) — dados em Parquet e CSV — Atlas Mercados
description: Mercado das distribuidoras de energia — consumidores, energia e receitas por mês (ANEEL, SAMP): 1.079.868 linhas, de 2024-01-01 a 2026-09-01, em Parquet e CSV (dado oficial como publicado), coletado em 26/10/2026.
url: https://atlasmercados.com.br/dados/aneel_samp
---
<!-- https://atlasmercados.com.br/dados/aneel_samp — versão Markdown da página -->

# Mercado das distribuidoras de energia — consumidores, energia e receitas por mês (ANEEL, SAMP)

IBGE · dado oficial como publicado · aneel_samp

> Mercado das distribuidoras de energia — consumidores, energia e receitas por mês (ANEEL, SAMP): 1.079.868 linhas, de 2024-01-01 a 2026-09-01, em Parquet e CSV (dado oficial como publicado), coletado em 26/10/2026.

- Linhas · 1.079.868 · 10 colunas

- Período · 2024-01-01 – 2026-09-01 · cobertura temporal

- Coletado em · 2026-10-26 · última ingestão

- Parquet · 6,1 MB · baixar

- CSV · gzip · baixar (comprimido)

- Licença · CC BY 4.0 · termos e fontes

## O que é

Mercado declarado à ANEEL pelas ~100 distribuidoras, de 2024 em diante, por mês, tipo de mercado (regular, sistema isolado, compensação da geração distribuída), classe de consumo e opção de energia (cativo, livre): número de consumidores, energia faturada (TE e TUSD), demanda e receitas, somados sobre modalidade tarifária, subgrupo e posto. A unidade de cada valor está no rótulo do detalhe.

## Colunas — 10 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| cnpj | large_string | CNPJ da distribuidora (14 dígitos). |
| sigla | large_string | Sigla da distribuidora na ANEEL. |
| nome | large_string | Nome da série. |
| mes | timestamp[us] | Mês (só no recorte mensal). |
| tipo_mercado | large_string | Tipo de mercado no SAMP (Regular, Sistema Isolado, Sistema de Compensação GD, refaturamentos). |
| classe | large_string | Classe de consumo (Residencial, Comercial, Industrial, Rural, Poder público…). |
| opcao_energia | large_string | CATIVO, LIVRE, GERAÇÃO, DISTRIBUIÇÃO ou SUPRIMENTO. |
| detalhe | large_string | O que o valor mede, com a unidade no rótulo (Energia TUSD (kWh), Número de consumidores, ICMS (R$)…). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| ano_arquivo | int64 | Ano do arquivo do SAMP de onde veio a linha. |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/aneel_samp.csv.gz", compression="gzip") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/aneel_samp.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/samp ANEEL — SAMP, mercado das distribuidoras | 2024-01-01–2026-09-01 | 1.079.868 |

## Como citar

Como citar

Atlas Mercados. Mercado das distribuidoras de energia — consumidores, energia e receitas por mês (ANEEL, SAMP). https://atlasmercados.com.br/dados/aneel_samp. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:aneel_samp · Permalink: [https://atlasmercados.com.br/dados/aneel_samp](https://atlasmercados.com.br/dados/aneel_samp) · [CSV](https://atlasmercados.com.br/dados/aneel_samp.csv) · [Parquet](https://atlasmercados.com.br/dados/aneel_samp.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
