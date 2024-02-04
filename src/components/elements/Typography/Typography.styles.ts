import { StyleSheet } from 'react-native';

import { StylesFunctionParams } from '@/types';

export type TypographyStylesProps = {
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

const typographyVariants = {
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
} as const;

export const typographyStyles = ({ variant }: TypographyStylesProps) => {
  return ({ colors, fontSizes }: StylesFunctionParams) => {
    const { fontSize, fontWeight, color } = typographyVariants[variant];

    return StyleSheet.create({
      text: {
        fontSize: fontSizes[fontSize],
        fontWeight,
        color: colors[color],
      },
    });
  };
};
