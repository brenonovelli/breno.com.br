import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Profile } from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

import * as S from './styled';

const Sidebar = ({ template, openMenu }) => {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp]);

  return (
    <S.SidebarWrapper template={template} goingUp={goingUp}>
      <Profile />
      <MenuLinks openMenu={openMenu} />

      {template !== 'benove' && <SocialLinks />}
    </S.SidebarWrapper>
  );
};

Sidebar.propTypes = {
  template: PropTypes.string,
};

Sidebar.defaultProps = {
  template: null,
};

export default Sidebar;
