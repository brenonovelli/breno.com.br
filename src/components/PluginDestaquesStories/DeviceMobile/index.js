import React from 'react';
import { Home, User, Search, Cart } from 'styled-icons/boxicons-regular/';

import StoriesLI from '../StoriesLI';
import DeviceiPhoneX from '../../Devices/iPhoneX';
import * as S from '../FakeLI/styles';

import logo from '../../../images/b.logo.gif';
import product from '../../../images/fakeProductLi.jpg';

const DeviceMobile = ({ options, data }) => (
  <div className="column deviceMovbile">
    <DeviceiPhoneX>
      <S.ContainerLI>
        {options.local === 'cabecalho' && (
          <StoriesLI
            mobile
            data={data}
            local={options.local}
            instagramColor={options.instagramColor}
            zoomNoHover={options.zoomNoHover}
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
            mobile
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

        <S.FakeProductLI>
          <img src={product} alt="produto" />
          <strong>Black Lives Matter</strong>
          <span>Priceless</span>
        </S.FakeProductLI>

        <S.FooterFakeLI>
          <Home />
          <Cart accumulate="1" />
          <User />
        </S.FooterFakeLI>
      </S.ContainerLI>
    </DeviceiPhoneX>
  </div>
);

export default DeviceMobile;
