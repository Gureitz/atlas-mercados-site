---
title: Mercado de trabalho por UF — desocupação, informalidade, rendimento e ocupação (PNAD Contínua) — dados em Parquet e CSV — Atlas Mercados
description: Mercado de trabalho por UF — desocupação, informalidade, rendimento e ocupação (PNAD Contínua): 32.256 linhas, de 2012-01 a 2026-06, em Parquet e CSV (dado oficial como publicado), coletado em 20/10/2026.
url: https://atlasmercados.com.br/dados/pnad_trabalho
---
<!-- https://atlasmercados.com.br/dados/pnad_trabalho — versão Markdown da página -->

# Mercado de trabalho por UF — desocupação, informalidade, rendimento e ocupação (PNAD Contínua)

IBGE · dado oficial como publicado · pnad_trabalho

> Mercado de trabalho por UF — desocupação, informalidade, rendimento e ocupação (PNAD Contínua): 32.256 linhas, de 2012-01 a 2026-06, em Parquet e CSV (dado oficial como publicado), coletado em 20/10/2026.

- Linhas · 32.256 · 15 colunas

- Período · 2012-01 – 2026-06 · cobertura temporal

- Coletado em · 2026-10-20 · última ingestão

- Parquet · 0,1 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

PNAD Contínua trimestral do IBGE, Brasil e UFs, 2012 em diante: taxas de desocupação e de subutilização, força de trabalho, ocupados, desocupados, taxa de informalidade, rendimento médio mensal real habitual de todos os trabalhos e ocupados por grupamento de atividade, como o IBGE publica.

## Colunas — 15 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| tabela | int64 | Número da tabela no SIDRA do IBGE (ex.: 10653). |
| periodo_cod | large_string | Código do período no SIDRA (AAAA; AAAAMM nas mensais; AAAA0T nas trimestrais, ex.: 202602 = 2º tri). |
| ano | int64 | Ano de referência. |
| trimestre | int64 | Trimestre de referência (1 a 4), nas séries trimestrais. |
| nivel_cod | large_string | Nível territorial: 1 Brasil, 2 Grande Região, 3 UF. |
| territorio_cod | large_string | Código IBGE do território (1 = Brasil; 35 = São Paulo…). |
| territorio_nome | large_string | Nome do território. |
| uf_sigla | large_string | Sigla da UF (vazio para Brasil e regiões). |
| atividade_cod | large_string | Código da atividade na PMC (classificação 85) ou 'geral'. |
| atividade_nome | large_string | Nome da atividade na PMC. |
| variavel_cod | int64 | Código da variável no SIDRA (ex.: 866 receita bruta de revenda). |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/pnad_trabalho.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/pnad_trabalho.parquet' LIMIT 10")

## Tabelas de origem — 4

| Fonte | Período | Linhas |
|---|---|---|
| t/4093 PNAD Contínua — força de trabalho, ocupados, desocupados e informalidade | 2012-01–2026-06 | 6.496 |
| t/4099 PNAD Contínua — taxas de desocupação e de subutilização | 2012-01–2026-06 | 3.248 |
| t/5434 PNAD Contínua — ocupados por grupamento de atividade | 2012-01–2026-06 | 21.112 |
| t/5436 PNAD Contínua — rendimento médio mensal real habitual de todos os trabalhos | 2012-01–2026-06 | 1.400 |

## Como citar

Como citar

Atlas Mercados. Mercado de trabalho por UF — desocupação, informalidade, rendimento e ocupação (PNAD Contínua). https://atlasmercados.com.br/dados/pnad_trabalho. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:pnad_trabalho · Permalink: [https://atlasmercados.com.br/dados/pnad_trabalho](https://atlasmercados.com.br/dados/pnad_trabalho) · [CSV](https://atlasmercados.com.br/dados/pnad_trabalho.csv) · [Parquet](https://atlasmercados.com.br/dados/pnad_trabalho.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
