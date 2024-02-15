import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  FileBadgeIcon,
  LandPlotIcon,
  LanguagesIcon,
  MoonIcon,
  RulerIcon,
  WeightIcon,
} from 'lucide-react-native';
import { useTheme } from 'styled-components/native';

import { MenuList, Typography } from '@/components/elements';
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

        <MenuList.Root>
          <MenuList.Item
            icon={WeightIcon}
            title={translate('settingsPage.measuringUnitsGroup.weight')}
            value={`${translate(
              'global.measuringUnits.weight.kilogram.plural',
            )} (${translate('global.measuringUnits.weight.kilogram.symbol')})`}
            onPress={() => {}}
          />

          <MenuList.ItemSeparator addIconOffset />

          <MenuList.Item
            icon={LandPlotIcon}
            title={translate('settingsPage.measuringUnitsGroup.distance')}
            value={`${translate(
              'global.measuringUnits.distance.meters.plural',
            )} (${translate('global.measuringUnits.distance.meters.symbol')})`}
            onPress={() => {}}
          />

          <MenuList.ItemSeparator addIconOffset />

          <MenuList.Item
            icon={RulerIcon}
            title={translate(
              'settingsPage.measuringUnitsGroup.bodyMeasurements',
            )}
            value={`${translate(
              'global.measuringUnits.bodyMeasurements.centimeters.plural',
            )} (${translate(
              'global.measuringUnits.bodyMeasurements.centimeters.symbol',
            )})`}
            onPress={() => {}}
          />
        </MenuList.Root>
      </S.SettingsGroupContainer>

      <S.SettingsGroupContainer>
        <S.SettingsGroupTitle variant="subtitle3">
          {translate('settingsPage.generalGroup.title')}
        </S.SettingsGroupTitle>

        <MenuList.Root>
          <MenuList.ItemSwitch
            icon={MoonIcon}
            title={translate('settingsPage.generalGroup.darkTheme')}
            value={colorScheme === 'dark'}
            onPress={toggleColorScheme}
            onValueChange={toggleColorScheme}
          />

          <MenuList.ItemSeparator addIconOffset />

          <MenuList.Item
            icon={LanguagesIcon}
            title={translate('settingsPage.generalGroup.language')}
            value={localeLabels[locale]}
            onPress={handleToggleSelectLanguageModal}
          />
        </MenuList.Root>
      </S.SettingsGroupContainer>

      <MenuList.Root style={{ marginTop: theme.measures.lg }}>
        <MenuList.Item
          icon={FileBadgeIcon}
          title={translate('global.privacyPolicy')}
          onPress={() => {}}
        />
      </MenuList.Root>

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
