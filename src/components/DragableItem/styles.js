import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  > svg {
    max-height: 1.25rem;
    min-width: 1.25rem;
    width: 1.25rem;
    margin-right: 0.5rem;
    cursor: move;
  }

  background: var(--mediumBackground);
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: var(--texts);
  margin: 0 0 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  width: 100%;
  min-width: 360px;

  .infos {
    display: flex;
    align-items: center;
    max-width: calc(100% - 4rem);

    img {
      width: 2.5rem;
      height: 2.5rem;
      min-width: 2.5rem;
      min-height: 2.5rem;
      border-radius: 50%;
      object-fit: cover;
      overflow: hidden;
      background: var(--background);
      font-size: 8px;
      text-align: center;
    }

    strong {
      margin-left: 0.5rem;
      display: block;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;

      a {
        display: inline-flex;
        background: var(--highlight);
        color: var(--background);
        padding: 0.125rem 0.25rem;
        border-radius: 0.25rem;
        margin-bottom: 0.25rem;
        font-size: 12px;
      }

      span {
        display: block;
        font-size: 0.75rem;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100%;
      }
    }
  }

  button {
    margin-left: auto;
    padding-left: 2rem;

    ${media.greaterThan('large')`
      transition: 0.2s ease-in-out all;
      transform: translateX(110%);
      opacity: 0;
    `}

    ${media.lessThan('large')`
      padding-left: 1rem;
    `}

    svg {
      width: 1rem;
      color: var(--danger);
    }
  }

  &:hover {
    button {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;
