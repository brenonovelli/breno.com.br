import React from 'react';
import { DragIndicator } from 'styled-icons/material';

import { Container } from './styles';

const DragableItem = ({ children }) => (
  <Container>
    <DragIndicator className="handle" />
    {children}
  </Container>
);

export default DragableItem;
