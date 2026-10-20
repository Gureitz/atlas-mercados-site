---
title: Pesquisa Anual de Serviços — receita, valor adicionado, pessoal e empresas por segmento e UF — dados em Parquet e CSV — Atlas Mercados
description: Pesquisa Anual de Serviços — receita, valor adicionado, pessoal e empresas por segmento e UF: 3.236 linhas, de 2007 a 2024, em Parquet e CSV (dado oficial como publicado), coletado em 20/10/2026.
url: https://atlasmercados.com.br/dados/economia_servicos_pas
---
<!-- https://atlasmercados.com.br/dados/economia_servicos_pas — versão Markdown da página -->

# Pesquisa Anual de Serviços — receita, valor adicionado, pessoal e empresas por segmento e UF

IBGE · dado oficial como publicado · economia_servicos_pas

> Pesquisa Anual de Serviços — receita, valor adicionado, pessoal e empresas por segmento e UF: 3.236 linhas, de 2007 a 2024, em Parquet e CSV (dado oficial como publicado), coletado em 20/10/2026.

- Linhas · 3.236 · 25 colunas

- Período · 2007 – 2024 · cobertura temporal

- Coletado em · 2026-10-20 · última ingestão

- Parquet · 0,1 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

Tabelas da PAS/IBGE em formato longo: receita bruta de serviços, receita líquida, valor adicionado, pessoal ocupado, salários e número de empresas dos serviços empresariais não financeiros, por segmento de atividade (Brasil, t/10758) e por agrupamento e UF (t/10762), com os códigos de categoria do SIDRA preservados.

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
| classificacao | int64 | Classificação do SIDRA usada na linha (11066 agrupamentos da PAC; 11070 classes CNAE; 12762 CNAE 2.0). |
| categoria_cod | large_string | Código da categoria no SIDRA — a chave para conferir a célula na fonte. |
| categoria_nome | large_string | Nome da categoria como o SIDRA publica. |
| cod | large_string | Código da categoria na hierarquia do projeto (CNAE '10', '47.7'; numeração da PAS '2.1'; slug do produto). |
| cod_pai | large_string | cod do nível acima na hierarquia (vazio no total). |
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

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/economia_servicos_pas.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/economia_servicos_pas.parquet' LIMIT 10")

## Tabelas de origem — 3

| Fonte | Período | Linhas |
|---|---|---|
| t/10758 PAS — dados gerais dos serviços empresariais não financeiros, por atividade, Brasil | 2024–2024 | 308 |
| t/10762 PAS — dados regionalizados, por atividade, Brasil, regiões e UFs | 2024–2024 | 2.112 |
| t/2581 PAS — resultados dos serviços empresariais não financeiros, 7 grandes grupos, série antiga 2007–2023 | 2007–2023 | 816 |

## Como citar

Como citar

Atlas Mercados. Pesquisa Anual de Serviços — receita, valor adicionado, pessoal e empresas por segmento e UF. https://atlasmercados.com.br/dados/economia_servicos_pas. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:economia_servicos_pas · Permalink: [https://atlasmercados.com.br/dados/economia_servicos_pas](https://atlasmercados.com.br/dados/economia_servicos_pas) · [CSV](https://atlasmercados.com.br/dados/economia_servicos_pas.csv) · [Parquet](https://atlasmercados.com.br/dados/economia_servicos_pas.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
