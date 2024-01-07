import { RectButton } from 'react-native-gesture-handler';

import styled, { css } from 'styled-components/native';

import { Panel } from '@/components/elements';

export const Container = styled.View(
  ({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: 0px ${theme.measures.xl}px;
    gap: ${theme.measures['2xl']}px;
  `,
);

export const SettingsWrapper = styled(Panel)(
  ({ theme }) => css`
    padding: 0px;
    overflow: hidden;
  `,
);

export const SettingItem = styled(RectButton)(
  ({ theme }) => css`
    padding: ${theme.measures.sm}px ${theme.measures['2xl']}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
);

export const SettingItemInfo = styled.View(
  ({ theme }) => css`
    flex-direction: row;
    align-items: center;
    gap: ${theme.measures.lg}px;
  `,
);
