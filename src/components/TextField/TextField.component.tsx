import React from 'react';
import {
  Wrapper,
  Info,
  Label,
  FormControl,
  InputAction,
  Error
} from './TextField.styles';

import Input from '../Input/Input.component';

import { TextFieldProps } from './TextField.types'

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      label,
      error,
      errorMessage,
      fullWidth,
      className,
      action,
      mt,
      mr,
      mb,
      ml,
      ...rest
    } = props;

    return (
      <Wrapper
        fullWidth={fullWidth}
        className={className}
        mt={mt}
        mr={mr}
        mb={mb}
        ml={ml}
      >
        <FormControl>
          <Info>
            {label ? <Label>{label}</Label> : null}
            {action ? <InputAction>{action}</InputAction> : null}
          </Info>
          <Input error={error} ref={ref} {...rest} />
        </FormControl>

        {error && errorMessage && <Error>{errorMessage}</Error>}
      </Wrapper>
    );
  }
);

export default TextField;
