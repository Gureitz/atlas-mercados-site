---
title: Pesquisa Industrial Anual — receita, valor da transformação industrial e pessoal por divisão CNAE e UF — dados em Parquet e CSV — Atlas Mercados
description: Pesquisa Industrial Anual — receita, valor da transformação industrial e pessoal por divisão CNAE e UF: 198.612 linhas, de 2007 a 2024, em Parquet e CSV (dado oficial como publicado), coletado em 18/10/2026.
url: https://atlasmercados.com.br/dados/economia_industria_pia
---
<!-- https://atlasmercados.com.br/dados/economia_industria_pia — versão Markdown da página -->

# Pesquisa Industrial Anual — receita, valor da transformação industrial e pessoal por divisão CNAE e UF

IBGE · dado oficial como publicado · economia_industria_pia

> Pesquisa Industrial Anual — receita, valor da transformação industrial e pessoal por divisão CNAE e UF: 198.612 linhas, de 2007 a 2024, em Parquet e CSV (dado oficial como publicado), coletado em 18/10/2026.

- Linhas · 198.612 · 25 colunas

- Período · 2007 – 2024 · cobertura temporal

- Coletado em · 2026-10-18 · última ingestão

- Parquet · 2,2 MB · baixar

- CSV · gzip · baixar (comprimido)

- Licença · CC BY 4.0 · termos e fontes

## O que é

Tabelas da PIA-Empresa/IBGE em formato longo: receita líquida de vendas, valor da transformação industrial (VTI), valor bruto da produção, custos, pessoal ocupado e salários das empresas industriais com 5 ou mais pessoas ocupadas, por seção e divisão CNAE (Brasil, t/10474), por UF (t/10455) e por UF × CNAE nas UFs que o IBGE publica (t/10454).

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
| cod_pai | string | cod do nível acima na hierarquia (vazio no total). |
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

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/economia_industria_pia.csv.gz", compression="gzip") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/economia_industria_pia.parquet' LIMIT 10")

## Tabelas de origem — 5

| Fonte | Período | Linhas |
|---|---|---|
| t/10454 PIA — unidades locais industriais (5 ou mais pessoas ocupadas), UF × CNAE (UFs publicadas) | 2024–2024 | 7.007 |
| t/10455 PIA — unidades locais industriais (5 ou mais pessoas ocupadas), Brasil, regiões e UFs | 2024–2024 | 231 |
| t/10474 PIA — empresas industriais com 5 ou mais pessoas ocupadas, por divisão e grupo CNAE, Brasil | 2024–2024 | 1.144 |
| t/1848 PIA — unidades locais industriais (5+ pessoas), Brasil e 6 UFs × divisões e grupos CNAE, 2007–2023 | 2007–2023 | 102.102 |
| t/1849 PIA — unidades locais industriais (5+ pessoas), 27 UFs × divisões CNAE, 2007–2023 | 2007–2023 | 88.128 |

## Como citar

Como citar

Atlas Mercados. Pesquisa Industrial Anual — receita, valor da transformação industrial e pessoal por divisão CNAE e UF. https://atlasmercados.com.br/dados/economia_industria_pia. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:economia_industria_pia · Permalink: [https://atlasmercados.com.br/dados/economia_industria_pia](https://atlasmercados.com.br/dados/economia_industria_pia) · [CSV](https://atlasmercados.com.br/dados/economia_industria_pia.csv) · [Parquet](https://atlasmercados.com.br/dados/economia_industria_pia.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
