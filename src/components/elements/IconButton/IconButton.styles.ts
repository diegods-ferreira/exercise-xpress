import { RectButton } from 'react-native-gesture-handler';

import styled, { css } from 'styled-components/native';

type ContainerProps = {
  isDisabled: boolean;
};

export const Container = styled(RectButton)<ContainerProps>(({
  theme,
  isDisabled,
}) => {
  const opacity = isDisabled ? 0.75 : 1;

  return css`
    padding: ${theme.measures.md}px;
    background-color: ${theme.colors.bgOffset};
    opacity: ${opacity};
  `;
});
