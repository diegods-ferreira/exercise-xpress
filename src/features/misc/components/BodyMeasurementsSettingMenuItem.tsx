import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { RulerIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { SelectModal } from '@/components/modals';
import { useSettingsStore } from '@/stores';
import { AppSettings } from '@/types';

export function BodyMeasurementsSettingMenuItem() {
  const { t } = useTranslation();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

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
        title={t(
          'settingsPage.measuringUnitsGroup.bodyMeasurements.menuItemTitle',
        )}
        value={`${t(
          `global.measuringUnits.bodyMeasurements.${settings.bodyMeasurements}.plural`,
        )} (${t(
          `global.measuringUnits.bodyMeasurements.${settings.bodyMeasurements}.symbol`,
        )})`}
        onPress={() => bottomSheetRef.current?.present()}
      />

      <SelectModal
        ref={bottomSheetRef}
        title={t(
          'settingsPage.measuringUnitsGroup.bodyMeasurements.selectModal.title',
        )}
        selectedOption={settings.bodyMeasurements}
        options={[
          {
            label: t(
              'global.measuringUnits.bodyMeasurements.centimeters.plural',
            ),
            helpText: t(
              'global.measuringUnits.bodyMeasurements.centimeters.symbol',
            ),
            value: 'centimeters',
          },
          {
            label: t('global.measuringUnits.bodyMeasurements.inches.plural'),
            helpText: t('global.measuringUnits.bodyMeasurements.inches.symbol'),
            value: 'inches',
          },
        ]}
        onSelect={onSelectLanguage}
        footerText={t(
          'settingsPage.measuringUnitsGroup.bodyMeasurements.selectModal.footerText',
        )}
      />
    </>
  );
}
