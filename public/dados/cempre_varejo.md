---
title: CEMPRE — unidades locais, pessoal e salários do varejo por classe CNAE e UF — dados em Parquet e CSV — Atlas Mercados
description: CEMPRE — unidades locais, pessoal e salários do varejo por classe CNAE e UF: 15.456 linhas, de 2022 a 2024, em Parquet e CSV (dado oficial como publicado), coletado em 15/10/2026.
url: https://atlasmercados.com.br/dados/cempre_varejo
---
<!-- https://atlasmercados.com.br/dados/cempre_varejo — versão Markdown da página -->

# CEMPRE — unidades locais, pessoal e salários do varejo por classe CNAE e UF

IBGE · dado oficial como publicado · cempre_varejo

> CEMPRE — unidades locais, pessoal e salários do varejo por classe CNAE e UF: 15.456 linhas, de 2022 a 2024, em Parquet e CSV (dado oficial como publicado), coletado em 15/10/2026.

- Linhas · 15.456 · 21 colunas

- Período · 2022 – 2024 · cobertura temporal

- Coletado em · 2026-10-15 · última ingestão

- Parquet · 0,2 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

Cadastro Central de Empresas (IBGE, SIDRA t/9528), divisão 47 do CNAE 2.0, por UF.

## Colunas — 21 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| tabela | int64 | Número da tabela no SIDRA do IBGE (ex.: 10653). |
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
| variavel_cod | int64 | Código da variável no SIDRA (ex.: 866 receita bruta de revenda). |
| variavel | large_string | Nome da variável como o SIDRA publica. |
| chave | large_string | Nome curto da variável. |
| unidade | large_string | Unidade do valor depois da conversão (R$, Unidades, Pessoas, Número-índice, %). |
| unidade_original | large_string | Unidade publicada pela fonte (ex.: Mil Reais). |
| valor | double | Valor numérico (Mil Reais já multiplicado por 1.000 → R$). Vazio quando sigilo ou não divulgado. |
| situacao | large_string | ok, zero (o '-' da fonte), sigilo (X), nd (não divulgado/não disponível). |
| bruto | large_string | Texto original da célula no SIDRA, antes de qualquer leitura. |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/cempre_varejo.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/cempre_varejo.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/9528 CEMPRE — unidades locais, pessoal e salários do varejo (divisão 47) por UF | 2022–2024 | 15.456 |

## Como citar

Como citar

Atlas Mercados. CEMPRE — unidades locais, pessoal e salários do varejo por classe CNAE e UF. https://atlasmercados.com.br/dados/cempre_varejo. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:cempre_varejo · Permalink: [https://atlasmercados.com.br/dados/cempre_varejo](https://atlasmercados.com.br/dados/cempre_varejo) · [CSV](https://atlasmercados.com.br/dados/cempre_varejo.csv) · [Parquet](https://atlasmercados.com.br/dados/cempre_varejo.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
