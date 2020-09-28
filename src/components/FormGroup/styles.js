import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  &:focus-within,
  &.opened {
    > label {
      color: var(--blueTerminal);
    }
  }

  margin-bottom: 0.5rem;

  &.border {
    padding: 0.5rem 0 1rem;
    border-bottom: 1px solid var(--borders);
  }

  &.inline {
    > div {
      margin-top: 0.5rem;
      display: flex;
      flex-flow: wrap;

      ${media.lessThan('large')`
        label{
          width: 100%;
        }
      `}
    }

    > label {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      flex: 1 1 100%;

      input {
        margin-right: 1rem;
      }
    }
  }
`;
