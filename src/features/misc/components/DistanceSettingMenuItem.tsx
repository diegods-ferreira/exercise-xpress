import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { LandPlotIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { SelectModal } from '@/components/modals';
import { useSettingsStore } from '@/stores';
import { AppSettings } from '@/types';

export function DistanceSettingMenuItem() {
  const { t } = useTranslation();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const [distance, updateSetting] = useSettingsStore((state) => [
    state.distance,
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
        title={t('settingsPage.measuringUnitsGroup.distance.menuItemTitle')}
        value={`${t(`global.measuringUnits.distance.${distance}.plural`)} (${t(
          `global.measuringUnits.distance.${distance}.symbol`,
        )})`}
        onPress={() => bottomSheetRef.current?.present()}
      />

      <SelectModal
        ref={bottomSheetRef}
        title={t('settingsPage.measuringUnitsGroup.distance.selectModal.title')}
        selectedOption={distance}
        options={[
          {
            label: t('global.measuringUnits.distance.meters.plural'),
            helpText: t('global.measuringUnits.distance.meters.symbol'),
            value: 'meters',
          },
          {
            label: t('global.measuringUnits.distance.miles.plural'),
            helpText: t('global.measuringUnits.distance.miles.symbol'),
            value: 'miles',
          },
        ]}
        onSelect={onSelectLanguage}
        footerText={t(
          'settingsPage.measuringUnitsGroup.distance.selectModal.footerText',
        )}
      />
    </>
  );
}
