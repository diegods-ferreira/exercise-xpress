import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components/native';

import { Typography } from '@/components/elements';
import { HomeScreenRouteProps } from '@/types';

export function HomeScreen({ navigation, route }: HomeScreenRouteProps) {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingBottom: RFValue(48),
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
      <Typography variant="h1">HomeScreen</Typography>
    </ScrollView>
  );
}
