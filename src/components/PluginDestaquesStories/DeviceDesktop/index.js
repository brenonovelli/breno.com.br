import React from 'react';
import { Home, User, Search, Cart } from 'styled-icons/boxicons-regular/';

import StoriesLI from '../StoriesLI';
import DeviceMacbook from '../../Devices/Macbook';
import * as S from '../FakeLI/styles';

import logo from '../../../images/b.logo.gif';
import product from '../../../images/fakeProductLi.jpg';
import product2 from '../../../images/fakeProductLi2.jpg';

const DeviceDesktop = ({ options, data }) => (
  <DeviceMacbook>
    <S.ContainerLI className="desktop">
      {options.local === 'cabecalho' && (
        <StoriesLI
          data={data}
          corPrincipal={
            options.corPrincipalChange ? options.corPrincipal : null
          }
          corControles={
            options.corControlesChange ? options.corControles : null
          }
          corSetasControles={
            options.corSetasControlesChange ? options.corSetasControles : null
          }
        />
      )}

      <S.HeaderLI>
        <img src={logo} alt="benove logo" />

        <S.FakeSearchLI>
          Buscar... <Search />
        </S.FakeSearchLI>
      </S.HeaderLI>

      {options.local === 'corpo' && (
        <StoriesLI
          data={data}
          corPrincipal={
            options.corPrincipalChange ? options.corPrincipal : null
          }
          corControles={
            options.corControlesChange ? options.corControles : null
          }
          corSetasControles={
            options.corSetasControlesChange ? options.corSetasControles : null
          }
        />
      )}

      <S.FakeCorpoLI>
        <S.FakeProductLI>
          <img src={product} alt="produto" />
          <strong>Black Lives Matter</strong>
          <span>Priceless</span>
        </S.FakeProductLI>

        <S.FakeProductLI>
          <img src={product2} alt="produto" />
          <strong>Use nappy.co</strong>
          <span>Photos free</span>
        </S.FakeProductLI>

        <S.FooterFakeLI>
          <Home />
          <Cart accumulate="1" />
          <User />
        </S.FooterFakeLI>
      </S.FakeCorpoLI>
    </S.ContainerLI>
  </DeviceMacbook>
);

export default DeviceDesktop;
