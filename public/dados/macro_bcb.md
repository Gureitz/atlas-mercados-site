---
title: Banco Central do Brasil — séries macroeconômicas do SGS — dados em Parquet e CSV — Atlas Mercados
description: Banco Central do Brasil — séries macroeconômicas do SGS: 8.081 linhas, de 2015-01-01 a 2026-10-16, em Parquet e CSV (dado oficial como publicado), coletado em 19/10/2026.
url: https://atlasmercados.com.br/dados/macro_bcb
---
<!-- https://atlasmercados.com.br/dados/macro_bcb — versão Markdown da página -->

# Banco Central do Brasil — séries macroeconômicas do SGS

Banco Central do Brasil · dado oficial como publicado · macro_bcb

> Banco Central do Brasil — séries macroeconômicas do SGS: 8.081 linhas, de 2015-01-01 a 2026-10-16, em Parquet e CSV (dado oficial como publicado), coletado em 19/10/2026.

- Linhas · 8.081 · 6 colunas

- Período · 2015-01-01 – 2026-10-16 · cobertura temporal

- Coletado em · 2026-10-19 · última ingestão

- Parquet · 0,1 MB · baixar

- CSV · texto · baixar

- Licença · ODbL 1.0 (Portal de Dados Abertos do BCB) · termos e fontes

## O que é

As 13 séries macroeconômicas do Sistema Gerenciador de Séries Temporais (SGS) do Banco Central que alimentam os indicadores do site: Selic efetiva, CDI, IPCA (12 meses e mensal), IPCA-15, INPC, IGP-M, dólar e euro, IBC-Br, taxa de desocupação (PNAD Contínua), dívida bruta do governo geral e reservas internacionais. Formato longo: uma linha por (série, data), com o código SGS, o nome e a unidade; valores como publicados, sem transformação.

## Colunas — 6 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| serie | large_string | Série da pesquisa: 'antiga' (2007–2023) ou 'nova' (2024–, PAC reformulada). |
| codigo | int64 | Código da série no SGS do Banco Central. |
| nome | large_string | Nome da série. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| data | timestamp[us] | Data de referência (1º dia do mês nas séries mensais). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/macro_bcb.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/macro_bcb.parquet' LIMIT 10")

## Tabelas de origem — 13

| Fonte | Período | Linhas |
|---|---|---|
| SGS 1178 Taxa Selic efetiva (SGS 1178) |  | — |
| SGS 4391 CDI acumulado no mês (SGS 4391) |  | — |
| SGS 13522 IPCA acumulado em 12 meses (SGS 13522) |  | — |
| SGS 433 IPCA no mês (SGS 433) |  | — |
| SGS 7478 IPCA-15 no mês (SGS 7478) |  | — |
| SGS 188 INPC no mês (SGS 188) |  | — |
| SGS 189 IGP-M no mês (SGS 189) |  | — |
| SGS 1 Dólar comercial (venda) (SGS 1) |  | — |
| SGS 21619 Euro (venda) (SGS 21619) |  | — |
| SGS 24364 IBC-Br (atividade econômica) (SGS 24364) |  | — |
| SGS 24369 Taxa de desocupação (PNAD Contínua) (SGS 24369) |  | — |
| SGS 13762 Dívida bruta do governo geral (SGS 13762) |  | — |
| SGS 3546 Reservas internacionais (SGS 3546) |  | — |

## Como citar

Como citar

Atlas Mercados. Banco Central do Brasil — séries macroeconômicas do SGS. https://atlasmercados.com.br/dados/macro_bcb. Dados: Banco Central do Brasil. Acesso em [data de acesso].

Identificador da série: atlas-mercados:macro_bcb · Permalink: [https://atlasmercados.com.br/dados/macro_bcb](https://atlasmercados.com.br/dados/macro_bcb) · [CSV](https://atlasmercados.com.br/dados/macro_bcb.csv) · [Parquet](https://atlasmercados.com.br/dados/macro_bcb.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
