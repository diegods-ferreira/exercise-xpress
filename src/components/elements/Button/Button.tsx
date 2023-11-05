import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components/native';

import * as S from './Button.styles';

type ButtonProps = Pick<RectButtonProps, 'onPress' | 'onLongPress'> & {
  title: string;
  variant?: S.ButtonProps['variant'];
  size?: S.ButtonProps['size'];
  fitContent?: S.ButtonProps['fitContent'];
  isLoading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
};

export function Button({
  title,
  variant = 'primary',
  size = 'normal',
  fitContent = false,
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
      fitContent={fitContent}
      isLoading={isLoading}
      isDisabled={isDisabled}
      style={[{ borderRadius: theme.roundedFull }, theme.boxShadow]}
      {...rest}
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
    </S.Button>
  );
}
