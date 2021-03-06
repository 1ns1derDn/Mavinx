import React from 'react';
import {
  Headline1,
  Headline2,
  Body1,
  Subtitle1,
  Subtitle2
} from './Typography.styles';

import { ITypographyComponent } from './Typography.types'

const Typography: React.FC<ITypographyComponent> = ({
  variant,
  children,
  ...restProps
}) => {
  switch (variant) {
    case 'headline-1':
      return <Headline1 {...restProps}>{children}</Headline1>;
    case 'headline-2':
      return <Headline2 {...restProps}>{children}</Headline2>;
    case 'body':
      return <Body1 {...restProps}>{children}</Body1>;
    case 'subtitle-1':
      return <Subtitle1 {...restProps}>{children}</Subtitle1>;
    case 'subtitle-2':
      return <Subtitle2 {...restProps}>{children}</Subtitle2>;

    default:
      return <Body1 {...restProps}>{children}</Body1>;
  }
};

export default Typography;
