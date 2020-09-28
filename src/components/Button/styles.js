import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--highlight);
  color: var(--background);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin: 0 0.5rem 0.5rem 0;
  transition: 0.3s ease all;
  display: inline-flex;
  align-items: center;
  width: auto;

  &:hover {
    background: var(--blueTerminal);
  }

  svg {
    max-height: 1.25rem;
    width: 1.25rem;
    margin-right: 0.5rem;
  }

  ${props =>
    props.template === 'ameDigital' &&
    css`
      background: #ed0059;
      color: white;

      &:hover {
        background: ${shade(0.2, '#ed0059')};
      }
    `}

  ${props =>
    props.template === 'picpay' &&
    css`
      background: #11c76f;
      color: white;

      &:hover {
        background: ${shade(0.2, '#11c76f')};
      }
    `}

  ${props =>
    props.template === 'nuconta' &&
    css`
      background: #82269e;
      color: white;

      &:hover {
        background: ${shade(0.2, '#82269e')};
      }
    `}
`;
