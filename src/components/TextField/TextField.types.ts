import { IInput } from '../Input/Input.types'
import { ISharedMargin } from '../../shared/shared.styled'

export interface TextFieldProps extends IInput {
  label?: string | React.ReactNode;
  errorMessage?: string;
  fullWidth?: boolean;
  action?: React.ReactNode;
}