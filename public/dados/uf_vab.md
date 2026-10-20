---
title: Contas Regionais — PIB e VAB por atividade, Brasil e UFs — dados em Parquet e CSV — Atlas Mercados
description: Contas Regionais — PIB e VAB por atividade, Brasil e UFs: 4.312 linhas, de 2002 a 2023, em Parquet e CSV (dado oficial como publicado), coletado em 15/10/2026.
url: https://atlasmercados.com.br/dados/uf_vab
---
<!-- https://atlasmercados.com.br/dados/uf_vab — versão Markdown da página -->

# Contas Regionais — PIB e VAB por atividade, Brasil e UFs

IBGE · dado oficial como publicado · uf_vab

> Contas Regionais — PIB e VAB por atividade, Brasil e UFs: 4.312 linhas, de 2002 a 2023, em Parquet e CSV (dado oficial como publicado), coletado em 15/10/2026.

- Linhas · 4.312 · 14 colunas

- Período · 2002 – 2023 · cobertura temporal

- Coletado em · 2026-10-15 · última ingestão

- Parquet · 0,1 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

PIB, impostos e valor adicionado bruto da agropecuária, indústria, serviços e administração pública, por UF, 2002 em diante (IBGE, SIDRA t/5938).

## Colunas — 14 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| tabela | int64 | Número da tabela no SIDRA do IBGE (ex.: 10653). |
| nivel_cod | large_string | Nível territorial: 1 Brasil, 2 Grande Região, 3 UF. |
| territorio_cod | large_string | Código IBGE do território (1 = Brasil; 35 = São Paulo…). |
| territorio_nome | large_string | Nome do território. |
| uf_sigla | large_string | Sigla da UF (vazio para Brasil e regiões). |
| ano | int64 | Ano de referência. |
| variavel_cod | int64 | Código da variável no SIDRA (ex.: 866 receita bruta de revenda). |
| variavel | large_string | Nome da variável como o SIDRA publica. |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| unidade_original | large_string | Unidade publicada pela fonte (ex.: Mil Reais). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |
| bruto | large_string | Texto original da célula no SIDRA, antes de qualquer leitura. |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/uf_vab.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/uf_vab.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/5938 Contas Regionais — PIB, impostos e VAB por atividade, Brasil e UFs | 2002–2023 | 4.312 |

## Como citar

Como citar

Atlas Mercados. Contas Regionais — PIB e VAB por atividade, Brasil e UFs. https://atlasmercados.com.br/dados/uf_vab. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:uf_vab · Permalink: [https://atlasmercados.com.br/dados/uf_vab](https://atlasmercados.com.br/dados/uf_vab) · [CSV](https://atlasmercados.com.br/dados/uf_vab.csv) · [Parquet](https://atlasmercados.com.br/dados/uf_vab.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
