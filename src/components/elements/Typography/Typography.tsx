import { TextProps as RNTextProps } from 'react-native';

import * as S from './Typography.styles';

type TypographyProps = RNTextProps & {
  variant?: S.TextProps['variant'];
};

export function Typography({ variant = 'body1', ...rest }: TypographyProps) {
  return <S.Text variant={variant} {...rest} />;
}
