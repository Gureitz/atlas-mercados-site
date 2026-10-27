---
title: Campos de petróleo e gás e seus concessionários — participação e operador (ANP) — dados em Parquet e CSV — Atlas Mercados
description: Campos de petróleo e gás e seus concessionários — participação e operador (ANP): 536 linhas, referência 2026-10-27, em Parquet e CSV (dado oficial como publicado), coletado em 27/10/2026.
url: https://atlasmercados.com.br/dados/anp_campos
---
<!-- https://atlasmercados.com.br/dados/anp_campos — versão Markdown da página -->

# Campos de petróleo e gás e seus concessionários — participação e operador (ANP)

ANP · dado oficial como publicado · anp_campos

> Campos de petróleo e gás e seus concessionários — participação e operador (ANP): 536 linhas, referência 2026-10-27, em Parquet e CSV (dado oficial como publicado), coletado em 27/10/2026.

- Linhas · 536 · 14 colunas

- Período · 2026-10-27 – 2026-10-27 · cobertura temporal

- Coletado em · 2026-10-27 · última ingestão

- Parquet · 0,0 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

Cada campo de produção, desenvolvimento ou em devolução com os concessionários, a participação de cada um no contrato, o operador, a rodada e a situação, e o grupo econômico e o país de origem de cada concessionário pela relação da própria ANP — a base para atribuir a produção às empresas.

## Colunas — 14 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| codigo_campo | large_string | Código do campo na ANP. |
| campo | large_string | Nome do campo de produção. |
| campo_n | large_string | Nome do campo sem acento, em maiúsculas (chave de junção). |
| bacia | large_string | Bacia sedimentar. |
| ambiente | large_string | MAR ou TERRA. |
| estado | large_string | UF do campo, como a ANP grafa. |
| rodada | large_string | Rodada de licitação do contrato (BID0 = contratos da Lei 9.478). |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |
| concessionario | large_string | Razão social. |
| cnpj | large_string | CNPJ da distribuidora (14 dígitos). |
| participacao | double | Fatia do proprietário na usina (fração, 0–1), lida do texto da fonte. |
| operador | bool | Se o concessionário é o operador do campo. |
| grupo | large_string | Grupo econômico do concessionário (ANP). |
| pais | large_string | País de origem do grupo (ANP). |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/anp_campos.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/anp_campos.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/campo_concessionarios ANP — campos de produção e concessionários (participação e operador) | 2026-10-27–2026-10-27 | 536 |

## Como citar

Como citar

Atlas Mercados. Campos de petróleo e gás e seus concessionários — participação e operador (ANP). https://atlasmercados.com.br/dados/anp_campos. Dados: ANP. Acesso em [data de acesso].

Identificador da série: atlas-mercados:anp_campos · Permalink: [https://atlasmercados.com.br/dados/anp_campos](https://atlasmercados.com.br/dados/anp_campos) · [CSV](https://atlasmercados.com.br/dados/anp_campos.csv) · [Parquet](https://atlasmercados.com.br/dados/anp_campos.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
