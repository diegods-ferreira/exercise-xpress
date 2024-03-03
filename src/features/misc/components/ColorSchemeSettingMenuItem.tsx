import { useTranslation } from 'react-i18next';

import { MoonIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { useSettingsStore } from '@/stores';
import { ColorScheme } from '@/types';

export function ColorSchemeSettingMenuItem() {
  const { t } = useTranslation();

  const [colorScheme, updateSetting] = useSettingsStore((state) => [
    state.colorScheme,
    state.updateSetting,
  ]);

  const handleToggleColorScheme = () => {
    const newColorScheme: ColorScheme =
      colorScheme === 'dark' ? 'light' : 'dark';

    updateSetting('colorScheme', newColorScheme);
  };

  return (
    <MenuList.ItemSwitch
      icon={MoonIcon}
      title={t('settingsPage.generalGroup.darkTheme')}
      value={colorScheme === 'dark'}
      onPress={handleToggleColorScheme}
      onValueChange={handleToggleColorScheme}
    />
  );
}
