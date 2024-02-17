import { useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { RulerIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { SelectModal } from '@/components/modals';
import { useI18nStore, useSettingsStore } from '@/stores';
import { AppSettings } from '@/types';

export function BodyMeasurementsSettingMenuItem() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { translate } = useI18nStore();

  const [settings, updateSetting] = useSettingsStore((state) => [
    state.settings,
    state.updateSetting,
  ]);

  const onSelectLanguage = (
    selectedBodyMeasurement: AppSettings['bodyMeasurements'],
  ) => {
    updateSetting('bodyMeasurements', selectedBodyMeasurement);
    bottomSheetRef.current?.close();
  };

  return (
    <>
      <MenuList.Item
        icon={RulerIcon}
        title={translate(
          'settingsPage.measuringUnitsGroup.bodyMeasurements.menuItemTitle',
        )}
        value={`${translate(
          `global.measuringUnits.bodyMeasurements.${settings.bodyMeasurements}.plural`,
        )} (${translate(
          `global.measuringUnits.bodyMeasurements.${settings.bodyMeasurements}.symbol`,
        )})`}
        onPress={() => bottomSheetRef.current?.present()}
      />

      <SelectModal
        ref={bottomSheetRef}
        title={translate(
          'settingsPage.measuringUnitsGroup.bodyMeasurements.selectModal.title',
        )}
        selectedOption={settings.bodyMeasurements}
        options={[
          {
            label: translate(
              'global.measuringUnits.bodyMeasurements.centimeters.plural',
            ),
            helpText: translate(
              'global.measuringUnits.bodyMeasurements.centimeters.symbol',
            ),
            value: 'centimeters',
          },
          {
            label: translate(
              'global.measuringUnits.bodyMeasurements.inches.plural',
            ),
            helpText: translate(
              'global.measuringUnits.bodyMeasurements.inches.symbol',
            ),
            value: 'inches',
          },
        ]}
        onSelect={onSelectLanguage}
        footerText={translate(
          'settingsPage.measuringUnitsGroup.bodyMeasurements.selectModal.footerText',
        )}
      />
    </>
  );
}
