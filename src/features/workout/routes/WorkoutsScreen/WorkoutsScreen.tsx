import { ScrollView } from 'react-native';

import { Typography } from '@/components/elements';
import { useStyles } from '@/hooks';
import { WorkoutsScreenRouteProps } from '@/types';

export function WorkoutsScreen({
  navigation,
  route,
}: WorkoutsScreenRouteProps) {
  const { theme } = useStyles();

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
      <Typography variant="h1">WorkoutsScreen</Typography>
    </ScrollView>
  );
}
