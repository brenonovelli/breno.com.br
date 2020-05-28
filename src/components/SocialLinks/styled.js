import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialLinksWrapper = styled.nav`
  margin-top: auto;
  width: 100%;

  ${media.lessThan('large')`
    /* display: none; */
    border: solid var(--borders);
    border-width: 1px 0;
    padding: .5rem 0;
    margin: 1rem 0;
  `}
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

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
`;
