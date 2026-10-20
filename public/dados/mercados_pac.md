---
title: Pesquisa Anual de Comércio — receita, VAB, pessoal e unidades locais por segmento e UF — dados em Parquet e CSV — Atlas Mercados
description: Pesquisa Anual de Comércio — receita, VAB, pessoal e unidades locais por segmento e UF: 70.469 linhas, de 2007 a 2024, em Parquet e CSV (dado oficial como publicado), coletado em 15/10/2026.
url: https://atlasmercados.com.br/dados/mercados_pac
---
<!-- https://atlasmercados.com.br/dados/mercados_pac — versão Markdown da página -->

# Pesquisa Anual de Comércio — receita, VAB, pessoal e unidades locais por segmento e UF

IBGE · dado oficial como publicado · mercados_pac

> Pesquisa Anual de Comércio — receita, VAB, pessoal e unidades locais por segmento e UF: 70.469 linhas, de 2007 a 2024, em Parquet e CSV (dado oficial como publicado), coletado em 15/10/2026.

- Linhas · 70.469 · 23 colunas

- Período · 2007 – 2024 · cobertura temporal

- Coletado em · 2026-10-15 · última ingestão

- Parquet · 0,4 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

Tabelas da PAC/IBGE em formato longo: agrupamentos de atividade por UF (t/1407, t/10653) e classes CNAE do comércio no Brasil (t/1418, t/10645, t/10648), 2007 em diante, com os códigos de categoria do SIDRA preservados e a unidade original registrada.

## Colunas — 23 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| tabela | int64 | Número da tabela no SIDRA do IBGE (ex.: 10653). |
| serie | large_string | Série da pesquisa: 'antiga' (2007–2023) ou 'nova' (2024–, PAC reformulada). |
| ano | int64 | Ano de referência. |
| nivel_cod | large_string | Nível territorial: 1 Brasil, 2 Grande Região, 3 UF. |
| territorio_cod | large_string | Código IBGE do território (1 = Brasil; 35 = São Paulo…). |
| territorio_nome | large_string | Nome do território. |
| uf_sigla | large_string | Sigla da UF (vazio para Brasil e regiões). |
| classificacao | int64 | Classificação do SIDRA usada na linha (11066 agrupamentos da PAC; 11070 classes CNAE; 12762 CNAE 2.0). |
| categoria_cod | large_string | Código da categoria no SIDRA — a chave para conferir a célula na fonte. |
| categoria_nome | large_string | Nome da categoria como o SIDRA publica. |
| cnae_nivel | large_string | Nível da categoria: total, divisao, grupo, classe, classe_agregada, agrupamento_pac… |
| cnae_cod | large_string | Chave harmonizada do projeto entre as séries antiga e nova (ex.: 47.7, 4.4, 4754+4757+4759). |
| cnae_pai | large_string | cnae_cod do nível acima na hierarquia. |
| nome_curto | large_string | Nome curto da categoria. |
| emenda | large_string | Correspondência da categoria entre a série antiga e a nova: igual ou parcial. |
| variavel_cod | int64 | Código da variável no SIDRA (ex.: 866 receita bruta de revenda). |
| variavel | large_string | Nome da variável como o SIDRA publica. |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| unidade_original | large_string | Unidade publicada pela fonte (ex.: Mil Reais). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |
| bruto | large_string | Texto original da célula no SIDRA, antes de qualquer leitura. |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/mercados_pac.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/mercados_pac.parquet' LIMIT 10")

## Tabelas de origem — 5

| Fonte | Período | Linhas |
|---|---|---|
| t/10645 PAC — classes CNAE, Brasil: receita líquida, VAB, pessoal e salários | 2024–2024 | 184 |
| t/10648 PAC — classes CNAE, Brasil: receita bruta de revenda e composição da receita | 2024–2024 | 184 |
| t/10653 PAC — agrupamentos de atividade por Brasil, região e UF | 2024–2024 | 3.036 |
| t/1407 PAC — agrupamentos de atividade por UF de atuação (série antiga) | 2007–2023 | 64.515 |
| t/1418 PAC — classes CNAE, Brasil (série antiga) | 2007–2023 | 2.550 |

## Como citar

Como citar

Atlas Mercados. Pesquisa Anual de Comércio — receita, VAB, pessoal e unidades locais por segmento e UF. https://atlasmercados.com.br/dados/mercados_pac. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:mercados_pac · Permalink: [https://atlasmercados.com.br/dados/mercados_pac](https://atlasmercados.com.br/dados/mercados_pac) · [CSV](https://atlasmercados.com.br/dados/mercados_pac.csv) · [Parquet](https://atlasmercados.com.br/dados/mercados_pac.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
