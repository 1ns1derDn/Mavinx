import styled, { css } from 'styled-components';
import { IInput as InputProps } from './Input.types';
import EyeOnIcon from './ic_eye_on.svg';
import EyeOffIcon from './ic_eye_off.svg';

import { sharedMargin } from '../../shared/shared.styled'

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface StyledInputProps {
  type: InputProps['type'];
  error?: InputProps['error'];
  showPassword?: boolean;
}

export const StyledInput = styled.input.attrs((props: StyledInputProps) => {
  let inputSwitchableType: StyledInputProps['type'];

  if (props.type === 'password') {
    inputSwitchableType = props.showPassword ? 'text' : 'password';
  } else {
    inputSwitchableType = props.type;
  }

  return { type: inputSwitchableType, inputDisplayType: props.type };
}) <StyledInputProps>`
  width: 100%;
  border: ${({ error, theme }) =>
    error
      ? `1px solid ${theme.palette.error}`
      : `1px solid ${theme.palette.grey}`};
  border-radius: 4px;
  height: 40px;
  padding: ${({ inputDisplayType }) =>
    inputDisplayType === 'password' ? '8px 46px 8px 12px' : '8px 12px'};
  outline: none;
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  color: ${({ theme }) => theme.palette.text.main};
  caret-color: ${({ theme }) => theme.palette.primary};

  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.darkGrey};
  }
`;

export const IconWrapper = styled.div`
  ${sharedMargin};

  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-0, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  padding: 9px;
  cursor: pointer;
`;

const iconStyles = css`
  height: 22px;
  width: 22px;
`;

export const StyledEyeOnIcon = styled.span`
  ${iconStyles};

  background-image: url(${EyeOnIcon});
`;

export const StyledEyeOffIcon = styled.span`
  ${iconStyles};

  background-image: url(${EyeOffIcon});
`;
