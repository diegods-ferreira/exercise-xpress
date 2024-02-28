import { useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { LanguagesIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { SelectModal } from '@/components/modals';
import { Locale } from '@/config/i18n';
import { useI18nStore } from '@/stores';

const localeLabels: Record<Locale, string> = {
  en_US: 'English (US)',
  es_ES: 'Español (ES)',
  pt_BR: 'Português (BR)',
};

export function LanguageSettingMenuItem() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { locale, setLocale, translate } = useI18nStore();

  const onSelectLanguage = (selectedLanguage: Locale) => {
    setLocale(selectedLanguage);
    bottomSheetRef.current?.close();
  };

  return (
    <>
      <MenuList.Item
        icon={LanguagesIcon}
        title={translate('settingsPage.generalGroup.language.menuItemTitle')}
        value={localeLabels[locale]}
        onPress={() => bottomSheetRef.current?.present()}
      />

      <SelectModal
        ref={bottomSheetRef}
        title={translate(
          'settingsPage.generalGroup.language.selectModal.title',
        )}
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
        footerText={translate(
          'settingsPage.generalGroup.language.selectModal.footerText',
        )}
      />
    </>
  );
}
