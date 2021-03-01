import styled from 'styled-components';
import { ILogotype } from './Logotype.types'

export const LogotypeStyled = styled.h1<ILogotype>`
  padding-right: ${({ border }) => border ? '30px' : '0'};
  border-right: ${({ border, theme }) => border ? `2px solid ${theme.palette.border}` : '0'};
`;