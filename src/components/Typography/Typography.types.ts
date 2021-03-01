import { ISharedMargin } from '../../shared/shared.styled'

export interface ITypographyComponent extends React.HTMLAttributes<HTMLElement>, ISharedMargin {
  variant?: 'headline-1' | 'headline-2' | 'body' | 'subtitle-1' | 'subtitle-2';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div' | 'p' | 'strong' | 'b' | 'em' | 'e';
  color?: string;
}