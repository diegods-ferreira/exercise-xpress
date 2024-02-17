import { View } from 'react-native';

import { Image } from 'expo-image';
import { FileBadgeIcon, RulerIcon } from 'lucide-react-native';

import logoImg from '@/assets/images/logo.png';
import { MenuList, Typography } from '@/components/elements';
import { useStyles } from '@/hooks';
import { useI18nStore } from '@/stores/i18n';
import { SettingsScreenRouteProps } from '@/types';

import { ColorSchemeSettingMenuItem } from '../../components/ColorSchemeSettingMenuItem';
import { DistanceSettingMenuItem } from '../../components/DistanceSettingMenuItem';
import { LanguageSettingMenuItem } from '../../components/LanguageSettingMenuItem';
import { WeightSettingMenuItem } from '../../components/WeightSettingMenuItem';
import { settingsScreenStyles } from './SettingsScreen.styles';

export function SettingsScreen({
  navigation,
  route,
}: SettingsScreenRouteProps) {
  const { styles, theme } = useStyles(settingsScreenStyles);

  const { translate } = useI18nStore();

  return (
    <View style={styles.container}>
      <Typography variant="h2">{translate('settingsPage.title')}</Typography>

      <View style={styles.settingsGroupContainer}>
        <Typography variant="subtitle3" style={styles.settingsGroupTitle}>
          {translate('settingsPage.measuringUnitsGroup.title')}
        </Typography>

        <MenuList.Root>
          <WeightSettingMenuItem />

          <MenuList.ItemSeparator addIconOffset />

          <DistanceSettingMenuItem />

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
          <ColorSchemeSettingMenuItem />
          <MenuList.ItemSeparator addIconOffset />
          <LanguageSettingMenuItem />
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
    </View>
  );
}
