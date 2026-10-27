---
title: Produção de petróleo e gás natural por campo e mês (ANP) — dados em Parquet e CSV — Atlas Mercados
description: Produção de petróleo e gás natural por campo e mês (ANP): 5.075 linhas, de 2025-01-01 a 2026-08-01, em Parquet e CSV (dado oficial como publicado), coletado em 26/10/2026.
url: https://atlasmercados.com.br/dados/anp_producao
---
<!-- https://atlasmercados.com.br/dados/anp_producao — versão Markdown da página -->

# Produção de petróleo e gás natural por campo e mês (ANP)

ANP · dado oficial como publicado · anp_producao

> Produção de petróleo e gás natural por campo e mês (ANP): 5.075 linhas, de 2025-01-01 a 2026-08-01, em Parquet e CSV (dado oficial como publicado), coletado em 26/10/2026.

- Linhas · 5.075 · 11 colunas

- Período · 2025-01-01 – 2026-08-01 · cobertura temporal

- Coletado em · 2026-10-26 · última ingestão

- Parquet · 0,2 MB · baixar

- CSV · texto · baixar

- Licença · CC BY 4.0 · termos e fontes

## O que é

Produção por poço publicada pela ANP (mar, arquivo anual; terra, trimestral), somada por campo e mês: óleo, condensado, gás associado e não associado, água e barris de óleo equivalente pela regra da ANP, com UF, bacia e ambiente. O arquivo do 2º trimestre de 2026 em terra não traz abril de 2026.

## Colunas — 11 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| mes | timestamp[us] | Mês (só no recorte mensal). |
| estado | large_string | UF do campo, como a ANP grafa. |
| bacia | large_string | Bacia sedimentar. |
| campo | large_string | Nome do campo de produção. |
| ambiente | large_string | MAR ou TERRA. |
| oleo_m3 | double | Produção de óleo, m³. |
| condensado_m3 | double | Produção de condensado, m³. |
| gas_associado_mil_m3 | double | Gás associado, mil m³ ('Mm³' na fonte). |
| gas_nao_associado_mil_m3 | double | Gás não associado, mil m³. |
| agua_m3 | double | Água produzida, m³. |
| boe | double | Barris de óleo equivalente no mês: (óleo + condensado + gás em mil m³) × 6,2898 (regra da ANP). |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/anp_producao.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/anp_producao.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/producao_poco ANP — produção de petróleo e gás por campo e mês | 2025-01-01–2026-08-01 | 5.075 |

## Como citar

Como citar

Atlas Mercados. Produção de petróleo e gás natural por campo e mês (ANP). https://atlasmercados.com.br/dados/anp_producao. Dados: ANP. Acesso em [data de acesso].

Identificador da série: atlas-mercados:anp_producao · Permalink: [https://atlasmercados.com.br/dados/anp_producao](https://atlasmercados.com.br/dados/anp_producao) · [CSV](https://atlasmercados.com.br/dados/anp_producao.csv) · [Parquet](https://atlasmercados.com.br/dados/anp_producao.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
