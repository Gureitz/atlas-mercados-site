---
title: Usinas de geração de energia elétrica e seus proprietários (ANEEL, SIGA) — dados em Parquet e CSV — Atlas Mercados
description: Usinas de geração de energia elétrica e seus proprietários (ANEEL, SIGA): 25.624 linhas, referência 2026-10-01, em Parquet e CSV (dado oficial como publicado), coletado em 26/10/2026.
url: https://atlasmercados.com.br/dados/aneel_siga
---
<!-- https://atlasmercados.com.br/dados/aneel_siga — versão Markdown da página -->

# Usinas de geração de energia elétrica e seus proprietários (ANEEL, SIGA)

ANEEL · dado oficial como publicado · aneel_siga

> Usinas de geração de energia elétrica e seus proprietários (ANEEL, SIGA): 25.624 linhas, referência 2026-10-01, em Parquet e CSV (dado oficial como publicado), coletado em 26/10/2026.

- Linhas · 25.624 · 17 colunas

- Período · 2026-10-01 – 2026-10-01 · cobertura temporal

- Coletado em · 2026-10-26 · última ingestão

- Parquet · 1,0 MB · baixar

- CSV · texto · baixar

- Licença · ODbL 1.0 (portal de dados abertos da ANEEL) · termos e fontes

## O que é

Sistema de Informações de Geração da ANEEL: todos os empreendimentos de geração (~25 mil), em operação, em construção e não iniciados, com potência outorgada e fiscalizada, garantia física, fonte, tipo, UF e os proprietários com participação e CNPJ — uma linha por usina × proprietário, lida do texto da fonte.

## Colunas — 17 · tipo no Parquet

| Coluna | Tipo | O que é |
|---|---|---|
| ceg | large_string | Código Único do Empreendimento de Geração (CEG) da ANEEL — a chave da usina. |
| nome | large_string | Nome da série. |
| uf | large_string | UF principal da usina. |
| tipo | large_string | bruto ou derivado. |
| fase | large_string | Operação, Construção ou Construção não iniciada. |
| origem | large_string | Origem do combustível (Hídrica, Eólica, Solar, Fóssil, Biomassa, Nuclear). |
| fonte | large_string | Fonte do combustível como a ANEEL publica (Potencial hidráulico, Gás natural…). |
| outorga | large_string | Tipo de outorga (concessão, autorização, registro). |
| entrada_operacao | timestamp[us] | Data de entrada em operação. |
| potencia_outorgada_kw | double | Potência outorgada, kW. |
| potencia_fiscalizada_kw | int64 | Potência fiscalizada, kW. |
| garantia_fisica_kw | double | Garantia física, kW médios (vazia para quem não tem). |
| proprietarios | large_string | Texto original dos proprietários e participações, como o SIGA publica. |
| participacao | double | Fatia do proprietário na usina (fração, 0–1), lida do texto da fonte. |
| dono | large_string | Nome do proprietário. |
| dono_cnpj | large_string | CNPJ do proprietário (14 dígitos). |
| regime | large_string | Regime de exploração do proprietário (PIE, APE, SP, REG…). |

## Como carregar

import pandas as pd df = pd.read_csv("https://atlasmercados.com.br/dados/aneel_siga.csv") # ou, direto no Parquet, com DuckDB: import duckdb duckdb.sql("SELECT * FROM 'https://atlasmercados.com.br/dados/aneel_siga.parquet' LIMIT 10")

## Tabelas de origem — 1

| Fonte | Período | Linhas |
|---|---|---|
| t/siga ANEEL — SIGA, empreendimentos de geração e proprietários | 2026-10-01–2026-10-01 | 25.624 |

## Como citar

Como citar

Atlas Mercados. Usinas de geração de energia elétrica e seus proprietários (ANEEL, SIGA). https://atlasmercados.com.br/dados/aneel_siga. Dados: ANEEL. Acesso em [data de acesso].

Identificador da série: atlas-mercados:aneel_siga · Permalink: [https://atlasmercados.com.br/dados/aneel_siga](https://atlasmercados.com.br/dados/aneel_siga) · [CSV](https://atlasmercados.com.br/dados/aneel_siga.csv) · [Parquet](https://atlasmercados.com.br/dados/aneel_siga.parquet) · [licença CC BY 4.0](https://atlasmercados.com.br/licenca)
