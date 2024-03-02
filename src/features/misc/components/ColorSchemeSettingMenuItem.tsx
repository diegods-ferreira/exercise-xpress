import { useTranslation } from 'react-i18next';

import { MoonIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { useColorSchemeStore } from '@/stores';

export function ColorSchemeSettingMenuItem() {
  const { t } = useTranslation();

  const [colorScheme, toggleColorScheme] = useColorSchemeStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  return (
    <MenuList.ItemSwitch
      icon={MoonIcon}
      title={t('settingsPage.generalGroup.darkTheme')}
      value={colorScheme === 'dark'}
      onPress={toggleColorScheme}
      onValueChange={toggleColorScheme}
    />
  );
}
