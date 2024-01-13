import styled, { css } from 'styled-components/native';

import { themes } from '@/config/styles/themes';

import { Typography } from '../Typography/Typography';

type Theme = typeof themes.dark;

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'link';
  size?: 'small' | 'normal';
  fitContent?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  androidRippleRadius?: number;
};

type TextProps = {
  buttonVariant: ButtonProps['variant'];
  isLoading: boolean;
  isDisabled: boolean;
};

type ButtonVariantConfig = {
  backgroundColor: keyof Theme['colors'] | 'transparent';
  color: keyof Theme['colors'] | typeof themes.dark.colors.background;
};

export const buttonVariants: Record<
  ButtonProps['variant'],
  ButtonVariantConfig
> = {
  primary: {
    backgroundColor: 'primary',
    color: themes.dark.colors.background,
  },
  secondary: {
    backgroundColor: 'bgOffset',
    color: 'text',
  },
  link: {
    backgroundColor: 'transparent',
    color: 'primary',
  },
};

const getButtonStyles = ({
  variant = 'primary',
  size = 'normal',
  fitContent = false,
  isLoading = false,
  isDisabled = false,
}: ButtonProps) =>
  css(({ theme }) => {
    const { backgroundColor } = buttonVariants[variant];

    let opacity = 1;

    if (isLoading) {
      opacity = 0.9;
    } else if (isDisabled) {
      opacity = 0.75;
    }

    const width = fitContent ? 'auto' : '100%';

    let paddingY = size === 'small' ? theme.measures.sm : theme.measures.lg;
    let paddingX = size === 'small' ? theme.measures.lg : theme.measures['2xl'];

    if (variant === 'link') {
      paddingX = 0;
      paddingY = 0;
    }

    return css`
      width: ${width};
      padding: ${paddingY}px ${paddingX}px;
      border-radius: ${theme.roundedFull}px;
      background-color: ${variant === 'link'
        ? backgroundColor
        : theme.colors[backgroundColor]};
      opacity: ${opacity};
      overflow: hidden;

      flex-direction: row;
      justify-content: center;
      align-items: center;
    `;
  });

export const ButtonIos = styled.TouchableOpacity.attrs<ButtonProps>({
  activeOpacity: 0.5,
})((props) => getButtonStyles(props));

export const ButtonAndroid = styled.Pressable.attrs<ButtonProps>(
  ({ theme, variant, androidRippleRadius }) => ({
    android_ripple: {
      color:
        variant === 'primary'
          ? themes.light.colors.ripple
          : theme.colors.ripple,
      borderless: variant === 'link',
      foreground: variant !== 'link',
      radius: androidRippleRadius,
    },
    hitSlop: variant === 'link' ? theme.measures.md : 0,
  }),
)((props) => getButtonStyles(props));

export const Text = styled(Typography)<TextProps>(({
  theme,
  buttonVariant,
  isLoading,
  isDisabled,
}) => {
  const { color } = buttonVariants[buttonVariant];

  let opacity = 1;

  if (isLoading) {
    opacity = 0.9;
  }

  if (isDisabled) {
    opacity = 0.75;
  }

  return css`
    color: ${buttonVariant === 'primary' ? color : theme.colors[color]};
    font-weight: 600;
    text-align: center;
    opacity: ${opacity};
  `;
});
