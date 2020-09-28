import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 10;

  --mainColor: var(--primary);
  --mainColorText: var(--white);

  svg {
    color: var(--mainColor);
    height: 1rem;
    width: 1rem;
  }

  span {
    width: 10rem;
    text-align: center;
    background: var(--mainColor);
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;

    transition: all 0.4s;

    position: absolute;
    bottom: calc(100% + 0.75rem);
    right: -0.8rem;
    /* left: 50%; */
    /* transform: translateX(-50%); */

    color: var(--mainColorText);

    &::before {
      position: absolute;
      top: 100%;
      right: 1rem;
      /* left: 50%; */
      /* transform: translateX(-50%); */
      border-color: var(--mainColor) transparent;
      border-width: 0.375rem 0.375rem 0 0.375rem;
      border-style: solid;

      border-bottom-width: 0;
      content: '';
    }
  }

  svg {
    &:hover + span {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 767px) {
    span {
      opacity: 1;
      visibility: visible;
      background: transparent;
      color: var(--mainColor);
      width: auto;
      text-align: right;
      white-space: nowrap;
      font-size: 0.75em;

      &::before {
        display: none;
      }
    }
  }
`;
