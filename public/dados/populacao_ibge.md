---
title: População residente — estimativas anuais e Censo 2022, Brasil e UFs — dados em Parquet e CSV — Atlas Mercados
description: População residente — estimativas anuais e Censo 2022, Brasil e UFs: 644 linhas, de 2001 a 2026, em Parquet e CSV (dado oficial como publicado), coletado em 16/10/2026.
url: https://atlasmercados.com.br/dados/populacao_ibge
---
<!-- https://atlasmercados.com.br/dados/populacao_ibge — versão Markdown da página -->

# População residente — estimativas anuais e Censo 2022, Brasil e UFs

IBGE · dado oficial como publicado · populacao_ibge

> População residente — estimativas anuais e Censo 2022, Brasil e UFs: 644 linhas, de 2001 a 2026, em Parquet e CSV (dado oficial como publicado), coletado em 16/10/2026.

- Linhas · 644 · 25 colunas

- Período · 2001 – 2026 · cobertura temporal

- Coletado em · 2026-10-16 · última ingestão

- Parquet · 0,0 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

População residente do Brasil e das UFs: estimativas anuais do IBGE para 1º de julho (t/6579, 2001 em diante) e a contagem do Censo Demográfico 2022 (t/4709).

## Colunas — 25 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| pesquisa | large_string | varejo ou ampliado (PMC). |
| tabela | int64 | Número da tabela no SIDRA do IBGE (ex.: 10653). |
| periodo_cod | large_string | Código do período no SIDRA (AAAA; AAAAMM nas mensais; AAAA0T nas trimestrais, ex.: 202602 = 2º tri). |
| ano | int64 | Ano de referência. |
| trimestre | null | Trimestre de referência (1 a 4), nas séries trimestrais. |
| nivel_cod | large_string | Nível territorial: 1 Brasil, 2 Grande Região, 3 UF. |
| territorio_cod | large_string | Código IBGE do território (1 = Brasil; 35 = São Paulo…). |
| territorio_nome | large_string | Nome do território. |
| uf_sigla | large_string | Sigla da UF (vazio para Brasil e regiões). |
| classificacao | null | Classificação do SIDRA usada na linha (11066 agrupamentos da PAC; 11070 classes CNAE; 12762 CNAE 2.0). |
| categoria_cod | large_string | Código da categoria no SIDRA — a chave para conferir a célula na fonte. |
| categoria_nome | large_string | Nome da categoria como o SIDRA publica. |
| cod | large_string | Código da categoria na hierarquia do projeto (CNAE '10', '47.7'; numeração da PAS '2.1'; slug do produto). |
| cod_pai | null | cod do nível acima na hierarquia (vazio no total). |
| profundidade | int64 | Nível na hierarquia: 0 total, 1 seção/segmento, 2 divisão, 3 grupo, 4 classe. |
| nome_curto | large_string | Nome curto da categoria. |
| faixa | null | Faixa de pessoal ocupado da empresa (PAIC), quando a tabela abre por porte. |
| variavel_cod | int64 | Código da variável no SIDRA (ex.: 866 receita bruta de revenda). |
| variavel | large_string | Nome da variável como o SIDRA publica. |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| unidade_original | large_string | Unidade publicada pela fonte (ex.: Mil Reais). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |
| bruto | large_string | Texto original da célula no SIDRA, antes de qualquer leitura. |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/populacao_ibge.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/populacao_ibge.parquet' LIMIT 10")

## Tabelas de origem — 2

| Fonte | Período | Linhas |
|---|---|---|
| t/4709 Censo Demográfico 2022 — população residente | 2022–2022 | 28 |
| t/6579 População residente estimada, Brasil e UFs | 2001–2026 | 616 |

## Como citar

Como citar

Atlas Mercados. População residente — estimativas anuais e Censo 2022, Brasil e UFs. https://atlasmercados.com.br/dados/populacao_ibge. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:populacao_ibge · Permalink: [https://atlasmercados.com.br/dados/populacao_ibge](https://atlasmercados.com.br/dados/populacao_ibge) · [CSV](https://atlasmercados.com.br/dados/populacao_ibge.csv) · [Parquet](https://atlasmercados.com.br/dados/populacao_ibge.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
