---
title: Safra do ano corrente — estimativas mensais do LSPA por produto e UF — dados em Parquet e CSV — Atlas Mercados
description: Safra do ano corrente — estimativas mensais do LSPA por produto e UF: 131.600 linhas, de 2024-09 a 2026-09, em Parquet e CSV (dado oficial como publicado), coletado em 18/10/2026.
url: https://atlasmercados.com.br/dados/safra_lspa
---
<!-- https://atlasmercados.com.br/dados/safra_lspa — versão Markdown da página -->

# Safra do ano corrente — estimativas mensais do LSPA por produto e UF

IBGE · dado oficial como publicado · safra_lspa

> Safra do ano corrente — estimativas mensais do LSPA por produto e UF: 131.600 linhas, de 2024-09 a 2026-09, em Parquet e CSV (dado oficial como publicado), coletado em 18/10/2026.

- Linhas · 131.600 · 18 colunas

- Período · 2024-09 – 2026-09 · cobertura temporal

- Coletado em · 2026-10-18 · última ingestão

- Parquet · 0,4 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

Levantamento Sistemático da Produção Agrícola do IBGE (SIDRA t/6588): área plantada, área colhida, produção e rendimento médio estimados a cada mês para a safra do ano, por produto (47 categorias: grãos, soja, milho 1ª e 2ª safras, café, cana, frutas…), Brasil e UFs, nos últimos 25 meses de referência.

## Colunas — 18 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| tabela | int64 | Número da tabela no SIDRA do IBGE (ex.: 10653). |
| data | timestamp[us] | Data de referência (1º dia do mês nas séries mensais). |
| periodo_cod | large_string | Código do período no SIDRA (AAAA; AAAAMM nas mensais; AAAA0T nas trimestrais, ex.: 202602 = 2º tri). |
| ano_safra | int32 | Ano da safra a que a estimativa se refere (o ano do mês de referência). |
| nivel_cod | large_string | Nível territorial: 1 Brasil, 2 Grande Região, 3 UF. |
| territorio_cod | large_string | Código IBGE do território (1 = Brasil; 35 = São Paulo…). |
| territorio_nome | large_string | Nome do território. |
| uf_sigla | large_string | Sigla da UF (vazio para Brasil e regiões). |
| produto_cod | large_string | Código do produto na classificação 48 do SIDRA (LSPA). |
| produto_nome | large_string | Produto como o IBGE publica. |
| produto | large_string | Nome curto do produto no projeto (ex.: soja, milho-2a-safra). |
| variavel_cod | int64 | Código da variável no SIDRA (ex.: 866 receita bruta de revenda). |
| variavel | large_string | Nome da variável como o SIDRA publica. |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |
| bruto | large_string | Texto original da célula no SIDRA, antes de qualquer leitura. |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/safra_lspa.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/safra_lspa.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/6588 LSPA — estimativa mensal da safra do ano: área, produção e rendimento por produto, Brasil e UFs | 2024-09–2026-09 | 131.600 |

## Como citar

Como citar

Atlas Mercados. Safra do ano corrente — estimativas mensais do LSPA por produto e UF. https://atlasmercados.com.br/dados/safra_lspa. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:safra_lspa · Permalink: [https://atlasmercados.com.br/dados/safra_lspa](https://atlasmercados.com.br/dados/safra_lspa) · [CSV](https://atlasmercados.com.br/dados/safra_lspa.csv) · [Parquet](https://atlasmercados.com.br/dados/safra_lspa.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
