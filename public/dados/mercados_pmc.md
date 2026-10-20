---
title: Pesquisa Mensal de Comércio — índices de volume e receita por atividade e UF — dados em Parquet e CSV — Atlas Mercados
description: Pesquisa Mensal de Comércio — índices de volume e receita por atividade e UF: 276.448 linhas, de 2000-01 a 2026-08, em Parquet e CSV (dado oficial como publicado), coletado em 15/10/2026.
url: https://atlasmercados.com.br/dados/mercados_pmc
---
<!-- https://atlasmercados.com.br/dados/mercados_pmc — versão Markdown da página -->

# Pesquisa Mensal de Comércio — índices de volume e receita por atividade e UF

IBGE · dado oficial como publicado · mercados_pmc

> Pesquisa Mensal de Comércio — índices de volume e receita por atividade e UF: 276.448 linhas, de 2000-01 a 2026-08, em Parquet e CSV (dado oficial como publicado), coletado em 15/10/2026.

- Linhas · 276.448 · 20 colunas

- Período · 2000-01 – 2026-08 · cobertura temporal

- Coletado em · 2026-10-15 · última ingestão

- Parquet · 3,2 MB · baixar

- CSV · gzip · baixar (comprimido)

- Licença · CC BY 4.0 · termos e fontes

## O que é

Números-índice da PMC/IBGE (média de 2022 = 100), varejo e varejo ampliado, por atividade, Brasil e UFs, mensal desde 2000, com variações contra o mesmo mês e acumuladas em 12 meses.

## Colunas — 20 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| tabela | int64 | Número da tabela no SIDRA do IBGE (ex.: 10653). |
| pesquisa | large_string | varejo ou ampliado (PMC). |
| data | timestamp[us] | Data de referência (1º dia do mês nas séries mensais). |
| periodo_cod | large_string | Código do período no SIDRA (AAAA; AAAAMM nas mensais; AAAA0T nas trimestrais, ex.: 202602 = 2º tri). |
| nivel_cod | large_string | Nível territorial: 1 Brasil, 2 Grande Região, 3 UF. |
| territorio_cod | large_string | Código IBGE do território (1 = Brasil; 35 = São Paulo…). |
| territorio_nome | large_string | Nome do território. |
| uf_sigla | large_string | Sigla da UF (vazio para Brasil e regiões). |
| atividade_cod | large_string | Código da atividade na PMC (classificação 85) ou 'geral'. |
| atividade_nome | large_string | Nome da atividade na PMC. |
| tipo_indice_cod | large_string | Código do tipo de índice na PMC (classificação 11046). |
| tipo_indice | large_string | receita_nominal ou volume. |
| ajuste_sazonal | bool | Se o índice tem ajuste sazonal. |
| variavel_cod | int64 | Código da variável no SIDRA (ex.: 866 receita bruta de revenda). |
| variavel | large_string | Nome da variável como o SIDRA publica. |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |
| bruto | large_string | Texto original da célula no SIDRA, antes de qualquer leitura. |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/mercados_pmc.csv.gz", compression="gzip") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/mercados_pmc.parquet' LIMIT 10")

## Tabelas de origem — 3

| Fonte | Período | Linhas |
|---|---|---|
| t/8880 PMC — comércio varejista, índice geral, Brasil e UFs | 2000-01–2026-08 | 21.248 |
| t/8882 PMC — comércio varejista por atividade, Brasil e UFs | 2000-01–2026-08 | 112.288 |
| t/8883 PMC — comércio varejista ampliado por atividade, Brasil e UFs | 2000-01–2026-08 | 142.912 |

## Como citar

Como citar

Atlas Mercados. Pesquisa Mensal de Comércio — índices de volume e receita por atividade e UF. https://atlasmercados.com.br/dados/mercados_pmc. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:mercados_pmc · Permalink: [https://atlasmercados.com.br/dados/mercados_pmc](https://atlasmercados.com.br/dados/mercados_pmc) · [CSV](https://atlasmercados.com.br/dados/mercados_pmc.csv) · [Parquet](https://atlasmercados.com.br/dados/mercados_pmc.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
