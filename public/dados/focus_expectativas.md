---
title: Expectativas de mercado (pesquisa Focus) — IPCA, Selic, PIB, câmbio e fiscal, por ano de referência — dados em Parquet e CSV — Atlas Mercados
description: Expectativas de mercado (pesquisa Focus) — IPCA, Selic, PIB, câmbio e fiscal, por ano de referência: 208.704 linhas, de 2015-01-02 a 2026-10-16, em Parquet e CSV (dado oficial como publicado), coletado em 19/10/2026.
url: https://atlasmercados.com.br/dados/focus_expectativas
---
<!-- https://atlasmercados.com.br/dados/focus_expectativas — versão Markdown da página -->

# Expectativas de mercado (pesquisa Focus) — IPCA, Selic, PIB, câmbio e fiscal, por ano de referência

Banco Central do Brasil · dado oficial como publicado · focus_expectativas

> Expectativas de mercado (pesquisa Focus) — IPCA, Selic, PIB, câmbio e fiscal, por ano de referência: 208.704 linhas, de 2015-01-02 a 2026-10-16, em Parquet e CSV (dado oficial como publicado), coletado em 19/10/2026.

- Linhas · 208.704 · 12 colunas

- Período · 2015-01-02 – 2026-10-16 · cobertura temporal

- Coletado em · 2026-10-19 · última ingestão

- Parquet · 2,1 MB · baixar

- CSV · texto · baixar

- Licença · ODbL 1.0 (Portal de Dados Abertos do BCB) · termos e fontes

## O que é

Estatísticas diárias das projeções das instituições na pesquisa Focus do Banco Central (API Olinda, ExpectativasMercadoAnuais), 2015 em diante: média, mediana, desvio-padrão, mínimo, máximo e número de respondentes para IPCA, PIB, Selic, câmbio, IGP-M, desocupação, resultado primário e dívida líquida, por ano de referência, nas bases de 30 dias e de 5 dias úteis, como o Banco Central publica.

## Colunas — 12 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| indicador | large_string | Nome do indicador na pesquisa Focus (IPCA, PIB Total, Selic, Câmbio…). |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| data | timestamp[us] | Data de referência (1º dia do mês nas séries mensais). |
| ano_referencia | int64 | Ano a que a projeção se refere. |
| base_calculo | int64 | Base de cálculo do BCB: 0 = respostas dos últimos 30 dias (a do Relatório Focus); 1 = últimos 5 dias úteis. |
| media | double | Média das projeções. |
| mediana | double | Mediana das projeções (o número do Relatório Focus). |
| desvio_padrao | double | Desvio-padrão das projeções. |
| minimo | double | Menor projeção. |
| maximo | double | Maior projeção. |
| respondentes | int64 | Número de instituições que responderam. |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/focus_expectativas.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/focus_expectativas.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/ExpectativasMercadoAnuais Expectativas de mercado anuais (pesquisa Focus) — Banco Central do Brasil | 2015-01-02–2026-10-16 | 208.704 |

## Como citar

Como citar

Atlas Mercados. Expectativas de mercado (pesquisa Focus) — IPCA, Selic, PIB, câmbio e fiscal, por ano de referência. https://atlasmercados.com.br/dados/focus_expectativas. Dados: Banco Central do Brasil. Acesso em [data de acesso].

Identificador da série: atlas-mercados:focus_expectativas · Permalink: [https://atlasmercados.com.br/dados/focus_expectativas](https://atlasmercados.com.br/dados/focus_expectativas) · [CSV](https://atlasmercados.com.br/dados/focus_expectativas.csv) · [Parquet](https://atlasmercados.com.br/dados/focus_expectativas.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
