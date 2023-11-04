import { RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

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
      style={[{ borderRadius: theme.borderRadius.full }, theme.boxShadow]}
      {...rest}
    >
      <Icon
        size={RFValue(20)}
        color={theme.colors.text}
        style={{ opacity: isDisabled ? 0.75 : 1 }}
      />
    </S.Container>
  );
}
