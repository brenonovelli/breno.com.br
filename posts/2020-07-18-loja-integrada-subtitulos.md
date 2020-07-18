---
date: 2020-07-18 19:30:00
title: Subtítulo na home da Loja Integrada
description: Uma forma rápida de inserir um subtítulos nos seus títulos da home da sua loja integrada
category: loja-integrada
background: 'rgba(255,84,20)'
image: '/assets/img/loja-integrada/subtitle-on-home-example.png'
---

Um dos pedidos mais frequentes na comunidade da Loja Integrada é sobre como colocar subtítulo na home. Usando um pouco de javascript conseguimos resolver isso.

Basta acessar "Incluir código HTML".

![Menu do painel](/assets/img/loja-integrada/subtitle-on-home-menu.png)

Depois na caixa "Código do rodapé" insira trecho de código abaixo. Lembre-se de alterar o texto das mensagens.

![Caixa Código no rodapé](/assets/img/loja-integrada/subtitle-on-home-textarea.png)

Se não quiser exibir o subtítulo em algum momento basta alterar a propriedade _active_ para _false_.

## Vamos ao que interessa.

```html
<script>
  const titleOnHome = [
    {
      title: 'vitrine-lancamento',
      active: true, // true or false
      message: 'Subtítulo lançamento entra aqui.',
    },
    {
      title: 'vitrine-mas-vendido',
      active: true, // true or false
      message: 'Subtítulo mais vendidos entra aqui.',
    },
    {
      title: 'vitrine-destaque',
      active: true, // true or false
      message: 'Subtítulo mais vendidos entra aqui.',
    },
  ];

  titleOnHome.forEach(item => {
    if (item.active) {
      const vitrine = document.getElementsByClassName(item.title);
      const element = document.createElement('div');
      const textElement = document.createTextNode(item.message);
      element.appendChild(textElement);
      vitrine[0].appendChild(element);
    }
  });
</script>
```

![Exemplo do subtítulo](/assets/img/loja-integrada/subtitle-on-home-example.png)
