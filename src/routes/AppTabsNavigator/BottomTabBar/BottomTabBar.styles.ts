import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { BlurView } from 'expo-blur';
import styled, { css } from 'styled-components/native';

interface TabBarItemProps {
  isFocused: boolean;
}

export const Container = styled(BlurView)(
  ({ theme }) => css`
    width: 100%;
    border-top-left-radius: ${theme.measures['2xl']}px;
    border-top-right-radius: ${theme.measures['2xl']}px;
    overflow: hidden;

    flex-direction: row;

    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
  `,
);

export const Button = styled(RectButton)(
  ({ theme }) => css`
    flex: 1;
    padding: ${theme.measures.xl}px 0px;

    align-items: center;
    justify-content: center;
    gap: ${theme.measures.xs}px;
  `,
);

export const MenuName = styled.Text<TabBarItemProps>`
  ${({ isFocused, theme }) => css`
    font-size: ${RFValue(9)}px;
    color: ${isFocused ? theme.colors.primary : theme.colors.textSecondary};

    ${isFocused &&
    css`
      font-weight: bold;
    `}
  `}
`;

export const ActionButton = styled.TouchableOpacity(
  ({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.roundedFull}px;
    margin: ${theme.measures.xs}px;
    aspect-ratio: 1 / 1;

    justify-content: center;
    align-items: center;
  `,
);
