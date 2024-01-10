import { PropsWithChildren } from 'react';
import { Platform } from 'react-native';

import { LucideIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import * as S from './IconButton.styles';

type ButtonBaseProps = S.IconButtonProps & {
  onPress: () => void;
};

type IconButtonProps = ButtonBaseProps & {
  icon: LucideIcon;
};

function ButtonBase(props: PropsWithChildren<ButtonBaseProps>) {
  if (Platform.OS === 'android') {
    return <S.ButtonAndroid {...props} />;
  }

  return <S.ButtonIos {...props} />;
}

export function IconButton({
  icon: Icon,
  isDisabled = false,
  onPress,
}: IconButtonProps) {
  const theme = useTheme();

  return (
    <ButtonBase isDisabled={isDisabled} onPress={onPress}>
      <Icon
        size={theme.fontSizes.xl}
        color={theme.colors.text}
        style={{ opacity: isDisabled ? 0.75 : 1 }}
      />
    </ButtonBase>
  );
}
