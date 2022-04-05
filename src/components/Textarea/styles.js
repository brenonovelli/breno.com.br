import styled, { css } from 'styled-components';

import Tooltip from './_elements/Tooltip';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: .5rem 1rem;
  border-radius: .25rem;
  border: 1px solid var(--borders);
  background: var(--mediumBackground);

  transition: 0.3s border-color ease-in-out;

  & + div {
    margin-top: 0.5rem;
  }

  input, textarea {
    background: var(--mediumBackground);
    color: var(--texts);
    flex: 1;
    border: 0;
    max-width: 100%;
    min-width: 2rem;


    &::placeholder {
      color: var(--borders) !important;
    }

    &:focus{
      outline: none;
    }
  }


  select {
    background: transparent;
    color: var(--mediumBackground);
    flex: 1;
    border: 0;
    max-width: 100%;

    &:focus {
      outline: none;
    }
  }

  > svg {
    margin-right: 1rem;
    color: var(--texts);
    transition: 0.2s all;
  }

  ${props =>
    props.isFilled &&
    css`
      border-color: var(--highlight);
      > svg {
        color: var(--highlight);
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--blueTerminal);
      > svg {
        color: var(--blueTerminal);
      }
    `}



  ${props =>
    props.isErrored &&
    css`
      padding: 0.5rem 0.5rem 0.5rem 1rem;
      border-color: var(--danger);
    `}
`;

export const Error = styled(Tooltip)`
  line-height: 1rem;
  height: 1rem;
  margin-left: 1rem;

  --mainColor: var(--danger);
  --mainColorText: var(--postColor);
`;
