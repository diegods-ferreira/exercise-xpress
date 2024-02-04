import { Text, TextProps } from 'react-native';

import { useStyles } from '@/hooks';

import { TypographyStylesProps, typographyStyles } from './Typography.styles';

type TypographyProps = Partial<TypographyStylesProps> & TextProps;

export function Typography({
  variant = 'body1',
  style,
  ...rest
}: TypographyProps) {
  const { styles } = useStyles(typographyStyles({ variant }));

  return <Text {...rest} style={[styles.text, style]} />;
}
