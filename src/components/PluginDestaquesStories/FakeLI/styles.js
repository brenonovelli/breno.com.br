import styled from 'styled-components';

export const ContainerLI = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    font-family: 'Montserrat', sans-serif;
  }

  &.desktop {
    font-size: 12px;
  }

  padding-top: 3rem;
`;

export const HeaderLI = styled.header`
  padding: 1rem;

  img {
    width: 7rem;
    margin: 0 auto 1.5rem;
  }
`;

export const FakeSearchLI = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0.75rem;

  line-height: 1.5;
  border-bottom: 1px solid #011016;

  svg {
    width: 16px;
  }
`;

export const FakeCorpoLI = styled.div`
  display: flex;
`;

export const FakeProductLI = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${ContainerLI}.desktop & {
    max-width: 50%;
    padding: 0 1rem;
  }

  strong,
  span {
    padding: 0.5rem 0.5rem 0;
  }

  span {
    opacity: 0.5;
  }
`;

export const FooterFakeLI = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #011016;
  padding: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  z-index: 10;

  svg {
    width: 1.5rem;
    color: white;
  }
`;
