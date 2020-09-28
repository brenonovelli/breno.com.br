import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const FormGroup = ({ children, className, ...rest }) => {
  return (
    <Container className={`formGroup ${className}`} {...rest}>
      {children}
    </Container>
  );
};

export default FormGroup;

FormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

FormGroup.defaultProps = {
  className: '',
};
