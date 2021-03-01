import React from 'react';
import { LogotypeStyled } from './Logotype.styled';
import { ILogotype } from './Logotype.types';

const Logotype: React.FC<ILogotype> = (props) => (
  <LogotypeStyled {...props}>
    Exprts
  </LogotypeStyled>
)

export default Logotype;