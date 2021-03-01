import styled, { css } from 'styled-components';
import { sharedMargin } from '../../shared/shared.styled';

const typographyStyles = css`
  ${sharedMargin};
  font-weight: 400;
  line-height: 1.6;
`;

export const Headline1 = styled.h1`
  ${typographyStyles};

  font-size: 1.125rem;
  font-weight: 700;
`;

export const Headline2 = styled.h2`
  ${typographyStyles};

  font-size: 0.875rem;
  font-weight: 700;
`;

export const Body1 = styled.p`
  ${typographyStyles};

  font-size: 0.875rem;
`;

export const Subtitle1 = styled.h3`
  ${typographyStyles};

  font-size: 0.75rem;
  font-weight: 500;
`;

export const Subtitle2 = styled.h4`
  ${typographyStyles};

  font-size: 0.75rem;
`;
