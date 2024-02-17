import { PropsWithChildren } from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { themes } from '@/config/styles/themes';
import { useStyles } from '@/hooks';

import { Typography } from '../Typography/Typography';
import {
  ButtonStylesProps,
  buttonStyles,
  buttonTextStyles,
  buttonVariants,
} from './Button.styles';

type ButtonBaseProps = ButtonStylesProps & {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  onLongPress?: () => void;
};

type ButtonProps = ButtonBaseProps & {
  title: string;
  loadingText?: string;
};

export function ButtonBase({
  style,
  ...props
}: PropsWithChildren<ButtonBaseProps>) {
  const { styles, theme } = useStyles(buttonStyles(props));

  const androidRippleColor =
    props.variant === 'primary'
      ? themes.light.colors.ripple
      : theme.colors.ripple;

  if (Platform.OS === 'android') {
    return (
      <Pressable
        {...props}
        style={[styles.container, style]}
        android_ripple={{
          color: androidRippleColor,
          borderless: props.variant === 'link',
          foreground: props.variant !== 'link',
          radius: props.androidRippleRadius,
        }}
      />
    );
  }

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, style]}
      activeOpacity={0.5}
    />
  );
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
  const { styles, theme } = useStyles(
    buttonTextStyles({ variant, isLoading, isDisabled }),
  );

  const { color } = buttonVariants[variant];

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

      <Typography
        variant={size === 'small' ? 'body2' : 'body1'}
        style={styles.text}
      >
        {isLoading && loadingText ? loadingText : title}
      </Typography>
    </ButtonBase>
  );
}
