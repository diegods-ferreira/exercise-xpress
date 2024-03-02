import { create } from 'zustand';

import { storage } from '@/lib/react-native-mmkv';
import { AppSettings } from '@/types';

type SettingsStoreData = {
  settings: AppSettings;
  updateSetting: <T extends keyof AppSettings>(
    setting: T,
    value: AppSettings[T],
  ) => void;
};

const loadSettings = () => {
  const defaultSettings: AppSettings = {
    showWelcomeScreen: true,
    weight: 'kilogram',
    distance: 'meters',
    bodyMeasurements: 'centimeters',
  };

  const userSettings = storage.getSettings();

  return { ...defaultSettings, ...userSettings };
};

export const useSettingsStore = create<SettingsStoreData>()((set, get) => ({
  settings: loadSettings(),
  updateSetting: (setting, value) => {
    const { settings } = get();
    settings[setting] = value;

    storage.setSettings(settings);
    set(() => ({ settings }));
  },
}));
