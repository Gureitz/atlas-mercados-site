---
title: Banco Central do Brasil — crédito: saldos, juros, inadimplência e concessões — dados em Parquet e CSV — Atlas Mercados
description: Banco Central do Brasil — crédito: saldos, juros, inadimplência e concessões: 3.505 linhas, de 2011-01-01 a 2026-08-01, em Parquet e CSV (dado oficial como publicado), coletado em 19/10/2026.
url: https://atlasmercados.com.br/dados/credito_bcb
---
<!-- https://atlasmercados.com.br/dados/credito_bcb — versão Markdown da página -->

# Banco Central do Brasil — crédito: saldos, juros, inadimplência e concessões

Banco Central do Brasil · dado oficial como publicado · credito_bcb

> Banco Central do Brasil — crédito: saldos, juros, inadimplência e concessões: 3.505 linhas, de 2011-01-01 a 2026-08-01, em Parquet e CSV (dado oficial como publicado), coletado em 19/10/2026.

- Linhas · 3.505 · 6 colunas

- Período · 2011-01-01 – 2026-08-01 · cobertura temporal

- Coletado em · 2026-10-19 · última ingestão

- Parquet · 0,0 MB · baixar

- CSV · texto · baixar

- Licença · ODbL 1.0 (Portal de Dados Abertos do BCB) · termos e fontes

## O que é

As 20 séries de crédito do Sistema Gerenciador de Séries Temporais (SGS) do Banco Central que alimentam os indicadores de crédito do site: saldo da carteira (total, pessoas físicas, pessoas jurídicas, consignado, pessoal não consignado, cartão, veículos, imobiliário, capital de giro), crédito em relação ao PIB, taxa média de juros das novas operações (total, PF, PJ, consignado, cartão rotativo, veículos), inadimplência acima de 90 dias (total, PF, PJ) e concessões. Formato longo: uma linha por (série, mês), com o código SGS, o nome e a unidade; saldos e concessões em milhões de reais, como publicados.

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

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/credito_bcb.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/credito_bcb.parquet' LIMIT 10")

## Tabelas de origem — 20

| Fonte | Período | Linhas |
|---|---|---|
| t/20539 Saldo da carteira de crédito (SGS 20539) |  | — |
| t/20541 Crédito a pessoas físicas (saldo) (SGS 20541) |  | — |
| t/20540 Crédito a pessoas jurídicas (saldo) (SGS 20540) |  | — |
| t/20622 Crédito em relação ao PIB (SGS 20622) |  | — |
| t/20579 Crédito consignado (saldo) (SGS 20579) |  | — |
| t/20574 Crédito pessoal não consignado (saldo) (SGS 20574) |  | — |
| t/20590 Cartão de crédito (saldo) (SGS 20590) |  | — |
| t/20581 Financiamento de veículos (saldo) (SGS 20581) |  | — |
| t/20612 Financiamento imobiliário (saldo) (SGS 20612) |  | — |
| t/20550 Capital de giro (saldo) (SGS 20550) |  | — |
| t/20714 Taxa média de juros do crédito (SGS 20714) |  | — |
| t/20716 Juros do crédito a pessoas físicas (SGS 20716) |  | — |
| t/20715 Juros do crédito a pessoas jurídicas (SGS 20715) |  | — |
| t/20747 Juros do consignado (SGS 20747) |  | — |
| t/22022 Juros do cartão de crédito rotativo (SGS 22022) |  | — |
| t/20749 Juros do financiamento de veículos (SGS 20749) |  | — |
| t/21082 Inadimplência do crédito (SGS 21082) |  | — |
| t/21084 Inadimplência de pessoas físicas (SGS 21084) |  | — |
| t/21083 Inadimplência de pessoas jurídicas (SGS 21083) |  | — |
| t/20631 Concessões de crédito no mês (SGS 20631) |  | — |

## Como citar

Como citar

Atlas Mercados. Banco Central do Brasil — crédito: saldos, juros, inadimplência e concessões. https://atlasmercados.com.br/dados/credito_bcb. Dados: Banco Central do Brasil. Acesso em [data de acesso].

Identificador da série: atlas-mercados:credito_bcb · Permalink: [https://atlasmercados.com.br/dados/credito_bcb](https://atlasmercados.com.br/dados/credito_bcb) · [CSV](https://atlasmercados.com.br/dados/credito_bcb.csv) · [Parquet](https://atlasmercados.com.br/dados/credito_bcb.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
