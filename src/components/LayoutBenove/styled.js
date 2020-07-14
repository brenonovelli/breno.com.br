import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const LayoutMain = styled.section`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
  transition: background, color 0.5s;

  body#grid & {
    grid-template-areas:
      'posts'
      'pagination';
  }

  ${media.lessThan('large')`
    padding: 7rem 0 3rem 0;
  `}
`;

export const Header = styled.header`
  color: var(--postColor);
  padding: 2rem 3rem;

  body#grid & {
    padding: 2rem 1rem;
  }

  h1,
  p {
    padding: 0 1.4rem;
    margin: 1rem auto;

    ${media.lessThan('large')`
      padding: 0 1rem;
    `}
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;

    ${media.lessThan('large')`
      font-size: 2.8rem;
      line-height: 1.1;
    `}
  }

  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--postColor);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
