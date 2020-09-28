import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Label = ({ children, htmlFor }) => (
  <Container htmlFor={htmlFor}>{children}</Container>
);

export default Label;

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  htmlFor: PropTypes.string,
};

Label.defaultProps = {
  htmlFor: '',
};
