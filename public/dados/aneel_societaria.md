---
title: Composição societária dos agentes do setor elétrico — participações diretas (ANEEL) — dados em Parquet e CSV — Atlas Mercados
description: Composição societária dos agentes do setor elétrico — participações diretas (ANEEL): 7.520 linhas, de 2020-09-30 a 2026-09-30, em Parquet e CSV (dado oficial como publicado), coletado em 26/10/2026.
url: https://atlasmercados.com.br/dados/aneel_societaria
---
<!-- https://atlasmercados.com.br/dados/aneel_societaria — versão Markdown da página -->

# Composição societária dos agentes do setor elétrico — participações diretas (ANEEL)

ANEEL · dado oficial como publicado · aneel_societaria

> Composição societária dos agentes do setor elétrico — participações diretas (ANEEL): 7.520 linhas, de 2020-09-30 a 2026-09-30, em Parquet e CSV (dado oficial como publicado), coletado em 26/10/2026.

- Linhas · 7.520 · 6 colunas

- Período · 2020-09-30 – 2026-09-30 · cobertura temporal

- Coletado em · 2026-10-26 · última ingestão

- Parquet · 0,3 MB · baixar

- CSV · texto · baixar

- Licença · ODbL 1.0 (portal de dados abertos da ANEEL) · termos e fontes

## O que é

Grafo de participações diretas (empresa → sócio, fração) montado das declarações de composição societária feitas à ANEEL por geradoras, distribuidoras e transmissoras: a fonte dá a participação efetiva do sócio no agente que declara; a fatia direta é a efetiva do sócio dividida pela da empresa acima dele. Base para atribuir usinas e distribuidoras a grupos econômicos.

## Colunas — 6 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| pai | large_string | Raiz do CNPJ (8 dígitos) da empresa que tem os sócios. |
| socio | large_string | Raiz do CNPJ do sócio. |
| fracao | double | Fatia direta do sócio na empresa (0–1): efetiva do sócio ÷ efetiva da empresa, no formulário declarado à ANEEL. |
| periodo | int64 | — |
| nome_pai | large_string | Razão social da empresa. |
| nome_socio | large_string | Razão social do sócio. |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/aneel_societaria.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/aneel_societaria.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/polimero ANEEL — composição societária dos agentes (Polímero), participações diretas | 2020-09-30–2026-09-30 | 7.520 |

## Como citar

Como citar

Atlas Mercados. Composição societária dos agentes do setor elétrico — participações diretas (ANEEL). https://atlasmercados.com.br/dados/aneel_societaria. Dados: ANEEL. Acesso em [data de acesso].

Identificador da série: atlas-mercados:aneel_societaria · Permalink: [https://atlasmercados.com.br/dados/aneel_societaria](https://atlasmercados.com.br/dados/aneel_societaria) · [CSV](https://atlasmercados.com.br/dados/aneel_societaria.csv) · [Parquet](https://atlasmercados.com.br/dados/aneel_societaria.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
