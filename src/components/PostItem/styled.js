import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  display: flex;
  text-decoration: none;
  body#grid & {
    background-color: var(--background);
  }
  &:hover {
    color: var(--highlight);
  }
`;

export const PostItemWrapper = styled.section`
  align-items: center;

  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 1rem;
  `}
`;

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props =>
    props.background ? props.background : 'var(--highlight)'};
  border-radius: 50%;
  padding: 0.5rem;
  /* color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;*/
  ${media.lessThan('large')`
    border-radius: 0;
    padding: .2rem .5rem;
  `}
  body#grid & {
    margin-bottom: 1.5rem;
  }
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  ${media.lessThan('large')`
    margin: 0;
  `}
`;

export const PostItemInfoHeader = styled.div`
  display: flex;
  margin: 0.2rem 0 0.5rem;
`;

export const PostItemDate = styled.time`
  font-size: 0.875rem;
  color: var(--blueTerminal);
  font-weight: 600;
  margin-right: 0.5rem;
  span {
    color: var(--postColor);
  }
`;

export const PostItemCategory = styled.div`
  font-size: 0.875rem;
  color: rgb(254, 123, 252);
  font-weight: 600;
  span {
    font-family: 'FiraCode';
  }
`;

export const PostItemTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: var(--postColor);

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
  span {
    color: var(--highlight);
    font-size: 1rem;
  }
`;

export const PostItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--texts);
`;
