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
    padding: 7rem 0 3.25rem 0;
  `}
`;
