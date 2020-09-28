import React from 'react';

import { Container } from './styles';

const Button = ({ children, template, ...rest }) => (
  <Container template={template} {...rest}>
    {children}
  </Container>
);

const ButtonLink = ({ children, template, ...rest }) => (
  <Container as="a" template={template} {...rest}>
    {children}
  </Container>
);

export { Button, ButtonLink };
