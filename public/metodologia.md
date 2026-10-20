---
title: Metodologia — como os dados do Atlas Mercados são coletados e tratados
description: Os dados do Atlas Mercados são guardados como as fontes oficiais publicam; as únicas transformações são a conversão de escala para reais, a montagem de séries trimestrais a partir de documentos acumulados (o 4º trimestre é DFP menos os três ITRs) e a harmonização de códigos entre versões de uma pesquisa — estimativas ficam em arquivo próprio, marcadas como derivadas.
url: https://atlasmercados.com.br/metodologia
---
<!-- https://atlasmercados.com.br/metodologia — versão Markdown da página -->

# Metodologia

Como cada fonte é coletada, o que é transformado e o que não é

> Os dados do Atlas Mercados são guardados como as fontes oficiais publicam; as únicas transformações são a conversão de escala para reais, a montagem de séries trimestrais a partir de documentos acumulados (o 4º trimestre é DFP menos os três ITRs) e a harmonização de códigos entre versões de uma pesquisa — estimativas ficam em arquivo próprio, marcadas como derivadas.

## Regra geral

O dado é guardado como a fonte publica. As transformações são poucas e declaradas: conversão de escala monetária para reais, montagem de séries trimestrais a partir de documentos acumulados, e harmonização de códigos entre versões de uma mesma pesquisa. Toda conta além disso — participação, soma de UFs, estimativa — aparece na página marcada como cálculo do site, e estimativa vai para arquivo próprio com tipo = derivado.

## Companhias abertas (CVM)

- Fonte: CVM Dados Abertos — DFP (anual) e ITR (trimestral), consolidado e individual, desde 2010.

- Escala: valores em mil ou milhão de reais são convertidos para reais.

- Versões: vale a última reapresentação de cada documento; só o exercício corrente de cada entrega.

- Quarto trimestre: a CVM não publica o 4T isolado. Ele é calculado como DFP menos a soma dos três ITRs e marcado como "4T derivado".

- Fluxo de caixa: a DFC sai acumulada desde janeiro; o trimestre é a diferença entre acumulados.

- Plano de contas: lucro e patrimônio são localizados pela descrição da conta, porque bancos e seguradoras usam códigos diferentes.

- Consolidado: preferido; quando a companhia entrega o consolidado zerado, usa-se o individual.

- Valor de mercado: último preço da B3 (COTAHIST) × ações informadas à CVM, com trava de plausibilidade contra o patrimônio.

## Mercados (IBGE)

- Fontes: Pesquisa Anual de Comércio (PAC), Pesquisa Mensal de Comércio (PMC), Cadastro Central de Empresas (CEMPRE) e Contas Regionais, pela API do SIDRA.

- Conversão única: "Mil Reais" × 1.000 → R$; a unidade original fica registrada.

- Sinais da fonte: "X" é sigilo; "-" é zero, exceto na PAC regional, que imprime "-" nas células que não divulga — com total do território positivo, a célula é lida como não divulgada. O texto original fica na coluna bruto.

- Duas aberturas: por classe CNAE a PAC publica só o Brasil; por UF, só agrupamentos próprios (farmácia, material de construção e móveis caem juntos em 4.4).

- Duas séries: a PAC foi reformulada em 2024; a coluna emenda diz se a correspondência entre as séries é igual ou parcial, e o site não calcula a variação entre elas.

- PMC: é número-índice (média de 2022 = 100); dá direção, não tamanho.

- Estimativa por UF (derivado): receita nacional da classe × participação da UF nos salários da classe no CEMPRE, com a razão contra o agrupamento publicado.

## Macro (Banco Central e outros)

- Banco Central: séries do SGS como publicadas (Selic efetiva, CDI, IPCA, IPCA-15, INPC, IGP-M, câmbio, IBC-Br, desocupação, dívida bruta, reservas). IPCA, INPC e desocupação são do IBGE e IGP-M da FGV, distribuídos pelo SGS.

- Leituras da série: "um ano antes", máximo e mínimo são lidos da própria série; nas séries diárias, o histórico usa o último dia de cada mês.

- Mundo: indicadores do Banco Mundial, último ano disponível por país (varia por indicador).

## Atualização e limites

- Datas: o sitemap informa a data do dado de cada página, não a da publicação do site.

- Defasagem: PAC do ano t sai em t+2; VAB por atividade dois anos depois do PIB; PMC por UF um a dois meses depois do Brasil.

- Erros: a proveniência está em cada número para que qualquer um confira na fonte; correções entram no dado e no catálogo, com a data.

- Não é recomendação: o site compila dados e explicita método; não publica preço-alvo nem opinião de investimento.
