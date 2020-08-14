---
date: 2020-08-12 15:30:00
title: OhMyDB - Catálogo de filmes consumindo a OMDb API
description: As vezes um teste para uma empresa pode ser uma ótima oportunidade de aprender
category: javascript
background: 'rgba(255,201,0)'
image: '/asstes/img/ohmydb/01.home.png'
---

> OhMyDB é um app catálogo de filmes e séries que consome a OMDb API - The Open Movie Database. Você pode consultar a sinopse do filme, ver detalhes e salva-lo na sua lista de favoritos. O nome OhMyDB é apenas uma brincadeira com o nome da API - O M db.

---

Aplicação: [ohmydb.netlify.app](https://ohmydb.netlify.app/)  
Repositório: [github.com/brenonovelli/OhMyDb](https://github.com/brenonovelli/OhMyDb)

---

Não sou muito fã de testes para empresas. Porém em certos casos eles podem ser válidos e eu topo.

Semana passada recebi um desafio para fazer um catálogo de filmes consumindo a OMDb API. Recebi algumas telas como base.

Do que seria uma simples aplicação consumindo uma API e exibindo o resultado na tela, saiu uma aplicação React um pouco mais recheada usando:

- Usando, claro, meu queridinho Styled Components. 💅
- Context do React para envolver a aplicação
  Primeiro comecei usando o Redux mas logo vi que o famoso matar formiga com bazuca estava em prática.
- Testes unitários com Jest / @testing-library/react
- Testes end-to-end com Cypress
- Função de favoritar filmes persistindo no local storage com um hook dedicado só pra ela.
- Responsivo praticamente sem media-queries. As media-queries foram usadas apenas para melhorar a experiência do usuário.

Próximo passo agora é passar tudo para Typrescript que venho estudando no último mês.

## Telas da aplicações

![Home](/asstes/img/ohmydb/01.home.png)
![Tela de pesquisa](/asstes/img/ohmydb/02.search_page.png)
![Tela de pesquisa - Detalhe do hover](/asstes/img/ohmydb/02.search_page_hover_item.png)
![Tela de pesquisa - Mobile](/asstes/img/ohmydb/02.search_page_mobile.png)
![Filme](/asstes/img/ohmydb/03.movie_page.png)
![Filme favoritado ](/asstes/img/ohmydb/03.movie_page_fav.png)
![Filme favoritado detalhe para remover](/asstes/img/ohmydb/03.movie_page_hover_remove_fav.png)
![Filme mobile](/asstes/img/ohmydb/03.movie_page_mobile.png)
![Favoritos](/asstes/img/ohmydb/04.favourite_page.png)
