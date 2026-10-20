---
title: Sobre o Atlas Mercados — dados oficiais da economia e dos mercados do Brasil
description: O Atlas Mercados é um projeto independente que compila dados oficiais da economia e dos mercados do Brasil — demonstrações de 1.229 companhias abertas (CVM), PIB trimestral e tamanho de cada setor da economia — serviços, indústria, construção, agropecuária e comércio — por segmento e UF (IBGE), comércio exterior por UF e produto (MDIC), indicadores macroeconômicos, crédito e expectativas de mercado (Banco Central) — em formato estruturado para leitura e citação por pessoas e por inteligência artificial.
url: https://atlasmercados.com.br/sobre
---
<!-- https://atlasmercados.com.br/sobre — versão Markdown da página -->

# Sobre o Atlas Mercados

Projeto independente · dados oficiais · compilação sob [CC BY 4.0](https://atlasmercados.com.br/licenca)

> O Atlas Mercados é um projeto independente que compila dados oficiais da economia e dos mercados do Brasil — demonstrações de 1.229 companhias abertas (CVM), PIB trimestral e tamanho de cada setor da economia — serviços, indústria, construção, agropecuária e comércio — por segmento e UF (IBGE), comércio exterior por UF e produto (MDIC), indicadores macroeconômicos, crédito e expectativas de mercado (Banco Central) — em formato estruturado para leitura e citação por pessoas e por inteligência artificial.

## O que é

O Atlas Mercados compila dados brutos e estruturados da economia e dos mercados do Brasil, de fontes oficiais, num formato fácil de ler, citar e consultar por máquina — inclusive por assistentes e agentes de inteligência artificial. O produto é o dado: cada número traz a tabela, a variável, o período e a data de coleta de onde veio, e as páginas são uma vista sobre esses arquivos.

Não é um site de análise, opinião ou recomendação de investimento. Onde há estimativa — como a receita de cada segmento do varejo por estado —, ela fica em arquivo próprio, marcada como derivado, com o método e os insumos declarados.

## O que tem

- [Companhias abertas](https://atlasmercados.com.br/screener): demonstrações financeiras de 1.229 companhias registradas na CVM, 2010–2026, com valor de mercado (B3) e múltiplos.

- [Mercados](https://atlasmercados.com.br/mercados): tamanho do comércio por segmento (classes CNAE) e por UF, da Pesquisa Anual de Comércio do IBGE, com o pulso mensal da PMC.

- [Indicadores](https://atlasmercados.com.br/indicadores): Selic, IPCA, dólar, desemprego, dívida, reservas, PIB e outros, com a série histórica de cada um.

- [Mapa](https://atlasmercados.com.br/mapa): PIB por UF (IBGE) e indicadores de 211 países (Banco Mundial).

- [Dados para download](https://atlasmercados.com.br/dados) em Parquet e CSV, com o catálogo de proveniência.

## Princípios

- Fonte primária. CVM, B3, Banco Central, IBGE, SEC, Banco Mundial — nenhum número vem de agregador.

- Proveniência por célula. Código da categoria, texto original e unidade original preservados.

- Bruto separado do derivado. Estimativa nunca entra no arquivo de dado oficial.

- Metodologia aberta. Toda conta que o site faz está descrita na [metodologia](https://atlasmercados.com.br/metodologia).

- Aberto a robôs. Busca, resposta e treino de modelos são permitidos; cite a fonte.

## Como acessar

- Páginas HTML renderizadas no servidor, com dados estruturados (schema.org) e uma frase-resposta no topo.

- Arquivos inteiros em [/dados](https://atlasmercados.com.br/dados) (Parquet e CSV).

- JSON por série e por segmento: /indicador/selic.json, /api/mercados/pac/47.7.json.

- Índices para máquinas: [/llms.txt](https://atlasmercados.com.br/llms.txt) e [/sitemap.xml](https://atlasmercados.com.br/sitemap.xml).

Contato. Correções, dúvidas e sugestões: [contato@atlasmercados.com.br](mailto:contato@atlasmercados.com.br). Encontrou um número errado? A correção entra no dado e no catálogo, com a data. O Atlas Mercados é um projeto independente, sem vínculo com as fontes oficiais que compila.
