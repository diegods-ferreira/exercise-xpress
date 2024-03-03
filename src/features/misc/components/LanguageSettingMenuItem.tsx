import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { LanguagesIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { SelectModal } from '@/components/modals';
import { useSettingsStore } from '@/stores';
import { Locale } from '@/types';

const localeLabels: Record<Locale, string> = {
  en_US: 'English (US)',
  es_ES: 'Español (ES)',
  pt_BR: 'Português (BR)',
};

export function LanguageSettingMenuItem() {
  const { t } = useTranslation();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const [locale, updateSetting] = useSettingsStore((state) => [
    state.locale,
    state.updateSetting,
  ]);

  const onSelectLanguage = (selectedLanguage: Locale) => {
    updateSetting('locale', selectedLanguage);
    bottomSheetRef.current?.close();
  };

  return (
    <>
      <MenuList.Item
        icon={LanguagesIcon}
        title={t('settingsPage.generalGroup.language.menuItemTitle')}
        value={localeLabels[locale]}
        onPress={() => bottomSheetRef.current?.present()}
      />

      <SelectModal
        ref={bottomSheetRef}
        title={t('settingsPage.generalGroup.language.selectModal.title')}
        selectedOption={locale}
        options={[
          { label: localeLabels.en_US, value: 'en_US' },
          { label: localeLabels.es_ES, value: 'es_ES' },
          {
            label: localeLabels.pt_BR,
            value: 'pt_BR',
            helpText:
              'Os exercícios podem não estar totalmente traduzidos para esse idioma.',
          },
        ]}
        onSelect={onSelectLanguage}
        footerText={t(
          'settingsPage.generalGroup.language.selectModal.footerText',
        )}
      />
    </>
  );
}
