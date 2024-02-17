import { ScrollView } from 'react-native';

import { Typography } from '@/components/elements';
import { useStyles } from '@/hooks';
import { ProfileScreenRouteProps } from '@/types';

export function ProfileScreen({ navigation, route }: ProfileScreenRouteProps) {
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
      <Typography variant="h1">ProfileScreen</Typography>
    </ScrollView>
  );
}
