import { ScrollView, View } from 'react-native';

import { CheckCircle2Icon } from 'lucide-react-native';

import { Button, IconButton, Typography } from '@/components/elements';
import { useStyles } from '@/hooks';
import { HomeScreenRouteProps } from '@/types';

export function HomeScreen({ navigation, route }: HomeScreenRouteProps) {
  const { theme } = useStyles();

  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
      contentContainerStyle={{
        flex: 1,
        padding: theme.measures['4xl'],
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.measures.sm,
      }}
    >
      <Typography variant="h1">HomeScreen</Typography>

      <Button title="primary / primary" />
      <Button title="primary / secondary" variant="secondary" />
      <Button title="primary / neutral" variant="neutral" />
      <Button title="primary / link" variant="link" />

      <View style={{ flexDirection: 'row', gap: theme.measures.sm }}>
        <IconButton icon={CheckCircle2Icon} />
        <IconButton icon={CheckCircle2Icon} variant="primary" />
        <IconButton icon={CheckCircle2Icon} variant="secondary" />
      </View>
    </ScrollView>
  );
}
