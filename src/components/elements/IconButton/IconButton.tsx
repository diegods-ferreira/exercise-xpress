import { PropsWithChildren } from 'react';
import { Platform, Pressable, TouchableOpacity } from 'react-native';

import { LucideIcon } from 'lucide-react-native';

import { useStyles } from '@/hooks';

import { IconButtonStylesProps, iconButtonStyles } from './IconButton.styles';

type ButtonBaseProps = IconButtonStylesProps & {
  onPress: () => void;
};

type IconButtonProps = ButtonBaseProps & {
  icon: LucideIcon;
};

function ButtonBase(props: PropsWithChildren<ButtonBaseProps>) {
  const { styles, theme } = useStyles(iconButtonStyles(props));

  if (Platform.OS === 'android') {
    return (
      <Pressable
        {...props}
        style={styles.container}
        android_ripple={{
          color: theme.colors.ripple,
          borderless: true,
          radius: theme.measures['2xl'] + theme.measures['2xl'],
        }}
      />
    );
  }

  return (
    <TouchableOpacity {...props} style={styles.container} activeOpacity={0.5} />
  );
}

export function IconButton({
  icon: Icon,
  variant = 'neutral',
  isDisabled = false,
  onPress,
}: IconButtonProps) {
  const { styles, theme } = useStyles(
    iconButtonStyles({ variant, isDisabled }),
  );

  return (
    <ButtonBase variant={variant} isDisabled={isDisabled} onPress={onPress}>
      <Icon size={theme.fontSizes.xl} style={styles.icon} />
    </ButtonBase>
  );
}
