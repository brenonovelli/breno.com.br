import styled from 'styled-components';
import Img from 'gatsby-image';
import media from 'styled-media-query';

export const PostBenoveItemWrapper = styled.section`
  background-color: var(--background);

  flex-direction: row;
  align-items: center;

  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 1rem;
  `}
`;

export const PostBenoveItemFeaturedImage = styled(Img)`
  width: 100%;
  background: var(--texts);
  body#list & {
    max-width: 480px;
  }
`;

export const PostBenoveItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.lessThan('large')`
    margin: 0;
  `}

  body#list & {
    margin-left: 1.5rem;
  }
`;

export const PostBenoveItemTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0.25rem 0 0.5rem;
  color: var(--postColor);

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0 0.5rem;
  }

  span {
    color: var(--highlight);
    font-size: 1rem;
  }
`;

export const PostBenoveItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--texts);
  margin-bottom: 1rem;
`;

export const PostBenoveItemLinks = styled.nav`
  border-top: 1px solid var(--borders);
  padding-top: 0.5rem;
  margin-top: auto;

  text-align: left;
  font-size: 0.875rem;

  span {
    color: var(--texts);
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.675rem;
  }

  /* Green links */
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

  a {
    & + a {
      margin-left: 1.25rem;
    }
  }
`;
