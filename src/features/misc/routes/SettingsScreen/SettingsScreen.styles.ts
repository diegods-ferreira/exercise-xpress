import { Image } from 'expo-image';
import styled, { css } from 'styled-components/native';

import logoImg from '@/assets/images/logo.png';
import { Typography } from '@/components/elements';

export const Container = styled.View(
  ({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: 0px ${theme.measures.xl}px;
    gap: ${theme.measures['2xl']}px;
  `,
);

export const SettingsGroupContainer = styled.View(
  ({ theme }) => css`
    gap: ${theme.measures.sm}px;
  `,
);

export const SettingsGroupTitle = styled(Typography)(
  ({ theme }) => css`
    margin-left: ${theme.measures.xl}px;
  `,
);

export const LogoImage = styled(Image).attrs(({ theme }) => ({
  source: logoImg,
  alt: 'ExerciseXpress logo',
  contentFit: 'contain',
  tintColor: theme.colors.text,
}))(
  ({ theme }) => css`
    width: 100%;
    height: ${theme.measures['5xl']}px;
    margin-top: auto;
    opacity: 0.25;
  `,
);
