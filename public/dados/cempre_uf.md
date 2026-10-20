---
title: Emprego formal por UF × seção e divisão CNAE (CEMPRE) — dados em Parquet e CSV — Atlas Mercados
description: Emprego formal por UF × seção e divisão CNAE (CEMPRE): 36.624 linhas, de 2022 a 2024, em Parquet e CSV (dado oficial como publicado), coletado em 20/10/2026.
url: https://atlasmercados.com.br/dados/cempre_uf
---
<!-- https://atlasmercados.com.br/dados/cempre_uf — versão Markdown da página -->

# Emprego formal por UF × seção e divisão CNAE (CEMPRE)

IBGE · dado oficial como publicado · cempre_uf

> Emprego formal por UF × seção e divisão CNAE (CEMPRE): 36.624 linhas, de 2022 a 2024, em Parquet e CSV (dado oficial como publicado), coletado em 20/10/2026.

- Linhas · 36.624 · 12 colunas

- Período · 2022 – 2024 · cobertura temporal

- Coletado em · 2026-10-20 · última ingestão

- Parquet · 0,2 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

Cadastro Central de Empresas do IBGE, Brasil e UFs, 2022 em diante: unidades locais, pessoal ocupado total, pessoal assalariado e salários por seção e divisão da CNAE 2.0.

## Colunas — 12 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| ano | int64 | Ano de referência. |
| nivel_cod | large_string | Nível territorial: 1 Brasil, 2 Grande Região, 3 UF. |
| territorio_cod | large_string | Código IBGE do território (1 = Brasil; 35 = São Paulo…). |
| territorio_nome | large_string | Nome do território. |
| uf_sigla | large_string | Sigla da UF (vazio para Brasil e regiões). |
| nivel_cnae | large_string | Nível da CNAE: total, secao (A–U) ou divisao (2 dígitos). |
| cnae_cod | large_string | Chave harmonizada do projeto entre as séries antiga e nova (ex.: 47.7, 4.4, 4754+4757+4759). |
| cnae_nome | large_string | Nome da seção ou divisão da CNAE 2.0. |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/cempre_uf.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/cempre_uf.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/9528 CEMPRE — unidades locais, pessoal ocupado, assalariados e salários por UF × seção e divisão CNAE | 2022–2024 | 36.624 |

## Como citar

Como citar

Atlas Mercados. Emprego formal por UF × seção e divisão CNAE (CEMPRE). https://atlasmercados.com.br/dados/cempre_uf. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:cempre_uf · Permalink: [https://atlasmercados.com.br/dados/cempre_uf](https://atlasmercados.com.br/dados/cempre_uf) · [CSV](https://atlasmercados.com.br/dados/cempre_uf.csv) · [Parquet](https://atlasmercados.com.br/dados/cempre_uf.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
