import styled, { css } from 'styled-components/native';

export type IconButtonProps = {
  isDisabled?: boolean;
};

const getIconButtonStyles = ({ isDisabled = false }: IconButtonProps) =>
  css(({ theme }) => {
    const opacity = isDisabled ? 0.75 : 1;

    return css`
      padding: ${theme.measures.md}px;
      background-color: ${theme.colors.bgOffset};
      border-radius: ${theme.roundedFull}px;
      opacity: ${opacity};
    `;
  });

export const ButtonIos = styled.TouchableOpacity.attrs<IconButtonProps>({
  activeOpacity: 0.5,
})((props) => getIconButtonStyles(props));

export const ButtonAndroid = styled.Pressable.attrs<IconButtonProps>(
  ({ theme }) => ({
    android_ripple: {
      color: theme.colors.ripple,
      borderless: true,
      radius: theme.measures['2xl'] + theme.measures['2xl'],
    },
  }),
)((props) => getIconButtonStyles(props));
