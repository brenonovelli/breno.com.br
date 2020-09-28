import React from 'react';

import { Cart, Cog } from 'styled-icons/boxicons-regular/';
import { Binoculars } from 'styled-icons/boxicons-solid/';
import { Youtube } from 'styled-icons/boxicons-logos/';

import FormGroup from '../../FormGroup';
import { Button, ButtonLink } from '../../Button';

const Intro = ({ scrollToConfigSection }) => (
  <div className="column">
    <dl>
      <dt>Destaques</dt>
      <dd>100% customizável via opções e classes CSS.</dd>
      <dd>Insira badge no estilo notificações. (detalhe vermelho)</dd>
      <dd>Insira tag para uma breve interação. (detalhe laranja)</dd>
      <dd>Fácil configuração. Veja o formulário abaixo.</dd>
      <dd>Dois locais de exibição: corpo ou cabeçalho.</dd>
      <dd>Escolha exibir apenas em dispositivos móveis.</dd>
    </dl>

    <dl>
      <dt>Por que usar?</dt>
      <dd>Trazer um visual moderno para sua loja.</dd>
      <dd>Avise sobre novos produtos facilmente.</dd>
      <dd>
        Um outro ponto importante sobre notificações{' '}
        <a
          href="https://olhardigital.com.br/noticia/voce-pode-estar-viciado-em-notificacoes-entenda/94095#:~:text=Isso%20ocorre%20pois%20os%20sons,papel%20fundamental%20em%20nosso%20comportamento."
          target="_blank"
          rel="noopener noreferrer"
        >
          aqui
        </a>
        .
      </dd>
      <dd>Tags ajudam a passar o recado rápido.</dd>
    </dl>

    <FormGroup>
      <ButtonLink
        href="https://benove.lojaintegrada.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Binoculars /> Veja online
      </ButtonLink>

      <ButtonLink
        href="https://www.youtube.com/brenonovelli"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube /> Veja um vídeo explicando
      </ButtonLink>
    </FormGroup>

    <hr />

    <FormGroup>
      <h2>Quer configurar ou apenas testar?</h2>
      <Button type="button" onClick={scrollToConfigSection}>
        <Cog />
        Quero configurar
      </Button>
      <Button type="button" onClick={scrollToConfigSection}>
        <Cog />
        Quero testar
      </Button>
    </FormGroup>
  </div>
);

export default Intro;
