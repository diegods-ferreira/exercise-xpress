import { View } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Typography } from '@/components/elements';
import { SettingsScreenRouteProps } from '@/types';

export function SettingsScreen({
  navigation,
  route,
}: SettingsScreenRouteProps) {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1">SettingsScreen</Typography>
    </View>
  );
}
