import React from 'react';
import PropTypes from 'prop-types';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

import * as S from './styled';

const Sidebar = ({ benove }) => (
  <S.SidebarWrapper benove={benove}>
    <Profile />
    <MenuLinks />

    {!benove && <SocialLinks />}
  </S.SidebarWrapper>
);

Sidebar.propTypes = {
  benove: PropTypes.bool,
};

Sidebar.defaultProps = {
  benove: false,
};

export default Sidebar;
