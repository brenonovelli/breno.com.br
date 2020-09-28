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

export const Header = styled.header`
  color: var(--postColor);
  padding: 2rem 3rem;
  width: 100%;
  flex: 1 1 0;

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

export const Section = styled.section`
  display: flex;
  flex-flow: wrap;
  padding: 2rem;
  margin: 0 auto;

  ${media.lessThan('large')`
    padding: 1rem 0;
  `}

  &.copyCodeSection {
    pre {
      position: relative;
      max-width: 100vw;
      width: 100%;

      ${media.lessThan('large')`
        overflow: visible;
        width: 100vw;
      `}

      code {
        max-width: 100vw;
        font-size: 0.75rem;
        line-height: 1.25!important;
        display: block;

        ${media.lessThan('large')`
        font-size: 0.675rem;
        line-height: 1.25!important;
      `}
      }

      .copyCode {
        position: absolute;
        top: 1rem;
        right: 1rem;
        margin: 0;

        ${media.lessThan('large')`
          top: 0;
          transform: translateY(-50%);
        `}
      }
    }
  }

  p {
    color: var(--texts);
    margin-bottom: 1rem;
    line-height: 1.25;

    ${media.lessThan('large')`
      line-height: 1.5;
    `}

    &.feature {
      color: var(--postColor);
    }

    + fieldset {
      margin-top: 1rem;
    }
  }



  h2,
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--postColor);
    margin: 0 0 0.5rem;
  }

  h3 {
    font-size: 1.25rem;
    color: var(--highlight);
    font-weight: 500;
  }

  header {
    margin-bottom: 1rem;
    width: 100%;

    ${media.lessThan('large')`
      padding: 0 1rem;
    `}

    &.withButton {
      display: flex;
      justify-content: space-between;

      button {
        font-size: 0.75em;
      }
    }
  }

  .column {
    padding: 1rem;
    max-width: 100vw;

    header {
      margin-bottom: 0;

      ${media.lessThan('medium')`
        padding: 0;
      `}
    }

    ${media.lessThan('medium')`
      &.deviceMovbile{
        height: 30rem;
        overflow: hidden;

        .marvel-device{
          max-width: 100vw;
        }
      }
    `}

   
      &.deviceMovbile{
        .marvel-device{
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          zoom: .8;
        }
      }
   

    ${media.greaterThan('medium')`
      max-width: 50%;
    `}

    &.flex {
      &__1 {
        flex: 1;
      }
    }
  }

  ${media.greaterThan('huge')`
    .marvel-device.macbook {
        zoom: 1;
      }
  `}

  ${media.lessThan('huge')`
    .marvel-device.macbook {
        zoom: .85;
      }
  `}

  ${media.lessThan('large')`
    .marvel-device.macbook {
        zoom: .6;
      }
  `}

  ${media.lessThan('medium')`
    .marvel-device.macbook {
        zoom: .3;
      }
  `}

  hr {
    border: 0;
    height: 1px;
    margin: 1rem 0;
  }

  dl {
    margin: 1rem 0;
    min-width: 18rem;

    dt {
      color: var(--highlight);
      margin: 0 0 0.5rem;
    }
    dd {
      margin: 0 0 0.5rem;
      transition: color 0.2s ease;
      &:before {
        content: '-';
        margin-right: .25rem;
      }

      &:hover {
        color: var(--postColor);
      }
    }
  }
`;
