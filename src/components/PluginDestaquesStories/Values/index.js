import React from 'react';

import { Cart } from 'styled-icons/boxicons-regular/';

import FormGroup from '../../FormGroup';
import { ButtonLink } from '../../Button';

const Values = () => (
  <>
    <div className="column">
      <FormGroup>
        <h2>Gostou? Vejas como adquirir.</h2>
        <p>Pode usar cashback, usar seu cartão ou fazer transfência.</p>
        <ButtonLink
          href="https://www.ame.plus/pague/4idXdltA6dLzeID6q0ksb8"
          template="ameDigital"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cart />
          Pagar com Ame R$ 39,99
        </ButtonLink>
        <ButtonLink
          href="https://app.picpay.com/user/brenonovelli/39.99"
          template="picpay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cart />
          Pagar com PicPay R$ 39,99
        </ButtonLink>
        <ButtonLink
          href="https://nubank.com.br/pagar/5rduq/l8JGo8KnaP"
          template="nuconta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cart />
          Trasnfira para minha NuConta
        </ButtonLink>

        <p>
          Gostaria de usar outra forma de pagamento? Fale comigo em{' '}
          <a
            href="mailto:breno@breno.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            breno@breno.com.br.
          </a>
          .
        </p>
      </FormGroup>
    </div>

    <div className="column">
      <h2>E depois do pagamento?</h2>
      <p className="feature">
        Após o pagamento, envie um e-mail para{' '}
        <a
          href="mailto:breno@breno.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          breno@breno.com.br.
        </a>{' '}
        com o comprovante de pagamento e a URL da sua loja. Em até 48h você
        receberá o script e seu token de uso para uma loja. Imagens,
        configurações e ajustes além dos disponibilizados nessa página não estão
        inclusos no valor de R$39,99.
      </p>
      <p>
        Esse plugin é feito com JavaScript moderno. Pode não ter suporte para
        alguns navegadores antigos.
      </p>
    </div>
  </>
);

export default Values;
