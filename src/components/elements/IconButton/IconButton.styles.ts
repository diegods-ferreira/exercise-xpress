import { StyleSheet, ViewStyle } from 'react-native';

import { themes } from '@/config/styles/themes';
import { StylesFunctionParams } from '@/types';

type Theme = typeof themes.dark;

export type IconButtonStylesProps = {
  variant?: 'primary' | 'secondary' | 'neutral';
  isDisabled?: boolean;
};

type ButtonVariantConfig = {
  backgroundColor?: keyof Theme['colors'] | 'transparent';
  color: keyof Theme['colors'] | typeof themes.dark.colors.background;
};

export const buttonVariants: Record<
  IconButtonStylesProps['variant'],
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
};

export const iconButtonStyles = ({
  variant = 'neutral',
  isDisabled,
}: IconButtonStylesProps) => {
  return ({ colors, measures }: StylesFunctionParams) => {
    const opacity: ViewStyle['opacity'] = isDisabled ? 0.75 : 1;

    const { backgroundColor, color } = buttonVariants[variant];

    return StyleSheet.create({
      container: {
        padding: measures.lg,
        backgroundColor: colors[backgroundColor],
        borderRadius: measures.xl,
        opacity,
      },

      icon: {
        color: variant.match(/primary|secondary/) ? color : colors[color],
        opacity: isDisabled ? 0.75 : 1,
      },
    });
  };
};
