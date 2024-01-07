import { Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SunMoonIcon } from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { Typography } from '@/components/elements';
import { useColorSchemeStore } from '@/stores/color-scheme';
import { SettingsScreenRouteProps } from '@/types';

import * as S from './SettingsScreen.styles';

export function SettingsScreen({
  navigation,
  route,
}: SettingsScreenRouteProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [colorScheme, toggleColorScheme] = useColorSchemeStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  return (
    <S.Container style={{ paddingTop: insets.top + theme.measures['2xl'] }}>
      <Typography variant="h2">Ajustes</Typography>

      <S.SettingsWrapper>
        <S.SettingItem
          rippleColor={theme.colors.ripple}
          onPress={toggleColorScheme}
        >
          <S.SettingItemInfo>
            <SunMoonIcon color={theme.colors.textSecondary} />

            <Typography>Tema escuro</Typography>
          </S.SettingItemInfo>

          <Switch
            value={colorScheme === 'dark'}
            ios_backgroundColor={theme.colors.background}
            thumbColor="#ffffff"
            trackColor={{
              false: theme.colors.background,
              true: theme.colors.primary,
            }}
            onValueChange={toggleColorScheme}
          />
        </S.SettingItem>
      </S.SettingsWrapper>
    </S.Container>
  );
}
