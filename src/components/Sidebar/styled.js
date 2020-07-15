import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: left;
  width: 20rem;
  background: var(--background);

  ${media.lessThan('large')`
    height: auto;
    padding: 0 1rem 1rem;
    width: 100%;
  `}
`;
