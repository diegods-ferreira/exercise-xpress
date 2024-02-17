import { useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { WeightIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { SelectModal } from '@/components/modals';
import { useI18nStore, useSettingsStore } from '@/stores';
import { AppSettings } from '@/types';

export function WeightSettingMenuItem() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { translate } = useI18nStore();

  const [settings, updateSetting] = useSettingsStore((state) => [
    state.settings,
    state.updateSetting,
  ]);

  const onSelectLanguage = (selectedWeight: AppSettings['weight']) => {
    updateSetting('weight', selectedWeight);
    bottomSheetRef.current?.close();
  };

  return (
    <>
      <MenuList.Item
        icon={WeightIcon}
        title={translate(
          'settingsPage.measuringUnitsGroup.weight.menuItemTitle',
        )}
        value={`${translate(
          `global.measuringUnits.weight.${settings.weight}.plural`,
        )} (${translate(
          `global.measuringUnits.weight.${settings.weight}.symbol`,
        )})`}
        onPress={() => bottomSheetRef.current?.present()}
      />

      <SelectModal
        ref={bottomSheetRef}
        title={translate(
          'settingsPage.measuringUnitsGroup.weight.selectModal.title',
        )}
        selectedOption={settings.weight}
        options={[
          {
            label: translate('global.measuringUnits.weight.kilogram.plural'),
            helpText: translate('global.measuringUnits.weight.kilogram.symbol'),
            value: 'kilogram',
          },
          {
            label: translate('global.measuringUnits.weight.pound.plural'),
            helpText: translate('global.measuringUnits.weight.pound.symbol'),
            value: 'pound',
          },
        ]}
        onSelect={onSelectLanguage}
        footerText={translate(
          'settingsPage.measuringUnitsGroup.weight.selectModal.footerText',
        )}
      />
    </>
  );
}
