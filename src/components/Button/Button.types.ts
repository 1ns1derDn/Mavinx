import { ISharedMargin } from '../../shared/shared.styled'

export interface IButton extends React.HTMLAttributes<HTMLElement>, ISharedMargin {
  fullWidth?: boolean;
  disabled?: boolean;
  variant?: 'contained' | 'outlined' | 'link';
  as?: 'div' | 'a' | 'Link' | 'button' | 'input';
  color?: string;
  to?: string;
  border?: boolean;
  value?: string;
  type?: string;
}