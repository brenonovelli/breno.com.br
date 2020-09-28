import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import GlobalStyles from '../../styles/global';
import * as S from './styled';

const LayoutBenove = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => setOpenMenu(!openMenu);
  return (
    <S.LayoutWrapper>
      <TransitionPortal level="top">
        <Sidebar openMenu={openMenu} />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar handleMenu={handleMenu} />
      </TransitionPortal>
      <GlobalStyles />
    </S.LayoutWrapper>
  );
};

LayoutBenove.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutBenove;
