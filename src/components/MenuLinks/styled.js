import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;

export const MenuLinksWrapper = styled.nav`
  margin: 2rem 0;

  ${media.lessThan('large')`
    order: 2;
    margin: 0;
    background: var(--mediumBackground);
    border-top: 1px solid var(--borders);
    transition: .3s ease-in-out all;
    overflow: hidden;

    position: fixed;
    bottom: 3.25rem;
    left: 0;
    width: 100vw;
    padding: .5rem;
    transform: ${props =>
      props.openMenu ? 'translateY(0)' : 'translateY(100%)'};
    opacity: .9rem;

    ${MenuLinksLink}{
      font-size: .875rem;
    }
    
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan('large')`
    display: flex;
    font-size: 1rem;
    justify-content: flex-start;
  `}
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: var(--highlight);
  }

  ${media.lessThan('large')`
    & + li {
      margin-left: 2rem;
    }
  `}
`;
