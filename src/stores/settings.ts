import { create } from 'zustand';

import { getCurrentLocale, i18n } from '@/lib/i18next';
import { storage } from '@/lib/react-native-mmkv';
import { AppSettings } from '@/types';

type SettingsStoreData = AppSettings & {
  updateSetting: <T extends keyof AppSettings>(
    setting: T,
    value: AppSettings[T],
  ) => void;
};

const showWelcomeScreen = storage.getSettingValue('showWelcomeScreen');
const colorScheme = storage.getSettingValue('colorScheme');
const locale = getCurrentLocale();
const weight = storage.getSettingValue('weight');
const distance = storage.getSettingValue('distance');
const bodyMeasurements = storage.getSettingValue('bodyMeasurements');

export const useSettingsStore = create<SettingsStoreData>()((set, get) => ({
  showWelcomeScreen: showWelcomeScreen ?? true,
  colorScheme: colorScheme || 'dark',
  locale: locale || 'en_US',
  weight: weight || 'kilogram',
  distance: distance || 'meters',
  bodyMeasurements: bodyMeasurements || 'centimeters',
  updateSetting: (setting, value) => {
    if (setting === 'locale' && typeof value === 'string') {
      i18n.changeLanguage(value);
    }

    storage.setSettingValue(setting, value);
    set((state) => ({ ...state, [setting]: value }));
  },
}));
