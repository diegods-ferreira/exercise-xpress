import { BlurView } from 'expo-blur';
import styled, { css } from 'styled-components/native';

import { ButtonBase } from '@/components/elements';

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
    align-items: center;

    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
  `,
);

export const TabBarButton = styled(ButtonBase).attrs({
  variant: 'secondary',
})(
  ({ theme }) => css`
    flex: 1;
    background-color: transparent;
    padding: ${theme.measures.xl}px 0px;

    flex-direction: column;
  `,
);

export const MenuName = styled.Text<TabBarItemProps>`
  ${({ isFocused, theme }) => css`
    font-size: ${theme.fontSizes.xxs}px;
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
    height: 90%;
    aspect-ratio: 1 / 1;

    justify-content: center;
    align-items: center;
  `,
);
