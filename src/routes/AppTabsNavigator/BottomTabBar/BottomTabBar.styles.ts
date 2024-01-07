import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { BlurView } from 'expo-blur';
import styled, { css } from 'styled-components/native';

interface TabBarItemProps {
  isFocused: boolean;
}

export const Container = styled(BlurView)`
  width: 100%;

  flex-direction: row;

  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Button = styled(RectButton)`
  flex: 1;
  height: ${RFValue(48)}px;

  align-items: center;
  justify-content: center;
`;

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
