---
title: Pulso mensal da indústria e dos serviços — PIM-PF e PMS por atividade e UF — dados em Parquet e CSV — Atlas Mercados
description: Pulso mensal da indústria e dos serviços — PIM-PF e PMS por atividade e UF: 299.568 linhas, de 2002-01 a 2026-08, em Parquet e CSV (dado oficial como publicado), coletado em 18/10/2026.
url: https://atlasmercados.com.br/dados/pulso_industria_servicos
---
<!-- https://atlasmercados.com.br/dados/pulso_industria_servicos — versão Markdown da página -->

# Pulso mensal da indústria e dos serviços — PIM-PF e PMS por atividade e UF

IBGE · dado oficial como publicado · pulso_industria_servicos

> Pulso mensal da indústria e dos serviços — PIM-PF e PMS por atividade e UF: 299.568 linhas, de 2002-01 a 2026-08, em Parquet e CSV (dado oficial como publicado), coletado em 18/10/2026.

- Linhas · 299.568 · 19 colunas

- Período · 2002-01 – 2026-08 · cobertura temporal

- Coletado em · 2026-10-18 · última ingestão

- Parquet · 2,5 MB · baixar

- CSV · gzip · baixar (comprimido)

- Licença · CC BY 4.0 · termos e fontes

## O que é

Números-índice mensais (média de 2022 = 100) da Pesquisa Industrial Mensal – Produção Física (por seções e atividades industriais desde 2002 e por grandes categorias econômicas) e da Pesquisa Mensal de Serviços (volume e receita nominal, por atividade, desde 2011), Brasil e UFs, com variação contra o mês anterior com ajuste sazonal, contra o mesmo mês do ano anterior e acumulada em 12 meses, como o IBGE publica.

## Colunas — 19 · tipo no Parquet

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

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/pulso_industria_servicos.csv.gz", compression="gzip") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/pulso_industria_servicos.parquet' LIMIT 10")

## Tabelas de origem — 5

| Fonte | Período | Linhas |
|---|---|---|
| t/5906 PMS — volume e receita nominal de serviços, índice geral, Brasil e UFs | 2011-01–2026-08 | 16.280 |
| t/8688 PMS — volume e receita nominal por atividades de serviços e subdivisões, Brasil | 2011-01–2026-08 | 27.376 |
| t/8693 PMS — volume e receita nominal por atividades de serviços, UFs | 2011-01–2026-08 | 40.896 |
| t/8887 PIM-PF — produção física industrial por grandes categorias econômicas, Brasil | 2002-01–2026-08 | 16.512 |
| t/8888 PIM-PF — produção física industrial por seções e atividades, Brasil e UFs | 2002-01–2026-08 | 198.504 |

## Como citar

Como citar

Atlas Mercados. Pulso mensal da indústria e dos serviços — PIM-PF e PMS por atividade e UF. https://atlasmercados.com.br/dados/pulso_industria_servicos. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:pulso_industria_servicos · Permalink: [https://atlasmercados.com.br/dados/pulso_industria_servicos](https://atlasmercados.com.br/dados/pulso_industria_servicos) · [CSV](https://atlasmercados.com.br/dados/pulso_industria_servicos.csv) · [Parquet](https://atlasmercados.com.br/dados/pulso_industria_servicos.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
