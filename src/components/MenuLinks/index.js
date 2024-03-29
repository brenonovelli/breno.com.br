import React from 'react';

import getThemeColor from '../../utils/getThemeColor';
import links from './content';

import * as S from './styled';

const MenuLinks = ({ openMenu }) => (
  <S.MenuLinksWrapper openMenu={openMenu}>
    <S.MenuLinksList>
      {links.map(link => (
        <S.MenuLinksItem key={link.label}>
          <S.MenuLinksLink
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
