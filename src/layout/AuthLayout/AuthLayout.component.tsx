import React from 'react';
import { AuthLayoutStyled, AuthLayoutContainer } from './AuthLayout.styled'

const AuthLayout: React.FC = ({ children }) => (
  <AuthLayoutStyled>
    <AuthLayoutContainer>
      {children}
    </AuthLayoutContainer>
  </AuthLayoutStyled>
)

export default AuthLayout;