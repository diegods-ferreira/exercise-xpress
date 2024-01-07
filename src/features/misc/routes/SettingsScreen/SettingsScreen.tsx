import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  ChevronRightIcon,
  FileBadgeIcon,
  LandPlotIcon,
  SunMoonIcon,
  WeightIcon,
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

      <S.SettingsGroupContainer>
        <S.SettingsGroupTitle variant="subtitle3">
          Unidades de medida
        </S.SettingsGroupTitle>

        <S.SettingsWrapper>
          <S.SettingItem rippleColor={theme.colors.ripple}>
            <S.SettingItemInfo>
              <WeightIcon
                size={theme.fontSizes.base}
                color={theme.colors.textSecondary}
              />

              <Typography>Peso</Typography>
            </S.SettingItemInfo>

            <S.SettingsValueWrapper>
              <Typography variant="subtitle1">Quilogramas (Kg)</Typography>

              <ChevronRightIcon
                size={theme.fontSizes.xl}
                color={theme.colors.textSecondary}
                opacity={0.75}
              />
            </S.SettingsValueWrapper>
          </S.SettingItem>

          <S.SettingItemSeparator />

          <S.SettingItem rippleColor={theme.colors.ripple}>
            <S.SettingItemInfo>
              <LandPlotIcon
                size={theme.fontSizes.base}
                color={theme.colors.textSecondary}
              />

              <Typography>Distância</Typography>
            </S.SettingItemInfo>

            <S.SettingsValueWrapper>
              <Typography variant="subtitle1">Métrico</Typography>

              <ChevronRightIcon
                size={theme.fontSizes.xl}
                color={theme.colors.textSecondary}
                opacity={0.75}
              />
            </S.SettingsValueWrapper>
          </S.SettingItem>
        </S.SettingsWrapper>
      </S.SettingsGroupContainer>

      <S.SettingsGroupContainer>
        <S.SettingsGroupTitle variant="subtitle3">Geral</S.SettingsGroupTitle>

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
      </S.SettingsGroupContainer>

      <S.SettingsWrapper style={{ marginTop: theme.measures.lg }}>
        <S.SettingItem rippleColor={theme.colors.ripple}>
          <S.SettingItemInfo>
            <FileBadgeIcon
              size={theme.fontSizes.base}
              color={theme.colors.textSecondary}
            />

            <Typography>Política de privacidade</Typography>
          </S.SettingItemInfo>

          <ChevronRightIcon
            size={theme.fontSizes.xl}
            color={theme.colors.textSecondary}
            opacity={0.75}
          />
        </S.SettingItem>
      </S.SettingsWrapper>
    </S.Container>
  );
}
