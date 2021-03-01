import { InputHTMLAttributes } from 'react';
import { ISharedMargin } from '../../shared/shared.styled'

export interface IInput extends InputHTMLAttributes<HTMLInputElement>, ISharedMargin {
  type?: 'text' | 'email' | 'password';
  error?: boolean;
}