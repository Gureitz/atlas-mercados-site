---
title: Contas Nacionais Trimestrais — PIB e componentes, taxas de volume e valores correntes — dados em Parquet e CSV — Atlas Mercados
description: Contas Nacionais Trimestrais — PIB e componentes, taxas de volume e valores correntes: 13.542 linhas, de 1996-01 a 2026-06, em Parquet e CSV (dado oficial como publicado), coletado em 16/10/2026.
url: https://atlasmercados.com.br/dados/pib_trimestral_cnt
---
<!-- https://atlasmercados.com.br/dados/pib_trimestral_cnt — versão Markdown da página -->

# Contas Nacionais Trimestrais — PIB e componentes, taxas de volume e valores correntes

IBGE · dado oficial como publicado · pib_trimestral_cnt

> Contas Nacionais Trimestrais — PIB e componentes, taxas de volume e valores correntes: 13.542 linhas, de 1996-01 a 2026-06, em Parquet e CSV (dado oficial como publicado), coletado em 16/10/2026.

- Linhas · 13.542 · 25 colunas

- Período · 1996-01 – 2026-06 · cobertura temporal

- Coletado em · 2026-10-16 · última ingestão

- Parquet · 0,1 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

Contas Nacionais Trimestrais do IBGE: taxas de variação em volume do PIB, do valor adicionado por atividade e dos componentes da demanda (contra o trimestre anterior com ajuste sazonal, contra o mesmo trimestre do ano anterior, acumulada em quatro trimestres e no ano; t/5932) e valores correntes em reais (t/1846), trimestral desde 1996.

## Colunas — 25 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| pesquisa | large_string | varejo ou ampliado (PMC). |
| tabela | int64 | Número da tabela no SIDRA do IBGE (ex.: 10653). |
| periodo_cod | large_string | Código do período no SIDRA (AAAA; AAAAMM nas mensais; AAAA0T nas trimestrais, ex.: 202602 = 2º tri). |
| ano | int64 | Ano de referência. |
| trimestre | int64 | Trimestre de referência (1 a 4), nas séries trimestrais. |
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

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/pib_trimestral_cnt.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/pib_trimestral_cnt.parquet' LIMIT 10")

## Tabelas de origem — 2

| Fonte | Período | Linhas |
|---|---|---|
| t/1846 Contas Nacionais Trimestrais — valores a preços correntes, por setor | 1996-01–2026-06 | 2.806 |
| t/5932 Contas Nacionais Trimestrais — taxas de variação do índice de volume, por setor | 1996-01–2026-06 | 10.736 |

## Como citar

Como citar

Atlas Mercados. Contas Nacionais Trimestrais — PIB e componentes, taxas de volume e valores correntes. https://atlasmercados.com.br/dados/pib_trimestral_cnt. Dados: IBGE. Acesso em [data de acesso].

Identificador da série: atlas-mercados:pib_trimestral_cnt · Permalink: [https://atlasmercados.com.br/dados/pib_trimestral_cnt](https://atlasmercados.com.br/dados/pib_trimestral_cnt) · [CSV](https://atlasmercados.com.br/dados/pib_trimestral_cnt.csv) · [Parquet](https://atlasmercados.com.br/dados/pib_trimestral_cnt.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
