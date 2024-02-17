import { MoonIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { useColorSchemeStore, useI18nStore } from '@/stores';

export function ColorSchemeSettingMenuItem() {
  const [colorScheme, toggleColorScheme] = useColorSchemeStore((state) => [
    state.colorScheme,
    state.toggleColorScheme,
  ]);

  const { translate } = useI18nStore();

  return (
    <MenuList.ItemSwitch
      icon={MoonIcon}
      title={translate('settingsPage.generalGroup.darkTheme')}
      value={colorScheme === 'dark'}
      onPress={toggleColorScheme}
      onValueChange={toggleColorScheme}
    />
  );
}
