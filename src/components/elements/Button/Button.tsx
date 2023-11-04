import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components/native';

import * as S from './Button.styles';

type ButtonProps = Pick<RectButtonProps, 'onPress' | 'onLongPress'> & {
  title: string;
  variant?: S.ButtonProps['variant'];
  size?: S.ButtonProps['size'];
  isLoading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
};

export function Button({
  title,
  variant = 'primary',
  size = 'normal',
  isLoading = false,
  loadingText,
  isDisabled = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  const { color } = S.buttonVariants[variant];

  return (
    <S.Button
      enabled={!isDisabled && !isLoading}
      rippleColor={theme.colors.ripple}
      variant={variant}
      size={size}
      isLoading={isLoading}
      isDisabled={isDisabled}
      style={{ borderRadius: theme.borderRadius.full }}
      {...rest}
    >
      {isLoading && (
        <ActivityIndicator
          color={variant === 'primary' ? color : theme.colors[color]}
          size={RFValue(18)}
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
    </S.Button>
  );
}
