import { Switch as RNSwitch, SwitchProps } from 'react-native';

import { useStyles } from '@/hooks';

export function Switch(props: SwitchProps) {
  const { theme } = useStyles();

  return (
    <RNSwitch
      {...props}
      ios_backgroundColor={theme.colors.background}
      thumbColor="#ffffff"
      trackColor={{
        false: theme.colors.background,
        true: theme.colors.secondary,
      }}
    />
  );
}
