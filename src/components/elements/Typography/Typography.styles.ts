import { TextStyle } from 'react-native';

import styled, { css } from 'styled-components/native';

import { themes } from '@/config/styles/themes';

type Theme = typeof themes.dark;

type TypographyVariantConfig = {
  fontSize: keyof Theme['fontSizes'];
  fontWeight: TextStyle['fontWeight'];
  color: keyof Theme['colors'];
};

export type TextProps = {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'body1'
    | 'body2'
    | 'caption';
};

const typographyVariants: Record<
  TextProps['variant'],
  TypographyVariantConfig
> = {
  h1: {
    fontSize: '3xl',
    fontWeight: '700',
    color: 'text',
  },
  h2: {
    fontSize: '2xl',
    fontWeight: '600',
    color: 'text',
  },
  h3: {
    fontSize: 'lg',
    fontWeight: '500',
    color: 'text',
  },
  subtitle1: {
    fontSize: 'base',
    fontWeight: '400',
    color: 'textSecondary',
  },
  subtitle2: {
    fontSize: 'sm',
    fontWeight: '400',
    color: 'textSecondary',
  },
  subtitle3: {
    fontSize: 'xs',
    fontWeight: '300',
    color: 'textSecondary',
  },
  body1: {
    fontSize: 'base',
    fontWeight: '400',
    color: 'text',
  },
  body2: {
    fontSize: 'sm',
    fontWeight: '400',
    color: 'text',
  },
  caption: {
    fontSize: 'xs',
    fontWeight: '400',
    color: 'text',
  },
};

export const Text = styled.Text<TextProps>(({ theme, variant }) => {
  const { fontSize, fontWeight, color } = typographyVariants[variant];

  return css`
    font-size: ${theme.fontSizes[fontSize]}px;
    font-weight: ${fontWeight};
    color: ${theme.colors[color]};
  `;
});
