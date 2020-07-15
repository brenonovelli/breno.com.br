import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialLinksWrapper = styled.nav`
  margin-top: auto;
  width: 100%;

  ${media.lessThan('large')`
    order: 0;
    border: solid var(--borders);
    border-width: 0 0 1px;
    padding: .5rem 0;
  `}
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;

  ${media.lessThan('large')`
    justify-content: space-evenly;
  `}
`;

export const SocialLinksItem = styled.li`
  & + li {
    margin-left: 2rem;
  }
`;

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;

  ${media.lessThan('large')`
    width: 20px;
    height: 20px;
  `};
`;
