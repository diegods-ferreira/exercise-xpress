import { ScrollView } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Typography } from '@/components/elements';
import { HomeScreenRouteProps } from '@/types';

export function HomeScreen({ navigation, route }: HomeScreenRouteProps) {
  const theme = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
      contentContainerStyle={{
        flex: 1,
        paddingBottom: theme.measures['4xl'],
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1">HomeScreen</Typography>
    </ScrollView>
  );
}
