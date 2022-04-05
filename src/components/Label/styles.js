import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 0.5rem;

  * {
    transition: 0.2s ease all;
  }

  &.centerY {
    justify-content: center;
  }

  &.fullWidth {
    display: block;
  }
  > strong {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1.125rem;

    .bullet {
      color: var(--highlight);
      border-radius: 0.25rem;
      display: inline-flex;
      margin-right: 0.25rem;
    }

    .requiredBagde {
      display: inline-flex;
      margin-left: 0.25rem;
      padding: 0.25rem 0.3rem;
      border-radius: 0.25rem;
      background-color: var(--highlight);
      color: var(--background);
      font-size: 0.625rem;
      font-weight: 700;
    }
  }
  > span {
    color: var(--highlight);
    opacity: 0.5;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;
