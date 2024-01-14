import { Image } from 'expo-image';
import styled, { css } from 'styled-components/native';

import logoImg from '@/assets/images/logo.png';
import { ButtonBase, Panel, Typography } from '@/components/elements';

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

export const SettingsWrapper = styled(Panel)`
  padding: 0px;
  overflow: hidden;
`;

export const SettingItem = styled(ButtonBase).attrs({
  variant: 'secondary',
})(
  ({ theme }) => css`
    height: ${theme.measures['4xl']}px;
    padding: ${theme.measures.xs}px ${theme.measures.xl}px;
    overflow: visible;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
);

export const SettingItemSeparator = styled.View(
  ({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.ripple};
    margin-left: ${theme.measures['3xl'] + theme.measures.xl}px;
  `,
);

export const SettingItemInfo = styled.View(
  ({ theme }) => css`
    flex-direction: row;
    align-items: center;
    gap: ${theme.measures.xl}px;
  `,
);

export const SettingsValueWrapper = styled.View(
  ({ theme }) => css`
    flex-direction: row;
    align-items: center;
    gap: ${theme.measures.xs}px;
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
