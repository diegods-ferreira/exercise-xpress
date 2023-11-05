import { RectButton } from 'react-native-gesture-handler';

import styled, { css } from 'styled-components/native';

import { themes } from '@/config/styles/themes';

import { Typography } from '../Typography/Typography';

type Theme = typeof themes.dark;

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  size: 'small' | 'normal';
  fitContent: boolean;
  isLoading: boolean;
  isDisabled: boolean;
};

type TextProps = {
  buttonVariant: ButtonProps['variant'];
  isLoading: boolean;
  isDisabled: boolean;
};

type ButtonVariantConfig = {
  backgroundColor: keyof Theme['colors'];
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
};

export const Button = styled(RectButton)<ButtonProps>(({
  theme,
  variant,
  size,
  fitContent,
  isLoading,
  isDisabled,
}) => {
  const { backgroundColor } = buttonVariants[variant];

  let opacity = 1;

  if (isLoading) {
    opacity = 0.9;
  }

  if (isDisabled) {
    opacity = 0.75;
  }

  const width = fitContent ? 'auto' : '100%';
  const paddingY = size === 'small' ? theme.measures.sm : theme.measures.lg;
  const paddingX = size === 'small' ? theme.measures.lg : theme.measures['2xl'];

  return css`
    width: ${width};
    padding: ${paddingY}px ${paddingX}px;
    background-color: ${theme.colors[backgroundColor]};
    opacity: ${opacity};

    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;
});

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
