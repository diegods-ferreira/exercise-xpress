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

  return <TouchableOpacity {...props} style={styles.container} />;
}

export function IconButton({
  icon: Icon,
  isDisabled = false,
  onPress,
}: IconButtonProps) {
  const { theme } = useStyles();

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
