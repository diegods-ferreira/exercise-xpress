import { RectButtonProps } from 'react-native-gesture-handler';

import { LucideIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import * as S from './IconButton.styles';

type IconButtonProps = Pick<RectButtonProps, 'onPress' | 'onLongPress'> & {
  icon: LucideIcon;
  isDisabled?: boolean;
};

export function IconButton({
  icon: Icon,
  isDisabled = false,
  ...rest
}: IconButtonProps) {
  const theme = useTheme();

  return (
    <S.Container
      isDisabled={isDisabled}
      rippleColor={theme.colors.ripple}
      style={[{ borderRadius: theme.roundedFull }, theme.boxShadow]}
      {...rest}
    >
      <Icon
        size={theme.fontSizes.xl}
        color={theme.colors.text}
        style={{ opacity: isDisabled ? 0.75 : 1 }}
      />
    </S.Container>
  );
}
