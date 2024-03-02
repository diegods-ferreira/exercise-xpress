import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { Image } from 'expo-image';
import { FileBadgeIcon } from 'lucide-react-native';

import logoImg from '@/assets/images/logo.png';
import { MenuList, Typography } from '@/components/elements';
import { useStyles } from '@/hooks';
import { SettingsScreenRouteProps } from '@/types';

import { BodyMeasurementsSettingMenuItem } from '../../components/BodyMeasurementsSettingMenuItem';
import { ColorSchemeSettingMenuItem } from '../../components/ColorSchemeSettingMenuItem';
import { DistanceSettingMenuItem } from '../../components/DistanceSettingMenuItem';
import { LanguageSettingMenuItem } from '../../components/LanguageSettingMenuItem';
import { WeightSettingMenuItem } from '../../components/WeightSettingMenuItem';
import { settingsScreenStyles } from './SettingsScreen.styles';

export function SettingsScreen({
  navigation,
  route,
}: SettingsScreenRouteProps) {
  const { t } = useTranslation();

  const { styles, theme } = useStyles(settingsScreenStyles);

  return (
    <View style={styles.container}>
      <Typography variant="h2">{t('settingsPage.title')}</Typography>

      <View style={styles.settingsGroupContainer}>
        <Typography variant="subtitle3" style={styles.settingsGroupTitle}>
          {t('settingsPage.measuringUnitsGroup.title')}
        </Typography>

        <MenuList.Root>
          <WeightSettingMenuItem />
          <MenuList.ItemSeparator addIconOffset />
          <DistanceSettingMenuItem />
          <MenuList.ItemSeparator addIconOffset />
          <BodyMeasurementsSettingMenuItem />
        </MenuList.Root>
      </View>

      <View style={styles.settingsGroupContainer}>
        <Typography variant="subtitle3" style={styles.settingsGroupTitle}>
          {t('settingsPage.generalGroup.title')}
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
          title={t('global.privacyPolicy')}
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
