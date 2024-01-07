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
import { useI18nStore } from '@/stores/i18n';
import { SettingsScreenRouteProps } from '@/types';

import * as S from './SettingsScreen.styles';

export function SettingsScreen({
  navigation,
  route,
}: SettingsScreenRouteProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const translate = useI18nStore((state) => state.translate);

  const [colorScheme, toggleColorScheme] = useColorSchemeStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  return (
    <S.Container style={{ paddingTop: insets.top + theme.measures['2xl'] }}>
      <Typography variant="h2">{translate('settingsPage.title')}</Typography>

      <S.SettingsGroupContainer>
        <S.SettingsGroupTitle variant="subtitle3">
          {translate('settingsPage.measuringUnitsGroup.title')}
        </S.SettingsGroupTitle>

        <S.SettingsWrapper>
          <S.SettingItem rippleColor={theme.colors.ripple}>
            <S.SettingItemInfo>
              <WeightIcon
                size={theme.fontSizes.base}
                color={theme.colors.textSecondary}
              />

              <Typography>
                {translate('settingsPage.measuringUnitsGroup.weight')}
              </Typography>
            </S.SettingItemInfo>

            <S.SettingsValueWrapper>
              <Typography variant="subtitle1">
                {translate('global.measuringUnits.weight.kilogram.plural')} (
                {translate('global.measuringUnits.weight.kilogram.symbol')})
              </Typography>

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

              <Typography>
                {translate('settingsPage.measuringUnitsGroup.distance')}
              </Typography>
            </S.SettingItemInfo>

            <S.SettingsValueWrapper>
              <Typography variant="subtitle1">
                {translate('global.measuringUnits.distance.meters.plural')} (
                {translate('global.measuringUnits.distance.meters.symbol')})
              </Typography>

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
        <S.SettingsGroupTitle variant="subtitle3">
          {translate('settingsPage.generalGroup.title')}
        </S.SettingsGroupTitle>

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

              <Typography>
                {translate('settingsPage.generalGroup.darkTheme')}
              </Typography>
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

            <Typography>{translate('global.privacyPolicy')}</Typography>
          </S.SettingItemInfo>

          <ChevronRightIcon
            size={theme.fontSizes.xl}
            color={theme.colors.textSecondary}
            opacity={0.75}
          />
        </S.SettingItem>
      </S.SettingsWrapper>

      <S.LogoImage style={{ marginBottom: insets.bottom + 120 }} />
    </S.Container>
  );
}
