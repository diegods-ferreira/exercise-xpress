import { RectButton } from 'react-native-gesture-handler';

import styled, { css } from 'styled-components/native';

import { themes } from '@/config/styles/themes';

import { Typography } from '../Typography/Typography';

type Theme = typeof themes.dark;

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  size: 'small' | 'normal';
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

  const paddingY = size === 'small' ? theme.measures.md : theme.measures.xl;

  const paddingX = size === 'small' ? theme.measures.lg : theme.measures['2xl'];

  return css`
    width: 100%;
    padding: ${paddingY}px ${paddingX}px;
    background-color: ${theme.colors[backgroundColor]};
    opacity: ${opacity};

    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${theme.measures.lg}px;
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
    opacity: ${opacity};
  `;
});
