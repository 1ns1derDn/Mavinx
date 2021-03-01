import styled, { css } from 'styled-components';
import { rgba, darken, lighten } from 'polished';
import { IButton } from './Button.types';
import { Link } from 'react-router-dom'

import { sharedMargin } from '../../shared/shared.styled'

const sharedStyles = css<IButton>`
  ${ sharedMargin };

  position: relative;
  display: ${({ fullWidth }) => (fullWidth ? 'block' : 'inline-block')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  min-height: 2.25rem;
  padding: 0.6875rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 300;
  text-decoration: none;
  background: none;
  opacity: ${({ disabled }) => (disabled ? 0.35 : 1)};
  border: none;
  border-left: ${({ border, theme }) => border ? `2px solid ${theme.palette.border}` : '0'};
  border-right: ${({ border, theme }) => border ? `2px solid ${theme.palette.border}` : '0'};
  border-radius: ${({ border }) => border ? 'none' : '4px'};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;

export const ContainedButton = styled.button`
  ${sharedStyles};

  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme, color }) => color || theme.palette.text.inverted};

  &:hover {
    background-color: ${({ theme }) => lighten(0.03, theme.palette.primary)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.primary};
  }

  &:focus {
    background-color: ${({ theme }) => lighten(0.05, theme.palette.primary)};
  }

  &:active {
    background-color: ${({ theme }) => darken(0.05, theme.palette.primary)};
  }
`;

export const OutlinedButton = styled.button`
  ${sharedStyles};

  color: ${({ theme, color }) => color || theme.palette.primary};
  border: 1px solid ${({ theme }) => theme.palette.primary};
  background: none;

  &:hover {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.05)};
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.palette.primary};
  }

  &:focus {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.12)};
  }

  &:active {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.25)};
  }
`;

export const ButtonLink = styled(Link)`
  ${sharedStyles};

  color: ${({ theme, color }) => color || theme.palette.primary};

  &:hover {
    background: ${({ theme }) => rgba(theme.palette.primary, 0.05)};
  }
`;
