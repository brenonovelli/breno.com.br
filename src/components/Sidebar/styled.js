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
    width: 100%;
    transition:  .5s ease-in-out all;
    overflow: hidden;
    padding: ${props => (props.goingUp ? '0 1rem 1rem' : '0 1rem')};
    max-height: ${props => (props.goingUp ? '6.75rem' : '0')};
  `}
`;
