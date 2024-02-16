import { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { LinearGradientProps } from 'expo-linear-gradient';

import { useStyles } from '@/hooks';

import { panelStyles } from './Panel.styles';

type PanelProps = Omit<LinearGradientProps, 'colors'>;

export function Panel({
  children,
  style,
  ...rest
}: PropsWithChildren<PanelProps>) {
  const { styles } = useStyles(panelStyles);

  return (
    <View {...rest} style={[styles.container, style]}>
      {children}
    </View>
  );
}
