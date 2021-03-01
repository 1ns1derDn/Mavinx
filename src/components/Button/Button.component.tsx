import React from 'react';
import {
  ContainedButton,
  OutlinedButton,
  ButtonLink,
} from './Button.styled';

import { IButton } from './Button.types';

const Button = React.forwardRef<null, IButton>(
  ({ variant = 'link', children, ...otherProps }, ref) => {
    const buttonRender = () => {
      switch (variant) {
        case 'contained': {
          return (
            <ContainedButton ref={ref} {...otherProps}>
              {children}
            </ContainedButton>
          );
        }
        case 'outlined': {
          return (
            <OutlinedButton ref={ref} {...otherProps}>
              {children}
            </OutlinedButton>
          );
        }

        default: {
          return (
            <ButtonLink ref={ref} {...otherProps}>
              {children}
            </ButtonLink>
          );
        }
      }
    };

    return buttonRender();
  }
);

export default Button;
