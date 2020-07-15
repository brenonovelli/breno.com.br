import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  margin: 2rem 0;

  ${media.lessThan('large')`
    order: 2;
    margin: 1rem 0 0;
    border: solid var(--borders);
    border-width: 1px 0;
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

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;
