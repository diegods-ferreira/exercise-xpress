import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { themes } from '@/config/styles/themes';
import { StylesFunctionParams } from '@/types';

type Theme = typeof themes.dark;

export type ButtonStylesProps = {
  variant?: 'primary' | 'secondary' | 'neutral' | 'link';
  size?: 'small' | 'normal';
  fitContent?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  androidRippleRadius?: number;
};

type TextProps = Pick<
  ButtonStylesProps,
  'variant' | 'isLoading' | 'isDisabled'
>;

type ButtonVariantConfig = {
  backgroundColor?: keyof Theme['colors'] | 'transparent';
  color: keyof Theme['colors'] | typeof themes.dark.colors.background;
};

export const buttonVariants: Record<
  ButtonStylesProps['variant'],
  ButtonVariantConfig
> = {
  primary: {
    backgroundColor: 'primary',
    color: themes.light.colors.bgOffset,
  },
  secondary: {
    backgroundColor: 'secondary',
    color: themes.light.colors.bgOffset,
  },
  neutral: {
    backgroundColor: 'bgOffset',
    color: 'text',
  },
  link: {
    color: 'secondary',
  },
};

export const buttonStyles = ({
  variant = 'primary',
  size = 'normal',
  fitContent = false,
  isLoading = false,
  isDisabled = false,
}: ButtonStylesProps) => {
  return ({ colors, measures }: StylesFunctionParams) => {
    const { backgroundColor } = buttonVariants[variant];

    let paddingVertical: ViewStyle['paddingVertical'] =
      size === 'small' ? measures.sm : measures.lg;

    let paddingHorizontal: ViewStyle['paddingHorizontal'] =
      size === 'small' ? measures.lg : measures['2xl'];

    if (variant === 'link') {
      paddingHorizontal = 0;
      paddingVertical = 0;
    }

    let opacity: ViewStyle['opacity'] = 1;

    if (isLoading) {
      opacity = 0.9;
    } else if (isDisabled) {
      opacity = 0.75;
    }

    return StyleSheet.create({
      container: {
        width: fitContent ? 'auto' : '100%',
        backgroundColor: colors[backgroundColor] || 'transparent',
        borderRadius: measures.xl,
        paddingVertical,
        paddingHorizontal,
        opacity,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  };
};

export const buttonTextStyles = ({
  variant = 'primary',
  isLoading = false,
  isDisabled = false,
}: TextProps) => {
  return ({ colors }: StylesFunctionParams) => {
    const { color } = buttonVariants[variant];

    let opacity: TextStyle['opacity'] = 1;

    if (isLoading) {
      opacity = 0.9;
    }

    if (isDisabled) {
      opacity = 0.75;
    }

    return StyleSheet.create({
      text: {
        color: variant.match(/primary|secondary/) ? color : colors[color],
        fontWeight: '600',
        textAlign: 'center',
        opacity,
      },
    });
  };
};
