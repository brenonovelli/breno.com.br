import styled from 'styled-components';

export const Container = styled.section`
  .cor-principal,
  a,
  a:visited {
    color: ${props => (props.corPrincipal ? props.corPrincipal : '#011016')};
  }

  &.storiesWrapper {
    position: relative;
    width: min-content;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 !important;
    display: flex;
    max-width: 100%;

    &.storiesWrapperCabecalho {
      border-bottom: 1px solid rgba(200, 200, 200, 0.2);
      margin: 0 auto 16px;
    }

    * {
      box-sizing: border-box;
    }

    .storiesContainer {
      display: flex;
      justify-content: start;
      padding: 16px;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .storiesItem {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 0 4px;
        width: 74px;
        padding: 4px;
        position: relative;
        text-decoration: none;

        transition: 0.3s ease-in-out;

        &:hover,
        &:focus {
          text-decoration: none;
        }

        &:before {
          content: '';
          border: 2px solid;
          width: 74px;
          height: 74px;
          position: absolute;
          top: 0;
          left: 0;
          box-sizing: border-box;
          border-radius: 50%;
        }

        &.instagramColor {
          &:before,
          &:after {
            z-index: 0;
          }

          &:before {
            background: #f09433;
            background: -moz-linear-gradient(
              45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%
            );
            background: -webkit-linear-gradient(
              45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%
            );
            background: linear-gradient(
              45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
            border: 0;
          }

          &:after {
            content: '';
            background-color: #fff;
            width: calc(100% - 4px);
            padding-top: calc(100% - 4px);
            position: absolute;
            top: 2px;
            left: 2px;
            border-radius: 50%;
          }
        }

        img {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 8px;
          z-index: 1;
        }

        .badge {
          z-index: 2;
          position: absolute;
          top: 0;
          right: 0;
          background: #de0909;
          height: 20px;
          min-width: 20px;
          text-align: center;
          padding: 0;
          line-height: 20px;
          font-size: 12px;
          border-radius: 10px;
          padding: 0 0.25rem;
          text-shadow: 0;
          font-weight: normal;
          color: #fff;
        }

        .tag {
          z-index: 2;
          position: absolute;
          top: 50px;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0.2rem 0.35rem;
          border-radius: 0.25rem;
          background: #e86918;
          font-size: 10px;
          color: #fff;
          text-align: center;
        }
      }

      &:last-child a {
        margin-right: 16px;
      }
    }
  }

  &.mobile {
    max-width: 100vw;

    a {
      font-size: 10px;
    }

    /*  Ajustes pro react */
    max-width: 100%;

    button {
      display: none;
    }
  }

  &.desktop {
    padding: 0 20px !important;

    .storiesContainer {
      max-width: 100%;
      width: min-content;
      margin: 0 auto;
      padding: 32px 0;

      .storiesItem {
        a {
          width: 94px;
          margin: 0 8px;
          &.zoomOnHover:hover {
            transform: scale(1.17);
          }

          .tag {
            top: 67px;
          }
        }

        a:before {
          width: 94px;
          height: 94px;
        }

        img {
          width: 86px;
          height: 86px;
        }
      }
    }

    .icon-prev,
    .icon-next {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      top: 79px;
      transform: translateY(-50%);
      position: absolute;
      margin: 0 2px;
      background-color: ${props =>
        props.corControles ? props.corControles : '#eee'};
      color: ${props =>
        props.corSetasControles ? props.corSetasControles : '#011016'};
    }

    .icon-prev {
      left: 0;

      &:before {
        content: '<';
      }
    }
    .icon-next {
      right: 0;

      &:before {
        content: '>';
      }
    }
  }
`;
