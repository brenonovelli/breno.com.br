---
date: 2020-08-10 15:30:00
title: Zu Loja - Customização na Loja Integrada
description: Projeto realizado para a Zu onde foi executado desenvolvimento de layout e tema para uma e-commerce na Loja Integrada
category: loja-integrada
background: 'rgba(255,84,20)'
image: '/assets/img/zu-loja/00_Home_Web.png'
---

A Zu Loja é uma marca que já atendo desde o começo. Participei da escolha do nome, da produção do logo e agora voltei para a reformulação da loja virtual. Antes ela estava no Wix e agora migraram para a Loja Integrada.

![Home da loja](/assets/img/zu-loja/00_Home_Web.png)

## Prefere vídeo?

Tem um vídeo onde eu uso a Zu Loja para mostrar como é possível ter uma Loja Integrada no plano grátis e mesmo assim ter um layout exclusivo, uma loja de primeira.

`youtube:ehfJZ_OFVws`

## Missão

      => Lançar o site novo em agosto.

Ok, vamos lá. Estudar como funciona a Loja Integrada, pensar numa linha visual para seguir e mandar brasa no código. Afinal, tempo para fazer layout e aprovar, não teríamos. Foi aquele velho trabalho raiz de frotnend, inspetor aberto de um lado VsCode do outro. Escolhi o pré-processador Sass para me auxiliar nessa jornada.

## Principais alterações

### 🧩 Largura 100% + carrossel de produtos com 4 produtos

A primeira alteração foi deixar o site ocupando a largura toda da página. Isso já trouxe um problema de cara, as imagens carregadas pelo carrossel de produtos eram pequenas demais quando escolhido para exibir 4 produtos no painel.

> A quantidade de produtos exibidas no carrossel da página inicial é definida pelo painel da Loja Integrada. Quanto mais produtos, mais o sistema reduz o tamanho da imagem entregue.

Deixei para exibir a menor quantidade de produtos no painel e fiz um script para o carrossel ser refeito ao carregar a página.  
**✅ Problema resolvido.**

![Carrossel de produtos da home](/assets/img/zu-loja/01_Carrossel_Produtos_Home.png)

### 🧩 Deixar carrinho mais bonito

A tela de carrinho recebeu uma atenção especial também. Afinal, ali que temos a parte mais delicada da loja. O cliente precisa se sentir bem. Sendo uma tela amigável, bonita, a experiência continuára agradável. Porém ali a imagem miniatura entregue pelo sistema era pequena demais, logo limitava o uso. Precisei fazer um outro script para nesse caso chamar outra imagem em tamanho maior.  
**✅ Problema resolvido.**

![Página de carrinho completa](/assets/img/zu-loja/03_Carrinho.png)
![Detalhe do item no carrinho](/assets/img/zu-loja/03_Carrinho_item_web.png)

No mobile o carrinho teve uma alteração. Ficou com uma cara de perfil de rede social. Ficou uma graça, né?

![Carrinho no mobile](/assets/img/zu-loja/03_Carrinho_mobile.png)

### 🧩 Página do produto

A Página do produto foi sem dúvida a página que mais deu trabalho. A ideia era ter algo bem diferente do tradicional. E o resultado ficou sensacional. Uma sidebar flutante, o fundo das imagens parecendo o papel de embrulho da marca, as miniaturas rolando no toque no mobile. Quase um stories do Instagram. 😅
Aqui também foi precisar usar um script para mudar o tamanho das imagens recebidas.
![04_Produto](/assets/img/zu-loja/04_Produto.png)

Detalhe da parte de descrição do produto
![04_Produto_descricao](/assets/img/zu-loja/04_Produto_descricao.png)

### 🧩 Rodapé

Cada detalhe da página recebeu uma atenção especial.

![05_Rodape](/assets/img/zu-loja/05_Rodape.png)

## 🤟 Sim, tem muito mais

E seguiremos atualizando a loja. Dê um pulinho e veja como ficou [www.zuloja.com.br](https://www.zuloja.com.br/).
