import React from 'react';
import { ContainerStyled } from './Container.styled';

const Container: React.FC = ({ children }) => (
  <ContainerStyled>
    {children}
  </ContainerStyled>
);

export default Container;