import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

import { Panel, Typography } from '@/components/elements';

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

export const SettingItem = styled(RectButton)(
  ({ theme }) => css`
    height: ${RFValue(40)}px;
    padding: ${theme.measures.xs}px ${theme.measures.xl}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
);

export const SettingItemSeparator = styled.View(
  ({ theme }) => css`
    width: 100%;
    height: ${RFValue(1)}px;
    background-color: ${theme.colors.ripple};
    margin-left: ${theme.measures['2xl'] + theme.measures.xl}px;
  `,
);

export const SettingItemInfo = styled.View(
  ({ theme }) => css`
    flex-direction: row;
    align-items: center;
    gap: ${theme.measures.lg}px;
  `,
);

export const SettingsValueWrapper = styled.View(
  ({ theme }) => css`
    flex-direction: row;
    align-items: center;
    gap: ${theme.measures.xs}px;
  `,
);
