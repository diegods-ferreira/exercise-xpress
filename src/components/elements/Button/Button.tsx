import { PropsWithChildren } from 'react';
import { ActivityIndicator, Platform } from 'react-native';

import { useTheme } from 'styled-components/native';

import * as S from './Button.styles';

type ButtonBaseProps = S.ButtonProps & {
  onPress: () => void;
  onLongPress?: () => void;
};

type ButtonProps = ButtonBaseProps & {
  title: string;
  loadingText?: string;
};

export function ButtonBase(props: PropsWithChildren<ButtonBaseProps>) {
  if (Platform.OS === 'android') {
    return <S.ButtonAndroid {...props} />;
  }

  return <S.ButtonIos {...props} />;
}

export function Button({
  title,
  variant = 'primary',
  size = 'normal',
  fitContent = false,
  isLoading = false,
  loadingText,
  isDisabled = false,
  onPress,
  onLongPress,
  androidRippleRadius,
}: ButtonProps) {
  const theme = useTheme();

  const { color } = S.buttonVariants[variant];

  return (
    <ButtonBase
      variant={variant}
      size={size}
      fitContent={fitContent}
      isDisabled={isDisabled || isLoading}
      isLoading={isLoading}
      onPress={onPress}
      onLongPress={onLongPress}
      androidRippleRadius={androidRippleRadius}
    >
      {isLoading && (
        <ActivityIndicator
          color={variant === 'primary' ? color : theme.colors[color]}
          size={theme.fontSizes.lg}
          style={{ marginRight: theme.measures.lg }}
        />
      )}

      <S.Text
        variant={size === 'small' ? 'body2' : 'body1'}
        buttonVariant={variant}
        isLoading={isLoading}
        isDisabled={isDisabled}
      >
        {isLoading && loadingText ? loadingText : title}
      </S.Text>
    </ButtonBase>
  );
}
