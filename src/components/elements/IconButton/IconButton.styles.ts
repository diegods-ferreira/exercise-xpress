import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

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
    padding: ${RFValue(8)}px;
    background-color: ${theme.colors.bgOffset};
    opacity: ${opacity};
  `;
});
