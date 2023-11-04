import { TextProps as RNTextProps } from 'react-native';

import * as S from './Typography.styles';

type TypographyProps = S.TextProps & RNTextProps;

export function Typography(props: TypographyProps) {
  return <S.Text {...props} />;
}
