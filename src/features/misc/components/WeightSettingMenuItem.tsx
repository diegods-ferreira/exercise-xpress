import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { WeightIcon } from 'lucide-react-native';

import { MenuList } from '@/components/elements';
import { SelectModal } from '@/components/modals';
import { useSettingsStore } from '@/stores';
import { AppSettings } from '@/types';

export function WeightSettingMenuItem() {
  const { t } = useTranslation();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const [weight, updateSetting] = useSettingsStore((state) => [
    state.weight,
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
        title={t('settingsPage.measuringUnitsGroup.weight.menuItemTitle')}
        value={`${t(`global.measuringUnits.weight.${weight}.plural`)} (${t(
          `global.measuringUnits.weight.${weight}.symbol`,
        )})`}
        onPress={() => bottomSheetRef.current?.present()}
      />

      <SelectModal
        ref={bottomSheetRef}
        title={t('settingsPage.measuringUnitsGroup.weight.selectModal.title')}
        selectedOption={weight}
        options={[
          {
            label: t('global.measuringUnits.weight.kilogram.plural'),
            helpText: t('global.measuringUnits.weight.kilogram.symbol'),
            value: 'kilogram',
          },
          {
            label: t('global.measuringUnits.weight.pound.plural'),
            helpText: t('global.measuringUnits.weight.pound.symbol'),
            value: 'pound',
          },
        ]}
        onSelect={onSelectLanguage}
        footerText={t(
          'settingsPage.measuringUnitsGroup.weight.selectModal.footerText',
        )}
      />
    </>
  );
}
