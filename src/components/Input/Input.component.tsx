import React, { useState } from 'react';

import {
  InputWrapper,
  IconWrapper,
  StyledInput,
  StyledEyeOnIcon,
  StyledEyeOffIcon
} from './Input.styles';

import { IInput } from './Input.types';

const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ type = 'text', ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPasswordField = type === 'password';

    const handleShowPasswordToggle = () => {
      setShowPassword(!showPassword);
    };

    return (
      <InputWrapper>
        <StyledInput
          type={type}
          showPassword={showPassword}
          ref={ref}
          {...rest}
        />
        {isPasswordField && (
          <IconWrapper onClick={handleShowPasswordToggle}>
            {showPassword ? <StyledEyeOnIcon /> : <StyledEyeOffIcon />}
          </IconWrapper>
        )}
      </InputWrapper>
    );
  }
);

export default Input;
