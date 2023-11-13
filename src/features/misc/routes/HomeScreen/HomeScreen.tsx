import { View } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Typography } from '@/components/elements';
import { HomeScreenRouteProps } from '@/types';

export function HomeScreen({ navigation, route }: HomeScreenRouteProps) {
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
      <Typography variant="h1">HomeScreen</Typography>
    </View>
  );
}
