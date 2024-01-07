import { Switch as RNSwitch, SwitchProps } from 'react-native';

import { useTheme } from 'styled-components/native';

export function Switch(props: SwitchProps) {
  const theme = useTheme();

  return (
    <RNSwitch
      {...props}
      ios_backgroundColor={theme.colors.background}
      thumbColor="#ffffff"
      trackColor={{
        false: theme.colors.background,
        true: theme.colors.primary,
      }}
    />
  );
}
