import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  ChevronRightIcon,
  FileBadgeIcon,
  LandPlotIcon,
  LanguagesIcon,
  RulerIcon,
  SunMoonIcon,
  WeightIcon,
} from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { Switch, Typography } from '@/components/elements';
import { Locale } from '@/config/i18n';
import { useColorSchemeStore } from '@/stores/color-scheme';
import { useI18nStore } from '@/stores/i18n';
import { SettingsScreenRouteProps } from '@/types';

import { SelectModal } from '../../components/SelectModal/SelectModal';
import * as S from './SettingsScreen.styles';

const localeLabels: Record<Locale, string> = {
  en_US: 'English (US)',
  pt_BR: 'Português (BR)',
};

export function SettingsScreen({
  navigation,
  route,
}: SettingsScreenRouteProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [translate, locale, setLocale] = useI18nStore((state) => [
    state.translate,
    state.locale,
    state.setLocale,
  ]);

  const [colorScheme, toggleColorScheme] = useColorSchemeStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  const [showSelectLanguageModal, setShowSelectLanguageModal] = useState(false);

  const handleToggleSelectLanguageModal = () => {
    setShowSelectLanguageModal((prevState) => !prevState);
  };

  const onSelectLanguage = (selectedLanguage: Locale) => {
    setLocale(selectedLanguage);
    handleToggleSelectLanguageModal();
  };

  return (
    <S.Container style={{ paddingTop: insets.top + theme.measures['2xl'] }}>
      <Typography variant="h2">{translate('settingsPage.title')}</Typography>

      <S.SettingsGroupContainer>
        <S.SettingsGroupTitle variant="subtitle3">
          {translate('settingsPage.measuringUnitsGroup.title')}
        </S.SettingsGroupTitle>

        <S.SettingsWrapper>
          <S.SettingItem>
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

          <S.SettingItem>
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

          <S.SettingItemSeparator />

          <S.SettingItem>
            <S.SettingItemInfo>
              <RulerIcon
                size={theme.fontSizes.base}
                color={theme.colors.textSecondary}
              />

              <Typography>
                {translate('settingsPage.measuringUnitsGroup.bodyMeasurements')}
              </Typography>
            </S.SettingItemInfo>

            <S.SettingsValueWrapper>
              <Typography variant="subtitle1">
                {translate(
                  'global.measuringUnits.bodyMeasurements.centimeters.plural',
                )}{' '}
                (
                {translate(
                  'global.measuringUnits.bodyMeasurements.centimeters.symbol',
                )}
                )
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
          <S.SettingItem onPress={toggleColorScheme}>
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

          <S.SettingItemSeparator />

          <S.SettingItem onPress={handleToggleSelectLanguageModal}>
            <S.SettingItemInfo>
              <LanguagesIcon
                size={theme.fontSizes.base}
                color={theme.colors.textSecondary}
              />

              <Typography>
                {translate('settingsPage.generalGroup.language')}
              </Typography>
            </S.SettingItemInfo>

            <S.SettingsValueWrapper>
              <Typography variant="subtitle1">
                {localeLabels[locale]}
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

      <S.SettingsWrapper style={{ marginTop: theme.measures.lg }}>
        <S.SettingItem>
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

      <SelectModal
        visible={showSelectLanguageModal}
        value={locale}
        options={[
          { label: 'English (US)', value: 'en_US' },
          { label: 'Português (BR)', value: 'pt_BR' },
        ]}
        onClose={handleToggleSelectLanguageModal}
        onSelect={onSelectLanguage}
        footerText="Quando aberto pela primeira vez, o aplicativo carrega o idioma do seu dispositivo. Uma vez alterado, sempre será carregado o idioma selecionado pelo usuário."
      />
    </S.Container>
  );
}
