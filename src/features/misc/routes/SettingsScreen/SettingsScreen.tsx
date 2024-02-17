import { useRef } from 'react';
import { View } from 'react-native';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import {
  FileBadgeIcon,
  LandPlotIcon,
  LanguagesIcon,
  MoonIcon,
  RulerIcon,
  WeightIcon,
} from 'lucide-react-native';

import logoImg from '@/assets/images/logo.png';
import { MenuList, Typography } from '@/components/elements';
import { SelectModal } from '@/components/modals';
import { Locale } from '@/config/i18n';
import { useStyles } from '@/hooks';
import { useColorSchemeStore } from '@/stores/color-scheme';
import { useI18nStore } from '@/stores/i18n';
import { SettingsScreenRouteProps } from '@/types';

import { settingsScreenStyles } from './SettingsScreen.styles';

const localeLabels: Record<Locale, string> = {
  en_US: 'English (US)',
  pt_BR: 'Português (BR)',
};

export function SettingsScreen({
  navigation,
  route,
}: SettingsScreenRouteProps) {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { styles, theme } = useStyles(settingsScreenStyles);

  const [translate, locale, setLocale] = useI18nStore((state) => [
    state.translate,
    state.locale,
    state.setLocale,
  ]);

  const [colorScheme, toggleColorScheme] = useColorSchemeStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  const onSelectLanguage = (selectedLanguage: Locale) => {
    setLocale(selectedLanguage);
    bottomSheetRef.current?.close();
  };

  return (
    <View style={styles.container}>
      <Typography variant="h2">{translate('settingsPage.title')}</Typography>

      <View style={styles.settingsGroupContainer}>
        <Typography variant="subtitle3" style={styles.settingsGroupTitle}>
          {translate('settingsPage.measuringUnitsGroup.title')}
        </Typography>

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
      </View>

      <View style={styles.settingsGroupContainer}>
        <Typography variant="subtitle3" style={styles.settingsGroupTitle}>
          {translate('settingsPage.generalGroup.title')}
        </Typography>

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
            onPress={() => bottomSheetRef.current?.present()}
          />
        </MenuList.Root>
      </View>

      <MenuList.Root style={{ marginTop: theme.measures.lg }}>
        <MenuList.Item
          icon={FileBadgeIcon}
          title={translate('global.privacyPolicy')}
          onPress={() => {}}
        />
      </MenuList.Root>

      <Image
        source={logoImg}
        alt="ExerciseXpress Logo"
        contentFit="contain"
        tintColor={theme.colors.text}
      />

      <SelectModal
        ref={bottomSheetRef}
        title="Selecione um idioma"
        selectedOption={locale}
        options={[
          { label: 'English (US)', value: 'en_US' },
          { label: 'Português (BR)', value: 'pt_BR' },
        ]}
        onSelect={onSelectLanguage}
        footerText="Quando aberto pela primeira vez, o aplicativo carrega o idioma do seu dispositivo. Uma vez alterado, sempre será carregado o idioma selecionado pelo usuário."
      />
    </View>
  );
}
