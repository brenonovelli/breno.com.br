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

  ${media.lessThan('large')`
    padding: 0 .5rem;
  `}

  body#grid & {
    ${media.greaterThan('large')`
      padding: 2rem 1rem;
    `}
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    padding: 0 1.4rem;
    margin: 1rem auto;

    ${media.lessThan('large')`
      font-size: 2rem;
      line-height: 1.1;
      padding: 0 1rem;
      margin: 1rem auto 0;
    `}
  }

  p {
    padding: 0 1.4rem;
    margin: 1rem auto;
    line-height: 1.25;
    color: var(--texts);

    ${media.lessThan('large')`
      margin: 0 auto 1rem;
      padding: 0 1rem;
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
