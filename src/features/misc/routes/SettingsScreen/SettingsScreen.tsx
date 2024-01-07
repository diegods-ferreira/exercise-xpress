import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  ChevronRightIcon,
  FileBadgeIcon,
  SunMoonIcon,
} from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { Switch, Typography } from '@/components/elements';
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
            <SunMoonIcon
              size={theme.fontSizes.base}
              color={theme.colors.textSecondary}
            />

            <Typography>Tema escuro</Typography>
          </S.SettingItemInfo>

          <Switch
            value={colorScheme === 'dark'}
            onValueChange={toggleColorScheme}
          />
        </S.SettingItem>
      </S.SettingsWrapper>

      <S.SettingsWrapper>
        <S.SettingItem rippleColor={theme.colors.ripple}>
          <S.SettingItemInfo>
            <FileBadgeIcon
              size={theme.fontSizes.base}
              color={theme.colors.textSecondary}
            />

            <Typography>Política de privacidade</Typography>
          </S.SettingItemInfo>

          <ChevronRightIcon
            size={theme.fontSizes.lg}
            color={theme.colors.textSecondary}
          />
        </S.SettingItem>
      </S.SettingsWrapper>
    </S.Container>
  );
}
