import { useRef } from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { LandPlotIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { SelectModal } from '@/components/modals';
import { useI18nStore, useSettingsStore } from '@/stores';
import { AppSettings } from '@/types';

export function DistanceSettingMenuItem() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { translate } = useI18nStore();

  const [settings, updateSetting] = useSettingsStore((state) => [
    state.settings,
    state.updateSetting,
  ]);

  const onSelectLanguage = (selectedDistance: AppSettings['distance']) => {
    updateSetting('distance', selectedDistance);
    bottomSheetRef.current?.close();
  };

  return (
    <>
      <MenuList.Item
        icon={LandPlotIcon}
        title={translate(
          'settingsPage.measuringUnitsGroup.distance.menuItemTitle',
        )}
        value={`${translate(
          `global.measuringUnits.distance.${settings.distance}.plural`,
        )} (${translate(
          `global.measuringUnits.distance.${settings.distance}.symbol`,
        )})`}
        onPress={() => bottomSheetRef.current?.present()}
      />

      <SelectModal
        ref={bottomSheetRef}
        title={translate(
          'settingsPage.measuringUnitsGroup.distance.selectModal.title',
        )}
        selectedOption={settings.distance}
        options={[
          {
            label: translate('global.measuringUnits.distance.meters.plural'),
            helpText: translate('global.measuringUnits.distance.meters.symbol'),
            value: 'meters',
          },
          {
            label: translate('global.measuringUnits.distance.miles.plural'),
            helpText: translate('global.measuringUnits.distance.miles.symbol'),
            value: 'miles',
          },
        ]}
        onSelect={onSelectLanguage}
        footerText={translate(
          'settingsPage.measuringUnitsGroup.distance.selectModal.footerText',
        )}
      />
    </>
  );
}
