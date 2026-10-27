---
title: Catálogo de proveniência dos dados de mercado — dados em Parquet e CSV — Atlas Mercados
description: Catálogo de proveniência dos dados de mercado: 55 linhas, em Parquet e CSV (dado oficial como publicado).
url: https://atlasmercados.com.br/dados/catalogo_fontes
---
<!-- https://atlasmercados.com.br/dados/catalogo_fontes — versão Markdown da página -->

# Catálogo de proveniência dos dados de mercado

IBGE · dado oficial como publicado · catalogo_fontes

> Catálogo de proveniência dos dados de mercado: 55 linhas, em Parquet e CSV (dado oficial como publicado).

- Linhas · 55 · 18 colunas

- Período · — · cobertura temporal

- Coletado em · — · última ingestão

- Parquet · 0,0 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

Uma linha por (conjunto de dados, tabela oficial): título, tabela e endereço no SIDRA, URL exata da consulta à API, níveis territoriais, variáveis, classificações, período, unidade original, conversão aplicada, número de linhas, arquivo e data de coleta. Separa o dado bruto (o que a fonte publica) do derivado (estimativas do site, com método declarado).

## Colunas — 18 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| dataset | large_string | Conjunto de dados. |
| tabela | large_string | Número da tabela no SIDRA do IBGE (ex.: 10653). |
| titulo | large_string | Título da tabela oficial. |
| fonte | large_string | Fonte do combustível como a ANEEL publica (Potencial hidráulico, Gás natural…). |
| tipo | large_string | bruto ou derivado. |
| metodo | string | Método da estimativa (só derivados). |
| url_sidra | large_string | Página da tabela no SIDRA. |
| url_api | large_string | Consulta exata feita à API do SIDRA. |
| niveis | large_string | — |
| variaveis | large_string | — |
| classificacoes | large_string | — |
| periodo_ini | large_string | — |
| periodo_fim | large_string | — |
| unidade_original | large_string | Unidade publicada pela fonte (ex.: Mil Reais). |
| conversao | large_string | — |
| n_linhas | int64 | Número de linhas no arquivo. |
| parquet | large_string | Arquivo de destino. |
| coletado_em | large_string | Data e hora da coleta (UTC). |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/catalogo_fontes.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/catalogo_fontes.parquet' LIMIT 10")

## Como citar

Como citar

Atlas Mercados. Catálogo de proveniência dos dados de mercado. https://atlasmercados.com.br/dados/catalogo_fontes. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:catalogo_fontes · Permalink: [https://atlasmercados.com.br/dados/catalogo_fontes](https://atlasmercados.com.br/dados/catalogo_fontes) · [CSV](https://atlasmercados.com.br/dados/catalogo_fontes.csv) · [Parquet](https://atlasmercados.com.br/dados/catalogo_fontes.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
